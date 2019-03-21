'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TriggerWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TriggerWrapper(_ref) {
  var value = _ref.value,
      select = _ref.select,
      showClear = _ref.showClear,
      onClearClick = _ref.onClearClick,
      triggerLHSComponent = _ref.triggerLHSComponent,
      triggerRHSComponent = _ref.triggerRHSComponent,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('PowerSelect__Trigger', {
        'PowerSelect__Trigger--empty': !value
      })
    },
    triggerLHSComponent && _react2.default.createElement(
      'div',
      { className: 'PowerSelect__Trigger__LHS' },
      (0, _utils.renderComponent)(triggerLHSComponent, { select: select })
    ),
    children,
    showClear && _react2.default.createElement('span', { className: 'PowerSelect__Clear', onClick: onClearClick }),
    _react2.default.createElement('span', { className: 'PowerSelect__TriggerStatus' }),
    triggerRHSComponent && _react2.default.createElement(
      'div',
      { className: 'PowerSelect__Trigger__RHS' },
      (0, _utils.renderComponent)(triggerRHSComponent, { select: select })
    )
  );
}