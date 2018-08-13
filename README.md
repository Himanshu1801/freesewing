<p align="center">
  <a title="Go to freesewing.org" href="https://freesewing.org/"><img src="https://freesewing.org/img/logo/black.svg" align="center" width="150px" alt="Freesewing logo"/></a>
</p>
<h4 align="center"><em>&nbsp;<a title="Go to freesewing.org" href="https://freesewing.org/">freesewing</a></em>
<br><sup>a library for made-to-measure sewing patterns</sup>
</h4>
<p align="center">
  <a href="https://travis-ci.org/freesewing/freesewing"><img src="https://badgen.net/travis/freesewing/freesewing/master" alt="Travis build"></a>
  <a href="https://www.npmjs.com/package/freesewing"><img src="https://badgen.net/npm/v/freesewing" alt="Version"></a>
  <a href="https://www.npmjs.com/package/freesewing"><img src="https://badgen.net/npm/license/freesewing" alt="License"></a>
  <a href="https://gitter.im/freesewing/freesewing"><img src="https://badgen.net/chat/on%20Gitter/cyan" alt="Chat on Gitter"></a>
  <a href="https://freesewing.org/patrons/join"><img src="https://badgen.net/become/a%20Patron/FF5B77" alt="Become a Patron"></a>
</p>
# freesewing

[Freesewing](https://freesewing.org/) is an open source platform for made-to-measure sewing pattern.  
This is our core library.
A freesewing plugin to display debug information in your browser console.

## Usage

To load this plugin, add it to your instantiated pattern.

On node.js:

```js
import pattern from '@freesewing/pattern-brian'
import debug from '@freesewing/plugin-debug'

pattern.with(debug);
```

In the browser, this plugin will register as `freesewing.plugins.debug`:

```html
<script type="text/javascript" src="https://unpkg.com/freesewing"></script>
<script type="text/javascript" src="https://unpkg.com/@freesewing/plugin-debug"></script>
<script type="text/javascript" src="https://unpkg.com/@freesewing/pattern-brian"></script>

<script>
var pattern = freesewing.patterns.brian
  .with(freesewing.plugins.debug);
</script>
```

## Example

This plugin will gather debug info and log it to your browser console:

![Example of the output provided by this plugin](https://github.com/freesewing/plugin-debug/raw/master/img/example.png)


## Install

To install, run:

```sh
npm install @freesewing/plugin-debug
```

## Build

To build this plugin, run:

```sh
npm run build
```

## License: MIT

See [the license file](https://github.com/freesewing/plugin-theme/blob/master/LICENSE)
for details.
