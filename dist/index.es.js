import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import React__default, { Component, createElement, useState, useEffect, Fragment, createContext, useReducer, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import reactDom, { findDOMNode } from 'react-dom';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _templateObject = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Button = styled.button(_templateObject, function (props) {
	var disabled = props.disabled,
	    theme = props.theme;


	return '\n\t\t\tposition: relative;\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 18px;\n\t\t\tpadding: 5px 20px;\n\t\t\ttext-align: center;\n\t\t\tcursor: ' + (disabled ? 'not-allowed' : 'pointer') + ';\n\t\t\tborder-radius: 5px;\n            box-sizing: border-box;\n\n\t\t\tcolor: ' + (disabled ? theme.gray : theme.darkerGray) + ';\n\t\t\tborder: 1px solid ' + (disabled ? theme.lighterGray : theme.lightGray) + ';\n\n\t\t\ttransition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;\n\t\t\t:hover {\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tborder: 1px solid ' + theme.primary + ';\n\t\t\t}\n\t\t\t:active {\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tborder: 1px solid ' + theme.primary + ';\n\t\t\t}\n\t\t';
});

//

var TEButton = function TEButton(props) {
	return React__default.createElement(Button, props);
};

TEButton.defaultProps = {
	type: 'button'
};

var _templateObject$1 = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Label = styled.label(_templateObject$1, function (props) {
    var disabled = props.disabled,
        htmlFor = props.htmlFor,
        theme = props.theme;


    var cursor = 'default';
    if (htmlFor) {
        cursor = 'pointer';
    }
    if (disabled) {
        cursor = 'not-allowed';
    }

    return '\n            position: relative;\n            display: block;\n            width: auto;\n            box-sizing: border-box;\n            margin-bottom: 3px;\n            font-size: 18px;\n            color: ' + (disabled ? theme.gray : theme.darkerGray) + ';\n            cursor: ' + cursor + ';\n\n            @media (max-width: 550px) {\n                font-size: 16px;\n            }\n        ';
});

//

var TELabel = function TELabel(props) {
    var children = props.children,
        required = props.required,
        rest = objectWithoutProperties(props, ['children', 'required']);

    return React__default.createElement(
        Label,
        rest,
        children,
        required ? ' *' : ''
    );
};

TELabel.propTypes = {
    htmlFor: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool
};

var _templateObject$2 = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Row = styled.div(_templateObject$2, function (props) {
    var size = props.size,
        last = props.last;


    var width = '100%';
    switch (size) {
        case 'full':
            width = '100%';
            break;
        case 'two-third':
            width = '66.66%';
            break;
        case 'half':
            width = '50%';
            break;
        case 'third':
            width = '33.33%';
            break;
        case 'forth':
            width = '25%';
            break;
        case 'condensed':
            width = 'auto';
            break;
        default:
            break;
    }

    return '\n            position: relative;\n            display: inline-block;\n            vertical-align: top;\n            margin-bottom: 10px;\n            text-align: left;\n            box-sizing: border-box;\n            width: ' + width + ';\n            padding-left: ' + (size !== 'full' && last ? '5px' : '0px') + ';\n            padding-right: ' + (size !== 'full' && !last ? '5px' : '0px') + ';\n        ';
});

//

var TERow = function TERow(props) {
	return React__default.createElement(Row, props);
};

TERow.propTypes = {
	size: PropTypes.string,
	last: PropTypes.bool
};

TERow.defaultProps = {
	size: 'full',
	last: false
};

var _templateObject$3 = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Input = styled.input(_templateObject$3, function (props) {
	return '\n\t\t\tcursor: pointer;\n            box-sizing: border-box;\n\t\t';
});

//

var TECheckboxInput = function TECheckboxInput(props) {
	return React__default.createElement(Input, _extends({}, props, { type: 'checkbox' }));
};

var _templateObject$4 = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Container = styled(TERow)(_templateObject$4, function (props) {
    return '\n            margin-bottom: 10px;\n            display: inline-block;\n            vertical-align: top;\n        ';
});
var InputWrapper = styled.div(_templateObject$4, function (props) {
    var scrolling = props.scrolling,
        theme = props.theme;

    return '\n            display: flex;\n            flex-wrap: wrap;\n            ' + (scrolling ? '\n                    height: 300px;\n                    overflow-y: scroll;\n                    background-color: ' + theme.white + ';\n                    padding: 10px;\n                    border: 1px solid ' + theme.lightGray + ';\n                    border-radius: 5;\n                ' : '') + '\n        ';
});

var RowWrarpper = styled(TERow)(_templateObject$4, function (props) {
    return '\n            margin-bottom: 5px;\n            display: flex;\n            align-items: center;\n        ';
});

var Checkbox = styled(TECheckboxInput)(_templateObject$4, function (props) {
    return '\n            display: inline-block;\n            vertical-align: middle;\n            cursor: pointer;\n        ';
});
var Label$1 = styled(TELabel)(_templateObject$4, function (props) {
    var theme = props.theme,
        disabled = props.disabled;


    return '\n            width: auto;\n            display: inline-block;\n            vertical-align: middle;\n            padding-left: 10px;\n            margin-bottom: 0px;\n            cursor: pointer;\n            fontSize: 14px;\n            color: ' + (disabled ? theme.gray : theme.darkerGray) + ';\n\n            @media (max-width: 550px) {\n                fontSize: 12px;\n            };\n        ';
});

//

var manipulateRowData = function manipulateRowData(_ref) {
    var rowData = _ref.rowData,
        _ref$labelForKey = _ref.labelForKey,
        labelForKey = _ref$labelForKey === undefined ? '' : _ref$labelForKey;

    //Allowing For Greater Shorthand
    if (typeof rowData === 'string') {
        var label = rowData;
        var value = rowData;
        var key = labelForKey + rowData;
        return { label: label, value: value, key: key };
    } else if ((typeof rowData === 'undefined' ? 'undefined' : _typeof(rowData)) === 'object') {
        var _label = rowData.label,
            _rowData$value = rowData.value,
            _value = _rowData$value === undefined ? _label : _rowData$value,
            _rowData$key = rowData.key,
            _key = _rowData$key === undefined ? labelForKey + _label : _rowData$key;

        return { label: _label, value: _value, key: _key };
    }
};
var TECheckboxGroup = function TECheckboxGroup(props) {
    var handleInputChange = function handleInputChange(event) {
        var checkedValues = props.checkedValues,
            onChange = props.onChange;
        var value = event.target.value;


        var newValues = [].concat(toConsumableArray(checkedValues));
        if (checkedValues) {
            if (checkedValues.includes(value)) {
                newValues = newValues.filter(function (e) {
                    return e !== value;
                });
            } else {
                newValues.push(value);
            }
        }
        onChange(newValues, event);
    };

    var size = props.size,
        last = props.last,
        title = props.title,
        required = props.required,
        rowSize = props.rowSize,
        disabled = props.disabled,
        checkedValues = props.checkedValues,
        buttonArray = props.buttonArray,
        labelForKey = props.labelForKey;


    return React__default.createElement(
        Container,
        { size: size, last: last },
        React__default.createElement(
            TELabel,
            { disabled: disabled, required: required },
            title
        ),
        React__default.createElement(
            InputWrapper,
            null,
            buttonArray && buttonArray.map(function (rowData) {
                var _manipulateRowData = manipulateRowData({
                    rowData: rowData,
                    labelForKey: labelForKey
                }),
                    label = _manipulateRowData.label,
                    value = _manipulateRowData.value,
                    key = _manipulateRowData.key;

                return React__default.createElement(
                    RowWrarpper,
                    { key: key, size: rowSize },
                    React__default.createElement(Checkbox, {
                        value: value,
                        onChange: handleInputChange,
                        id: key,
                        checked: checkedValues && checkedValues.includes(value),
                        disabled: disabled
                    }),
                    React__default.createElement(
                        Label$1,
                        { htmlFor: key, disabled: disabled },
                        label
                    )
                );
            })
        )
    );
};

TECheckboxGroup.propTypes = {
    onChange: PropTypes.func.isRequired,
    scrolling: PropTypes.bool,
    buttonArray: PropTypes.array.isRequired,
    checkedValues: PropTypes.array.isRequired,
    labelForKey: PropTypes.string.isRequired
};

TECheckboxGroup.defaultProps = {
    scrolling: false
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}

// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (!WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        }
      }

      this.componentNode = findDOMNode(this.getInstance()); // return early so we dont initiate onClickOutside

      if (this.props.disableOnClickOutside) return;
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = findDOMNode(this.getInstance());
    };
    /**
     * Remove all document's event listeners for this component
     */


    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */


    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          excludeScrollbar = _props.excludeScrollbar,
          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return createElement(WrappedComponent, props);
    };

    return onClickOutside;
  }(Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose$1;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty$1 = _defineProperty;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.7
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$2 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$2(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$2(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$2({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$2({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$2({}, side, reference[side]),
      end: defineProperty$2({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$1(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
//# sourceMappingURL=popper.js.map

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React__default.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React__default.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext$1 = unwrapExports(lib);

var ManagerContext = createContext$1({
  setReferenceNode: undefined,
  referenceNode: undefined
});

var Manager =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(Manager, _React$Component);

  function Manager() {
    var _this;

    _this = _React$Component.call(this) || this;

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "setReferenceNode", function (referenceNode) {
      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
        return;
      }

      _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: _extends_1({}, context, {
            referenceNode: referenceNode
          })
        };
      });
    });

    _this.state = {
      context: {
        setReferenceNode: _this.setReferenceNode,
        referenceNode: undefined
      }
    };
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.render = function render() {
    return createElement(ManagerContext.Provider, {
      value: this.state.context
    }, this.props.children);
  };

  return Manager;
}(Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "state", {
      data: undefined,
      placement: undefined
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "popperInstance", void 0);

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "popperNode", null);

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "arrowNode", null);

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      safeInvoke(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends_1({}, _this.props.modifiers, {
          arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = assertThisInitialized(assertThisInitialized(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
    });

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    safeInvoke(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(Component);

defineProperty$1(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements$1 = Popper.placements;
function Popper$1(_ref) {
  var referenceElement = _ref.referenceElement,
      props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return createElement(ManagerContext.Consumer, null, function (_ref2) {
    var referenceNode = _ref2.referenceNode;
    return createElement(InnerPopper, _extends_1({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning$1 = function() {};

if (__DEV__) {
  var printWarning$1 = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning$1 = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning$1.apply(null, [format].concat(args));
    }
  };
}

var warning_1$1 = warning$1;

var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty$1(assertThisInitialized(assertThisInitialized(_this)), "refHandler", function (node) {
      safeInvoke(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.render = function render() {
    warning_1$1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(Component);

function Reference(props) {
  return createElement(ManagerContext.Consumer, null, function (_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return createElement(InnerReference, _extends_1({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

// Public components
 // Public types

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @param {Options} [options] - the object with options. Unused; present for FP submodule compatibility sake. See [Options]{@link https://date-fns.org/docs/Options}
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * var result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * var result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * var result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * var result = isDate({})
 * //=> false
 */
function isDate (value) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  return (
    value instanceof Date ||
    (typeof value === 'object' &&
      Object.prototype.toString.call(value) === '[object Date]')
  )
}

function toInteger (dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number)
}

var MILLISECONDS_IN_MINUTE$1 = 60000;

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds (dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE$1;

  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE$1 + millisecondsPartOfTimezoneOffset
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate (argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {};

  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (argument instanceof Date ||
    (typeof argument === 'object' && Object.prototype.toString.call(argument) === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument === 'number' || Object.prototype.toString.call(argument) === '[object Number]') {
    return new Date(argument)
  } else if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate$1(restDateString, year);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);

      if (isNaN(time)) {
        return new Date(NaN)
      }
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone);
      if (isNaN(offset)) {
        return new Date(NaN)
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(NaN)
  }
}

function splitDateString (dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;

  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate$1 (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = patterns.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;

    if (!validateDate(year, month)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);

    if (!validateDate(year, month, day)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;

    if (!validateWeekDate(year, week)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));

    if (!validateTime(hours)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));

    if (!validateTime(hours, minutes)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));

    if (!validateTime(hours, minutes, seconds)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  var hours;

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);

    if (!validateTimezone(hours)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOWeekYear (isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// Validation functions

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

function validateDate (year, month, date) {
  if (month < 0 || month > 11) {
    return false
  }

  if (date != null) {
    if (date < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false
    }
  }

  return true
}

function validateDayOfYearDate (year, dayOfYear) {
  if (dayOfYear < 1) {
    return false
  }

  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false
  }

  return true
}

function validateWeekDate (year, week, day) {
  if (week < 0 || week > 52) {
    return false
  }

  if (day != null && (day < 0 || day > 6)) {
    return false
  }

  return true
}

function validateTime (hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false
  }

  return true
}

function validateTimezone (hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false
  }

  return true
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid('2014-02-31')
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid$1 (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date)
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },

  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },

  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },

  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },

  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },

  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

function formatDistance (token, count, options) {
  options = options || {};

  var result;
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result
    } else {
      return result + ' ago'
    }
  }

  return result
}

function buildFormatLongFn (args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format
  }
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};

var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};

var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}

function buildLocalizeFn (args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var context = options.context ? String(options.context) : 'standalone';

    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth];
    } else {
      valuesArray = args.values[width] || args.values[args.defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index]
  }
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber (dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaulFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn (args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};

    var matchResult = string.match(args.matchPattern);
    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0];

    var parseResult = string.match(args.parsePattern);
    if (!parseResult) {
      return null
    }
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function buildMatchFn (args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;

    var matchPattern = (width && args.matchPatterns[width]) || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null
    }
    var matchedString = matchResult[0];

    var parsePatterns = (width && args.parsePatterns[width]) || args.parsePatterns[args.defaultParseWidth];

    var value;
    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string)
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string)
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;

    return {
      value: value,
      rest: string.slice(matchedString.length)
    }
  }
}

function findKey (object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key
    }
  }
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;

var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};

var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};

var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

var MILLISECONDS_IN_DAY = 86400000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCDayOfYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var weekStartsOn = 1;

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);

  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCISOWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, options);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively')
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);

  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCWeekYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale &&
    locale.options &&
    locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date
}

var MILLISECONDS_IN_WEEK$1 = 604800000;

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function getUTCWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCWeek(date, dirtyOptions).getTime() - startOfUTCWeekYear(date, dirtyOptions).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {width: 'abbreviated'})
      // A, B
      case 'GGGGG':
        return localize.era(era, {width: 'narrow'})
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {width: 'wide'})
    }
  },

  // Year
  y: function (date, token, localize, options) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();

    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;

    // Two digit year
    if (token === 'yy') {
      var twoDigitYear = year % 100;
      return addLeadingZeros(twoDigitYear, 2)
    }

    // Ordinal number
    if (token === 'yo') {
      return localize.ordinalNumber(year, {unit: 'year'})
    }

    // Padding
    return addLeadingZeros(year, token.length)
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2)
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {unit: 'year'})
    }

    // Padding
    return addLeadingZeros(weekYear, token.length)
  },

  // ISO week-numbering year
  R: function (date, token, localize, options) {
    var isoWeekYear = getUTCISOWeekYear(date, options);

    // Padding
    return addLeadingZeros(isoWeekYear, token.length)
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token, localize, options) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length)
  },

  // Quarter
  Q: function (date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter)
      // 01, 02, 03, 04
      case 'QQ':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {unit: 'quarter'})
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {width: 'abbreviated', context: 'formatting'})
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {width: 'narrow', context: 'formatting'})
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize, options) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter)
      // 01, 02, 03, 04
      case 'qq':
        return addLeadingZeros(quarter, 2)
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {unit: 'quarter'})
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {width: 'abbreviated', context: 'standalone'})
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {width: 'narrow', context: 'standalone'})
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {width: 'wide', context: 'standalone'})
    }
  },

  // Month
  M: function (date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'M':
        return String(month + 1)
      // 01, 02, ..., 12
      case 'MM':
        return addLeadingZeros(month + 1, 2)
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {unit: 'month'})
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {width: 'abbreviated', context: 'formatting'})
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {width: 'narrow', context: 'formatting'})
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone month
  L: function (date, token, localize, options) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1)
      // 01, 02, ..., 12
      case 'LL':
        return addLeadingZeros(month + 1, 2)
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {unit: 'month'})
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {width: 'abbreviated', context: 'standalone'})
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {width: 'narrow', context: 'standalone'})
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {width: 'wide', context: 'standalone'})
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {unit: 'week'})
    }

    return addLeadingZeros(week, token.length)
  },

  // ISO week of year
  I: function (date, token, localize, options) {
    var isoWeek = getUTCISOWeek(date, options);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {unit: 'week'})
    }

    return addLeadingZeros(isoWeek, token.length)
  },

  // Day of the month
  d: function (date, token, localize, options) {
    var dayOfMonth = date.getUTCDate();

    if (token === 'do') {
      return localize.ordinalNumber(dayOfMonth, {unit: 'date'})
    }

    return addLeadingZeros(dayOfMonth, token.length)
  },

  // Day of year
  D: function (date, token, localize, options) {
    var dayOfYear = getUTCDayOfYear(date, options);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {unit: 'dayOfYear'})
    }

    return addLeadingZeros(dayOfYear, token.length)
  },

  // Day of week
  E: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = ((dayOfWeek - options.weekStartsOn + 8) % 7) || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek)
      // Padded numerical value
      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2)
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {unit: 'day'})
      case 'eee':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = ((dayOfWeek - options.weekStartsOn + 8) % 7) || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek)
      // Padded numberical value
      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length)
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {unit: 'day'})
      case 'ccc':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'standalone'})
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'standalone'})
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {width: 'short', context: 'standalone'})
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'standalone'})
    }
  },

  // ISO day of week
  i: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek)
      // 02
      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length)
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {unit: 'day'})
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {width: 'abbreviated', context: 'formatting'})
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {width: 'narrow', context: 'formatting'})
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {width: 'short', context: 'formatting'})
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {width: 'wide', context: 'formatting'})
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = (hours / 12) >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = (hours / 12) >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'abbreviated', context: 'formatting'})
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'narrow', context: 'formatting'})
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {width: 'wide', context: 'formatting'})
    }
  },

  // Hour [1-12]
  h: function (date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (hours === 0) {
      hours = 12;
    }

    if (token === 'ho') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [0-23]
  H: function (date, token, localize, options) {
    var hours = date.getUTCHours();

    if (token === 'Ho') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [0-11]
  K: function (date, token, localize, options) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Hour [1-24]
  k: function (date, token, localize, options) {
    var hours = date.getUTCHours();

    if (hours === 0) {
      hours = 24;
    }

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {unit: 'hour'})
    }

    return addLeadingZeros(hours, token.length)
  },

  // Minute
  m: function (date, token, localize, options) {
    var minutes = date.getUTCMinutes();

    if (token === 'mo') {
      return localize.ordinalNumber(minutes, {unit: 'minute'})
    }

    return addLeadingZeros(minutes, token.length)
  },

  // Second
  s: function (date, token, localize, options) {
    var seconds = date.getUTCSeconds();

    if (token === 'so') {
      return localize.ordinalNumber(seconds, {unit: 'second'})
    }

    return addLeadingZeros(seconds, token.length)
  },

  // Fraction of second
  S: function (date, token, localize, options) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, numberOfDigits)
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z'
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset)

      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx': // Hours and minutes without `:` delimeter
        return formatTimezone(timezoneOffset)

      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (GMT)
  O: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':')
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':')
    }
  },

  // Seconds timestamp
  t: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length)
  },

  // Milliseconds timestamp
  T: function (date, token, localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length)
  }
};

function addLeadingZeros (number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output
}

function formatTimezone (offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimeter + minutes
}

function formatTimezoneWithOptionalMinutes (offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2)
  }
  return formatTimezone(offset, dirtyDelimeter)
}

function formatTimezoneShort (offset, dirtyDelimeter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours)
  }
  var delimeter = dirtyDelimeter || '';
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2)
}

function dateLongFormatter (pattern, formatLong, options) {
  switch (pattern) {
    case 'P':
      return formatLong.date({width: 'short'})
    case 'PP':
      return formatLong.date({width: 'medium'})
    case 'PPP':
      return formatLong.date({width: 'long'})
    case 'PPPP':
    default:
      return formatLong.date({width: 'full'})
  }
}

function timeLongFormatter (pattern, formatLong, options) {
  switch (pattern) {
    case 'p':
      return formatLong.time({width: 'short'})
    case 'pp':
      return formatLong.time({width: 'medium'})
    case 'ppp':
      return formatLong.time({width: 'long'})
    case 'pppp':
    default:
      return formatLong.time({width: 'full'})
  }
}

function dateTimeLongFormatter (pattern, formatLong, options) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong, options)
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({width: 'short'});
      break
    case 'PP':
      dateTimeFormat = formatLong.dateTime({width: 'medium'});
      break
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({width: 'long'});
      break
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({width: 'full'});
      break
  }

  return dateTimeFormat
    .replace('{{date}}', dateLongFormatter(datePattern, formatLong, options))
    .replace('{{time}}', timeLongFormatter(timePattern, formatLong, options))
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount)
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount, dirtyOptions)
}

var protectedTokens = ['D', 'DD', 'YY', 'YYYY'];

function isProtectedToken(token) {
  return protectedTokens.indexOf(token) !== -1
}

function throwProtectedError(token) {
  throw new RangeError(
    '`options.awareOfUnicodeTokens` must be set to `true` to use `' +
      token +
      '` token; see: https://git.io/fxCyr'
  )
}

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 8     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 8     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Su            | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens (`yy`, `yyyy`).
 *   See: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see: https://git.io/fxCyr
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/dd/yyyy'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(
 *   new Date(2014, 6, 2),
 *   "do 'de' MMMM yyyy",
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(
 *   new Date(2014, 6, 2, 15),
 *   "h 'o''clock'"
 * )
 * //=> "3 o'clock"
 */
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError(
      '2 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};

  var locale$$1 = options.locale || locale;

  var localeFirstWeekContainsDate =
    locale$$1.options && locale$$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale$$1.options && locale$$1.options.weekStartsOn;
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (!locale$$1.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale$$1.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var originalDate = toDate(dirtyDate, options);

  if (!isValid$1(originalDate, options)) {
    return 'Invalid Date'
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset, options);

  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$$1,
    _originalDate: originalDate
  };

  var result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale$$1.formatLong, formatterOptions)
      }
      return substring
    })
    .join('')
    .match(formattingTokensRegExp)
    .map(function(substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring)
      }

      var formatter = formatters[firstCharacter];
      if (formatter) {
        if (!options.awareOfUnicodeTokens && isProtectedToken(substring)) {
          throwProtectedError(substring);
        }
        return formatter(utcDate, substring, locale$$1.localize, formatterOptions)
      }

      return substring
    })
    .join('');

  return result
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}

var MILLISECONDS_IN_MINUTE$2 = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$2, dirtyOptions)
}

var MILLISECONDS_IN_HOUR$1 = 3600000;

/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR$1, dirtyOptions)
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var amount = toInteger(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days, dirtyOptions)
}

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate()
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var amount = toInteger(dirtyAmount);
  var desiredMonth = date.getMonth() + amount;
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth, dirtyOptions);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
  return date
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12, dirtyOptions)
}

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount, dirtyOptions)
}

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addWeeks(dirtyDate, -amount, dirtyOptions)
}

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, -amount, dirtyOptions)
}

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears (dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount, dirtyOptions)
}

/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var seconds = date.getSeconds();
  return seconds
}

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var minutes = date.getMinutes();
  return minutes
}

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var hours = date.getHours();
  return hours
}

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the day of week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getDay();
  return day
}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dayOfMonth = date.getDate();
  return dayOfMonth
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var month = date.getMonth();
  return month
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getFullYear();
  return year
}

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  return timestamp
}

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the seconds setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds (dirtyDate, dirtySeconds, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date
}

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the minutes setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date
}

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the hours setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date
}

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the month setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();

  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth, dirtyOptions);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth));
  return date
}

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = toInteger(dirtyYear);

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date)) {
    return new Date(NaN)
  }

  date.setFullYear(year);
  return date
}

/**
 * @name min
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {Date[]|String[]|Number[]} datesArray - the dates to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the earliest of the dates
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *  [
 *    new Date(1989, 6, 10),
 *    new Date(1987, 1, 11),
 *    new Date(1995, 6, 2),
 *    new Date(1990, 0, 1)
 *  ]
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min (dirtyDatesArray, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var datesArray;
  // `dirtyDatesArray` is undefined or null
  if (dirtyDatesArray == null) {
    datesArray = [];

  // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;

  // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate, dirtyOptions);

    if (result === undefined || result > currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });

  return result
}

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {Date[]|String[]|Number[]} datesArray - the dates to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *  [
 *    new Date(1989, 6, 10),
 *    new Date(1987, 1, 11),
 *    new Date(1995, 6, 2),
 *    new Date(1990, 0, 1)
 *  ]
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max (dirtyDatesArray, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var datesArray;
  // `dirtyDatesArray` is undefined or null
  if (dirtyDatesArray == null) {
    datesArray = [];

  // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray;

  // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate, dirtyOptions);

    if (result === undefined || result < currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });

  return result
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  date.setHours(0, 0, 0, 0);
  return date
}

var MILLISECONDS_IN_DAY$1 = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * var result = differenceInCalendarDays(
 *   new Date(2011, 6, 2, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var startOfDayLeft = startOfDay(dirtyDateLeft, dirtyOptions);
  var startOfDayRight = startOfDay(dirtyDateRight, dirtyOptions);

  var timestampLeft = startOfDayLeft.getTime() -
    getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY$1)
}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyDateLeft, dirtyOptions);
  var dateRight = toDate(dirtyDateRight, dirtyOptions);

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();

  return yearDiff * 12 + monthDiff
}

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, options);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date
}

var MILLISECONDS_IN_WEEK$2 = 604800000;

/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 2
 */
function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);

  var timestampLeft = startOfWeekLeft.getTime() -
    getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfWeekRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$2)
}

/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the day of the year setted
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear (dirtyDate, dirtyDayOfYear, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dayOfYear = toInteger(dirtyDayOfYear);
  date.setMonth(0);
  date.setDate(dayOfYear);
  return date
}

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date
}

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var cleanDate = toDate(dirtyDate, dirtyOptions);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date
}

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};

  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, options);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime()
}

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay$1 (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeftStartOfDay = startOfDay(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfDay = startOfDay(dirtyDateRight, dirtyOptions);

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth$1 (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyDateLeft, dirtyOptions);
  var dateRight = toDate(dirtyDateRight, dirtyOptions);
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear$1 (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var dateLeft = toDate(dirtyDateLeft, dirtyOptions);
  var dateRight = toDate(dirtyDateRight, dirtyOptions);
  return dateLeft.getFullYear() === dateRight.getFullYear()
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime()
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime()
}

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(
 *   new Date(2014, 0, 3),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(
 *   new Date(2014, 0, 10),
 *   {start: new Date(2014, 0, 1), end: new Date(2014, 0, 7)}
 * )
 * //=> false
 */
function isWithinInterval (dirtyDate, dirtyInterval, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var interval = dirtyInterval || {};
  var time = toDate(dirtyDate, dirtyOptions).getTime();
  var startTime = toDate(interval.start, dirtyOptions).getTime();
  var endTime = toDate(interval.end, dirtyOptions).getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  return time >= startTime && time <= endTime
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCDay (dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var day = toInteger(dirtyDay);

  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCWeek (dirtyDate, dirtyWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, dirtyOptions) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISODay (dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();

  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;

  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function setUTCISOWeek (dirtyDate, dirtyISOWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present')
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date
}

var MILLISECONDS_IN_HOUR$2 = 3600000;
var MILLISECONDS_IN_MINUTE$3 = 60000;
var MILLISECONDS_IN_SECOND = 1000;

var numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999
};

var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern (pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null
  }

  var value = parseInt(matchResult[0], 10);

  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  }
}

function parseTimezonePattern (pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null
  }

  // Input is 'Z'
  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    }
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value: sign * (
      hours * MILLISECONDS_IN_HOUR$2 +
        minutes * MILLISECONDS_IN_MINUTE$3 +
        seconds * MILLISECONDS_IN_SECOND
    ),
    rest: string.slice(matchResult[0].length)
  }
}

function parseAnyDigitsSigned (string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback)
}

function parseNDigits (n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback)
    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback)
  }
}

function parseNDigitsSigned (n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback)
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback)
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback)
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback)
    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback)
  }
}

function dayPeriodEnumToHours (enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4
    case 'evening':
      return 17
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0
  }
}

function normalizeTwoDigitYear (twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result
}

var DAYS_IN_MONTH$1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR$1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// User for validation
function isLeapYearIndex$1 (year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {width: 'abbreviated'}) ||
            match.era(string, {width: 'narrow'})
        // A, B
        case 'GGGGG':
          return match.era(string, {width: 'narrow'})
        // Anno Domini, Before Christ
        case 'GGGG':
        default:
          return match.era(string, {width: 'wide'}) ||
            match.era(string, {width: 'abbreviated'}) ||
            match.era(string, {width: 'narrow'})
      }
    },
    set: function (date, value, options) {
      // Sets year 10 BC if BC, or 10 AC if AC
      date.setUTCFullYear(value === 1 ? 10 : -9, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    priority: 130,
    parse: function (string, token, match, options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        }
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback)
        case 'yo':
          return match.ordinalNumber(string, {unit: 'year', valueCallback: valueCallback})
        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (date, value, options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        }
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback)
        case 'Yo':
          return match.ordinalNumber(string, {unit: 'year', valueCallback: valueCallback})
        default:
          return parseNDigits(token.length, string, valueCallback)
      }
    },
    validate: function (date, value, options) {
      return value.isTwoDigitYear || value.year > 0
    },
    set: function (date, value, options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options)
      }

      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options)
    }
  },

  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, match, options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (date, value, options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear)
    }
  },

  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, match, options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string)
      }

      return parseNDigitsSigned(token.length, string)
    },
    set: function (date, value, options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ': // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return match.ordinalNumber(string, {unit: 'quarter'})
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return match.quarter(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.quarter(string, {width: 'narrow', context: 'formatting'})
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return match.quarter(string, {width: 'narrow', context: 'formatting'})
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return match.quarter(string, {width: 'wide', context: 'formatting'}) ||
            match.quarter(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.quarter(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 4
    },
    set: function (date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq': // 01, 02, 03, 04
          return parseNDigits(token.length, string)
        // 1st, 2nd, 3rd, 4th
        case 'qo':
          return match.ordinalNumber(string, {unit: 'quarter'})
        // Q1, Q2, Q3, Q4
        case 'qqq':
          return match.quarter(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.quarter(string, {width: 'narrow', context: 'standalone'})
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'qqqqq':
          return match.quarter(string, {width: 'narrow', context: 'standalone'})
        // 1st quarter, 2nd quarter, ...
        case 'qqqq':
        default:
          return match.quarter(string, {width: 'wide', context: 'standalone'}) ||
            match.quarter(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.quarter(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 4
    },
    set: function (date, value, options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return value - 1
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12
        case 'MM':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th
        case 'Mo':
          return match.ordinalNumber(string, {unit: 'month', valueCallback: valueCallback})
        // Jan, Feb, ..., Dec
        case 'MMM':
          return match.month(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.month(string, {width: 'narrow', context: 'formatting'})
        // J, F, ..., D
        case 'MMMMM':
          return match.month(string, {width: 'narrow', context: 'formatting'})
        // January, February, ..., December
        case 'MMMM':
        default:
          return match.month(string, {width: 'wide', context: 'formatting'}) ||
            match.month(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.month(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return value - 1
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback)
        // 01, 02, ..., 12
        case 'LL':
          return parseNDigits(2, string, valueCallback)
        // 1st, 2nd, ..., 12th
        case 'Lo':
          return match.ordinalNumber(string, {unit: 'month', valueCallback: valueCallback})
        // Jan, Feb, ..., Dec
        case 'LLL':
          return match.month(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.month(string, {width: 'narrow', context: 'standalone'})
        // J, F, ..., D
        case 'LLLLL':
          return match.month(string, {width: 'narrow', context: 'standalone'})
        // January, February, ..., December
        case 'LLLL':
        default:
          return match.month(string, {width: 'wide', context: 'standalone'}) ||
            match.month(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.month(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string)
        case 'wo':
          return match.ordinalNumber(string, {unit: 'week'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 53
    },
    set: function (date, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options)
    }
  },

  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string)
        case 'Io':
          return match.ordinalNumber(string, {unit: 'week'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 53
    },
    set: function (date, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options)
    }
  },

  // Day of the month
  d: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string)
        case 'do':
          return match.ordinalNumber(string, {unit: 'date'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR$1[month]
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH$1[month]
      }
    },
    set: function (date, value, options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Day of year
  D: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string)
        case 'Do':
          return match.ordinalNumber(string, {unit: 'date'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366
      } else {
        return value >= 1 && value <= 365
      }
    },
    set: function (date, value, options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
        // T
        case 'EEEEE':
          return match.day(string, {width: 'narrow', context: 'formatting'})
        // Tu
        case 'EEEEEE':
          return match.day(string, {width: 'short', context: 'formatting'}) ||
          match.day(string, {width: 'narrow', context: 'formatting'})
        // Tuesday
        case 'EEEE':
        default:
          return match.day(string, {width: 'wide', context: 'formatting'}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee': // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd
        case 'eo':
          return match.ordinalNumber(string, {unit: 'day', valueCallback: valueCallback})
        // Tue
        case 'eee':
          return match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
        // T
        case 'eeeee':
          return match.day(string, {width: 'narrow', context: 'formatting'})
        // Tu
        case 'eeeeee':
          return match.day(string, {width: 'short', context: 'formatting'}) ||
          match.day(string, {width: 'narrow', context: 'formatting'})
        // Tuesday
        case 'eeee':
        default:
          return match.day(string, {width: 'wide', context: 'formatting'}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.day(string, {width: 'short', context: 'formatting'}) ||
            match.day(string, {width: 'narrow', context: 'formatting'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc': // 03
          return parseNDigits(token.length, string, valueCallback)
        // 3rd
        case 'co':
          return match.ordinalNumber(string, {unit: 'day', valueCallback: valueCallback})
        // Tue
        case 'ccc':
          return match.day(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.day(string, {width: 'short', context: 'standalone'}) ||
            match.day(string, {width: 'narrow', context: 'standalone'})
        // T
        case 'ccccc':
          return match.day(string, {width: 'narrow', context: 'standalone'})
        // Tu
        case 'cccccc':
          return match.day(string, {width: 'short', context: 'standalone'}) ||
          match.day(string, {width: 'narrow', context: 'standalone'})
        // Tuesday
        case 'cccc':
        default:
          return match.day(string, {width: 'wide', context: 'standalone'}) ||
            match.day(string, {width: 'abbreviated', context: 'standalone'}) ||
            match.day(string, {width: 'short', context: 'standalone'}) ||
            match.day(string, {width: 'narrow', context: 'standalone'})
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 6
    },
    set: function (date, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7
        }
        return value
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii': // 02
          return parseNDigits(token.length, string)
        // 2nd
        case 'io':
          return match.ordinalNumber(string, {unit: 'day'})
        // Tue
        case 'iii':
          return match.day(string, {width: 'abbreviated', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // T
        case 'iiiii':
          return match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // Tu
        case 'iiiiii':
          return match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
          match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
        // Tuesday
        case 'iiii':
        default:
          return match.day(string, {width: 'wide', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'abbreviated', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'short', context: 'formatting', valueCallback: valueCallback}) ||
            match.day(string, {width: 'narrow', context: 'formatting', valueCallback: valueCallback})
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 7
    },
    set: function (date, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date
    }
  },

  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'aaaaa':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'aaaa':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'bbbbb':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'bbbb':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'BBBBB':
          return match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
        case 'BBBB':
        default:
          return match.dayPeriod(string, {width: 'wide', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'abbreviated', context: 'formatting'}) ||
            match.dayPeriod(string, {width: 'narrow', context: 'formatting'})
      }
    },
    set: function (date, value, options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date
    }
  },

  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string)
        case 'ho':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 12
    },
    set: function (date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date
    }
  },

  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string)
        case 'Ho':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 23
    },
    set: function (date, value, options) {
      date.setUTCHours(value, 0, 0, 0);
      return date
    }
  },

  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string)
        case 'Ko':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 11
    },
    set: function (date, value, options) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date
    }
  },

  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string)
        case 'ko':
          return match.ordinalNumber(string, {unit: 'hour'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 1 && value <= 24
    },
    set: function (date, value, options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date
    }
  },

  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string)
        case 'mo':
          return match.ordinalNumber(string, {unit: 'minute'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 59
    },
    set: function (date, value, options) {
      date.setUTCMinutes(value, 0, 0);
      return date
    }
  },

  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string)
        case 'so':
          return match.ordinalNumber(string, {unit: 'second'})
        default:
          return parseNDigits(token.length, string)
      }
    },
    validate: function (date, value, options) {
      return value >= 0 && value <= 59
    },
    set: function (date, value, options) {
      date.setUTCSeconds(value, 0);
      return date
    }
  },

  // Fraction of second
  S: {
    priority: 40,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3))
      };
      return parseNDigits(token.length, string, valueCallback)
    },
    set: function (date, value, options) {
      date.setUTCMilliseconds(value);
      return date
    }
  },

  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 20,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)
        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string)
        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)
        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)
        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, value, options) {
      return new Date(date.getTime() - value)
    }
  },

  // Timezone (ISO-8601)
  x: {
    priority: 20,
    parse: function (string, token, match, options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string)
        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string)
        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string)
        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string)
        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string)
      }
    },
    set: function (date, value, options) {
      return new Date(date.getTime() - value)
    }
  },

  // Seconds timestamp
  t: {
    priority: 10,
    parse: function (string, token, match, options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (date, value, options) {
      return new Date(value * 1000)
    }
  },

  // Milliseconds timestamp
  T: {
    priority: 10,
    parse: function (string, token, match, options) {
      return parseAnyDigitsSigned(string)
    },
    set: function (date, value, options) {
      return new Date(value)
    }
  }
};

var TIMEZONE_UNIT_PRIORITY = 20;

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

var escapedStringRegExp$1 = /^'(.*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;

