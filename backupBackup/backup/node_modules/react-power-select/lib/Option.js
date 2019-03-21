'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RenderOption = require('./RenderOption');

var _RenderOption2 = _interopRequireDefault(_RenderOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
  _inherits(Option, _Component);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          option = _props.option,
          select = _props.select,
          disabled = _props.disabled,
          optionIndex = _props.optionIndex,
          optionLabelPath = _props.optionLabelPath,
          optionComponent = _props.optionComponent,
          isHighlighted = _props.isHighlighted,
          onOptionClick = _props.onOptionClick;

      var isDisabled = disabled || option.disabled;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('PowerSelect__Option', {
            'PowerSelect__Option--disabled': isDisabled,
            'PowerSelect__Option--highlighted': isHighlighted
          }),
          'data-option-index': optionIndex,
          onClick: isDisabled ? null : onOptionClick
        },
        _react2.default.createElement(_RenderOption2.default, {
          option: option,
          optionLabelPath: optionLabelPath,
          optionComponent: optionComponent,
          select: select
        })
      );
    }
  }]);

  return Option;
}(_react.Component);

exports.default = Option;