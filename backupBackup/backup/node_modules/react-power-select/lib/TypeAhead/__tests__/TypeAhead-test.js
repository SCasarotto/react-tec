'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _createPageObject = require('../../__tests__/test-utils/create-page-object');

var _createPageObject2 = _interopRequireDefault(_createPageObject);

var _constants = require('../../__tests__/test-utils/constants');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // /* global describe, it, expect */


var TypeAheadPageObject = function (_PageObjectBase) {
  _inherits(TypeAheadPageObject, _PageObjectBase);

  function TypeAheadPageObject() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TypeAheadPageObject);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TypeAheadPageObject.__proto__ || Object.getPrototypeOf(TypeAheadPageObject)).call.apply(_ref, [this].concat(args))), _this), _this.Component = _index2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TypeAheadPageObject, [{
    key: 'inputComponent',
    get: function get() {
      return this.mountedComponent.find('.PowerSelect__TriggerInput').hostNodes();
    }
  }, {
    key: 'inputValue',
    get: function get() {
      return this.inputComponent.props().value;
    }
  }]);

  return TypeAheadPageObject;
}(_createPageObject2.default);

describe('<TypeAhead />', function () {
  var powerselect = void 0;
  beforeEach(function () {
    powerselect = new TypeAheadPageObject();
  });

  afterEach(function () {
    powerselect.unmount();
  });

  it('should render the container tag', function () {
    var wrapper = powerselect.renderWithProps({
      options: _constants.frameworks
    });
    expect(wrapper.find('.PowerSelect.TypeAhead').length).toBe(1);
    expect(wrapper.find('.PowerSelect__Trigger').length).toBe(1);
    expect(wrapper.find('.PowerSelect__TriggerInputContainer').length).toBe(1);
    expect(wrapper.find('.PowerSelect__TriggerInput').hostNodes().length).toBe(1);
    expect(wrapper.find('.PowerSelect__Clear').length).toBe(1);
    expect(wrapper.find('.PowerSelect__TriggerStatus').length).toBe(1);
  });

  it('should preselect, when `selected` is passed', function () {
    var selectedOption = _constants.frameworks[2];
    var wrapper = powerselect.renderWithProps({
      options: _constants.frameworks,
      selected: selectedOption
    });
    expect(powerselect.inputValue).toBe(selectedOption);
  });

  it('should preselect, when `selected` is passed even with object option', function () {
    var selectedOption = _constants.countries[2];
    var wrapper = powerselect.renderWithProps({
      selected: selectedOption
    });
    expect(powerselect.inputValue).toBe(selectedOption.name);
  });

  it('should clear the selected option, when the clear button is clicked', function () {
    var selectedOption = _constants.countries[2];
    var wrapper = powerselect.renderWithProps({
      selected: selectedOption
    });
    expect(powerselect.inputValue).toBe(selectedOption.name);
    powerselect.triggerClearClick();
    expect(powerselect.handleChange.calledOnce).toBeTruthy();
    powerselect.renderChange();
    expect(powerselect.inputValue).toBeFalsy();
  });

  it('should display placeholder when passed', function () {
    var placeholder = 'Please select a country';
    var wrapper = powerselect.renderWithProps({ placeholder: placeholder });
    expect(powerselect.inputComponent.props().placeholder).toBe(placeholder);
  });

  it('should be disabled, when `disabled` prop is set', function () {
    var wrapper = powerselect.renderWithProps({
      disabled: true
    });
    expect(powerselect.isDisabled).toBeTruthy();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeFalsy();
  });

  it('should pass highlightedOption to triggerComponent', function () {
    var wrapper = powerselect.renderWithProps({
      selected: _constants.countries[0]
    });
    powerselect.triggerContainerClick();
    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW);
    expect(powerselect.isOptionHighlighted(1)).toBeTruthy();
    expect(powerselect.trigger.props().highlightedOption).toBe(_constants.countries[1]);
    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW);
    expect(powerselect.isOptionHighlighted(2)).toBeTruthy();
    expect(powerselect.trigger.props().highlightedOption).toBe(_constants.countries[2]);
  });
});