var notWhitespaceRegExp = /\S/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 6     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 6     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 1, 2, ..., 11, 0                  |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              |  40 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  20 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  20 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Seconds timestamp               |  10 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Milliseconds timestamp          |  10 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `baseDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *
 * 6. These tokens are often confused with others. See: https://git.io/fxCyr
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `baseDate` which works as a context of parsing.
 *
 * `baseDate` must be passed for correct work of the function.
 * If you're not sure which `baseDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `baseDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `baseDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|String|Number} baseDate - defines values missing from the parsed dateString
 * @param {Options} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens (`yy`, `yyyy`).
 *   See: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} `options.awareOfUnicodeTokens` must be set to `true` to use `XX` token; see: https://git.io/fxCyr
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse(
 *   '02/11/2014',
 *   'MM/dd/yyyy',
 *   new Date()
 * )
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse(
 *   '28-a de februaro',
 *   "do 'de' MMMM",
 *   new Date(2010, 0, 1),
 *   {locale: eo}
 * )
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(
  dirtyDateString,
  dirtyFormatString,
  dirtyBaseDate,
  dirtyOptions
) {
  if (arguments.length < 3) {
    throw new TypeError(
      '3 arguments required, but only ' + arguments.length + ' present'
    )
  }

  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};

  var locale$$1 = options.locale || locale;

  if (!locale$$1.match) {
    throw new RangeError('locale must contain match property')
  }

  var localeFirstWeekContainsDate =
    locale$$1.options && locale$$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale$$1.options && locale$$1.options.weekStartsOn;
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBaseDate, options)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$$1
  };

  // If timezone isn't specified, it will be set to the system timezone
  var setters = [
    {
      priority: TIMEZONE_UNIT_PRIORITY,
      set: dateToSystemTimezone,
      index: 0
    }
  ];

  var i;

  var tokens = formatString.match(formattingTokensRegExp$1);

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.awareOfUnicodeTokens && isProtectedToken(token)) {
      throwProtectedError(token);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];
    if (parser) {
      var parseResult = parser.parse(
        dateString,
        token,
        locale$$1.match,
        subFnOptions
      );

      if (!parseResult) {
        return new Date(NaN)
      }

      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });

      dateString = parseResult.rest;
    } else {
      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN)
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN)
  }

  var uniquePrioritySetters = setters
    .map(function(setter) {
      return setter.priority
    })
    .sort(function(a, b) {
      return b - a
    })
    .filter(function(priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function(priority) {
      return setters
        .filter(function(setter) {
          return setter.priority === priority
        })
        .reverse()
    })
    .map(function(setterArray) {
      return setterArray[0]
    });

  var date = toDate(dirtyBaseDate, options);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (
      setter.validate &&
      !setter.validate(utcDate, setter.value, subFnOptions)
    ) {
      return new Date(NaN)
    }

    utcDate = setter.set(utcDate, setter.value, subFnOptions);
  }

  return utcDate
}

function dateToSystemTimezone(date) {
  var convertedDate = new Date(0);
  convertedDate.setFullYear(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  convertedDate.setHours(
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  return convertedDate
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'")
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};









var classCallCheck$2 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits$1 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// ** Date Constructors **

function newDate(value) {
  var d = value ? toDate(value) : new Date();
  return isValid$$1(d) ? d : null;
}

function parseDate(value, dateFormat, locale, strictParsing) {
  var parsedDate = null;
  var localeObject = getLocaleObject(locale);
  var strictParsingValueMatch = true;
  if (Array.isArray(dateFormat)) {
    dateFormat.forEach(function (df) {
      var tryParseDate = parse(value, df, new Date(), localeObject);
      if (strictParsing) {
        strictParsingValueMatch = isValid$$1(tryParseDate) && value === format(tryParseDate, df, { awareOfUnicodeTokens: true });
      }
      if (isValid$$1(tryParseDate) && strictParsingValueMatch) {
        parsedDate = tryParseDate;
      }
    });
    return parsedDate;
  }

  parsedDate = parse(value, dateFormat, new Date(), localeObject);

  if (strictParsing) {
    strictParsingValueMatch = isValid$$1(parsedDate) && value === format(parsedDate, dateFormat, { awareOfUnicodeTokens: true });
  } else if (!isValid$$1(parsedDate)) {
    parsedDate = new Date(value);
  }

  return isValid$$1(parsedDate) && strictParsingValueMatch ? parsedDate : null;
}

function isValid$$1(date) {
  return isValid$1(date) && isAfter(date, new Date("1/1/1000"));
}

// ** Date Formatting **

function formatDate(date, formatStr, locale) {
  if (locale === "en") {
    return format(date, formatStr, { awareOfUnicodeTokens: true });
  }
  var localeObj = getLocaleObject(locale);
  if (locale && !localeObj) {
    console.warn("A locale object was not found for the provided string [\"" + locale + "\"].");
  }
  if (!localeObj && !!getDefaultLocale() && !!getLocaleObject(getDefaultLocale())) {
    localeObj = getLocaleObject(getDefaultLocale());
  }
  return format(date, formatStr, {
    locale: localeObj ? localeObj : null,
    awareOfUnicodeTokens: true
  });
}

function safeDateFormat(date, _ref) {
  var dateFormat = _ref.dateFormat,
      locale = _ref.locale;

  return date && formatDate(date, Array.isArray(dateFormat) ? dateFormat[0] : dateFormat, locale) || "";
}

// ** Date Setters **

function setTime(date, _ref2) {
  var _ref2$hour = _ref2.hour,
      hour = _ref2$hour === undefined ? 0 : _ref2$hour,
      _ref2$minute = _ref2.minute,
      minute = _ref2$minute === undefined ? 0 : _ref2$minute,
      _ref2$second = _ref2.second,
      second = _ref2$second === undefined ? 0 : _ref2$second;

  return setHours(setMinutes(setSeconds(date, second), minute), hour);
}

function getWeek(date) {
  var firstDayOfYear = setDayOfYear(date, 1);
  if (!isSameYear(endOfWeek(date), date)) {
    return 1;
  }
  return differenceInCalendarWeeks(date, startOfYear(date)) + 1;
}

function getDayOfWeekCode(day, locale) {
  return formatDate(day, "ddd", locale);
}

// *** Start of ***

function getStartOfDay(date) {
  return startOfDay(date);
}

function getStartOfWeek(date, locale) {
  var localeObj = locale ? getLocaleObject(locale) : getLocaleObject(getDefaultLocale());
  return startOfWeek(date, { locale: localeObj });
}

function getStartOfMonth(date) {
  return startOfMonth(date);
}

function getStartOfToday() {
  return startOfDay(newDate());
}

// *** End of ***





function isSameYear(date1, date2) {
  if (date1 && date2) {
    return isSameYear$1(date1, date2);
  } else {
    return !date1 && !date2;
  }
}

function isSameMonth(date1, date2) {
  if (date1 && date2) {
    return isSameMonth$1(date1, date2);
  } else {
    return !date1 && !date2;
  }
}

function isSameDay(date1, date2) {
  if (date1 && date2) {
    return isSameDay$1(date1, date2);
  } else {
    return !date1 && !date2;
  }
}

function isDayInRange(day, startDate, endDate) {
  var valid = void 0;
  try {
    valid = isWithinInterval(day, { start: startDate, end: endDate });
  } catch (err) {
    valid = false;
  }
  return valid;
}

function getDefaultLocale() {
  return window.__localeId__;
}

function getLocaleObject(localeSpec) {
  if (typeof localeSpec === "string") {
    // Treat it as a locale name registered by registerLocale
    return window.__localeData__ ? window.__localeData__[localeSpec] : null;
  } else {
    // Treat it as a raw date-fns locale object
    return localeSpec;
  }
}

function getFormattedWeekdayInLocale(date, formatFunc, locale) {
  return formatFunc(formatDate(date, "EEEE", locale));
}

function getWeekdayMinInLocale(date, locale) {
  return formatDate(date, "EEEEEE", locale);
}

function getWeekdayShortInLocale(date, locale) {
  return formatDate(date, "EEE", locale);
}

function getMonthInLocale(month, locale) {
  return formatDate(setMonth(newDate(), month), "LLLL", locale);
}

function getMonthShortInLocale(month, dateFormat, locale) {
  return formatDate(setMonth(newDate(), month), "LLL", locale);
}

// ** Utils for some components **

function isDayDisabled(day) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      minDate = _ref3.minDate,
      maxDate = _ref3.maxDate,
      excludeDates = _ref3.excludeDates,
      includeDates = _ref3.includeDates,
      filterDate = _ref3.filterDate;

  return isOutOfBounds(day, { minDate: minDate, maxDate: maxDate }) || excludeDates && excludeDates.some(function (excludeDate) {
    return isSameDay(day, excludeDate);
  }) || includeDates && !includeDates.some(function (includeDate) {
    return isSameDay(day, includeDate);
  }) || filterDate && !filterDate(newDate(day)) || false;
}

function isOutOfBounds(day) {
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      minDate = _ref4.minDate,
      maxDate = _ref4.maxDate;

  return minDate && differenceInCalendarDays(day, minDate) < 0 || maxDate && differenceInCalendarDays(day, maxDate) > 0;
}

function isTimeDisabled(time, disabledTimes) {
  var l = disabledTimes.length;
  for (var i = 0; i < l; i++) {
    if (getHours(disabledTimes[i]) === getHours(time) && getMinutes(disabledTimes[i]) === getMinutes(time)) {
      return true;
    }
  }

  return false;
}

function isTimeInDisabledRange(time, _ref5) {
  var minTime = _ref5.minTime,
      maxTime = _ref5.maxTime;

  if (!minTime || !maxTime) {
    throw new Error("Both minTime and maxTime props required");
  }
  var base = newDate();
  var baseTime = setHours(setMinutes(base, getMinutes(time)), getHours(time));
  var min$$1 = setHours(setMinutes(base, getMinutes(minTime)), getHours(minTime));
  var max$$1 = setHours(setMinutes(base, getMinutes(maxTime)), getHours(maxTime));

  var valid = void 0;
  try {
    valid = !isWithinInterval(baseTime, { start: min$$1, end: max$$1 });
  } catch (err) {
    valid = false;
  }
  return valid;
}

function monthDisabledBefore(day) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      minDate = _ref6.minDate,
      includeDates = _ref6.includeDates;

  var previousMonth = subMonths(day, 1);
  return minDate && differenceInCalendarMonths(minDate, previousMonth) > 0 || includeDates && includeDates.every(function (includeDate) {
    return differenceInCalendarMonths(includeDate, previousMonth) > 0;
  }) || false;
}

function monthDisabledAfter(day) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      maxDate = _ref7.maxDate,
      includeDates = _ref7.includeDates;

  var nextMonth = addMonths(day, 1);
  return maxDate && differenceInCalendarMonths(nextMonth, maxDate) > 0 || includeDates && includeDates.every(function (includeDate) {
    return differenceInCalendarMonths(nextMonth, includeDate) > 0;
  }) || false;
}

function getEffectiveMinDate(_ref8) {
  var minDate = _ref8.minDate,
      includeDates = _ref8.includeDates;

  if (includeDates && minDate) {
    var minDates = includeDates.filter(function (includeDate) {
      return differenceInCalendarDays(includeDate, minDate) >= 0;
    });
    return min(minDates);
  } else if (includeDates) {
    return min(includeDates);
  } else {
    return minDate;
  }
}

function getEffectiveMaxDate(_ref9) {
  var maxDate = _ref9.maxDate,
      includeDates = _ref9.includeDates;

  if (includeDates && maxDate) {
    var maxDates = includeDates.filter(function (includeDate) {
      return differenceInCalendarDays(includeDate, maxDate) <= 0;
    });
    return max(maxDates);
  } else if (includeDates) {
    return max(includeDates);
  } else {
    return maxDate;
  }
}

function getHightLightDaysMap() {
  var highlightDates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var defaultClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "react-datepicker__day--highlighted";

  var dateClasses = new Map();
  for (var i = 0, len = highlightDates.length; i < len; i++) {
    var obj = highlightDates[i];
    if (isDate(obj)) {
      var key = formatDate(obj, "MM.dd.yyyy");
      var classNamesArr = dateClasses.get(key) || [];
      if (!classNamesArr.includes(defaultClassName)) {
        classNamesArr.push(defaultClassName);
        dateClasses.set(key, classNamesArr);
      }
    } else if ((typeof obj === "undefined" ? "undefined" : _typeof$1(obj)) === "object") {
      var keys = Object.keys(obj);
      var className = keys[0];
      var arrOfDates = obj[keys[0]];
      if (typeof className === "string" && arrOfDates.constructor === Array) {
        for (var k = 0, _len = arrOfDates.length; k < _len; k++) {
          var _key = formatDate(arrOfDates[k], "MM.dd.yyyy");
          var _classNamesArr = dateClasses.get(_key) || [];
          if (!_classNamesArr.includes(className)) {
            _classNamesArr.push(className);
            dateClasses.set(_key, _classNamesArr);
          }
        }
      }
    }
  }

  return dateClasses;
}

function timesToInjectAfter(startOfDay$$1, currentTime, currentMultiplier, intervals, injectedTimes) {
  var l = injectedTimes.length;
  var times = [];
  for (var i = 0; i < l; i++) {
    var injectedTime = addMinutes(addHours(startOfDay$$1, getHours(injectedTimes[i])), getMinutes(injectedTimes[i]));
    var nextTime = addMinutes(startOfDay$$1, (currentMultiplier + 1) * intervals);

    if (isAfter(injectedTime, currentTime) && isBefore(injectedTime, nextTime)) {
      times.push(injectedTimes[i]);
    }
  }

  return times;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function generateYears(year, noOfYear, minDate, maxDate) {
  var list = [];
  for (var i = 0; i < 2 * noOfYear + 1; i++) {
    var newYear = year + noOfYear - i;
    var isInRange = true;

    if (minDate) {
      isInRange = getYear(minDate) <= newYear;
    }

    if (maxDate && isInRange) {
      isInRange = getYear(maxDate) >= newYear;
    }

    if (isInRange) {
      list.push(newYear);
    }
  }

  return list;
}

var YearDropdownOptions = function (_React$Component) {
  inherits$1(YearDropdownOptions, _React$Component);

  function YearDropdownOptions(props) {
    classCallCheck$2(this, YearDropdownOptions);

    var _this = possibleConstructorReturn$1(this, _React$Component.call(this, props));

    _this.renderOptions = function () {
      var selectedYear = _this.props.year;
      var options = _this.state.yearsList.map(function (year) {
        return React__default.createElement(
          "div",
          {
            className: selectedYear === year ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option",
            key: year,
            ref: year,
            onClick: _this.onChange.bind(_this, year)
          },
          selectedYear === year ? React__default.createElement(
            "span",
            { className: "react-datepicker__year-option--selected" },
            "\u2713"
          ) : "",
          year
        );
      });

      var minYear = _this.props.minDate ? getYear(_this.props.minDate) : null;
      var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : null;

      if (!maxYear || !_this.state.yearsList.find(function (year) {
        return year === maxYear;
      })) {
        options.unshift(React__default.createElement(
          "div",
          {
            className: "react-datepicker__year-option",
            ref: "upcoming",
            key: "upcoming",
            onClick: _this.incrementYears
          },
          React__default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        ));
      }

      if (!minYear || !_this.state.yearsList.find(function (year) {
        return year === minYear;
      })) {
        options.push(React__default.createElement(
          "div",
          {
            className: "react-datepicker__year-option",
            ref: "previous",
            key: "previous",
            onClick: _this.decrementYears
          },
          React__default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        ));
      }

      return options;
    };

    _this.onChange = function (year) {
      _this.props.onChange(year);
    };

    _this.handleClickOutside = function () {
      _this.props.onCancel();
    };

    _this.shiftYears = function (amount) {
      var years = _this.state.yearsList.map(function (year) {
        return year + amount;
      });

      _this.setState({
        yearsList: years
      });
    };

    _this.incrementYears = function () {
      return _this.shiftYears(1);
    };

    _this.decrementYears = function () {
      return _this.shiftYears(-1);
    };

    var yearDropdownItemNumber = props.yearDropdownItemNumber,
        scrollableYearDropdown = props.scrollableYearDropdown;

    var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);

    _this.state = {
      yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
    };
    return _this;
  }

  YearDropdownOptions.prototype.render = function render() {
    var dropdownClass = classnames({
      "react-datepicker__year-dropdown": true,
      "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
    });

    return React__default.createElement(
      "div",
      { className: dropdownClass },
      this.renderOptions()
    );
  };

  return YearDropdownOptions;
}(React__default.Component);

YearDropdownOptions.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  scrollableYearDropdown: PropTypes.bool,
  year: PropTypes.number.isRequired,
  yearDropdownItemNumber: PropTypes.number
};

var WrappedYearDropdownOptions = onClickOutsideHOC(YearDropdownOptions);

