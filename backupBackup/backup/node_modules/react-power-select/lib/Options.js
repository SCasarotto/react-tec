'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = function (_Component) {
  _inherits(Options, _Component);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var options = _ref.options,
          highlightedOption = _ref.highlightedOption;

      this.scrollTo({ options: options, highlightedOption: highlightedOption });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          options = _props.options,
          highlightedOption = _props.highlightedOption;

      this.optionsListOffsetHeight = this.optionsList.offsetHeight;
      this.scrollTo({ options: options, highlightedOption: highlightedOption });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.optionsListOffsetHeight) {
        this.optionsListOffsetHeight = this.optionsList.offsetHeight;
      }
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(_ref2) {
      var options = _ref2.options,
          highlightedOption = _ref2.highlightedOption;

      if (highlightedOption) {
        var optionIndex = (0, _utils.getOptionIndex)(options, highlightedOption);
        var $option = this.optionsList.querySelector('[data-option-index="' + optionIndex + '"]');
        var delta = 0;
        if ($option) {
          var $optionOffsetHeight = $option.offsetHeight;
          var $optionOffsetTop = $option.offsetTop;
          delta = $optionOffsetTop + $optionOffsetHeight - this.optionsListOffsetHeight;
        }
        if (delta > 0) {
          this.optionsList.scrollTop = delta;
        } else {
          this.optionsList.scrollTop = 0;
        }
      }
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions(options) {
      var _this2 = this;

      var optGroupDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _props2 = this.props,
          select = _props2.select,
          optionLabelPath = _props2.optionLabelPath,
          optionComponent = _props2.optionComponent,
          highlightedOption = _props2.highlightedOption,
          _onOptionClick = _props2.onOptionClick;

      return options.map(function (option, index) {
        var optionIndex = (0, _utils.getOptionIndex)(_this2.props.options, option);
        if ((0, _utils.isOptGroup)(option)) {
          return _react2.default.createElement(
            'div',
            {
              key: index,
              'data-group-index': optionIndex,
              className: (0, _classnames2.default)('PowerSelect__OptGroup', {
                'PowerSelect__OptGroup--disabled': !!option.disabled
              })
            },
            _react2.default.createElement(
              'div',
              { className: 'PowerSelect__OptGroup__Label' },
              option.label
            ),
            _this2.renderOptions(option.options, option.disabled)
          );
        }
        return _react2.default.createElement(_Option2.default, {
          key: index,
          optionIndex: optionIndex,
          option: option,
          select: select,
          disabled: optGroupDisabled,
          optionLabelPath: optionLabelPath,
          optionComponent: optionComponent,
          isHighlighted: option === highlightedOption,
          onOptionClick: function onOptionClick() {
            _onOptionClick(option);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var options = this.props.options;

      return _react2.default.createElement(
        'div',
        { className: 'PowerSelect__Options', ref: function ref(optionsList) {
            return _this3.optionsList = optionsList;
          } },
        this.renderOptions(options)
      );
    }
  }]);

  return Options;
}(_react.Component);

exports.default = Options;