'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BeforeOptionsWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutoResizeInput = require('../AutoResizeInput');

var _AutoResizeInput2 = _interopRequireDefault(_AutoResizeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function BeforeOptionsWrapper(_ref) {
  var searchEnabled = _ref.searchEnabled,
      onChange = _ref.onChange,
      beforeOptionsComponent = _ref.beforeOptionsComponent,
      searchPlaceholder = _ref.searchPlaceholder,
      otherProps = _objectWithoutProperties(_ref, ['searchEnabled', 'onChange', 'beforeOptionsComponent', 'searchPlaceholder']);

  var BeforeOptionsComponent = beforeOptionsComponent;
  return _react2.default.createElement(
    'div',
    null,
    searchEnabled && _react2.default.createElement(
      'div',
      { className: 'PowerSelect__SearchInputContainer' },
      _react2.default.createElement(_AutoResizeInput2.default, {
        className: 'PowerSelect__SearchInput',
        value: otherProps.select.searchTerm || '',
        placeholder: searchPlaceholder,
        autoFocus: true,
        onChange: onChange
      })
    ),
    beforeOptionsComponent && _react2.default.createElement(BeforeOptionsComponent, otherProps)
  );
}