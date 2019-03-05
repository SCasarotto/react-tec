'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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


var PowerSelectMultiplePageObject = function (_PageObjectBase) {
  _inherits(PowerSelectMultiplePageObject, _PageObjectBase);

  function PowerSelectMultiplePageObject() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PowerSelectMultiplePageObject);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PowerSelectMultiplePageObject.__proto__ || Object.getPrototypeOf(PowerSelectMultiplePageObject)).call.apply(_ref, [this].concat(args))), _this), _this.Component = _index2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PowerSelectMultiplePageObject, [{
    key: 'renderWithProps',
    value: function renderWithProps() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!props.selected) {
        props.selected = [];
      }
      return _get(PowerSelectMultiplePageObject.prototype.__proto__ || Object.getPrototypeOf(PowerSelectMultiplePageObject.prototype), 'renderWithProps', this).call(this, props);
    }
  }, {
    key: 'getSelectedOptionAt',
    value: function getSelectedOptionAt(index) {
      return this.renderedSelectedOptions.at(index);
    }
  }, {
    key: 'getSelectedOptionLabelAt',
    value: function getSelectedOptionLabelAt(index) {
      return this.getSelectedOptionAt(index).find('.PowerSelectMultiple__SelectedOption__Label').text();
    }
  }, {
    key: 'getSelectedOptionCloseAt',
    value: function getSelectedOptionCloseAt(index) {
      return this.renderedSelectedOptions.at(index).find('.PowerSelectMultiple__SelectedOption__Close');
    }
  }, {
    key: 'triggerOptionClearAt',
    value: function triggerOptionClearAt(index) {
      return this.getSelectedOptionCloseAt(index).simulate('click');
    }
  }, {
    key: 'triggerSelectedOptionClickAt',
    value: function triggerSelectedOptionClickAt(index) {
      return this.getSelectedOptionAt(index).simulate('click');
    }
  }, {
    key: 'renderChange',
    value: function renderChange() {
      var args = this.handleChange.lastCall.args[0];
      this.mountedComponent.setProps({
        selected: args.options
      });
    }
  }, {
    key: 'isOptionsPresentInDropdown',
    value: function isOptionsPresentInDropdown(options) {
      var selectedOptions = options || this.handleChange.lastCall.args[0].options;
      var dropdownOptions = this.mountedComponent.instance().select.dropdownRef.props.options;
      return selectedOptions.some(function (option) {
        return dropdownOptions.includes(option);
      });
    }
  }, {
    key: 'renderedSelectedOptions',
    get: function get() {
      return this.mountedComponent.find('.PowerSelectMultiple__SelectedOption');
    }
  }, {
    key: 'triggerInput',
    get: function get() {
      return this.mountedComponent.find('.PowerSelect__TriggerInput').hostNodes();
    }
  }]);

  return PowerSelectMultiplePageObject;
}(_createPageObject2.default);

