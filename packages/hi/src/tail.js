export default function (part) {
  let {
    store,
    sa,
    Point,
    points,
    Path,
    paths,
    Snippet,
    snippets,
    options,
    measurements,
    complete,
    paperless,
    macro,
  } = part.shorthand()

  
  let tail01_02d = 192.0129724628 * options.size
  let tail01_02a = 53.242955551234914
  let tail01_03d = 115.38057785000036 * options.size
  let tail01_03a = 106.95066736265407
  let tail01_04d = 230.05210782342334 * options.size
  let tail01_04a = 138.66344842617497
  let tail01_05d = 95.12771141996424 * options.size
  let tail01_05a = 173.38284569091573
  let tail01cp1d = 156.52907796955816 * options.size
  let tail01cp2d = 33.33694275124821 * options.size
  let tail01cp1a = 40.69161792982998
  let tail01cp2a = 150.8191939475001
  let tail02cp1d = 20.1307852802616 * options.size
  let tail02cp2d = 26.418081118809575 * options.size
  let tail02cp1a = 129.66709301725697
  let tail02cp2a = 303.9168409570558
  let tail03cp1d = 41.577 * options.size
  let tail03cp2d = 41.575999999999965 * options.size
  let tail03cp1a = 180
  let tail03cp2a = -0
  let tail04cp1d = 18.83137554720844 * options.size
  let tail04cp2d = 18.830271479721173 * options.size
  let tail04cp1a = 218.47354143777738
  let tail04cp2a = 38.483984913053284
  let tail05cp1d = 38.59528397356339 * options.size
  let tail05cp2d = 126.7372982195849 * options.size
  let tail05cp1a = 14.169822482118544
  let tail05cp2a = 128.3396902984

  points.tail01 = new Point(0, 0)
  points.tail02 = points.tail01.shift(tail01_02a, tail01_02d)
  points.tail03 = points.tail01.shift(tail01_03a, tail01_03d)
  points.tail04 = points.tail01.shift(tail01_04a, tail01_04d)
  points.tail05 = points.tail01.shift(tail01_05a, tail01_05d)

  points.tail01cp1 = points.tail01.shift(tail01cp1a, tail01cp1d)
  points.tail01cp2 = points.tail01.shift(tail01cp2a, tail01cp2d)
  points.tail02cp1 = points.tail02.shift(tail02cp1a, tail02cp1d)
  points.tail02cp2 = points.tail02.shift(tail02cp2a, tail02cp2d)
  points.tail03cp1 = points.tail03.shift(tail03cp1a, tail03cp1d)
  points.tail03cp2 = points.tail03.shift(tail03cp2a, tail03cp2d)
  points.tail04cp1 = points.tail04.shift(tail04cp1a, tail04cp1d)
  points.tail04cp2 = points.tail04.shift(tail04cp2a, tail04cp2d)
  points.tail05cp1 = points.tail05.shift(tail05cp1a, tail05cp1d)
  points.tail05cp2 = points.tail05.shift(tail05cp2a, tail05cp2d)

  // Adjust tail opening:
  points.tail05 = points.tail01.shift(points.tail01.angle(points.tail05), store.get('tailWidth'))
  points.tail01cp2 = points.tail01.shift(
    points.tail01.angle(points.tail05) - store.get('tailCpAngle'),
    store.get('tailCpDist')
  )
  points.tail05cp1 = points.tail05.shift(
    points.tail05.angle(points.tail01) + store.get('tailCpAngle'),
    store.get('tailCpDist')
  )

  paths.seam = new Path()
    .move(points.tail01)
    .curve(points.tail01cp1, points.tail02cp2, points.tail02)
    .curve(points.tail02cp1, points.tail03cp2, points.tail03)
    .curve(points.tail03cp1, points.tail04cp2, points.tail04)
    .curve(points.tail04cp1, points.tail05cp2, points.tail05)
    .curve(points.tail05cp1, points.tail01cp2, points.tail01)
    .close()

  // Complete?
  if (complete) {
    if (sa) {
      paths.sa = paths.seam.offset(sa).attr('class', 'fabric sa')
    }
  }

  return part
}