var YearDropdown = function (_React$Component) {
  inherits$1(YearDropdown, _React$Component);

  function YearDropdown() {
    var _temp, _this, _ret;

    classCallCheck$2(this, YearDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      dropdownVisible: false
    }, _this.renderSelectOptions = function () {
      var minYear = _this.props.minDate ? getYear(_this.props.minDate) : 1900;
      var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : 2100;

      var options = [];
      for (var i = minYear; i <= maxYear; i++) {
        options.push(React__default.createElement(
          "option",
          { key: i, value: i },
          i
        ));
      }
      return options;
    }, _this.onSelectChange = function (e) {
      _this.onChange(e.target.value);
    }, _this.renderSelectMode = function () {
      return React__default.createElement(
        "select",
        {
          value: _this.props.year,
          className: "react-datepicker__year-select",
          onChange: _this.onSelectChange
        },
        _this.renderSelectOptions()
      );
    }, _this.renderReadView = function (visible) {
      return React__default.createElement(
        "div",
        {
          key: "read",
          style: { visibility: visible ? "visible" : "hidden" },
          className: "react-datepicker__year-read-view",
          onClick: function onClick(event) {
            return _this.toggleDropdown(event);
          }
        },
        React__default.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
        React__default.createElement(
          "span",
          { className: "react-datepicker__year-read-view--selected-year" },
          _this.props.year
        )
      );
    }, _this.renderDropdown = function () {
      return React__default.createElement(WrappedYearDropdownOptions, {
        key: "dropdown",
        ref: "options",
        year: _this.props.year,
        onChange: _this.onChange,
        onCancel: _this.toggleDropdown,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        scrollableYearDropdown: _this.props.scrollableYearDropdown,
        yearDropdownItemNumber: _this.props.yearDropdownItemNumber
      });
    }, _this.renderScrollMode = function () {
      var dropdownVisible = _this.state.dropdownVisible;

      var result = [_this.renderReadView(!dropdownVisible)];
      if (dropdownVisible) {
        result.unshift(_this.renderDropdown());
      }
      return result;
    }, _this.onChange = function (year) {
      _this.toggleDropdown();
      if (year === _this.props.year) return;
      _this.props.onChange(year);
    }, _this.toggleDropdown = function (event) {
      _this.setState({
        dropdownVisible: !_this.state.dropdownVisible
      }, function () {
        if (_this.props.adjustDateOnChange) {
          _this.handleYearChange(_this.props.date, event);
        }
      });
    }, _this.handleYearChange = function (date, event) {
      _this.onSelect(date, event);
      _this.setOpen();
    }, _this.onSelect = function (date, event) {
      if (_this.props.onSelect) {
        _this.props.onSelect(date, event);
      }
    }, _this.setOpen = function () {
      if (_this.props.setOpen) {
        _this.props.setOpen(true);
      }
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  YearDropdown.prototype.render = function render() {
    var renderedDropdown = void 0;
    switch (this.props.dropdownMode) {
      case "scroll":
        renderedDropdown = this.renderScrollMode();
        break;
      case "select":
        renderedDropdown = this.renderSelectMode();
        break;
    }

    return React__default.createElement(
      "div",
      {
        className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--" + this.props.dropdownMode
      },
      renderedDropdown
    );
  };

  return YearDropdown;
}(React__default.Component);

YearDropdown.propTypes = {
  adjustDateOnChange: PropTypes.bool,
  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  scrollableYearDropdown: PropTypes.bool,
  year: PropTypes.number.isRequired,
  yearDropdownItemNumber: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func,
  setOpen: PropTypes.func
};

var MonthDropdownOptions = function (_React$Component) {
  inherits$1(MonthDropdownOptions, _React$Component);

  function MonthDropdownOptions() {
    var _temp, _this, _ret;

    classCallCheck$2(this, MonthDropdownOptions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderOptions = function () {
      return _this.props.monthNames.map(function (month, i) {
        return React__default.createElement(
          "div",
          {
            className: _this.props.month === i ? "react-datepicker__month-option --selected_month" : "react-datepicker__month-option",
            key: month,
            ref: month,
            onClick: _this.onChange.bind(_this, i)
          },
          _this.props.month === i ? React__default.createElement(
            "span",
            { className: "react-datepicker__month-option--selected" },
            "\u2713"
          ) : "",
          month
        );
      });
    }, _this.onChange = function (month) {
      return _this.props.onChange(month);
    }, _this.handleClickOutside = function () {
      return _this.props.onCancel();
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  MonthDropdownOptions.prototype.render = function render() {
    return React__default.createElement(
      "div",
      { className: "react-datepicker__month-dropdown" },
      this.renderOptions()
    );
  };

  return MonthDropdownOptions;
}(React__default.Component);

MonthDropdownOptions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  monthNames: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

var WrappedMonthDropdownOptions = onClickOutsideHOC(MonthDropdownOptions);

var MonthDropdown = function (_React$Component) {
  inherits$1(MonthDropdown, _React$Component);

  function MonthDropdown() {
    var _temp, _this, _ret;

    classCallCheck$2(this, MonthDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      dropdownVisible: false
    }, _this.renderSelectOptions = function (monthNames) {
      return monthNames.map(function (M, i) {
        return React__default.createElement(
          "option",
          { key: i, value: i },
          M
        );
      });
    }, _this.renderSelectMode = function (monthNames) {
      return React__default.createElement(
        "select",
        {
          value: _this.props.month,
          className: "react-datepicker__month-select",
          onChange: function onChange(e) {
            return _this.onChange(e.target.value);
          }
        },
        _this.renderSelectOptions(monthNames)
      );
    }, _this.renderReadView = function (visible, monthNames) {
      return React__default.createElement(
        "div",
        {
          key: "read",
          style: { visibility: visible ? "visible" : "hidden" },
          className: "react-datepicker__month-read-view",
          onClick: _this.toggleDropdown
        },
        React__default.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
        React__default.createElement(
          "span",
          { className: "react-datepicker__month-read-view--selected-month" },
          monthNames[_this.props.month]
        )
      );
    }, _this.renderDropdown = function (monthNames) {
      return React__default.createElement(WrappedMonthDropdownOptions, {
        key: "dropdown",
        ref: "options",
        month: _this.props.month,
        monthNames: monthNames,
        onChange: _this.onChange,
        onCancel: _this.toggleDropdown
      });
    }, _this.renderScrollMode = function (monthNames) {
      var dropdownVisible = _this.state.dropdownVisible;

      var result = [_this.renderReadView(!dropdownVisible, monthNames)];
      if (dropdownVisible) {
        result.unshift(_this.renderDropdown(monthNames));
      }
      return result;
    }, _this.onChange = function (month) {
      _this.toggleDropdown();
      if (month !== _this.props.month) {
        _this.props.onChange(month);
      }
    }, _this.toggleDropdown = function () {
      return _this.setState({
        dropdownVisible: !_this.state.dropdownVisible
      });
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  MonthDropdown.prototype.render = function render() {
    var _this2 = this;

    var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function (M) {
      return getMonthShortInLocale(M, _this2.props.locale);
    } : function (M) {
      return getMonthInLocale(M, _this2.props.locale);
    });

    var renderedDropdown = void 0;
    switch (this.props.dropdownMode) {
      case "scroll":
        renderedDropdown = this.renderScrollMode(monthNames);
        break;
      case "select":
        renderedDropdown = this.renderSelectMode(monthNames);
        break;
    }

    return React__default.createElement(
      "div",
      {
        className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--" + this.props.dropdownMode
      },
      renderedDropdown
    );
  };

  return MonthDropdown;
}(React__default.Component);

MonthDropdown.propTypes = {
  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
  locale: PropTypes.string,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  useShortMonthInDropdown: PropTypes.bool
};

function generateMonthYears(minDate, maxDate) {
  var list = [];

  var currDate = getStartOfMonth(minDate);
  var lastDate = getStartOfMonth(maxDate);

  while (!isAfter(currDate, lastDate)) {
    list.push(newDate(currDate));

    currDate = addMonths(currDate, 1);
  }
  return list;
}

var MonthYearDropdownOptions = function (_React$Component) {
  inherits$1(MonthYearDropdownOptions, _React$Component);

  function MonthYearDropdownOptions(props) {
    classCallCheck$2(this, MonthYearDropdownOptions);

    var _this = possibleConstructorReturn$1(this, _React$Component.call(this, props));

    _this.renderOptions = function () {
      return _this.state.monthYearsList.map(function (monthYear) {
        var monthYearPoint = getTime(monthYear);
        var isSameMonthYear = isSameYear(_this.props.date, monthYear) && isSameMonth(_this.props.date, monthYear);

        return React__default.createElement(
          "div",
          {
            className: isSameMonthYear ? "react-datepicker__month-year-option --selected_month-year" : "react-datepicker__month-year-option",
            key: monthYearPoint,
            ref: monthYearPoint,
            onClick: _this.onChange.bind(_this, monthYearPoint)
          },
          isSameMonthYear ? React__default.createElement(
            "span",
            { className: "react-datepicker__month-year-option--selected" },
            "\u2713"
          ) : "",
          formatDate(monthYear, _this.props.dateFormat)
        );
      });
    };

    _this.onChange = function (monthYear) {
      return _this.props.onChange(monthYear);
    };

    _this.handleClickOutside = function () {
      _this.props.onCancel();
    };

    _this.state = {
      monthYearsList: generateMonthYears(_this.props.minDate, _this.props.maxDate)
    };
    return _this;
  }

  MonthYearDropdownOptions.prototype.render = function render() {
    var dropdownClass = classnames({
      "react-datepicker__month-year-dropdown": true,
      "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
    });

    return React__default.createElement(
      "div",
      { className: dropdownClass },
      this.renderOptions()
    );
  };

  return MonthYearDropdownOptions;
}(React__default.Component);

MonthYearDropdownOptions.propTypes = {
  minDate: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  scrollableMonthYearDropdown: PropTypes.bool,
  date: PropTypes.instanceOf(Date).isRequired,
  dateFormat: PropTypes.string.isRequired
};

var WrappedMonthYearDropdownOptions = onClickOutsideHOC(MonthYearDropdownOptions);

var MonthYearDropdown = function (_React$Component) {
  inherits$1(MonthYearDropdown, _React$Component);

  function MonthYearDropdown() {
    var _temp, _this, _ret;

    classCallCheck$2(this, MonthYearDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      dropdownVisible: false
    }, _this.renderSelectOptions = function () {
      var currDate = getStartOfMonth(_this.props.minDate);
      var lastDate = getStartOfMonth(_this.props.maxDate);
      var options = [];

      while (!isAfter(currDate, lastDate)) {
        var timepoint = getTime(currDate);
        options.push(React__default.createElement(
          "option",
          { key: timepoint, value: timepoint },
          formatDate(currDate, _this.props.dateFormat, _this.props.locale)
        ));

        currDate = addMonths(currDate, 1);
      }

      return options;
    }, _this.onSelectChange = function (e) {
      _this.onChange(e.target.value);
    }, _this.renderSelectMode = function () {
      return React__default.createElement(
        "select",
        {
          value: getTime(getStartOfMonth(_this.props.date)),
          className: "react-datepicker__month-year-select",
          onChange: _this.onSelectChange
        },
        _this.renderSelectOptions()
      );
    }, _this.renderReadView = function (visible) {
      var yearMonth = formatDate(_this.props.date, _this.props.dateFormat, _this.props.locale);

      return React__default.createElement(
        "div",
        {
          key: "read",
          style: { visibility: visible ? "visible" : "hidden" },
          className: "react-datepicker__month-year-read-view",
          onClick: function onClick(event) {
            return _this.toggleDropdown(event);
          }
        },
        React__default.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
        React__default.createElement(
          "span",
          { className: "react-datepicker__month-year-read-view--selected-month-year" },
          yearMonth
        )
      );
    }, _this.renderDropdown = function () {
      return React__default.createElement(WrappedMonthYearDropdownOptions, {
        key: "dropdown",
        ref: "options",
        date: _this.props.date,
        dateFormat: _this.props.dateFormat,
        onChange: _this.onChange,
        onCancel: _this.toggleDropdown,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
      });
    }, _this.renderScrollMode = function () {
      var dropdownVisible = _this.state.dropdownVisible;

      var result = [_this.renderReadView(!dropdownVisible)];
      if (dropdownVisible) {
        result.unshift(_this.renderDropdown());
      }
      return result;
    }, _this.onChange = function (monthYearPoint) {
      _this.toggleDropdown();

      var changedDate = newDate(parseInt(monthYearPoint));

      if (isSameYear(_this.props.date, changedDate) && isSameMonth(_this.props.date, changedDate)) {
        return;
      }

      _this.props.onChange(changedDate);
    }, _this.toggleDropdown = function () {
      return _this.setState({
        dropdownVisible: !_this.state.dropdownVisible
      });
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  MonthYearDropdown.prototype.render = function render() {
    var renderedDropdown = void 0;
    switch (this.props.dropdownMode) {
      case "scroll":
        renderedDropdown = this.renderScrollMode();
        break;
      case "select":
        renderedDropdown = this.renderSelectMode();
        break;
    }

    return React__default.createElement(
      "div",
      {
        className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--" + this.props.dropdownMode
      },
      renderedDropdown
    );
  };

  return MonthYearDropdown;
}(React__default.Component);

MonthYearDropdown.propTypes = {
  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
  dateFormat: PropTypes.string.isRequired,
  locale: PropTypes.string,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  scrollableMonthYearDropdown: PropTypes.bool
};

var Day = function (_React$Component) {
  inherits$1(Day, _React$Component);

  function Day() {
    var _temp, _this, _ret;

    classCallCheck$2(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (!_this.isDisabled() && _this.props.onClick) {
        _this.props.onClick(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.isDisabled() && _this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.isSameDay = function (other) {
      return isSameDay(_this.props.day, other);
    }, _this.isKeyboardSelected = function () {
      return !_this.props.disabledKeyboardNavigation && !_this.props.inline && !_this.isSameDay(_this.props.selected) && _this.isSameDay(_this.props.preSelection);
    }, _this.isDisabled = function () {
      return isDayDisabled(_this.props.day, _this.props);
    }, _this.getHighLightedClass = function (defaultClassName) {
      var _this$props = _this.props,
          day = _this$props.day,
          highlightDates = _this$props.highlightDates;


      if (!highlightDates) {
        return false;
      }

      // Looking for className in the Map of {'day string, 'className'}
      var dayStr = formatDate(day, "MM.dd.yyyy");
      return highlightDates.get(dayStr);
    }, _this.isInRange = function () {
      var _this$props2 = _this.props,
          day = _this$props2.day,
          startDate = _this$props2.startDate,
          endDate = _this$props2.endDate;

      if (!startDate || !endDate) {
        return false;
      }
      return isDayInRange(day, startDate, endDate);
    }, _this.isInSelectingRange = function () {
      var _this$props3 = _this.props,
          day = _this$props3.day,
          selectsStart = _this$props3.selectsStart,
          selectsEnd = _this$props3.selectsEnd,
          selectingDate = _this$props3.selectingDate,
          startDate = _this$props3.startDate,
          endDate = _this$props3.endDate;


      if (!(selectsStart || selectsEnd) || !selectingDate || _this.isDisabled()) {
        return false;
      }

      if (selectsStart && endDate && (isBefore(selectingDate, endDate) || isEqual(selectingDate, endDate))) {
        return isDayInRange(day, selectingDate, endDate);
      }

      if (selectsEnd && startDate && (isAfter(selectingDate, startDate) || isEqual(selectingDate, startDate))) {
        return isDayInRange(day, startDate, selectingDate);
      }

      return false;
    }, _this.isSelectingRangeStart = function () {
      if (!_this.isInSelectingRange()) {
        return false;
      }

      var _this$props4 = _this.props,
          day = _this$props4.day,
          selectingDate = _this$props4.selectingDate,
          startDate = _this$props4.startDate,
          selectsStart = _this$props4.selectsStart;


      if (selectsStart) {
        return isSameDay(day, selectingDate);
      } else {
        return isSameDay(day, startDate);
      }
    }, _this.isSelectingRangeEnd = function () {
      if (!_this.isInSelectingRange()) {
        return false;
      }

      var _this$props5 = _this.props,
          day = _this$props5.day,
          selectingDate = _this$props5.selectingDate,
          endDate = _this$props5.endDate,
          selectsEnd = _this$props5.selectsEnd;


      if (selectsEnd) {
        return isSameDay(day, selectingDate);
      } else {
        return isSameDay(day, endDate);
      }
    }, _this.isRangeStart = function () {
      var _this$props6 = _this.props,
          day = _this$props6.day,
          startDate = _this$props6.startDate,
          endDate = _this$props6.endDate;

      if (!startDate || !endDate) {
        return false;
      }
      return isSameDay(startDate, day);
    }, _this.isRangeEnd = function () {
      var _this$props7 = _this.props,
          day = _this$props7.day,
          startDate = _this$props7.startDate,
          endDate = _this$props7.endDate;

      if (!startDate || !endDate) {
        return false;
      }
      return isSameDay(endDate, day);
    }, _this.isWeekend = function () {
      var weekday = getDay(_this.props.day);
      return weekday === 0 || weekday === 6;
    }, _this.isOutsideMonth = function () {
      return _this.props.month !== undefined && _this.props.month !== getMonth(_this.props.day);
    }, _this.getClassNames = function (date) {
      var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : undefined;
      return classnames("react-datepicker__day", dayClassName, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
        "react-datepicker__day--disabled": _this.isDisabled(),
        "react-datepicker__day--selected": _this.isSameDay(_this.props.selected),
        "react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
        "react-datepicker__day--range-start": _this.isRangeStart(),
        "react-datepicker__day--range-end": _this.isRangeEnd(),
        "react-datepicker__day--in-range": _this.isInRange(),
        "react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
        "react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
        "react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
        "react-datepicker__day--today": _this.isSameDay(newDate()),
        "react-datepicker__day--weekend": _this.isWeekend(),
        "react-datepicker__day--outside-month": _this.isOutsideMonth()
      }, _this.getHighLightedClass("react-datepicker__day--highlighted"));
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  Day.prototype.render = function render() {
    return React__default.createElement(
      "div",
      {
        className: this.getClassNames(this.props.day),
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        "aria-label": "day-" + getDate(this.props.day),
        role: "option"
      },
      this.props.renderDayContents ? this.props.renderDayContents(getDate(this.props.day)) : getDate(this.props.day)
    );
  };

  return Day;
}(React__default.Component);

Day.propTypes = {
  disabledKeyboardNavigation: PropTypes.bool,
  day: PropTypes.instanceOf(Date).isRequired,
  dayClassName: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  highlightDates: PropTypes.instanceOf(Map),
  inline: PropTypes.bool,
  month: PropTypes.number,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  preSelection: PropTypes.instanceOf(Date),
  selected: PropTypes.object,
  selectingDate: PropTypes.instanceOf(Date),
  selectsEnd: PropTypes.bool,
  selectsStart: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  renderDayContents: PropTypes.func
};

var WeekNumber = function (_React$Component) {
  inherits$1(WeekNumber, _React$Component);

  function WeekNumber() {
    var _temp, _this, _ret;

    classCallCheck$2(this, WeekNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  WeekNumber.prototype.render = function render() {
    var weekNumberClasses = {
      "react-datepicker__week-number": true,
      "react-datepicker__week-number--clickable": !!this.props.onClick
    };
    return React__default.createElement(
      "div",
      {
        className: classnames(weekNumberClasses),
        "aria-label": "week-" + this.props.weekNumber,
        onClick: this.handleClick
      },
      this.props.weekNumber
    );
  };

  return WeekNumber;
}(React__default.Component);

WeekNumber.propTypes = {
  weekNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

var Week = function (_React$Component) {
  inherits$1(Week, _React$Component);

  function Week() {
    var _temp, _this, _ret;

    classCallCheck$2(this, Week);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, event);
      }
    }, _this.handleDayMouseEnter = function (day) {
      if (_this.props.onDayMouseEnter) {
        _this.props.onDayMouseEnter(day);
      }
    }, _this.handleWeekClick = function (day, weekNumber, event) {
      if (typeof _this.props.onWeekSelect === "function") {
        _this.props.onWeekSelect(day, weekNumber, event);
      }
      if (_this.props.shouldCloseOnSelect) {
        _this.props.setOpen(false);
      }
    }, _this.formatWeekNumber = function (startOfWeek) {
      if (_this.props.formatWeekNumber) {
        return _this.props.formatWeekNumber(startOfWeek);
      }
      return getWeek(startOfWeek);
    }, _this.renderDays = function () {
      var startOfWeek = getStartOfWeek(_this.props.day, _this.props.locale);
      var days = [];
      var weekNumber = _this.formatWeekNumber(startOfWeek);
      if (_this.props.showWeekNumber) {
        var onClickAction = _this.props.onWeekSelect ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber) : undefined;
        days.push(React__default.createElement(WeekNumber, { key: "W", weekNumber: weekNumber, onClick: onClickAction }));
      }
      return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
        var day = addDays(startOfWeek, offset);
        return React__default.createElement(Day, {
          key: offset,
          day: day,
          month: _this.props.month,
          onClick: _this.handleDayClick.bind(_this, day),
          onMouseEnter: _this.handleDayMouseEnter.bind(_this, day),
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          includeDates: _this.props.includeDates,
          inline: _this.props.inline,
          highlightDates: _this.props.highlightDates,
          selectingDate: _this.props.selectingDate,
          filterDate: _this.props.filterDate,
          preSelection: _this.props.preSelection,
          selected: _this.props.selected,
          selectsStart: _this.props.selectsStart,
          selectsEnd: _this.props.selectsEnd,
          startDate: _this.props.startDate,
          endDate: _this.props.endDate,
          dayClassName: _this.props.dayClassName,
          renderDayContents: _this.props.renderDayContents,
          disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation
        });
      }));
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  Week.prototype.render = function render() {
    return React__default.createElement(
      "div",
      { className: "react-datepicker__week" },
      this.renderDays()
    );
  };

  createClass$2(Week, null, [{
    key: "defaultProps",
    get: function get$$1() {
      return {
        shouldCloseOnSelect: true
      };
    }
  }]);
  return Week;
}(React__default.Component);

Week.propTypes = {
  disabledKeyboardNavigation: PropTypes.bool,
  day: PropTypes.instanceOf(Date).isRequired,
  dayClassName: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  excludeDates: PropTypes.array,
  filterDate: PropTypes.func,
  formatWeekNumber: PropTypes.func,
  highlightDates: PropTypes.instanceOf(Map),
  includeDates: PropTypes.array,
  inline: PropTypes.bool,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  month: PropTypes.number,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onWeekSelect: PropTypes.func,
  preSelection: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
  selectingDate: PropTypes.instanceOf(Date),
  selectsEnd: PropTypes.bool,
  selectsStart: PropTypes.bool,
  showWeekNumber: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  setOpen: PropTypes.func,
  shouldCloseOnSelect: PropTypes.bool,
  renderDayContents: PropTypes.func
};

var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

var Month = function (_React$Component) {
  inherits$1(Month, _React$Component);

  function Month() {
    var _temp, _this, _ret;

    classCallCheck$2(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleDayClick = function (day, event) {
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, event, _this.props.orderInDisplay);
      }
    }, _this.handleDayMouseEnter = function (day) {
      if (_this.props.onDayMouseEnter) {
        _this.props.onDayMouseEnter(day);
      }
    }, _this.handleMouseLeave = function () {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave();
      }
    }, _this.isWeekInMonth = function (startOfWeek) {
      var day = _this.props.day;
      var endOfWeek = addDays(startOfWeek, 6);
      return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
    }, _this.renderWeeks = function () {
      var weeks = [];
      var isFixedHeight = _this.props.fixedHeight;
      var currentWeekStart = getStartOfWeek(getStartOfMonth(_this.props.day), _this.props.locale);
      var i = 0;
      var breakAfterNextPush = false;

      while (true) {
        weeks.push(React__default.createElement(Week, {
          key: i,
          day: currentWeekStart,
          month: getMonth(_this.props.day),
          onDayClick: _this.handleDayClick,
          onDayMouseEnter: _this.handleDayMouseEnter,
          onWeekSelect: _this.props.onWeekSelect,
          formatWeekNumber: _this.props.formatWeekNumber,
          locale: _this.props.locale,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          includeDates: _this.props.includeDates,
          inline: _this.props.inline,
          highlightDates: _this.props.highlightDates,
          selectingDate: _this.props.selectingDate,
          filterDate: _this.props.filterDate,
          preSelection: _this.props.preSelection,
          selected: _this.props.selected,
          selectsStart: _this.props.selectsStart,
          selectsEnd: _this.props.selectsEnd,
          showWeekNumber: _this.props.showWeekNumbers,
          startDate: _this.props.startDate,
          endDate: _this.props.endDate,
          dayClassName: _this.props.dayClassName,
          setOpen: _this.props.setOpen,
          shouldCloseOnSelect: _this.props.shouldCloseOnSelect,
          disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation,
          renderDayContents: _this.props.renderDayContents
        }));

        if (breakAfterNextPush) break;

        i++;
        currentWeekStart = addWeeks(currentWeekStart, 1);

        // If one of these conditions is true, we will either break on this week
        // or break on the next week
        var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
        var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);

        if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
          if (_this.props.peekNextMonth) {
            breakAfterNextPush = true;
          } else {
            break;
          }
        }
      }

      return weeks;
    }, _this.getClassNames = function () {
      var _this$props = _this.props,
          selectingDate = _this$props.selectingDate,
          selectsStart = _this$props.selectsStart,
          selectsEnd = _this$props.selectsEnd;

      return classnames("react-datepicker__month", {
        "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd)
      });
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  Month.prototype.render = function render() {
    return React__default.createElement(
      "div",
      {
        className: this.getClassNames(),
        onMouseLeave: this.handleMouseLeave,
        role: "listbox",
        "aria-label": "month-" + formatDate(this.props.day, "YYYY-MM")
      },
      this.renderWeeks()
    );
  };

  return Month;
}(React__default.Component);

Month.propTypes = {
  disabledKeyboardNavigation: PropTypes.bool,
  day: PropTypes.instanceOf(Date).isRequired,
  dayClassName: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  orderInDisplay: PropTypes.number,
  excludeDates: PropTypes.array,
  filterDate: PropTypes.func,
  fixedHeight: PropTypes.bool,
  formatWeekNumber: PropTypes.func,
  highlightDates: PropTypes.instanceOf(Map),
  includeDates: PropTypes.array,
  inline: PropTypes.bool,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onWeekSelect: PropTypes.func,
  peekNextMonth: PropTypes.bool,
  preSelection: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
  selectingDate: PropTypes.instanceOf(Date),
  selectsEnd: PropTypes.bool,
  selectsStart: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  setOpen: PropTypes.func,
  shouldCloseOnSelect: PropTypes.bool,
  renderDayContents: PropTypes.func
};

var Time = function (_React$Component) {
  inherits$1(Time, _React$Component);

  function Time() {
    var _temp, _this, _ret;

    classCallCheck$2(this, Time);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (time) {
      if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
        return;
      }
      _this.props.onChange(time);
    }, _this.liClasses = function (time, currH, currM) {
      var classes = ["react-datepicker__time-list-item"];

      if (currH === getHours(time) && currM === getMinutes(time)) {
        classes.push("react-datepicker__time-list-item--selected");
      }
      if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || _this.props.excludeTimes && isTimeDisabled(time, _this.props.excludeTimes) || _this.props.includeTimes && !isTimeDisabled(time, _this.props.includeTimes)) {
        classes.push("react-datepicker__time-list-item--disabled");
      }
      if (_this.props.injectTimes && (getHours(time) * 60 + getMinutes(time)) % _this.props.intervals !== 0) {
        classes.push("react-datepicker__time-list-item--injected");
      }

      return classes.join(" ");
    }, _this.renderTimes = function () {
      var times = [];
      var format = _this.props.format ? _this.props.format : "p";
      var intervals = _this.props.intervals;
      var activeTime = _this.props.selected ? _this.props.selected : newDate();
      var currH = getHours(activeTime);
      var currM = getMinutes(activeTime);
      var base = getStartOfDay(newDate());
      var multiplier = 1440 / intervals;
      var sortedInjectTimes = _this.props.injectTimes && _this.props.injectTimes.sort(function (a, b) {
        return a - b;
      });
      for (var i = 0; i < multiplier; i++) {
        var currentTime = addMinutes(base, i * intervals);
        times.push(currentTime);

        if (sortedInjectTimes) {
          var timesToInject = timesToInjectAfter(base, currentTime, i, intervals, sortedInjectTimes);
          times = times.concat(timesToInject);
        }
      }

      return times.map(function (time, i) {
        return React__default.createElement(
          "li",
          {
            key: i,
            onClick: _this.handleClick.bind(_this, time),
            className: _this.liClasses(time, currH, currM),
            ref: function ref(li) {
              if (currH === getHours(time) && currM === getMinutes(time) || currH === getHours(time) && !_this.centerLi) {
                _this.centerLi = li;
              }
            }
          },
          formatDate(time, format)
        );
      });
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  Time.prototype.componentDidMount = function componentDidMount() {
    // code to ensure selected time will always be in focus within time window when it first appears
    this.list.scrollTop = Time.calcCenterPosition(this.props.monthRef ? this.props.monthRef.clientHeight - this.header.clientHeight : this.list.clientHeight, this.centerLi);
  };

  Time.prototype.render = function render() {
    var _this2 = this;

    var height = null;
    if (this.props.monthRef && this.header) {
      height = this.props.monthRef.clientHeight - this.header.clientHeight;
    }

    return React__default.createElement(
      "div",
      {
        className: "react-datepicker__time-container " + (this.props.todayButton ? "react-datepicker__time-container--with-today-button" : "")
      },
      React__default.createElement(
        "div",
        {
          className: "react-datepicker__header react-datepicker__header--time",
          ref: function ref(header) {
            _this2.header = header;
          }
        },
        React__default.createElement(
          "div",
          { className: "react-datepicker-time__header" },
          this.props.timeCaption
        )
      ),
      React__default.createElement(
        "div",
        { className: "react-datepicker__time" },
        React__default.createElement(
          "div",
          { className: "react-datepicker__time-box" },
          React__default.createElement(
            "ul",
            {
              className: "react-datepicker__time-list",
              ref: function ref(list) {
                _this2.list = list;
              },
              style: height ? { height: height } : {}
            },
            this.renderTimes.bind(this)()
          )
        )
      )
    );
  };

  createClass$2(Time, null, [{
    key: "defaultProps",
    get: function get$$1() {
      return {
        intervals: 30,
        onTimeChange: function onTimeChange() {},
        todayButton: null,
        timeCaption: "Time"
      };
    }
  }]);
  return Time;
}(React__default.Component);

Time.propTypes = {
  format: PropTypes.string,
  includeTimes: PropTypes.array,
  intervals: PropTypes.number,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  todayButton: PropTypes.node,
  minTime: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
  excludeTimes: PropTypes.array,
  monthRef: PropTypes.object,
  timeCaption: PropTypes.string,
  injectTimes: PropTypes.array
};

Time.calcCenterPosition = function (listHeight, centerLiRef) {
  return centerLiRef.offsetTop - (listHeight / 2 - centerLiRef.clientHeight / 2);
};

var inputTime = function (_React$Component) {
  inherits$1(inputTime, _React$Component);

  function inputTime(props) {
    classCallCheck$2(this, inputTime);

    var _this = possibleConstructorReturn$1(this, _React$Component.call(this, props));

    _this.onTimeChange = function (time) {
      _this.setState({ time: time });
      var date = new Date();
      date.setHours(time.split(":")[0]);
      date.setMinutes(time.split(":")[1]);
      _this.props.onChange(date);
    };

    _this.state = {
      time: _this.props.timeString
    };
    return _this;
  }

  inputTime.prototype.render = function render() {
    var _this2 = this;

    var time = this.state.time;

    return React__default.createElement(
      "div",
      { className: "react-datepicker__input-time-container" },
      React__default.createElement(
        "div",
        { className: "react-datepicker-time__caption" },
        this.props.timeInputLabel
      ),
      React__default.createElement(
        "div",
        { className: "react-datepicker-time__input-container" },
        React__default.createElement(
          "div",
          { className: "react-datepicker-time__input" },
          React__default.createElement("input", {
            type: "time",
            className: "react-datepicker-time__input",
            placeholder: "Time",
            name: "time-input",
            value: time,
            onChange: function onChange(ev) {
              _this2.onTimeChange(ev.target.value);
            }
          })
        )
      )
    );
  };

  return inputTime;
}(React__default.Component);

inputTime.propTypes = {
  onChange: PropTypes.func,
  timeString: PropTypes.string,
  timeInputLabel: PropTypes.string
};

function CalendarContainer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$arrowProps = _ref.arrowProps,
      arrowProps = _ref$arrowProps === undefined ? {} : _ref$arrowProps;

  return React__default.createElement(
    "div",
    { className: className },
    React__default.createElement("div", _extends$2({ className: "react-datepicker__triangle" }, arrowProps)),
    children
  );
}

CalendarContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  arrowProps: PropTypes.object // react-popper arrow props
};

var DROPDOWN_FOCUS_CLASSNAMES = ["react-datepicker__year-select", "react-datepicker__month-select", "react-datepicker__month-year-select"];

var isDropdownSelect = function isDropdownSelect() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var classNames = (element.className || "").split(/\s+/);
  return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
    return classNames.indexOf(testClassname) >= 0;
  });
};

var Calendar = function (_React$Component) {
  inherits$1(Calendar, _React$Component);
  createClass$2(Calendar, null, [{
    key: "defaultProps",
    get: function get$$1() {
      return {
        onDropdownFocus: function onDropdownFocus() {},
        monthsShown: 1,
        monthSelectedIn: 0,
        forceShowMonthNavigation: false,
        timeCaption: "Time",
        previousMonthButtonLabel: "Previous Month",
        nextMonthButtonLabel: "Next Month"
      };
    }
  }]);

  function Calendar(props) {
    classCallCheck$2(this, Calendar);

    var _this = possibleConstructorReturn$1(this, _React$Component.call(this, props));

    _this.handleClickOutside = function (event) {
      _this.props.onClickOutside(event);
    };

    _this.handleDropdownFocus = function (event) {
      if (isDropdownSelect(event.target)) {
        _this.props.onDropdownFocus();
      }
    };

    _this.getDateInView = function () {
      var _this$props = _this.props,
          preSelection = _this$props.preSelection,
          selected = _this$props.selected,
          openToDate = _this$props.openToDate;

      var minDate = getEffectiveMinDate(_this.props);
      var maxDate = getEffectiveMaxDate(_this.props);
      var current = newDate();
      var initialDate = openToDate || selected || preSelection;
      if (initialDate) {
        return initialDate;
      } else {
        if (minDate && isBefore(current, minDate)) {
          return minDate;
        } else if (maxDate && isAfter(current, maxDate)) {
          return maxDate;
        }
      }
      return current;
    };

    _this.increaseMonth = function () {
      _this.setState({
        date: addMonths(_this.state.date, 1)
      }, function () {
        return _this.handleMonthChange(_this.state.date);
      });
    };

    _this.decreaseMonth = function () {
      _this.setState({
        date: subMonths(_this.state.date, 1)
      }, function () {
        return _this.handleMonthChange(_this.state.date);
      });
    };

    _this.handleDayClick = function (day, event, monthSelectedIn) {
      return _this.props.onSelect(day, event, monthSelectedIn);
    };

    _this.handleDayMouseEnter = function (day) {
      _this.setState({ selectingDate: day });
      _this.props.onDayMouseEnter && _this.props.onDayMouseEnter(day);
    };

    _this.handleMonthMouseLeave = function () {
      _this.setState({ selectingDate: null });
      _this.props.onMonthMouseLeave && _this.props.onMonthMouseLeave();
    };

    _this.handleYearChange = function (date) {
      if (_this.props.onYearChange) {
        _this.props.onYearChange(date);
      }
    };

    _this.handleMonthChange = function (date) {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(date);
      }
      if (_this.props.adjustDateOnChange) {
        if (_this.props.onSelect) {
          _this.props.onSelect(date);
        }
        if (_this.props.setOpen) {
          _this.props.setOpen(true);
        }
      }
    };

    _this.handleMonthYearChange = function (date) {
      _this.handleYearChange(date);
      _this.handleMonthChange(date);
    };

    _this.changeYear = function (year) {
      _this.setState({
        date: setYear(_this.state.date, year)
      }, function () {
        return _this.handleYearChange(_this.state.date);
      });
    };

    _this.changeMonth = function (month) {
      _this.setState({
        date: setMonth(_this.state.date, month)
      }, function () {
        return _this.handleMonthChange(_this.state.date);
      });
    };

    _this.changeMonthYear = function (monthYear) {
      _this.setState({
        date: setYear(setMonth(_this.state.date, getMonth(monthYear)), getYear(monthYear))
      }, function () {
        return _this.handleMonthYearChange(_this.state.date);
      });
    };

    _this.header = function () {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

      var startOfWeek = getStartOfWeek(date, _this.props.locale);
      var dayNames = [];
      if (_this.props.showWeekNumbers) {
        dayNames.push(React__default.createElement(
          "div",
          { key: "W", className: "react-datepicker__day-name" },
          _this.props.weekLabel || "#"
        ));
      }
      return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
        var day = addDays(startOfWeek, offset);
        var weekDayName = _this.formatWeekday(day, _this.props.locale);
        return React__default.createElement(
          "div",
          { key: offset, className: "react-datepicker__day-name" },
          weekDayName
        );
      }));
    };

    _this.formatWeekday = function (day, locale) {
      if (_this.props.formatWeekDay) {
        return getFormattedWeekdayInLocale(day, _this.props.formatWeekDay, locale);
      }
      return _this.props.useWeekdaysShort ? getWeekdayShortInLocale(day, locale) : getWeekdayMinInLocale(day, locale);
    };

    _this.renderPreviousMonthButton = function () {
      if (_this.props.renderCustomHeader) {
        return;
      }

      var allPrevDaysDisabled = monthDisabledBefore(_this.state.date, _this.props);

      if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allPrevDaysDisabled || _this.props.showTimeSelectOnly) {
        return;
      }

      var classes = ["react-datepicker__navigation", "react-datepicker__navigation--previous"];

      var clickHandler = _this.decreaseMonth;

      if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
        classes.push("react-datepicker__navigation--previous--disabled");
        clickHandler = null;
      }

      return React__default.createElement(
        "button",
        {
          type: "button",
          className: classes.join(" "),
          onClick: clickHandler
        },
        _this.props.previousMonthButtonLabel
      );
    };

    _this.renderNextMonthButton = function () {
      if (_this.props.renderCustomHeader) {
        return;
      }

      var allNextDaysDisabled = monthDisabledAfter(_this.state.date, _this.props);

      if (!_this.props.forceShowMonthNavigation && !_this.props.showDisabledMonthNavigation && allNextDaysDisabled || _this.props.showTimeSelectOnly) {
        return;
      }

      var classes = ["react-datepicker__navigation", "react-datepicker__navigation--next"];
      if (_this.props.showTimeSelect) {
        classes.push("react-datepicker__navigation--next--with-time");
      }
      if (_this.props.todayButton) {
        classes.push("react-datepicker__navigation--next--with-today-button");
      }

      var clickHandler = _this.increaseMonth;

      if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
        classes.push("react-datepicker__navigation--next--disabled");
        clickHandler = null;
      }

      return React__default.createElement(
        "button",
        {
          type: "button",
          className: classes.join(" "),
          onClick: clickHandler
        },
        _this.props.nextMonthButtonLabel
      );
    };

    _this.renderCurrentMonth = function () {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.date;

      var classes = ["react-datepicker__current-month"];

      if (_this.props.showYearDropdown) {
        classes.push("react-datepicker__current-month--hasYearDropdown");
      }
      if (_this.props.showMonthDropdown) {
        classes.push("react-datepicker__current-month--hasMonthDropdown");
      }
      if (_this.props.showMonthYearDropdown) {
        classes.push("react-datepicker__current-month--hasMonthYearDropdown");
      }
      return React__default.createElement(
        "div",
        { className: classes.join(" ") },
        formatDate(date, _this.props.dateFormat, _this.props.locale)
      );
    };

    _this.renderYearDropdown = function () {
      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!_this.props.showYearDropdown || overrideHide) {
        return;
      }
      return React__default.createElement(YearDropdown, {
        adjustDateOnChange: _this.props.adjustDateOnChange,
        date: _this.state.date,
        onSelect: _this.props.onSelect,
        setOpen: _this.props.setOpen,
        dropdownMode: _this.props.dropdownMode,
        onChange: _this.changeYear,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        year: getYear(_this.state.date),
        scrollableYearDropdown: _this.props.scrollableYearDropdown,
        yearDropdownItemNumber: _this.props.yearDropdownItemNumber
      });
    };

    _this.renderMonthDropdown = function () {
      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!_this.props.showMonthDropdown || overrideHide) {
        return;
      }
      return React__default.createElement(MonthDropdown, {
        dropdownMode: _this.props.dropdownMode,
        locale: _this.props.locale,
        onChange: _this.changeMonth,
        month: getMonth(_this.state.date),
        useShortMonthInDropdown: _this.props.useShortMonthInDropdown
      });
    };

    _this.renderMonthYearDropdown = function () {
      var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!_this.props.showMonthYearDropdown || overrideHide) {
        return;
      }
      return React__default.createElement(MonthYearDropdown, {
        dropdownMode: _this.props.dropdownMode,
        locale: _this.props.locale,
        dateFormat: _this.props.dateFormat,
        onChange: _this.changeMonthYear,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        date: _this.state.date,
        scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown
      });
    };

    _this.renderTodayButton = function () {
      if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
        return;
      }
      return React__default.createElement(
        "div",
        {
          className: "react-datepicker__today-button",
          onClick: function onClick(e) {
            return _this.props.onSelect(getStartOfToday(), e);
          }
        },
        _this.props.todayButton
      );
    };

    _this.renderDefaultHeader = function (_ref) {
      var monthDate = _ref.monthDate,
          i = _ref.i;
      return React__default.createElement(
        "div",
        { className: "react-datepicker__header" },
        _this.renderCurrentMonth(monthDate),
        React__default.createElement(
          "div",
          {
            className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--" + _this.props.dropdownMode,
            onFocus: _this.handleDropdownFocus
          },
          _this.renderMonthDropdown(i !== 0),
          _this.renderMonthYearDropdown(i !== 0),
          _this.renderYearDropdown(i !== 0)
        ),
        React__default.createElement(
          "div",
          { className: "react-datepicker__day-names" },
          _this.header(monthDate)
        )
      );
    };

    _this.renderCustomHeader = function (_ref2) {
      var monthDate = _ref2.monthDate,
          i = _ref2.i;

      if (i !== 0) {
        return null;
      }

      var prevMonthButtonDisabled = monthDisabledBefore(_this.state.date, _this.props);

      var nextMonthButtonDisabled = monthDisabledAfter(_this.state.date, _this.props);

      return React__default.createElement(
        "div",
        {
          className: "react-datepicker__header react-datepicker__header--custom",
          onFocus: _this.props.onDropdownFocus
        },
        _this.props.renderCustomHeader(_extends$2({}, _this.state, {
          changeMonth: _this.changeMonth,
          changeYear: _this.changeYear,
          decreaseMonth: _this.decreaseMonth,
          increaseMonth: _this.increaseMonth,
          prevMonthButtonDisabled: prevMonthButtonDisabled,
          nextMonthButtonDisabled: nextMonthButtonDisabled
        })),
        React__default.createElement(
          "div",
          { className: "react-datepicker__day-names" },
          _this.header(monthDate)
        )
      );
    };

    _this.renderMonths = function () {
      if (_this.props.showTimeSelectOnly) {
        return;
      }

      var monthList = [];
      for (var i = 0; i < _this.props.monthsShown; ++i) {
        var monthsToAdd = i - _this.props.monthSelectedIn;
        var monthDate = addMonths(_this.state.date, monthsToAdd);
        var monthKey = "month-" + i;
        monthList.push(React__default.createElement(
          "div",
          {
            key: monthKey,
            ref: function ref(div) {
              _this.monthContainer = div;
            },
            className: "react-datepicker__month-container"
          },
          _this.props.renderCustomHeader ? _this.renderCustomHeader({ monthDate: monthDate, i: i }) : _this.renderDefaultHeader({ monthDate: monthDate, i: i }),
          React__default.createElement(Month, {
            day: monthDate,
            dayClassName: _this.props.dayClassName,
            onDayClick: _this.handleDayClick,
            onDayMouseEnter: _this.handleDayMouseEnter,
            onMouseLeave: _this.handleMonthMouseLeave,
            onWeekSelect: _this.props.onWeekSelect,
            orderInDisplay: i,
            formatWeekNumber: _this.props.formatWeekNumber,
            locale: _this.props.locale,
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            excludeDates: _this.props.excludeDates,
            highlightDates: _this.props.highlightDates,
            selectingDate: _this.state.selectingDate,
            includeDates: _this.props.includeDates,
            inline: _this.props.inline,
            fixedHeight: _this.props.fixedHeight,
            filterDate: _this.props.filterDate,
            preSelection: _this.props.preSelection,
            selected: _this.props.selected,
            selectsStart: _this.props.selectsStart,
            selectsEnd: _this.props.selectsEnd,
            showWeekNumbers: _this.props.showWeekNumbers,
            startDate: _this.props.startDate,
            endDate: _this.props.endDate,
            peekNextMonth: _this.props.peekNextMonth,
            setOpen: _this.props.setOpen,
            shouldCloseOnSelect: _this.props.shouldCloseOnSelect,
            renderDayContents: _this.props.renderDayContents,
            disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation
          })
        ));
      }
      return monthList;
    };

    _this.renderTimeSection = function () {
      if (_this.props.showTimeSelect && (_this.state.monthContainer || _this.props.showTimeSelectOnly)) {
        return React__default.createElement(Time, {
          selected: _this.props.selected,
          onChange: _this.props.onTimeChange,
          format: _this.props.timeFormat,
          includeTimes: _this.props.includeTimes,
          intervals: _this.props.timeIntervals,
          minTime: _this.props.minTime,
          maxTime: _this.props.maxTime,
          excludeTimes: _this.props.excludeTimes,
          timeCaption: _this.props.timeCaption,
          todayButton: _this.props.todayButton,
          showMonthDropdown: _this.props.showMonthDropdown,
          showMonthYearDropdown: _this.props.showMonthYearDropdown,
          showYearDropdown: _this.props.showYearDropdown,
          withPortal: _this.props.withPortal,
          monthRef: _this.state.monthContainer,
          injectTimes: _this.props.injectTimes
        });
      }
    };

    _this.renderInputTimeSection = function () {
      var time = new Date(_this.props.selected);
      var timeString = addZero(time.getHours()) + ":" + addZero(time.getMinutes());
      if (_this.props.showTimeInput) {
        return React__default.createElement(inputTime, {
          timeString: timeString,
          timeInputLabel: _this.props.timeInputLabel,
          onChange: _this.props.onTimeChange
        });
      }
    };

    _this.state = {
      date: _this.getDateInView(),
      selectingDate: null,
      monthContainer: null
    };
    return _this;
  }

  Calendar.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // monthContainer height is needed in time component
    // to determine the height for the ul in the time component
    // setState here so height is given after final component
    // layout is rendered
    if (this.props.showTimeSelect) {
      this.assignMonthContainer = function () {
        _this2.setState({ monthContainer: _this2.monthContainer });
      }();
    }
  };

  Calendar.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.preSelection && !isSameDay(this.props.preSelection, prevProps.preSelection)) {
      this.setState({
        date: this.props.preSelection
      });
    } else if (this.props.openToDate && !isSameDay(this.props.openToDate, prevProps.openToDate)) {
      this.setState({
        date: this.props.openToDate
      });
    }
  };

  Calendar.prototype.render = function render() {
    var Container = this.props.container || CalendarContainer;
    return React__default.createElement(
      Container,
      {
        className: classnames("react-datepicker", this.props.className, {
          "react-datepicker--time-only": this.props.showTimeSelectOnly
        })
      },
      this.renderPreviousMonthButton(),
      this.renderNextMonthButton(),
      this.renderMonths(),
      this.renderTodayButton(),
      this.renderTimeSection(),
      this.renderInputTimeSection(),
      this.props.children
    );
  };

  return Calendar;
}(React__default.Component);

Calendar.propTypes = {
  adjustDateOnChange: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  container: PropTypes.func,
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  dayClassName: PropTypes.func,
  disabledKeyboardNavigation: PropTypes.bool,
  dropdownMode: PropTypes.oneOf(["scroll", "select"]),
  endDate: PropTypes.instanceOf(Date),
  excludeDates: PropTypes.array,
  filterDate: PropTypes.func,
  fixedHeight: PropTypes.bool,
  formatWeekNumber: PropTypes.func,
  highlightDates: PropTypes.instanceOf(Map),
  includeDates: PropTypes.array,
  includeTimes: PropTypes.array,
  injectTimes: PropTypes.array,
  inline: PropTypes.bool,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  monthsShown: PropTypes.number,
  monthSelectedIn: PropTypes.number,
  onClickOutside: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func,
  onYearChange: PropTypes.func,
  forceShowMonthNavigation: PropTypes.bool,
  onDropdownFocus: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  onWeekSelect: PropTypes.func,
  showTimeSelect: PropTypes.bool,
  showTimeInput: PropTypes.bool,
  showTimeSelectOnly: PropTypes.bool,
  timeFormat: PropTypes.string,
  timeIntervals: PropTypes.number,
  onTimeChange: PropTypes.func,
  timeInputLabel: PropTypes.string,
  minTime: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
  excludeTimes: PropTypes.array,
  timeCaption: PropTypes.string,
  openToDate: PropTypes.instanceOf(Date),
  peekNextMonth: PropTypes.bool,
  scrollableYearDropdown: PropTypes.bool,
  scrollableMonthYearDropdown: PropTypes.bool,
  preSelection: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
  selectsEnd: PropTypes.bool,
  selectsStart: PropTypes.bool,
  showMonthDropdown: PropTypes.bool,
  showMonthYearDropdown: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  todayButton: PropTypes.string,
  useWeekdaysShort: PropTypes.bool,
  formatWeekDay: PropTypes.func,
  withPortal: PropTypes.bool,
  weekLabel: PropTypes.string,
  yearDropdownItemNumber: PropTypes.number,
  setOpen: PropTypes.func,
  shouldCloseOnSelect: PropTypes.bool,
  useShortMonthInDropdown: PropTypes.bool,
  showDisabledMonthNavigation: PropTypes.bool,
  previousMonthButtonLabel: PropTypes.string,
  nextMonthButtonLabel: PropTypes.string,
  renderCustomHeader: PropTypes.func,
  renderDayContents: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onMonthMouseLeave: PropTypes.func
};

var popperPlacementPositions = placements$1;

var PopperComponent = function (_React$Component) {
  inherits$1(PopperComponent, _React$Component);

  function PopperComponent() {
    classCallCheck$2(this, PopperComponent);
    return possibleConstructorReturn$1(this, _React$Component.apply(this, arguments));
  }

  PopperComponent.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        hidePopper = _props.hidePopper,
        popperComponent = _props.popperComponent,
        popperModifiers = _props.popperModifiers,
        popperPlacement = _props.popperPlacement,
        popperProps = _props.popperProps,
        targetComponent = _props.targetComponent;


    var popper = void 0;

    if (!hidePopper) {
      var classes = classnames("react-datepicker-popper", className);
      popper = React__default.createElement(
        Popper$1,
        _extends$2({
          modifiers: popperModifiers,
          placement: popperPlacement
        }, popperProps),
        function (_ref) {
          var ref = _ref.ref,
              style = _ref.style,
              placement = _ref.placement,
              arrowProps = _ref.arrowProps;
          return React__default.createElement(
            "div",
            _extends$2({ ref: ref, style: style }, {
              className: classes,
              "data-placement": placement
            }),
            React__default.cloneElement(popperComponent, { arrowProps: arrowProps })
          );
        }
      );
    }

    if (this.props.popperContainer) {
      popper = React__default.createElement(this.props.popperContainer, {}, popper);
    }

    return React__default.createElement(
      Manager,
      null,
      React__default.createElement(
        Reference,
        null,
        function (_ref2) {
          var ref = _ref2.ref;
          return React__default.createElement(
            "div",
            { ref: ref, className: "react-datepicker-wrapper" },
            targetComponent
          );
        }
      ),
      popper
    );
  };

  createClass$2(PopperComponent, null, [{
    key: "defaultProps",
    get: function get$$1() {
      return {
        hidePopper: true,
        popperModifiers: {
          preventOverflow: {
            enabled: true,
            escapeWithReference: true,
            boundariesElement: "viewport"
          }
        },
        popperProps: {},
        popperPlacement: "bottom-start"
      };
    }
  }]);
  return PopperComponent;
}(React__default.Component);

PopperComponent.propTypes = {
  className: PropTypes.string,
  hidePopper: PropTypes.bool,
  popperComponent: PropTypes.element,
  popperModifiers: PropTypes.object, // <datepicker/> props
  popperPlacement: PropTypes.oneOf(popperPlacementPositions), // <datepicker/> props
  popperContainer: PropTypes.func,
  popperProps: PropTypes.object,
  targetComponent: PropTypes.element
};

var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
var WrappedCalendar = onClickOutsideHOC(Calendar);

// Compares dates year+month combinations
function hasPreSelectionChanged(date1, date2) {
  if (date1 && date2) {
    return getMonth(date1) !== getMonth(date2) || getYear(date1) !== getYear(date2);
  }

  return date1 !== date2;
}

function hasSelectionChanged(date1, date2) {
  if (date1 && date2) {
    return !isEqual(date1, date2);
  }

  return false;
}

/**
 * General datepicker component.
 */
var INPUT_ERR_1 = "Date input not valid.";