describe('<PowerSelectMultiple />', function () {
  var powerselect = void 0;
  beforeEach(function () {
    powerselect = new PowerSelectMultiplePageObject();
  });

  afterEach(function () {
    powerselect.unmount();
  });

  it('should render the container tag', function () {
    var wrapper = powerselect.renderWithProps({
      options: _constants.frameworks
    });
    expect(wrapper.find('.PowerSelect.PowerSelectMultiple').length).toBe(1);
    expect(wrapper.find('.PowerSelect__Trigger').length).toBe(1);
    expect(wrapper.find('.PowerSelectMultiple__OptionsContainer').length).toBe(1);
    expect(wrapper.find('.PowerSelect__TriggerInput').hostNodes().length).toBe(1);
    expect(wrapper.find('.PowerSelect__Clear').length).toBe(1);
    expect(wrapper.find('.PowerSelect__TriggerStatus').length).toBe(1);
  });

  it('should preselect options, when `selected` is passed', function () {
    var selectedOptions = [_constants.frameworks[2], _constants.frameworks[3]];
    var wrapper = powerselect.renderWithProps({
      options: _constants.frameworks,
      selected: selectedOptions
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(selectedOptions.length);
    expect(powerselect.getSelectedOptionLabelAt(0)).toBe(selectedOptions[0]);
    expect(powerselect.getSelectedOptionLabelAt(1)).toBe(selectedOptions[1]);
  });

  it('should preselect, when `selected` is passed even with object option', function () {
    var selectedOptions = [_constants.countries[2], _constants.countries[3]];
    var wrapper = powerselect.renderWithProps({
      selected: selectedOptions
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(selectedOptions.length);
    expect(powerselect.getSelectedOptionLabelAt(0)).toBe(selectedOptions[0].name);
    expect(powerselect.getSelectedOptionCloseAt(0).length).toBe(1);
    expect(powerselect.getSelectedOptionLabelAt(1)).toBe(selectedOptions[1].name);
    expect(powerselect.getSelectedOptionCloseAt(1).length).toBe(1);
  });

  it("should clear the option, when the option's close icon is clicked", function () {
    var selectedOptions = [_constants.countries[2], _constants.countries[3]];
    var wrapper = powerselect.renderWithProps({
      selected: selectedOptions
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(selectedOptions.length);
    powerselect.triggerOptionClearAt(0);
    expect(powerselect.handleChange.calledOnce).toBeTruthy();
    var args = powerselect.handleChange.getCall(0).args[0];
    expect(args.options.length).toBe(selectedOptions.length - 1);
    expect(args.options).toEqual([selectedOptions[1]]);
    expect(args.select).toBeTruthy();
    expect(args.select.searchTerm).toBe(null);
    wrapper.setProps({
      selected: args.options
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(selectedOptions.length - 1);
  });

  it('should clear the selected option, when the clear button is clicked', function () {
    var selectedOptions = [_constants.countries[2], _constants.countries[3]];
    var wrapper = powerselect.renderWithProps({
      selected: selectedOptions
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(selectedOptions.length);
    powerselect.triggerClearClick();
    expect(powerselect.handleChange.calledOnce).toBeTruthy();
    var args = powerselect.handleChange.getCall(0).args[0];
    expect(args.options).toEqual([]);
    expect(args.select).toBeTruthy();
    expect(args.select.searchTerm).toBe(null);
    wrapper.setProps({
      selected: args.options
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(0);
  });

  it('should display placeholder when passed', function () {
    var placeholder = 'Please select a country';
    var wrapper = powerselect.renderWithProps({ placeholder: placeholder });
    expect(powerselect.triggerInput.props().placeholder).toBeTruthy();
    expect(powerselect.triggerInput.props().placeholder).toBe(placeholder);
    wrapper.setProps({ selected: [_constants.countries[2]] });
    expect(powerselect.triggerInput.props().placeholder).toBeFalsy();
  });

  it('should be disabled, when `disabled` prop is set', function () {
    var selectedOptions = [_constants.countries[2], _constants.countries[3]];
    var wrapper = powerselect.renderWithProps({
      selected: selectedOptions,
      disabled: true
    });
    expect(powerselect.container.hasClass('PowerSelect--disabled')).toBeTruthy();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeFalsy();
    powerselect.triggerClearClick();
    expect(powerselect.isOpened).toBeFalsy();
    powerselect.triggerOptionClearAt(0);
    expect(powerselect.isOpened).toBeFalsy();
  });

  it('should toggle the dropdown on click', function () {
    var wrapper = powerselect.renderWithProps({
      selected: [_constants.countries[2]]
    });
    expect(powerselect.isOpened).toBeFalsy();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeTruthy();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeFalsy();
    powerselect.triggerSelectedOptionClickAt(0);
    expect(powerselect.isOpened).toBeTruthy();
    powerselect.triggerSelectedOptionClickAt(0);
    expect(powerselect.isOpened).toBeFalsy();
  });

  it('should remove the options from the dropdown when selected', function () {
    var wrapper = powerselect.renderWithProps();
    expect(powerselect.renderedSelectedOptions.length).toBe(0);
    powerselect.triggerContainerClick();
    powerselect.clickOption(1);
    powerselect.renderChange();
    expect(powerselect.renderedSelectedOptions.length).toBe(1);
    expect(powerselect.isOptionsPresentInDropdown()).toBeFalsy();
    powerselect.clickOption(2);
    powerselect.renderChange();
    expect(powerselect.renderedSelectedOptions.length).toBe(2);
    expect(powerselect.isOptionsPresentInDropdown()).toBeFalsy();
    powerselect.clickOption(0);
    powerselect.renderChange();
    expect(powerselect.renderedSelectedOptions.length).toBe(3);
    expect(powerselect.isOptionsPresentInDropdown()).toBeFalsy();
  });

  it('should add back the options in dropdown when cleared', function () {
    var selectedOptions = _constants.countries.slice(0, 3);
    var wrapper = powerselect.renderWithProps({
      selected: selectedOptions
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(selectedOptions.length);
    powerselect.triggerContainerClick();
    expect(powerselect.isOptionsPresentInDropdown(selectedOptions)).toBeFalsy();
    powerselect.triggerOptionClearAt(2);
    powerselect.renderChange();
    expect(powerselect.isOptionsPresentInDropdown([selectedOptions[2]])).toBeTruthy();
    powerselect.triggerOptionClearAt(1);
    powerselect.renderChange();
    expect(powerselect.isOptionsPresentInDropdown([selectedOptions[1]])).toBeTruthy();
    powerselect.triggerOptionClearAt(0);
    powerselect.renderChange();
    expect(powerselect.isOptionsPresentInDropdown([selectedOptions[0]])).toBeTruthy();
    expect(powerselect.renderedSelectedOptions.length).toBe(0);
  });

  // Bugfix https://github.com/selvagsz/react-power-select/issues/19
  it('should add/remove options from dropdown even when dropdown is closed & opened', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeTruthy();
    powerselect.clickOption(1);
    powerselect.renderChange();
    // Trigger document click. Should re-check this
    map.click({
      target: {
        closest: function closest(selector) {
          return false;
        }
      }
    });
    expect(powerselect.isOpened).toBeFalsy();
    powerselect.triggerContainerClick();
    powerselect.clickOption(1);
    powerselect.renderChange();
    expect(powerselect.renderedSelectedOptions.length).toBe(2);
    expect(powerselect.isOptionsPresentInDropdown()).toBeFalsy();
    powerselect.clickOption(1);
    powerselect.renderChange();
    expect(powerselect.renderedSelectedOptions.length).toBe(3);
    expect(powerselect.isOptionsPresentInDropdown()).toBeFalsy();
  });

  it('should render custom selected option component when passed', function () {
    var selectedOptions = _constants.countries.slice(0, 3);
    var wrapper = powerselect.renderWithProps({
      selected: selectedOptions,
      selectedOptionComponent: function selectedOptionComponent(_ref2) {
        var option = _ref2.option;

        return _react2.default.createElement(
          'span',
          { className: 'customSelectedOption' },
          option.name
        );
      }
    });
    expect(powerselect.renderedSelectedOptions.length).toBe(3);
    expect(wrapper.find('span.customSelectedOption').length).toBe(3);
    expect(wrapper.containsAllMatchingElements([_react2.default.createElement(
      'span',
      { className: 'customSelectedOption' },
      selectedOptions[0].name
    ), _react2.default.createElement(
      'span',
      { className: 'customSelectedOption' },
      selectedOptions[1].name
    ), _react2.default.createElement(
      'span',
      { className: 'customSelectedOption' },
      selectedOptions[2].name
    )])).toBeTruthy();
  });
});