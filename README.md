# compiled-accessors

[![Build Status](https://img.shields.io/travis/julien-f/js-compiled-accessors/master.svg)](http://travis-ci.org/julien-f/js-compiled-accessors)
[![Dependency Status](https://david-dm.org/julien-f/js-compiled-accessors/status.svg?theme=shields.io)](https://david-dm.org/julien-f/js-compiled-accessors)
[![devDependency Status](https://david-dm.org/julien-f/js-compiled-accessors/dev-status.svg?theme=shields.io)](https://david-dm.org/julien-f/js-compiled-accessors#info=devDependencies)

> Compiled getter/setter for highest perfs.


## Install

Download [manually](https://github.com/julien-f/js-compiled-accessors/releases) or with package-manager.

#### [npm](https://npmjs.org/package/compiled-accessors)

```
npm install --save compiled-accessors
```

#### bower

```
bower install --save compiled-accessors
```

## Example

```javascript
var CA = require('compiled-accessors');

var obj = {
  foo {
    bar: 'Fry'
  }
}

// Create a getter for a nested value.
var getFooBar = CA.getter('foo.bar');

// Use it.
console.log(getFooBar(obj)); // Fry

// Create a setter for the same nested value.
//
// The path can be described as a string or an array.
var setFooBar = CA.setter(['foo', 'bar']);

// Use it.
setFooBar(obj, 'Zoidberg');
```

## Contributions

Contributions are *very* welcomed, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/js-compiled-accessors/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
