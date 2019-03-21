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

var _utils = require('./utils');

var _Options = require('./Options');

var _Options2 = _interopRequireDefault(_Options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.validateAndClose(this.props.options);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var options = _ref.options;

      this.validateAndClose(options);
    }
  }, {
    key: 'validateAndClose',
    value: function validateAndClose(options) {
      var _props = this.props,
          beforeOptionsComponent = _props.beforeOptionsComponent,
          afterOptionsComponent = _props.afterOptionsComponent,
          select = _props.select;

      if (!beforeOptionsComponent && !afterOptionsComponent && !options.length) {
        select.actions.close();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          className = _props2.className,
          select = _props2.select,
          handleKeyDown = _props2.handleKeyDown,
          highlightedOption = _props2.highlightedOption,
          minWidth = _props2.minWidth,
          onRef = _props2.onRef,
          beforeOptionsComponent = _props2.beforeOptionsComponent,
          afterOptionsComponent = _props2.afterOptionsComponent,
          otherProps = _objectWithoutProperties(_props2, ['className', 'select', 'handleKeyDown', 'highlightedOption', 'minWidth', 'onRef', 'beforeOptionsComponent', 'afterOptionsComponent']);

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('PowerSelect__Menu', className && className + '__Menu'),
          tabIndex: '1',
          onKeyDown: function onKeyDown(event) {
            handleKeyDown(event, highlightedOption);
          },
          style: { minWidth: minWidth },
          ref: function ref(dropdownMenu) {
            return _this2.props.onRef(dropdownMenu);
          }
        },
        beforeOptionsComponent && (0, _utils.renderComponent)(beforeOptionsComponent, { select: select }),
        _react2.default.createElement(_Options2.default, _extends({ select: select, highlightedOption: highlightedOption }, otherProps)),
        afterOptionsComponent && (0, _utils.renderComponent)(afterOptionsComponent, { select: select })
      );
    }
  }]);

  return DropdownMenu;
}(_react.Component);

exports.default = DropdownMenu;