var DatePicker = function (_React$Component) {
  inherits$1(DatePicker, _React$Component);
  createClass$2(DatePicker, null, [{
    key: "defaultProps",
    get: function get$$1() {
      return {
        allowSameDay: false,
        dateFormat: "MM/dd/yyyy",
        dateFormatCalendar: "LLLL yyyy",
        onChange: function onChange() {},

        disabled: false,
        disabledKeyboardNavigation: false,
        dropdownMode: "scroll",
        onFocus: function onFocus() {},
        onBlur: function onBlur() {},
        onKeyDown: function onKeyDown() {},
        onInputClick: function onInputClick() {},
        onSelect: function onSelect() {},
        onClickOutside: function onClickOutside$$1() {},
        onMonthChange: function onMonthChange() {},

        preventOpenOnFocus: false,
        onYearChange: function onYearChange() {},
        onInputError: function onInputError() {},

        monthsShown: 1,
        readOnly: false,
        withPortal: false,
        shouldCloseOnSelect: true,
        showTimeSelect: false,
        showTimeInput: false,
        strictParsing: false,
        timeIntervals: 30,
        timeCaption: "Time",
        previousMonthButtonLabel: "Previous Month",
        nextMonthButtonLabel: "Next month",
        timeInputLabel: "Time",
        renderDayContents: function renderDayContents(date) {
          return date;
        },

        inlineFocusSelectedMonth: false
      };
    }
  }]);

  function DatePicker(props) {
    classCallCheck$2(this, DatePicker);

    var _this = possibleConstructorReturn$1(this, _React$Component.call(this, props));

    _this.getPreSelection = function () {
      return _this.props.openToDate ? _this.props.openToDate : _this.props.selectsEnd && _this.props.startDate ? _this.props.startDate : _this.props.selectsStart && _this.props.endDate ? _this.props.endDate : newDate();
    };

    _this.calcInitialState = function () {
      var defaultPreSelection = _this.getPreSelection();
      var minDate = getEffectiveMinDate(_this.props);
      var maxDate = getEffectiveMaxDate(_this.props);
      var boundedPreSelection = minDate && isBefore(defaultPreSelection, minDate) ? minDate : maxDate && isAfter(defaultPreSelection, maxDate) ? maxDate : defaultPreSelection;
      return {
        open: _this.props.startOpen || false,
        preventFocus: false,
        preSelection: _this.props.selected ? _this.props.selected : boundedPreSelection,
        // transforming highlighted days (perhaps nested array)
        // to flat Map for faster access in day.jsx
        highlightDates: getHightLightDaysMap(_this.props.highlightDates),
        focused: false
      };
    };

    _this.clearPreventFocusTimeout = function () {
      if (_this.preventFocusTimeout) {
        clearTimeout(_this.preventFocusTimeout);
      }
    };

    _this.setFocus = function () {
      if (_this.input && _this.input.focus) {
        _this.input.focus();
      }
    };

    _this.setBlur = function () {
      if (_this.input && _this.input.blur) {
        _this.input.blur();
      }

      _this.cancelFocusInput();
    };

    _this.setOpen = function (open) {
      var skipSetBlur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.setState({
        open: open,
        preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection,
        lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
      }, function () {
        if (!open) {
          _this.setState(function (prev) {
            return {
              focused: skipSetBlur ? prev.focused : false
            };
          }, function () {
            !skipSetBlur && _this.setBlur();

            _this.setState({ inputValue: null });
          });
        }
      });
    };

    _this.inputOk = function () {
      return isDate(_this.state.preSelection);
    };

    _this.isCalendarOpen = function () {
      return _this.props.open === undefined ? _this.state.open && !_this.props.disabled && !_this.props.readOnly : _this.props.open;
    };

    _this.handleFocus = function (event) {
      if (!_this.state.preventFocus) {
        _this.props.onFocus(event);
        if (!_this.props.preventOpenOnFocus && !_this.props.readOnly) {
          _this.setOpen(true);
        }
      }
      _this.setState({ focused: true });
    };

    _this.cancelFocusInput = function () {
      clearTimeout(_this.inputFocusTimeout);
      _this.inputFocusTimeout = null;
    };

    _this.deferFocusInput = function () {
      _this.cancelFocusInput();
      _this.inputFocusTimeout = setTimeout(function () {
        return _this.setFocus();
      }, 1);
    };

    _this.handleDropdownFocus = function () {
      _this.cancelFocusInput();
    };

    _this.handleBlur = function (event) {
      if (_this.state.open && !_this.props.withPortal && !_this.props.showTimeInput) {
        _this.deferFocusInput();
      } else {
        _this.props.onBlur(event);
      }
      _this.setState({ focused: false });
    };

    _this.handleCalendarClickOutside = function (event) {
      if (!_this.props.inline) {
        _this.setOpen(false);
      }
      _this.props.onClickOutside(event);
      if (_this.props.withPortal) {
        event.preventDefault();
      }
    };

    _this.handleChange = function () {
      for (var _len = arguments.length, allArgs = Array(_len), _key = 0; _key < _len; _key++) {
        allArgs[_key] = arguments[_key];
      }

      var event = allArgs[0];
      if (_this.props.onChangeRaw) {
        _this.props.onChangeRaw.apply(_this, allArgs);
        if (typeof event.isDefaultPrevented !== "function" || event.isDefaultPrevented()) {
          return;
        }
      }
      _this.setState({
        inputValue: event.target.value,
        lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
      });
      var date = parseDate(event.target.value, _this.props.dateFormat, _this.props.locale, _this.props.strictParsing);
      if (date || !event.target.value) {
        _this.setSelected(date, event, true);
      }
    };

    _this.handleSelect = function (date, event, monthSelectedIn) {
      // Preventing onFocus event to fix issue
      // https://github.com/Hacker0x01/react-datepicker/issues/628
      _this.setState({ preventFocus: true }, function () {
        _this.preventFocusTimeout = setTimeout(function () {
          return _this.setState({ preventFocus: false });
        }, 50);
        return _this.preventFocusTimeout;
      });
      _this.setSelected(date, event, undefined, monthSelectedIn);
      if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
        _this.setPreSelection(date);
      } else if (!_this.props.inline) {
        _this.setOpen(false);
      }
    };

    _this.setSelected = function (date, event, keepInput, monthSelectedIn) {
      var changedDate = date;

      if (changedDate !== null && isDayDisabled(changedDate, _this.props)) {
        if (isOutOfBounds(changedDate, _this.props)) {
          _this.props.onChange(date, event);
          _this.props.onSelect(changedDate, event);
        }

        return;
      }

      if (!isSameDay(_this.props.selected, changedDate) || _this.props.allowSameDay) {
        if (changedDate !== null) {
          if (_this.props.selected) {
            var selected = _this.props.selected;
            if (keepInput) selected = newDate(changedDate);
            changedDate = setTime(changedDate, {
              hour: getHours(selected),
              minute: getMinutes(selected),
              second: getSeconds(selected)
            });
          }
          if (!_this.props.inline) {
            _this.setState({
              preSelection: changedDate
            });
          }
          if (_this.props.inline && _this.props.monthsShown > 1 && !_this.props.inlineFocusSelectedMonth) {
            _this.setState({ monthSelectedIn: monthSelectedIn });
          }
        }
        _this.props.onChange(changedDate, event);
      }

      _this.props.onSelect(changedDate, event);

      if (!keepInput) {
        _this.setState({ inputValue: null });
      }
    };

    _this.setPreSelection = function (date) {
      var isDateRangePresent = typeof _this.props.minDate !== "undefined" && typeof _this.props.maxDate !== "undefined";
      var isValidDateSelection = isDateRangePresent && date ? isDayInRange(date, _this.props.minDate, _this.props.maxDate) : true;
      if (isValidDateSelection) {
        _this.setState({
          preSelection: date
        });
      }
    };

    _this.handleTimeChange = function (time) {
      var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
      var changedDate = setTime(selected, {
        hour: getHours(time),
        minute: getMinutes(time)
      });

      _this.setState({
        preSelection: changedDate
      });

      _this.props.onChange(changedDate);
      if (_this.props.shouldCloseOnSelect) {
        _this.setOpen(false);
      }
      if (_this.props.showTimeInput) {
        _this.setOpen(true);
      }
      _this.setState({ inputValue: null });
    };

    _this.onInputClick = function () {
      if (!_this.props.disabled && !_this.props.readOnly) {
        _this.setOpen(true);
      }

      _this.props.onInputClick();
    };

    _this.onInputKeyDown = function (event) {
      _this.props.onKeyDown(event);
      var eventKey = event.key;
      if (!_this.state.open && !_this.props.inline && !_this.props.preventOpenOnFocus) {
        if (eventKey === "ArrowDown" || eventKey === "ArrowUp") {
          _this.onInputClick();
        }
        return;
      }
      var copy = newDate(_this.state.preSelection);
      if (eventKey === "Enter") {
        event.preventDefault();
        if (_this.inputOk() && _this.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE) {
          _this.handleSelect(copy, event);
          !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
        } else {
          _this.setOpen(false);
        }
      } else if (eventKey === "Escape") {
        event.preventDefault();

        _this.setOpen(false);
        if (!_this.inputOk()) {
          _this.props.onInputError({ code: 1, msg: INPUT_ERR_1 });
        }
      } else if (eventKey === "Tab") {
        _this.setOpen(false, true);
      } else if (!_this.props.disabledKeyboardNavigation) {
        var newSelection = void 0;
        switch (eventKey) {
          case "ArrowLeft":
            newSelection = subDays(copy, 1);
            break;
          case "ArrowRight":
            newSelection = addDays(copy, 1);
            break;
          case "ArrowUp":
            newSelection = subWeeks(copy, 1);
            break;
          case "ArrowDown":
            newSelection = addWeeks(copy, 1);
            break;
          case "PageUp":
            newSelection = subMonths(copy, 1);
            break;
          case "PageDown":
            newSelection = addMonths(copy, 1);
            break;
          case "Home":
            newSelection = subYears(copy, 1);
            break;
          case "End":
            newSelection = addYears(copy, 1);
            break;
        }
        if (!newSelection) {
          if (_this.props.onInputError) {
            _this.props.onInputError({ code: 1, msg: INPUT_ERR_1 });
          }
          return; // Let the input component handle this keydown
        }
        event.preventDefault();
        _this.setState({ lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE });
        if (_this.props.adjustDateOnChange) {
          _this.setSelected(newSelection);
        }
        _this.setPreSelection(newSelection);
      }
    };

    _this.onClearClick = function (event) {
      if (event) {
        if (event.preventDefault) {
          event.preventDefault();
        }
      }
      _this.props.onChange(null, event);
      _this.setState({ inputValue: null });
    };

    _this.clear = function () {
      _this.onClearClick();
    };

    _this.renderCalendar = function () {
      if (!_this.props.inline && !_this.isCalendarOpen()) {
        return null;
      }
      return React__default.createElement(
        WrappedCalendar,
        {
          ref: function ref(elem) {
            _this.calendar = elem;
          },
          locale: _this.props.locale,
          adjustDateOnChange: _this.props.adjustDateOnChange,
          setOpen: _this.setOpen,
          shouldCloseOnSelect: _this.props.shouldCloseOnSelect,
          dateFormat: _this.props.dateFormatCalendar,
          useWeekdaysShort: _this.props.useWeekdaysShort,
          formatWeekDay: _this.props.formatWeekDay,
          dropdownMode: _this.props.dropdownMode,
          selected: _this.props.selected,
          preSelection: _this.state.preSelection,
          onSelect: _this.handleSelect,
          onWeekSelect: _this.props.onWeekSelect,
          openToDate: _this.props.openToDate,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          selectsStart: _this.props.selectsStart,
          selectsEnd: _this.props.selectsEnd,
          startDate: _this.props.startDate,
          endDate: _this.props.endDate,
          excludeDates: _this.props.excludeDates,
          filterDate: _this.props.filterDate,
          onClickOutside: _this.handleCalendarClickOutside,
          formatWeekNumber: _this.props.formatWeekNumber,
          highlightDates: _this.state.highlightDates,
          includeDates: _this.props.includeDates,
          includeTimes: _this.props.includeTimes,
          injectTimes: _this.props.injectTimes,
          inline: _this.props.inline,
          peekNextMonth: _this.props.peekNextMonth,
          showMonthDropdown: _this.props.showMonthDropdown,
          useShortMonthInDropdown: _this.props.useShortMonthInDropdown,
          showMonthYearDropdown: _this.props.showMonthYearDropdown,
          showWeekNumbers: _this.props.showWeekNumbers,
          showYearDropdown: _this.props.showYearDropdown,
          withPortal: _this.props.withPortal,
          forceShowMonthNavigation: _this.props.forceShowMonthNavigation,
          showDisabledMonthNavigation: _this.props.showDisabledMonthNavigation,
          scrollableYearDropdown: _this.props.scrollableYearDropdown,
          scrollableMonthYearDropdown: _this.props.scrollableMonthYearDropdown,
          todayButton: _this.props.todayButton,
          weekLabel: _this.props.weekLabel,
          outsideClickIgnoreClass: outsideClickIgnoreClass,
          fixedHeight: _this.props.fixedHeight,
          monthsShown: _this.props.monthsShown,
          monthSelectedIn: _this.state.monthSelectedIn,
          onDropdownFocus: _this.handleDropdownFocus,
          onMonthChange: _this.props.onMonthChange,
          onYearChange: _this.props.onYearChange,
          dayClassName: _this.props.dayClassName,
          showTimeSelect: _this.props.showTimeSelect,
          showTimeSelectOnly: _this.props.showTimeSelectOnly,
          onTimeChange: _this.handleTimeChange,
          timeFormat: _this.props.timeFormat,
          timeIntervals: _this.props.timeIntervals,
          minTime: _this.props.minTime,
          maxTime: _this.props.maxTime,
          excludeTimes: _this.props.excludeTimes,
          timeCaption: _this.props.timeCaption,
          className: _this.props.calendarClassName,
          container: _this.props.calendarContainer,
          yearDropdownItemNumber: _this.props.yearDropdownItemNumber,
          previousMonthButtonLabel: _this.props.previousMonthButtonLabel,
          nextMonthButtonLabel: _this.props.nextMonthButtonLabel,
          timeInputLabel: _this.props.timeInputLabel,
          disabledKeyboardNavigation: _this.props.disabledKeyboardNavigation,
          renderCustomHeader: _this.props.renderCustomHeader,
          popperProps: _this.props.popperProps,
          renderDayContents: _this.props.renderDayContents,
          onDayMouseEnter: _this.props.onDayMouseEnter,
          onMonthMouseLeave: _this.props.onMonthMouseLeave,
          showTimeInput: _this.props.showTimeInput
        },
        _this.props.children
      );
    };

    _this.renderDateInput = function () {
      var _classnames, _React$cloneElement;

      var className = classnames(_this.props.className, (_classnames = {}, _classnames[outsideClickIgnoreClass] = _this.state.open, _classnames));

      var customInput = _this.props.customInput || React__default.createElement("input", { type: "text" });
      var customInputRef = _this.props.customInputRef || "ref";
      var inputValue = typeof _this.props.value === "string" ? _this.props.value : typeof _this.state.inputValue === "string" ? _this.state.inputValue : safeDateFormat(_this.props.selected, _this.props);

      return React__default.cloneElement(customInput, (_React$cloneElement = {}, _React$cloneElement[customInputRef] = function (input) {
        _this.input = input;
      }, _React$cloneElement.value = inputValue, _React$cloneElement.onBlur = _this.handleBlur, _React$cloneElement.onChange = _this.handleChange, _React$cloneElement.onClick = _this.onInputClick, _React$cloneElement.onFocus = _this.handleFocus, _React$cloneElement.onKeyDown = _this.onInputKeyDown, _React$cloneElement.id = _this.props.id, _React$cloneElement.name = _this.props.name, _React$cloneElement.autoFocus = _this.props.autoFocus, _React$cloneElement.placeholder = _this.props.placeholderText, _React$cloneElement.disabled = _this.props.disabled, _React$cloneElement.autoComplete = _this.props.autoComplete, _React$cloneElement.className = className, _React$cloneElement.title = _this.props.title, _React$cloneElement.readOnly = _this.props.readOnly, _React$cloneElement.required = _this.props.required, _React$cloneElement.tabIndex = _this.props.tabIndex, _React$cloneElement));
    };

    _this.renderClearButton = function () {
      if (_this.props.isClearable && _this.props.selected != null) {
        return React__default.createElement("button", {
          type: "button",
          className: "react-datepicker__close-icon",
          onClick: _this.onClearClick,
          title: _this.props.clearButtonTitle,
          tabIndex: -1
        });
      } else {
        return null;
      }
    };

    _this.state = _this.calcInitialState();
    return _this;
  }

  DatePicker.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.inline && hasPreSelectionChanged(prevProps.selected, this.props.selected)) {
      this.setPreSelection(this.props.selected);
    }
    if (this.state.monthSelectedIn !== undefined && prevProps.monthsShown !== this.props.monthsShown) {
      this.setState({ monthSelectedIn: 0 });
    }
    if (prevProps.highlightDates !== this.props.highlightDates) {
      this.setState({
        highlightDates: getHightLightDaysMap(this.props.highlightDates)
      });
    }
    if (!prevState.focused && hasSelectionChanged(prevProps.selected, this.props.selected)) {
      this.setState({ inputValue: null });
    }
  };

  DatePicker.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearPreventFocusTimeout();
  };

  DatePicker.prototype.render = function render() {
    var calendar = this.renderCalendar();

    if (this.props.inline && !this.props.withPortal) {
      return calendar;
    }

    if (this.props.withPortal) {
      return React__default.createElement(
        "div",
        null,
        !this.props.inline ? React__default.createElement(
          "div",
          { className: "react-datepicker__input-container" },
          this.renderDateInput(),
          this.renderClearButton()
        ) : null,
        this.state.open || this.props.inline ? React__default.createElement(
          "div",
          { className: "react-datepicker__portal" },
          calendar
        ) : null
      );
    }

    return React__default.createElement(PopperComponent, {
      className: this.props.popperClassName,
      hidePopper: !this.isCalendarOpen(),
      popperModifiers: this.props.popperModifiers,
      targetComponent: React__default.createElement(
        "div",
        { className: "react-datepicker__input-container" },
        this.renderDateInput(),
        this.renderClearButton()
      ),
      popperContainer: this.props.popperContainer,
      popperComponent: calendar,
      popperPlacement: this.props.popperPlacement,
      popperProps: this.props.popperProps
    });
  };

  return DatePicker;
}(React__default.Component);

DatePicker.propTypes = {
  adjustDateOnChange: PropTypes.bool,
  allowSameDay: PropTypes.bool,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  calendarClassName: PropTypes.string,
  calendarContainer: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  customInput: PropTypes.element,
  customInputRef: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  dateFormatCalendar: PropTypes.string,
  dayClassName: PropTypes.func,
  disabled: PropTypes.bool,
  disabledKeyboardNavigation: PropTypes.bool,
  dropdownMode: PropTypes.oneOf(["scroll", "select"]).isRequired,
  endDate: PropTypes.instanceOf(Date),
  excludeDates: PropTypes.array,
  filterDate: PropTypes.func,
  fixedHeight: PropTypes.bool,
  formatWeekNumber: PropTypes.func,
  highlightDates: PropTypes.array,
  id: PropTypes.string,
  includeDates: PropTypes.array,
  includeTimes: PropTypes.array,
  injectTimes: PropTypes.array,
  inline: PropTypes.bool,
  isClearable: PropTypes.bool,
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ locale: PropTypes.object })]),
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  monthsShown: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func,
  onWeekSelect: PropTypes.func,
  onClickOutside: PropTypes.func,
  onChangeRaw: PropTypes.func,
  onFocus: PropTypes.func,
  onInputClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onMonthChange: PropTypes.func,
  onYearChange: PropTypes.func,
  onInputError: PropTypes.func,
  open: PropTypes.bool,
  openToDate: PropTypes.instanceOf(Date),
  peekNextMonth: PropTypes.bool,
  placeholderText: PropTypes.string,
  popperContainer: PropTypes.func,
  popperClassName: PropTypes.string, // <PopperComponent/> props
  popperModifiers: PropTypes.object, // <PopperComponent/> props
  popperPlacement: PropTypes.oneOf(popperPlacementPositions), // <PopperComponent/> props
  popperProps: PropTypes.object,
  preventOpenOnFocus: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  scrollableYearDropdown: PropTypes.bool,
  scrollableMonthYearDropdown: PropTypes.bool,
  selected: PropTypes.instanceOf(Date),
  selectsEnd: PropTypes.bool,
  selectsStart: PropTypes.bool,
  showMonthDropdown: PropTypes.bool,
  showMonthYearDropdown: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  strictParsing: PropTypes.bool,
  forceShowMonthNavigation: PropTypes.bool,
  showDisabledMonthNavigation: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  startOpen: PropTypes.bool,
  tabIndex: PropTypes.number,
  timeCaption: PropTypes.string,
  title: PropTypes.string,
  todayButton: PropTypes.node,
  useWeekdaysShort: PropTypes.bool,
  formatWeekDay: PropTypes.func,
  value: PropTypes.string,
  weekLabel: PropTypes.string,
  withPortal: PropTypes.bool,
  yearDropdownItemNumber: PropTypes.number,
  shouldCloseOnSelect: PropTypes.bool,
  showTimeInput: PropTypes.bool,
  showTimeSelect: PropTypes.bool,
  showTimeSelectOnly: PropTypes.bool,
  timeFormat: PropTypes.string,
  timeIntervals: PropTypes.number,
  minTime: PropTypes.instanceOf(Date),
  maxTime: PropTypes.instanceOf(Date),
  excludeTimes: PropTypes.array,
  useShortMonthInDropdown: PropTypes.bool,
  clearButtonTitle: PropTypes.string,
  previousMonthButtonLabel: PropTypes.string,
  nextMonthButtonLabel: PropTypes.string,
  timeInputLabel: PropTypes.string,
  renderCustomHeader: PropTypes.func,
  renderDayContents: PropTypes.func,
  inlineFocusSelectedMonth: PropTypes.bool,
  onDayMouseEnter: PropTypes.func,
  onMonthMouseLeave: PropTypes.func
};
var PRESELECT_CHANGE_VIA_INPUT = "input";
var PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";

//

var determineValue = function determineValue(value) {
    if (!value) {
        //Without this a value of '' was causing an error...
        return null;
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return new Date(value);
    }
    return value;
};
var TEDatetimeInput = function TEDatetimeInput(props) {
    var value = props.value,
        placeholder = props.placeholder,
        rest = objectWithoutProperties(props, ['value', 'placeholder']);

    return React__default.createElement(DatePicker, _extends({ selected: determineValue(value), placeholderText: placeholder }, rest));
};

TEDatetimeInput.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string
};

TEDatetimeInput.defaultProps = {
    autoComplete: 'off'
};

//

//import styles from './styles'

var TEDatetimeRow = function TEDatetimeRow(props) {
    var size = props.size,
        last = props.last,
        className = props.className,
        title = props.title,
        labelForKey = props.labelForKey,
        rest = objectWithoutProperties(props, ['size', 'last', 'className', 'title', 'labelForKey']);


    return React__default.createElement(
        TERow,
        { size: size, last: last, className: className },
        React__default.createElement(
            TELabel,
            { htmlFor: labelForKey, required: rest.required, disabled: rest.disabled },
            title
        ),
        React__default.createElement(TEDatetimeInput, _extends({ id: labelForKey }, rest))
    );
};

TEDatetimeRow.propTypes = {
    size: PropTypes.string,
    last: PropTypes.bool,
    labelForKey: PropTypes.string,
    onChange: PropTypes.func,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default.createContext && React__default.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React__default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React__default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        svgProps = __rest(props, ["attr"]);

    return React__default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), props.children);
  };

  return IconContext !== undefined ? React__default.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
var FaFileDownload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"}}]})(props);
};
FaFileDownload.displayName = "FaFileDownload";
var FaFileUpload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"}}]})(props);
};
FaFileUpload.displayName = "FaFileUpload";
var FaRedo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512.333 512"},"child":[{"tag":"path","attr":{"d":"M500.333 0h-47.411c-6.853 0-12.314 5.729-11.986 12.574l3.966 82.759C399.416 41.899 331.672 8 256.001 8 119.34 8 7.899 119.526 8 256.187 8.101 393.068 119.096 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-33.971-33.971c-4.466-4.466-11.64-4.717-16.38-.543C341.308 415.448 300.606 432 256 432c-97.267 0-176-78.716-176-176 0-97.267 78.716-176 176-176 60.892 0 114.506 30.858 146.099 77.8l-101.525-4.865c-6.845-.328-12.574 5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 12h200.333c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12z"}}]})(props);
};
FaRedo.displayName = "FaRedo";
var FaUndo = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"}}]})(props);
};
FaUndo.displayName = "FaUndo";
var FaUpload = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(props);
};
FaUpload.displayName = "FaUpload";
var FaRegWindowClose = function (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"}}]})(props);
};
FaRegWindowClose.displayName = "FaRegWindowClose";

var _templateObject$5 = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Wrapper = styled.div(_templateObject$5, function (props) {
    return '\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n        ';
});
var InputWrapper$1 = styled.div(_templateObject$5, function (props) {
    var theme = props.theme,
        disabled = props.disabled,
        active = props.active;

    var styles = '\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            width: 100%;\n            background-color: ' + theme.white + ';\n            border-radius: 5px;\n            padding-right: 5px;\n\n            transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n        ';

    if (disabled) {
        styles += '\n                border: 1px solid ' + theme.lighterGray + ';\n                box-shadow: none;\n            ';
    } else if (active) {
        styles += '\n                border: 1px solid ' + theme.primary + ';\n                box-shadow: 0 0 0 1px ' + theme.primary + ' inset;\n            ';
    } else {
        styles += '\n                border: 1px solid ' + theme.lightGray + ';\n                box-shadow: none;\n\n                :hover {\n                    border: 1px solid ' + theme.primary + ';\n                    box-shadow: 0 0 0 1px ' + theme.primary + ' inset;\n                }\n                :active {\n                    border: 1px solid ' + theme.primary + ';\n                    box-shadow: 0 0 0 1px ' + theme.primary + ' inset;\n                }\n            ';
    }

    return styles;
});
var Label$2 = styled.label(_templateObject$5, function (props) {
    var theme = props.theme,
        disabled = props.disabled,
        active = props.active;

    var cursor = 'pointer';
    if (disabled) {
        cursor = 'not-allowed';
    } else if (active) {
        cursor = 'copy';
    }

    return '\n            display: block;\n            width: 100%;\n            font-size: 14px;\n            color: ' + (disabled ? theme.gray : theme.darkGray) + ';\n            padding: 10px;\n            cursor: ' + cursor + ';\n        ';
});

var LabelCopy = styled.span(_templateObject$5, function (props) {
    return '\n\n        ';
});

var LabelIcon = styled(FaFileUpload)(_templateObject$5, function (props) {
    return '\n            margin-right: 10px;\n            vertical-align: middle;\n            font-size: 18px;\n        ';
});

var Input$1 = styled.input(_templateObject$5, function (props) {
    return '\n            display: none;\n        ';
});

var ClearButton = styled(TEButton)(_templateObject$5, function (props) {
    return '\n            width: auto;\n            padding: 5px 10px;\n            text-align: center;\n        ';
});

var ButtonIcon = styled(FaRegWindowClose)(_templateObject$5, function (props) {
    return '\n            color: inherit;\n            display: block;\n        ';
});

var ErrorMessage = styled.span(_templateObject$5, function (props) {
    var theme = props.theme;

    return '\n            display: block;\n            padding-top: 5px;\n            padding-bottom: 5px;\n            font-size: 14px;\n            color: ' + theme.errorRed + ';\n        ';
});

//

var TEFileInput = function TEFileInput(props) {
    var _useState = useState(false),
        _useState2 = slicedToArray(_useState, 2),
        active = _useState2[0],
        setActive = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = slicedToArray(_useState3, 2),
        fileArray = _useState4[0],
        setFileArray = _useState4[1];

    var _useState5 = useState({ error: false, message: '' }),
        _useState6 = slicedToArray(_useState5, 2),
        errorData = _useState6[0],
        setErrorData = _useState6[1];

    var _useState7 = useState(props.resetKey || 'inputKey'),
        _useState8 = slicedToArray(_useState7, 2),
        inputKey = _useState8[0],
        setInputKey = _useState8[1];

    var onFileChange = function onFileChange(e, droppedFiles) {
        var pattern = props.pattern,
            onChange = props.onChange;

        var files = e.target.files || droppedFiles;

        if (!files) {
            console.error('No file provided to input.');
            return;
        }

        //Validate Files
        if (pattern && pattern instanceof RegExp) {
            for (var i = 0; i < files.length; i++) {
                if (!files[i].type.match(pattern)) {
                    console.warn('One of the selected files is not of the correct type.');
                    setErrorData({
                        error: true,
                        message: 'One of the selected files is not of the correct type.'
                    });
                    return;
                }
            }
        }

        setFileArray(files);
        setErrorData({
            error: false,
            message: ''
        });
        onChange(files);

        // const readFile = (file) => {
        //     const { name } = file
        //     const reader = new FileReader()

        //     reader.onload = (e) => {
        //         const { fileArray } = this.state
        //         const updateFileArray = [...fileArray, { name, value: reader.result }]
        //         this.setState({
        //             fileArray: updateFileArray,
        //             error: false,
        //             errorMessage: '',
        //         })
        //         onChange(updateFileArray)
        //     }

        //     reader.readAsDataURL(file)
        // }

        // for (let i = 0; i < files.length; i++) {
        //     readFile(files[i])
        // }
    };
    var onDragEnter = function onDragEnter(e) {
        return setActive(true);
    };
    var onDragLeave = function onDragLeave(e) {
        return setActive(false);
    };
    var onDragOver = function onDragOver(e) {
        return e.preventDefault();
    };
    var onDrop = function onDrop(e) {
        e.preventDefault();
        setActive(false);
        onFileChange(e, e.dataTransfer.files);
    };
    var handleClearInput = function handleClearInput() {
        setInputKey(new Date().getTime()); //This will reset the input
        setFileArray([]);
        setErrorData({
            error: false,
            message: ''
        });
    };

    var disabled = props.disabled,
        className = props.className,
        _props$placeholder = props.placeholder,
        placeholder = _props$placeholder === undefined ? 'Choose a file...' : _props$placeholder,
        rest = objectWithoutProperties(props, ['disabled', 'className', 'placeholder']);


    var labelCopy = placeholder;
    if (fileArray && fileArray.length === 1) {
        labelCopy = fileArray[0].name;
    } else if (fileArray && fileArray.length > 1) {
        labelCopy = fileArray.length + ' files selected';
    }

    return React__default.createElement(
        Wrapper,
        { className: className },
        React__default.createElement(
            InputWrapper$1,
            {
                onDragEnter: onDragEnter,
                onDragLeave: onDragLeave,
                onDragOver: onDragOver,
                onDrop: onDrop,
                active: active,
                disabled: disabled
            },
            React__default.createElement(
                Label$2,
                { active: active, disabled: disabled },
                React__default.createElement(
                    LabelCopy,
                    null,
                    React__default.createElement(LabelIcon, null),
                    labelCopy
                ),
                React__default.createElement(Input$1, _extends({}, rest, {
                    disabled: disabled,
                    type: 'file',
                    key: inputKey,
                    onChange: onFileChange
                }))
            ),
            React__default.createElement(
                ClearButton,
                { onClick: handleClearInput, disabled: disabled },
                React__default.createElement(ButtonIcon, null)
            )
        ),
        errorData && errorData.error && React__default.createElement(
            ErrorMessage,
            null,
            errorData.message
        )
    );
};

TEFileInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    accept: PropTypes.string, //OS Hint of file type for dialog - NOT safety check of type
    // pattern: PropTypes.RegExp, //This is the actual strict catch. Regex // Don't know regex proptype
    disabled: PropTypes.bool
};

var _templateObject$6 = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var WrapperRow = styled(TERow)(_templateObject$6, function (props) {
	return '\n\t\t\tmax-width: 600px;\n\t\t';
});
var FileRowWrapper = styled.div(_templateObject$6, function (props) {
	return '\n\t\t';
});
var FileWrapper = styled.div(_templateObject$6, function (props) {
	var theme = props.theme;

	return '\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 5px;\n\t\t\tborder: 1px solid ' + theme.lightGray + ';\n\t\t\tbackgroundColor: ' + theme.white + ';\n\t\t';
});
var FileName = styled.span(_templateObject$6, function (props) {
	return '\n\t\t\tflex: 1;\n\t\t\tpadding-left: 5px;\n\t\t\tdisplay: block;\n\t\t';
});
var DownloadFileButton = styled.a(_templateObject$6, function (props) {
	var theme = props.theme;

	return '\n\t\t\twidth: auto;\n\t\t\tpadding: 5px 10px;\n\t\t\tcolor: ' + theme.darkGray + ';\n\t\t\tbackground-color: ' + theme.white + ';\n\t\t\tborder: 1px solid ' + theme.lightGray + ';\n\t\t\tborder-radius: 5px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\n\t\t\ttransition: color 0.2s ease-in 0s, background-color 0.2s ease-in 0s, border 0.2s ease-in 0s;\n\t\t\t:active {\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tborder: 1px solid ' + theme.primary + ';\n\t\t\t}\n\t\t\t:hover {\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tborder: 1px solid ' + theme.primary + ';\n\t\t\t}\n\t\t';
});
var DownloadImageButtonIcon = styled(FaFileDownload)(_templateObject$6, function (props) {
	return '\n\t\t\tcolor: inherit;\n\t\t\tdisplay: block;\n\t\t\tfont-size: 18px;\n\t\t';
});
var ClearFileButton = styled(TEButton)(_templateObject$6, function (props) {
	return '\n\t\t\twidth: auto;\n\t\t\tpadding: 5px 10px;\n\t\t\tmargin-left: 5,\n\t\t';
});
var ClearFileButtonIcon = styled(FaRegWindowClose)(_templateObject$6, function (props) {
	return '\n\t\t\tcolor: inherit;\n\t\t\tdisplay: block;\n\t\t\tfont-size: 18px;\n\t\t';
});
var Input$2 = styled(TEFileInput)(_templateObject$6, function (props) {
	return '\n\t\t\tmargin-top: 30px;\n\t\t';
});

//

var TEFileManagerRow = function TEFileManagerRow(props) {
    var _useState = useState('inputKey'),
        _useState2 = slicedToArray(_useState, 2),
        inputKey = _useState2[0],
        setInputKey = _useState2[1];

    var onFileChange = function onFileChange(fileList) {
        var onUpload = props.onUpload;

        onUpload(fileList).then(function () {
            setInputKey(new Date().getTime());
        }).catch(function (error) {
            console.log(error);
            setInputKey(new Date().getTime());
        });
    };

    var size = props.size,
        last = props.last,
        className = props.className,
        title = props.title,
        fileSrc = props.fileSrc,
        maxNumber = props.maxNumber,
        accept = props.accept,
        pattern = props.pattern,
        disabled = props.disabled,
        onRemove = props.onRemove,
        required = props.required,
        labelForKey = props.labelForKey;


    var fileSrcArray = [];
    if (fileSrc) {
        for (var uid in fileSrc) {
            fileSrcArray.push(_extends({}, fileSrc[uid], { uid: uid }));
        }
    }

    var labelText = title;
    if (maxNumber > 1 && fileSrcArray) {
        labelText = title + ' (' + fileSrcArray.length + '/' + maxNumber + ')';
    }

    return React__default.createElement(
        WrapperRow,
        { size: size, last: last, className: className },
        React__default.createElement(TELabel, {
            htmlFor: labelForKey,
            labelText: labelText,
            required: required,
            disabled: disabled
        }),
        React__default.createElement(
            FileRowWrapper,
            null,
            fileSrcArray && fileSrcArray.map(function (imgSrcData) {
                var src = imgSrcData.src,
                    uid = imgSrcData.uid,
                    filename = imgSrcData.filename,
                    fileEnding = imgSrcData.fileEnding,
                    path = imgSrcData.path;

                return React__default.createElement(
                    FileWrapper,
                    { key: uid },
                    React__default.createElement(
                        FileName,
                        null,
                        filename,
                        '.',
                        fileEnding
                    ),
                    React__default.createElement(
                        DownloadFileButton,
                        {
                            href: src,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            key: uid,
                            download: filename
                        },
                        React__default.createElement(DownloadImageButtonIcon, null)
                    ),
                    React__default.createElement(
                        ClearFileButton,
                        { onClick: function onClick() {
                                return onRemove({ uid: uid, path: path });
                            } },
                        React__default.createElement(ClearFileButtonIcon, null)
                    )
                );
            }),
            (maxNumber === 0 || !fileSrcArray || fileSrcArray && fileSrcArray.length < maxNumber) && React__default.createElement(Input$2, {
                key: inputKey //Used to reset the input
                , id: labelForKey,
                onChange: onFileChange,
                disabled: disabled,
                required: required
                // multiple={maxNumber === 0 || maxNumber > 1} //For simplicity making it a single file
                , accept: accept,
                pattern: pattern
            })
        )
    );
};

TEFileManagerRow.propTypes = {
    //Row
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    onUpload: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    accept: PropTypes.string,
    // accept: PropTypes.Regexp, //Don't know protype for regex
    maxNumber: PropTypes.number,
    onChangeKey: PropTypes.string,
    disabled: PropTypes.bool,

    //Both
    labelForKey: PropTypes.string
};

TEFileManagerRow.defaultProps = {
    accept: '.',
    pattern: /./,
    maxNumber: 0,
    multiple: false //Not implemented for multiple so defaulting for safety
};

//

//import {} from './styledComponents'

var TEFileRow = function TEFileRow(props) {
    var size = props.size,
        last = props.last,
        className = props.className,
        title = props.title,
        labelForKey = props.labelForKey,
        rest = objectWithoutProperties(props, ['size', 'last', 'className', 'title', 'labelForKey']);


    return React__default.createElement(
        TERow,
        { size: size, last: last, className: className },
        React__default.createElement(
            TELabel,
            { htmlFor: labelForKey, required: rest.required, disabled: rest.disabled },
            title
        ),
        React__default.createElement(TEFileInput, _extends({ id: labelForKey }, rest))
    );
};

TEFileRow.propTypes = {
    //Row
    size: PropTypes.string,
    last: PropTypes.bool,
    title: PropTypes.string,

    //Both
    labelForKey: PropTypes.string
};

TEFileRow.defaultProps = {};

var _templateObject$7 = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Form = styled.form(_templateObject$7, function (props) {
	return '\n\t        position: relative;\n\t        width: 100%;\n\t        margin: 0px auto;\n            box-sizing: border-box;\n\t    ';
});

//

var TEForm = function TEForm(props) {
  return React__default.createElement(Form, props);
};

var dist = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t(PropTypes,React__default,reactDom);}(commonjsGlobal,function(e,t,o){function a(e,t){return new Promise(function(o,a){var i,n=new Image;n.onload=function(){return o(n)},n.onerror=a,!1==(null!==(i=e)&&!!i.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&t&&(n.crossOrigin=t),n.src=e;})}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,o=o&&o.hasOwnProperty("default")?o.default:o;var i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a);}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);}return e},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],a=!0,i=!1,n=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,n=e;}finally{try{!a&&s.return&&s.return();}finally{if(i)throw n}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),c="undefined"!=typeof File,d={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},l=u?d.touch:d.desktop,p="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,g={x:.5,y:.5},m=function(e){function d(){var e,t,o;i(this,d);for(var a=arguments.length,n=Array(a),h=0;h<a;h++)n[h]=arguments[h];return t=o=s(this,(e=d.__proto__||Object.getPrototypeOf(d)).call.apply(e,[this].concat(n))),o.state={drag:!1,my:null,mx:null,image:g},o.handleImageReady=function(e){var t=o.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,o.setState({drag:!1,image:t},o.props.onImageReady),o.props.onLoadSuccess(t);},o.clearImage=function(){var e=o.canvas;e.getContext("2d").clearRect(0,0,e.width,e.height),o.setState({image:g});},o.handleMouseDown=function(e){(e=e||window.event).preventDefault(),o.setState({drag:!0,mx:null,my:null});},o.handleMouseUp=function(){o.state.drag&&(o.setState({drag:!1}),o.props.onMouseUp());},o.handleMouseMove=function(e){if(e=e||window.event,!1!==o.state.drag){e.preventDefault();var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,a=e.targetTouches?e.targetTouches[0].pageY:e.clientY,i={mx:t,my:a},n=o.props.rotate;if(n=(n%=360)<0?n+360:n,o.state.mx&&o.state.my){var s=o.state.mx-t,h=o.state.my-a,u=o.state.image.width*o.props.scale,c=o.state.image.height*o.props.scale,d=o.getCroppingRect(),l=d.x,p=d.y;l*=u,p*=c;var g=function(e){return e*(Math.PI/180)},m=Math.cos(g(n)),v=Math.sin(g(n)),f=p+-s*v+h*m,y={x:(l+s*m+h*v)/u+1/o.props.scale*o.getXScale()/2,y:f/c+1/o.props.scale*o.getYScale()/2};o.props.onPositionChange(y),i.image=r({},o.state.image,y);}o.setState(i),o.props.onMouseMove(e);}},o.setCanvas=function(e){o.canvas=e;},s(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(d,t.Component),n(d,[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(p=1);var e=o.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0;}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t);}catch(t){e=!1;}return e}()&&{passive:!1},a=l.native;document.addEventListener(a.move,this.handleMouseMove,t),document.addEventListener(a.up,this.handleMouseUp,t),u&&(document.addEventListener(a.mouseMove,this.handleMouseMove,t),document.addEventListener(a.mouseUp,this.handleMouseUp,t));}}},{key:"componentWillReceiveProps",value:function(e){e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height?this.loadImage(e.image):e.image||this.clearImage();}},{key:"componentDidUpdate",value:function(e,t){var a=o.findDOMNode(this.canvas),i=a.getContext("2d");i.clearRect(0,0,a.width,a.height),this.paint(i),this.paintImage(i,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange();}},{key:"componentWillUnmount",value:function(){if(document){var e=l.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),u&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1));}}},{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,a=e.rotate,i=e.border,n={},r=this.getBorders(i),s=h(r,2),u=s[0],c=s[1],d=t,l=o;return this.isVertical()?(n.width=l,n.height=d):(n.width=d,n.height=l),n.width+=2*u,n.height+=2*c,{canvas:n,rotate:a,width:t,height:o,border:i}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var a=o.getContext("2d");return a.translate(o.width/2,o.height/2),a.rotate(this.props.rotate*Math.PI/180),a.translate(-o.width/2,-o.height/2),this.isVertical()&&a.translate((o.width-o.height)/2,(o.height-o.width)/2),a.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,a=document.createElement("canvas");return this.isVertical()?(a.width=o,a.height=t):(a.width=t,a.height=o),this.paintImage(a.getContext("2d"),this.state.image,0,1),a}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),a={x:e.x-t/2,y:e.y-o/2,width:t,height:o},i=0,n=1-a.width,s=0,h=1-a.height;return (this.props.disableBoundaryChecks||t>1||o>1)&&(i=-a.width,n=1,s=-a.height,h=1),r({},a,{x:Math.max(i,Math.min(a.x,n)),y:Math.max(s,Math.min(a.y,h))})}},{key:"loadImage",value:function(e){var t;c&&e instanceof File?(t=e,new Promise(function(e,o){var i=new FileReader;i.onload=function(t){try{var i=a(t.target.result);e(i);}catch(t){o(t);}},i.readAsDataURL(t);})).then(this.handleImageReady).catch(this.props.onLoadFailure):"string"==typeof e&&a(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure);}},{key:"getInitialSize",value:function(e,t){var o=void 0,a=void 0,i=this.getDimensions();return i.height/i.width>t/e?a=e*((o=this.getDimensions().height)/t):o=t*((a=this.getDimensions().width)/e),{height:o,width:a}}},{key:"paintImage",value:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if(t.resource){var i=this.calculatePosition(t,o);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(a,a),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,i.x,i.y,i.width,i.height),e.restore();}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=this.getBorders(t),a=h(o,2),i=a[0],n=a[1],r=this.getCroppingRect(),s=e.width*this.props.scale,u=e.height*this.props.scale,c=-r.x*s,d=-r.y*u;return this.isVertical()?(c+=n,d+=i):(c+=i,d+=n),{x:c,y:d,height:u,width:s}}},{key:"paint",value:function(e){e.save(),e.scale(p,p),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,o=this.getDimensions(),a=this.getBorders(o.border),i=h(a,2),n=i[0],r=i[1],s=o.canvas.height,u=o.canvas.width;t=Math.max(t,0),t=Math.min(t,u/2-n,s/2-r),e.beginPath(),function(e,t,o,a,i,n){if(0===n)e.rect(t,o,a,i);else{var r=a-n,s=i-n;e.translate(t,o),e.arc(n,n,n,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,n,n,1.5*Math.PI,2*Math.PI),e.lineTo(a,s),e.arc(r,s,n,2*Math.PI,.5*Math.PI),e.lineTo(n,i),e.arc(n,s,n,.5*Math.PI,Math.PI),e.translate(-t,-o);}}(e,n,r,u-2*n,s-2*r,t),e.rect(u,0,-u,s),e.fill("evenodd"),e.restore();}},{key:"render",value:function(){var e=this.props,o=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.style),a=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,function(e,t){var o={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a]);return o}(e,["scale","rotate","image","border","borderRadius","width","height","position","color","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling"])),i=this.getDimensions(),n={width:i.canvas.width,height:i.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},s={width:i.canvas.width*p,height:i.canvas.height*p,style:r({},n,o)};return s[l.react.down]=this.handleMouseDown,u&&(s[l.react.mouseDown]=this.handleMouseDown),t.createElement("canvas",r({ref:this.setCanvas},s,a))}}]),d}();return m.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(c?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),style:e.object,crossOrigin:e.oneOf(["","anonymous","use-credentials"]),className:e.string,onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableBoundaryChecks:e.bool,disableHiDPIScaling:e.bool},m.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],style:{},className:"",onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1},m});
});

var _templateObject$8 = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Background = styled.div(_templateObject$8, function (props) {
	var visible = props.visible;

	return '\n\t\t\tposition: fixed;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tleft: 0;\n\t\t\tright: 0;\n\t\t\ttop: 0;\n\t\t\tbottom: 0;\n\t\t\tbackground-color: rgba(0,0,0,0.5);\n\t\t\tz-index: 1000;\n\t\t\toverflow-y: auto;\n\t\t\ttransition: visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;\n\t\t\topacity: ' + (visible ? 1 : 0) + ';\n\t\t\tvisibility: ' + (visible ? 'visible' : 'hidden') + ';\n\t\t';
});
var Content = styled.div(_templateObject$8, function (props) {
	var theme = props.theme;

	return '\n\t\t\tposition: relative;\n\t\t\tbackground-color: ' + theme.white + ';\n\t\t\tborder-radius: 20px;\n\t\t\tmargin: 50px auto;\n\t\t\tmax-width: 650px;\t\t';
});

//

var TEPopup = function TEPopup(props) {
	var visible = props.visible,
	    className = props.className,
	    children = props.children;


	return React__default.createElement(
		Background,
		{ className: className, visible: visible },
		React__default.createElement(
			Content,
			null,
			children
		)
	);
};

TEPopup.propTypes = {
	visible: PropTypes.bool.isRequired
};

TEPopup.defaultProps = {
	visible: false
};

