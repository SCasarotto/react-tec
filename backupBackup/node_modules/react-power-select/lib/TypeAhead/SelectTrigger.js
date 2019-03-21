'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TriggerWrapper = require('../TriggerWrapper');

var _TriggerWrapper2 = _interopRequireDefault(_TriggerWrapper);

var _AutoResizeInput = require('../AutoResizeInput');

var _AutoResizeInput2 = _interopRequireDefault(_AutoResizeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectTrigger = function (_Component) {
  _inherits(SelectTrigger, _Component);

  function SelectTrigger() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectTrigger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectTrigger.__proto__ || Object.getPrototypeOf(SelectTrigger)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleInputChange = function (event) {
      _this.setState({
        value: event.target.value
      });
      _this.props.handleOnChange(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectTrigger, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.getValueFromSelectedOption(this.props);
      this.setState({ value: value });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.searchTerm !== null ? nextProps.searchTerm : this.getValueFromSelectedOption(nextProps);
      this.setState({
        value: value
      });
    }
  }, {
    key: 'getValueFromSelectedOption',
    value: function getValueFromSelectedOption() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var selectedOption = props.selectedOption,
          selectedOptionLabelPath = props.selectedOptionLabelPath,
          optionLabelPath = props.optionLabelPath;

      var value = '';
      selectedOptionLabelPath = selectedOptionLabelPath || optionLabelPath;
      if (selectedOption) {
        if (typeof selectedOption === 'string') {
          value = selectedOption;
        } else if (selectedOptionLabelPath) {
          value = selectedOption[selectedOptionLabelPath];
        }
      }
      return value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          select = _props.select,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          autoFocus = _props.autoFocus,
          handleOnChange = _props.handleOnChange,
          handleKeyDown = _props.handleKeyDown,
          handleOnFocus = _props.handleOnFocus,
          handleOnBlur = _props.handleOnBlur,
          rest = _objectWithoutProperties(_props, ['select', 'placeholder', 'disabled', 'autoFocus', 'handleOnChange', 'handleKeyDown', 'handleOnFocus', 'handleOnBlur']);

      var value = this.state.value;

      return _react2.default.createElement(
        _TriggerWrapper2.default,
        _extends({ value: value, select: select }, rest),
        _react2.default.createElement(
          'div',
          { className: 'PowerSelect__TriggerInputContainer' },
          _react2.default.createElement(_AutoResizeInput2.default, {
            className: 'PowerSelect__TriggerInput',
            autoComplete: 'off',
            spellCheck: 'false',
            placeholder: placeholder,
            value: value,
            disabled: disabled,
            autoFocus: autoFocus,
            onChange: this.handleInputChange,
            onKeyDown: handleKeyDown,
            onFocus: handleOnFocus,
            onBlur: handleOnBlur
          })
        )
      );
    }
  }]);

  return SelectTrigger;
}(_react.Component);

exports.default = SelectTrigger;