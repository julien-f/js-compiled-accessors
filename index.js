// UMD: https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.humanFormat = factory();
  }
}(this, function () {
  'use strict';

  /* jshint evil: true */

  var is = (function () {
    var toS = Object.prototype.toString;
    toS = toS.call.bind(toS);
    var _ = function (ref) {
      ref = toS(ref);
      return function (val) {
        return toS(val) === ref;
      };
    };

    return {
      string: _(''),
    };
  })();

  var pathToString = function (path) {
    if (is.string(path)) {
      path = path.split('.');
    }


    return '['+ path.map(JSON.stringify).join('][') +']';
  };

  var getter = function (path) {
    return new Function(
      'obj',
      'return obj'+ pathToString(path)
    );
  };

  var setter = function (path) {
    return new Function(
      'obj', 'val',
      'obj'+ pathToString(path) +'= val'
    );
  };

  return {
    getter: getter,
    setter: setter,
  };
}));