var _templateObject$9 = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Popup = styled(TEPopup)(_templateObject$9, function (props) {
	return '\n\t\t\t& > div{\n\t\t\t\twidth: 90%;\n\t\t\t\tmax-width: 650px;\n\t\t\t\tmargin: 100px auto;\n\t\t\t}\n\t\t';
});
var FormContent = styled.div(_templateObject$9, function (props) {
	return '\n\t\t\tpadding: 30px;\n\t\t';
});
var ButtonContainer = styled.div(_templateObject$9, function (props) {
	return '\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t';
});
var LeftButton = styled(TEButton)(_templateObject$9, function (props) {
	var theme = props.theme;

	return '\n\t\t\tborder-top: 1px solid ' + theme.primary + ';\n\t\t\tborder-right: 1px solid ' + theme.primary + ';\n\t\t\tborder-bottom: none;\n\t\t\tborder-left: none;\n\t\t\tborder-top-left-radius: 0px;\n\t\t\tborder-top-right-radius: 0px;\n\t\t\tborder-bottom-left-radius: 20px;\n\t\t\tborder-bottom-right-radius: 0px;\n\t\t\tpadding-top: 15px;\n\t\t\tpadding-bottom: 15px;\n\t\t\tfont-size: 18px;\n\n\t\t\t:active {\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tborder-top: 1px solid ' + theme.primary + ';\n\t\t\t\tborder-right: 1px solid ' + theme.primary + ';\n\t\t\t\tborder-bottom: none;\n\t\t\t\tborder-left: none;\n\t\t\t}\n\t\t\t:hover {\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tborder-top: 1px solid ' + theme.primary + ';\n\t\t\t\tborder-right: 1px solid ' + theme.primary + ';\n\t\t\t\tborder-bottom: none;\n\t\t\t\tborder-left: none;\n\t\t\t}\n\t\t';
});
var RightButton = styled(TEButton)(_templateObject$9, function (props) {
	var theme = props.theme;

	return '\n\t\t\tborder-top: 1px solid ' + theme.primary + ';\n\t\t\tborder-right: none;\n\t\t\tborder-bottom: none;\n\t\t\tborder-left: 1px solid ' + theme.primary + ';\n\t\t\tborder-top-left-radius: 0px;\n\t\t\tborder-top-right-radius: 0px;\n\t\t\tborder-bottom-left-radius: 0px;\n\t\t\tborder-bottom-right-radius: 20px;\n\t\t\tpadding-top: 15px;\n\t\t\tpadding-bottom: 15px;\n\t\t\tfont-size: 18px;\n\n\t\t\t:active {\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tborder-top: 1px solid ' + theme.primary + ';\n\t\t\t\tborder-right: none;\n\t\t\t\tborder-bottom: none;\n\t\t\t\tborder-left: 1px solid ' + theme.primary + ';\n\t\t\t}\n\t\t\t:hover {\n\t\t\t\tcolor: ' + theme.white + ';\n\t\t\t\tbackground-color: ' + theme.primary + ';\n\t\t\t\tborder-top: 1px solid ' + theme.primary + ';\n\t\t\t\tborder-right: none;\n\t\t\t\tborder-bottom: none;\n\t\t\t\tborder-left: 1px solid ' + theme.primary + ';\n\t\t\t}\n\t\t';
});

//

var TEPopupForm = function TEPopupForm(props) {
	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		var onSubmit = props.onSubmit;

		onSubmit();
	};

	var visible = props.visible,
	    onClose = props.onClose,
	    onCancelTitle = props.onCancelTitle,
	    onSubmitTitle = props.onSubmitTitle,
	    className = props.className,
	    children = props.children;


	return React__default.createElement(
		Popup,
		{ visible: visible, className: className },
		React__default.createElement(
			TEForm,
			{ onSubmit: handleSubmit },
			React__default.createElement(
				FormContent,
				null,
				children
			),
			React__default.createElement(
				ButtonContainer,
				null,
				React__default.createElement(
					LeftButton,
					{ onClick: onClose },
					onCancelTitle
				),
				React__default.createElement(
					RightButton,
					{ type: 'submit' },
					onSubmitTitle
				)
			)
		)
	);
};

TEPopupForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

TEPopupForm.defaultProps = {
	visible: false,
	onCancelTitle: 'Cancel',
	onSubmitTitle: 'Submit'
};

var _templateObject$a = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Container$1 = styled.div(_templateObject$a, function (props) {
	return '\n\t\t\tpadding-left: 30px;\n\t\t\tpadding-right: 30px;\n\t\t\tpadding-bottom: 15px;\n\t\t';
});
var Row$1 = styled(TERow)(_templateObject$a, function (props) {
	return '\n\t\t\ttext-align: center;\n\t\t';
});
var RotateButtonWrapper = styled.div(_templateObject$a, function (props) {
	return '\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t';
});
var RotateButton = styled(TEButton)(_templateObject$a, function (props) {
	return '\n\t\t\twidth: auto;\n\t\t\tmargin-left: 10px;\n\t\t\tmargin-right: 10px;\n\t\t';
});
var UndoRotationIcon = styled(FaUndo)(_templateObject$a, function (props) {
	return '\n\t\t\tdisplay: block;\n\t\t';
});
var RedoRotationIcon = styled(FaRedo)(_templateObject$a, function (props) {
	return '\n\t\t\tdisplay: block;\n\t\t';
});

//

var TEImageUpload = function TEImageUpload(props) {
	var _useState = useState(1.1),
	    _useState2 = slicedToArray(_useState, 2),
	    editorScale = _useState2[0],
	    setEditorScale = _useState2[1];

	var _useState3 = useState(0),
	    _useState4 = slicedToArray(_useState3, 2),
	    rotation = _useState4[0],
	    setRotation = _useState4[1];

	var editor = useRef(null);

	var visible = props.visible,
	    file = props.file,
	    onCancel = props.onCancel,
	    _onSubmit = props.onSubmit,
	    onSubmitTitle = props.onSubmitTitle;


	return React__default.createElement(
		TEPopupForm,
		{
			visible: visible,
			onSubmit: function onSubmit() {
				return _onSubmit(editor.current);
			},
			onClose: onCancel,
			onCancelTitle: 'Cancel',
			onSubmitTitle: onSubmitTitle
		},
		React__default.createElement(
			Container$1,
			null,
			React__default.createElement(
				Row$1,
				null,
				React__default.createElement(dist, {
					ref: editor,
					image: file,
					width: 300,
					height: 300,
					border: 20
					// borderRadius={editorRadius}
					, color: [255, 255, 255, 0.6] // RGBA
					, scale: editorScale,
					rotate: rotation
				})
			),
			React__default.createElement(
				Row$1,
				null,
				React__default.createElement(
					TELabel,
					{ htmlFor: 'scale' },
					'Zoom'
				),
				React__default.createElement('input', {
					name: 'scale',
					id: 'scale',
					type: 'range',
					onChange: function onChange(e) {
						return setEditorScale(Number(e.target.value));
					},
					min: '0.5',
					max: '2.5',
					step: '0.01',
					value: editorScale
				})
			),
			React__default.createElement(
				Row$1,
				null,
				React__default.createElement(
					TELabel,
					null,
					'Rotate'
				),
				React__default.createElement(
					RotateButtonWrapper,
					null,
					React__default.createElement(
						RotateButton,
						{ onClick: function onClick() {
								return setRotation(rotation + 90);
							} },
						React__default.createElement(UndoRotationIcon, null)
					),
					React__default.createElement(
						RotateButton,
						{ onClick: function onClick() {
								return setRotation(rotation - 90);
							} },
						React__default.createElement(RedoRotationIcon, null)
					)
				)
			)
		)
	);
};

TEImageUpload.propTypes = {};

TEImageUpload.defaultProps = {
	onSubmitTitle: 'Submit'
};

var _templateObject$b = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var ImageRowWrapper = styled.div(_templateObject$b, function (props) {
	return '\n\t\t\toverflow-x: auto;\n\t\t\twidth: 100%;\n\t\t\tpadding: 5px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t';
});
var ImageWrapper = styled.div(_templateObject$b, function (props) {
	var theme = props.theme;

	return '\n\t\t\tposition: relative;\n\t\t\twidth: 150px;\n\t\t\theight: 150px;\n\t\t\tmargin-left: 0px;\n\t\t\tmargin-right: 15px;\n\t\t\tborder: 1px solid ' + theme.lightGray + ';\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tborder-radius: 5px;\n\t\t\tflex-shrink: 0;\n\t\t';
});
var Image$1 = styled.img(_templateObject$b, function (props) {
	return '\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\tobject-fit: contain;\n\t\t\tborder-radius: 5px;\n\t\t';
});
var ClearImageButton = styled(TEButton)(_templateObject$b, function (props) {
	return '\n\t\t\tposition: absolute;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\ttop: 3px;\n\t\t\tright: 3px;\n\t\t\twidth: auto;\n\t\t\tpadding: 5px;\n\t\t\ttext-align: center;\n\t\t';
});
var ClearImageButtonIcon = styled(FaRegWindowClose)(_templateObject$b, function (props) {
	return '\n\t\t\tcolor: inherit;\n\t\t\tdisplay: block;\n\t\t\tfont-size: 14px;\n\t\t';
});
var Label$3 = styled.label(_templateObject$b, function (props) {
	var theme = props.theme,
	    disabled = props.disabled;

	return '\n\t\t\tposition: relative;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 150px;\n\t\t\theight: 150px;\n\t\t\tflex-shrink: 0;\n\t\t\tpadding: 30px;\n\t\t\tmargin-left: 0px;\n\t\t\tmargin-right: 15px;\n\t\t\tbackground-color: ' + theme.white + ';\n\t\t\tcursour: pointer;\n\t\t\tborder: 1px solid ' + (disabled ? theme.lighterGray : theme.lightGray) + ';\n\t\t\tbox-shadow: none;\n\t\t\tborder-radius: 5px;\n\t\t\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\n\t\t\t:hover {\n\t\t\t\tborder: 1px solid ' + (disabled ? theme.lighterGray : theme.primary) + ';\n\t\t\t\tboxShadow: ' + (disabled ? 'none' : '0 0 0 1px ' + theme.primary + ' inset;') + '\n\t\t\t}\n\t\t\t:active {\n\t\t\t\tborder: 1px solid ' + (disabled ? theme.lighterGray : theme.primary) + ';\n\t\t\t\tboxShadow: ' + (disabled ? 'none' : '0 0 0 1px ' + theme.primary + ' inset;') + '\n\t\t\t}\n\t\t';
});
var UploadIcon = styled(FaUpload)(_templateObject$b, function (props) {
	var theme = props.theme;

	return '\n\t\t\tfont-size: 60px;\n\t\t\tcolor: ' + theme.lightGray + ';\n\t\t';
});
var Input$3 = styled.input(_templateObject$b, function (props) {
	return '\n\t\t\tdisplay: none;\n\t\t';
});
var ErrorMessage$1 = styled.span(_templateObject$b, function (props) {
	var theme = props.theme;

	return '\n\t\t\tdisplay: block;\n\t\t\tpadding-top: 5px;\n\t\t\tpadding-bottom: 5px;\n\t\t\tfont-size: 14px;\n\t\t\tcolor: ' + theme.errorRed + ';\n\t\t';
});

//

var TEImageRow = function TEImageRow(props) {
    var _useState = useState(false),
        _useState2 = slicedToArray(_useState, 2),
        editorVisible = _useState2[0],
        setEditorVisible = _useState2[1];

    var _useState3 = useState(undefined),
        _useState4 = slicedToArray(_useState3, 2),
        file = _useState4[0],
        setFile = _useState4[1];

    var _useState5 = useState({ error: false, message: '' }),
        _useState6 = slicedToArray(_useState5, 2),
        errorData = _useState6[0],
        setErrorData = _useState6[1];

    var _useState7 = useState(props.resetKey || 'inputKey'),
        _useState8 = slicedToArray(_useState7, 2),
        inputKey = _useState8[0],
        setInputKey = _useState8[1];

    var handleClearImage = function handleClearImage(data) {
        props.onRemove(data);
    };
    var handleCancelEditor = function handleCancelEditor() {
        setErrorData({ error: false, message: '' });
        setFile(undefined);
        setInputKey(new Date().getTime());
    };
    var handleEditorSubmit = function handleEditorSubmit(editor) {
        //TODO: Test if loading this from above will cause errors
        // const { file } = this.state
        var onUpload = props.onUpload;


        var data = { file: file, editor: editor };
        onUpload(data).then(function () {
            setEditorVisible(false);
            setErrorData({ error: false, message: '' });
            setFile(undefined);
            setInputKey(new Date().getTime());
        }).catch(function (error) {
            console.log(error);
            setEditorVisible(false);
            setErrorData({ error: false, message: '' });
            setFile(undefined);
            setInputKey(new Date().getTime());
        });
    };

    var onFileChange = function onFileChange(e) {
        var pattern = props.pattern;
        var files = e.target.files;


        if (!files) {
            console.error('No file provided to input.');
            return;
        }

        var file = files[0];

        //Validate Files
        if (pattern && pattern instanceof RegExp) {
            if (!file.type.match(pattern)) {
                console.warn('The selected file is not an image.');
                setErrorData({ error: true, message: 'The selected file is not an image.' });
                setInputKey(new Date().getTime());
                return;
            }
        }

        setErrorData({ error: false, message: '' });
        setFile(file);
        setEditorVisible(true);
    };

    var className = props.className,
        size = props.size,
        last = props.last,
        title = props.title,
        imgSrc = props.imgSrc,
        maxNumber = props.maxNumber,
        accept = props.accept,
        disabled = props.disabled,
        required = props.required,
        labelForKey = props.labelForKey;


    var imgSrcArray = [];
    if (imgSrc) {
        for (var uid in imgSrc) {
            imgSrcArray.push(_extends({}, imgSrc[uid], { uid: uid }));
        }
    }

    var labelText = title;
    if (maxNumber > 1 && imgSrcArray) {
        labelText = title + ' (' + imgSrcArray.length + '/' + maxNumber + ')';
    }

    return React__default.createElement(
        TERow,
        { size: size, last: last, className: className },
        React__default.createElement(
            TELabel,
            { htmlFor: labelForKey, required: required, disabled: disabled },
            labelText
        ),
        React__default.createElement(
            ImageRowWrapper,
            null,
            imgSrcArray && imgSrcArray.map(function (imgSrcData) {
                var src = imgSrcData.src,
                    uid = imgSrcData.uid,
                    path = imgSrcData.path;

                return React__default.createElement(
                    ImageWrapper,
                    { key: uid },
                    React__default.createElement(
                        'a',
                        { href: src, target: '_blank', rel: 'noopener noreferrer' },
                        React__default.createElement(Image$1, { src: src, alt: uid })
                    ),
                    React__default.createElement(
                        ClearImageButton,
                        { onClick: function onClick() {
                                return handleClearImage({ uid: uid, path: path });
                            } },
                        React__default.createElement(ClearImageButtonIcon, null)
                    )
                );
            }),
            (maxNumber === 0 || !imgSrcArray || imgSrcArray && imgSrcArray.length < maxNumber) && !disabled && React__default.createElement(
                Label$3,
                { disabled: disabled },
                React__default.createElement(
                    'div',
                    null,
                    React__default.createElement(UploadIcon, null)
                ),
                React__default.createElement(Input$3, {
                    key: inputKey //Used to reset input
                    , type: 'file',
                    accept: accept,
                    onChange: onFileChange
                })
            )
        ),
        errorData && errorData.error && React__default.createElement(
            ErrorMessage$1,
            null,
            errorData.message
        ),
        React__default.createElement(TEImageUpload, {
            visible: editorVisible,
            file: file,
            onCancel: handleCancelEditor,
            onSubmit: handleEditorSubmit
        })
    );
};

TEImageRow.propTypes = {
    //Row
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    onUpload: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    accept: PropTypes.string,
    // accept: PropTypes.Regexp, //Don't know protype for regex
    maxNumber: PropTypes.number,
    onChangeKey: PropTypes.string,
    disabled: PropTypes.bool,

    //Both
    labelForKey: PropTypes.string
};

TEImageRow.defaultProps = {
    accept: 'image/*',
    pattern: /image-*/,
    maxNumber: 0
};

var _templateObject$c = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Input$4 = styled.input(_templateObject$c, function (props) {
    var disabled = props.disabled,
        theme = props.theme;


    return '\n            position: relative;\n            display: block;\n            width: 100%;\n            font-size: 14px;\n            padding: 10px;\n            box-sizing: border-box;\n            cursor: ' + (disabled ? 'not-allowed' : 'text') + ';\n            border-radius: 5px;\n            background-color: ' + theme.white + ';\n            color: ' + (disabled ? theme.gray : theme.darkerGray) + ';\n\n            border: 1px solid ' + (disabled ? theme.lighterGray : theme.lightGray) + ';\n            transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n            :hover {\n                border: 1px solid ' + theme.primary + ';\n                box-shadow: 0 0 0 1px ' + theme.primary + ' inset;\n            }\n            :active {\n                border: 1px solid ' + theme.primary + ';\n                box-shadow: 0 0 0 1px ' + theme.primary + ' inset;\n            }\n        ';
});

//

var TEInput = function TEInput(props) {
    return React__default.createElement(Input$4, props);
};

TEInput.propTypes = {
    style: PropTypes.object,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

TEInput.defaultProps = {
    type: 'text',
    disabled: false
};

var _templateObject$d = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Textarea = styled.textarea(_templateObject$d, function (props) {
    var disabled = props.disabled,
        theme = props.theme;


    return '\n            position: relative;\n            display: block;\n            width: 100%;\n            font-size: 14px;\n            box-sizing: border-box;\n            padding: 10px;\n            background-color: ' + theme.white + ';\n            min-height: 140px;\n            border-radius: 5px;\n            line-height: 1.5;\n            cursor: ' + (disabled ? 'not-allowed' : 'text') + ';\n\n            color: ' + (disabled ? theme.gray : theme.darkerGray) + ';\n            border: 1px solid ' + (disabled ? theme.lighterGray : theme.lightGray) + ';\n\n            transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n            :hover {\n                border: 1px solid ' + (disabled ? theme.lighterGray : theme.primary) + ';\n                box-shadow: 0 0 0 1px ' + (disabled ? theme.lighterGray : theme.primary) + ' inset;\n           }\n            :active {\n                border: 1px solid ' + (disabled ? theme.lighterGray : theme.primary) + ';\n                box-shadow: 0 0 0 1px ' + (disabled ? theme.lighterGray : theme.primary) + ' inset;\n            }\n        ';
});

//

var TETextarea = function TETextarea(props) {
    return React__default.createElement(Textarea, props);
};

TETextarea.propTypes = {
    style: PropTypes.object,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

TETextarea.defaultProps = {
    type: 'text',
    disabled: false
};

//

var TEInputRow = function TEInputRow(props) {
    var size = props.size,
        last = props.last,
        title = props.title,
        type = props.type,
        onChange = props.onChange,
        disabled = props.disabled,
        value = props.value,
        required = props.required,
        labelForKey = props.labelForKey,
        rest = objectWithoutProperties(props, ['size', 'last', 'title', 'type', 'onChange', 'disabled', 'value', 'required', 'labelForKey']);


    return React__default.createElement(
        TERow,
        { size: size, last: last },
        React__default.createElement(
            TELabel,
            { htmlFor: labelForKey, required: required, disabled: disabled },
            title
        ),
        type !== 'textarea' ? React__default.createElement(TEInput, _extends({
            type: type,
            value: value,
            onChange: onChange,
            id: labelForKey,
            disabled: disabled
        }, rest)) : React__default.createElement(TETextarea, _extends({
            value: value,
            onChange: onChange,
            id: labelForKey,
            disabled: disabled
        }, rest))
    );
};

TEInputRow.propTypes = {
    //Row
    rowStyles: PropTypes.object,
    size: PropTypes.string,
    last: PropTypes.bool,

    //Input
    inputStyles: PropTypes.object,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onChangeKey: PropTypes.string,
    disabled: PropTypes.bool,

    //Both
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelForKey: PropTypes.string
};

var _templateObject$e = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Container$2 = styled.div(_templateObject$e, function (props) {
    return '\n        ';
});
var StepContainer = styled.div(_templateObject$e, function (props) {
    return '\n            width: 100%;\n            display: flex;\n            position: relative;\n            margin-bottom: 30px;\n\n            @media (max-width: 500px) {\n                margin-bottom: 15;\n            }\n        ';
});
var StepBar = styled.div(_templateObject$e, function (props) {
    var stepCount = props.stepCount,
        theme = props.theme;

    return '\n            position: absolute;\n            top: 14px;\n            background-color: ' + theme.primary + ';\n            height: 2px;\n            width: ' + (100 - 100 / stepCount) + '%;\n            left: ' + 100 / stepCount / 2 + '%;\n        ';
});
var StepWrapper = styled.div(_templateObject$e, function (props) {
    var stepCount = props.stepCount;

    return '\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            width: ' + 100 / stepCount + '%\n        ';
});
var StepNumber = styled.div(_templateObject$e, function (props) {
    var active = props.active,
        theme = props.theme;

    return '\n            text-align: center;\n            width: 30px;\n            height: 30px;\n            margin-bottom: 10px;\n            line-height: 30px;\n            border: 1px solid ' + theme.primary + ';\n            z-index: 1;\n            background-color: ' + (active ? theme.primary : theme.white) + ';\n            color: ' + (active ? theme.white : theme.primary) + ';\n            transition: color 0.2s ease-in, background-color 0.2s ease-in;\n        ';
});
var StepTitle = styled.span(_templateObject$e, function (props) {
    return '\n            text-align: center;\n            font-size: 18px;\n            display: block;\n\n            @media (max-width: 500px) {\n                font-size: 16px;\n            }\n            @media (max-width: 350px) {\n                font-size: 14px;\n            }\n        ';
});

var Form$1 = styled(TEForm)(_templateObject$e, function (props) {
    return '\n            margin-bottom: 30px;\n        ';
});
var ButtonContainer$1 = styled.div(_templateObject$e, function (props) {
    return '\n            display: flex;\n        ';
});

//TODO: Return to this and figure out way to handle popups and panel use cases without being weird to use in general
var StepButton = styled(TEButton)(_templateObject$e, function (props) {
    // const { position, rounded, singleButton, theme } = props
    // let styles = `
    //     padding: 10px 20px;
    //     color: ${theme.primary};
    //     background-color: ${theme.white};
    //     border-top: 1px solid ${theme.primary};
    //     border-bottom: none;
    //     transition: border 0.2s ease-in, color 0.2s ease-in, background-color 0.2s ease-in;
    // `

    // switch (position) {
    //     case 'left':
    //         styles += `
    //                 border-left: none;
    //                 border-right: 1px solid ${theme.primary};

    //                 border-bottom-left-radius: ${rounded ? '5px' : '0px'};
    //                 border-top-right-radius: 0px;
    //                 border-top-left-radius: 0px;
    //                 border-bottom-right-radius: 0px;

    //                 :hover {
    //                     color: ${theme.white};
    //                     background-color: ${theme.primary};
    //                     border-top: 1px solid ${theme.primary};
    //                     border-left: none;
    //                     border-right: 1px solid ${theme.primary};
    //                     border-bottom: none;
    //                 }
    //                 :active {
    //                     color: ${theme.white};
    //                     background-color: ${theme.primary};
    //                     border-top: 1px solid ${theme.primary};
    //                     border-left: none;
    //                     border-right: 1px solid ${theme.primary};
    //                     border-bottom: none;
    //                 }
    //             `
    //         break
    //     case 'right':
    //         styles += `
    //                 border-left: ${singleButton ? 'none' : `1px solid ${theme.primary}`};
    //                 border-right: none;

    //                 border-bottom-right-radius: ${rounded ? '5px' : '0px'};
    //                 border-bottom-left-radius: ${singleButton && rounded ? '5px' : '0px'};
    //                 border-top-right-radius: 0px;
    //                 border-top-left-radius: 0px;

    //                 :hover {
    //                     color: ${theme.white};
    //                     background-color: ${theme.primary};
    //                     border-top: 1px solid ${theme.primary};
    //                     border-left: ${singleButton ? 'none' : `1px solid ${theme.primary}`};
    //                     border-right: none;
    //                     border-bottom: none;
    //                 }
    //                 :active {
    //                     color: ${theme.white};
    //                     background-color: ${theme.primary};
    //                     border-top: 1px solid ${theme.primary};
    //                     border-left: ${singleButton ? 'none' : `1px solid ${theme.primary}`};
    //                     border-right: none;
    //                     border-bottom: none;
    //                 }
    //             `
    //         break
    //     default:
    //         break
    // }

    return '';
});

//

var TEMultiStepForm = function TEMultiStepForm(props) {
    var _useState = useState(0),
        _useState2 = slicedToArray(_useState, 2),
        currentStep = _useState2[0],
        setCurrentStep = _useState2[1];

    var updateAndEmitStep = function updateAndEmitStep(step) {
        var onStepChange = props.onStepChange;

        setCurrentStep(step);
        if (onStepChange) {
            onStepChange(step);
        }
    };
    var handlePreviousPressed = function handlePreviousPressed() {
        var handleCancelOnClick = props.handleCancelOnClick,
            stepData = props.stepData;


        var moveBack = function moveBack() {
            if (currentStep === 0) {
                if (handleCancelOnClick) {
                    handleCancelOnClick();
                }
            } else {
                updateAndEmitStep(currentStep - 1);
            }
        };

        if (stepData && stepData[currentStep] && stepData[currentStep].onPrevious) {
            stepData[currentStep].onPrevious().then(function () {
                return moveBack();
            }).catch(function (error) {
                return console.log(error);
            });
        } else {
            moveBack();
        }
    };
    var handleNextPressed = function handleNextPressed() {
        var onSubmit = props.onSubmit,
            stepData = props.stepData;


        var moveForward = function moveForward() {
            if (currentStep + 1 === stepData.length) {
                onSubmit().then(function () {
                    updateAndEmitStep(0);
                }).catch(function (error) {
                    return console.log(error);
                });
            } else {
                updateAndEmitStep(currentStep + 1);
            }
        };

        if (stepData && stepData[currentStep] && stepData[currentStep].onNext) {
            stepData[currentStep].onNext().then(function () {
                return moveForward();
            }).catch(function (error) {
                return console.log(error);
            });
        } else {
            moveForward();
        }
    };

    var className = props.className,
        handleCancelOnClick = props.handleCancelOnClick,
        stepData = props.stepData,
        roundedButtons = props.roundedButtons;

    if (!stepData || stepData && stepData.length === 0) {
        return null;
    }

    return React__default.createElement(
        Container$2,
        { className: className },
        React__default.createElement(
            StepContainer,
            null,
            React__default.createElement(StepBar, { stepCount: stepData.length }),
            stepData.map(function (step, index) {
                var title = step.title;


                return React__default.createElement(
                    StepWrapper,
                    { key: index, stepCount: stepData.length },
                    React__default.createElement(
                        StepNumber,
                        { active: currentStep === index },
                        index + 1
                    ),
                    React__default.createElement(
                        StepTitle,
                        null,
                        title
                    )
                );
            })
        ),
        React__default.createElement(
            Form$1,
            null,
            stepData[currentStep] && stepData[currentStep].component
        ),
        React__default.createElement(
            ButtonContainer$1,
            null,
            (handleCancelOnClick || currentStep > 0) && React__default.createElement(
                StepButton,
                {
                    onClick: handlePreviousPressed,
                    position: 'left',
                    rounded: roundedButtons
                },
                currentStep === 0 ? 'cancel' : 'previous'
            ),
            React__default.createElement(
                StepButton,
                {
                    onClick: handleNextPressed,
                    position: 'right',
                    rounded: roundedButtons,
                    singleButton: !handleCancelOnClick && currentStep === 0
                },
                currentStep + 1 === stepData.length ? 'submit' : 'next'
            )
        )
    );
};

TEMultiStepForm.propTypes = {
    onStepChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    stepData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        component: PropTypes.element,
        onPrevious: PropTypes.func,
        onNext: PropTypes.func
    }).isRequired).isRequired,
    roundedButtons: PropTypes.bool
};

var _templateObject$f = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Input$5 = styled.input(_templateObject$f, function (props) {
	return '\n\t\t\tcursor: pointer;\n            box-sizing: border-box;\n\t\t';
});

//

var TERadioButtonInput = function TERadioButtonInput(props) {
  return React__default.createElement(Input$5, _extends({}, props, { type: 'radio' }));
};

var _templateObject$g = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Container$3 = styled(TERow)(_templateObject$g, function (props) {
    return '\n            margin-bottom: 10px;\n            display: inline-block;\n            vertical-align: top;\n        ';
});
var InputWrapper$2 = styled.div(_templateObject$g, function (props) {
    return '\n            display: flex;\n            flex-wrap: wrap;\n        ';
});

var RowWrarpper$1 = styled(TERow)(_templateObject$g, function (props) {
    return '\n            margin-bottom: 5px;\n            display: flex;\n            align-items: center;\n        ';
});

var RadioButton = styled(TERadioButtonInput)(_templateObject$g, function (props) {
    return '\n            display: inline-block;\n            vertical-align: middle;\n            cursor: pointer;\n        ';
});
var Label$4 = styled(TELabel)(_templateObject$g, function (props) {
    var theme = props.theme;


    return '\n            width: auto;\n            display: inline-block;\n            vertical-align: middle;\n            padding-left: 10px;\n            margin-bottom: 0px;\n            cursor: pointer;\n            font-size: 14px;\n\n            @media (max-width: 550px) {\n                font-size: 12px;\n            }\n        ';
});

//

var manipulateRowData$1 = function manipulateRowData(_ref) {
    var rowData = _ref.rowData,
        _ref$labelForKey = _ref.labelForKey,
        labelForKey = _ref$labelForKey === undefined ? '' : _ref$labelForKey;

    //Allowing For Greater Shorthand
    if (typeof rowData === 'string') {
        var label = rowData;
        var value = rowData;
        var key = labelForKey + rowData;
        return { label: label, value: value, key: key };
    } else if ((typeof rowData === 'undefined' ? 'undefined' : _typeof(rowData)) === 'object') {
        var _label = rowData.label,
            _rowData$value = rowData.value,
            _value = _rowData$value === undefined ? _label : _rowData$value,
            _rowData$key = rowData.key,
            _key = _rowData$key === undefined ? labelForKey + _label : _rowData$key;

        return { label: _label, value: _value, key: _key };
    }
    return rowData;
};
var TERadioButtonGroup = function TERadioButtonGroup(props) {
    var size = props.size,
        last = props.last,
        title = props.title,
        onChange = props.onChange,
        checkedValue = props.checkedValue,
        buttonArray = props.buttonArray,
        labelForKey = props.labelForKey,
        disabled = props.disabled,
        required = props.required,
        rowSize = props.rowSize,
        className = props.className;


    return React__default.createElement(
        Container$3,
        { size: size, last: last, className: className },
        React__default.createElement(
            TELabel,
            { disabled: disabled, required: required },
            title
        ),
        React__default.createElement(
            InputWrapper$2,
            null,
            buttonArray && buttonArray.map(function (rowData) {
                var _manipulateRowData = manipulateRowData$1({ rowData: rowData, labelForKey: labelForKey }),
                    label = _manipulateRowData.label,
                    value = _manipulateRowData.value,
                    key = _manipulateRowData.key;

                return React__default.createElement(
                    RowWrarpper$1,
                    { key: key, size: rowSize },
                    React__default.createElement(RadioButton, {
                        value: value,
                        onChange: onChange,
                        id: key,
                        checked: checkedValue === value,
                        disabled: disabled
                    }),
                    React__default.createElement(
                        Label$4,
                        { htmlFor: key, disabled: disabled },
                        label
                    )
                );
            })
        )
    );
};

TERadioButtonGroup.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    labelForKey: PropTypes.string
};

var tether = createCommonjsModule(function (module, exports) {
/*! tether 1.4.4 */

(function(root, factory) {
  {
    module.exports = factory();
  }
}(commonjsGlobal, function() {

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
}
function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var isFullscreenElement = function isFullscreenElement(e) {
            var d = e.ownerDocument;
            var fe = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
            return fe === e;
          };

          var offsetParentIsBody = true;

          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY' && !isFullscreenElement(currentNode)) {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));
});

var TetherComponent_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _reactDom2 = _interopRequireDefault(reactDom);



var _tether2 = _interopRequireDefault(tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (!_tether2.default) {
  console.error('It looks like Tether has not been included. Please load this dependency first https://github.com/HubSpot/tether');
}

var renderElementToPropTypes = [_propTypes2.default.string, _propTypes2.default.shape({
  appendChild: _propTypes2.default.func.isRequired
})];

var childrenPropType = function childrenPropType(_ref, propName, componentName) {
  var children = _ref.children;

  var childCount = React__default.Children.count(children);
  if (childCount <= 0) {
    return new Error(componentName + ' expects at least one child to use as the target element.');
  } else if (childCount > 2) {
    return new Error('Only a max of two children allowed in ' + componentName + '.');
  }
};

var attachmentPositions = ['auto auto', 'top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var TetherComponent = function (_Component) {
  _inherits(TetherComponent, _Component);

  function TetherComponent() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TetherComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).call.apply(_ref2, [this].concat(args))), _this), _this._targetNode = null, _this._elementParentNode = null, _this._tether = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TetherComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: 'getTetherInstance',
    value: function getTetherInstance() {
      return this._tether;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this._tether.disable();
    }
  }, {
    key: 'enable',
    value: function enable() {
      this._tether.enable();
    }
  }, {
    key: 'on',
    value: function on(event, handler, ctx) {
      this._tether.on(event, handler, ctx);
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this._tether.once(event, handler, ctx);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      this._tether.off(event, handler);
    }
  }, {
    key: 'position',
    value: function position() {
      this._tether.position();
    }
  }, {
    key: '_registerEventListeners',
    value: function _registerEventListeners() {
      var _this2 = this,
          _arguments = arguments;

      this.on('update', function () {
        return _this2.props.onUpdate && _this2.props.onUpdate.apply(_this2, _arguments);
      });

      this.on('repositioned', function () {
        return _this2.props.onRepositioned && _this2.props.onRepositioned.apply(_this2, _arguments);
      });
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this._elementParentNode) {
        _reactDom2.default.unmountComponentAtNode(this._elementParentNode);
        this._elementParentNode.parentNode.removeChild(this._elementParentNode);
      }

      if (this._tether) {
        this._tether.destroy();
      }

      this._elementParentNode = null;
      this._tether = null;
    }
  }, {
    key: '_update',
    value: function _update() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          renderElementTag = _props.renderElementTag;

      var elementComponent = React__default.Children.toArray(children)[1];

      // if no element component provided, bail out
      if (!elementComponent) {
        // destroy Tether element if it has been created
        if (this._tether) {
          this._destroy();
        }
        return;
      }

      // create element node container if it hasn't been yet
      if (!this._elementParentNode) {
        // create a node that we can stick our content Component in
        this._elementParentNode = document.createElement(renderElementTag);

        // append node to the render node
        this._renderNode.appendChild(this._elementParentNode);
      }

      // render element component into the DOM
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, elementComponent, this._elementParentNode, function () {
        // if we're not destroyed, update Tether once the subtree has finished rendering
        if (_this3._elementParentNode) {
          _this3._updateTether();
        }
      });
    }
  }, {
    key: '_updateTether',
    value: function _updateTether() {
      var _this4 = this;

      var _props2 = this.props,
          children = _props2.children,
          renderElementTag = _props2.renderElementTag,
          renderElementTo = _props2.renderElementTo,
          id = _props2.id,
          className = _props2.className,
          style = _props2.style,
          options = _objectWithoutProperties(_props2, ['children', 'renderElementTag', 'renderElementTo', 'id', 'className', 'style']);

      var tetherOptions = _extends({
        target: this._targetNode,
        element: this._elementParentNode
      }, options);

      if (id) {
        this._elementParentNode.id = id;
      }

      if (className) {
        this._elementParentNode.className = className;
      }

      if (style) {
        Object.keys(style).forEach(function (key) {
          _this4._elementParentNode.style[key] = style[key];
        });
      }

      if (!this._tether) {
        this._tether = new _tether2.default(tetherOptions);
        this._registerEventListeners();
      } else {
        this._tether.setOptions(tetherOptions);
      }

      this._tether.position();
    }
  }, {
    key: 'render',
    value: function render() {
      return React__default.Children.toArray(this.props.children)[0];
    }
  }, {
    key: '_renderNode',
    get: function get() {
      var renderElementTo = this.props.renderElementTo;

      if (typeof renderElementTo === 'string') {
        return document.querySelector(renderElementTo);
      } else {
        return renderElementTo || document.body;
      }
    }
  }]);

  return TetherComponent;
}(React__default.Component);

TetherComponent.propTypes = {
  renderElementTag: _propTypes2.default.string,
  renderElementTo: _propTypes2.default.oneOfType(renderElementToPropTypes),
  attachment: _propTypes2.default.oneOf(attachmentPositions).isRequired,
  targetAttachment: _propTypes2.default.oneOf(attachmentPositions),
  offset: _propTypes2.default.string,
  targetOffset: _propTypes2.default.string,
  targetModifier: _propTypes2.default.string,
  enabled: _propTypes2.default.bool,
  classes: _propTypes2.default.object,
  classPrefix: _propTypes2.default.string,
  optimizations: _propTypes2.default.object,
  constraints: _propTypes2.default.array,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onUpdate: _propTypes2.default.func,
  onRepositioned: _propTypes2.default.func,
  children: childrenPropType
};
TetherComponent.defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null
};
exports.default = TetherComponent;
module.exports = exports['default'];
});

unwrapExports(TetherComponent_1);

var reactTether = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _TetherComponent2 = _interopRequireDefault(TetherComponent_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TetherComponent2.default;
module.exports = exports['default'];
});

unwrapExports(reactTether);

var Dropdown_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _reactTether2 = _interopRequireDefault(reactTether);



var _classnames2 = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

      return _react2.default.createElement(
        _reactTether2.default,
        {
          className: (0, _classnames2.default)('PowerSelect__Tether', className && className + '__Tether'),
          attachment: 'top left',
          targetAttachment: 'bottom left',
          constraints: [{
            to: 'window',
            attachment: 'together'
          }]
        },
        children
      );
    }
  }]);

  return Dropdown;
}(React__default.Component);

exports.default = Dropdown;
});

unwrapExports(Dropdown_1);

var RenderOption_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = RenderOption;



var _react2 = _interopRequireDefault(React__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RenderOption(_ref) {
  var option = _ref.option,
      select = _ref.select,
      optionLabelPath = _ref.optionLabelPath,
      optionComponent = _ref.optionComponent;

  var publicProps = { option: option, select: select, optionLabelPath: optionLabelPath };
  var OptionComponent = optionComponent;
  if ((0, React__default.isValidElement)(OptionComponent)) {
    return (0, React__default.cloneElement)(OptionComponent, publicProps);
  }
  if (OptionComponent) {
    return _react2.default.createElement(OptionComponent, publicProps);
  }
  if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
    if (optionLabelPath) {
      return _react2.default.createElement(
        'span',
        null,
        option[optionLabelPath]
      );
    }
  }
  if (typeof option === 'string') {
    return _react2.default.createElement(
      'span',
      null,
      option
    );
  }
  return null;
}
});

