# Voucher

Promises is coming in the new ES6 spec. [This excellent article](http://www.html5rocks.com/en/tutorials/es6/promises/) should convince you to use it.

A lot of libraries today still takes callback arguments rather than returning promises. Voucher will wrap the calls and give you a promise to work with. Easy.

## Install

    npm install voucher

## Examples

### NodeJS

```javascript
var crypto = require('crypto');
var voucher = require('voucher');

voucher(crypto.pseudoRandomBytes, 12).then(function(randomBytesBuffer) {
  console.log(randomBytesBuffer.toString('hex'));
});
```

```javascript
var fs = require('fs');
var voucher = require('voucher');

voucher(fs.readFile, '/etc/passwd', { encoding: 'utf8' }).then(function(content) {
  console.log(content); // Logs the contents of '/etc/passwd'
}).catch(function(error) {
  console.log('Something went wrong when reading file:', error);
});
```

## Requirements
  * The callback argument of the function specified __must be the last argument__.
  * The callback __must__ be invoked with `error` as its first argument.

All NodeJS native functions works well. For instance, `fs.readFile` takes a
`filename` parameter, then an optional `options` object and then the callback function.
The callback function receives two parameters, first `err` which indicates if
anything went wrong, then the result of the readFile operation.
