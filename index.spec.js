'use strict';

//====================================================================

var CA = require('./');

//--------------------------------------------------------------------

var expect = require('chai').expect;

//====================================================================

var obj;
beforeEach(function () {
  obj = {
    foo: [
      {},
    ],
  };
});

//====================================================================

describe('CA.getter', function () {
  it('supports array for path', function () {
    var get = CA.getter(['foo']);

    expect(get(obj)).to.equal(obj.foo);
  });

  it('supports string for path', function () {
    var get = CA.getter('foo');

    expect(get(obj)).to.equal(obj.foo);
  });

  it('supports other types for path through conversion to string', function () {
    var get = CA.getter({
      toString: function () {
        return 'foo';
      },
    });

    expect(get(obj)).to.equal(obj.foo);
  });

  it('supports array for deep path', function () {
    var get = CA.getter(['foo', 0]);

    expect(get(obj)).to.equal(obj.foo[0]);
  });

  it('supports string for deep path', function () {
    var get = CA.getter('foo.0');

    expect(get(obj)).to.equal(obj.foo[0]);
  });

  it('returns undefined on inexistant property', function () {
    var get = CA.getter('bar');

    expect(get(obj)).to.be.undefined;
  });

  it('throws on invalid path', function () {
    var get = CA.getter('bar.baz');

    expect(function () {
      get(obj);
    }).to.throw(TypeError);
  });
});

describe('CA.setter', function () {
  var value = {};

  it('supports array for path', function () {
    var set = CA.setter(['foo']);

    set(obj, value);
    expect(obj.foo).to.equal(value);
  });

  it('supports string for path', function () {
    var set = CA.setter('foo');

    set(obj, value);
    expect(obj.foo).to.equal(value);
  });

  it('supports other types for path through conversion to string', function () {
    var set = CA.setter({
      toString: function () {
        return 'foo';
      },
    });

    set(obj, value);
    expect(obj.foo).to.equal(value);
  });

  it('supports array for deep path', function () {
    var set = CA.setter(['foo', 0]);

    set(obj, value);
    expect(obj.foo[0]).to.equal(value);
  });

  it('supports string for deep path', function () {
    var set = CA.setter('foo.0');

    set(obj, value);
    expect(obj.foo[0]).to.equal(value);
  });

  it('throws on invalid path', function () {
    var set = CA.setter('bar.baz');

    expect(function () {
      set(obj, value);
    }).to.throw(TypeError);
  });
});