unwrapExports(RenderOption_1);

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderComponent = exports.isValidOptionPresent = exports.getNextValidOption = exports.filterOptions = exports.flattenOptions = exports.getOptionIndex = exports.isOptGroup = exports.makeArray = exports.isNone = exports.matcher = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = function matcher(_ref) {
  var option = _ref.option,
      _ref$searchTerm = _ref.searchTerm,
      searchTerm = _ref$searchTerm === undefined ? '' : _ref$searchTerm,
      searchIndices = _ref.searchIndices;

  searchTerm = searchTerm.trim().toLowerCase();

  if (searchIndices) {
    return makeArray(searchIndices).some(function (index) {
      var value = option[index];
      return !isNone(value) && String(value).toLowerCase().indexOf(searchTerm) !== -1;
    });
  }

  return !isNone(option) && String(option).toLowerCase().indexOf(searchTerm) !== -1;

  return true;
};

var isNone = exports.isNone = function isNone(value) {
  return value === null || value === undefined;
};

var makeArray = exports.makeArray = function makeArray(obj) {
  if (obj === null || obj === undefined) {
    return [];
  }
  return Array.isArray(obj) ? obj : [obj];
};

var isOptGroup = exports.isOptGroup = function isOptGroup(option) {
  return option.label && option.options;
};

var getOptionIndex = exports.getOptionIndex = function getOptionIndex(options, option) {
  var paths = [];
  var optionFound = false;
  (function traverse(options) {
    optionFound = options.some(function (currentOption, index) {
      if (currentOption === option) {
        paths.push(index);
        optionFound = true;
        return true;
      }
      if (isOptGroup(currentOption)) {
        paths.push(index);
        return traverse(currentOption.options, index);
      }
    });
    if (!optionFound) {
      paths.pop();
    }
    return optionFound;
  })(options);
  return paths.join('.');
};

var flattenOptions = exports.flattenOptions = function flattenOptions(options) {
  var isOptGroupOptions = false;
  var optGroupMap = new Map();
  var flattenedOptions = function traverse(options) {
    var flattenedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return options.reduce(function (prev, currentOption) {
      if (isOptGroup(currentOption)) {
        isOptGroupOptions = true;
        return traverse(currentOption.options, prev, currentOption);
      }
      prev.push(currentOption);
      optGroupMap.set(currentOption, group);
      return prev;
    }, flattenedOptions);
  }(options);
  return {
    isOptGroupOptions: isOptGroupOptions,
    flattenedOptions: flattenedOptions,
    optGroupMap: optGroupMap
  };
};

var filterOptions = exports.filterOptions = function filterOptions(_ref2) {
  var options = _ref2.options,
      searchTerm = _ref2.searchTerm,
      searchIndices = _ref2.searchIndices,
      matcher = _ref2.matcher;

  return function doFilter(options) {
    var filtered = [];
    for (var i = 0, len = options.length; i < len; i++) {
      var option = options[i];
      if (isOptGroup(option)) {
        var copy = _extends({}, option);
        copy.options = doFilter(option.options);
        if (copy.options.length) {
          filtered.push(copy);
        }
      } else if (matcher({ option: option, searchTerm: searchTerm, searchIndices: searchIndices })) {
        filtered.push(option);
      }
    }
    return filtered;
  }(options);
};

var getNextValidOption = exports.getNextValidOption = function getNextValidOption(_ref3) {
  var options = _ref3.options,
      currentOption = _ref3.currentOption,
      counter = _ref3.counter,
      optGroupMap = _ref3.optGroupMap;

  return function next(currentOption) {
    var currentIndex = options.indexOf(currentOption);
    var nextIndex = currentIndex + counter;
    nextIndex = nextIndex === -1 ? options.length - 1 : nextIndex === options.length ? 0 : nextIndex;
    var nextOption = options[nextIndex];
    var group = optGroupMap.get(nextOption);
    if (nextOption && (nextOption.disabled || group.disabled)) {
      return next(nextOption);
    }
    return nextOption;
  }(currentOption);
};

var isValidOptionPresent = exports.isValidOptionPresent = function isValidOptionPresent(options) {
  return function traverse(options) {
    return !!options.some(function (option) {
      if (isOptGroup(option)) {
        return traverse(option.options);
      }
      return !option.disabled;
    });
  }(options);
};

var renderComponent = exports.renderComponent = function renderComponent(Component$$1, props) {
  if ((0, React__default.isValidElement)(Component$$1)) {
    return (0, React__default.cloneElement)(Component$$1, props);
  }
  if (Component$$1) {
    return _react2.default.createElement(Component$$1, props);
  }
};
});

unwrapExports(utils);
var utils_1 = utils.renderComponent;
var utils_2 = utils.isValidOptionPresent;
var utils_3 = utils.getNextValidOption;
var utils_4 = utils.filterOptions;
var utils_5 = utils.flattenOptions;
var utils_6 = utils.getOptionIndex;
var utils_7 = utils.isOptGroup;
var utils_8 = utils.makeArray;
var utils_9 = utils.isNone;
var utils_10 = utils.matcher;

var TriggerWrapper_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TriggerWrapper;



var _react2 = _interopRequireDefault(React__default);



var _classnames2 = _interopRequireDefault(classnames);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TriggerWrapper(_ref) {
  var value = _ref.value,
      select = _ref.select,
      showClear = _ref.showClear,
      onClearClick = _ref.onClearClick,
      triggerLHSComponent = _ref.triggerLHSComponent,
      triggerRHSComponent = _ref.triggerRHSComponent,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)('PowerSelect__Trigger', {
        'PowerSelect__Trigger--empty': !value
      })
    },
    triggerLHSComponent && _react2.default.createElement(
      'div',
      { className: 'PowerSelect__Trigger__LHS' },
      (0, utils.renderComponent)(triggerLHSComponent, { select: select })
    ),
    children,
    showClear && _react2.default.createElement('span', { className: 'PowerSelect__Clear', onClick: onClearClick }),
    _react2.default.createElement('span', { className: 'PowerSelect__TriggerStatus' }),
    triggerRHSComponent && _react2.default.createElement(
      'div',
      { className: 'PowerSelect__Trigger__RHS' },
      (0, utils.renderComponent)(triggerRHSComponent, { select: select })
    )
  );
}
});

unwrapExports(TriggerWrapper_1);

var SelectTrigger = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Trigger;



var _react2 = _interopRequireDefault(React__default);



var _RenderOption2 = _interopRequireDefault(RenderOption_1);



var _TriggerWrapper2 = _interopRequireDefault(TriggerWrapper_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Trigger(_ref) {
  var selectedOption = _ref.selectedOption,
      optionLabelPath = _ref.optionLabelPath,
      selectedOptionComponent = _ref.selectedOptionComponent,
      placeholder = _ref.placeholder,
      select = _ref.select,
      rest = _objectWithoutProperties(_ref, ['selectedOption', 'optionLabelPath', 'selectedOptionComponent', 'placeholder', 'select']);

  return _react2.default.createElement(
    _TriggerWrapper2.default,
    _extends({ value: selectedOption, select: select }, rest),
    _react2.default.createElement(
      'div',
      { className: 'PowerSelect__TriggerLabel' },
      selectedOption ? _react2.default.createElement(_RenderOption2.default, {
        option: selectedOption,
        optionLabelPath: optionLabelPath,
        optionComponent: selectedOptionComponent,
        select: select
      }) : _react2.default.createElement(
        'span',
        { className: 'PowerSelect__Placeholder' },
        placeholder
      )
    )
  );
}
});

unwrapExports(SelectTrigger);

var Option_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _classnames2 = _interopRequireDefault(classnames);



var _RenderOption2 = _interopRequireDefault(RenderOption_1);

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
}(React__default.Component);

exports.default = Option;
});

unwrapExports(Option_1);

var Options_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _classnames2 = _interopRequireDefault(classnames);



var _Option2 = _interopRequireDefault(Option_1);



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
        var optionIndex = (0, utils.getOptionIndex)(options, highlightedOption);
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
        var optionIndex = (0, utils.getOptionIndex)(_this2.props.options, option);
        if ((0, utils.isOptGroup)(option)) {
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
}(React__default.Component);

exports.default = Options;
});

unwrapExports(Options_1);

var DropdownMenu_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _classnames2 = _interopRequireDefault(classnames);





var _Options2 = _interopRequireDefault(Options_1);

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
        beforeOptionsComponent && (0, utils.renderComponent)(beforeOptionsComponent, { select: select }),
        _react2.default.createElement(_Options2.default, _extends({ select: select, highlightedOption: highlightedOption }, otherProps)),
        afterOptionsComponent && (0, utils.renderComponent)(afterOptionsComponent, { select: select })
      );
    }
  }]);

  return DropdownMenu;
}(React__default.Component);

exports.default = DropdownMenu;
});

unwrapExports(DropdownMenu_1);

var Select_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actions;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _classnames2 = _interopRequireDefault(classnames);



var _Dropdown2 = _interopRequireDefault(Dropdown_1);



var _SelectTrigger2 = _interopRequireDefault(SelectTrigger);



var _DropdownMenu2 = _interopRequireDefault(DropdownMenu_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KEY_CODES = {
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ENTER: 13,
  TAB: 9
};

var actions = (_actions = {}, _defineProperty(_actions, KEY_CODES.UP_ARROW, 'handleUpArrow'), _defineProperty(_actions, KEY_CODES.DOWN_ARROW, 'handleDownArrow'), _defineProperty(_actions, KEY_CODES.ENTER, 'handleEnterPress'), _defineProperty(_actions, KEY_CODES.TAB, 'handleTabPress'), _actions);

var noop = function noop() {};

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.flattenOptions(this.props.options);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var options = _ref2.options;

      this.flattenOptions(options);
      if (this.props.options !== options) {
        this.setState({
          filteredOptions: options
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.documentEventListeners.handleEscapePress);
      document.addEventListener('click', this.documentEventListeners.handleDocumentClick, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.documentEventListeners.handleEscapePress);
      document.removeEventListener('click', this.documentEventListeners.handleDocumentClick, true);
      clearTimeout(this.focusFieldTimeout);
    }
  }, {
    key: 'flattenOptions',
    value: function flattenOptions(options) {
      var _flattenOptions2 = (0, utils.flattenOptions)(options),
          isOptGroupOptions = _flattenOptions2.isOptGroupOptions,
          flattenedOptions = _flattenOptions2.flattenedOptions,
          optGroupMap = _flattenOptions2.optGroupMap;

      this.isOptGroupOptions = isOptGroupOptions;
      this._optGroupMap = optGroupMap;
      this.setState({
        _flattenedOptions: flattenedOptions
      });
    }
  }, {
    key: 'getVisibleOptions',
    value: function getVisibleOptions() {
      return this.state.filteredOptions || this.props.options;
    }
  }, {
    key: 'getFlattenedOptions',
    value: function getFlattenedOptions() {
      return this.state._flattenedOptions;
    }
  }, {
    key: 'setHighlightedOption',
    value: function setHighlightedOption(highlightedOption) {
      this.setState({
        highlightedOption: highlightedOption
      });
    }
  }, {
    key: 'setFocusedState',
    value: function setFocusedState(focused) {
      this.setState({ focused: focused });
    }
  }, {
    key: 'validateAndHighlightOption',
    value: function validateAndHighlightOption(highlightedOption, counter) {
      var options = this.getFlattenedOptions();
      var isValidOptionAvailable = (0, utils.isValidOptionPresent)(options);
      if (isValidOptionAvailable) {
        var nextValidOption = (0, utils.getNextValidOption)({
          options: options,
          counter: counter,
          currentOption: highlightedOption,
          optGroupMap: this._optGroupMap
        });
        this.setHighlightedOption(nextValidOption);
      }
    }
  }, {
    key: 'handleDownArrow',
    value: function handleDownArrow(event, highlightedOption) {
      event.preventDefault();
      this.validateAndHighlightOption(highlightedOption, 1);
    }
  }, {
    key: 'handleUpArrow',
    value: function handleUpArrow(event, highlightedOption) {
      event.preventDefault();
      this.validateAndHighlightOption(highlightedOption, -1);
    }
  }, {
    key: 'handleEnterPress',
    value: function handleEnterPress(event, highlightedOption) {
      if (this.state.isOpen) {
        this.selectOption(highlightedOption);
        this.focusField();
        this.resetSearchAndClose();
      }
    }
  }, {
    key: 'handleTabPress',
    value: function handleTabPress(event, highlightedOption) {
      this.setFocusedState(false);
      if (this.state.isOpen) {
        this.selectOption(highlightedOption);
        this.resetSearchAndClose();
      }
    }
  }, {
    key: 'handleEscapePress',
    value: function handleEscapePress(event) {
      if (event.which === 27) {
        var $target = event.target;
        if (this.powerselect.contains($target) || this.dropdown && this.dropdown.contains($target)) {
          this.resetSearchAndClose();
          this.focusField();
        }
      }
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(event) {
      var $target = event.target;
      if (!(this.powerselect.contains($target) || this.dropdown && this.dropdown.contains(event.target))) {
        var _state = this.state,
            focused = _state.focused,
            isOpen = _state.isOpen;

        if (focused) {
          this.setFocusedState(false);
        }
        if (isOpen) {
          this.resetSearchAndClose();
        }
      }
    }
  }, {
    key: 'getPublicApi',
    value: function getPublicApi() {
      var _state2 = this.state,
          isOpen = _state2.isOpen,
          searchTerm = _state2.searchTerm;

      return {
        isOpen: isOpen,
        searchTerm: searchTerm,
        actions: {
          open: this.open,
          close: this.close,
          search: this.search,
          focus: this.focusField
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          tabIndex = _props.tabIndex,
          selected = _props.selected,
          showClear = _props.showClear,
          optionLabelPath = _props.optionLabelPath,
          optionComponent = _props.optionComponent,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          selectedOptionComponent = _props.selectedOptionComponent,
          selectedOptionLabelPath = _props.selectedOptionLabelPath,
          triggerLHSComponent = _props.triggerLHSComponent,
          triggerRHSComponent = _props.triggerRHSComponent,
          beforeOptionsComponent = _props.beforeOptionsComponent,
          afterOptionsComponent = _props.afterOptionsComponent;
      var _state3 = this.state,
          isOpen = _state3.isOpen,
          searchTerm = _state3.searchTerm,
          highlightedOption = _state3.highlightedOption,
          focused = _state3.focused;

      var Trigger = this.props.triggerComponent;
      var options = this.getVisibleOptions();
      var selectApi = this.getPublicApi();

      return _react2.default.createElement(
        _Dropdown2.default,
        { className: className },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(powerselect) {
              _this2.powerselect = powerselect;
            },
            className: (0, _classnames2.default)('PowerSelect', className, {
              'PowerSelect--disabled': disabled,
              'PowerSelect--open': isOpen,
              'PowerSelect--focused': focused,
              PowerSelect__WithSearch: searchTerm
            }),
            tabIndex: tabIndex,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onKeyDown: function onKeyDown(event) {
              _this2.handleKeyDown(event, highlightedOption);
            }
          },
          _react2.default.createElement(Trigger, {
            selectedOption: selected,
            highlightedOption: highlightedOption,
            optionLabelPath: optionLabelPath,
            selectedOptionLabelPath: selectedOptionLabelPath,
            selectedOptionComponent: selectedOptionComponent,
            triggerLHSComponent: triggerLHSComponent,
            triggerRHSComponent: triggerRHSComponent,
            placeholder: placeholder,
            disabled: disabled,
            searchTerm: searchTerm,
            showClear: showClear,
            handleOnChange: this.handleSearchInputChange,
            onClearClick: this.handleClearClick,
            handleOnBlur: this.handleBlur,
            select: selectApi
          })
        ),
        isOpen && _react2.default.createElement(_DropdownMenu2.default, {
          ref: function ref(dropdownRef) {
            return _this2.dropdownRef = dropdownRef;
          },
          onRef: function onRef(dropdown) {
            return _this2.dropdown = dropdown;
          },
          className: className,
          minWidth: this.powerselect.offsetWidth,
          options: options,
          selected: selected,
          optionLabelPath: optionLabelPath,
          optionComponent: optionComponent,
          onOptionClick: this.handleOptionClick,
          handleKeyDown: this.handleKeyDown,
          highlightedOption: highlightedOption,
          select: selectApi,
          beforeOptionsComponent: beforeOptionsComponent,
          afterOptionsComponent: afterOptionsComponent
        })
      );
    }
  }]);

  return Select;
}(React__default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    highlightedOption: null,
    isOpen: false,
    focused: false,
    filteredOptions: null,
    searchTerm: null
  };
  this.documentEventListeners = {
    handleEscapePress: this.handleEscapePress.bind(this),
    handleDocumentClick: this.handleDocumentClick.bind(this)
  };

  this.selectOption = function (option) {
    _this3.setHighlightedOption(option);
    _this3.props.onChange({
      select: _this3.getPublicApi(),
      option: option
    });
    _this3.setState({
      searchTerm: null
    });
  };

  this.open = function () {
    if (_this3.props.disabled) {
      return;
    }
    var flattenedOptions = _this3.getFlattenedOptions();
    if (_this3.state.highlightedOption === null) {
      var selected = _this3.props.selected;

      var highlightedOption = flattenedOptions.find(function (option) {
        return option === selected;
      });
      _this3.setHighlightedOption(highlightedOption);
    }
    _this3.setState({
      isOpen: true
    });
    _this3.props.onOpen({ select: _this3.getPublicApi() });
  };

  this.close = function () {
    _this3.setState({
      isOpen: false
    });
    _this3.props.onClose({ select: _this3.getPublicApi() });
  };

  this.resetSearchAndClose = function () {
    _this3.search(null);
    _this3.close();
  };

  this.toggle = function (event) {
    if (event && _this3.powerselect.contains(event.target)) {
      event.stopPropagation();
    }
    if (_this3.state.isOpen) {
      _this3.resetSearchAndClose();
    } else {
      _this3.open();
    }
  };

  this.resetSearch = function () {
    _this3.setHighlightedOption(null);
    _this3.setState({
      searchTerm: null,
      filteredOptions: null
    });
  };

  this.focusField = function () {
    _this3.focusFieldTimeout = setTimeout(function () {
      _this3.powerselect.focus();
    });
  };

  this.search = function (searchTerm, callback) {
    var _props2 = _this3.props,
        options = _props2.options,
        optionLabelPath = _props2.optionLabelPath,
        matcher = _props2.matcher,
        _props2$searchIndices = _props2.searchIndices,
        searchIndices = _props2$searchIndices === undefined ? optionLabelPath : _props2$searchIndices;

    var filteredOptions = (0, utils.filterOptions)({
      options: options,
      searchTerm: searchTerm || '',
      searchIndices: searchIndices,
      matcher: matcher
    });

    var _flattenOptions3 = (0, utils.flattenOptions)(filteredOptions || []),
        flattenedOptions = _flattenOptions3.flattenedOptions;

    if (searchTerm && flattenedOptions.length) {
      _this3.setHighlightedOption(flattenedOptions[0]);
    } else {
      _this3.setHighlightedOption(null);
    }

    _this3.setState({
      filteredOptions: filteredOptions,
      searchTerm: searchTerm,
      _flattenedOptions: flattenedOptions
    }, callback);
  };

  this.handleSearchInputChange = function (event) {
    var value = event.target.value;
    _this3.open();
    _this3.search(value);

    if (_this3.props.onSearchInputChange) {
      // show deprecate warning
      _this3.props.onSearchInputChange(event, { select: _this3.getPublicApi() });
    } else {
      _this3.props.onSearch(event, { select: _this3.getPublicApi() });
    }
  };

  this.handleKeyDown = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var event = args[0];

    var keyCode = event.which;
    var action = _this3[actions[keyCode]];
    if (action) {
      if ((keyCode === KEY_CODES.UP_ARROW || keyCode === KEY_CODES.DOWN_ARROW) && !_this3.state.isOpen) {
        _this3.open();
        return;
      }
      action.apply(_this3, args);
    }
    _this3.props.onKeyDown(event, { select: _this3.getPublicApi() });
  };

  this.handleFocus = function (event) {
    var triggerInput = _this3.powerselect.querySelector('input');
    if (triggerInput) {
      triggerInput.focus();
    }
    _this3.setFocusedState(true);
    if (!_this3.state.focused) {
      _this3.props.onFocus(event, { select: _this3.getPublicApi() });
    }
  };

  this.handleBlur = function (event) {
    _this3.setFocusedState(false);
    _this3.props.onBlur(event, { select: _this3.getPublicApi() });
  };

  this.handleClick = function (event) {
    _this3.toggle(event);
    _this3.props.onClick(event, { select: _this3.getPublicApi() });
  };

  this.handleClearClick = function (event) {
    _this3.selectOption(undefined);
    _this3.resetSearchAndClose();
    _this3.focusField();
    event.stopPropagation();
  };

  this.handleOptionClick = function (highlightedOption) {
    _this3.selectOption(highlightedOption);
    _this3.focusField();
    if (_this3.props.closeOnSelect) {
      _this3.resetSearchAndClose();
    }
  };
};

exports.default = Select;


Select.propTypes = {
  options: _propTypes2.default.array.isRequired,
  selected: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.array]),
  onChange: _propTypes2.default.func.isRequired
};

Select.defaultProps = {
  options: [],
  disabled: false,
  tabIndex: 0,
  showClear: true,
  closeOnSelect: true,
  optionLabelPath: null,
  optionComponent: null,
  triggerComponent: _SelectTrigger2.default,
  triggerLHSComponent: null,
  triggerRHSComponent: null,
  selectedOptionComponent: null,
  beforeOptionsComponent: null,
  afterOptionsComponent: null,
  matcher: utils.matcher,
  onFocus: noop,
  onBlur: noop,
  onClick: noop,
  onKeyDown: noop,
  onOpen: noop,
  onClose: noop,
  onSearch: noop
};
});

unwrapExports(Select_1);

var AutoResizeInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutoResizeInput = function (_Component) {
  _inherits(AutoResizeInput, _Component);

  function AutoResizeInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutoResizeInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoResizeInput.__proto__ || Object.getPrototypeOf(AutoResizeInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutoResizeInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setInputSize(this.props.value);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoFocus) {
        setTimeout(function () {
          _this2.input.focus();
        }, 0);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setInputSize(nextProps.value);
    }
  }, {
    key: 'setInputSize',
    value: function setInputSize(value) {
      this.setState({
        length: value.length + 4
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          autoFocus = _props.autoFocus,
          rest = _objectWithoutProperties(_props, ['autoFocus']);

      return _react2.default.createElement('input', _extends({ ref: function ref(input) {
          return _this3.input = input;
        }, size: this.state.length }, rest));
    }
  }]);

  return AutoResizeInput;
}(React__default.Component);

exports.default = AutoResizeInput;


AutoResizeInput.defaultProps = {
  onChange: function onChange() {},
  value: ''
};
});

unwrapExports(AutoResizeInput_1);

var BeforeOptionsWrapper_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BeforeOptionsWrapper;



var _react2 = _interopRequireDefault(React__default);



var _AutoResizeInput2 = _interopRequireDefault(AutoResizeInput_1);

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
});

unwrapExports(BeforeOptionsWrapper_1);

var PowerSelect_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _Select2 = _interopRequireDefault(Select_1);



var _BeforeOptionsWrapper2 = _interopRequireDefault(BeforeOptionsWrapper_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PowerSelect = function (_Component) {
  _inherits(PowerSelect, _Component);

  function PowerSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PowerSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PowerSelect.__proto__ || Object.getPrototypeOf(PowerSelect)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearchInputChange = function (event) {
      // hackish
      _this.select.handleSearchInputChange(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PowerSelect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          searchEnabled = _props.searchEnabled,
          searchPlaceholder = _props.searchPlaceholder,
          beforeOptionsComponent = _props.beforeOptionsComponent,
          rest = _objectWithoutProperties(_props, ['searchEnabled', 'searchPlaceholder', 'beforeOptionsComponent']);

      return _react2.default.createElement(_Select2.default, _extends({
        ref: function ref(select) {
          return _this2.select = select;
        },
        beforeOptionsComponent: _react2.default.createElement(_BeforeOptionsWrapper2.default, {
          searchEnabled: searchEnabled,
          searchPlaceholder: searchPlaceholder,
          beforeOptionsComponent: beforeOptionsComponent,
          onChange: this.handleSearchInputChange
        })
      }, rest));
    }
  }]);

  return PowerSelect;
}(React__default.Component);

exports.default = PowerSelect;


PowerSelect.displayName = 'PowerSelect';
PowerSelect.defaultProps = {
  searchEnabled: true
};
});

unwrapExports(PowerSelect_1);

var SelectTrigger_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _TriggerWrapper2 = _interopRequireDefault(TriggerWrapper_1);



var _AutoResizeInput2 = _interopRequireDefault(AutoResizeInput_1);

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
}(React__default.Component);

exports.default = SelectTrigger;
});

unwrapExports(SelectTrigger_1);

var TypeAhead_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _classnames2 = _interopRequireDefault(classnames);



var _Select2 = _interopRequireDefault(Select_1);



var _SelectTrigger2 = _interopRequireDefault(SelectTrigger_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypeAhead = function (_Component) {
  _inherits(TypeAhead, _Component);

  function TypeAhead() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TypeAhead);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TypeAhead.__proto__ || Object.getPrototypeOf(TypeAhead)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyDown = function (event, _ref2) {
      var select = _ref2.select;
      var _this$props = _this.props,
          onKeyDown = _this$props.onKeyDown,
          onChange = _this$props.onChange;

      if (event.which === 27) {
        if (!select.searchTerm) {
          onChange({
            option: undefined,
            select: select
          });
        }
      }
      if (onKeyDown) {
        onKeyDown(event, { select: select });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TypeAhead, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          selectedOptionLabelPath = _props.selectedOptionLabelPath,
          onKeyDown = _props.onKeyDown,
          rest = _objectWithoutProperties(_props, ['className', 'selectedOptionLabelPath', 'onKeyDown']);

      var TriggerComponent = this.props.triggerComponent;

      return _react2.default.createElement(_Select2.default, _extends({
        className: (0, _classnames2.default)('TypeAhead', className),
        ref: function ref(select) {
          return _this2.select = select;
        },
        triggerComponent: function triggerComponent(props) {
          return _react2.default.createElement(TriggerComponent, _extends({}, props, { selectedOptionLabelPath: selectedOptionLabelPath }));
        },
        selectedOptionLabelPath: selectedOptionLabelPath
      }, rest, {
        onKeyDown: this.handleKeyDown
      }));
    }
  }]);

  return TypeAhead;
}(React__default.Component);

exports.default = TypeAhead;


TypeAhead.displayName = 'TypeAhead';
TypeAhead.defaultProps = {
  triggerComponent: _SelectTrigger2.default
};
});

unwrapExports(TypeAhead_1);

var SelectedOption_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = SelectedOption;



var _react2 = _interopRequireDefault(React__default);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SelectedOption(props) {
  var option = props.option,
      optionLabelPath = props.optionLabelPath,
      selectedOptionComponent = props.selectedOptionComponent,
      showOptionClose = props.showOptionClose,
      onCloseClick = props.onCloseClick,
      select = props.select;

  var value = null;
  if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
    if (optionLabelPath) {
      value = option[optionLabelPath];
    }
  }
  if (typeof option === 'string') {
    value = option;
  }
  return _react2.default.createElement(
    'li',
    { className: 'PowerSelectMultiple__SelectedOption' },
    _react2.default.createElement(
      'span',
      { className: 'PowerSelectMultiple__SelectedOption__Label' },
      selectedOptionComponent ? (0, utils.renderComponent)(selectedOptionComponent, { option: option, select: select }) : value
    ),
    showOptionClose ? _react2.default.createElement(
      'span',
      {
        className: 'PowerSelectMultiple__SelectedOption__Close',
        onClick: function onClick(event) {
          event.stopPropagation();
          onCloseClick({ option: option, select: select });
        }
      },
      '\xD7'
    ) : null
  );
}
});

unwrapExports(SelectedOption_1);

var SelectTrigger_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _AutoResizeInput2 = _interopRequireDefault(AutoResizeInput_1);



var _SelectedOption2 = _interopRequireDefault(SelectedOption_1);



var _TriggerWrapper2 = _interopRequireDefault(TriggerWrapper_1);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectTrigger.__proto__ || Object.getPrototypeOf(SelectTrigger)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this.handleClearClick = function (event) {
      _this.props.onClearClick(event, { select: _this.props.select });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectTrigger, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.searchTerm !== null ? nextProps.searchTerm : '';
      this.setState({
        value: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          selectedOption = _props.selectedOption,
          optionLabelPath = _props.optionLabelPath,
          showOptionClose = _props.showOptionClose,
          select = _props.select,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          autoFocus = _props.autoFocus,
          handleOnChange = _props.handleOnChange,
          handleKeyDown = _props.handleKeyDown,
          handleOnFocus = _props.handleOnFocus,
          handleOnBlur = _props.handleOnBlur,
          selectedOptionComponent = _props.selectedOptionComponent,
          rest = _objectWithoutProperties(_props, ['selectedOption', 'optionLabelPath', 'showOptionClose', 'select', 'placeholder', 'disabled', 'autoFocus', 'handleOnChange', 'handleKeyDown', 'handleOnFocus', 'handleOnBlur', 'selectedOptionComponent']);

      var selected = selectedOption || [];
      return _react2.default.createElement(
        _TriggerWrapper2.default,
        _extends({}, rest, {
          value: selected.length,
          select: select,
          onClearClick: this.handleClearClick
        }),
        _react2.default.createElement(
          'div',
          { className: 'PowerSelectMultiple__OptionsContainer' },
          _react2.default.createElement(
            'ul',
            { className: 'PowerSelectMultiple__SelectedOptions' },
            selected.map(function (selectedOption, index) {
              return _react2.default.createElement(_SelectedOption2.default, {
                key: index,
                option: selectedOption,
                optionLabelPath: optionLabelPath,
                selectedOptionComponent: selectedOptionComponent,
                showOptionClose: showOptionClose,
                onCloseClick: _this2.props.onOptionCloseClick,
                select: select
              });
            }),
            _react2.default.createElement(
              'li',
              { className: 'PowerSelectMultiple_TriggerInputContainer' },
              _react2.default.createElement(_AutoResizeInput2.default, {
                className: 'PowerSelect__TriggerInput',
                autoComplete: 'off',
                spellCheck: 'false',
                placeholder: selected.length ? '' : placeholder,
                value: this.state.value,
                disabled: disabled,
                autoFocus: autoFocus,
                onChange: handleOnChange,
                onKeyDown: handleKeyDown,
                onFocus: handleOnFocus,
                onBlur: handleOnBlur
              })
            )
          )
        )
      );
    }
  }]);

  return SelectTrigger;
}(React__default.Component);

exports.default = SelectTrigger;


SelectTrigger.defaultProps = {
  onOptionCloseClick: function onOptionCloseClick() {}
};
});

unwrapExports(SelectTrigger_1$1);

var PowerSelectMultiple_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _classnames2 = _interopRequireDefault(classnames);



var _Select2 = _interopRequireDefault(Select_1);



var _SelectTrigger2 = _interopRequireDefault(SelectTrigger_1$1);

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
}(React__default.Component);

exports.default = PowerSelectMultiple;


PowerSelectMultiple.displayName = 'PowerSelectMultiple';
});

unwrapExports(PowerSelectMultiple_1);

var lib$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PowerSelectMultiple = exports.TypeAhead = exports.PowerSelect = undefined;



var _PowerSelect2 = _interopRequireDefault(PowerSelect_1);



var _TypeAhead2 = _interopRequireDefault(TypeAhead_1);



var _SelectTrigger2 = _interopRequireDefault(SelectTrigger_1);



var _PowerSelectMultiple2 = _interopRequireDefault(PowerSelectMultiple_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_TypeAhead2.default.Trigger = _SelectTrigger2.default;

exports.PowerSelect = _PowerSelect2.default;
exports.TypeAhead = _TypeAhead2.default;
exports.PowerSelectMultiple = _PowerSelectMultiple2.default;
});

unwrapExports(lib$1);
var lib_1 = lib$1.PowerSelectMultiple;
var lib_2 = lib$1.TypeAhead;
var lib_3 = lib$1.PowerSelect;

//
// import 'react-power-select/dist/react-power-select.css'

// import { } from './styledComponents'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

var TESearchSelectInput = function TESearchSelectInput(props) {
    var type = props.type,
        value = props.value,
        rest = objectWithoutProperties(props, ['type', 'value']);


    if (type === 'single') {
        return React__default.createElement(lib_3, _extends({ selected: value }, rest));
    }
    if (type === 'multi') {
        return React__default.createElement(lib_1, _extends({ selected: value }, rest));
    }

    return React__default.createElement(lib_3, _extends({ selected: value }, rest));
};

TESearchSelectInput.propTypes = {
    type: PropTypes.string
};

TESearchSelectInput.defaultProps = {
    type: 'single',
    searchEnabled: true
};

//

// import { } from './styledComponents'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

var TESearchSelectRow = function TESearchSelectRow(props) {
    var size = props.size,
        last = props.last,
        className = props.className,
        title = props.title,
        labelForKey = props.labelForKey,
        rest = objectWithoutProperties(props, ['size', 'last', 'className', 'title', 'labelForKey']);


    return React__default.createElement(
        TERow,
        { size: size, last: last, className: className, required: rest.required },
        React__default.createElement(
            TELabel,
            { htmlFor: labelForKey, required: rest.required, disabled: rest.disabled },
            title
        ),
        React__default.createElement(TESearchSelectInput, _extends({ id: labelForKey }, rest))
    );
};

TESearchSelectRow.propTypes = {
    //Row
    size: PropTypes.string,
    last: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
    labelForKey: PropTypes.string
};

TESearchSelectRow.defaultProps = {
    type: 'single',
    searchEnabled: true
};

var _templateObject$h = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Row$2 = styled(TERow)(_templateObject$h, function (props) {
    var inline = props.inline;


    if (inline) {
        return '\n                display: flex;\n                justify-content: space-between;\n            ';
    } else {
        return '';
    }
});
var Label$5 = styled(TELabel)(_templateObject$h, function (props) {
    var inline = props.inline;


    return '\n            width: ' + (inline ? 'auto' : '100%') + ';\n            align-self: ' + (inline ? 'center' : 'auto') + ';\n            text-align: left;\n            display: block;\n            margin-bottom: ' + (inline ? '0px' : '5px') + ';\n            padding-right: ' + (inline ? '10px' : '0px') + ';\n            font-size: 18px;\n\n            @media (max-width: 550px) {\n                font-size: 16px;\n            }\n        ';
});
var SegmentedContainer = styled.div(_templateObject$h, function (props) {
    var inline = props.inline;


    if (inline) {
        return '\n                display: inline-block;\n                width: auto;\n                white-space: nowrap;\n                align-self: center;\n            ';
    } else {
        return '';
    }
});
var LabelWrapper = styled.div(_templateObject$h, function (props) {
    return '\n            display: inline-block;\n            width: auto;\n        ';
});
var Input$6 = styled(TERadioButtonInput)(_templateObject$h, function (props) {
    return '\n            display: none;\n        ';
});
var InputLabel = styled(TELabel)(_templateObject$h, function (props) {
    var first = props.first,
        last = props.last,
        checked = props.checked,
        disabled = props.disabled,
        theme = props.theme;

    var styles = '\n            display: inline-block;\n            width: auto;\n            border: 1px solid ' + (checked ? theme.primary : theme.lightGray) + ';\n            padding: 8px 15px;\n            margin: 0px;\n            background-color: ' + (checked ? theme.primary : theme.white) + ';\n            font-size: 14px;\n            color: ' + (checked ? theme.white : theme.darkGray) + '\n            cursor: ' + (disabled ? 'not-allowed' : 'pointer') + ';\n            pointer-events: ' + (disabled ? 'none' : 'auto') + ';\n\n            transition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;\n\n            :hover {\n                color: ' + (disabled && !checked ? theme.gray : theme.white) + ';\n                background-color: ' + (disabled && !checked ? theme.white : theme.primary) + ';\n                border: 1px solid ' + (disabled && !checked ? theme.lightGray : theme.primary) + ';\n            }\n            :active {\n                color: ' + (disabled && !checked ? theme.gray : theme.white) + ';\n                background-color: ' + (disabled && !checked ? theme.white : theme.primary) + ';\n                border: 1px solid ' + (disabled && !checked ? theme.lightGray : theme.primary) + ';\n            }\n        ';

    if (first) {
        styles += '\n                border-top-left-radius: 5px;\n                border-bottom-left-radius: 5px;\n            ';
    }
    if (last) {
        styles += '\n                border-top-right-radius: 5px;\n                border-bottom-right-radius: 5px;\n            ';
    }

    return styles;
});

//

var manipulateRowData$2 = function manipulateRowData(_ref) {
    var rowData = _ref.rowData,
        _ref$labelForKey = _ref.labelForKey,
        labelForKey = _ref$labelForKey === undefined ? '' : _ref$labelForKey;

    //Allowing For Greater Shorthand
    if (typeof rowData === 'string') {
        var label = rowData;
        var value = rowData;
        var key = labelForKey + rowData;
        return { label: label, value: value, key: key };
    } else if ((typeof rowData === 'undefined' ? 'undefined' : _typeof(rowData)) === 'object') {
        var _label = rowData.label,
            _rowData$value = rowData.value,
            _value = _rowData$value === undefined ? _label : _rowData$value,
            _rowData$key = rowData.key,
            _key = _rowData$key === undefined ? labelForKey + _label : _rowData$key;

        return { label: _label, value: _value, key: _key };
    }
    return rowData;
};
var TESegmentedGroup = function TESegmentedGroup(props) {
    var title = props.title,
        onChange = props.onChange,
        checkedValue = props.checkedValue,
        buttonArray = props.buttonArray,
        labelForKey = props.labelForKey,
        required = props.required,
        inline = props.inline,
        disabled = props.disabled,
        size = props.size,
        last = props.last,
        className = props.className;


    return React__default.createElement(
        Row$2,
        { size: size, last: last, inline: inline, className: className },
        React__default.createElement(
            Label$5,
            { inline: inline, required: required, disabled: disabled },
            title
        ),
        React__default.createElement(
            SegmentedContainer,
            { inline: inline },
            buttonArray && buttonArray.map(function (rowData, index) {
                var _manipulateRowData = manipulateRowData$2({ rowData: rowData, labelForKey: labelForKey }),
                    label = _manipulateRowData.label,
                    value = _manipulateRowData.value,
                    key = _manipulateRowData.key;

                return React__default.createElement(
                    LabelWrapper,
                    { key: key },
                    React__default.createElement(Input$6, {
                        value: value,
                        onChange: onChange,
                        id: key,
                        checked: checkedValue === value,
                        disabled: disabled
                    }),
                    React__default.createElement(
                        InputLabel,
                        {
                            htmlFor: key,
                            key: key,
                            first: index === 0,
                            last: index + 1 === buttonArray.length,
                            checked: checkedValue === value,
                            disabled: disabled
                        },
                        label
                    )
                );
            })
        )
    );
};

TESegmentedGroup.propTypes = {
    title: PropTypes.string,
    size: PropTypes.string,
    last: PropTypes.bool,
    inline: PropTypes.bool,
    onChange: PropTypes.func
};

