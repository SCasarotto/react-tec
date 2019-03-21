'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = RenderOption;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RenderOption(_ref) {
  var option = _ref.option,
      select = _ref.select,
      optionLabelPath = _ref.optionLabelPath,
      optionComponent = _ref.optionComponent;

  var publicProps = { option: option, select: select, optionLabelPath: optionLabelPath };
  var OptionComponent = optionComponent;
  if ((0, _react.isValidElement)(OptionComponent)) {
    return (0, _react.cloneElement)(OptionComponent, publicProps);
  }
  if (OptionComponent) {
    return _react2.default.createElement(OptionComponent, publicProps);
  }
  if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
    if (optionLabelPath) {
      return _react2.default.createElement(
        'span',
        null,
        option[optionLabelPath]
      );
    }
  }
  if (typeof option === 'string') {
    return _react2.default.createElement(
      'span',
      null,
      option
    );
  }
  return null;
}