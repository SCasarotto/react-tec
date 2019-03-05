'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = SelectedOption;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SelectedOption(props) {
  var option = props.option,
      optionLabelPath = props.optionLabelPath,
      selectedOptionComponent = props.selectedOptionComponent,
      showOptionClose = props.showOptionClose,
      onCloseClick = props.onCloseClick,
      select = props.select;

  var value = null;
  if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
    if (optionLabelPath) {
      value = option[optionLabelPath];
    }
  }
  if (typeof option === 'string') {
    value = option;
  }
  return _react2.default.createElement(
    'li',
    { className: 'PowerSelectMultiple__SelectedOption' },
    _react2.default.createElement(
      'span',
      { className: 'PowerSelectMultiple__SelectedOption__Label' },
      selectedOptionComponent ? (0, _utils.renderComponent)(selectedOptionComponent, { option: option, select: select }) : value
    ),
    showOptionClose ? _react2.default.createElement(
      'span',
      {
        className: 'PowerSelectMultiple__SelectedOption__Close',
        onClick: function onClick(event) {
          event.stopPropagation();
          onCloseClick({ option: option, select: select });
        }
      },
      '\xD7'
    ) : null
  );
}