var _templateObject$i = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Container$4 = styled.div(_templateObject$i, function (props) {
	var theme = props.theme,
	    wrapperHeight = props.wrapperHeight;

	return '\n\t\t\tdisplay: flex;\n\t\t\tflex-flow: row wrap;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: flex-start;\n\t\t\tpadding: 30px;\n\t\t\tbackground-color: ' + theme.lighterGray + ';\n\t\t\tmin-height: ' + (wrapperHeight ? 'calc(100vh - ' + wrapperHeight + 'px)' : '100%') + ';\n\n\t\t\t@media (max-width: 800px) {\n\t\t\t\tpadding: 25px;\n\t\t\t}\n\t\t\t@media (max-width: 650px) {\n\t\t\t\tpadding: 20px;\n\t\t\t}\n\t\t\t@media (max-width: 450px) {\n\t\t\t\tpadding: 15px;\n\t\t\t}\n\t\t';
});

//

var TEPannelWrapper = function TEPannelWrapper(props) {
  return React__default.createElement(Container$4, props);
};

var _templateObject$j = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Container$5 = styled.div(_templateObject$j, function (props) {
    var theme = props.theme;

    return '\n            width: 100%;\n            backgroundColor: ' + theme.white + ';\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding-bottom: 10px;\n            margin-bottom: 20px;\n            border-bottom: 1px solid ' + theme.lightGray + ';\n        ';
});
var Title = styled.h1(_templateObject$j, function (props) {
    var theme = props.theme;

    return '\n            text-align: left;\n            font-size: 30px;\n            margin-top: 0px;\n            margin-bottom: 0px;\n            color: ' + theme.primary + ';\n            line-height: 1;\n\n            @media (max-width: 1000px) {\n                font-size: 28px;\n            }\n            @media (max-width: 800px) {\n                font-size: 24px;\n            }\n            @media (max-width: 650px) {\n                font-size: 20px;\n            }\n        ';
});
var ComponentWrapper = styled.div(_templateObject$j, function (props) {
    return '\n            width: auto;\n        ';
});
var Subtitle = styled.h2(_templateObject$j, function (props) {
    return '\n            font-size: 18px;\n            margin-bottom: 0px;\n            margin-top: 0px;\n        ';
});

//

var TEPanelTitle = function TEPanelTitle(props) {
	var title = props.title,
	    leftComponent = props.leftComponent,
	    subtitle = props.subtitle,
	    rightComponent = props.rightComponent;


	return React__default.createElement(
		Container$5,
		null,
		title && React__default.createElement(
			Title,
			null,
			title
		),
		leftComponent && React__default.createElement(
			ComponentWrapper,
			null,
			leftComponent
		),
		subtitle && React__default.createElement(
			Subtitle,
			null,
			subtitle
		),
		rightComponent && React__default.createElement(
			ComponentWrapper,
			null,
			rightComponent
		)
	);
};

TEPanelTitle.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
};

var _templateObject$k = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Container$6 = styled.div(_templateObject$k, function (props) {
    var theme = props.theme,
        size = props.size;


    var styles = '\n            position: relative;\n            background-color: ' + theme.white + ';\n            border-radius: 5px;\n            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;\n\n            padding: 30px;\n            margin-bottom: 30px;\n\n            @media (max-width: 800px) {\n                padding: 25px;\n                margin-bottom: 25px;\n            }\n            @media (max-width: 650px) {\n                padding: 20px;\n                margin-bottom: 20px;\n            }\n            @media (max-width: 450px) {\n                padding: 15px;\n                margin-bottom: 15px;\n                border-radius: 3px;\n            }\n        ';

    switch (size) {
        case 'full':
            styles += 'width: 100%;';
            break;
        case 'two-third':
            styles += '\n                    width: calc(66.666% - 20px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
            break;
        case 'half':
            styles += '\n                    width: calc(50% - 15px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
            break;
        case 'third':
            styles += '\n                    width: calc(33.333% - 10px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
            break;
        default:
            styles += 'width: 100%;';
            break;
    }

    return styles;
});

//

var TEPanel = function TEPanel(props) {
    var size = props.size,
        className = props.className,
        title = props.title,
        leftComponent = props.leftComponent,
        subtitle = props.subtitle,
        rightComponent = props.rightComponent,
        children = props.children;

    return React__default.createElement(
        Container$6,
        { className: className, size: size },
        (title || leftComponent || subtitle || rightComponent) && React__default.createElement(TEPanelTitle, {
            title: title,
            leftComponent: leftComponent,
            subtitle: subtitle,
            rightComponent: rightComponent
        }),
        children
    );
};

TEPanel.propTypes = {
    size: PropTypes.string
};

TEPanel.defaultProps = {
    size: 'full'
};

var _templateObject$l = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var PanelWrapper = styled(TEPannelWrapper)(_templateObject$l, function (props) {
	return '\n\t\t\tjustify-content: center;\n\t\t';
});
var Panel = styled(TEPanel)(_templateObject$l, function (props) {
	return '\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 30px auto;\n\t\t';
});
var Title$1 = styled.h1(_templateObject$l, function (props) {
	return '\n\t\t\tmargin-top: 0px;\n\t\t\tmargin-bottom: 20px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 26px;\n\t\t';
});
var Message = styled.p(_templateObject$l, function (props) {
	return '\n\t\t\tmargin-top: 0px;\n\t\t\tmargin-bottom: 20px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 16px;\n\t\t';
});
var Button$1 = styled(TEButton)(_templateObject$l, function (props) {
	return '\n\t\t\tmargin: 10px auto;\n\t\t\twidth: auto;\n\t\t';
});

//

var TEErrorLoadingAlert = function TEErrorLoadingAlert(props) {
	var title = props.title,
	    message = props.message,
	    onClick = props.onClick,
	    buttonTitle = props.buttonTitle;

	return React__default.createElement(
		PanelWrapper,
		null,
		React__default.createElement(
			Panel,
			null,
			title && React__default.createElement(
				Title$1,
				null,
				title
			),
			message && React__default.createElement(
				Message,
				null,
				message
			),
			buttonTitle && React__default.createElement(
				Button$1,
				{ onClick: onClick },
				buttonTitle
			)
		)
	);
};

var _templateObject$m = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Container$7 = styled.div(_templateObject$m, function (props) {
    var theme = props.theme;

    return '\n            position: relative;\n            width: 100%;\n            background-color: ' + theme.white + ';\n            padding-left: 30px;\n            box-shadow: ' + theme.shadowBottom + ';\n\n            @media (max-width: 800px) {\n                padding-left: 25px;\n            }\n            @media (max-width: 650px) {\n                padding-left: 20px;\n            }\n            @media (max-width: 450px) {\n                padding-left: 15px;\n            }\n        ';
});
var Content$1 = styled.div(_templateObject$m, function (props) {
    return '\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            height: 80px;\n            padding-right: 30px;\n\n            @media (max-width: 800px) {\n                height: 70px;\n                padding-right: 25px;\n            }\n            @media (max-width: 650px) {\n                height: 65px;\n                padding-right: 20px;\n            }\n            @media (max-width: 450px) {\n                height: 60px;\n                padding-right: 15px;\n            }\n        ';
});
var Title$2 = styled.h1(_templateObject$m, function (props) {
    var theme = props.theme;

    return '\n            font-size: 36px;\n            margin-top: 0px;\n            margin-bottom: 0px;\n            color: ' + theme.primary + ';\n\n            @media (max-width: 1000px) {\n                font-size: 32px;\n            }\n            @media (max-width: 800px) {\n                font-size: 28px;\n            }\n            @media (max-width: 650px) {\n                font-size: 24px;\n            }\n            @media (max-width: 450px) {\n                font-size: 20px;\n            }\n        ';
});
var ComponentWrapper$1 = styled.div(_templateObject$m, function (props) {
    return '\n            width: auto;\n        ';
});
var Subtitle$1 = styled.h2(_templateObject$m, function (props) {
    return '\n            font-size: 22px;\n            margin-bottom: 0px;\n            margin-top: 0px;\n        ';
});

//

var TETitleBar = function TETitleBar(props) {
	var title = props.title,
	    leftComponent = props.leftComponent,
	    subtitle = props.subtitle,
	    rightComponent = props.rightComponent;


	return React__default.createElement(
		Container$7,
		null,
		React__default.createElement(
			Content$1,
			null,
			title && React__default.createElement(
				Title$2,
				null,
				title
			),
			leftComponent && React__default.createElement(
				ComponentWrapper$1,
				null,
				leftComponent
			),
			subtitle && React__default.createElement(
				Subtitle$1,
				null,
				subtitle
			),
			rightComponent && React__default.createElement(
				ComponentWrapper$1,
				null,
				rightComponent
			)
		)
	);
};

TETitleBar.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
};

var _templateObject$n = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var BodyContainer = styled.div(_templateObject$n, function (props) {
    var sidebarWidth = props.sidebarWidth;

    return '\n            position: relative;\n            width: calc(100% - ' + sidebarWidth + 'px);\n            min-height: 100%;\n            margin-left: ' + sidebarWidth + 'px;\n        ';
});

var TEBodyContainer = function TEBodyContainer(props) {
	var children = props.children,
	    rest = objectWithoutProperties(props, ['children']);

	return React__default.createElement(
		BodyContainer,
		rest,
		children
	);
};

