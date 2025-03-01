//  __SDEFILE__ - This file is a dependency for the stand-alone environment
import colors from 'tailwindcss/colors'

/*
 * See the light theme for an example with inline comments
 */

export const spectrum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => 'indigo-300')

export const rating = ['green-500', 'yellow-400', 'amber-500', 'orange-500', 'red-500']

export const theme = {
  fontFamily: "'Segoe Print', 'Bradley Hand', Chilanka, TSCu_Comic, casual, cursive;",
  'base-100': colors.red['50'],
  'base-200': colors.red['100'],
  'base-300': colors.red['300'],
  'base-content': colors.neutral['700'],
  primary: colors.indigo['300'],
  'primary-focus': colors.indigo['400'],
  'primary-content': colors.indigo['800'],
  secondary: colors.pink['400'],
  'secondary-focus': colors.pink['500'],
  'secondary-content': colors.pink['50'],
  accent: colors.sky['300'],
  'accent-focus': colors.sky['400'],
  'accent-content': colors.sky['900'],
  neutral: colors.fuchsia['900'],
  'neutral-focus': colors.fuchsia['800'],
  'neutral-content': colors.fuchsia['200'],
  info: colors.neutral['500'],
  '--btn-info-content': colors.neutral[50],
  success: colors.green['400'],
  '--btn-success-content': colors.green[900],
  warning: colors.orange['400'],
  '--btn-warning-content': colors.orange[900],
  error: colors.red['400'],
  '--btn-error-content': colors.red[900],
  '--code-background-color': colors.neutral['800'],
  '--code-background-highlight-color': '#313131',
  '--code-border-color': colors.neutral['900'],
  '--code-color': colors.neutral['100'],
  '--code-font-family': `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`,
  '--code-border-radius': '0.5rem',
  '--code-border-style': 'solid',
  '--code-border-width': 1,
  '--code-outer-padding': '0 0.5rem',
  '--code-inner-padding': '1rem',
  '--code-color-keyword': colors.yellow['500'],
  '--code-font-weight-keyword': 'bold',
  '--code-color-entity': colors.violet['400'],
  '--code-font-weight-entity': 'bold',
  '--code-color-constant': colors.lime['400'],
  '--code-color-string': colors.sky['400'],
  '--code-font-style-string': 'italic',
  '--code-color-variable': colors.indigo['400'],
  '--code-color-comment': colors.neutral['400'],
  '--code-color-tag': colors.green['400'],
  '--code-color-property': colors.yellow['200'],
  '--code-font-weight-property': 'bold',
  '--rounded-box': '0.5rem',
  '--rounded-btn': '0.5rem',
  '--rounded-badge': '1.9rem',
  '--animation-btn': '0.25s',
  '--animation-input': '.4s',
  '--padding-card': '2rem',
  '--btn-text-case': 'uppercase',
  '--navbar-padding': '.5rem',
  '--border-btn': '1px',
  '--focus-ring': '2px',
  '--focus-ring-offset': '2px',
  '--pattern-bg': colors.neutral['50'],
  '--pattern-fabric': colors.neutral['700'],
  '--pattern-lining': colors.emerald['500'],
  '--pattern-interfacing': colors.neutral['400'],
  '--pattern-canvas': colors.amber['600'],
  '--pattern-various': colors.red['500'],
  '--pattern-mark': colors.blue['500'],
  '--pattern-contrast': colors.pink['500'],
  '--pattern-note': colors.violet['500'],
  '--pattern-text-xs': '0.2rem',
  '--pattern-text-sm': '0.3rem',
  '--pattern-text': '0.4rem',
  '--pattern-text-lg': '0.6rem',
  '--pattern-text-xl': '0.8rem',
  '--pattern-text-2xl': '1.5rem',
  '--pattern-text-3xl': '2rem',
  '--pattern-text-4xl': '3rem',
  '--pattern-scale': '1',
  '--pattern-stroke-xs': '0.2px',
  '--pattern-stroke-sm': '0.4px',
  '--pattern-stroke': '0.7px',
  '--pattern-stroke-lg': '1.3px',
  '--pattern-stroke-xl': '2px',
  '--pattern-stroke-2xl': '4px',
  '--pattern-stroke-3xl': '6px',
  '--pattern-stroke-4xl': '8px',
  '--pattern-stroke-5xl': '12px',
  '--pattern-stroke-6xl': '16px',
  '--pattern-stroke-7xl': '20px',
  '--pattern-sample-1': colors.red['500'],
  '--pattern-sample-2': colors.orange['500'],
  '--pattern-sample-3': colors.yellow['500'],
  '--pattern-sample-4': colors.lime['500'],
  '--pattern-sample-5': colors.emerald['500'],
  '--pattern-sample-6': colors.cyan['500'],
  '--pattern-sample-7': colors.blue['500'],
  '--pattern-sample-8': colors.violet['500'],
  '--pattern-sample-9': colors.fuchsia['500'],
  '--pattern-sample-10': colors.rose['500'],
}
