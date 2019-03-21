'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _SelectTrigger = require('./SelectTrigger');

var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PowerSelectMultiple = function (_Component) {
  _inherits(PowerSelectMultiple, _Component);

  function PowerSelectMultiple() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PowerSelectMultiple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PowerSelectMultiple.__proto__ || Object.getPrototypeOf(PowerSelectMultiple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleOnChange = function (_ref2) {
      var option = _ref2.option,
          select = _ref2.select;
      var _this$props = _this.props,
          selected = _this$props.selected,
          onChange = _this$props.onChange;

      if (option) {
        var options = selected.slice();
        options.push(option);
        onChange({
          options: options,
          select: select
        });
      }
      select.actions.focus();
      if (select.searchTerm) {
        select.actions.search('');
      }
    }, _this.handleKeyDown = function (event, _ref3) {
      var select = _ref3.select;

      if (event.which === 8) {
        var _this$props2 = _this.props,
            selected = _this$props2.selected,
            onChange = _this$props2.onChange;

        var value = event.target.value;
        if (value === '' && selected.length) {
          var options = selected.slice(0, selected.length - 1);
          onChange({
            options: options,
            select: select
          });
          select.actions.open();
          select.actions.focus();
        }
      }
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event, { select: select });
      }
    }, _this.removeOption = function (_ref4) {
      var option = _ref4.option,
          select = _ref4.select;
      var _this$props3 = _this.props,
          selected = _this$props3.selected,
          onChange = _this$props3.onChange;

      var options = selected.filter(function (opt) {
        return opt !== option;
      });
      onChange({
        options: options,
        select: select
      });
      select.actions.focus();
    }, _this.handleClearClick = function (event, _ref5) {
      var select = _ref5.select;

      event.stopPropagation();
      _this.props.onChange({
        options: [],
        select: select
      });
      if (select.searchTerm) {
        select.actions.search('');
      }
      select.actions.close();
      select.actions.focus();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PowerSelectMultiple, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.filterOptions(this.props.options, this.props.selected);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.filterOptions(nextProps.options, nextProps.selected);
    }
  }, {
    key: 'filterOptions',
    value: function filterOptions(options, selected, callback) {
      var filteredOptions = options.filter(function (option) {
        return selected.indexOf(option) === -1;
      });
      this.setState({ filteredOptions: filteredOptions }, callback);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          options = _props.options,
          onChange = _props.onChange,
          rest = _objectWithoutProperties(_props, ['className', 'options', 'onChange']);

      return _react2.default.createElement(_Select2.default, _extends({
        className: (0, _classnames2.default)('PowerSelectMultiple', className),
        ref: function ref(select) {
          return _this2.select = select;
        },
        triggerComponent: function triggerComponent(props) {
          return _react2.default.createElement(_SelectTrigger2.default, _extends({}, props, {
            showOptionClose: true,
            onOptionCloseClick: _this2.removeOption,
            onClearClick: _this2.handleClearClick
          }));
        }
      }, rest, {
        options: this.state.filteredOptions,
        onChange: this.handleOnChange,
        closeOnSelect: false,
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return PowerSelectMultiple;
}(_react.Component);

exports.default = PowerSelectMultiple;


PowerSelectMultiple.displayName = 'PowerSelectMultiple';