'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _enzyme = require('enzyme');

var _constants = require('./constants');

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageObjectBase = function () {
  function PageObjectBase() {
    _classCallCheck(this, PageObjectBase);

    this.handleChange = _sinon2.default.spy();
  }

  _createClass(PageObjectBase, [{
    key: 'renderWithProps',
    value: function renderWithProps(props) {
      var selected = void 0;
      var attachToContainer = void 0;
      var Component = this.Component;

      if (!this.attachToContainer) {
        attachToContainer = this.attachToContainer = document.createElement('div');
        document.body.appendChild(attachToContainer);
      }

      var mountedComponent = this.mountedComponent = (0, _enzyme.mount)(_react2.default.createElement(Component, _extends({
        options: _constants.countries,
        selected: selected,
        optionLabelPath: 'name',
        onChange: this.handleChange
      }, props)), {
        attachTo: attachToContainer
      });
      return mountedComponent;
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      if (this.mountedComponent) {
        this.mountedComponent.detach();
      }
    }
  }, {
    key: 'triggerContainerClick',
    value: function triggerContainerClick() {
      this.container.simulate('click');
    }
  }, {
    key: 'triggerClearClick',
    value: function triggerClearClick() {
      this.mountedComponent.find('.PowerSelect__Clear').simulate('click');
    }
  }, {
    key: 'triggerKeydown',
    value: function triggerKeydown(keyCode) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var component = this.container;

      for (var i = 0; i < count; i++) {
        component.simulate('keyDown', {
          which: keyCode,
          keyCode: keyCode
        });
      }
    }
  }, {
    key: 'isOptionHighlighted',
    value: function isOptionHighlighted(index) {
      return this.portal.exists() && this.portal.find('.PowerSelect__Options').childAt(index).hasClass('PowerSelect__Option--highlighted');
    }
  }, {
    key: 'clickOption',
    value: function clickOption(index) {
      this.portal.find('.PowerSelect__Options').childAt(index).simulate('click');
    }
  }, {
    key: 'enterSearchText',
    value: function enterSearchText(string) {
      var input = document.querySelector('input.PowerSelect__SearchInput');
      _testUtils2.default.Simulate.change(input, { target: { value: string } });
    }
  }, {
    key: 'getVisibleOptions',
    value: function getVisibleOptions() {
      return this.portal.find('.PowerSelect__Options').children();
    }
  }, {
    key: 'renderChange',
    value: function renderChange() {
      var args = this.handleChange.lastCall.args[0];
      this.mountedComponent.setProps({
        selected: args.option
      });
    }
  }, {
    key: 'portal',
    get: function get() {
      return (0, _jquery2.default)('.PowerSelect__Tether');
    }
  }, {
    key: 'isOpened',
    get: function get() {
      var wrapper = this.mountedComponent;
      var hasOpenClass = this.container.hasClass('PowerSelect--open');
      var isDropdownVisible = this.portal.exists();
      return isDropdownVisible && hasOpenClass;
    }
  }, {
    key: 'container',
    get: function get() {
      return this.mountedComponent.find('.PowerSelect');
    }
  }, {
    key: 'trigger',
    get: function get() {
      return this.mountedComponent.find('SelectTrigger');
    }
  }, {
    key: 'isDisabled',
    get: function get() {
      return this.container.hasClass('PowerSelect--disabled');
    }
  }]);

  return PageObjectBase;
}();

exports.default = PageObjectBase;