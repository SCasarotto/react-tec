'use strict';

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


var PowerSelectPageObject = function (_PageObjectBase) {
  _inherits(PowerSelectPageObject, _PageObjectBase);

  function PowerSelectPageObject() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PowerSelectPageObject);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PowerSelectPageObject.__proto__ || Object.getPrototypeOf(PowerSelectPageObject)).call.apply(_ref, [this].concat(args))), _this), _this.Component = _index2.default, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PowerSelectPageObject;
}(_createPageObject2.default);

describe('<PowerSelect />', function () {
  var powerselect = void 0;
  beforeEach(function () {
    powerselect = new PowerSelectPageObject();
  });

  afterEach(function () {
    powerselect.unmount();
  });

  it('should render the container tag', function () {
    var wrapper = powerselect.renderWithProps({
      options: _constants.frameworks
    });
    expect(wrapper.find('.PowerSelect').length).toBe(1);
    expect(wrapper.find('.PowerSelect__Trigger').length).toBe(1);
    expect(wrapper.find('.PowerSelect__TriggerLabel').length).toBe(1);
    expect(wrapper.find('.PowerSelect__Clear').length).toBe(1);
    expect(wrapper.find('.PowerSelect__TriggerStatus').length).toBe(1);
  });

  it('should preselect, when `selected` is passed', function () {
    var selectedOption = _constants.frameworks[2];
    var wrapper = powerselect.renderWithProps({
      options: _constants.frameworks,
      selected: selectedOption
    });
    expect(wrapper.find('.PowerSelect__TriggerLabel').text()).toBe(selectedOption);
  });

  it('should preselect, when `selected` is passed even with object option', function () {
    var selectedOption = _constants.countries[2];
    var wrapper = powerselect.renderWithProps({
      selected: selectedOption
    });
    expect(wrapper.find('.PowerSelect__TriggerLabel').text()).toBe(selectedOption.name);
  });

  it('should not render close button, when `showClear` is false', function () {
    var wrapper = powerselect.renderWithProps({
      showClear: false
    });
    expect(wrapper.find('.PowerSelect__Clear').length).toBe(0);
  });

  it('should clear the selected option, when the clear button is clicked', function () {
    var wrapper = powerselect.renderWithProps({
      selected: _constants.countries[2]
    });

    expect(wrapper.find('.PowerSelect__TriggerLabel').text()).toBe('Canada');
    wrapper.find('.PowerSelect__Clear').simulate('click');
    expect(powerselect.handleChange.calledOnce).toBeTruthy();

    var args = powerselect.handleChange.getCall(0).args[0];
    expect(args.option).toBe(undefined);
    expect(args.select).toBeTruthy();
    expect(args.select.searchTerm).toBe(null);

    wrapper.setProps({
      selected: args.option
    });
    expect(wrapper.find('.PowerSelect__TriggerLabel').text()).toBeFalsy();
  });

  it('should delegate `className` to the container, tether & menu', function () {
    var wrapper = powerselect.renderWithProps({
      className: 'TestPowerSelect'
    });
    expect(wrapper.find('.PowerSelect').hasClass('TestPowerSelect')).toBeTruthy();

    powerselect.triggerContainerClick();
    expect(powerselect.portal.find('.PowerSelect__Menu').hasClass('TestPowerSelect__Menu')).toBeTruthy();
    expect(document.querySelectorAll('.PowerSelect__Tether.TestPowerSelect__Tether').length).toBe(1);
  });

  it('should delegate `tabIndex` when passed', function () {
    var tabIndex = 2;
    var wrapper = powerselect.renderWithProps({ tabIndex: tabIndex });
    expect(wrapper.find('.PowerSelect').prop('tabIndex')).toBe(tabIndex);
  });

  it('should display placeholder when passed', function () {
    var placeholder = 'Please select a country';
    var wrapper = powerselect.renderWithProps({ placeholder: placeholder });
    expect(wrapper.find('.PowerSelect__Placeholder').exists()).toBeTruthy();
    expect(wrapper.find('.PowerSelect__Placeholder').text()).toBe(placeholder);

    wrapper.setProps({ selected: _constants.countries[2] });
    expect(wrapper.find('.PowerSelect__Placeholder').exists()).toBeFalsy();
  });

  it('should display searchPlaceholder when passed', function () {
    var searchPlaceholder = 'Search...';
    var wrapper = powerselect.renderWithProps({ searchPlaceholder: searchPlaceholder });
    powerselect.triggerContainerClick();
    expect(powerselect.portal.find('.PowerSelect__SearchInput[placeholder="' + searchPlaceholder + '"]').exists()).toBeTruthy();
  });

  it('should render `triggerLHSComponent` when passed', function () {
    var SearchIcon = _react2.default.createElement('i', { className: 'icon-search' });
    var TriggerLHSComponent = function TriggerLHSComponent() {
      return SearchIcon;
    };
    var wrapper = powerselect.renderWithProps({
      triggerLHSComponent: TriggerLHSComponent
    });

    expect(wrapper.contains(SearchIcon)).toBeTruthy();
    expect(wrapper.find('.PowerSelect__Trigger__LHS').exists()).toBeTruthy();
  });

  it('should render `triggerRHSComponent` when passed', function () {
    var SearchIcon = _react2.default.createElement('i', { className: 'icon-search' });
    var TriggerRHSComponent = function TriggerRHSComponent() {
      return SearchIcon;
    };
    var wrapper = powerselect.renderWithProps({
      triggerRHSComponent: TriggerRHSComponent
    });

    expect(wrapper.contains(SearchIcon)).toBeTruthy();
    expect(wrapper.find('.PowerSelect__Trigger__RHS').exists()).toBeTruthy();
  });

  it('should be disabled, when `disabled` prop is set', function () {
    var wrapper = powerselect.renderWithProps({
      disabled: true
    });

    expect(wrapper.find('.PowerSelect').hasClass('PowerSelect--disabled')).toBeTruthy();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeFalsy();
  });

  it('should disable search when `searchEnabled` is false', function () {
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();
    expect(powerselect.portal.find('.PowerSelect__SearchInput').exists()).toBeTruthy();

    wrapper.setProps({
      searchEnabled: false
    });

    expect(powerselect.portal.find('.PowerSelect__SearchInput').exists()).toBeFalsy();
  });

  it('should toggle the dropdown on click', function () {
    var wrapper = powerselect.renderWithProps({
      selected: _constants.countries[2]
    });

    expect(powerselect.isOpened).toBeFalsy();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeTruthy();
    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeFalsy();
  });

  it('should render the options in the dropdown');

  it('should close the dropdown on document click', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });

    var wrapper = powerselect.renderWithProps();

    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeTruthy();

    // Should re-check this
    map.click({
      target: {
        closest: function closest(selector) {
          return false;
        }
      }
    });
    expect(powerselect.isOpened).toBeFalsy();
  });

  it('should highlight the above/below option on up/down arrow press', function () {
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();

    expect(powerselect.isOptionHighlighted(0)).toBeFalsy();
    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW);
    expect(powerselect.isOptionHighlighted(0)).toBeTruthy();

    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW, 3);
    expect(powerselect.isOptionHighlighted(0)).toBeFalsy();
    expect(powerselect.isOptionHighlighted(3)).toBeTruthy();

    powerselect.triggerKeydown(_constants.KEY_CODES.UP_ARROW);
    expect(powerselect.isOptionHighlighted(3)).toBeFalsy();
    expect(powerselect.isOptionHighlighted(2)).toBeTruthy();

    powerselect.triggerKeydown(_constants.KEY_CODES.UP_ARROW, 2);
    expect(powerselect.isOptionHighlighted(0)).toBeTruthy();
  });

  it('should highlight the first/last option on circular', function () {
    var optionsCount = _constants.countries.length;
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();
    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW, optionsCount);

    expect(powerselect.isOptionHighlighted(optionsCount - 1)).toBeTruthy();
    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW);
    expect(powerselect.isOptionHighlighted(0)).toBeTruthy();
    powerselect.triggerKeydown(_constants.KEY_CODES.UP_ARROW);
    expect(powerselect.isOptionHighlighted(optionsCount - 1)).toBeTruthy();
  });

  it('should highlight the selected option when opened', function () {
    var selectionIndex = 2;
    var wrapper = powerselect.renderWithProps({
      selected: _constants.countries[selectionIndex]
    });
    powerselect.triggerContainerClick();
    expect(powerselect.isOptionHighlighted(selectionIndex)).toBeTruthy();
  });

  // it('should make the highlighted option within viewport');

  it('should select the option when click', function () {
    var optionIndex = 2;
    var optionToBeSelected = _constants.countries[2];
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();

    powerselect.clickOption(optionIndex);
    var args = powerselect.handleChange.getCall(0).args[0];
    expect(powerselect.handleChange.calledOnce).toBeTruthy();

    expect(args.option).toBe(optionToBeSelected);
    expect(args.select).toBeTruthy();

    wrapper.setProps({
      selected: args.option
    });
    expect(wrapper.find('.PowerSelect__TriggerLabel').text()).toBe(optionToBeSelected.name);
  });

  it('should select the option on tab & focusout', function () {
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();

    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW, 2);
    powerselect.triggerKeydown(_constants.KEY_CODES.TAB);

    var args = powerselect.handleChange.getCall(0).args[0];
    expect(powerselect.handleChange.calledOnce).toBeTruthy();

    expect(args.option).toBe(_constants.countries[1]);
    expect(args.select).toBeTruthy();

    wrapper.setProps({
      selected: args.option
    });
    expect(wrapper.find('.PowerSelect__TriggerLabel').text()).toBe(_constants.countries[1].name);
  });

  it('should select the option on enter & focusin', function () {
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();

    powerselect.triggerKeydown(_constants.KEY_CODES.DOWN_ARROW, 2);
    powerselect.triggerKeydown(_constants.KEY_CODES.ENTER);

    var args = powerselect.handleChange.getCall(0).args[0];
    expect(powerselect.handleChange.calledOnce).toBeTruthy();

    expect(args.option).toBe(_constants.countries[1]);
    expect(args.select).toBeTruthy();

    wrapper.setProps({
      selected: args.option
    });
    expect(wrapper.find('.PowerSelect__TriggerLabel').text()).toBe(_constants.countries[1].name);
  });

  it('should close dropdown on escape press', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });

    var wrapper = powerselect.renderWithProps();

    powerselect.triggerContainerClick();
    expect(powerselect.isOpened).toBeTruthy();

    //mock contains
    powerselect.mountedComponent.instance().select.powerselect.contains = jest.fn().mockReturnValue(true);

    // Should re-check this
    map.keydown({
      which: _constants.KEY_CODES.ESCAPE,
      keyCode: _constants.KEY_CODES.ESCAPE
    });

    expect(powerselect.isOpened).toBeFalsy();
  });

  it('should filter the options based on the searchTerm', function () {
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();
    var optionsCount = powerselect.getVisibleOptions().length;
    powerselect.enterSearchText('in');
    var filteredOptions = powerselect.getVisibleOptions();
    var filteredOptionsCount = filteredOptions.length;

    expect(filteredOptionsCount).toBeLessThan(optionsCount);

    for (var i = 0; i < filteredOptionsCount; i++) {
      expect(filteredOptions.at(i).text()).toMatch(/in/gi);
    }

    powerselect.enterSearchText('');
    expect(powerselect.getVisibleOptions().length).toBeGreaterThan(filteredOptionsCount);
    expect(powerselect.getVisibleOptions().length).toBe(optionsCount);
  });

  it('should use custom `matcher` func when provided', function () {
    var matcher = function matcher(_ref2) {
      var option = _ref2.option,
          _ref2$searchTerm = _ref2.searchTerm,
          searchTerm = _ref2$searchTerm === undefined ? '' : _ref2$searchTerm,
          searchIndices = _ref2.searchIndices;

      return option[searchIndices].toLowerCase().indexOf(searchTerm) !== -1;
    };

    var wrapper = powerselect.renderWithProps({
      matcher: matcher
    });

    powerselect.triggerContainerClick();
    var optionsCount = powerselect.getVisibleOptions().length;
    powerselect.enterSearchText('abc');
    expect(powerselect.getVisibleOptions().length).toBe(0);
    powerselect.enterSearchText('');
    expect(powerselect.getVisibleOptions().length).toBe(optionsCount);
    powerselect.enterSearchText('india');
    expect(powerselect.getVisibleOptions().length).toBe(1);
    powerselect.enterSearchText('');
    expect(powerselect.getVisibleOptions().length).toBe(optionsCount);
  });

  it('should reset the filter when the dropdown is closed', function () {
    var wrapper = powerselect.renderWithProps();
    powerselect.triggerContainerClick();
    var optionsCount = powerselect.getVisibleOptions().length;
    powerselect.enterSearchText('in');
    expect(powerselect.getVisibleOptions().length).toBeLessThan(optionsCount);

    powerselect.triggerContainerClick(); // close it
    powerselect.triggerContainerClick(); // open again
    expect(powerselect.getVisibleOptions().length).toBe(optionsCount);
  });

  it('should trigger `onFocus` when the powerselect is focused', function () {
    var handleOnFocus = _sinon2.default.spy();
    var wrapper = powerselect.renderWithProps({
      onFocus: handleOnFocus
    });

    expect(handleOnFocus.calledOnce).toBeFalsy();
    wrapper.find('.PowerSelect').simulate('focus');
    expect(handleOnFocus.calledOnce).toBeTruthy();

    var args = handleOnFocus.getCall(0).args;
    expect(args.length).toBe(2);
    expect(args[0].type).toBe('focus');
    expect(args[1].select).toBeTruthy();
  });

  it('should trigger `onBlur` when the powerselect is blurred');

  it('should trigger `onOpen` when the powerselect is opened');

  it('should trigger `onClose` when the powerselect is closed');

  it('should trigger `onKeyDown` when any key is pressed');

  it('should trigger `onSearchInputChange` when searchInput changes');

  it('should render the `optionComponent`, when provided');

  it('should render the `selectedOptionComponent`, when provided');

  it('should render the `beforeOptionsComponent`, when provided');

  it('should render the `afterOptionsComponent`, when provided');

  it('should disable & prevent clicks & highlights when the option is disabled');

  it('should prevent max call limit recursion, when all options are disabled');
});