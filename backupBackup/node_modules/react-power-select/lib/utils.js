'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderComponent = exports.isValidOptionPresent = exports.getNextValidOption = exports.filterOptions = exports.flattenOptions = exports.getOptionIndex = exports.isOptGroup = exports.makeArray = exports.isNone = exports.matcher = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = function matcher(_ref) {
  var option = _ref.option,
      _ref$searchTerm = _ref.searchTerm,
      searchTerm = _ref$searchTerm === undefined ? '' : _ref$searchTerm,
      searchIndices = _ref.searchIndices;

  searchTerm = searchTerm.trim().toLowerCase();

  if (searchIndices) {
    return makeArray(searchIndices).some(function (index) {
      var value = option[index];
      return !isNone(value) && String(value).toLowerCase().indexOf(searchTerm) !== -1;
    });
  }

  return !isNone(option) && String(option).toLowerCase().indexOf(searchTerm) !== -1;

  return true;
};

var isNone = exports.isNone = function isNone(value) {
  return value === null || value === undefined;
};

var makeArray = exports.makeArray = function makeArray(obj) {
  if (obj === null || obj === undefined) {
    return [];
  }
  return Array.isArray(obj) ? obj : [obj];
};

var isOptGroup = exports.isOptGroup = function isOptGroup(option) {
  return option.label && option.options;
};

var getOptionIndex = exports.getOptionIndex = function getOptionIndex(options, option) {
  var paths = [];
  var optionFound = false;
  (function traverse(options) {
    optionFound = options.some(function (currentOption, index) {
      if (currentOption === option) {
        paths.push(index);
        optionFound = true;
        return true;
      }
      if (isOptGroup(currentOption)) {
        paths.push(index);
        return traverse(currentOption.options, index);
      }
    });
    if (!optionFound) {
      paths.pop();
    }
    return optionFound;
  })(options);
  return paths.join('.');
};

var flattenOptions = exports.flattenOptions = function flattenOptions(options) {
  var isOptGroupOptions = false;
  var optGroupMap = new Map();
  var flattenedOptions = function traverse(options) {
    var flattenedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return options.reduce(function (prev, currentOption) {
      if (isOptGroup(currentOption)) {
        isOptGroupOptions = true;
        return traverse(currentOption.options, prev, currentOption);
      }
      prev.push(currentOption);
      optGroupMap.set(currentOption, group);
      return prev;
    }, flattenedOptions);
  }(options);
  return {
    isOptGroupOptions: isOptGroupOptions,
    flattenedOptions: flattenedOptions,
    optGroupMap: optGroupMap
  };
};

var filterOptions = exports.filterOptions = function filterOptions(_ref2) {
  var options = _ref2.options,
      searchTerm = _ref2.searchTerm,
      searchIndices = _ref2.searchIndices,
      matcher = _ref2.matcher;

  return function doFilter(options) {
    var filtered = [];
    for (var i = 0, len = options.length; i < len; i++) {
      var option = options[i];
      if (isOptGroup(option)) {
        var copy = _extends({}, option);
        copy.options = doFilter(option.options);
        if (copy.options.length) {
          filtered.push(copy);
        }
      } else if (matcher({ option: option, searchTerm: searchTerm, searchIndices: searchIndices })) {
        filtered.push(option);
      }
    }
    return filtered;
  }(options);
};

var getNextValidOption = exports.getNextValidOption = function getNextValidOption(_ref3) {
  var options = _ref3.options,
      currentOption = _ref3.currentOption,
      counter = _ref3.counter,
      optGroupMap = _ref3.optGroupMap;

  return function next(currentOption) {
    var currentIndex = options.indexOf(currentOption);
    var nextIndex = currentIndex + counter;
    nextIndex = nextIndex === -1 ? options.length - 1 : nextIndex === options.length ? 0 : nextIndex;
    var nextOption = options[nextIndex];
    var group = optGroupMap.get(nextOption);
    if (nextOption && (nextOption.disabled || group.disabled)) {
      return next(nextOption);
    }
    return nextOption;
  }(currentOption);
};

var isValidOptionPresent = exports.isValidOptionPresent = function isValidOptionPresent(options) {
  return function traverse(options) {
    return !!options.some(function (option) {
      if (isOptGroup(option)) {
        return traverse(option.options);
      }
      return !option.disabled;
    });
  }(options);
};

var renderComponent = exports.renderComponent = function renderComponent(Component, props) {
  if ((0, _react.isValidElement)(Component)) {
    return (0, _react.cloneElement)(Component, props);
  }
  if (Component) {
    return _react2.default.createElement(Component, props);
  }
};