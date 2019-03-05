'use strict';

var _utils = require('./../../utils');

describe('matcher()', function () {
  it('should match string', function () {
    var option = 'option';
    expect((0, _utils.matcher)({ option: option, searchTerm: '' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'opt' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'opt ' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'a' })).toBe(false);
  });
  it('should match number', function () {
    var option = 1234567;
    expect((0, _utils.matcher)({ option: option, searchTerm: '' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: '12' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: '12 ' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: '9' })).toBe(false);
  });
  it('should match not undefined', function () {
    var option = undefined;
    expect((0, _utils.matcher)({ option: option, searchTerm: '' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'opt' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: '12' })).toBe(false);
  });
  it('should match not null', function () {
    var option = null;
    expect((0, _utils.matcher)({ option: option, searchTerm: '' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'opt' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: '12' })).toBe(false);
  });

  var option = { name: 'Matthew Stevens', age: 6, id: null };
  it('should match string in object', function () {
    expect((0, _utils.matcher)({ option: option, searchTerm: '', searchIndices: 'name' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'mAt', searchIndices: 'name' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'mat', searchIndices: 'name' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'mat ', searchIndices: 'name' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'b', searchIndices: 'name' })).toBe(false);
  });
  it('should match number in object', function () {
    expect((0, _utils.matcher)({ option: option, searchTerm: '', searchIndices: 'age' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: '6', searchIndices: 'age' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: '6 ', searchIndices: 'age' })).toBe(true);
    expect((0, _utils.matcher)({ option: option, searchTerm: '1', searchIndices: 'age' })).toBe(false);
  });
  it('should match not undefined in object', function () {
    expect((0, _utils.matcher)({ option: option, searchTerm: '', searchIndices: 'gender' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'opt', searchIndices: 'gender' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: '12', searchIndices: 'gender' })).toBe(false);
  });
  it('should match not null in object', function () {
    expect((0, _utils.matcher)({ option: option, searchTerm: '', searchIndices: 'id' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: 'opt', searchIndices: 'id' })).toBe(false);
    expect((0, _utils.matcher)({ option: option, searchTerm: '12', searchIndices: 'id' })).toBe(false);
  });
}); // /* global describe, it, expect */