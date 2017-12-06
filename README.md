<div align="center">
<h1>arrayme</h1>
Transforms a value to an array.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/arrayme" target="_blank"><img src="https://travis-ci.org/fabioricali/arrayme.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
</div>

## Installation

### Node.js
```
npm install arrayme --save
```

## Example

```javascript
const arrayme = require('arrayme');

arrayme('hello'); //=> ['hello']
arrayme(null); //=> []
arrayme(); //=> []

// Disable check on null
arrayme(null, false); //=> [null]
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/arrayme/blob/master/CHANGELOG.md">here</a>

## License
arrayme is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>