TEBodyContainer.defaultProps = {
	sidebarWidth: 200
};

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof$2(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof$2(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

var isProduction = process.env.NODE_ENV === 'production';
function warning$2(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var isProduction$1 = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    process.env.NODE_ENV !== "production" ? warning$2(prompt == null, 'A history supports only one prompt at a time') : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          process.env.NODE_ENV !== "production" ? warning$2(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Browser history needs a DOM') : invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    process.env.NODE_ENV !== "production" ? warning$2(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning$2(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        process.env.NODE_ENV !== "production" ? warning$2(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? process.env.NODE_ENV !== "production" ? invariant(false, 'Hash history needs a DOM') : invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    process.env.NODE_ENV !== "production" ? warning$2(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning$2(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        process.env.NODE_ENV !== "production" ? warning$2(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning$2(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    process.env.NODE_ENV !== "production" ? warning$2(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    process.env.NODE_ENV !== "production" ? warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    process.env.NODE_ENV !== "production" ? warning$2(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant$1 = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant$1;

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends$4({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    invariant_1(children == null || React__default.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_1$1(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? React__default.Children.only(children) : null;
  };

  return Router;
}(React__default.Component);

Router.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.node
};
Router.contextTypes = {
  router: PropTypes.object
};
Router.childContextTypes = {
  router: PropTypes.object.isRequired
};

// Written in this round about way for babel-transform-imports

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits$1(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck$1(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createBrowserHistory(_this.props), _temp), _possibleConstructorReturn$1(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    warning_1$1(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return React__default.createElement(Router, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(React__default.Component);

BrowserRouter.propTypes = {
  basename: PropTypes.string,
  forceRefresh: PropTypes.bool,
  getUserConfirmation: PropTypes.func,
  keyLength: PropTypes.number,
  children: PropTypes.node
};

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits$2(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck$2(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHashHistory(_this.props), _temp), _possibleConstructorReturn$2(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning_1$1(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return React__default.createElement(Router, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(React__default.Component);

HashRouter.propTypes = {
  basename: PropTypes.string,
  getUserConfirmation: PropTypes.func,
  hashType: PropTypes.oneOf(["hashbang", "noslash", "slash"]),
  children: PropTypes.node
};

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits$3(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck$3(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn$3(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties$1(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    invariant_1(this.context.router, "You should not use <Link> outside a <Router>");

    invariant_1(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? createLocation(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return React__default.createElement("a", _extends$5({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(React__default.Component);

Link.propTypes = {
  onClick: PropTypes.func,
  target: PropTypes.string,
  replace: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  innerRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired,
      createHref: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits$4(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck$4(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$4(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createMemoryHistory(_this.props), _temp), _possibleConstructorReturn$4(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    warning_1$1(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return React__default.createElement(Router, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(React__default.Component);

MemoryRouter.propTypes = {
  initialEntries: PropTypes.array,
  initialIndex: PropTypes.number,
  getUserConfirmation: PropTypes.func,
  keyLength: PropTypes.number,
  children: PropTypes.node
};

// Written in this round about way for babel-transform-imports

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse$1;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse$1 (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse$1(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse$1(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = pathToRegexp_1(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isEmptyChildren = function isEmptyChildren(children) {
  return React__default.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits$5(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck$5(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends$6({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    invariant_1(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning_1$1(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    warning_1$1(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    warning_1$1(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning_1$1(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_1$1(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? React__default.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return React__default.Children.only(children);

    return null;
  };

  return Route;
}(React__default.Component);

Route.propTypes = {
  computedMatch: PropTypes.object, // private, from <Switch>
  path: PropTypes.string,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  sensitive: PropTypes.bool,
  component: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  location: PropTypes.object
};
Route.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    staticContext: PropTypes.object
  })
};
Route.childContextTypes = {
  router: PropTypes.object.isRequired
};

// Written in this round about way for babel-transform-imports

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties$2(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof$3(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return React__default.createElement(Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return React__default.createElement(Link, _extends$7({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends$7({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: Link.propTypes.to,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  location: PropTypes.object,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  activeStyle: PropTypes.object,
  style: PropTypes.object,
  isActive: PropTypes.func,
  "aria-current": PropTypes.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$6(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits$6(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck$6(this, Prompt);

    return _possibleConstructorReturn$6(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant_1(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(React__default.Component);

Prompt.propTypes = {
  when: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      block: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};

// Written in this round about way for babel-transform-imports

var patternCache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache$1[cacheKey] || (patternCache$1[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = pathToRegexp_1.compile(pattern);

  if (cacheCount$1 < cacheLimit$1) {
    cache[pattern] = compiledGenerator;
    cacheCount$1++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$7(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits$7(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck$7(this, Redirect);

    return _possibleConstructorReturn$7(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant_1(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = createLocation(prevProps.to);
    var nextTo = createLocation(this.props.to);

    if (locationsAreEqual(prevTo, nextTo)) {
      warning_1$1(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return generatePath(to, computedMatch.params);
      } else {
        return _extends$8({}, to, {
          pathname: generatePath(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(React__default.Component);

Redirect.propTypes = {
  computedMatch: PropTypes.object, // private, from <Switch>
  push: PropTypes.bool,
  from: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired,
    staticContext: PropTypes.object
  }).isRequired
};

// Written in this round about way for babel-transform-imports

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$8(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addLeadingSlash$1 = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends$9({}, location, {
    pathname: addLeadingSlash$1(basename) + location.pathname
  });
};

var stripBasename$1 = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash$1(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends$9({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    invariant_1(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits$8(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck$8(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash$1(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn$8(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    warning_1$1(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties$3(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename$1(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return React__default.createElement(Router, _extends$9({}, props, { history: history }));
  };

  return StaticRouter;
}(React__default.Component);

StaticRouter.propTypes = {
  basename: PropTypes.string,
  context: PropTypes.object.isRequired,
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: PropTypes.object.isRequired
};

// Written in this round about way for babel-transform-imports

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$9(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits$9(Switch, _React$Component);

  function Switch() {
    _classCallCheck$9(this, Switch);

    return _possibleConstructorReturn$9(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    invariant_1(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_1$1(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_1$1(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    React__default.Children.forEach(children, function (element) {
      if (match == null && React__default.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? React__default.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(React__default.Component);

Switch.contextTypes = {
  router: PropTypes.shape({
    route: PropTypes.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

// Written in this round about way for babel-transform-imports

// Written in this round about way for babel-transform-imports

// Written in this round about way for babel-transform-imports

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty$3 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty$3(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

var _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component$$1) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties$4(props, ["wrappedComponentRef"]);

    return React__default.createElement(Route, {
      children: function children(routeComponentProps) {
        return React__default.createElement(Component$$1, _extends$a({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component$$1.displayName || Component$$1.name) + ")";
  C.WrappedComponent = Component$$1;
  C.propTypes = {
    wrappedComponentRef: PropTypes.func
  };

  return hoistNonReactStatics_cjs(C, Component$$1);
};

// Written in this round about way for babel-transform-imports

var TERoute = function TERoute(props) {
  return React__default.createElement(Route, props);
};

var TESwitch = function TESwitch(props) {
  return React__default.createElement(Switch, props);
};

//

// import styles from './styles'

var TELink = function TELink(props) {
	var children = props.children,
	    rest = objectWithoutProperties(props, ['children']);

	return React__default.createElement(
		Link,
		rest,
		children
	);
};

//

// import styles from './styles'

var TENavLink = function TENavLink(props) {
	var children = props.children,
	    rest = objectWithoutProperties(props, ['children']);


	return React__default.createElement(
		NavLink,
		rest,
		children
	);
};

TENavLink.defaultProps = {
	activeClassName: 'active'
};

var _templateObject$o = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Li = styled.li(_templateObject$o, function (props) {
	return '\n            list-style: none;\n        ';
});
var Link$1 = styled(NavLink)(_templateObject$o, function (props) {
	var theme = props.theme;

	return '\n\t\t\tdisplay: block;\n\t\t\tcolor: ' + theme.darkGray + ';\n\t\t\tpadding: 15px 20px;\n\t\t\tcursor: pointer;\n\t\t\tborder-left: 5px solid transparent;\n\t\t\ttransition: color 0.2s ease-in, border 0.2s ease-in;\n\t\t\ttext-decoration: none;\n\n\t\t\t:active {\n\t\t\t\tcolor: ' + theme.primary + ';\n\t\t\t\tborder-color: ' + theme.primary + ';\n\t\t\t}\n\t\t\t:hover {\n\t\t\t\tcolor: ' + theme.primary + ';\n\t\t\t\tborder-color: ' + theme.primary + ';\n\t\t\t}\n\t\t\t&.active{\n\t\t\t\tcolor: ' + theme.primary + ';\n\t\t\t\tborder-color: ' + theme.primary + ';\n\t\t\t}\n        ';
});
var Title$3 = styled.span(_templateObject$o, function (props) {
	return '\n        \tfont-size: 18px;\n        ';
});

//

var TESideNavLink = function TESideNavLink(props) {
	var location = props.location,
	    title = props.title,
	    to = props.to,
	    children = props.children,
	    activePath = props.activePath,
	    exact = props.exact;


	return React__default.createElement(
		Li,
		null,
		React__default.createElement(
			Link$1,
			{
				isActive: function isActive() {
					return matchPath(location.pathname, { path: activePath || to, exact: exact });
				},
				activeClassName: 'active',
				to: to,
				exact: exact
			},
			title && React__default.createElement(
				Title$3,
				null,
				title
			),
			children
		)
	);
};

TESideNavLink.defaultProps = {
	exact: false
};

var _templateObject$p = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Container$8 = styled.div(_templateObject$p, function (props) {
	var theme = props.theme,
	    sidebarWidth = props.sidebarWidth;

	return '\n\t\t\tposition: fixed;\n\t\t\ttop: 0px;\n\t\t\tbottom: 0px;\n\t\t\tleft: 0px;\n\t\t\tmax-height: 100vh;\n\t\t\theight: 100%;\n\t\t\twidth: ' + sidebarWidth + 'px;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tz-index: 20;\n\t\t\tbackground-color: ' + theme.white + ';\n\t\t\toverflow-y: auto;\n\t\t\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px, rgba(0, 0, 0, 0.05) 1px 0px 5px 0px;\n\t\t';
});
var Logo = styled.img(_templateObject$p, function (props) {
	return '\n\t\t\tobject-fit: contain;\n\t\t\twidth: 100%;\n\t\t\tpadding: 30px 60px;\n\t\t';
});
var NavContainer = styled.div(_templateObject$p, function (props) {
	return '\n\t\t\theight: 100%;\n\t\t';
});
var MainUl = styled.ul(_templateObject$p, function (props) {
	return '\n\t\t\tmargin: 0px;\n\t\t\tpadding: 0px;\n\t\t';
});

var TESideNavbar = function TESideNavbar(props) {
	var sidebarWidth = props.sidebarWidth,
	    location = props.location,
	    logo = props.logo,
	    links = props.links;

	return React__default.createElement(
		Container$8,
		{ sidebarWidth: sidebarWidth },
		logo && React__default.createElement(
			Link,
			{ to: '/' },
			React__default.createElement(Logo, { src: logo, alt: 'brandmark', title: 'Rittal' })
		),
		React__default.createElement(
			NavContainer,
			null,
			React__default.createElement(
				MainUl,
				null,
				links && links.map(function (link, index) {
					var title = link.title,
					    activePath = link.activePath,
					    to = link.to,
					    children = link.children,
					    exact = link.exact;

					return React__default.createElement(
						TESideNavLink,
						{
							key: index,
							to: to,
							activePath: activePath || to,
							location: location,
							title: title,
							exact: exact
						},
						children
					);
				})
			)
		)
	);
};

TESideNavbar.defaultProps = {
	sidebarWidth: 200
};

var TESideNavbar$1 = withRouter(TESideNavbar);

var _templateObject$q = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Container$9 = styled.div(_templateObject$q, function (props) {
	var theme = props.theme;

	return '\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\tbackground-color: ' + theme.white + ';\n\t\t\tpadding-left: 30px;\n\t\t\tbox-shadow: ' + theme.shadowBottom + ';\n\t\t\tz-index: 5;\n\n\t\t\t@media (max-width: 800px) {\n\t\t\t\tpadding-left: 25px;\n\t\t\t}\n\t\t\t@media (max-width: 650px) {\n\t\t\t\tpadding-left: 20px;\n\t\t\t}\n\t\t\t@media (max-width: 450px) {\n\t\t\t\tpadding-left: 15px;\n\t\t\t}\n\t\t';
});
var Content$2 = styled.div(_templateObject$q, function (props) {
	var theme = props.theme;

	return '\n\t\t\tdisplay: flex;\n\t\t\talign-items: flex-end;\n\t\t\tjustify-content: space-between;\n\t\t\theight: 70px;\n\t\t\tborder-top: 1px solid ' + theme.lightGray + ';\n\t\t\tpadding-right: 30px;\n\n\t\t\t@media (max-width: 800px) {\n\t\t\t\theight: 65px;\n\t\t\t\tpadding-right: 25px;\n\t\t\t}\n\t\t\t@media (max-width: 650px) {\n\t\t\t\theight: 60px;\n\t\t\t\tpadding-right: 20px;\n\t\t\t}\n\t\t\t@media (max-width: 450px) {\n\t\t\t\theight: 55px;\n\t\t\t\tpadding-right: 15px;\n\t\t\t}\n\t\t';
});
var Ul = styled.ul(_templateObject$q, function (props) {
	return '\n\t\t\tmargin: 0px;\n\t\t\tpadding: 0px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-start;\n\t\t\talign-items: flex-end;\n\t\t\toverflow-x: auto;\n\t\t';
});
var Li$1 = styled.li(_templateObject$q, function (props) {
	return '\n\t\t\tlist-style: none;\n\t\t\twidth: 100px;\n\t\t\tflex-shrink: 0;\n\t\t';
});
var Link$2 = styled(NavLink)(_templateObject$q, function (props) {
	var theme = props.theme;

	return '\n\t\t\tdisplay: block;\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\tline-height: 40px;\n\t\t\tborder-bottom: 4px solid transparent;\n\t\t\tfont-size: 16px;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: ' + theme.darkerGray + ';\n\n\t\t\ttransition: border 0.2s ease-in, color 0.2s ease-in;\n\n\t\t\t:active {\n\t\t\t\tcolor: ' + theme.primary + ';\n\t\t\t\tborder-color: ' + theme.primary + ';\n\t\t\t}\n\t\t\t:hover {\n\t\t\t\tcolor: ' + theme.primary + ';\n\t\t\t\tborder-color: ' + theme.primary + ';\n\t\t\t}\n\t\t\t&.active{\n\t\t\t\tcolor: ' + theme.primary + ';\n\t\t\t\tborder-color: ' + theme.primary + ';\n\t\t\t}\n\t\t';
});

//

var TESubNavbar = function TESubNavbar(props) {
	var className = props.className,
	    links = props.links,
	    rightComponent = props.rightComponent,
	    rest = objectWithoutProperties(props, ['className', 'links', 'rightComponent']);


	return React__default.createElement(
		Container$9,
		{ className: className },
		React__default.createElement(
			Content$2,
			null,
			React__default.createElement(
				Ul,
				null,
				links && links.map(function (link, index) {
					var to = link.to,
					    title = link.title;

					return React__default.createElement(
						Li$1,
						{ key: index },
						React__default.createElement(
							Link$2,
							_extends({}, rest, { to: to }),
							title
						)
					);
				})
			),
			rightComponent
		)
	);
};

var _templateObject$r = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Popup$1 = styled(TEPopup)(_templateObject$r, function (props) {
    return '\n            & > div{\n                width: 90%;\n                max-width: 600px;\n                margin: 100px auto;\n            }\n        ';
});
var Title$4 = styled.h4(_templateObject$r, function (props) {
    var theme = props.theme;

    return '\n            position: relative;\n            width: 100%;\n            text-align: center;\n            font-size: 24px;\n            margin-bottom: 20px;\n            color: ' + theme.darkerGray + ';\n            padding: 30px 30px 0px 30px;\n        ';
});
var Message$1 = styled.p(_templateObject$r, function (props) {
    var theme = props.theme;

    return '\n            position: relative;\n            width: 100%;\n            text-align: center;\n            font-size: 18px;\n            line-height: 1.25;\n            margin-bottom: 30px;\n            padding: 0px 40px;\n            color: ' + theme.darkerGray + ';\n        ';
});
var Button$2 = styled(TEButton)(_templateObject$r, function (props) {
    var theme = props.theme;

    return '\n        border-top: 1px solid ' + theme.primary + ';\n        border-right: none;\n        border-bottom: none;\n        border-left: none;\n        line-height: 2;\n        border-top-left-radius: 0px;\n        border-top-right-radius: 0px;\n        border-bottom-left-radius: 20px;\n        border-bottom-right-radius: 20px;\n        transition: border 0.2s ease-in, color 0.2s ease-in, background-color 0.2s ease-in;\n\n        :active {\n            color: ' + theme.white + ';\n            background-color: ' + theme.primary + ';\n            border-top: 1px solid ' + theme.primary + ';\n            border-right: none;\n            border-bottom: none;\n            border-left: none;\n        }\n        :hover {\n            color: ' + theme.white + ';\n            background-color: ' + theme.primary + ';\n            border-top: 1px solid ' + theme.primary + ';\n            border-right: none;\n            border-bottom: none;\n            border-left: none;\n        }\n        ';
});

//

var TEAlert = function TEAlert(props) {
	var title = props.title,
	    message = props.message,
	    onClick = props.onClick,
	    buttonTitle = props.buttonTitle,
	    children = props.children,
	    visible = props.visible,
	    className = props.className;


	return React__default.createElement(
		Popup$1,
		{ visible: visible, className: className },
		React__default.createElement(
			Title$4,
			null,
			title
		),
		React__default.createElement(
			Message$1,
			null,
			message
		),
		children,
		React__default.createElement(
			Button$2,
			{ onClick: onClick },
			buttonTitle
		)
	);
};

TEAlert.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	buttonTitle: PropTypes.string
};

TEAlert.defaultProps = {
	buttonTitle: 'Okay'
};

var _templateObject$s = taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var Popup$2 = styled(TEPopup)(_templateObject$s, function (props) {
    return '\n            & > div{\n                width: 90%;\n                max-width: 600px;\n                margin: 100px auto;\n            }\n        ';
});
var Title$5 = styled.h4(_templateObject$s, function (props) {
    var theme = props.theme;

    return '\n            position: relative;\n            width: 100%;\n            text-align: center;\n            font-size: 24px;\n            margin-bottom: 20px;\n            color: ' + theme.darkerGray + ';\n            padding: 30px 30px 0px 30px;\n        ';
});
var Message$2 = styled.p(_templateObject$s, function (props) {
    var theme = props.theme;

    return '\n            position: relative;\n            width: 100%;\n            text-align: center;\n            font-size: 18px;\n            line-height: 1.25;\n            margin-bottom: 30px;\n            padding: 0px 40px;\n            color: ' + theme.darkerGray + ';\n        ';
});
var ButtonContainer$2 = styled.div(_templateObject$s, function (props) {
    return '\n            overflow: hidden;\n            display: flex;\n        ';
});
var LeftButton$1 = styled(TEButton)(_templateObject$s, function (props) {
    var theme = props.theme;

    return '\n            width: 50%;\n            font-size: 18px;\n            line-height: 2;\n            border-top-left-radius: 0px;\n            border-top-right-radius: 0px;\n            border-bottom-left-radius: 20px;\n            border-bottom-right-radius: 0px;\n            border-top: 1px solid ' + theme.primary + ';\n            border-right: 1px solid ' + theme.primary + ';\n            border-bottom: none;\n            border-left: none;\n\n            :hover {\n                color: ' + theme.white + ';\n                background-color: ' + theme.primary + ';\n                border-top: 1px solid ' + theme.primary + ';\n                border-right: 1px solid ' + theme.primary + ';\n                border-bottom: none;\n                border-left: none;\n            }\n            :active {\n                color: ' + theme.white + ';\n                background-color: ' + theme.primary + ';\n                border-top: 1px solid ' + theme.primary + ';\n                border-right: 1px solid ' + theme.primary + ';\n                border-bottom: none;\n                border-left: none;\n           }\n        ';
});
var RightButton$1 = styled(TEButton)(_templateObject$s, function (props) {
    var theme = props.theme;

    return '\n            width: 50%;\n            font-size: 18px;\n            line-height: 2;\n            border-top-left-radius: 0px;\n            border-top-right-radius: 0px;\n            border-bottom-left-radius: 0px;\n            border-bottom-right-radius: 20px;\n            border-top: 1px solid ' + theme.primary + ';\n            border-right: none;\n            border-bottom: none;\n            border-left: 1px solid ' + theme.primary + ';\n\n            :hover {\n                color: ' + theme.white + ';\n                background-color: ' + theme.primary + ';\n                border-top: 1px solid ' + theme.primary + ';\n                border-right: none;\n                border-bottom: none;\n                border-left: 1px solid ' + theme.primary + ';\n            }\n            :active {\n                color: ' + theme.white + ';\n                background-color: ' + theme.primary + ';\n                border-top: 1px solid ' + theme.primary + ';\n                border-right: none;\n                border-bottom: none;\n                border-left: 1px solid ' + theme.primary + ';\n           }\n        ';
});

//

var TEConfirm = function TEConfirm(props) {
	var title = props.title,
	    message = props.message,
	    leftOnClick = props.leftOnClick,
	    leftButtonTitle = props.leftButtonTitle,
	    rightOnClick = props.rightOnClick,
	    rightButtonTitle = props.rightButtonTitle,
	    children = props.children,
	    visible = props.visible,
	    className = props.className;


	return React__default.createElement(
		Popup$2,
		{ visible: visible, className: className },
		React__default.createElement(
			Title$5,
			null,
			title
		),
		React__default.createElement(
			Message$2,
			null,
			message
		),
		children,
		React__default.createElement(
			ButtonContainer$2,
			null,
			React__default.createElement(
				LeftButton$1,
				{ onClick: leftOnClick },
				leftButtonTitle
			),
			React__default.createElement(
				RightButton$1,
				{ onClick: rightOnClick },
				rightButtonTitle
			)
		)
	);
};

TEConfirm.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	leftOnClick: PropTypes.func.isRequired,
	leftButtonTitle: PropTypes.string,
	rightOnClick: PropTypes.func.isRequired,
	rightButtonTitle: PropTypes.string
};

TEConfirm.defaultProps = {
	leftButtonTitle: 'Cancel',
	rightButtonTitle: 'Confirm'
};

var _templateObject$t = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var colorBetweenColors = function colorBetweenColors(color1, color2, percBetween) {
	var hex = function hex(x) {
		x = x.toString(16);
		return x.length === 1 ? '0' + x : x;
	};
	var color1RGB = hexToRgb(color1);
	var color2RGB = hexToRgb(color2);

	var r = Math.ceil(color1RGB.r * percBetween + color2RGB.r * (1 - percBetween));
	var g = Math.ceil(color1RGB.g * percBetween + color2RGB.g * (1 - percBetween));
	var b = Math.ceil(color1RGB.b * percBetween + color2RGB.b * (1 - percBetween));

	return '#' + hex(r) + hex(g) + hex(b);
};

var hexToRgb = function hexToRgb(hex) {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
};
var calculateRingStyles = function calculateRingStyles(_ref) {
	var totalRings = _ref.totalRings,
	    ringNumber = _ref.ringNumber,
	    innerColor = _ref.innerColor,
	    outerColor = _ref.outerColor;

	var maxTime = 3;
	var minTime = 1;

	var stepPercent = 1 / totalRings / 2;
	var colorSteps = 1 / (totalRings - 1);

	var spacing = ringNumber * stepPercent;
	var timeStep = (maxTime - minTime) / totalRings;
	var thisTime = maxTime / (maxTime - timeStep * ringNumber);

	return '\n        left: ' + spacing * 100 + '%;\n        top: ' + spacing * 100 + '%;\n        width: ' + (1 - spacing * 2) * 100 + '%;\n        height: ' + (1 - spacing * 2) * 100 + '%;\n        border-top-color: ' + colorBetweenColors(innerColor, outerColor, colorSteps * ringNumber) + ';\n        animation: loading ' + thisTime + 's linear infinite;\n    ';
};

var Container$a = styled.div(_templateObject$t, function (props) {
	return '\n\t\t\ttext-align: center;\n\t\t';
});
var SpinnerWrapper = styled.div(_templateObject$t, function (props) {
	var size = props.size;


	var width = 80;
	var height = 80;
	switch (size) {
		case 'small':
			width = 40;
			height = 40;
			break;
		case 'medium':
			width = 60;
			height = 60;
			break;
		case 'large':
			width = 80;
			height = 80;
			break;
		default:
			break;
	}

	return '\n\t\t    position: relative;\n\t\t    width: ' + width + 'px;\n\t\t    height: ' + height + 'px;\n\t\t    display: inline-block;\n\t\t';
});
var Ring = styled.div(_templateObject$t, function (props) {
	var theme = props.theme,
	    ringNumber = props.ringNumber,
	    totalRings = props.totalRings,
	    innerColor = props.innerColor,
	    outerColor = props.outerColor;


	var styles = '\n\t\t    position: absolute;\n\t\t    border-radius: 50%;\n\t\t    overflow: hidden;\n\t\t    border-top: 3px solid transparent;\n\t\t    border-right: 1px solid transparent;\n\t\t    border-bottom: 1px solid transparent;\n\t\t    border-left: 1px solid transparent;\n\t\t';

	styles += calculateRingStyles({
		ringNumber: ringNumber,
		totalRings: totalRings,
		innerColor: innerColor || theme.white,
		outerColor: outerColor || theme.primary
	});

	return styles;
});

//

var TESpinner = function TESpinner(props) {
    var renderRings = function renderRings() {
        var size = props.size,
            innerColor = props.innerColor,
            outerColor = props.outerColor;

        var totalRings = 6;

        switch (size) {
            case 'small':
                totalRings = 4;
                break;
            case 'medium':
                totalRings = 5;
                break;
            case 'large':
                totalRings = 6;
                break;
            default:
                break;
        }

        var rings = [];
        for (var i = 0; i < totalRings; i++) {
            rings.push(React__default.createElement(Ring, {
                key: i,
                ringNumber: i,
                totalRings: totalRings,
                innerColor: innerColor,
                outerColor: outerColor
            }));
        }
        return rings;
    };

    var size = props.size,
        className = props.className;


    return React__default.createElement(
        Container$a,
        { className: className },
        React__default.createElement(
            SpinnerWrapper,
            { size: size },
            renderRings()
        )
    );
};

var _templateObject$u = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Popup$3 = styled(TEPopup)(_templateObject$u, function (props) {
	return '\n            & > div{\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\tbackground-color: rgba(0,0,0,0.5);\n\t\t\t\tpadding: 60px;\n\t\t\t\ttext-align: center;\n            }\n        ';
});
var Spinner = styled(TESpinner)(_templateObject$u, function (props) {
	return '\n            margin-bottom: 30px;\n        ';
});
var Message$3 = styled.p(_templateObject$u, function (props) {
	var theme = props.theme;

	return '\n\t\t\tposition: relative;\n\t\t\twidth: 100%;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 24px;\n\t\t\tmargin: 0px;\n\t\t\tcolor: ' + theme.white + ';\n\t\t';
});

//

var TENetworkActivity = function TENetworkActivity(props) {
	var visible = props.visible,
	    className = props.className,
	    message = props.message;


	return React__default.createElement(
		Popup$3,
		{ visible: visible, className: className },
		React__default.createElement(Spinner, { size: 'large' }),
		message && React__default.createElement(
			Message$3,
			null,
			message
		)
	);
};

TENetworkActivity.propTypes = {
	message: PropTypes.string
};

var _templateObject$v = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

var Popup$4 = styled(TEPopup)(_templateObject$v, function (props) {
	return '\n\t\t\t& > div{\n\t\t\t\twidth: 90%;\n\t\t\t\tmax-width: 900px;\n\t\t\t\tmargin: 100px auto;\n\t\t\t\tpadding: 30px;\n\t\t\t}\n\t\t';
});

//

var TEPopupMultiStepForm = function TEPopupMultiStepForm(props) {
	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		var onSubmit = props.onSubmit;

		onSubmit();
	};
	var visible = props.visible,
	    onClose = props.onClose,
	    className = props.className,
	    rest = objectWithoutProperties(props, ['visible', 'onClose', 'className']);


	return React__default.createElement(
		Popup$4,
		{ visible: visible, className: className },
		React__default.createElement(TEMultiStepForm, _extends({ onSubmit: handleSubmit, handleCancelOnClick: onClose }, rest))
	);
};

TEPopupMultiStepForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

TEPopupMultiStepForm.defaultProps = {
	visible: false
};

//

var ScrollToTop = function ScrollToTop(props) {
	var location = props.location,
	    children = props.children;


	useEffect(function () {
		window.scrollTo(0, 0);
	}, [location]);

	return children;
};

var TEScrollToTop = withRouter(ScrollToTop);

var exenv = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());
});

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }


var React__default$1 = _interopDefault$1(React__default);
var ExecutionEnvironment = _interopDefault$1(exenv);
var shallowEqual = _interopDefault$1(shallowequal);

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$a(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits$a(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck$a(this, SideEffect);

        return _possibleConstructorReturn$a(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default$1.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React__default.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

var lib$2 = withSideEffect;

var keys = createCommonjsModule(function (module, exports) {
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
});
var keys_1 = keys.shim;

var is_arguments = createCommonjsModule(function (module, exports) {
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}
exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
}});
var is_arguments_1 = is_arguments.supported;
var is_arguments_2 = is_arguments.unsupported;

var deepEqual_1 = createCommonjsModule(function (module) {
var pSlice = Array.prototype.slice;



var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
};

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (is_arguments(a)) {
    if (!is_arguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = keys(a),
        kb = keys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var HelmetConstants = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";
});

unwrapExports(HelmetConstants);
var HelmetConstants_1 = HelmetConstants.ATTRIBUTE_NAMES;
var HelmetConstants_2 = HelmetConstants.TAG_NAMES;
var HelmetConstants_3 = HelmetConstants.VALID_TAG_NAMES;
var HelmetConstants_4 = HelmetConstants.TAG_PROPERTIES;
var HelmetConstants_5 = HelmetConstants.REACT_TAG_MAP;
var HelmetConstants_6 = HelmetConstants.HELMET_PROPS;
var HelmetConstants_7 = HelmetConstants.HTML_TAG_MAP;
var HelmetConstants_8 = HelmetConstants.SELF_CLOSING_TAGS;
var HelmetConstants_9 = HelmetConstants.HELMET_ATTRIBUTE;

var HelmetUtils = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(React__default);



var _objectAssign2 = _interopRequireDefault(objectAssign);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(HelmetConstants.TAG_NAMES.LINK, [HelmetConstants.TAG_PROPERTIES.REL, HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(HelmetConstants.TAG_NAMES.META, [HelmetConstants.TAG_PROPERTIES.NAME, HelmetConstants.TAG_PROPERTIES.CHARSET, HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, HelmetConstants.TAG_PROPERTIES.PROPERTY, HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(HelmetConstants.TAG_NAMES.NOSCRIPT, [HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(HelmetConstants.TAG_NAMES.SCRIPT, [HelmetConstants.TAG_PROPERTIES.SRC, HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(HelmetConstants.TAG_NAMES.STYLE, [HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : commonjsGlobal.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : commonjsGlobal.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
});

unwrapExports(HelmetUtils);
var HelmetUtils_1 = HelmetUtils.warn;
var HelmetUtils_2 = HelmetUtils.requestAnimationFrame;
var HelmetUtils_3 = HelmetUtils.reducePropsToState;
var HelmetUtils_4 = HelmetUtils.mapStateOnServer;
var HelmetUtils_5 = HelmetUtils.handleClientStateChange;
var HelmetUtils_6 = HelmetUtils.convertReactPropstoHtmlAttributes;

var Helmet_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _reactSideEffect2 = _interopRequireDefault(lib$2);



var _deepEqual2 = _interopRequireDefault(deepEqual_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component$$1) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _deepEqual2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case HelmetConstants.TAG_NAMES.SCRIPT:
                case HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (process.env.NODE_ENV !== "production") {
                if (!HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, HelmetUtils.warn)("Only elements types " + HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case HelmetConstants.TAG_NAMES.LINK:
                    case HelmetConstants.TAG_NAMES.META:
                    case HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case HelmetConstants.TAG_NAMES.SCRIPT:
                    case HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component$$1, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
            * @param {Object} bodyAttributes: {"className": "root"}
            * @param {String} defaultTitle: "Default Title"
            * @param {Boolean} defer: true
            * @param {Boolean} encodeSpecialCharacters: true
            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
            * @param {String} title: "Title"
            * @param {Object} titleAttributes: {"itemprop": "name"}
            * @param {String} titleTemplate: "MySite.com - %s"
            */
            set: function set(canUseDOM) {
                Component$$1.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component$$1.peek, _class.rewind = function () {
        var mappedState = Component$$1.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(HelmetUtils.reducePropsToState, HelmetUtils.handleClientStateChange, HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;
});

unwrapExports(Helmet_1);
var Helmet_2 = Helmet_1.Helmet;

//

var TEHelmet = function TEHelmet(props) {
    var _props$charSet = props.charSet,
        charSet = _props$charSet === undefined ? 'utf-8' : _props$charSet,
        _props$title = props.title,
        title = _props$title === undefined ? '' : _props$title,
        _props$description = props.description,
        description = _props$description === undefined ? '' : _props$description,
        rest = objectWithoutProperties(props, ['charSet', 'title', 'description']);


    return React__default.createElement(Helmet_2, _extends({
        title: title,
        meta: [{
            name: 'charSet',
            content: charSet
        }, {
            name: 'description',
            content: description
        }]
    }, rest));
};

TEHelmet.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

var _templateObject$w = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']);

// import 'react-datepicker/dist/react-datepicker.css'

//Using Styled Components Context Instead
// export const TEThemeContext = createContext()

var initialTheme = {
	white: '#FFFFFF',
	lightestGray: '#F7F7F7',
	lighterGray: '#F4F4F4',
	lightGray: '#E5E5E5',
	gray: '#C5C5C5',
	darkGray: '#A4A4A4',
	darkerGray: '#5E5E5E',
	black: '#39444C',

	primary: '#007CC3',
	secondary: '#4ADEC2',

	shadowBottom: 'rgba(0, 0, 0, 0.1) 0px 15px 15px -15px, rgba(0, 0, 0, 0.05) 0px 5px 5px -5px',
	shadowTop: 'rgba(0, 0, 0, 0.1) 0px -15px 15px -15px, rgba(0, 0, 0, 0.05) 0px -5px 5px -5px',
	shadowRight: 'rgba(0, 0, 0, 0.1) 15px 0px 15px -15px, rgba(0, 0, 0, 0.05) 5px 0px 5px -5px',
	shadowCenter: 'rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px'

	//
	//TODO: Decide how to integrate base styles and my styles
	//
	//NOTE:
	//PowerSelect
	// - At this moment there is no way to style the dropdown component with styled components.
	//
	//DatePicker
	// - At this moment there is no other way to style the wrapper components on this input.
	//
};var GlobalStyles = createGlobalStyle(_templateObject$w, function (props) {
	var theme = props.theme;
	var globalStyles = theme.globalStyles;


	return '\n\t\t\t& * {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\t/*\n\t\t\t*\n\t\t\t* React Power Select\n\t\t\t*\n\t\t\t*/\n\t\t\t.PowerSelect {\n\t\t\t\tposition: relative;\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tbackground-color: ' + theme.white + ';\n\t\t\t\tborder: 1px solid ' + theme.lightGray + ';\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t\t\t}\n\t\t\t.PowewrSelect * {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\t\t\t.PowerSelect.white-border {\n\t\t\t\tborder: 1px solid ' + theme.white + ';\n\t\t\t}\n\t\t\t.PowerSelect:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t.PowerSelect--focused {\n\t\t\t}\n\t\t\t.PowerSelect--disabled {\n\t\t\t\tbackground-color: ' + theme.lighterGray + ';\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\t\t\t.PowerSelect--disabled .PowerSelect__Trigger {\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t\t.PowerSelect--disabled .PowerSelect__TriggerInput {\n\t\t\t\tbackground-color: ' + theme.lighterGray + ';\n\t\t\t}\n\t\t\t.PowerSelect--open {\n\t\t\t\tborder-bottom-right-radius: 0;\n\t\t\t\tborder-bottom-left-radius: 0;\n\t\t\t\tborder-bottom: 0;\n\t\t\t}\n\t\t\t.PowerSelect--open .PowerSelect__TriggerStatus:before {\n\t\t\t\ttransform: rotate(-180deg);\n\t\t\t}\n\t\t\t.PowerSelect__Trigger {\n\t\t\t\tposition: relative;\n\t\t\t\theight: 39px;\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t}\n\t\t\t.PowerSelect__Menu {\n\t\t\t\tbackground-color: ' + theme.white + ';\n\t\t\t\tborder: 1px solid ' + theme.lightGray + ';\n\t\t\t}\n\t\t\t.PowerSelect__Menu.white-border__Menu {\n\t\t\t\tborder: none;\n\t\t\t\tborder-top: 1px solid #a0a0a0;\n\t\t\t}\n\t\t\t.PowerSelect__Menu:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t.PowerSelect__Options {\n\t\t\t\tposition: relative;\n\t\t\t\tmax-height: 238px;\n\t\t\t\toverflow: auto;\n\t\t\t}\n\t\t\t.PowerSelect__OptGroup {\n\t\t\t\tpadding-left: 8px;\n\t\t\t}\n\t\t\t.PowerSelect__OptGroup__Label {\n\t\t\t\tfont-weight: 700;\n\t\t\t\tfont-size: 0.9em;\n\t\t\t\tcolor: ' + theme.darkerGray + ';\n\t\t\t\tpadding: 8px 0 4px;\n\t\t\t}\n\t\t\t.PowerSelect__Option {\n\t\t\t\tcursor: pointer;\n\t\t\t\tpadding: 8px 12px;\n\t\t\t}\n\t\t\t.PowerSelect__Option:not(.PowerSelect__Option--disabled):hover {\n\t\t\t\tbackground-color: rgba(55, 50, 117 0.5);\n\t\t\t}\n\t\t\t.PowerSelect__Option--disabled {\n\t\t\t\tcolor: ' + theme.darkGray + ';\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\t\t\t.PowerSelect__Option--highlighted {\n\t\t\t\tbackground-color: ' + theme.lighterGray + ';\n\t\t\t}\n\t\t\t.PowerSelect__BeforeOptions {\n\t\t\t\tpadding: 8px 12px;\n\t\t\t}\n\t\t\t.PowerSelect__Placeholder {\n\t\t\t\tcolor: ' + theme.gray + ';\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t\t.PowerSelect__SearchInputContainer {\n\t\t\t\tpadding: 8px;\n\t\t\t}\n\t\t\t.PowerSelect__SearchInput {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 34px;\n\t\t\t\tpadding: 4px 8px;\n\t\t\t\tline-height: 1.4;\n\t\t\t\tfont-size: inherit;\n\t\t\t\tborder: 1px solid ' + theme.gray + ';\n\t\t\t\tborder-radius: 2px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\t\t\t.PowerSelect__SearchInput:focus {\n\t\t\t\tborder-color: ' + theme.primary + ';\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t.PowerSelect__TriggerInput {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 34px;\n\t\t\t\tborder: none;\n\t\t\t\tcursor: pointer;\n\t\t\t\tpadding: 4px 22px 4px 8px;\n\t\t\t\tfont-size: inherit;\n\t\t\t}\n\t\t\t.PowerSelect__TriggerInput:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t\t.PowerSelect__Trigger__LHS,\n\t\t\t.PowerSelect__Trigger__RHS {\n\t\t\t\tdisplay: table-cell;\n\t\t\t\tvertical-align: middle;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\t\t\t.PowerSelect__Trigger__LHS {\n\t\t\t\tpadding-left: 8px;\n\t\t\t\tpadding-right: 4px;\n\t\t\t}\n\t\t\t.PowerSelect__Trigger__RHS {\n\t\t\t\tpadding-right: 4px;\n\t\t\t\tpadding-left: 4px;\n\t\t\t}\n\t\t\t.PowerSelect__TriggerLabel {\n\t\t\t\tpadding: 6px 22px 6px 8px;\n\t\t\t\tcolor: ' + theme.darkerGray + ';\n\t\t\t}\n\t\t\t.PowerSelect__Trigger__LHS + .PowerSelect__TriggerLabel {\n\t\t\t\tpadding-left: 4px;\n\t\t\t}\n\t\t\t.PowerSelect__TriggerStatus {\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tpadding-right: 8px;\n\t\t\t\tpadding-left: 4px;\n\t\t\t}\n\t\t\t.PowerSelect__TriggerStatus:before {\n\t\t\t\tcontent: \'\';\n\t\t\t\tdisplay: block;\n\t\t\t\tborder-top: 4px solid ' + theme.primary + ';\n\t\t\t\tborder-left: 4px solid transparent;\n\t\t\t\tborder-right: 4px solid transparent;\n\t\t\t}\n\t\t\t.PowerSelect__Clear {\n\t\t\t\tpadding: 4px;\n\t\t\t\tcolor: ' + theme.gray + ';\n\t\t\t}\n\t\t\t.PowerSelect__Clear:hover {\n\t\t\t\tcolor: ' + theme.darkerGay + ';\n\t\t\t}\n\t\t\t.PowerSelect__Clear:before {\n\t\t\t\tcontent: "\\D7";\n\t\t\t}\n\t\t\t.PowerSelect__Trigger--empty .PowerSelect__Clear {\n\t\t\t\tvisibility: hidden;\n\t\t\t}\n\t\t\t.PowerSelect__Clear,\n\t\t\t.PowerSelect__TriggerInputContainer,\n\t\t\t.PowerSelect__TriggerLabel,\n\t\t\t.PowerSelect__TriggerStatus,\n\t\t\t.PowerSelectMultiple__OptionsContainer {\n\t\t\t\tdisplay: table-cell;\n\t\t\t\twidth: 100%;\n\t\t\t\tvertical-align: middle;\n\t\t\t\theight: 39px;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__OptionsContainer {\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tpadding-bottom: 2px;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__SelectedOptions {\n\t\t\t\tlist-style: none;\n\t\t\t\tpadding-left: 0;\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__SelectedOptions:after {\n\t\t\t\tcontent: \'\';\n\t\t\t\tdisplay: table;\n\t\t\t\tclear: both;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__SelectedOptions > li {\n\t\t\t\tdisplay: block;\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-top: 2px;\n\t\t\t\tmargin-bottom: 2px;\n\t\t\t}\n\t\t\t.PowerSelect__Trigger--empty .PowerSelectMultiple_TriggerInputContainer {\n\t\t\t\tfloat: none;\n\t\t\t\tmargin-left: 4px;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__SelectedOption {\n\t\t\t\tline-height: 29px;\n\t\t\t\tmargin-left: 4px;\n\t\t\t\tbackground-color: #ebeeff;\n\t\t\t\tborder: 1px solid #c6cfff;\n\t\t\t\tcolor: ' + theme.darkerGray + '\n\t\t\t\tborder-radius: 3px;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__SelectedOption__Close,\n\t\t\t.PowerSelectMultiple__SelectedOption__Label {\n\t\t\t\tpadding: 0 6px;\n\t\t\t\tdisplay: block;\n\t\t\t\tfloat: left;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__SelectedOption__Close {\n\t\t\t\tborder-left: 1px solid #c6cfff;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.PowerSelectMultiple__SelectedOption__Close:hover {\n\t\t\t\tbackground-color: #dce1ff;\n\t\t\t}\n\t\t\t.PowerSelectMultiple .PowerSelect__Trigger {\n\t\t\t\twhite-space: normal;\n\t\t\t\theight: auto;\n\t\t\t}\n\t\t\t.PowerSelectMultiple .PowerSelect__TriggerInput {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: auto;\n\t\t\t\tpadding: 0;\n\t\t\t\theight: 26px;\n\t\t\t\tmargin-left: 4px;\n\t\t\t}\n\t\t\t.PowerSelectMultiple .PowerSelect__Trigger--empty .PowerSelect__TriggerInput {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t.tether-element {\n\t\t\t\tz-index: 1000;\n\t\t\t}\n\n\t\t\t/*\n\t\t\t*\n\t\t\t* React DatePicker Base\n\t\t\t*\n\t\t\t*/\n\n\t\t\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__month-read-view--down-arrow,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow {\n\t\t\t  margin-left: -8px;\n\t\t\t  position: absolute;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__month-read-view--down-arrow,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\t\t  box-sizing: content-box;\n\t\t\t  position: absolute;\n\t\t\t  border: 8px solid transparent;\n\t\t\t  height: 0;\n\t\t\t  width: 1px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\t\t  content: "";\n\t\t\t  z-index: -1;\n\t\t\t  border-width: 8px;\n\t\t\t  left: -8px;\n\t\t\t  border-bottom-color: #aeaeae;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {\n\t\t\t  top: 0;\n\t\t\t  margin-top: -8px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {\n\t\t\t  border-top: none;\n\t\t\t  border-bottom-color: #f0f0f0;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {\n\t\t\t  top: -1px;\n\t\t\t  border-bottom-color: #aeaeae;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__month-read-view--down-arrow,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow {\n\t\t\t  bottom: 0;\n\t\t\t  margin-bottom: -8px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__month-read-view--down-arrow,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\t\t  border-bottom: none;\n\t\t\t  border-top-color: #fff;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-read-view--down-arrow::before,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\t\t  bottom: -1px;\n\t\t\t  border-top-color: #aeaeae;\n\t\t\t}\n\n\t\t\t.react-datepicker-wrapper {\n\t\t\t  display: inline-block;\n\t\t\t}\n\n\t\t\t.react-datepicker {\n\t\t\t  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n\t\t\t  font-size: 0.8rem;\n\t\t\t  background-color: #fff;\n\t\t\t  color: #000;\n\t\t\t  border: 1px solid #aeaeae;\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  display: inline-block;\n\t\t\t  position: relative;\n\t\t\t}\n\n\t\t\t.react-datepicker--time-only .react-datepicker__triangle {\n\t\t\t  left: 35px;\n\t\t\t}\n\n\t\t\t.react-datepicker--time-only .react-datepicker__time-container {\n\t\t\t  border-left: 0;\n\t\t\t}\n\n\t\t\t.react-datepicker--time-only .react-datepicker__time {\n\t\t\t  border-radius: 0.3rem;\n\t\t\t}\n\n\t\t\t.react-datepicker--time-only .react-datepicker__time-box {\n\t\t\t  border-radius: 0.3rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__triangle {\n\t\t\t  position: absolute;\n\t\t\t  left: 50px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper {\n\t\t\t  z-index: 1;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="bottom"] {\n\t\t\t  margin-top: 10px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="top"] {\n\t\t\t  margin-bottom: 10px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="right"] {\n\t\t\t  margin-left: 8px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {\n\t\t\t  left: auto;\n\t\t\t  right: 42px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="left"] {\n\t\t\t  margin-right: 8px;\n\t\t\t}\n\n\t\t\t.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {\n\t\t\t  left: 42px;\n\t\t\t  right: auto;\n\t\t\t}\n\n\t\t\t.react-datepicker__header {\n\t\t\t  text-align: center;\n\t\t\t  background-color: #f0f0f0;\n\t\t\t  border-bottom: 1px solid #aeaeae;\n\t\t\t  border-top-left-radius: 0.3rem;\n\t\t\t  border-top-right-radius: 0.3rem;\n\t\t\t  padding-top: 8px;\n\t\t\t  position: relative;\n\t\t\t}\n\n\t\t\t.react-datepicker__header--time {\n\t\t\t  padding-bottom: 8px;\n\t\t\t  padding-left: 5px;\n\t\t\t  padding-right: 5px;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-dropdown-container--select,\n\t\t\t.react-datepicker__month-dropdown-container--select,\n\t\t\t.react-datepicker__month-year-dropdown-container--select,\n\t\t\t.react-datepicker__year-dropdown-container--scroll,\n\t\t\t.react-datepicker__month-dropdown-container--scroll,\n\t\t\t.react-datepicker__month-year-dropdown-container--scroll {\n\t\t\t  display: inline-block;\n\t\t\t  margin: 0 2px;\n\t\t\t}\n\n\t\t\t.react-datepicker__current-month,\n\t\t\t.react-datepicker-time__header {\n\t\t\t  margin-top: 0;\n\t\t\t  color: #000;\n\t\t\t  font-weight: bold;\n\t\t\t  font-size: 0.944rem;\n\t\t\t}\n\n\t\t\t.react-datepicker-time__header {\n\t\t\t  text-overflow: ellipsis;\n\t\t\t  white-space: nowrap;\n\t\t\t  overflow: hidden;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation {\n\t\t\t  background: none;\n\t\t\t  line-height: 1.7rem;\n\t\t\t  text-align: center;\n\t\t\t  cursor: pointer;\n\t\t\t  position: absolute;\n\t\t\t  top: 10px;\n\t\t\t  width: 0;\n\t\t\t  padding: 0;\n\t\t\t  border: 0.45rem solid transparent;\n\t\t\t  z-index: 1;\n\t\t\t  height: 10px;\n\t\t\t  width: 10px;\n\t\t\t  text-indent: -999em;\n\t\t\t  overflow: hidden;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--previous {\n\t\t\t  left: 10px;\n\t\t\t  border-right-color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--previous:hover {\n\t\t\t  border-right-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {\n\t\t\t  border-right-color: #e6e6e6;\n\t\t\t  cursor: default;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--next {\n\t\t\t  right: 10px;\n\t\t\t  border-left-color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n\t\t\t  right: 80px;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--next:hover {\n\t\t\t  border-left-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {\n\t\t\t  border-left-color: #e6e6e6;\n\t\t\t  cursor: default;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--years {\n\t\t\t  position: relative;\n\t\t\t  top: 0;\n\t\t\t  display: block;\n\t\t\t  margin-left: auto;\n\t\t\t  margin-right: auto;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--years-previous {\n\t\t\t  top: 4px;\n\t\t\t  border-top-color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--years-previous:hover {\n\t\t\t  border-top-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--years-upcoming {\n\t\t\t  top: -4px;\n\t\t\t  border-bottom-color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__navigation--years-upcoming:hover {\n\t\t\t  border-bottom-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__month-container {\n\t\t\t  float: left;\n\t\t\t}\n\n\t\t\t.react-datepicker__month {\n\t\t\t  margin: 0.4rem;\n\t\t\t  text-align: center;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container {\n\t\t\t  clear: both;\n\t\t\t  width: 100%;\n\t\t\t  float: left;\n\t\t\t  margin: 5px 0 10px 15px;\n\t\t\t  text-align: left;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__caption {\n\t\t\t  display: inline-block;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__input-container {\n\t\t\t  display: inline-block;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\n\t\t\t  display: inline-block;\n\t\t\t  margin-left: 10px;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\n\t\t\t  width: 85px;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button,\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button {\n\t\t\t  -webkit-appearance: none;\n\t\t\t  margin: 0;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] {\n\t\t\t  -moz-appearance: textfield;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\n\t\t\t  margin-left: 5px;\n\t\t\t  display: inline-block;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container {\n\t\t\t  float: right;\n\t\t\t  border-left: 1px solid #aeaeae;\n\t\t\t  width: 70px;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container--with-today-button {\n\t\t\t  display: inline;\n\t\t\t  border: 1px solid #aeaeae;\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  position: absolute;\n\t\t\t  right: -72px;\n\t\t\t  top: 0;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time {\n\t\t\t  position: relative;\n\t\t\t  background: white;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n\t\t\t  width: 70px;\n\t\t\t  overflow-x: hidden;\n\t\t\t  margin: 0 auto;\n\t\t\t  text-align: center;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n\t\t\t  list-style: none;\n\t\t\t  margin: 0;\n\t\t\t  height: calc(195px + (1.7rem / 2));\n\t\t\t  overflow-y: scroll;\n\t\t\t  padding-right: 0px;\n\t\t\t  padding-left: 0px;\n\t\t\t  width: 100%;\n\t\t\t  box-sizing: content-box;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n\t\t\t  height: 30px;\n\t\t\t  padding: 5px 10px;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n\t\t\t  cursor: pointer;\n\t\t\t  background-color: #f0f0f0;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n\t\t\t  background-color: #216ba5;\n\t\t\t  color: white;\n\t\t\t  font-weight: bold;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n\t\t\t  background-color: #216ba5;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n\t\t\t  color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n\t\t\t  cursor: default;\n\t\t\t  background-color: transparent;\n\t\t\t}\n\n\t\t\t.react-datepicker__week-number {\n\t\t\t  color: #ccc;\n\t\t\t  display: inline-block;\n\t\t\t  width: 1.7rem;\n\t\t\t  line-height: 1.7rem;\n\t\t\t  text-align: center;\n\t\t\t  margin: 0.166rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__week-number.react-datepicker__week-number--clickable {\n\t\t\t  cursor: pointer;\n\t\t\t}\n\n\t\t\t.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  background-color: #f0f0f0;\n\t\t\t}\n\n\t\t\t.react-datepicker__day-names,\n\t\t\t.react-datepicker__week {\n\t\t\t  white-space: nowrap;\n\t\t\t}\n\n\t\t\t.react-datepicker__day-name,\n\t\t\t.react-datepicker__day,\n\t\t\t.react-datepicker__time-name {\n\t\t\t  color: #000;\n\t\t\t  display: inline-block;\n\t\t\t  width: 1.7rem;\n\t\t\t  line-height: 1.7rem;\n\t\t\t  text-align: center;\n\t\t\t  margin: 0.166rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__day {\n\t\t\t  cursor: pointer;\n\t\t\t}\n\n\t\t\t.react-datepicker__day:hover {\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  background-color: #f0f0f0;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--today {\n\t\t\t  font-weight: bold;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--highlighted {\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  background-color: #3dcc4a;\n\t\t\t  color: #fff;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--highlighted:hover {\n\t\t\t  background-color: #32be3f;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--highlighted-custom-1 {\n\t\t\t  color: magenta;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--highlighted-custom-2 {\n\t\t\t  color: green;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  background-color: #216ba5;\n\t\t\t  color: #fff;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {\n\t\t\t  background-color: #1d5d90;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--keyboard-selected {\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  background-color: #2a87d0;\n\t\t\t  color: #fff;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--keyboard-selected:hover {\n\t\t\t  background-color: #1d5d90;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {\n\t\t\t  background-color: rgba(33, 107, 165, 0.5);\n\t\t\t}\n\n\t\t\t.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {\n\t\t\t  background-color: #f0f0f0;\n\t\t\t  color: #000;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--disabled {\n\t\t\t  cursor: default;\n\t\t\t  color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--disabled:hover {\n\t\t\t  background-color: transparent;\n\t\t\t}\n\n\t\t\t.react-datepicker__input-container {\n\t\t\t  position: relative;\n\t\t\t  display: inline-block;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-read-view,\n\t\t\t.react-datepicker__month-read-view,\n\t\t\t.react-datepicker__month-year-read-view {\n\t\t\t  border: 1px solid transparent;\n\t\t\t  border-radius: 0.3rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-read-view:hover,\n\t\t\t.react-datepicker__month-read-view:hover,\n\t\t\t.react-datepicker__month-year-read-view:hover {\n\t\t\t  cursor: pointer;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n\t\t\t.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n\t\t\t.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n\t\t\t  border-top-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-read-view--down-arrow,\n\t\t\t.react-datepicker__month-read-view--down-arrow,\n\t\t\t.react-datepicker__month-year-read-view--down-arrow {\n\t\t\t  border-top-color: #ccc;\n\t\t\t  float: right;\n\t\t\t  margin-left: 20px;\n\t\t\t  top: 8px;\n\t\t\t  position: relative;\n\t\t\t  border-width: 0.45rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-dropdown,\n\t\t\t.react-datepicker__month-dropdown,\n\t\t\t.react-datepicker__month-year-dropdown {\n\t\t\t  background-color: #f0f0f0;\n\t\t\t  position: absolute;\n\t\t\t  width: 50%;\n\t\t\t  left: 25%;\n\t\t\t  top: 30px;\n\t\t\t  z-index: 1;\n\t\t\t  text-align: center;\n\t\t\t  border-radius: 0.3rem;\n\t\t\t  border: 1px solid #aeaeae;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-dropdown:hover,\n\t\t\t.react-datepicker__month-dropdown:hover,\n\t\t\t.react-datepicker__month-year-dropdown:hover {\n\t\t\t  cursor: pointer;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-dropdown--scrollable,\n\t\t\t.react-datepicker__month-dropdown--scrollable,\n\t\t\t.react-datepicker__month-year-dropdown--scrollable {\n\t\t\t  height: 150px;\n\t\t\t  overflow-y: scroll;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-option,\n\t\t\t.react-datepicker__month-option,\n\t\t\t.react-datepicker__month-year-option {\n\t\t\t  line-height: 20px;\n\t\t\t  width: 100%;\n\t\t\t  display: block;\n\t\t\t  margin-left: auto;\n\t\t\t  margin-right: auto;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-option:first-of-type,\n\t\t\t.react-datepicker__month-option:first-of-type,\n\t\t\t.react-datepicker__month-year-option:first-of-type {\n\t\t\t  border-top-left-radius: 0.3rem;\n\t\t\t  border-top-right-radius: 0.3rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-option:last-of-type,\n\t\t\t.react-datepicker__month-option:last-of-type,\n\t\t\t.react-datepicker__month-year-option:last-of-type {\n\t\t\t  -webkit-user-select: none;\n\t\t\t  -moz-user-select: none;\n\t\t\t  -ms-user-select: none;\n\t\t\t  user-select: none;\n\t\t\t  border-bottom-left-radius: 0.3rem;\n\t\t\t  border-bottom-right-radius: 0.3rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-option:hover,\n\t\t\t.react-datepicker__month-option:hover,\n\t\t\t.react-datepicker__month-year-option:hover {\n\t\t\t  background-color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n\t\t\t.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n\t\t\t.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n\t\t\t  border-bottom-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n\t\t\t.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n\t\t\t.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n\t\t\t  border-top-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__year-option--selected,\n\t\t\t.react-datepicker__month-option--selected,\n\t\t\t.react-datepicker__month-year-option--selected {\n\t\t\t  position: absolute;\n\t\t\t  left: 15px;\n\t\t\t}\n\n\t\t\t.react-datepicker__close-icon {\n\t\t\t  background-color: transparent;\n\t\t\t  border: 0;\n\t\t\t  cursor: pointer;\n\t\t\t  outline: 0;\n\t\t\t  padding: 0;\n\t\t\t  vertical-align: middle;\n\t\t\t  position: absolute;\n\t\t\t  height: 16px;\n\t\t\t  width: 16px;\n\t\t\t  top: 25%;\n\t\t\t  right: 7px;\n\t\t\t}\n\n\t\t\t.react-datepicker__close-icon::after {\n\t\t\t  background-color: #216ba5;\n\t\t\t  border-radius: 50%;\n\t\t\t  bottom: 0;\n\t\t\t  box-sizing: border-box;\n\t\t\t  color: #fff;\n\t\t\t  content: "\0d7";\n\t\t\t  cursor: pointer;\n\t\t\t  font-size: 12px;\n\t\t\t  height: 16px;\n\t\t\t  width: 16px;\n\t\t\t  line-height: 1;\n\t\t\t  margin: -8px auto 0;\n\t\t\t  padding: 2px;\n\t\t\t  position: absolute;\n\t\t\t  right: 0px;\n\t\t\t  text-align: center;\n\t\t\t}\n\n\t\t\t.react-datepicker__today-button {\n\t\t\t  background: #f0f0f0;\n\t\t\t  border-top: 1px solid #aeaeae;\n\t\t\t  cursor: pointer;\n\t\t\t  text-align: center;\n\t\t\t  font-weight: bold;\n\t\t\t  padding: 5px 0;\n\t\t\t  clear: left;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal {\n\t\t\t  position: fixed;\n\t\t\t  width: 100vw;\n\t\t\t  height: 100vh;\n\t\t\t  background-color: rgba(0, 0, 0, 0.8);\n\t\t\t  left: 0;\n\t\t\t  top: 0;\n\t\t\t  justify-content: center;\n\t\t\t  align-items: center;\n\t\t\t  display: flex;\n\t\t\t  z-index: 2147483647;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__day-name,\n\t\t\t.react-datepicker__portal .react-datepicker__day,\n\t\t\t.react-datepicker__portal .react-datepicker__time-name {\n\t\t\t  width: 3rem;\n\t\t\t  line-height: 3rem;\n\t\t\t}\n\n\t\t\t@media (max-width: 400px), (max-height: 550px) {\n\t\t\t  .react-datepicker__portal .react-datepicker__day-name,\n\t\t\t  .react-datepicker__portal .react-datepicker__day,\n\t\t\t  .react-datepicker__portal .react-datepicker__time-name {\n\t\t\t    width: 2rem;\n\t\t\t    line-height: 2rem;\n\t\t\t  }\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__current-month,\n\t\t\t.react-datepicker__portal .react-datepicker-time__header {\n\t\t\t  font-size: 1.44rem;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__navigation {\n\t\t\t  border: 0.81rem solid transparent;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__navigation--previous {\n\t\t\t  border-right-color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n\t\t\t  border-right-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {\n\t\t\t  border-right-color: #e6e6e6;\n\t\t\t  cursor: default;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__navigation--next {\n\t\t\t  border-left-color: #ccc;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__navigation--next:hover {\n\t\t\t  border-left-color: #b3b3b3;\n\t\t\t}\n\n\t\t\t.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n\t\t\t  border-left-color: #e6e6e6;\n\t\t\t  cursor: default;\n\t\t\t}\n\n\n\t\t\t/*\n\t\t\t*\n\t\t\t* React DatePicker Custom Overrides\n\t\t\t*\n\t\t\t*/\n\t\t\t.react-datepicker-wrapper,\n\t\t\t.react-datepicker__input-container {\n\t\t\t    display: block;\n\t\t\t    width: 100%;\n\t\t\t}\n\t\t\t.react-datepicker__input-container input {\n\t\t\t    position: relative;\n\t\t\t    display: block;\n\t\t\t    width: 100%;\n\t\t\t    padding: 10px;\n\t\t\t    font-size: 14px;\n\t\t\t    background-color: rgb(255, 255, 255);\n\t\t\t    color: rgb(94, 94, 94);\n\t\t\t    border: 1px solid rgb(229, 229, 229);\n\t\t\t    border-radius: 5px;\n\t\t\t    transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t\t\t}\n\t\t\t.react-datepicker__input-container input:hover {\n\t\t\t    border: 1px solid ' + theme.primary + ';\n\t\t\t    box-shadow: 0 0 0 1px ' + theme.primary + ' inset;\n\t\t\t}\n\t\t\t.react-datepicker__day--keyboard-selected {\n\t\t\t    background-color: ' + theme.primary + ';\n\t\t\t}\n\t\t\t.react-datepicker__time-container\n\t\t\t    .react-datepicker__time\n\t\t\t    .react-datepicker__time-box\n\t\t\t    ul.react-datepicker__time-list {\n\t\t\t    padding: 0px;\n\t\t\t}\n\t\t\t.react-datepicker__time-container,\n\t\t\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n\t\t\t    width: 95px;\n\t\t\t}\n\t\t\t.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n\t\t\t    right: 105px;\n\t\t\t}\n\n\t\t\t.react-datepicker__day--selected,\n\t\t\t.react-datepicker__day--in-selecting-range,\n\t\t\t.react-datepicker__day--in-range,\n\t\t\t.react-datepicker__day--selected:hover,\n\t\t\t.react-datepicker__day--in-selecting-range:hover,\n\t\t\t.react-datepicker__day--in-range:hover,\n\t\t\t.react-datepicker__time-container\n\t\t\t    .react-datepicker__time\n\t\t\t    .react-datepicker__time-box\n\t\t\t    ul.react-datepicker__time-list\n\t\t\t    li.react-datepicker__time-list-item--selected,\n\t\t\t.react-datepicker__time-container\n\t\t\t    .react-datepicker__time\n\t\t\t    .react-datepicker__time-box\n\t\t\t    ul.react-datepicker__time-list\n\t\t\t    li.react-datepicker__time-list-item--selected:hover {\n\t\t\t    background-color: ' + theme.primary + ';\n\t\t\t}\n\n\t\t\t.react-datepicker__time-container\n\t\t\t    .react-datepicker__time\n\t\t\t    .react-datepicker__time-box\n\t\t\t    ul.react-datepicker__time-list\n\t\t\t    li.react-datepicker__time-list-item {\n\t\t\t    line-height: 30px;\n\t\t\t    padding: 0;\n\t\t\t}\n\t\t\t' + globalStyles + '\n\t\t';
});

//Using Styled Components Context
var TEThemeProvider = function TEThemeProvider(props) {
	var theme = props.theme,
	    globalStyles = props.globalStyles;

	return React__default.createElement(
		ThemeProvider,
		{ theme: _extends({}, initialTheme, theme, { globalStyles: globalStyles }) },
		React__default.createElement(
			Fragment,
			null,
			React__default.createElement(GlobalStyles, null),
			props.children
		)
	);
};

var initialState = {
	alertVisible: false,
	alertTitle: '',
	alertMessage: '',

	confirmTitle: '',
	confirmMessage: '',
	confirmVisible: false,
	confirmLeftOnClick: function confirmLeftOnClick() {},
	confirmLeftTitle: 'Cancel',
	confirmRightOnClick: function confirmRightOnClick() {},
	confirmRightTitle: '',

	networkActivityVisible: false,
	networkMessage: ''
};

var TEPopupContext = createContext();

var reducer = function reducer(state, action) {
	switch (action.type) {
		case 'show_alert':
			return _extends({}, state, { alertVisible: true }, action.payload);
		case 'hide_alert':
			return _extends({}, state, { alertVisible: false });
		case 'show_confirm':
			return _extends({}, state, { confirmVisible: true }, action.payload);
		case 'hide_confirm':
			return _extends({}, state, { confirmVisible: false });
		case 'show_network_activity':
			return _extends({}, state, { networkActivityVisible: true, networkMessage: action.payload });
		case 'hide_network_activity':
			return _extends({}, state, { networkActivityVisible: false });
		default:
			return state;
	}
};

var TEPopupProvider = function TEPopupProvider(props) {
	var _useReducer = useReducer(reducer, initialState),
	    _useReducer2 = slicedToArray(_useReducer, 2),
	    state = _useReducer2[0],
	    dispatch = _useReducer2[1];

	return React__default.createElement(
		TEPopupContext.Provider,
		{ value: { state: state, dispatch: dispatch } },
		props.children
	);
};

var Popups = function Popups(props) {
	var _useContext = useContext(TEPopupContext),
	    state = _useContext.state,
	    dispatch = _useContext.dispatch;

	return React__default.createElement(
		Fragment,
		null,
		props.children,
		React__default.createElement(TEAlert, {
			title: state.alertTitle,
			message: state.alertMessage,
			onClick: function onClick() {
				return dispatch({ type: 'hide_alert' });
			},
			visible: state.alertVisible
		}),
		React__default.createElement(TEConfirm, {
			title: state.confirmTitle,
			message: state.confirmMessage,
			leftOnClick: state.confirmLeftOnClick,
			leftButtonTitle: state.confirmLeftTitle,
			rightOnClick: state.confirmRightOnClick,
			rightButtonTitle: state.confirmRightTitle,
			visible: state.confirmVisible
		}),
		React__default.createElement(TENetworkActivity, {
			visible: state.networkActivityVisible,
			message: state.networkMessage
		})
	);
};

var TEAppWrapper = function TEAppWrapper(props) {
	var theme = props.theme,
	    globalStyles = props.globalStyles,
	    children = props.children;


	return React__default.createElement(
		BrowserRouter,
		null,
		React__default.createElement(
			TEScrollToTop,
			null,
			React__default.createElement(
				TEThemeProvider,
				{ theme: theme, globalStyles: globalStyles },
				React__default.createElement(
					TEPopupProvider,
					null,
					React__default.createElement(
						Popups,
						null,
						children
					)
				)
			)
		)
	);
};

export { TEButton, TEFileInput, TEFileManagerRow, TEFileRow, TEForm, TEImageRow, TEInput, TEInputRow, TELabel, TEMultiStepForm, TERow, TECheckboxInput, TEDatetimeInput, TEDatetimeRow, TERadioButtonInput, TECheckboxGroup, TERadioButtonGroup, TESearchSelectInput, TESearchSelectRow, TESegmentedGroup, TETextarea, TEThemeProvider, TEErrorLoadingAlert, TEPanel, TEPanelTitle, TEPannelWrapper as TEPanelWrapper, TETitleBar, TESideNavbar$1 as TESideNavbar, TEAlert, TEConfirm, TENetworkActivity, TEPopup, TEPopupForm, TEPopupMultiStepForm, TESpinner, TERoute, TESwitch, TELink, TENavLink, TESideNavLink, TEBodyContainer, TESubNavbar, TEScrollToTop, TEHelmet, TEPopupContext, TEPopupProvider, TEAppWrapper };
//# sourceMappingURL=index.es.js.map
