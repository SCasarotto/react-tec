'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Trigger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RenderOption = require('./RenderOption');

var _RenderOption2 = _interopRequireDefault(_RenderOption);

var _TriggerWrapper = require('./TriggerWrapper');

var _TriggerWrapper2 = _interopRequireDefault(_TriggerWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Trigger(_ref) {
  var selectedOption = _ref.selectedOption,
      optionLabelPath = _ref.optionLabelPath,
      selectedOptionComponent = _ref.selectedOptionComponent,
      placeholder = _ref.placeholder,
      select = _ref.select,
      rest = _objectWithoutProperties(_ref, ['selectedOption', 'optionLabelPath', 'selectedOptionComponent', 'placeholder', 'select']);

  return _react2.default.createElement(
    _TriggerWrapper2.default,
    _extends({ value: selectedOption, select: select }, rest),
    _react2.default.createElement(
      'div',
      { className: 'PowerSelect__TriggerLabel' },
      selectedOption ? _react2.default.createElement(_RenderOption2.default, {
        option: selectedOption,
        optionLabelPath: optionLabelPath,
        optionComponent: selectedOptionComponent,
        select: select
      }) : _react2.default.createElement(
        'span',
        { className: 'PowerSelect__Placeholder' },
        placeholder
      )
    )
  );
}