//import jwt from 'jsonwebtoken'
//import axios from 'axios'
//import { hash, hashPassword, randomString, verifyPassword } from '../utils/crypto.mjs'
//import { clean, asJson } from '../utils/index.mjs'
//import { getUserAvatar } from '../utils/sanity.mjs'
import { log } from '../utils/log.mjs'
import { hash, hashPassword, randomString, verifyPassword } from '../utils/crypto.mjs'
import { clean, asJson } from '../utils/index.mjs'
import { ConfirmationModel } from './confirmation.mjs'
import { emailTemplate } from '../utils/email.mjs'
//  import { emailTemplate } from '../utils/email.mjs'
//import set from 'lodash.set'

export function UserModel(tools) {
  this.config = tools.config
  this.prisma = tools.prisma
  this.decrypt = tools.decrypt
  this.encrypt = tools.encrypt
  this.mailer = tools.email
  this.Confirmation = new ConfirmationModel(tools)

  return this
}

UserModel.prototype.load = async function (where) {
  this.record = await this.prisma.user.findUnique({ where })
  if (this.record?.email) this.email = this.decrypt(this.record.email)

  return this.setExists()
}

UserModel.prototype.setExists = function () {
  this.exists = this.record ? true : false

  return this
}

UserModel.prototype.setResponse = function (status = 200, error = false, data = {}) {
  this.response = {
    status,
    body: {
      result: 'success',
      ...data,
    },
  }
  if (status > 201) {
    this.response.body.error = error
    this.response.body.result = 'error'
    this.error = true
  } else this.error = false

  return this.setExists()
}

UserModel.prototype.create = async function (body) {
  if (Object.keys(body) < 1) return this.setResponse(400, 'postBodyMissing')
  if (!body.email) return this.setResponse(400, 'emailMissing')
  if (!body.password) return this.setResponse(400, 'passwordMissing')
  if (!body.language) return this.setResponse(400, 'languageMissing')

  const ehash = hash(clean(body.email))
  await this.load({ ehash })
  if (this.exists) return this.setResponse(400, 'emailExists')

  try {
    this.email = clean(body.email)
    this.language = body.language
    const email = this.encrypt(this.email)
    const username = clean(randomString()) // Temporary username
    this.record = await this.prisma.user.create({
      data: {
        ehash,
        ihash: ehash,
        email,
        initial: email,
        username,
        lusername: username,
        data: asJson({ settings: { language: this.language } }),
        password: asJson(hashPassword(body.password)),
      },
    })
  } catch (err) {
    log.warn(err, 'Could not create user record')
    return this.setResponse(500, 'createAccountFailed')
  }

  // Update username
  try {
    await this.update({
      username: `user-${this.record.id}`,
      lusername: `user-${this.record.id}`,
    })
  } catch (err) {
    log.warn(err, 'Could not update username after user creation')
    return this.setResponse(500, 'error', 'usernameUpdateAfterUserCreationFailed')
  }
  log.info({ user: this.record.id }, 'Account created')

  // Create confirmation
  this.confirmation = await this.Confirmation.create({
    type: 'signup',
    data: this.encrypt({
      language: this.language,
      email: this.email,
      id: this.record.id,
      ehash: ehash,
    }),
  })

  // Send signup email
  await this.sendSignupEmail()

  return body.unittest && this.email.split('@').pop() === this.config.tests.domain
    ? this.setResponse(201, false, { email: this.email, confirmation: this.confirmation.record.id })
    : this.setResponse(201, false, { email: this.email })
}

UserModel.prototype.sendSignupEmail = async function () {
  try {
    this.confirmationSent = await this.mailer.send(
      this.email,
      ...emailTemplate.signup(this.email, this.language, this.confirmation)
    )
  } catch (err) {
    log.warn(err, 'Unable to send signup email')
    return this.setResponse(500, 'error', 'unableToSendSignupEmail')
  }

  return this.setResponse(200)
}

UserModel.prototype.update = async function (data) {
  try {
    this.record = await this.prisma.user.update({
      where: { id: this.record.id },
      data,
    })
  } catch (err) {
    log.warn(err, 'Could not update user record')
    process.exit()
    return this.setResponse(500, 'error', 'updateUserFailed')
  }

  return this.setResponse(200)
}

UserModel.prototype.sendResponse = async function (res) {
  return res.status(this.response.status).send(this.response.body)
}