'use strict';

//====================================================================

var ca = require('./');

//--------------------------------------------------------------------

var Benchmark = require('benchmark');

//====================================================================

var makeSimpleGetter = function (key) {
  return function (obj) {
    return obj[key];
  };
};

var makeNestedGetter = function (path) {
  return function (obj) {
    var i, n, val;

    val = obj;
    for (i = 0, n = path.length; i < n; ++i) {
      val = val[path[i]];
    }
    return val;
  };
};

//====================================================================

var obj = {
  foo: 'bar',
  bar: {
    baz: 'foo',
  },
};
var simpleGetter = makeSimpleGetter('foo');
var nesterGetter = makeNestedGetter(['bar', 'baz']);
var caSimpleGetter = ca.getter('foo');
var caNestedGetter = ca.getter(['bar', 'baz']);

new Benchmark.Suite()
  .add('simpleGetter()', function () {
    return simpleGetter(obj);
  })
  .add('caSimpleGetter', function () {
    return caSimpleGetter(obj);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fatest is', this.filter('fastest').pluck('name'));
  })
  .run()
;

new Benchmark.Suite()
  .add('nesterGetter()', function () {
    return nesterGetter(obj);
  })
  .add('caNestedGetter()', function () {
    return caNestedGetter(obj);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fatest is', this.filter('fastest').pluck('name'));
  })
  .run()
;
