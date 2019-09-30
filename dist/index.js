'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactDom = require('react-dom');
var reactDom__default = _interopDefault(reactDom);
var reactRouterDom = require('react-router-dom');
var reactRouter = require('react-router');

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

var _templateObject = taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 18px;\n\tpadding: 5px 20px;\n\ttext-align: center;\n\tcursor: ', ';\n\tborder-radius: 5px;\n\tbox-sizing: border-box;\n\n\tcolor: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid\n\t\t', ';\n\n\ttransition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n'], ['\n\tposition: relative;\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 18px;\n\tpadding: 5px 20px;\n\ttext-align: center;\n\tcursor: ', ';\n\tborder-radius: 5px;\n\tbox-sizing: border-box;\n\n\tcolor: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid\n\t\t', ';\n\n\ttransition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n']);

var Button = styled__default.button(_templateObject, function (props) {
	return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
	return props.disabled ? props.theme.gray : props.theme.darkerGray;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.lightGray;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});

var TEButton = function TEButton(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    _props$type = props.type,
	    rest = objectWithoutProperties(props, ['className', 'type']);

	return React__default.createElement(Button, _extends({ className: 'TEButton ' + className }, rest));
};

var _templateObject$1 = taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: block;\n\twidth: auto;\n\tbox-sizing: border-box;\n\tmargin-bottom: 3px;\n\tfont-size: 18px;\n\tcolor: ', ';\n\n\t@media (max-width: 550px) {\n\t\tfont-size: 16px;\n\t}\n\t', '\n'], ['\n\tposition: relative;\n\tdisplay: block;\n\twidth: auto;\n\tbox-sizing: border-box;\n\tmargin-bottom: 3px;\n\tfont-size: 18px;\n\tcolor: ', ';\n\n\t@media (max-width: 550px) {\n\t\tfont-size: 16px;\n\t}\n\t', '\n']);

var Label = styled__default.label(_templateObject$1, function (props) {
	return props.disabled ? props.theme.gray : props.theme.darkerGray;
}, function (props) {
	var disabled = props.disabled,
	    htmlFor = props.htmlFor;


	if (disabled) {
		return 'cursor: not-allowed;';
	}
	if (htmlFor) {
		return 'cursor: pointer;';
	}
	return 'cursor: default;';
});

var TELabel = function TELabel(props) {
	var children = props.children,
	    required = props.required,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['children', 'required', 'className']);

	return React__default.createElement(
		Label,
		_extends({ className: 'TELabel ' + className }, rest),
		children,
		required ? ' *' : ''
	);
};

TELabel.propTypes = {
	htmlFor: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool
};

var _templateObject$2 = taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tmargin-bottom: 10px;\n\ttext-align: left;\n\tbox-sizing: border-box;\n\tpadding-left: ', ';\n\tpadding-right: ', ';\n\n\t', '\n'], ['\n\tposition: relative;\n\tdisplay: inline-block;\n\tvertical-align: top;\n\tmargin-bottom: 10px;\n\ttext-align: left;\n\tbox-sizing: border-box;\n\tpadding-left: ', ';\n\tpadding-right: ', ';\n\n\t', '\n']);

var Row = styled__default.div(_templateObject$2, function (props) {
	return props.size !== 'full' && props.last ? '5px' : '0px';
}, function (props) {
	return props.size !== 'full' && !props.last ? '5px' : '0px';
}, function (props) {
	var size = props.size;


	switch (size) {
		case 'full':
			return 'width: 100%;';
		case 'two-third':
			return 'width: 66.66%;';
		case 'half':
			return 'width: 50%;';
		case 'third':
			return 'width: 33.33%;';
		case 'forth':
			return 'width: 25%;';
		case 'condensed':
			return 'width: auto;';
		default:
			return 'width: 100%;';
	}
});

var TERow = function TERow(props) {
	var _props$size = props.size,
	    size = _props$size === undefined ? 'full' : _props$size,
	    _props$last = props.last,
	    last = _props$last === undefined ? false : _props$last,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['size', 'last', 'className']);

	return React__default.createElement(Row, _extends({ className: 'TERow ' + className, size: size, last: last }, rest));
};

TERow.propTypes = {
	size: PropTypes.string,
	last: PropTypes.bool
};

var _templateObject$3 = taggedTemplateLiteral(['\n\tcursor: pointer;\n\tbox-sizing: border-box;\n'], ['\n\tcursor: pointer;\n\tbox-sizing: border-box;\n']);

var Input = styled__default.input(_templateObject$3);

var TECheckboxInput = function TECheckboxInput(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['className']);

	return React__default.createElement(Input, _extends({ className: 'TECheckboxInput ' + className }, rest, { type: 'checkbox' }));
};

var _templateObject$4 = taggedTemplateLiteral(['\n\tmargin-bottom: 10px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n'], ['\n\tmargin-bottom: 10px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n']),
    _templateObject2 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\theight: ', ';\n\toverflow-y: ', ';\n\tbackground-color: ', ';\n\tpadding: ', ';\n\tborder: ', ';\n\tpadding: ', ';\n'], ['\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\theight: ', ';\n\toverflow-y: ', ';\n\tbackground-color: ', ';\n\tpadding: ', ';\n\tborder: ', ';\n\tpadding: ', ';\n']),
    _templateObject3 = taggedTemplateLiteral(['\n\tmargin-bottom: 5px;\n\tdisplay: flex;\n\talign-items: center;\n'], ['\n\tmargin-bottom: 5px;\n\tdisplay: flex;\n\talign-items: center;\n']),
    _templateObject4 = taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcursor: pointer;\n'], ['\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcursor: pointer;\n']),
    _templateObject5 = taggedTemplateLiteral(['\n\twidth: auto;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tpadding-left: 10px;\n\tmargin-bottom: 0px;\n\tcursor: pointer;\n\tfont-size: 14px;\n\tcolor: ', ';\n\n\t@media (max-width: 550px) {\n\t\tfontsize: 12px;\n\t}\n'], ['\n\twidth: auto;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tpadding-left: 10px;\n\tmargin-bottom: 0px;\n\tcursor: pointer;\n\tfont-size: 14px;\n\tcolor: ', ';\n\n\t@media (max-width: 550px) {\n\t\tfontsize: 12px;\n\t}\n']);

var Container = styled__default(TERow)(_templateObject$4);
var InputWrapper = styled__default.div(_templateObject2, function (props) {
	return props.scrolling ? '300px' : 'auto';
}, function (props) {
	return props.scrolling ? 'scroll' : 'visible';
}, function (props) {
	return props.scrolling ? props.theme.white : 'transparent';
}, function (props) {
	return props.scrolling ? '0px' : '10px';
}, function (props) {
	return props.scrolling ? '1px solid ' + props.theme.lightGray : 'none';
}, function (props) {
	return props.scrolling ? '5px' : '0px';
});

var RowWrarpper = styled__default(TERow)(_templateObject3);

var Checkbox = styled__default(TECheckboxInput)(_templateObject4);
var Label$1 = styled__default(TELabel)(_templateObject5, function (props) {
	return props.disabled ? props.theme.gray : props.theme.darkerGray;
});

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
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    required = props.required,
	    rowSize = props.rowSize,
	    disabled = props.disabled,
	    checkedValues = props.checkedValues,
	    buttonArray = props.buttonArray,
	    labelForKey = props.labelForKey;


	return React__default.createElement(
		Container,
		{ size: size, last: last, className: 'TECheckboxGroup ' + className },
		React__default.createElement(
			TELabel,
			{ disabled: disabled, required: required, className: 'TECheckboxGroupTitle' },
			title
		),
		React__default.createElement(
			InputWrapper,
			{ className: 'TECheckboxGroupInputWrapper' },
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
					{
						key: key,
						size: rowSize,
						className: 'TECheckboxGroupRowWrapper'
					},
					React__default.createElement(Checkbox, {
						value: value,
						onChange: handleInputChange,
						id: key,
						checked: checkedValues && checkedValues.includes(value),
						disabled: disabled,
						className: 'TECheckboxGroupCheckbox'
					}),
					React__default.createElement(
						Label$1,
						{
							htmlFor: key,
							disabled: disabled,
							className: 'TECheckboxGroupLabel'
						},
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

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
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
function isDate(value) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

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
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `true`        |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  return !isNaN(date);
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
function formatDistance(token, count, options) {
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
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
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
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
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

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
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
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
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
      return Number(quarter) - 1;
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
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = parsePatterns.findIndex(function (pattern) {
        return pattern.test(string);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(string);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
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
      return parseInt(value, 10);
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
      return index + 1;
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
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
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
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
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

};
var formatters$1 = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
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
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
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
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
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
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return formatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

var MILLISECONDS_IN_MINUTE = 60000;
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

function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token) {
  if (token === 'YYYY') {
    throw new RangeError('Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr');
  } else if (token === 'YY') {
    throw new RangeError('Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr');
  } else if (token === 'D') {
    throw new RangeError('Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr');
  } else if (token === 'DD') {
    throw new RangeError('Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr');
  }
}

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

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
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
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
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
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale$$1 = options.locale || locale;
  var localeFirstWeekContainsDate = locale$$1.options && locale$$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$$1.options && locale$$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale$$1.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale$$1.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$$1.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = formatters$1[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring);
      }

      return formatter(utcDate, substring, locale$$1.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

var MILLISECONDS_IN_MINUTE$1 = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$1);
}

var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  var desiredMonth = date.getMonth() + amount;
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
  return date;
}

/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addWeeks(dirtyDate, -amount);
}

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addMonths(dirtyDate, -amount);
}

/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var amount = toInteger(dirtyAmount);
  return addYears(dirtyDate, -amount);
}

/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */

function getSeconds(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */

function getQuarter(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */

function setSeconds(dirtyDate, dirtySeconds) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var seconds = toInteger(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var minutes = toInteger(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var hours = toInteger(dirtyHours);
  date.setHours(hours);
  return date;
}

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var month = toInteger(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */

function setQuarter(dirtyDate, dirtyQuarter) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var quarter = toInteger(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return setMonth(date, date.getMonth() + diff * 3);
}

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var year = toInteger(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date)) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/**
 * @name min
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `min` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var minDate = min(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var minDate = min(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */

function min(dirtyDatesArray) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate);

    if (result === undefined || result > currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `max` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var maxDate = max(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var maxDate = max(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max(dirtyDatesArray) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = toDate(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(currentDate)) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
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
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY$1);
}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
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
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */

function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$2);
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */

function startOfQuarter(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var cleanDate = toDate(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
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
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */

function isEqual(dirtyLeftDate, dirtyRightDate) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameYear(dirtyDateLeft, dirtyDateRight) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}

/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 */

function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var dateToCompare = toDate(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 */

function isWithinInterval(dirtyDate, dirtyInterval) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var interval = dirtyInterval || {};
  var time = toDate(dirtyDate).getTime();
  var startTime = toDate(interval.start).getTime();
  var endTime = toDate(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var day = toInteger(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  if (arguments.length < 2) {
    throw new TypeError('2 arguments required, but only ' + arguments.length + ' present');
  }

  var date = toDate(dirtyDate);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_HOUR$1 = 3600000;
var MILLISECONDS_IN_MINUTE$2 = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2 + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
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

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
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
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
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
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = getUTCWeekYear(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCWeek(setUTCWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
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

var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'(.*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
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
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
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
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
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
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
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
 *    Also `yy` will try to guess the century of two digit year by proximity with `backupDate`:
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
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `backupDate` which works as a context of parsing.
 *
 * `backupDate` must be passed for correct work of the function.
 * If you're not sure which `backupDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `backupDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `backupDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   toDate('2016-01-01')
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} backupDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyBackupDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError('3 arguments required, but only ' + arguments.length + ' present');
  }

  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale$$1 = options.locale || locale;

  if (!locale$$1.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale$$1.options && locale$$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$$1.options && locale$$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyBackupDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$$1 // If timezone isn't specified, it will be set to the system timezone

  };
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp$1).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$$1.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp$1);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
      throwProtectedError(token);
    }

    if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      throwProtectedError(token);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale$$1.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
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
      if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).reverse();
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyBackupDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      assign(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}

var MILLISECONDS_IN_HOUR$2 = 3600000;
var MILLISECONDS_IN_MINUTE$3 = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only ' + arguments.length + ' present');
  }

  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var fullTime = timestamp + time;
    var fullTimeDate = new Date(fullTime);
    offset = getTimezoneOffsetInMilliseconds(fullTimeDate); // Adjust time when it's coming from DST

    var fullTimeDateNextDay = new Date(fullTime);
    fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1);
    var offsetDiff = getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) - offset;

    if (offsetDiff > 0) {
      offset += offsetDiff;
    }
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
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

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR$2 + minutes * MILLISECONDS_IN_MINUTE$3 + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR$2 + minutes * MILLISECONDS_IN_MINUTE$3);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex$1(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex$1(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

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

      _this.__getComponentNode = function () {
        var instance = _this.getInstance();

        if (config && typeof config.setClickOutsideRef === 'function') {
          return config.setClickOutsideRef()(instance);
        }

        if (typeof instance.setClickOutsideRef === 'function') {
          return instance.setClickOutsideRef();
        }

        return reactDom.findDOMNode(instance);
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

      this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside

      if (this.props.disableOnClickOutside) return;
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = this.__getComponentNode();
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
      return React.createElement(WrappedComponent, props);
    };

    return onClickOutside;
  }(React.Component), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose$1;

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

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
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

  warning = function(condition, format, args) {
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
      printWarning.apply(null, [format].concat(args));
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

var createContext = unwrapExports(lib);

var ManagerContext = createContext({
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

    defineProperty$1(assertThisInitialized(_this), "setReferenceNode", function (referenceNode) {
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
    return React.createElement(ManagerContext.Provider, {
      value: this.state.context
    }, this.props.children);
  };

  return Manager;
}(React.Component);

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

    defineProperty$1(assertThisInitialized(_this), "state", {
      data: undefined,
      placement: undefined
    });

    defineProperty$1(assertThisInitialized(_this), "popperInstance", void 0);

    defineProperty$1(assertThisInitialized(_this), "popperNode", null);

    defineProperty$1(assertThisInitialized(_this), "arrowNode", null);

    defineProperty$1(assertThisInitialized(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      safeInvoke(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    defineProperty$1(assertThisInitialized(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    defineProperty$1(assertThisInitialized(_this), "updateStateModifier", {
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

    defineProperty$1(assertThisInitialized(_this), "getOptions", function () {
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

    defineProperty$1(assertThisInitialized(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    defineProperty$1(assertThisInitialized(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    defineProperty$1(assertThisInitialized(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    defineProperty$1(assertThisInitialized(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    defineProperty$1(assertThisInitialized(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    defineProperty$1(assertThisInitialized(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = assertThisInitialized(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
    });

    defineProperty$1(assertThisInitialized(_this), "scheduleUpdate", function () {
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
}(React.Component);

defineProperty$1(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});
function Popper$1(_ref) {
  var referenceElement = _ref.referenceElement,
      props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return React.createElement(ManagerContext.Consumer, null, function (_ref2) {
    var referenceNode = _ref2.referenceNode;
    return React.createElement(InnerPopper, _extends_1({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

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

    defineProperty$1(assertThisInitialized(_this), "refHandler", function (node) {
      safeInvoke(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    safeInvoke(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning_1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(React.Component);

function Reference(props) {
  return React.createElement(ManagerContext.Consumer, null, function (_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return React.createElement(InnerReference, _extends_1({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

// Public components
 // Public types

function ne(e){return (ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function se(e,t,r){return t&&ae(e.prototype,t),r&&ae(e,r),e}function pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ie(){return (ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n);}return r}function le(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t);}function de(e){return (de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return (ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(e,t){return !t||"object"!=typeof t&&"function"!=typeof t?he(e):t}var fe,ve=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){function r(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function n(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={p:n,P:function(e,t){var o,a=e.match(/(P+)(p+)?/),s=a[1],p=a[2];if(!p)return r(e,t);switch(s){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});}return o.replace("{{date}}",r(s,t)).replace("{{time}}",n(p,t))}};t.default=o,e.exports=t.default;}),ye=(fe=ve)&&fe.__esModule&&Object.prototype.hasOwnProperty.call(fe,"default")?fe.default:fe,De=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;function ge(e){var t=e?"string"==typeof e||e instanceof String?parseISO(e):toDate(e):new Date;return we(t)?t:null}function ke(e,t,r,n){var a=null,s=Le(r)||Ie(),p=!0;return Array.isArray(t)?(t.forEach(function(t){var r=parse(e,t,new Date,{locale:s});n&&(p=we(r)&&e===format(r,t,{awareOfUnicodeTokens:!0})),we(r)&&p&&(a=r);}),a):(a=parse(e,t,new Date,{locale:s}),n?p=we(a)&&e===format(a,t,{awareOfUnicodeTokens:!0}):we(a)||(t=t.match(De).map(function(e){var t=e[0];if("p"===t||"P"===t){var r=ye[t];return s?r(e,s.formatLong):t}return e}).join(""),e.length>0&&(a=parse(e,t.slice(0,e.length),new Date)),we(a)||(a=new Date(e))),we(a)&&p?a:null)}function we(e){return isValid(e)&&isAfter(e,new Date("1/1/1000"))}function _e(e,t,r){if("en"===r)return format(e,t,{awareOfUnicodeTokens:!0});var n=Le(r);return r&&!n&&console.warn('A locale object was not found for the provided string ["'.concat(r,'"].')),!n&&Ie()&&Le(Ie())&&(n=Le(Ie())),format(e,t,{locale:n||null,awareOfUnicodeTokens:!0})}function Ce(e,t){var r=t.hour,n=void 0===r?0:r,o=t.minute,a=void 0===o?0:o,s=t.second;return setHours(setMinutes(setSeconds(e,void 0===s?0:s),a),n)}function be(e,t){var r=Le(t||Ie());return startOfWeek(e,{locale:r})}function Se(e){return startOfMonth(e)}function Me(e,t){return e&&t?isSameYear(e,t):!e&&!t}function Ee(e,t){return e&&t?isSameMonth(e,t):!e&&!t}function Ne(e,t){return e&&t?isSameQuarter(e,t):!e&&!t}function Oe(e,t){return e&&t?isSameDay(e,t):!e&&!t}function Pe(e,t){return e&&t?isEqual(e,t):!e&&!t}function Te(e,t,r){var n,o=startOfDay(t),a=endOfDay(r);try{n=isWithinInterval(e,{start:o,end:a});}catch(e){n=!1;}return n}function Ie(){return ("undefined"!=typeof window?window:global).__localeId__}function Le(e){if("string"==typeof e){var t="undefined"!=typeof window?window:global;return t.__localeData__?t.__localeData__[e]:null}return e}function Fe(e,t){return _e(setMonth(ge(),e),"LLL",t)}function We(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return Qe(e,{minDate:r,maxDate:n})||o&&o.some(function(t){return Oe(e,t)})||a&&!a.some(function(t){return Oe(e,t)})||s&&!s(ge(e))||!1}function Be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return Qe(e,{minDate:r,maxDate:n})||o&&o.some(function(t){return Ee(e,t)})||a&&!a.some(function(t){return Ee(e,t)})||s&&!s(ge(e))||!1}function je(e,t,r,n){var o=getYear(e),a=getMonth(e),s=getYear(t),p=getMonth(t),i=getYear(n);return o===s&&o===i?a<=r&&r<=p:o<s?i===o&&a<=r||i===s&&p>=r||i<s&&i>o:void 0}function Re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate,o=t.excludeDates,a=t.includeDates,s=t.filterDate;return Qe(e,{minDate:r,maxDate:n})||o&&o.some(function(t){return Ne(e,t)})||a&&!a.some(function(t){return Ne(e,t)})||s&&!s(ge(e))||!1}function He(e,t,r,n){var o=getYear(e),a=getQuarter(e),s=getYear(t),p=getQuarter(t),i=getYear(n);return o===s&&o===i?a<=r&&r<=p:o<s?i===o&&a<=r||i===s&&p>=r||i<s&&i>o:void 0}function Qe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.maxDate;return r&&differenceInCalendarDays(e,r)<0||n&&differenceInCalendarDays(e,n)>0}function Ve(e,t){for(var r=t.length,n=0;n<r;n++)if(getHours(t[n])===getHours(e)&&getMinutes(t[n])===getMinutes(e))return !0;return !1}function Ae(e,t){var r=t.minTime,n=t.maxTime;if(!r||!n)throw new Error("Both minTime and maxTime props required");var o,a=ge(),s=setHours(setMinutes(a,getMinutes(e)),getHours(e)),p=setHours(setMinutes(a,getMinutes(r)),getHours(r)),i=setHours(setMinutes(a,getMinutes(n)),getHours(n));try{o=!isWithinInterval(s,{start:p,end:i});}catch(e){o=!1;}return o}function Ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minDate,n=t.includeDates,o=subMonths(e,1);return r&&differenceInCalendarMonths(r,o)>0||n&&n.every(function(e){return differenceInCalendarMonths(e,o)>0})||!1}function qe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.maxDate,n=t.includeDates,o=addMonths(e,1);return r&&differenceInCalendarMonths(o,r)>0||n&&n.every(function(e){return differenceInCalendarMonths(o,e)>0})||!1}function Ue(e){var t=e.minDate,r=e.includeDates;if(r&&t){var n=r.filter(function(e){return differenceInCalendarDays(e,t)>=0});return min(n)}return r?min(r):t}function $e(e){var t=e.maxDate,r=e.includeDates;if(r&&t){var n=r.filter(function(e){return differenceInCalendarDays(e,t)<=0});return max(n)}return r?max(r):t}function ze(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"react-datepicker__day--highlighted",n=new Map,o=0,a=e.length;o<a;o++){var s=e[o];if(isDate(s)){var p=_e(s,"MM.dd.yyyy"),i=n.get(p)||[];i.includes(t)||(i.push(t),n.set(p,i));}else if("object"===ne(s)){var c=Object.keys(s),l=c[0],d=s[c[0]];if("string"==typeof l&&d.constructor===Array)for(var u=0,h=d.length;u<h;u++){var m=_e(d[u],"MM.dd.yyyy"),f=n.get(m)||[];f.includes(l)||(f.push(l),n.set(m,f));}}}return n}function Ge(e,t,r,n,o){for(var p=o.length,i=[],c=0;c<p;c++){var l=addMinutes(addHours(e,getHours(o[c])),getMinutes(o[c])),d=addMinutes(e,(r+1)*n);isAfter(l,t)&&isBefore(l,d)&&i.push(o[c]);}return i}function Je(e){return e<10?"0".concat(e):"".concat(e)}function Xe(e,t,r,n){for(var o=[],a=0;a<2*t+1;a++){var s=e+t-a,p=!0;r&&(p=getYear(r)<=s),n&&p&&(p=getYear(n)>=s),p&&o.push(s);}return o}var Ze=onClickOutsideHOC(function(r){function n(t){var r;oe(this,n),pe(he(r=me(this,de(n).call(this,t))),"renderOptions",function(){var t=r.props.year,n=r.state.yearsList.map(function(n){return React__default.createElement("div",{className:t===n?"react-datepicker__year-option react-datepicker__year-option--selected_year":"react-datepicker__year-option",key:n,ref:n,onClick:r.onChange.bind(he(r),n)},t===n?React__default.createElement("span",{className:"react-datepicker__year-option--selected"},"✓"):"",n)}),o=r.props.minDate?getYear(r.props.minDate):null,a=r.props.maxDate?getYear(r.props.maxDate):null;return a&&r.state.yearsList.find(function(e){return e===a})||n.unshift(React__default.createElement("div",{className:"react-datepicker__year-option",ref:"upcoming",key:"upcoming",onClick:r.incrementYears},React__default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"}))),o&&r.state.yearsList.find(function(e){return e===o})||n.push(React__default.createElement("div",{className:"react-datepicker__year-option",ref:"previous",key:"previous",onClick:r.decrementYears},React__default.createElement("a",{className:"react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"}))),n}),pe(he(r),"onChange",function(e){r.props.onChange(e);}),pe(he(r),"handleClickOutside",function(){r.props.onCancel();}),pe(he(r),"shiftYears",function(e){var t=r.state.yearsList.map(function(t){return t+e});r.setState({yearsList:t});}),pe(he(r),"incrementYears",function(){return r.shiftYears(1)}),pe(he(r),"decrementYears",function(){return r.shiftYears(-1)});var o=t.yearDropdownItemNumber,a=t.scrollableYearDropdown,s=o||(a?10:5);return r.state={yearsList:Xe(r.props.year,s,r.props.minDate,r.props.maxDate)},r}return le(n,React__default.Component),se(n,[{key:"render",value:function(){var r=classnames({"react-datepicker__year-dropdown":!0,"react-datepicker__year-dropdown--scrollable":this.props.scrollableYearDropdown});return React__default.createElement("div",{className:r},this.renderOptions())}}]),n}()),et=function(t){function r(){var t,n;oe(this,r);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return pe(he(n=me(this,(t=de(r)).call.apply(t,[this].concat(a)))),"state",{dropdownVisible:!1}),pe(he(n),"renderSelectOptions",function(){for(var t=n.props.minDate?getYear(n.props.minDate):1900,r=n.props.maxDate?getYear(n.props.maxDate):2100,o=[],a=t;a<=r;a++)o.push(React__default.createElement("option",{key:a,value:a},a));return o}),pe(he(n),"onSelectChange",function(e){n.onChange(e.target.value);}),pe(he(n),"renderSelectMode",function(){return React__default.createElement("select",{value:n.props.year,className:"react-datepicker__year-select",onChange:n.onSelectChange},n.renderSelectOptions())}),pe(he(n),"renderReadView",function(t){return React__default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__year-read-view",onClick:function(e){return n.toggleDropdown(e)}},React__default.createElement("span",{className:"react-datepicker__year-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__year-read-view--selected-year"},n.props.year))}),pe(he(n),"renderDropdown",function(){return React__default.createElement(Ze,{key:"dropdown",ref:"options",year:n.props.year,onChange:n.onChange,onCancel:n.toggleDropdown,minDate:n.props.minDate,maxDate:n.props.maxDate,scrollableYearDropdown:n.props.scrollableYearDropdown,yearDropdownItemNumber:n.props.yearDropdownItemNumber})}),pe(he(n),"renderScrollMode",function(){var e=n.state.dropdownVisible,t=[n.renderReadView(!e)];return e&&t.unshift(n.renderDropdown()),t}),pe(he(n),"onChange",function(e){n.toggleDropdown(),e!==n.props.year&&n.props.onChange(e);}),pe(he(n),"toggleDropdown",function(e){n.setState({dropdownVisible:!n.state.dropdownVisible},function(){n.props.adjustDateOnChange&&n.handleYearChange(n.props.date,e);});}),pe(he(n),"handleYearChange",function(e,t){n.onSelect(e,t),n.setOpen();}),pe(he(n),"onSelect",function(e,t){n.props.onSelect&&n.props.onSelect(e,t);}),pe(he(n),"setOpen",function(){n.props.setOpen&&n.props.setOpen(!0);}),n}return le(r,React__default.Component),se(r,[{key:"render",value:function(){var t;switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode();break;case"select":t=this.renderSelectMode();}return React__default.createElement("div",{className:"react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),r}(),tt=onClickOutsideHOC(function(t){function r(){var t,n;oe(this,r);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return pe(he(n=me(this,(t=de(r)).call.apply(t,[this].concat(a)))),"renderOptions",function(){return n.props.monthNames.map(function(t,r){return React__default.createElement("div",{className:n.props.month===r?"react-datepicker__month-option --selected_month":"react-datepicker__month-option",key:t,ref:t,onClick:n.onChange.bind(he(n),r)},n.props.month===r?React__default.createElement("span",{className:"react-datepicker__month-option--selected"},"✓"):"",t)})}),pe(he(n),"onChange",function(e){return n.props.onChange(e)}),pe(he(n),"handleClickOutside",function(){return n.props.onCancel()}),n}return le(r,React__default.Component),se(r,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__month-dropdown"},this.renderOptions())}}]),r}()),rt=function(t){function r(){var t,n;oe(this,r);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return pe(he(n=me(this,(t=de(r)).call.apply(t,[this].concat(a)))),"state",{dropdownVisible:!1}),pe(he(n),"renderSelectOptions",function(t){return t.map(function(t,r){return React__default.createElement("option",{key:r,value:r},t)})}),pe(he(n),"renderSelectMode",function(t){return React__default.createElement("select",{value:n.props.month,className:"react-datepicker__month-select",onChange:function(e){return n.onChange(e.target.value)}},n.renderSelectOptions(t))}),pe(he(n),"renderReadView",function(t,r){return React__default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__month-read-view",onClick:n.toggleDropdown},React__default.createElement("span",{className:"react-datepicker__month-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__month-read-view--selected-month"},r[n.props.month]))}),pe(he(n),"renderDropdown",function(t){return React__default.createElement(tt,{key:"dropdown",ref:"options",month:n.props.month,monthNames:t,onChange:n.onChange,onCancel:n.toggleDropdown})}),pe(he(n),"renderScrollMode",function(e){var t=n.state.dropdownVisible,r=[n.renderReadView(!t,e)];return t&&r.unshift(n.renderDropdown(e)),r}),pe(he(n),"onChange",function(e){n.toggleDropdown(),e!==n.props.month&&n.props.onChange(e);}),pe(he(n),"toggleDropdown",function(){return n.setState({dropdownVisible:!n.state.dropdownVisible})}),n}return le(r,React__default.Component),se(r,[{key:"render",value:function(){var t,r=this,n=[0,1,2,3,4,5,6,7,8,9,10,11].map(this.props.useShortMonthInDropdown?function(e){return Fe(e,r.props.locale)}:function(e){return t=e,n=r.props.locale,_e(setMonth(ge(),t),"LLLL",n);var t,n;});switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode(n);break;case"select":t=this.renderSelectMode(n);}return React__default.createElement("div",{className:"react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),r}();function nt(e,t){for(var r=[],n=Se(e),o=Se(t);!isAfter(n,o);)r.push(ge(n)),n=addMonths(n,1);return r}var ot=onClickOutsideHOC(function(r){function n(t){var r;return oe(this,n),pe(he(r=me(this,de(n).call(this,t))),"renderOptions",function(){return r.state.monthYearsList.map(function(t){var n=getTime(t),o=Me(r.props.date,t)&&Ee(r.props.date,t);return React__default.createElement("div",{className:o?"react-datepicker__month-year-option --selected_month-year":"react-datepicker__month-year-option",key:n,ref:n,onClick:r.onChange.bind(he(r),n)},o?React__default.createElement("span",{className:"react-datepicker__month-year-option--selected"},"✓"):"",_e(t,r.props.dateFormat))})}),pe(he(r),"onChange",function(e){return r.props.onChange(e)}),pe(he(r),"handleClickOutside",function(){r.props.onCancel();}),r.state={monthYearsList:nt(r.props.minDate,r.props.maxDate)},r}return le(n,React__default.Component),se(n,[{key:"render",value:function(){var r=classnames({"react-datepicker__month-year-dropdown":!0,"react-datepicker__month-year-dropdown--scrollable":this.props.scrollableMonthYearDropdown});return React__default.createElement("div",{className:r},this.renderOptions())}}]),n}()),at=function(t){function r(){var t,n;oe(this,r);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return pe(he(n=me(this,(t=de(r)).call.apply(t,[this].concat(a)))),"state",{dropdownVisible:!1}),pe(he(n),"renderSelectOptions",function(){for(var t=Se(n.props.minDate),r=Se(n.props.maxDate),o=[];!isAfter(t,r);){var a=getTime(t);o.push(React__default.createElement("option",{key:a,value:a},_e(t,n.props.dateFormat,n.props.locale))),t=addMonths(t,1);}return o}),pe(he(n),"onSelectChange",function(e){n.onChange(e.target.value);}),pe(he(n),"renderSelectMode",function(){return React__default.createElement("select",{value:getTime(Se(n.props.date)),className:"react-datepicker__month-year-select",onChange:n.onSelectChange},n.renderSelectOptions())}),pe(he(n),"renderReadView",function(t){var r=_e(n.props.date,n.props.dateFormat,n.props.locale);return React__default.createElement("div",{key:"read",style:{visibility:t?"visible":"hidden"},className:"react-datepicker__month-year-read-view",onClick:function(e){return n.toggleDropdown(e)}},React__default.createElement("span",{className:"react-datepicker__month-year-read-view--down-arrow"}),React__default.createElement("span",{className:"react-datepicker__month-year-read-view--selected-month-year"},r))}),pe(he(n),"renderDropdown",function(){return React__default.createElement(ot,{key:"dropdown",ref:"options",date:n.props.date,dateFormat:n.props.dateFormat,onChange:n.onChange,onCancel:n.toggleDropdown,minDate:n.props.minDate,maxDate:n.props.maxDate,scrollableMonthYearDropdown:n.props.scrollableMonthYearDropdown})}),pe(he(n),"renderScrollMode",function(){var e=n.state.dropdownVisible,t=[n.renderReadView(!e)];return e&&t.unshift(n.renderDropdown()),t}),pe(he(n),"onChange",function(e){n.toggleDropdown();var t=ge(parseInt(e));Me(n.props.date,t)&&Ee(n.props.date,t)||n.props.onChange(t);}),pe(he(n),"toggleDropdown",function(){return n.setState({dropdownVisible:!n.state.dropdownVisible})}),n}return le(r,React__default.Component),se(r,[{key:"render",value:function(){var t;switch(this.props.dropdownMode){case"scroll":t=this.renderScrollMode();break;case"select":t=this.renderSelectMode();}return React__default.createElement("div",{className:"react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)},t)}}]),r}(),st=function(r){function n(){var e,r;oe(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return pe(he(r=me(this,(e=de(n)).call.apply(e,[this].concat(a)))),"handleClick",function(e){!r.isDisabled()&&r.props.onClick&&r.props.onClick(e);}),pe(he(r),"handleMouseEnter",function(e){!r.isDisabled()&&r.props.onMouseEnter&&r.props.onMouseEnter(e);}),pe(he(r),"isSameDay",function(e){return Oe(r.props.day,e)}),pe(he(r),"isKeyboardSelected",function(){return !r.props.disabledKeyboardNavigation&&!r.props.inline&&!r.isSameDay(r.props.selected)&&r.isSameDay(r.props.preSelection)}),pe(he(r),"isDisabled",function(){return We(r.props.day,r.props)}),pe(he(r),"isExcluded",function(){return function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).excludeDates;return t&&t.some(function(t){return Oe(e,t)})||!1}(r.props.day,r.props)}),pe(he(r),"getHighLightedClass",function(e){var t=r.props,n=t.day,o=t.highlightDates;if(!o)return !1;var a=_e(n,"MM.dd.yyyy");return o.get(a)}),pe(he(r),"isInRange",function(){var e=r.props,t=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&Te(t,n,o)}),pe(he(r),"isInSelectingRange",function(){var e=r.props,t=e.day,n=e.selectsStart,o=e.selectsEnd,a=e.selectingDate,s=e.startDate,p=e.endDate;return !(!n&&!o||!a||r.isDisabled())&&(n&&p&&(isBefore(a,p)||Pe(a,p))?Te(t,a,p):!(!o||!s||!isAfter(a,s)&&!Pe(a,s))&&Te(t,s,a))}),pe(he(r),"isSelectingRangeStart",function(){if(!r.isInSelectingRange())return !1;var e=r.props,t=e.day,n=e.selectingDate,o=e.startDate;return Oe(t,e.selectsStart?n:o)}),pe(he(r),"isSelectingRangeEnd",function(){if(!r.isInSelectingRange())return !1;var e=r.props,t=e.day,n=e.selectingDate,o=e.endDate;return Oe(t,e.selectsEnd?n:o)}),pe(he(r),"isRangeStart",function(){var e=r.props,t=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&Oe(n,t)}),pe(he(r),"isRangeEnd",function(){var e=r.props,t=e.day,n=e.startDate,o=e.endDate;return !(!n||!o)&&Oe(o,t)}),pe(he(r),"isWeekend",function(){var e=getDay(r.props.day);return 0===e||6===e}),pe(he(r),"isOutsideMonth",function(){return void 0!==r.props.month&&r.props.month!==getMonth(r.props.day)}),pe(he(r),"getClassNames",function(e){var n,o=r.props.dayClassName?r.props.dayClassName(e):void 0;return classnames("react-datepicker__day",o,"react-datepicker__day--"+_e(r.props.day,"ddd",n),{"react-datepicker__day--disabled":r.isDisabled(),"react-datepicker__day--excluded":r.isExcluded(),"react-datepicker__day--selected":r.isSameDay(r.props.selected),"react-datepicker__day--keyboard-selected":r.isKeyboardSelected(),"react-datepicker__day--range-start":r.isRangeStart(),"react-datepicker__day--range-end":r.isRangeEnd(),"react-datepicker__day--in-range":r.isInRange(),"react-datepicker__day--in-selecting-range":r.isInSelectingRange(),"react-datepicker__day--selecting-range-start":r.isSelectingRangeStart(),"react-datepicker__day--selecting-range-end":r.isSelectingRangeEnd(),"react-datepicker__day--today":r.isSameDay(ge()),"react-datepicker__day--weekend":r.isWeekend(),"react-datepicker__day--outside-month":r.isOutsideMonth()},r.getHighLightedClass("react-datepicker__day--highlighted"))}),r}return le(n,React__default.Component),se(n,[{key:"render",value:function(){return React__default.createElement("div",{className:this.getClassNames(this.props.day),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,"aria-label":"day-".concat(getDate(this.props.day)),role:"option","aria-disabled":this.isDisabled()},this.props.renderDayContents?this.props.renderDayContents(getDate(this.props.day),this.props.day):getDate(this.props.day))}}]),n}(),pt=function(r){function n(){var e,t;oe(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return pe(he(t=me(this,(e=de(n)).call.apply(e,[this].concat(o)))),"handleClick",function(e){t.props.onClick&&t.props.onClick(e);}),t}return le(n,React__default.Component),se(n,[{key:"render",value:function(){var r={"react-datepicker__week-number":!0,"react-datepicker__week-number--clickable":!!this.props.onClick};return React__default.createElement("div",{className:classnames(r),"aria-label":"week-".concat(this.props.weekNumber),onClick:this.handleClick},this.props.weekNumber)}}]),n}(),it=function(t){function r(){var t,n;oe(this,r);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return pe(he(n=me(this,(t=de(r)).call.apply(t,[this].concat(a)))),"handleDayClick",function(e,t){n.props.onDayClick&&n.props.onDayClick(e,t);}),pe(he(n),"handleDayMouseEnter",function(e){n.props.onDayMouseEnter&&n.props.onDayMouseEnter(e);}),pe(he(n),"handleWeekClick",function(e,t,r){"function"==typeof n.props.onWeekSelect&&n.props.onWeekSelect(e,t,r),n.props.shouldCloseOnSelect&&n.props.setOpen(!1);}),pe(he(n),"formatWeekNumber",function(e){return n.props.formatWeekNumber?n.props.formatWeekNumber(e):function(e){return Me(endOfWeek(e),e)?differenceInCalendarWeeks(e,startOfYear(e))+1:1}(e)}),pe(he(n),"renderDays",function(){var t=be(n.props.day,n.props.locale),r=[],o=n.formatWeekNumber(t);if(n.props.showWeekNumber){var a=n.props.onWeekSelect?n.handleWeekClick.bind(he(n),t,o):void 0;r.push(React__default.createElement(pt,{key:"W",weekNumber:o,onClick:a}));}return r.concat([0,1,2,3,4,5,6].map(function(r){var o=addDays(t,r);return React__default.createElement(st,{key:r,day:o,month:n.props.month,onClick:n.handleDayClick.bind(he(n),o),onMouseEnter:n.handleDayMouseEnter.bind(he(n),o),minDate:n.props.minDate,maxDate:n.props.maxDate,excludeDates:n.props.excludeDates,includeDates:n.props.includeDates,inline:n.props.inline,highlightDates:n.props.highlightDates,selectingDate:n.props.selectingDate,filterDate:n.props.filterDate,preSelection:n.props.preSelection,selected:n.props.selected,selectsStart:n.props.selectsStart,selectsEnd:n.props.selectsEnd,startDate:n.props.startDate,endDate:n.props.endDate,dayClassName:n.props.dayClassName,renderDayContents:n.props.renderDayContents,disabledKeyboardNavigation:n.props.disabledKeyboardNavigation})}))}),n}return le(r,React__default.Component),se(r,[{key:"render",value:function(){return React__default.createElement("div",{className:"react-datepicker__week"},this.renderDays())}}],[{key:"defaultProps",get:function(){return {shouldCloseOnSelect:!0}}}]),r}(),ct=6,lt=function(r){function n(){var r,o;oe(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return pe(he(o=me(this,(r=de(n)).call.apply(r,[this].concat(s)))),"handleDayClick",function(e,t){o.props.onDayClick&&o.props.onDayClick(e,t,o.props.orderInDisplay);}),pe(he(o),"handleDayMouseEnter",function(e){o.props.onDayMouseEnter&&o.props.onDayMouseEnter(e);}),pe(he(o),"handleMouseLeave",function(){o.props.onMouseLeave&&o.props.onMouseLeave();}),pe(he(o),"isRangeStartMonth",function(e){var t=o.props,r=t.day,n=t.startDate,a=t.endDate;return !(!n||!a)&&Ee(setMonth(r,e),n)}),pe(he(o),"isRangeStartQuarter",function(e){var t=o.props,r=t.day,n=t.startDate,a=t.endDate;return !(!n||!a)&&Ne(setQuarter(r,e),n)}),pe(he(o),"isRangeEndMonth",function(e){var t=o.props,r=t.day,n=t.startDate,a=t.endDate;return !(!n||!a)&&Ee(setMonth(r,e),a)}),pe(he(o),"isRangeEndQuarter",function(e){var t=o.props,r=t.day,n=t.startDate,a=t.endDate;return !(!n||!a)&&Ne(setQuarter(r,e),a)}),pe(he(o),"isWeekInMonth",function(e){var t=o.props.day,r=addDays(e,6);return Ee(e,t)||Ee(r,t)}),pe(he(o),"renderWeeks",function(){for(var t=[],r=o.props.fixedHeight,n=be(Se(o.props.day),o.props.locale),a=0,s=!1;t.push(React__default.createElement(it,{key:a,day:n,month:getMonth(o.props.day),onDayClick:o.handleDayClick,onDayMouseEnter:o.handleDayMouseEnter,onWeekSelect:o.props.onWeekSelect,formatWeekNumber:o.props.formatWeekNumber,locale:o.props.locale,minDate:o.props.minDate,maxDate:o.props.maxDate,excludeDates:o.props.excludeDates,includeDates:o.props.includeDates,inline:o.props.inline,highlightDates:o.props.highlightDates,selectingDate:o.props.selectingDate,filterDate:o.props.filterDate,preSelection:o.props.preSelection,selected:o.props.selected,selectsStart:o.props.selectsStart,selectsEnd:o.props.selectsEnd,showWeekNumber:o.props.showWeekNumbers,startDate:o.props.startDate,endDate:o.props.endDate,dayClassName:o.props.dayClassName,setOpen:o.props.setOpen,shouldCloseOnSelect:o.props.shouldCloseOnSelect,disabledKeyboardNavigation:o.props.disabledKeyboardNavigation,renderDayContents:o.props.renderDayContents})),!s;){a++,n=addWeeks(n,1);var p=r&&a>=ct,c=!r&&!o.isWeekInMonth(n);if(p||c){if(!o.props.peekNextMonth)break;s=!0;}}return t}),pe(he(o),"onMonthClick",function(e,t){o.handleDayClick(Se(setMonth(o.props.day,t)),e);}),pe(he(o),"onQuarterClick",function(e,t){var r;o.handleDayClick((r=setQuarter(o.props.day,t),startOfQuarter(r)),e);}),pe(he(o),"getMonthClassNames",function(e){var r=o.props,n=r.day,a=r.startDate,s=r.endDate,p=r.selected,i=r.minDate,c=r.maxDate;return classnames("react-datepicker__month-text","react-datepicker__month-".concat(e),{"react-datepicker__month--disabled":(i||c)&&Be(setMonth(n,e),o.props),"react-datepicker__month--selected":getMonth(n)===e&&getYear(n)===getYear(p),"react-datepicker__month--in-range":je(a,s,e,n),"react-datepicker__month--range-start":o.isRangeStartMonth(e),"react-datepicker__month--range-end":o.isRangeEndMonth(e)})}),pe(he(o),"getQuarterClassNames",function(e){var r=o.props,n=r.day,a=r.startDate,s=r.endDate,p=r.selected,i=r.minDate,c=r.maxDate;return classnames("react-datepicker__quarter-text","react-datepicker__quarter-".concat(e),{"react-datepicker__quarter--disabled":(i||c)&&Re(setQuarter(n,e),o.props),"react-datepicker__quarter--selected":getQuarter(n)===e&&getYear(n)===getYear(p),"react-datepicker__quarter--in-range":He(a,s,e,n),"react-datepicker__quarter--range-start":o.isRangeStartQuarter(e),"react-datepicker__quarter--range-end":o.isRangeEndQuarter(e)})}),pe(he(o),"renderMonths",function(){return [[0,1,2],[3,4,5],[6,7,8],[9,10,11]].map(function(t,r){return React__default.createElement("div",{className:"react-datepicker__month-wrapper",key:r},t.map(function(t,r){return React__default.createElement("div",{key:r,onClick:function(e){o.onMonthClick(e,t);},className:o.getMonthClassNames(t)},Fe(t,o.props.locale))}))})}),pe(he(o),"renderQuarters",function(){return React__default.createElement("div",{className:"react-datepicker__quarter-wrapper"},[1,2,3,4].map(function(t,r){return React__default.createElement("div",{key:r,onClick:function(e){o.onQuarterClick(e,t);},className:o.getQuarterClassNames(t)},(n=t,a=o.props.locale,_e(setQuarter(ge(),n),"QQQ",a)));var n,a;}))}),pe(he(o),"getClassNames",function(){var e=o.props,r=e.selectingDate,n=e.selectsStart,a=e.selectsEnd,s=e.showMonthYearPicker,p=e.showQuarterYearPicker;return classnames("react-datepicker__month",{"react-datepicker__month--selecting-range":r&&(n||a)},{"react-datepicker__monthPicker":s},{"react-datepicker__quarterPicker":p})}),o}return le(n,React__default.Component),se(n,[{key:"render",value:function(){var t=this.props,r=t.showMonthYearPicker,n=t.showQuarterYearPicker;return React__default.createElement("div",{className:this.getClassNames(),onMouseLeave:this.handleMouseLeave,role:"listbox","aria-label":"month-"+_e(this.props.day,"yyyy-MM")},r?this.renderMonths():n?this.renderQuarters():this.renderWeeks())}}]),n}(),dt=function(t){function r(){var t,n;oe(this,r);for(var o=arguments.length,s=new Array(o),p=0;p<o;p++)s[p]=arguments[p];return pe(he(n=me(this,(t=de(r)).call.apply(t,[this].concat(s)))),"state",{height:null}),pe(he(n),"handleClick",function(e){(n.props.minTime||n.props.maxTime)&&Ae(e,n.props)||n.props.excludeTimes&&Ve(e,n.props.excludeTimes)||n.props.includeTimes&&!Ve(e,n.props.includeTimes)||n.props.onChange(e);}),pe(he(n),"liClasses",function(e,t,r){var o=["react-datepicker__time-list-item"];return t===getHours(e)&&r===getMinutes(e)&&o.push("react-datepicker__time-list-item--selected"),((n.props.minTime||n.props.maxTime)&&Ae(e,n.props)||n.props.excludeTimes&&Ve(e,n.props.excludeTimes)||n.props.includeTimes&&!Ve(e,n.props.includeTimes))&&o.push("react-datepicker__time-list-item--disabled"),n.props.injectTimes&&(60*getHours(e)+getMinutes(e))%n.props.intervals!=0&&o.push("react-datepicker__time-list-item--injected"),o.join(" ")}),pe(he(n),"renderTimes",function(){for(var t,r=[],o=n.props.format?n.props.format:"p",s=n.props.intervals,p=n.props.selected?n.props.selected:ge(),i=getHours(p),c=getMinutes(p),l=(t=ge(),startOfDay(t)),d=1440/s,u=n.props.injectTimes&&n.props.injectTimes.sort(function(e,t){return e-t}),h=0;h<d;h++){var m=addMinutes(l,h*s);if(r.push(m),u){var f=Ge(l,m,h,s,u);r=r.concat(f);}}return r.map(function(t,r){return React__default.createElement("li",{key:r,onClick:n.handleClick.bind(he(n),t),className:n.liClasses(t,i,c),ref:function(e){(i===getHours(t)&&c===getMinutes(t)||i===getHours(t)&&!n.centerLi)&&(n.centerLi=e);}},_e(t,o,n.props.locale))})}),n}return le(r,React__default.Component),se(r,[{key:"componentDidMount",value:function(){this.list.scrollTop=r.calcCenterPosition(this.props.monthRef?this.props.monthRef.clientHeight-this.header.clientHeight:this.list.clientHeight,this.centerLi),this.props.monthRef&&this.header&&this.setState({height:this.props.monthRef.clientHeight-this.header.clientHeight});}},{key:"render",value:function(){var t=this,r=this.state.height;return React__default.createElement("div",{className:"react-datepicker__time-container ".concat(this.props.todayButton?"react-datepicker__time-container--with-today-button":"")},React__default.createElement("div",{className:"react-datepicker__header react-datepicker__header--time",ref:function(e){t.header=e;}},React__default.createElement("div",{className:"react-datepicker-time__header"},this.props.timeCaption)),React__default.createElement("div",{className:"react-datepicker__time"},React__default.createElement("div",{className:"react-datepicker__time-box"},React__default.createElement("ul",{className:"react-datepicker__time-list",ref:function(e){t.list=e;},style:r?{height:r}:{}},this.renderTimes()))))}}],[{key:"defaultProps",get:function(){return {intervals:30,onTimeChange:function(){},todayButton:null,timeCaption:"Time"}}}]),r}();pe(dt,"calcCenterPosition",function(e,t){return t.offsetTop-(e/2-t.clientHeight/2)});var ut=function(t){function r(e){var t;return oe(this,r),pe(he(t=me(this,de(r).call(this,e))),"onTimeChange",function(e){t.setState({time:e});var r=new Date;r.setHours(e.split(":")[0]),r.setMinutes(e.split(":")[1]),t.props.onChange(r);}),t.state={time:t.props.timeString},t}return le(r,React__default.Component),se(r,[{key:"render",value:function(){var t=this,r=this.state.time,n=this.props.timeString;return React__default.createElement("div",{className:"react-datepicker__input-time-container"},React__default.createElement("div",{className:"react-datepicker-time__caption"},this.props.timeInputLabel),React__default.createElement("div",{className:"react-datepicker-time__input-container"},React__default.createElement("div",{className:"react-datepicker-time__input"},React__default.createElement("input",{type:"time",className:"react-datepicker-time__input",placeholder:"Time",name:"time-input",required:!0,value:r,onChange:function(e){t.onTimeChange(e.target.value||n);}}))))}}]),r}();function ht(t){var r=t.className,n=t.children,o=t.arrowProps,a=void 0===o?{}:o;return React__default.createElement("div",{className:r},React__default.createElement("div",ie({className:"react-datepicker__triangle"},a)),n)}var mt=["react-datepicker__year-select","react-datepicker__month-select","react-datepicker__month-year-select"],ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.className||"").split(/\s+/);return mt.some(function(e){return t.indexOf(e)>=0})},vt=function(r){function n(t){var r;return oe(this,n),pe(he(r=me(this,de(n).call(this,t))),"handleClickOutside",function(e){r.props.onClickOutside(e);}),pe(he(r),"setClickOutsideRef",function(){return r.containerRef.current}),pe(he(r),"handleDropdownFocus",function(e){ft(e.target)&&r.props.onDropdownFocus();}),pe(he(r),"getDateInView",function(){var e=r.props,t=e.preSelection,n=e.selected,o=e.openToDate,a=Ue(r.props),s=$e(r.props),p=ge(),i=o||n||t;return i||(a&&isBefore(p,a)?a:s&&isAfter(p,s)?s:p)}),pe(he(r),"increaseMonth",function(){r.setState(function(e){var t=e.date;return {date:addMonths(t,1)}},function(){return r.handleMonthChange(r.state.date)});}),pe(he(r),"decreaseMonth",function(){r.setState(function(e){var t=e.date;return {date:subMonths(t,1)}},function(){return r.handleMonthChange(r.state.date)});}),pe(he(r),"handleDayClick",function(e,t,n){return r.props.onSelect(e,t,n)}),pe(he(r),"handleDayMouseEnter",function(e){r.setState({selectingDate:e}),r.props.onDayMouseEnter&&r.props.onDayMouseEnter(e);}),pe(he(r),"handleMonthMouseLeave",function(){r.setState({selectingDate:null}),r.props.onMonthMouseLeave&&r.props.onMonthMouseLeave();}),pe(he(r),"handleYearChange",function(e){r.props.onYearChange&&r.props.onYearChange(e);}),pe(he(r),"handleMonthChange",function(e){r.props.onMonthChange&&r.props.onMonthChange(e),r.props.adjustDateOnChange&&(r.props.onSelect&&r.props.onSelect(e),r.props.setOpen&&r.props.setOpen(!0));}),pe(he(r),"handleMonthYearChange",function(e){r.handleYearChange(e),r.handleMonthChange(e);}),pe(he(r),"changeYear",function(e){r.setState(function(t){var r=t.date;return {date:setYear(r,e)}},function(){return r.handleYearChange(r.state.date)});}),pe(he(r),"changeMonth",function(e){r.setState(function(t){var r=t.date;return {date:setMonth(r,e)}},function(){return r.handleMonthChange(r.state.date)});}),pe(he(r),"changeMonthYear",function(e){r.setState(function(t){var r=t.date;return {date:setYear(setMonth(r,getMonth(e)),getYear(e))}},function(){return r.handleMonthYearChange(r.state.date)});}),pe(he(r),"header",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.state.date,n=be(t,r.props.locale),o=[];return r.props.showWeekNumbers&&o.push(React__default.createElement("div",{key:"W",className:"react-datepicker__day-name"},r.props.weekLabel||"#")),o.concat([0,1,2,3,4,5,6].map(function(t){var o=addDays(n,t),a=r.formatWeekday(o,r.props.locale);return React__default.createElement("div",{key:t,className:"react-datepicker__day-name"},a)}))}),pe(he(r),"formatWeekday",function(e,t){return r.props.formatWeekDay?function(e,t,r){return t(_e(e,"EEEE",r))}(e,r.props.formatWeekDay,t):r.props.useWeekdaysShort?function(e,t){return _e(e,"EEE",t)}(e,t):function(e,t){return _e(e,"EEEEEE",t)}(e,t)}),pe(he(r),"decreaseYear",function(){r.setState(function(e){var t=e.date;return {date:subYears(t,1)}},function(){return r.handleYearChange(r.state.date)});}),pe(he(r),"renderPreviousButton",function(){if(!r.props.renderCustomHeader){var t=Ke(r.state.date,r.props);if((r.props.forceShowMonthNavigation||r.props.showDisabledMonthNavigation||!t)&&!r.props.showTimeSelectOnly){var n=["react-datepicker__navigation","react-datepicker__navigation--previous"],o=r.decreaseMonth;return (r.props.showMonthYearPicker||r.props.showQuarterYearPicker)&&(o=r.decreaseYear),t&&r.props.showDisabledMonthNavigation&&(n.push("react-datepicker__navigation--previous--disabled"),o=null),React__default.createElement("button",{type:"button",className:n.join(" "),onClick:o},r.props.showMonthYearPicker||r.props.showQuarterYearPicker?r.props.previousYearButtonLabel:r.props.previousMonthButtonLabel)}}}),pe(he(r),"increaseYear",function(){r.setState(function(e){var t=e.date;return {date:addYears(t,1)}},function(){return r.handleYearChange(r.state.date)});}),pe(he(r),"renderNextButton",function(){if(!r.props.renderCustomHeader){var t=qe(r.state.date,r.props);if((r.props.forceShowMonthNavigation||r.props.showDisabledMonthNavigation||!t)&&!r.props.showTimeSelectOnly){var n=["react-datepicker__navigation","react-datepicker__navigation--next"];r.props.showTimeSelect&&n.push("react-datepicker__navigation--next--with-time"),r.props.todayButton&&n.push("react-datepicker__navigation--next--with-today-button");var o=r.increaseMonth;return (r.props.showMonthYearPicker||r.props.showQuarterYearPicker)&&(o=r.increaseYear),t&&r.props.showDisabledMonthNavigation&&(n.push("react-datepicker__navigation--next--disabled"),o=null),React__default.createElement("button",{type:"button",className:n.join(" "),onClick:o},r.props.showMonthYearPicker||r.props.showQuarterYearPicker?r.props.nextYearButtonLabel:r.props.nextMonthButtonLabel)}}}),pe(he(r),"renderCurrentMonth",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.state.date,n=["react-datepicker__current-month"];return r.props.showYearDropdown&&n.push("react-datepicker__current-month--hasYearDropdown"),r.props.showMonthDropdown&&n.push("react-datepicker__current-month--hasMonthDropdown"),r.props.showMonthYearDropdown&&n.push("react-datepicker__current-month--hasMonthYearDropdown"),React__default.createElement("div",{className:n.join(" ")},_e(t,r.props.dateFormat,r.props.locale))}),pe(he(r),"renderYearDropdown",function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(r.props.showYearDropdown&&!t)return React__default.createElement(et,{adjustDateOnChange:r.props.adjustDateOnChange,date:r.state.date,onSelect:r.props.onSelect,setOpen:r.props.setOpen,dropdownMode:r.props.dropdownMode,onChange:r.changeYear,minDate:r.props.minDate,maxDate:r.props.maxDate,year:getYear(r.state.date),scrollableYearDropdown:r.props.scrollableYearDropdown,yearDropdownItemNumber:r.props.yearDropdownItemNumber})}),pe(he(r),"renderMonthDropdown",function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(r.props.showMonthDropdown&&!t)return React__default.createElement(rt,{dropdownMode:r.props.dropdownMode,locale:r.props.locale,onChange:r.changeMonth,month:getMonth(r.state.date),useShortMonthInDropdown:r.props.useShortMonthInDropdown})}),pe(he(r),"renderMonthYearDropdown",function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(r.props.showMonthYearDropdown&&!t)return React__default.createElement(at,{dropdownMode:r.props.dropdownMode,locale:r.props.locale,dateFormat:r.props.dateFormat,onChange:r.changeMonthYear,minDate:r.props.minDate,maxDate:r.props.maxDate,date:r.state.date,scrollableMonthYearDropdown:r.props.scrollableMonthYearDropdown})}),pe(he(r),"renderTodayButton",function(){if(r.props.todayButton&&!r.props.showTimeSelectOnly)return React__default.createElement("div",{className:"react-datepicker__today-button",onClick:function(e){return r.props.onSelect(startOfDay(ge()),e)}},r.props.todayButton)}),pe(he(r),"renderDefaultHeader",function(t){var n=t.monthDate,o=t.i;return React__default.createElement("div",{className:"react-datepicker__header"},r.renderCurrentMonth(n),React__default.createElement("div",{className:"react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(r.props.dropdownMode),onFocus:r.handleDropdownFocus},r.renderMonthDropdown(0!==o),r.renderMonthYearDropdown(0!==o),r.renderYearDropdown(0!==o)),React__default.createElement("div",{className:"react-datepicker__day-names"},r.header(n)))}),pe(he(r),"renderCustomHeader",function(t){var n=t.monthDate;if(0!==t.i)return null;var o=Ke(r.state.date,r.props),a=qe(r.state.date,r.props);return React__default.createElement("div",{className:"react-datepicker__header react-datepicker__header--custom",onFocus:r.props.onDropdownFocus},r.props.renderCustomHeader(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(r,!0).forEach(function(t){pe(e,t,r[t]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));});}return e}({},r.state,{changeMonth:r.changeMonth,changeYear:r.changeYear,decreaseMonth:r.decreaseMonth,increaseMonth:r.increaseMonth,prevMonthButtonDisabled:o,nextMonthButtonDisabled:a})),React__default.createElement("div",{className:"react-datepicker__day-names"},r.header(n)))}),pe(he(r),"renderYearHeader",function(){return React__default.createElement("div",{className:"react-datepicker__header react-datepicker-year-header"},getYear(r.state.date))}),pe(he(r),"renderMonths",function(){if(!r.props.showTimeSelectOnly){for(var t=[],n=0;n<r.props.monthsShown;++n){var o=n-r.props.monthSelectedIn,a=addMonths(r.state.date,o),s="month-".concat(n);t.push(React__default.createElement("div",{key:s,ref:function(e){r.monthContainer=e;},className:"react-datepicker__month-container"},r.props.showMonthYearPicker||r.props.showQuarterYearPicker?r.renderYearHeader({monthDate:a,i:n}):r.props.renderCustomHeader?r.renderCustomHeader({monthDate:a,i:n}):r.renderDefaultHeader({monthDate:a,i:n}),React__default.createElement(lt,{onChange:r.changeMonthYear,day:a,dayClassName:r.props.dayClassName,onDayClick:r.handleDayClick,onDayMouseEnter:r.handleDayMouseEnter,onMouseLeave:r.handleMonthMouseLeave,onWeekSelect:r.props.onWeekSelect,orderInDisplay:n,formatWeekNumber:r.props.formatWeekNumber,locale:r.props.locale,minDate:r.props.minDate,maxDate:r.props.maxDate,excludeDates:r.props.excludeDates,highlightDates:r.props.highlightDates,selectingDate:r.state.selectingDate,includeDates:r.props.includeDates,inline:r.props.inline,fixedHeight:r.props.fixedHeight,filterDate:r.props.filterDate,preSelection:r.props.preSelection,selected:r.props.selected,selectsStart:r.props.selectsStart,selectsEnd:r.props.selectsEnd,showWeekNumbers:r.props.showWeekNumbers,startDate:r.props.startDate,endDate:r.props.endDate,peekNextMonth:r.props.peekNextMonth,setOpen:r.props.setOpen,shouldCloseOnSelect:r.props.shouldCloseOnSelect,renderDayContents:r.props.renderDayContents,disabledKeyboardNavigation:r.props.disabledKeyboardNavigation,showMonthYearPicker:r.props.showMonthYearPicker,showQuarterYearPicker:r.props.showQuarterYearPicker})));}return t}}),pe(he(r),"renderTimeSection",function(){if(r.props.showTimeSelect&&(r.state.monthContainer||r.props.showTimeSelectOnly))return React__default.createElement(dt,{selected:r.props.selected,onChange:r.props.onTimeChange,format:r.props.timeFormat,includeTimes:r.props.includeTimes,intervals:r.props.timeIntervals,minTime:r.props.minTime,maxTime:r.props.maxTime,excludeTimes:r.props.excludeTimes,timeCaption:r.props.timeCaption,todayButton:r.props.todayButton,showMonthDropdown:r.props.showMonthDropdown,showMonthYearDropdown:r.props.showMonthYearDropdown,showYearDropdown:r.props.showYearDropdown,withPortal:r.props.withPortal,monthRef:r.state.monthContainer,injectTimes:r.props.injectTimes,locale:r.props.locale})}),pe(he(r),"renderInputTimeSection",function(){var t=new Date(r.props.selected),n="".concat(Je(t.getHours()),":").concat(Je(t.getMinutes()));if(r.props.showTimeInput)return React__default.createElement(ut,{timeString:n,timeInputLabel:r.props.timeInputLabel,onChange:r.props.onTimeChange})}),r.containerRef=React__default.createRef(),r.state={date:r.getDateInView(),selectingDate:null,monthContainer:null},r}return le(n,React__default.Component),se(n,null,[{key:"defaultProps",get:function(){return {onDropdownFocus:function(){},monthsShown:1,monthSelectedIn:0,forceShowMonthNavigation:!1,timeCaption:"Time",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month"}}}]),se(n,[{key:"componentDidMount",value:function(){var e=this;this.props.showTimeSelect&&(this.assignMonthContainer=void e.setState({monthContainer:e.monthContainer}));}},{key:"componentDidUpdate",value:function(e){this.props.preSelection&&!Oe(this.props.preSelection,e.preSelection)?this.setState({date:this.props.preSelection}):this.props.openToDate&&!Oe(this.props.openToDate,e.openToDate)&&this.setState({date:this.props.openToDate});}},{key:"render",value:function(){var r=this.props.container||ht;return React__default.createElement("div",{ref:this.containerRef},React__default.createElement(r,{className:classnames("react-datepicker",this.props.className,{"react-datepicker--time-only":this.props.showTimeSelectOnly})},this.renderPreviousButton(),this.renderNextButton(),this.renderMonths(),this.renderTodayButton(),this.renderTimeSection(),this.renderInputTimeSection(),this.props.children))}}]),n}(),yt=function(r){function n(){return oe(this,n),me(this,de(n).apply(this,arguments))}return le(n,React__default.Component),se(n,[{key:"render",value:function(){var r,n=this.props,o=n.className,a=n.wrapperClassName,s=n.hidePopper,p=n.popperComponent,i=n.popperModifiers,c=n.popperPlacement,l=n.popperProps,d=n.targetComponent;if(!s){var u=classnames("react-datepicker-popper",o);r=React__default.createElement(Popper$1,ie({modifiers:i,placement:c},l),function(t){var r=t.ref,n=t.style,o=t.placement,a=t.arrowProps;return React__default.createElement("div",ie({ref:r,style:n},{className:u,"data-placement":o}),React__default.cloneElement(p,{arrowProps:a}))});}this.props.popperContainer&&(r=React__default.createElement(this.props.popperContainer,{},r));var h=classnames("react-datepicker-wrapper",a);return React__default.createElement(Manager,null,React__default.createElement(Reference,null,function(t){var r=t.ref;return React__default.createElement("div",{ref:r,className:h},d)}),r)}}],[{key:"defaultProps",get:function(){return {hidePopper:!0,popperModifiers:{preventOverflow:{enabled:!0,escapeWithReference:!0,boundariesElement:"viewport"}},popperProps:{},popperPlacement:"bottom-start"}}}]),n}(),Dt="react-datepicker-ignore-onclickoutside",gt=onClickOutsideHOC(vt);var kt="Date input not valid.",wt=function(n){function o(n){var a;return oe(this,o),pe(he(a=me(this,de(o).call(this,n))),"getPreSelection",function(){return a.props.openToDate?a.props.openToDate:a.props.selectsEnd&&a.props.startDate?a.props.startDate:a.props.selectsStart&&a.props.endDate?a.props.endDate:ge()}),pe(he(a),"calcInitialState",function(){var e=a.getPreSelection(),t=Ue(a.props),r=$e(a.props),n=t&&isBefore(e,t)?t:r&&isAfter(e,r)?r:e;return {open:a.props.startOpen||!1,preventFocus:!1,preSelection:a.props.selected?a.props.selected:n,highlightDates:ze(a.props.highlightDates),focused:!1}}),pe(he(a),"clearPreventFocusTimeout",function(){a.preventFocusTimeout&&clearTimeout(a.preventFocusTimeout);}),pe(he(a),"setFocus",function(){a.input&&a.input.focus&&a.input.focus();}),pe(he(a),"setBlur",function(){a.input&&a.input.blur&&a.input.blur(),a.cancelFocusInput();}),pe(he(a),"setOpen",function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.setState({open:e,preSelection:e&&a.state.open?a.state.preSelection:a.calcInitialState().preSelection,lastPreSelectChange:Ct},function(){e||a.setState(function(e){return {focused:!!t&&e.focused}},function(){!t&&a.setBlur(),a.setState({inputValue:null});});});}),pe(he(a),"inputOk",function(){return isDate(a.state.preSelection)}),pe(he(a),"isCalendarOpen",function(){return void 0===a.props.open?a.state.open&&!a.props.disabled&&!a.props.readOnly:a.props.open}),pe(he(a),"handleFocus",function(e){a.state.preventFocus||(a.props.onFocus(e),a.props.preventOpenOnFocus||a.props.readOnly||a.setOpen(!0)),a.setState({focused:!0});}),pe(he(a),"cancelFocusInput",function(){clearTimeout(a.inputFocusTimeout),a.inputFocusTimeout=null;}),pe(he(a),"deferFocusInput",function(){a.cancelFocusInput(),a.inputFocusTimeout=setTimeout(function(){return a.setFocus()},1);}),pe(he(a),"handleDropdownFocus",function(){a.cancelFocusInput();}),pe(he(a),"handleBlur",function(e){!a.state.open||a.props.withPortal||a.props.showTimeInput?a.props.onBlur(e):a.deferFocusInput(),a.setState({focused:!1});}),pe(he(a),"handleCalendarClickOutside",function(e){a.props.inline||a.setOpen(!1),a.props.onClickOutside(e),a.props.withPortal&&e.preventDefault();}),pe(he(a),"handleChange",function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[0];if(!a.props.onChangeRaw||(a.props.onChangeRaw.apply(he(a),t),"function"==typeof n.isDefaultPrevented&&!n.isDefaultPrevented())){a.setState({inputValue:n.target.value,lastPreSelectChange:_t});var o=ke(n.target.value,a.props.dateFormat,a.props.locale,a.props.strictParsing);!o&&n.target.value||a.setSelected(o,n,!0);}}),pe(he(a),"handleSelect",function(e,t,r){a.setState({preventFocus:!0},function(){return a.preventFocusTimeout=setTimeout(function(){return a.setState({preventFocus:!1})},50),a.preventFocusTimeout}),a.setSelected(e,t,void 0,r),!a.props.shouldCloseOnSelect||a.props.showTimeSelect?a.setPreSelection(e):a.props.inline||a.setOpen(!1);}),pe(he(a),"setSelected",function(e,t,r,n){var o=e;if(null===o||!We(o,a.props)){if(!Pe(a.props.selected,o)||a.props.allowSameDay){if(null!==o){if(a.props.selected){var s=a.props.selected;r&&(s=ge(o)),o=Ce(o,{hour:getHours(s),minute:getMinutes(s),second:getSeconds(s)});}a.props.inline||a.setState({preSelection:o}),a.props.inline&&a.props.monthsShown>1&&!a.props.inlineFocusSelectedMonth&&a.setState({monthSelectedIn:n});}a.props.onChange(o,t);}a.props.onSelect(o,t),r||a.setState({inputValue:null});}}),pe(he(a),"setPreSelection",function(e){var t=void 0!==a.props.minDate,r=void 0!==a.props.maxDate,n=!0;e&&(t&&r?n=Te(e,a.props.minDate,a.props.maxDate):t?n=isAfter(e,a.props.minDate):r&&(n=isBefore(e,a.props.maxDate))),n&&a.setState({preSelection:e});}),pe(he(a),"handleTimeChange",function(e){var t=Ce(a.props.selected?a.props.selected:a.getPreSelection(),{hour:getHours(e),minute:getMinutes(e)});a.setState({preSelection:t}),a.props.onChange(t),a.props.shouldCloseOnSelect&&a.setOpen(!1),a.props.showTimeInput&&a.setOpen(!0),a.setState({inputValue:null});}),pe(he(a),"onInputClick",function(){a.props.disabled||a.props.readOnly||a.setOpen(!0),a.props.onInputClick();}),pe(he(a),"onInputKeyDown",function(e){a.props.onKeyDown(e);var t=e.key;if(a.state.open||a.props.inline||a.props.preventOpenOnFocus){var r=ge(a.state.preSelection);if("Enter"===t)e.preventDefault(),a.inputOk()&&a.state.lastPreSelectChange===Ct?(a.handleSelect(r,e),!a.props.shouldCloseOnSelect&&a.setPreSelection(r)):a.setOpen(!1);else if("Escape"===t)e.preventDefault(),a.setOpen(!1),a.inputOk()||a.props.onInputError({code:1,msg:kt});else if("Tab"===t)a.setOpen(!1,!0);else if(!a.props.disabledKeyboardNavigation){var n;switch(t){case"ArrowLeft":n=subDays(r,1);break;case"ArrowRight":n=addDays(r,1);break;case"ArrowUp":n=subWeeks(r,1);break;case"ArrowDown":n=addWeeks(r,1);break;case"PageUp":n=subMonths(r,1);break;case"PageDown":n=addMonths(r,1);break;case"Home":n=subYears(r,1);break;case"End":n=addYears(r,1);}if(!n)return void(a.props.onInputError&&a.props.onInputError({code:1,msg:kt}));e.preventDefault(),a.setState({lastPreSelectChange:Ct}),a.props.adjustDateOnChange&&a.setSelected(n),a.setPreSelection(n);}}else"ArrowDown"!==t&&"ArrowUp"!==t||a.onInputClick();}),pe(he(a),"onClearClick",function(e){e&&e.preventDefault&&e.preventDefault(),a.props.onChange(null,e),a.setState({inputValue:null});}),pe(he(a),"clear",function(){a.onClearClick();}),pe(he(a),"renderCalendar",function(){return a.props.inline||a.isCalendarOpen()?React__default.createElement(gt,{ref:function(e){a.calendar=e;},locale:a.props.locale,adjustDateOnChange:a.props.adjustDateOnChange,setOpen:a.setOpen,shouldCloseOnSelect:a.props.shouldCloseOnSelect,dateFormat:a.props.dateFormatCalendar,useWeekdaysShort:a.props.useWeekdaysShort,formatWeekDay:a.props.formatWeekDay,dropdownMode:a.props.dropdownMode,selected:a.props.selected,preSelection:a.state.preSelection,onSelect:a.handleSelect,onWeekSelect:a.props.onWeekSelect,openToDate:a.props.openToDate,minDate:a.props.minDate,maxDate:a.props.maxDate,selectsStart:a.props.selectsStart,selectsEnd:a.props.selectsEnd,startDate:a.props.startDate,endDate:a.props.endDate,excludeDates:a.props.excludeDates,filterDate:a.props.filterDate,onClickOutside:a.handleCalendarClickOutside,formatWeekNumber:a.props.formatWeekNumber,highlightDates:a.state.highlightDates,includeDates:a.props.includeDates,includeTimes:a.props.includeTimes,injectTimes:a.props.injectTimes,inline:a.props.inline,peekNextMonth:a.props.peekNextMonth,showMonthDropdown:a.props.showMonthDropdown,useShortMonthInDropdown:a.props.useShortMonthInDropdown,showMonthYearDropdown:a.props.showMonthYearDropdown,showWeekNumbers:a.props.showWeekNumbers,showYearDropdown:a.props.showYearDropdown,withPortal:a.props.withPortal,forceShowMonthNavigation:a.props.forceShowMonthNavigation,showDisabledMonthNavigation:a.props.showDisabledMonthNavigation,scrollableYearDropdown:a.props.scrollableYearDropdown,scrollableMonthYearDropdown:a.props.scrollableMonthYearDropdown,todayButton:a.props.todayButton,weekLabel:a.props.weekLabel,outsideClickIgnoreClass:Dt,fixedHeight:a.props.fixedHeight,monthsShown:a.props.monthsShown,monthSelectedIn:a.state.monthSelectedIn,onDropdownFocus:a.handleDropdownFocus,onMonthChange:a.props.onMonthChange,onYearChange:a.props.onYearChange,dayClassName:a.props.dayClassName,showTimeSelect:a.props.showTimeSelect,showTimeSelectOnly:a.props.showTimeSelectOnly,onTimeChange:a.handleTimeChange,timeFormat:a.props.timeFormat,timeIntervals:a.props.timeIntervals,minTime:a.props.minTime,maxTime:a.props.maxTime,excludeTimes:a.props.excludeTimes,timeCaption:a.props.timeCaption,className:a.props.calendarClassName,container:a.props.calendarContainer,yearDropdownItemNumber:a.props.yearDropdownItemNumber,previousMonthButtonLabel:a.props.previousMonthButtonLabel,nextMonthButtonLabel:a.props.nextMonthButtonLabel,previousYearButtonLabel:a.props.previousYearButtonLabel,nextYearButtonLabel:a.props.nextYearButtonLabel,timeInputLabel:a.props.timeInputLabel,disabledKeyboardNavigation:a.props.disabledKeyboardNavigation,renderCustomHeader:a.props.renderCustomHeader,popperProps:a.props.popperProps,renderDayContents:a.props.renderDayContents,onDayMouseEnter:a.props.onDayMouseEnter,onMonthMouseLeave:a.props.onMonthMouseLeave,showTimeInput:a.props.showTimeInput,showMonthYearPicker:a.props.showMonthYearPicker,showQuarterYearPicker:a.props.showQuarterYearPicker},a.props.children):null}),pe(he(a),"renderDateInput",function(){var r,n,o,s,p,i=classnames(a.props.className,pe({},Dt,a.state.open)),c=a.props.customInput||React__default.createElement("input",{type:"text"}),l=a.props.customInputRef||"ref",d="string"==typeof a.props.value?a.props.value:"string"==typeof a.state.inputValue?a.state.inputValue:(n=a.props.selected,o=a.props,s=o.dateFormat,p=o.locale,n&&_e(n,Array.isArray(s)?s[0]:s,p)||"");return React__default.cloneElement(c,(pe(r={},l,function(e){a.input=e;}),pe(r,"value",d),pe(r,"onBlur",a.handleBlur),pe(r,"onChange",a.handleChange),pe(r,"onClick",a.onInputClick),pe(r,"onFocus",a.handleFocus),pe(r,"onKeyDown",a.onInputKeyDown),pe(r,"id",a.props.id),pe(r,"name",a.props.name),pe(r,"autoFocus",a.props.autoFocus),pe(r,"placeholder",a.props.placeholderText),pe(r,"disabled",a.props.disabled),pe(r,"autoComplete",a.props.autoComplete),pe(r,"className",classnames(c.props.className,i)),pe(r,"title",a.props.title),pe(r,"readOnly",a.props.readOnly),pe(r,"required",a.props.required),pe(r,"tabIndex",a.props.tabIndex),r))}),pe(he(a),"renderClearButton",function(){return a.props.isClearable&&null!=a.props.selected?React__default.createElement("button",{type:"button",className:"react-datepicker__close-icon","aria-label":"Close",onClick:a.onClearClick,title:a.props.clearButtonTitle,tabIndex:-1}):null}),a.state=a.calcInitialState(),a}return le(o,React__default.Component),se(o,null,[{key:"defaultProps",get:function(){return {allowSameDay:!1,dateFormat:"MM/dd/yyyy",dateFormatCalendar:"LLLL yyyy",onChange:function(){},disabled:!1,disabledKeyboardNavigation:!1,dropdownMode:"scroll",onFocus:function(){},onBlur:function(){},onKeyDown:function(){},onInputClick:function(){},onSelect:function(){},onClickOutside:function(){},onMonthChange:function(){},preventOpenOnFocus:!1,onYearChange:function(){},onInputError:function(){},monthsShown:1,readOnly:!1,withPortal:!1,shouldCloseOnSelect:!0,showTimeSelect:!1,showTimeInput:!1,showMonthYearPicker:!1,showQuarterYearPicker:!1,strictParsing:!1,timeIntervals:30,timeCaption:"Time",previousMonthButtonLabel:"Previous Month",nextMonthButtonLabel:"Next Month",previousYearButtonLabel:"Previous Year",nextYearButtonLabel:"Next Year",timeInputLabel:"Time",renderDayContents:function(e){return e},inlineFocusSelectedMonth:!1}}}]),se(o,[{key:"componentDidUpdate",value:function(e,t){var r,n;e.inline&&(r=e.selected,n=this.props.selected,r&&n?getMonth(r)!==getMonth(n)||getYear(r)!==getYear(n):r!==n)&&this.setPreSelection(this.props.selected),void 0!==this.state.monthSelectedIn&&e.monthsShown!==this.props.monthsShown&&this.setState({monthSelectedIn:0}),e.highlightDates!==this.props.highlightDates&&this.setState({highlightDates:ze(this.props.highlightDates)}),t.focused||Pe(e.selected,this.props.selected)||this.setState({inputValue:null});}},{key:"componentWillUnmount",value:function(){this.clearPreventFocusTimeout();}},{key:"render",value:function(){var t=this.renderCalendar();return this.props.inline&&!this.props.withPortal?t:this.props.withPortal?React__default.createElement("div",null,this.props.inline?null:React__default.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),this.state.open||this.props.inline?React__default.createElement("div",{className:"react-datepicker__portal"},t):null):React__default.createElement(yt,{className:this.props.popperClassName,wrapperClassName:this.props.wrapperClassName,hidePopper:!this.isCalendarOpen(),popperModifiers:this.props.popperModifiers,targetComponent:React__default.createElement("div",{className:"react-datepicker__input-container"},this.renderDateInput(),this.renderClearButton()),popperContainer:this.props.popperContainer,popperComponent:t,popperPlacement:this.props.popperPlacement,popperProps:this.props.popperProps})}}]),o}(),_t="input",Ct="navigate";

// import { format } from 'date-fns'

// import { Button } from './styledComponents'

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
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['value', 'placeholder', 'className']);
	// const [showPortal, setShowPortal] = useState(false)

	// if (withTEPortal) {
	// 	const { dateFormat, onChange } = rest
	// 	return (
	// 		<Fragment>
	// 			<Button onClick={() => setShowPortal(!showPortal)}>
	// 				{format(determineValue(value), dateFormat)}
	// 			</Button>
	// 			{showPortal && (
	// 				<DatePicker
	// 					selected={determineValue(value)}
	// 					placeholderText={placeholder}
	// 					withPortal
	// 					inline
	// 					{...rest}
	// 					onChange={(date) => {
	// 						onChange(date)
	// 						setShowPortal(false)
	// 					}}
	// 				/>
	// 			)}
	// 		</Fragment>
	// 	)
	// }

	return React__default.createElement(wt, _extends({
		selected: determineValue(value),
		placeholderText: placeholder,
		className: 'TEDatetimeInput ' + className
	}, rest));
};

TEDatetimeInput.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
	placeholder: PropTypes.string,
	autoComplete: PropTypes.string
};

TEDatetimeInput.defaultProps = {
	autoComplete: 'off'
	// dateFormat: 'MM/DD/YYYY',
};

var TEDatetimeRow = function TEDatetimeRow(props) {
	var size = props.size,
	    last = props.last,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    labelForKey = props.labelForKey,
	    rest = objectWithoutProperties(props, ['size', 'last', 'className', 'title', 'labelForKey']);


	return React__default.createElement(
		TERow,
		{ size: size, last: last, className: 'TEDatetimeRow ' + className },
		React__default.createElement(
			TELabel,
			{
				htmlFor: labelForKey,
				required: rest.required,
				disabled: rest.disabled,
				className: 'TEDatetimeRowTitle'
			},
			title
		),
		React__default.createElement(TEDatetimeInput, _extends({ id: labelForKey }, rest, { className: 'TEDatetimeRowDateInput' }))
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
var IconContext = React.createContext && React.createContext(DefaultContext);

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
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
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
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return React.createElement("svg", __assign({
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
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
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
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"}}]})(props);
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

var _templateObject$5 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n'], ['\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n']),
    _templateObject2$1 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n\tbackground-color: ', ';\n\tborder-radius: 5px;\n\tpadding-right: 5px;\n\n\t', '\n\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tborder: 1px solid ', ';\n\t\tbox-shadow: 0 0 0 1px ', ' inset;\n\t}\n'], ['\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n\tbackground-color: ', ';\n\tborder-radius: 5px;\n\tpadding-right: 5px;\n\n\t', '\n\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tborder: 1px solid ', ';\n\t\tbox-shadow: 0 0 0 1px ', ' inset;\n\t}\n']),
    _templateObject3$1 = taggedTemplateLiteral(['\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 14px;\n\tcolor: ', ';\n\tpadding: 10px;\n\n\t', '\n'], ['\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 14px;\n\tcolor: ', ';\n\tpadding: 10px;\n\n\t', '\n']),
    _templateObject4$1 = taggedTemplateLiteral([''], ['']),
    _templateObject5$1 = taggedTemplateLiteral(['\n\tmargin-right: 10px;\n\tvertical-align: middle;\n\tfont-size: 18px;\n'], ['\n\tmargin-right: 10px;\n\tvertical-align: middle;\n\tfont-size: 18px;\n']),
    _templateObject6 = taggedTemplateLiteral(['\n\tdisplay: none;\n'], ['\n\tdisplay: none;\n']),
    _templateObject7 = taggedTemplateLiteral(['\n\twidth: auto;\n\tpadding: 5px 10px;\n\ttext-align: center;\n'], ['\n\twidth: auto;\n\tpadding: 5px 10px;\n\ttext-align: center;\n']),
    _templateObject8 = taggedTemplateLiteral(['\n\tcolor: inherit;\n\tdisplay: block;\n'], ['\n\tcolor: inherit;\n\tdisplay: block;\n']),
    _templateObject9 = taggedTemplateLiteral(['\n\tdisplay: block;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\tfont-size: 14px;\n\tcolor: ', ';\n'], ['\n\tdisplay: block;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\tfont-size: 14px;\n\tcolor: ', ';\n']);

var Wrapper = styled__default.div(_templateObject$5);
var InputWrapper$1 = styled__default.div(_templateObject2$1, function (props) {
	return props.theme.white;
}, function (props) {
	var theme = props.theme,
	    disabled = props.disabled,
	    active = props.active;

	if (active) {
		return '\n                border: 1px solid ' + theme.primary + ';\n                box-shadow: 0 0 0 1px ' + theme.primary + ' inset;\n            ';
	} else if (disabled) {
		return '\n                border: 1px solid ' + theme.lighterGray + ';\n                box-shadow: none;\n            ';
	}
	return '\n\t\t\tborder: 1px solid ' + theme.lightGray + ';\n\t\t\tbox-shadow: none;\n\t\t';
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});
var Label$2 = styled__default.label(_templateObject3$1, function (props) {
	return props.disabled ? props.theme.gray : props.theme.darkGray;
}, function (props) {
	var disabled = props.disabled,
	    active = props.active;

	if (disabled) {
		return 'cursor: not-allowed';
	} else if (active) {
		return 'cursor: copy';
	}
	return 'cursor: pointer';
});

var LabelCopy = styled__default.span(_templateObject4$1);

var LabelIcon = styled__default(FaFileUpload)(_templateObject5$1);

var Input$1 = styled__default.input(_templateObject6);

var ClearButton = styled__default(TEButton)(_templateObject7);

var ButtonIcon = styled__default(FaRegWindowClose)(_templateObject8);

var ErrorMessage = styled__default.span(_templateObject9, function (props) {
	return props.theme.errorRed;
});

var TEFileInput = function TEFileInput(props) {
	var _useState = React.useState(false),
	    _useState2 = slicedToArray(_useState, 2),
	    active = _useState2[0],
	    setActive = _useState2[1];

	var _useState3 = React.useState([]),
	    _useState4 = slicedToArray(_useState3, 2),
	    fileArray = _useState4[0],
	    setFileArray = _useState4[1];

	var _useState5 = React.useState({ error: false, message: '' }),
	    _useState6 = slicedToArray(_useState5, 2),
	    errorData = _useState6[0],
	    setErrorData = _useState6[1];

	var _useState7 = React.useState(props.resetKey || 'inputKey'),
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
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    _props$placeholder = props.placeholder,
	    placeholder = _props$placeholder === undefined ? 'Choose a file...' : _props$placeholder,
	    _props$hideClearButto = props.hideClearButton,
	    hideClearButton = _props$hideClearButto === undefined ? false : _props$hideClearButto,
	    rest = objectWithoutProperties(props, ['disabled', 'className', 'placeholder', 'hideClearButton']);


	var labelCopy = placeholder;
	if (fileArray && fileArray.length === 1) {
		labelCopy = fileArray[0].name;
	} else if (fileArray && fileArray.length > 1) {
		labelCopy = fileArray.length + ' files selected';
	}

	return React__default.createElement(
		Wrapper,
		{ className: 'TEFileInput ' + className },
		React__default.createElement(
			InputWrapper$1,
			{
				onDragEnter: onDragEnter,
				onDragLeave: onDragLeave,
				onDragOver: onDragOver,
				onDrop: onDrop,
				active: active,
				disabled: disabled,
				className: 'TEFileInputInputWrapper'
			},
			React__default.createElement(
				Label$2,
				{ active: active, disabled: disabled, className: 'TEFileInputLabel' },
				React__default.createElement(
					LabelCopy,
					{ className: 'TEFileInputCopy' },
					React__default.createElement(LabelIcon, { className: 'TEFileInputIcon' }),
					labelCopy
				),
				React__default.createElement(Input$1, _extends({}, rest, {
					disabled: disabled,
					type: 'file',
					key: inputKey,
					onChange: onFileChange,
					className: 'TEFileInputInput'
				}))
			),
			!hideClearButton && React__default.createElement(
				ClearButton,
				{
					onClick: handleClearInput,
					disabled: disabled,
					className: 'TEFileInputClearButton'
				},
				React__default.createElement(ButtonIcon, { className: 'TEFileInputClearIcon' })
			)
		),
		errorData && errorData.error && React__default.createElement(
			ErrorMessage,
			{ className: 'TEFileInputErrorMessage' },
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

var _templateObject$6 = taggedTemplateLiteral(['\n\tmax-width: 600px;\n'], ['\n\tmax-width: 600px;\n']),
    _templateObject2$2 = taggedTemplateLiteral([''], ['']),
    _templateObject3$2 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 5px;\n\tborder: 1px solid\n\t\t', ';\n\tbackground-color: ', ';\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 5px;\n\tborder: 1px solid\n\t\t', ';\n\tbackground-color: ', ';\n']),
    _templateObject4$2 = taggedTemplateLiteral(['\n\tflex: 1;\n\tpadding-left: 5px;\n\tdisplay: block;\n\tcolor: ', ';\n'], ['\n\tflex: 1;\n\tpadding-left: 5px;\n\tdisplay: block;\n\tcolor: ', ';\n']),
    _templateObject5$2 = taggedTemplateLiteral(['\n\twidth: auto;\n\tpadding: 5px 10px;\n\tcolor: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tborder-radius: 5px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\ttransition: color 0.2s ease-in 0s, background-color 0.2s ease-in 0s, border 0.2s ease-in 0s;\n\t:active,\n\t:hover {\n\t\tbackground-color: ', ';\n\t\tcolor: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n'], ['\n\twidth: auto;\n\tpadding: 5px 10px;\n\tcolor: ', ';\n\tbackground-color: ', ';\n\tborder: 1px solid ', ';\n\tborder-radius: 5px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\ttransition: color 0.2s ease-in 0s, background-color 0.2s ease-in 0s, border 0.2s ease-in 0s;\n\t:active,\n\t:hover {\n\t\tbackground-color: ', ';\n\t\tcolor: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n']),
    _templateObject6$1 = taggedTemplateLiteral(['\n\tcolor: inherit;\n\tdisplay: block;\n\tfont-size: 18px;\n'], ['\n\tcolor: inherit;\n\tdisplay: block;\n\tfont-size: 18px;\n']),
    _templateObject7$1 = taggedTemplateLiteral(['\n\twidth: auto;\n\tpadding: 5px 10px;\n\tmargin-left: 5;\n'], ['\n\twidth: auto;\n\tpadding: 5px 10px;\n\tmargin-left: 5;\n']),
    _templateObject8$1 = taggedTemplateLiteral(['\n\tmargin-top: 30px;\n'], ['\n\tmargin-top: 30px;\n']);

var WrapperRow = styled__default(TERow)(_templateObject$6);
var FileRowWrapper = styled__default.div(_templateObject2$2);
var FileWrapper = styled__default.div(_templateObject3$2, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.lightGray;
}, function (props) {
	return props.theme.white;
});
var FileName = styled__default.span(_templateObject4$2, function (props) {
	return props.disabled ? props.theme.gray : props.theme.darkerGray;
});
var DownloadFileButton = styled__default.a(_templateObject5$2, function (props) {
	return props.theme.darkGray;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.lightGray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.primary;
});
var DownloadImageButtonIcon = styled__default(FaFileDownload)(_templateObject6$1);
var ClearFileButton = styled__default(TEButton)(_templateObject7$1);
var ClearFileButtonIcon = styled__default(FaRegWindowClose)(_templateObject6$1);
var Input$2 = styled__default(TEFileInput)(_templateObject8$1);

var TEFileManagerRow = function TEFileManagerRow(props) {
	var _useState = React.useState('inputKey'),
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
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    fileSrcArray = props.fileSrcArray,
	    maxNumber = props.maxNumber,
	    accept = props.accept,
	    pattern = props.pattern,
	    disabled = props.disabled,
	    onRemove = props.onRemove,
	    required = props.required,
	    labelForKey = props.labelForKey;


	var labelText = title;
	if (maxNumber > 1 && fileSrcArray) {
		labelText = title + ' (' + fileSrcArray.length + '/' + maxNumber + ')';
	}

	return React__default.createElement(
		WrapperRow,
		{ size: size, last: last, className: 'TEFileManagerRow ' + className },
		React__default.createElement(
			TELabel,
			{
				htmlFor: labelForKey,
				required: required,
				disabled: disabled,
				className: 'TEFileManagerRowTitle'
			},
			labelText
		),
		React__default.createElement(
			FileRowWrapper,
			{ className: 'TEFileManagerRowWrapper' },
			fileSrcArray && fileSrcArray.map(function (imgSrcData, index) {
				var src = imgSrcData.src,
				    uid = imgSrcData.uid,
				    filename = imgSrcData.filename,
				    fileEnding = imgSrcData.fileEnding,
				    path = imgSrcData.path;

				return React__default.createElement(
					FileWrapper,
					{
						key: uid,
						className: 'TEFileManagerFileRow',
						disabled: disabled
					},
					React__default.createElement(
						FileName,
						{ className: 'TEFileManagerFileName', disabled: disabled },
						filename,
						'.',
						fileEnding
					),
					src && React__default.createElement(
						DownloadFileButton,
						{
							href: src,
							target: '_blank',
							rel: 'noopener noreferrer',
							key: uid,
							download: filename,
							className: 'TEFileManagerDownloadButton'
						},
						React__default.createElement(DownloadImageButtonIcon, { className: 'TEFileManagerDownloadIcon' })
					),
					!disabled && React__default.createElement(
						ClearFileButton,
						{
							onClick: function onClick() {
								return onRemove({ uid: uid, path: path, index: index });
							},
							className: 'TEFileManagerClearButton'
						},
						React__default.createElement(ClearFileButtonIcon, { className: 'TEFileManagerClearIcon' })
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
				pattern: pattern,
				className: 'TEFileManagerInput',
				hideClearButton: true
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

var TEFileRow = function TEFileRow(props) {
	var size = props.size,
	    last = props.last,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    labelForKey = props.labelForKey,
	    rest = objectWithoutProperties(props, ['size', 'last', 'className', 'title', 'labelForKey']);


	return React__default.createElement(
		TERow,
		{ size: size, last: last, className: 'TEFileRow ' + className },
		React__default.createElement(
			TELabel,
			{
				htmlFor: labelForKey,
				required: rest.required,
				disabled: rest.disabled,
				className: 'TEFileRowTitle'
			},
			title
		),
		React__default.createElement(TEFileInput, _extends({ id: labelForKey, className: 'TEFileRowInput' }, rest))
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

var _templateObject$7 = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 0px auto;\n\tbox-sizing: border-box;\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 0px auto;\n\tbox-sizing: border-box;\n']);

var Form = styled__default.form(_templateObject$7);

var TEForm = function TEForm(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['className']);

	return React__default.createElement(Form, _extends({ className: 'TEForm ' + className }, rest));
};

var dist = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t(PropTypes,React__default,reactDom__default);}(commonjsGlobal,function(e,t,o){function n(e,t){return new Promise(function(o,n){var i,a=new Image;a.onload=function(){return o(a)},a.onerror=n,!1==(null!==(i=e)&&!!i.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&t&&(a.crossOrigin=t),a.src=e;})}e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t,o=o&&o.hasOwnProperty("default")?o.default:o;var i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);}return e},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,i=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){i=!0,a=e;}finally{try{!n&&s.return&&s.return();}finally{if(i)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){var t=!1;return {promise:new Promise(function(o,n){e.then(function(e){return t?n({isCanceled:!0}):o(e)},function(e){return n(t?{isCanceled:!0}:e)});}),cancel:function(){t=!0;}}},c=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||navigator.msMaxTouchPoints>0)),d="undefined"!=typeof File,l={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},p=c?l.touch:l.desktop,g="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,m={x:.5,y:.5},v=function(e){function l(){var e,t,o;i(this,l);for(var n=arguments.length,a=Array(n),h=0;h<n;h++)a[h]=arguments[h];return t=o=s(this,(e=l.__proto__||Object.getPrototypeOf(l)).call.apply(e,[this].concat(a))),o.state={drag:!1,my:null,mx:null,image:m},o.handleImageReady=function(e){var t=o.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,o.setState({drag:!1,image:t},o.props.onImageReady),o.props.onLoadSuccess(t);},o.clearImage=function(){var e=o.canvas;e.getContext("2d").clearRect(0,0,e.width,e.height),o.setState({image:m});},o.handleMouseDown=function(e){(e=e||window.event).preventDefault(),o.setState({drag:!0,mx:null,my:null});},o.handleMouseUp=function(){o.state.drag&&(o.setState({drag:!1}),o.props.onMouseUp());},o.handleMouseMove=function(e){if(e=e||window.event,!1!==o.state.drag){e.preventDefault();var t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,n=e.targetTouches?e.targetTouches[0].pageY:e.clientY,i={mx:t,my:n},a=o.props.rotate;if(a=(a%=360)<0?a+360:a,o.state.mx&&o.state.my){var s=o.state.mx-t,h=o.state.my-n,u=o.state.image.width*o.props.scale,c=o.state.image.height*o.props.scale,d=o.getCroppingRect(),l=d.x,p=d.y;l*=u,p*=c;var g=function(e){return e*(Math.PI/180)},m=Math.cos(g(a)),v=Math.sin(g(a)),f=p+-s*v+h*m,y={x:(l+s*m+h*v)/u+1/o.props.scale*o.getXScale()/2,y:f/c+1/o.props.scale*o.getYScale()/2};o.props.onPositionChange(y),i.image=r({},o.state.image,y);}o.setState(i),o.props.onMouseMove(e);}},o.setCanvas=function(e){o.canvas=e;},s(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}(l,t.Component),a(l,[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(g=1);var e=o.findDOMNode(this.canvas).getContext("2d");if(this.props.image&&this.loadImage(this.props.image),this.paint(e),document){var t=!!function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0;}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t);}catch(t){e=!1;}return e}()&&{passive:!1},n=p.native;document.addEventListener(n.move,this.handleMouseMove,t),document.addEventListener(n.up,this.handleMouseUp,t),c&&(document.addEventListener(n.mouseMove,this.handleMouseMove,t),document.addEventListener(n.mouseUp,this.handleMouseUp,t));}}},{key:"componentWillReceiveProps",value:function(e){e.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height?this.loadImage(e.image):e.image||this.clearImage();}},{key:"componentDidUpdate",value:function(e,t){var n=o.findDOMNode(this.canvas),i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),this.paint(i),this.paintImage(i,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y||this.props.onImageChange();}},{key:"componentWillUnmount",value:function(){if(document){var e=p.native;document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),c&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1));}}},{key:"isVertical",value:function(){return this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,n=e.rotate,i=e.border,a={},r=this.getBorders(i),s=h(r,2),u=s[0],c=s[1],d=t,l=o;return this.isVertical()?(a.width=l,a.height=d):(a.width=d,a.height=l),a.width+=2*u,a.height+=2*c,{canvas:a,rotate:n,width:t,height:o,border:i}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var n=o.getContext("2d");return n.translate(o.width/2,o.height/2),n.rotate(this.props.rotate*Math.PI/180),n.translate(-o.width/2,-o.height/2),this.isVertical()&&n.translate((o.width-o.height)/2,(o.height-o.width)/2),n.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,n=document.createElement("canvas");return this.isVertical()?(n.width=o,n.height=t):(n.width=t,n.height=o),this.paintImage(n.getContext("2d"),this.state.image,0,1),n}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),n={x:e.x-t/2,y:e.y-o/2,width:t,height:o},i=0,a=1-n.width,s=0,h=1-n.height;return (this.props.disableBoundaryChecks||t>1||o>1)&&(i=-n.width,a=1,s=-n.height,h=1),r({},n,{x:Math.max(i,Math.min(n.x,a)),y:Math.max(s,Math.min(n.y,h))})}},{key:"loadImage",value:function(e){var t;d&&e instanceof File?this.loadingImage=u((t=e,new Promise(function(e,o){var i=new FileReader;i.onload=function(t){try{var i=n(t.target.result);e(i);}catch(t){o(t);}},i.readAsDataURL(t);}))).promise.then(this.handleImageReady).catch(this.props.onLoadFailure):"string"==typeof e&&(this.loadingImage=u(n(e,this.props.crossOrigin)).promise.then(this.handleImageReady).catch(this.props.onLoadFailure));}},{key:"getInitialSize",value:function(e,t){var o=void 0,n=void 0,i=this.getDimensions();return i.height/i.width>t/e?n=e*((o=this.getDimensions().height)/t):o=t*((n=this.getDimensions().width)/e),{height:o,width:n}}},{key:"paintImage",value:function(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:g;if(t.resource){var i=this.calculatePosition(t,o);e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(n,n),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,i.x,i.y,i.width,i.height),e.restore();}}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=this.getBorders(t),n=h(o,2),i=n[0],a=n[1],r=this.getCroppingRect(),s=e.width*this.props.scale,u=e.height*this.props.scale,c=-r.x*s,d=-r.y*u;return this.isVertical()?(c+=a,d+=i):(c+=i,d+=a),{x:c,y:d,height:u,width:s}}},{key:"paint",value:function(e){e.save(),e.scale(g,g),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t=this.props.borderRadius,o=this.getDimensions(),n=this.getBorders(o.border),i=h(n,2),a=i[0],r=i[1],s=o.canvas.height,u=o.canvas.width;t=Math.max(t,0),t=Math.min(t,u/2-a,s/2-r),e.beginPath(),function(e,t,o,n,i,a){if(0===a)e.rect(t,o,n,i);else{var r=n-a,s=i-a;e.translate(t,o),e.arc(a,a,a,Math.PI,1.5*Math.PI),e.lineTo(r,0),e.arc(r,a,a,1.5*Math.PI,2*Math.PI),e.lineTo(n,s),e.arc(r,s,a,2*Math.PI,.5*Math.PI),e.lineTo(a,i),e.arc(a,s,a,.5*Math.PI,Math.PI),e.translate(-t,-o);}}(e,a,r,u-2*a,s-2*r,t),e.rect(u,0,-u,s),e.fill("evenodd"),e.restore();}},{key:"render",value:function(){var e=this.props,o=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.style),n=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["scale","rotate","image","border","borderRadius","width","height","position","color","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling"])),i=this.getDimensions(),a={width:i.canvas.width,height:i.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},s={width:i.canvas.width*g,height:i.canvas.height*g,style:r({},a,o)};return s[p.react.down]=this.handleMouseDown,c&&(s[p.react.mouseDown]=this.handleMouseDown),t.createElement("canvas",r({ref:this.setCanvas},s,n))}}]),l}();return v.propTypes={scale:e.number,rotate:e.number,image:e.oneOfType([e.string].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d?[e.instanceOf(File)]:[]))),border:e.oneOfType([e.number,e.arrayOf(e.number)]),borderRadius:e.number,width:e.number,height:e.number,position:e.shape({x:e.number,y:e.number}),color:e.arrayOf(e.number),crossOrigin:e.oneOf(["","anonymous","use-credentials"]),onLoadFailure:e.func,onLoadSuccess:e.func,onImageReady:e.func,onImageChange:e.func,onMouseUp:e.func,onMouseMove:e.func,onPositionChange:e.func,disableBoundaryChecks:e.bool,disableHiDPIScaling:e.bool},v.defaultProps={scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1},v});
});

var _templateObject$8 = taggedTemplateLiteral(['\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tz-index: 1000;\n\toverflow-y: auto;\n\ttransition: visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;\n\topacity: ', ';\n\tvisibility: ', ';\n'], ['\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\tz-index: 1000;\n\toverflow-y: auto;\n\ttransition: visibility 0.25s ease-in-out, opacity 0.25s ease-in-out;\n\topacity: ', ';\n\tvisibility: ', ';\n']),
    _templateObject2$3 = taggedTemplateLiteral(['\n\tposition: relative;\n\tbackground-color: ', ';\n\tborder-radius: 20px;\n\tmargin: 50px auto;\n\tmax-width: 650px;\n'], ['\n\tposition: relative;\n\tbackground-color: ', ';\n\tborder-radius: 20px;\n\tmargin: 50px auto;\n\tmax-width: 650px;\n']);

var Background = styled__default.div(_templateObject$8, function (props) {
	return props.visible ? 1 : 0;
}, function (props) {
	return props.visible ? 'visible' : 'hidden';
});
var Content = styled__default.div(_templateObject2$3, function (props) {
	return props.theme.white;
});

var TEPopup = function TEPopup(props) {
	var visible = props.visible,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    children = props.children;


	return React__default.createElement(
		Background,
		{ className: 'TEPopup ' + className, visible: visible },
		React__default.createElement(
			Content,
			{ className: 'TEPopupContent' },
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

var _templateObject$9 = taggedTemplateLiteral(['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 650px;\n\t\tmargin: 100px auto;\n\t}\n'], ['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 650px;\n\t\tmargin: 100px auto;\n\t}\n']),
    _templateObject2$4 = taggedTemplateLiteral(['\n\tpadding: 30px;\n'], ['\n\tpadding: 30px;\n']),
    _templateObject3$3 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n']),
    _templateObject4$3 = taggedTemplateLiteral(['\n\tborder-top: 1px solid ', ';\n\tborder-right: 1px solid ', ';\n\tborder-bottom: none;\n\tborder-left: none;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 0px;\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tfont-size: 18px;\n\n\t:active,\n\t:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: 1px solid ', ';\n\t\tborder-bottom: none;\n\t\tborder-left: none;\n\t}\n'], ['\n\tborder-top: 1px solid ', ';\n\tborder-right: 1px solid ', ';\n\tborder-bottom: none;\n\tborder-left: none;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 0px;\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tfont-size: 18px;\n\n\t:active,\n\t:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: 1px solid ', ';\n\t\tborder-bottom: none;\n\t\tborder-left: none;\n\t}\n']),
    _templateObject5$3 = taggedTemplateLiteral(['\n\tborder-top: 1px solid ', ';\n\tborder-right: none;\n\tborder-bottom: none;\n\tborder-left: 1px solid ', ';\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 0px;\n\tborder-bottom-right-radius: 20px;\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tfont-size: 18px;\n\n\t:active,\n\t:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: none;\n\t\tborder-bottom: none;\n\t\tborder-left: 1px solid ', ';\n\t}\n'], ['\n\tborder-top: 1px solid ', ';\n\tborder-right: none;\n\tborder-bottom: none;\n\tborder-left: 1px solid ', ';\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 0px;\n\tborder-bottom-right-radius: 20px;\n\tpadding-top: 15px;\n\tpadding-bottom: 15px;\n\tfont-size: 18px;\n\n\t:active,\n\t:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: none;\n\t\tborder-bottom: none;\n\t\tborder-left: 1px solid ', ';\n\t}\n']);

var Popup = styled__default(TEPopup)(_templateObject$9);
var FormContent = styled__default.div(_templateObject2$4);
var ButtonContainer = styled__default.div(_templateObject3$3);
var LeftButton = styled__default(TEButton)(_templateObject4$3, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});
var RightButton = styled__default(TEButton)(_templateObject5$3, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});

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
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    children = props.children;


	return React__default.createElement(
		Popup,
		{ visible: visible, className: 'TEPopupForm ' + className },
		React__default.createElement(
			TEForm,
			{ onSubmit: handleSubmit, className: 'TEPopupFormForm' },
			React__default.createElement(
				FormContent,
				{ className: 'TEPopupFormContent' },
				children
			),
			React__default.createElement(
				ButtonContainer,
				{ className: 'TEPopupFormButtonContainer' },
				React__default.createElement(
					LeftButton,
					{
						onClick: onClose,
						className: 'TEPopupFormButton TEPopupFormLeftButton'
					},
					onCancelTitle
				),
				React__default.createElement(
					RightButton,
					{ type: 'submit', className: 'TEPopupFormButton TEPopupFormRightButton' },
					onSubmitTitle
				)
			)
		)
	);
};

TEPopupForm.propTypes = {
	visible: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onCloseTitle: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	onSubmitTitle: PropTypes.string
};

TEPopupForm.defaultProps = {
	visible: false,
	onCancelTitle: 'Cancel',
	onSubmitTitle: 'Submit'
};

var _templateObject$a = taggedTemplateLiteral(['\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tpadding-bottom: 15px;\n'], ['\n\tpadding-left: 30px;\n\tpadding-right: 30px;\n\tpadding-bottom: 15px;\n']),
    _templateObject2$5 = taggedTemplateLiteral(['\n\ttext-align: center;\n'], ['\n\ttext-align: center;\n']),
    _templateObject3$4 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n'], ['\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n']),
    _templateObject4$4 = taggedTemplateLiteral(['\n\twidth: auto;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n'], ['\n\twidth: auto;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n']),
    _templateObject5$4 = taggedTemplateLiteral(['\n\tdisplay: block;\n'], ['\n\tdisplay: block;\n']);

var Container$1 = styled__default.div(_templateObject$a);
var Row$1 = styled__default(TERow)(_templateObject2$5);
var RotateButtonWrapper = styled__default.div(_templateObject3$4);
var RotateButton = styled__default(TEButton)(_templateObject4$4);
var UndoRotationIcon = styled__default(FaUndo)(_templateObject5$4);
var RedoRotationIcon = styled__default(FaRedo)(_templateObject5$4);

//

var TEImageUpload = function TEImageUpload(props) {
	var _useState = React.useState(1.1),
	    _useState2 = slicedToArray(_useState, 2),
	    editorScale = _useState2[0],
	    setEditorScale = _useState2[1];

	var _useState3 = React.useState(0),
	    _useState4 = slicedToArray(_useState3, 2),
	    rotation = _useState4[0],
	    setRotation = _useState4[1];

	var editor = React.useRef(null);

	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    visible = props.visible,
	    file = props.file,
	    onCancel = props.onCancel,
	    _onSubmit = props.onSubmit,
	    onSubmitTitle = props.onSubmitTitle,
	    avatarEditorData = props.avatarEditorData;


	return React__default.createElement(
		TEPopupForm,
		{
			visible: visible,
			onSubmit: function onSubmit() {
				return _onSubmit(editor.current);
			},
			onClose: onCancel,
			onCancelTitle: 'Cancel',
			onSubmitTitle: onSubmitTitle,
			className: 'TEEditorPopup ' + className
		},
		React__default.createElement(
			Container$1,
			{ className: 'TEImageRowPopupContainer' },
			React__default.createElement(
				Row$1,
				{ className: 'TEImageRowPopupRow' },
				React__default.createElement(dist, _extends({
					ref: editor,
					image: file,
					width: 300,
					height: 300,
					border: 20
					// borderRadius={editorRadius}
					, color: [255, 255, 255, 0.6] // RGBA
					, scale: editorScale,
					rotate: rotation
				}, avatarEditorData))
			),
			React__default.createElement(
				Row$1,
				{ className: 'TEImageRowPopupRow' },
				React__default.createElement(
					TELabel,
					{ htmlFor: 'scale', className: 'TEImageRowPopupZoomTitle' },
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
					value: editorScale,
					className: 'TEImageRowPopupZoomSlider'
				})
			),
			React__default.createElement(
				Row$1,
				{ className: 'TEImageRowPopupRow' },
				React__default.createElement(
					TELabel,
					{ className: 'TEImageRowPopupRotateLabel' },
					'Rotate'
				),
				React__default.createElement(
					RotateButtonWrapper,
					{ className: 'TEImageRowPopupRotateButtonWrapper' },
					React__default.createElement(
						RotateButton,
						{
							className: 'TEImageRowPopupRotateButton',
							onClick: function onClick() {
								return setRotation(rotation + 90);
							}
						},
						React__default.createElement(UndoRotationIcon, { className: 'TEImageRowPopupRotateIcon' })
					),
					React__default.createElement(
						RotateButton,
						{
							className: 'TEImageRowPopupRotateButton',
							onClick: function onClick() {
								return setRotation(rotation - 90);
							}
						},
						React__default.createElement(RedoRotationIcon, { className: 'TEImageRowPopupRotateIcon' })
					)
				)
			)
		)
	);
};

TEImageUpload.defaultProps = {
	onSubmitTitle: 'Submit'
};

var _templateObject$b = taggedTemplateLiteral(['\n\toverflow-x: auto;\n\twidth: 100%;\n\tpadding: 5px;\n\tdisplay: flex;\n\talign-items: center;\n'], ['\n\toverflow-x: auto;\n\twidth: 100%;\n\tpadding: 5px;\n\tdisplay: flex;\n\talign-items: center;\n']),
    _templateObject2$6 = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 150px;\n\theight: 150px;\n\tmargin-left: 0px;\n\tmargin-right: 15px;\n\tborder: 1px solid ', ';\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 5px;\n\tflex-shrink: 0;\n'], ['\n\tposition: relative;\n\twidth: 150px;\n\theight: 150px;\n\tmargin-left: 0px;\n\tmargin-right: 15px;\n\tborder: 1px solid ', ';\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-radius: 5px;\n\tflex-shrink: 0;\n']),
    _templateObject3$5 = taggedTemplateLiteral(['\n\tdisplay: block;\n\twidth: 100%;\n\tobject-fit: contain;\n\tborder-radius: 5px;\n'], ['\n\tdisplay: block;\n\twidth: 100%;\n\tobject-fit: contain;\n\tborder-radius: 5px;\n']),
    _templateObject4$5 = taggedTemplateLiteral(['\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttop: 3px;\n\tright: 3px;\n\twidth: auto;\n\tpadding: 5px;\n\ttext-align: center;\n'], ['\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttop: 3px;\n\tright: 3px;\n\twidth: auto;\n\tpadding: 5px;\n\ttext-align: center;\n']),
    _templateObject5$5 = taggedTemplateLiteral(['\n\tcolor: inherit;\n\tdisplay: block;\n\tfont-size: 14px;\n'], ['\n\tcolor: inherit;\n\tdisplay: block;\n\tfont-size: 14px;\n']),
    _templateObject6$2 = taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 150px;\n\theight: 150px;\n\tflex-shrink: 0;\n\tpadding: 30px;\n\tmargin-left: 0px;\n\tmargin-right: 15px;\n\tbackground-color: ', ';\n\tcursor: pointer;\n\tborder: 1px solid\n\t\t', ';\n\tbox-shadow: none;\n\tborder-radius: 5px;\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\n\t:hover,\n\t:active {\n\t\tborder: 1px solid\n\t\t\t', ';\n\t\tbox-shadow: ', ';\n\t}\n'], ['\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 150px;\n\theight: 150px;\n\tflex-shrink: 0;\n\tpadding: 30px;\n\tmargin-left: 0px;\n\tmargin-right: 15px;\n\tbackground-color: ', ';\n\tcursor: pointer;\n\tborder: 1px solid\n\t\t', ';\n\tbox-shadow: none;\n\tborder-radius: 5px;\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\n\t:hover,\n\t:active {\n\t\tborder: 1px solid\n\t\t\t', ';\n\t\tbox-shadow: ', ';\n\t}\n']),
    _templateObject7$2 = taggedTemplateLiteral(['\n\tfont-size: 60px;\n\tcolor: ', ';\n'], ['\n\tfont-size: 60px;\n\tcolor: ', ';\n']),
    _templateObject8$2 = taggedTemplateLiteral(['\n\tdisplay: none;\n'], ['\n\tdisplay: none;\n']),
    _templateObject9$1 = taggedTemplateLiteral(['\n\tdisplay: block;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\tfont-size: 14px;\n\tcolor: ', ';\n'], ['\n\tdisplay: block;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\tfont-size: 14px;\n\tcolor: ', ';\n']);

var ImageRowWrapper = styled__default.div(_templateObject$b);
var ImageWrapper = styled__default.div(_templateObject2$6, function (props) {
	return props.theme.lightGray;
});
var Image$1 = styled__default.img(_templateObject3$5);
var ClearImageButton = styled__default(TEButton)(_templateObject4$5);
var ClearImageButtonIcon = styled__default(FaRegWindowClose)(_templateObject5$5);
var Label$3 = styled__default.label(_templateObject6$2, function (props) {
	return props.theme.white;
}, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.lightGray;
}, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.primary;
}, function (props) {
	return props.disabled ? 'none' : '0 0 0 1px ' + props.theme.primary + ' inset;';
});
var UploadIcon = styled__default(FaUpload)(_templateObject7$2, function (props) {
	return props.theme.lightGray;
});
var Input$3 = styled__default.input(_templateObject8$2);
var ErrorMessage$1 = styled__default.span(_templateObject9$1, function (props) {
	return props.theme.errorRed;
});

var TEImageRow = function TEImageRow(props) {
	var _useState = React.useState(false),
	    _useState2 = slicedToArray(_useState, 2),
	    editorVisible = _useState2[0],
	    setEditorVisible = _useState2[1];

	var _useState3 = React.useState(undefined),
	    _useState4 = slicedToArray(_useState3, 2),
	    file = _useState4[0],
	    setFile = _useState4[1];

	var _useState5 = React.useState({ error: false, message: '' }),
	    _useState6 = slicedToArray(_useState5, 2),
	    errorData = _useState6[0],
	    setErrorData = _useState6[1];

	var _useState7 = React.useState(props.resetKey || 'inputKey'),
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

	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    size = props.size,
	    last = props.last,
	    title = props.title,
	    imgSrc = props.imgSrc,
	    maxNumber = props.maxNumber,
	    accept = props.accept,
	    disabled = props.disabled,
	    required = props.required,
	    labelForKey = props.labelForKey,
	    avatarEditorData = props.avatarEditorData;


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
		{ size: size, last: last, className: 'TEImageRow ' + className },
		React__default.createElement(
			TELabel,
			{
				htmlFor: labelForKey,
				required: required,
				disabled: disabled,
				className: 'TEImageRowTitle'
			},
			labelText
		),
		React__default.createElement(
			ImageRowWrapper,
			{ className: 'TEImageRowWrapper' },
			imgSrcArray && imgSrcArray.map(function (imgSrcData) {
				var src = imgSrcData.src,
				    uid = imgSrcData.uid,
				    path = imgSrcData.path;

				return React__default.createElement(
					ImageWrapper,
					{ key: uid, className: 'TEImageRowImageWrapper' },
					React__default.createElement(
						'a',
						{ href: src, target: '_blank', rel: 'noopener noreferrer' },
						React__default.createElement(Image$1, { src: src, alt: uid, className: 'TEImageRowImage' })
					),
					React__default.createElement(
						ClearImageButton,
						{
							onClick: function onClick() {
								return handleClearImage({ uid: uid, path: path });
							},
							className: 'TEImageRowClearButton'
						},
						React__default.createElement(ClearImageButtonIcon, { className: 'TEImageRowClearIcon' })
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
			{ className: 'TEImageRowErrorMessage' },
			errorData.message
		),
		React__default.createElement(TEImageUpload, {
			visible: editorVisible,
			file: file,
			onCancel: handleCancelEditor,
			onSubmit: handleEditorSubmit,
			className: 'TEImageRowPopup',
			avatarEditorData: avatarEditorData
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

var _templateObject$c = taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 14px;\n\tpadding: 10px;\n\tbox-sizing: border-box;\n\tcursor: ', ';\n\tborder-radius: 5px;\n\tbackground-color: ', ';\n\tcolor: ', ';\n\n\tborder: 1px solid\n\t\t', ';\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tborder: 1px solid ', ';\n\t\tbox-shadow: 0 0 0 1px ', ' inset;\n\t}\n'], ['\n\tposition: relative;\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 14px;\n\tpadding: 10px;\n\tbox-sizing: border-box;\n\tcursor: ', ';\n\tborder-radius: 5px;\n\tbackground-color: ', ';\n\tcolor: ', ';\n\n\tborder: 1px solid\n\t\t', ';\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tborder: 1px solid ', ';\n\t\tbox-shadow: 0 0 0 1px ', ' inset;\n\t}\n']);

var Input$4 = styled__default.input(_templateObject$c, function (props) {
	return props.disabled ? 'not-allowed' : 'text';
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.disabled ? props.theme.gray : props.theme.darkerGray;
}, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.lightGray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});

var TEInput = function TEInput(props) {
	var _props$type = props.type,
	    type = _props$type === undefined ? 'text' : _props$type,
	    _props$disabled = props.disabled,
	    disabled = _props$disabled === undefined ? false : _props$disabled,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['type', 'disabled', 'className']);

	return React__default.createElement(Input$4, _extends({ type: type, disabled: disabled, className: 'TEInput ' + className }, rest));
};

TEInput.propTypes = {
	style: PropTypes.object,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool
};

var _templateObject$d = taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 14px;\n\tbox-sizing: border-box;\n\tpadding: 10px;\n\tbackground-color: ', ';\n\tmin-height: 140px;\n\tborder-radius: 5px;\n\tline-height: 1.5;\n\tcursor: ', ';\n\n\tcolor: ', ';\n\tborder: 1px solid\n\t\t', ';\n\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tborder: 1px solid\n\t\t\t', ';\n\t\tbox-shadow: 0 0 0 1px\n\t\t\t', ' inset;\n\t}\n'], ['\n\tposition: relative;\n\tdisplay: block;\n\twidth: 100%;\n\tfont-size: 14px;\n\tbox-sizing: border-box;\n\tpadding: 10px;\n\tbackground-color: ', ';\n\tmin-height: 140px;\n\tborder-radius: 5px;\n\tline-height: 1.5;\n\tcursor: ', ';\n\n\tcolor: ', ';\n\tborder: 1px solid\n\t\t', ';\n\n\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t:hover,\n\t:active {\n\t\tborder: 1px solid\n\t\t\t', ';\n\t\tbox-shadow: 0 0 0 1px\n\t\t\t', ' inset;\n\t}\n']);

var Textarea = styled__default.textarea(_templateObject$d, function (props) {
	return props.theme.white;
}, function (props) {
	return props.disabled ? 'not-allowed' : 'text';
}, function (props) {
	return props.disabled ? props.theme.gray : props.theme.darkerGray;
}, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.lightGray;
}, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.primary;
}, function (props) {
	return props.disabled ? props.theme.lighterGray : props.theme.primary;
});

var TETextarea = function TETextarea(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['className']);

	return React__default.createElement(Textarea, _extends({ className: 'TETextarea ' + className }, rest));
};

TETextarea.propTypes = {
	style: PropTypes.object,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	disabled: PropTypes.bool
};

var TEInputRow = function TEInputRow(props) {
	var size = props.size,
	    last = props.last,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    type = props.type,
	    onChange = props.onChange,
	    disabled = props.disabled,
	    value = props.value,
	    required = props.required,
	    labelForKey = props.labelForKey,
	    rest = objectWithoutProperties(props, ['size', 'last', 'className', 'title', 'type', 'onChange', 'disabled', 'value', 'required', 'labelForKey']);


	return React__default.createElement(
		TERow,
		{ size: size, last: last, className: 'TEInputRow ' + className },
		React__default.createElement(
			TELabel,
			{
				htmlFor: labelForKey,
				required: required,
				disabled: disabled,
				className: 'TEInputRowTitle'
			},
			title
		),
		type !== 'textarea' ? React__default.createElement(TEInput, _extends({
			type: type,
			value: value,
			onChange: onChange,
			id: labelForKey,
			disabled: disabled,
			className: 'TEInputRowInput'
		}, rest)) : React__default.createElement(TETextarea, _extends({
			value: value,
			onChange: onChange,
			id: labelForKey,
			disabled: disabled,
			className: 'TEInputRowInput'
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

var _templateObject$e = taggedTemplateLiteral([''], ['']),
    _templateObject2$7 = taggedTemplateLiteral(['\n\twidth: 100%;\n\tdisplay: flex;\n\tposition: relative;\n\tmargin-bottom: 30px;\n\n\t@media (max-width: 500px) {\n\t\tmargin-bottom: 15;\n\t}\n'], ['\n\twidth: 100%;\n\tdisplay: flex;\n\tposition: relative;\n\tmargin-bottom: 30px;\n\n\t@media (max-width: 500px) {\n\t\tmargin-bottom: 15;\n\t}\n']),
    _templateObject3$6 = taggedTemplateLiteral(['\n\tposition: absolute;\n\ttop: 14px;\n\tbackground-color: ', ';\n\theight: 2px;\n\twidth: ', '%;\n\tleft: ', '%;\n'], ['\n\tposition: absolute;\n\ttop: 14px;\n\tbackground-color: ', ';\n\theight: 2px;\n\twidth: ', '%;\n\tleft: ', '%;\n']),
    _templateObject4$6 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: ', '%;\n'], ['\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: ', '%;\n']),
    _templateObject5$6 = taggedTemplateLiteral(['\n\ttext-align: center;\n\twidth: 30px;\n\theight: 30px;\n\tmargin-bottom: 10px;\n\tline-height: 30px;\n\tborder: 1px solid ', ';\n\tz-index: 1;\n\tbackground-color: ', ';\n\tcolor: ', ';\n\ttransition: color 0.2s ease-in, background-color 0.2s ease-in;\n'], ['\n\ttext-align: center;\n\twidth: 30px;\n\theight: 30px;\n\tmargin-bottom: 10px;\n\tline-height: 30px;\n\tborder: 1px solid ', ';\n\tz-index: 1;\n\tbackground-color: ', ';\n\tcolor: ', ';\n\ttransition: color 0.2s ease-in, background-color 0.2s ease-in;\n']),
    _templateObject6$3 = taggedTemplateLiteral(['\n\ttext-align: center;\n\tfont-size: 18px;\n\tdisplay: block;\n\n\t@media (max-width: 500px) {\n\t\tfont-size: 16px;\n\t}\n\t@media (max-width: 350px) {\n\t\tfont-size: 14px;\n\t}\n'], ['\n\ttext-align: center;\n\tfont-size: 18px;\n\tdisplay: block;\n\n\t@media (max-width: 500px) {\n\t\tfont-size: 16px;\n\t}\n\t@media (max-width: 350px) {\n\t\tfont-size: 14px;\n\t}\n']),
    _templateObject7$3 = taggedTemplateLiteral(['\n\tmargin-bottom: 30px;\n'], ['\n\tmargin-bottom: 30px;\n']),
    _templateObject8$3 = taggedTemplateLiteral(['\n\tdisplay: flex;\n'], ['\n\tdisplay: flex;\n']);

var Container$2 = styled__default.div(_templateObject$e);
var StepContainer = styled__default.div(_templateObject2$7);
var StepBar = styled__default.div(_templateObject3$6, function (props) {
	return props.theme.primary;
}, function (props) {
	return 100 - 100 / props.stepCount;
}, function (props) {
	return 100 / props.stepCount / 2;
});
var StepWrapper = styled__default.div(_templateObject4$6, function (props) {
	return 100 / props.stepCount;
});
var StepNumber = styled__default.div(_templateObject5$6, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.active ? props.theme.primary : props.theme.white;
}, function (props) {
	return props.active ? props.theme.white : props.theme.primary;
});
var StepTitle = styled__default.span(_templateObject6$3);

var Form$1 = styled__default(TEForm)(_templateObject7$3);
var ButtonContainer$1 = styled__default.div(_templateObject8$3);

//TODO: Return to this and figure out way to handle popups and panel use cases without being weird to use in general
/*
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
	*/
var StepButton = styled__default(TEButton)(_templateObject$e);

//

var TEMultiStepForm = function TEMultiStepForm(props) {
	var _useState = React.useState(0),
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

	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    handleCancelOnClick = props.handleCancelOnClick,
	    stepData = props.stepData,
	    roundedButtons = props.roundedButtons;

	if (!stepData || stepData && stepData.length === 0) {
		return null;
	}

	return React__default.createElement(
		Container$2,
		{ className: 'TEMultiStepForm ' + className },
		React__default.createElement(
			StepContainer,
			{ className: 'TEMultiStepFormStepContainer' },
			React__default.createElement(StepBar, { stepCount: stepData.length, className: 'TEMultiStepFormStepBar' }),
			stepData.map(function (step, index) {
				var title = step.title;


				return React__default.createElement(
					StepWrapper,
					{
						key: index,
						stepCount: stepData.length,
						className: 'TEMultiStepFormStepWrapper'
					},
					React__default.createElement(
						StepNumber,
						{
							active: currentStep === index,
							className: 'TEMultiStepFormStepNumber'
						},
						index + 1
					),
					React__default.createElement(
						StepTitle,
						{ className: 'TEMultiStepFormStepTitle' },
						title
					)
				);
			})
		),
		React__default.createElement(
			Form$1,
			{ className: 'TEMultiStepFormForm' },
			stepData[currentStep] && stepData[currentStep].component
		),
		React__default.createElement(
			ButtonContainer$1,
			{ className: 'TEMultiStepFormButtonContainer' },
			(handleCancelOnClick || currentStep > 0) && React__default.createElement(
				StepButton,
				{
					onClick: handlePreviousPressed,
					position: 'left',
					rounded: roundedButtons,
					className: 'TEMultiStepFormStepButton TEMultiStepFormStepButtonLeft'
				},
				currentStep === 0 ? 'cancel' : 'previous'
			),
			React__default.createElement(
				StepButton,
				{
					onClick: handleNextPressed,
					position: 'right',
					rounded: roundedButtons,
					singleButton: !handleCancelOnClick && currentStep === 0,
					className: 'TEMultiStepFormStepButton TEMultiStepFormStepButtonright'
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

var _templateObject$f = taggedTemplateLiteral(['\n\tcursor: pointer;\n\tbox-sizing: border-box;\n'], ['\n\tcursor: pointer;\n\tbox-sizing: border-box;\n']);

var Input$5 = styled__default.input(_templateObject$f);

var TERadioButtonInput = function TERadioButtonInput(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['className']);

	return React__default.createElement(Input$5, _extends({ className: 'TERadioButtonInput ' + className }, rest, { type: 'radio' }));
};

var _templateObject$g = taggedTemplateLiteral(['\n\tmargin-bottom: 10px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n'], ['\n\tmargin-bottom: 10px;\n\tdisplay: inline-block;\n\tvertical-align: top;\n']),
    _templateObject2$8 = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-wrap: wrap;\n'], ['\n\tdisplay: flex;\n\tflex-wrap: wrap;\n']),
    _templateObject3$7 = taggedTemplateLiteral(['\n\tmargin-bottom: 5px;\n\tdisplay: flex;\n\talign-items: center;\n'], ['\n\tmargin-bottom: 5px;\n\tdisplay: flex;\n\talign-items: center;\n']),
    _templateObject4$7 = taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcursor: pointer;\n'], ['\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tcursor: pointer;\n']),
    _templateObject5$7 = taggedTemplateLiteral(['\n\twidth: auto;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tpadding-left: 10px;\n\tmargin-bottom: 0px;\n\tcursor: pointer;\n\tfont-size: 14px;\n\n\t@media (max-width: 550px) {\n\t\tfont-size: 12px;\n\t}\n'], ['\n\twidth: auto;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tpadding-left: 10px;\n\tmargin-bottom: 0px;\n\tcursor: pointer;\n\tfont-size: 14px;\n\n\t@media (max-width: 550px) {\n\t\tfont-size: 12px;\n\t}\n']);

var Container$3 = styled__default(TERow)(_templateObject$g);
var InputWrapper$2 = styled__default.div(_templateObject2$8);

var RowWrapper = styled__default(TERow)(_templateObject3$7);

var RadioButton = styled__default(TERadioButtonInput)(_templateObject4$7);
var Label$4 = styled__default(TELabel)(_templateObject5$7);

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
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;


	return React__default.createElement(
		Container$3,
		{ size: size, last: last, className: 'TERadioButtonGroup ' + className },
		React__default.createElement(
			TELabel,
			{ disabled: disabled, required: required, className: 'TERadioButtonGroupTitle' },
			title
		),
		React__default.createElement(
			InputWrapper$2,
			{ className: 'TERadioButtonGroupInputWrapper' },
			buttonArray && buttonArray.map(function (rowData) {
				var _manipulateRowData = manipulateRowData$1({ rowData: rowData, labelForKey: labelForKey }),
				    label = _manipulateRowData.label,
				    value = _manipulateRowData.value,
				    key = _manipulateRowData.key;

				return React__default.createElement(
					RowWrapper,
					{
						key: key,
						size: rowSize,
						className: 'TERadioButtonGroupRowWrapper'
					},
					React__default.createElement(RadioButton, {
						value: value,
						onChange: onChange,
						id: key,
						checked: checkedValue === value,
						disabled: disabled,
						className: 'TERadioButtonGroupRadioButton'
					}),
					React__default.createElement(
						Label$4,
						{
							htmlFor: key,
							disabled: disabled,
							className: 'TERadioButtonGroupLabel'
						},
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



var _reactDom2 = _interopRequireDefault(reactDom__default);



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

var renderComponent = exports.renderComponent = function renderComponent(Component, props) {
  if ((0, React__default.isValidElement)(Component)) {
    return (0, React__default.cloneElement)(Component, props);
  }
  if (Component) {
    return _react2.default.createElement(Component, props);
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
      searchInputAutoFocus = _ref.searchInputAutoFocus,
      otherProps = _objectWithoutProperties(_ref, ['searchEnabled', 'onChange', 'beforeOptionsComponent', 'searchPlaceholder', 'searchInputAutoFocus']);

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
        autoFocus: searchInputAutoFocus,
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
          searchInputAutoFocus = _props.searchInputAutoFocus,
          rest = _objectWithoutProperties(_props, ['searchEnabled', 'searchPlaceholder', 'beforeOptionsComponent', 'searchInputAutoFocus']);

      return _react2.default.createElement(_Select2.default, _extends({
        ref: function ref(select) {
          return _this2.select = select;
        },
        beforeOptionsComponent: _react2.default.createElement(_BeforeOptionsWrapper2.default, {
          searchEnabled: searchEnabled,
          searchInputAutoFocus: searchInputAutoFocus,
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
  searchEnabled: true,
  searchInputAutoFocus: true
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

// import 'react-power-select/dist/react-power-select.css'

//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

var TESearchSelectInput = function TESearchSelectInput(props) {
	var _props$type = props.type,
	    type = _props$type === undefined ? 'single' : _props$type,
	    _props$searchEnabled = props.searchEnabled,
	    value = props.value,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['type', 'searchEnabled', 'value', 'className']);


	if (type === 'single') {
		return React__default.createElement(lib_3, _extends({
			selected: value,
			className: 'TESearchSelectInput ' + className
		}, rest));
	}
	if (type === 'multi') {
		return React__default.createElement(lib_1, _extends({
			selected: value,
			className: 'TESearchSelectInput ' + className
		}, rest));
	}

	return React__default.createElement(lib_3, _extends({ selected: value, className: 'TESearchSelectInput ' + className }, rest));
};

TESearchSelectInput.propTypes = {
	type: PropTypes.string
};

// import 'react-power-select/dist/react-power-select.css'
//NOTE:
//
// - At this moment there is no way to style the dropdown component with styled components.
//

var TESearchSelectRow = function TESearchSelectRow(props) {
	var size = props.size,
	    last = props.last,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    labelForKey = props.labelForKey,
	    rest = objectWithoutProperties(props, ['size', 'last', 'className', 'title', 'labelForKey']);


	return React__default.createElement(
		TERow,
		{
			size: size,
			last: last,
			className: 'TESearchSelectRow ' + className,
			required: rest.required
		},
		React__default.createElement(
			TELabel,
			{
				htmlFor: labelForKey,
				required: rest.required,
				disabled: rest.disabled,
				className: 'TESearchSelectRowTitle'
			},
			title
		),
		React__default.createElement(TESearchSelectInput, _extends({ id: labelForKey, className: 'TESearchSelectRowInput' }, rest))
	);
};

TESearchSelectRow.propTypes = {
	size: PropTypes.string,
	last: PropTypes.bool,
	title: PropTypes.string,
	type: PropTypes.string,
	labelForKey: PropTypes.string
};

var _templateObject$h = taggedTemplateLiteral(['\n\t', '\n'], ['\n\t', '\n']),
    _templateObject2$9 = taggedTemplateLiteral(['\n\twidth: ', ';\n\talign-self: ', ';\n\ttext-align: left;\n\tdisplay: block;\n\tmargin-bottom: ', ';\n\tpadding-right: ', ';\n\tfont-size: 18px;\n\n\t@media (max-width: 550px) {\n\t\tfont-size: 16px;\n\t}\n'], ['\n\twidth: ', ';\n\talign-self: ', ';\n\ttext-align: left;\n\tdisplay: block;\n\tmargin-bottom: ', ';\n\tpadding-right: ', ';\n\tfont-size: 18px;\n\n\t@media (max-width: 550px) {\n\t\tfont-size: 16px;\n\t}\n']),
    _templateObject3$8 = taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\twidth: auto;\n'], ['\n\tdisplay: inline-block;\n\twidth: auto;\n']),
    _templateObject4$8 = taggedTemplateLiteral(['\n\tdisplay: none;\n'], ['\n\tdisplay: none;\n']),
    _templateObject5$8 = taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\twidth: auto;\n\tborder: 1px solid ', ';\n\tpadding: 8px 15px;\n\tmargin: 0px;\n\tbackground-color: ', ';\n\tfont-size: 14px;\n\tcolor: ', ';\n\tcursor: ', ';\n\tpointer-events: ', ';\n\n\ttransition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;\n\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid\n\t\t\t', ';\n\t}\n\t', '\n'], ['\n\tdisplay: inline-block;\n\twidth: auto;\n\tborder: 1px solid ', ';\n\tpadding: 8px 15px;\n\tmargin: 0px;\n\tbackground-color: ', ';\n\tfont-size: 14px;\n\tcolor: ', ';\n\tcursor: ', ';\n\tpointer-events: ', ';\n\n\ttransition: color 0.2s ease-in, background-color 0.2s ease-in, border 0.2s ease-in;\n\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid\n\t\t\t', ';\n\t}\n\t', '\n']);

var Row$2 = styled__default(TERow)(_templateObject$h, function (props) {
	return props.inline ? 'display: flex; justify-content: space-between;' : '';
});
var Label$5 = styled__default(TELabel)(_templateObject2$9, function (props) {
	return props.inline ? 'auto' : '100%';
}, function (props) {
	return props.inline ? 'center' : 'auto';
}, function (props) {
	return props.inline ? '0px' : '3px';
}, function (props) {
	return props.inline ? '10px' : '0px';
});
var SegmentedContainer = styled__default.div(_templateObject$h, function (props) {
	return props.inline ? '\n                display: inline-block;\n                width: auto;\n                white-space: nowrap;\n                align-self: center;\n            ' : '';
});
var LabelWrapper = styled__default.div(_templateObject3$8);
var Input$6 = styled__default(TERadioButtonInput)(_templateObject4$8);
var InputLabel = styled__default(TELabel)(_templateObject5$8, function (props) {
	return props.checked ? props.theme.primary : props.theme.lightGray;
}, function (props) {
	return props.checked ? props.theme.primary : props.theme.white;
}, function (props) {
	return props.checked ? props.theme.white : props.theme.darkGray;
}, function (props) {
	return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
	return props.disabled ? 'none' : 'auto';
}, function (props) {
	return props.disabled && !props.checked ? props.theme.gray : props.theme.white;
}, function (props) {
	return props.disabled && !props.checked ? props.theme.white : props.theme.primary;
}, function (props) {
	return props.disabled && !props.checked ? props.theme.lightGray : props.theme.primary;
}, function (props) {
	var first = props.first,
	    last = props.last;


	if (last) {
		return '\n                border-top-right-radius: 5px;\n                border-bottom-right-radius: 5px;\n            ';
	}
	if (first) {
		return '\n                border-top-left-radius: 5px;\n                border-bottom-left-radius: 5px;\n            ';
	}

	return '';
});

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
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;


	return React__default.createElement(
		Row$2,
		{ size: size, last: last, inline: inline, className: 'TESegmentedGroup ' + className },
		React__default.createElement(
			Label$5,
			{
				inline: inline,
				required: required,
				disabled: disabled,
				className: 'TESegmentedGroupTitle'
			},
			title
		),
		React__default.createElement(
			SegmentedContainer,
			{ inline: inline, className: 'TESegmentedGroupSegmentedContainer' },
			buttonArray && buttonArray.map(function (rowData, index) {
				var _manipulateRowData = manipulateRowData$2({ rowData: rowData, labelForKey: labelForKey }),
				    label = _manipulateRowData.label,
				    value = _manipulateRowData.value,
				    key = _manipulateRowData.key;

				return React__default.createElement(
					LabelWrapper,
					{
						key: key,
						className: 'TESegmentedGroupSegmentedLabelWrapper'
					},
					React__default.createElement(Input$6, {
						value: value,
						onChange: onChange,
						id: key,
						checked: checkedValue === value,
						disabled: disabled,
						className: 'TESegmentedGroupSegmentedInput'
					}),
					React__default.createElement(
						InputLabel,
						{
							htmlFor: key,
							key: key,
							first: index === 0,
							last: index + 1 === buttonArray.length,
							checked: checkedValue === value,
							disabled: disabled,
							className: 'TESegmentedGroupSegmentedLabel'
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

var _templateObject$i = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tjustify-content: space-between;\n\talign-items: flex-start;\n\tpadding: 30px;\n\n\t@media (max-width: 800px) {\n\t\tpadding: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding: 15px;\n\t}\n'], ['\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tjustify-content: space-between;\n\talign-items: flex-start;\n\tpadding: 30px;\n\n\t@media (max-width: 800px) {\n\t\tpadding: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding: 15px;\n\t}\n']);

var Container$4 = styled__default.div(_templateObject$i);

var TEPannelWrapper = function TEPannelWrapper(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['className']);

	return React__default.createElement(Container$4, _extends({ className: 'TEPanelWrapper ' + className }, rest));
};

var _templateObject$j = taggedTemplateLiteral(['\n\twidth: 100%;\n\tbackground-color: ', ';\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 20px;\n\tborder-bottom: 1px solid ', ';\n'], ['\n\twidth: 100%;\n\tbackground-color: ', ';\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding-bottom: 10px;\n\tmargin-bottom: 20px;\n\tborder-bottom: 1px solid ', ';\n']),
    _templateObject2$a = taggedTemplateLiteral(['\n\ttext-align: left;\n\tfont-size: 30px;\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n\tcolor: ', ';\n\tline-height: 1;\n\n\t@media (max-width: 1000px) {\n\t\tfont-size: 28px;\n\t}\n\t@media (max-width: 800px) {\n\t\tfont-size: 24px;\n\t}\n\t@media (max-width: 650px) {\n\t\tfont-size: 20px;\n\t}\n'], ['\n\ttext-align: left;\n\tfont-size: 30px;\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n\tcolor: ', ';\n\tline-height: 1;\n\n\t@media (max-width: 1000px) {\n\t\tfont-size: 28px;\n\t}\n\t@media (max-width: 800px) {\n\t\tfont-size: 24px;\n\t}\n\t@media (max-width: 650px) {\n\t\tfont-size: 20px;\n\t}\n']),
    _templateObject3$9 = taggedTemplateLiteral(['\n\twidth: auto;\n'], ['\n\twidth: auto;\n']),
    _templateObject4$9 = taggedTemplateLiteral(['\n\tfont-size: 18px;\n\tmargin-bottom: 0px;\n\tmargin-top: 0px;\n'], ['\n\tfont-size: 18px;\n\tmargin-bottom: 0px;\n\tmargin-top: 0px;\n']);

var Container$5 = styled__default.div(_templateObject$j, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.lightGray;
});
var Title = styled__default.h1(_templateObject2$a, function (props) {
	return props.theme.primary;
});
var ComponentWrapper = styled__default.div(_templateObject3$9);
var Subtitle = styled__default.p(_templateObject4$9);

var TEPanelTitle = function TEPanelTitle(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    leftComponent = props.leftComponent,
	    subtitle = props.subtitle,
	    rightComponent = props.rightComponent;


	return React__default.createElement(
		Container$5,
		{ className: 'TEPanelTitle ' + className },
		title && React__default.createElement(
			Title,
			{ className: 'TEPanelTitleTitle' },
			title
		),
		leftComponent && React__default.createElement(
			ComponentWrapper,
			{ className: 'TEPanelTitleLeftComponentWrapper' },
			leftComponent
		),
		subtitle && React__default.createElement(
			Subtitle,
			{ className: 'TEPanelTitleSubTitle' },
			subtitle
		),
		rightComponent && React__default.createElement(
			ComponentWrapper,
			{ className: 'TEPanelTitleRightComponentWrapper' },
			rightComponent
		)
	);
};

TEPanelTitle.propTypes = {
	title: PropTypes.string,
	leftComponent: PropTypes.node,
	subtitle: PropTypes.string,
	rightComponent: PropTypes.node
};

var _templateObject$k = taggedTemplateLiteral(['\n\tposition: relative;\n\tbackground-color: ', ';\n\tborder-radius: 5px;\n\tbox-shadow: ', ';\n\n\tpadding: 30px;\n\tmargin-bottom: 30px;\n\n\t@media (max-width: 800px) {\n\t\tpadding: 25px;\n\t\tmargin-bottom: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding: 20px;\n\t\tmargin-bottom: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding: 15px;\n\t\tmargin-bottom: 15px;\n\t\tborder-radius: 3px;\n\t}\n\t', '\n'], ['\n\tposition: relative;\n\tbackground-color: ', ';\n\tborder-radius: 5px;\n\tbox-shadow: ', ';\n\n\tpadding: 30px;\n\tmargin-bottom: 30px;\n\n\t@media (max-width: 800px) {\n\t\tpadding: 25px;\n\t\tmargin-bottom: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding: 20px;\n\t\tmargin-bottom: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding: 15px;\n\t\tmargin-bottom: 15px;\n\t\tborder-radius: 3px;\n\t}\n\t', '\n']);

var Container$6 = styled__default.div(_templateObject$k, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.shadowCenter;
}, function (props) {
	var size = props.size;


	switch (size) {
		case 'full':
			return 'width: 100%;';
		case 'three-quarter':
			return '\n                    width: calc(75% - 20px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
		case 'two-third':
			return '\n                    width: calc(66.666% - 20px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
		case 'half':
			return '\n                    width: calc(50% - 15px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
		case 'third':
			return '\n                    width: calc(33.333% - 10px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
		case 'quarter':
			return '\n                    width: calc(25% - 10px);\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
		case 'condensed':
			return '\n                    width: auto;\n                    @media (max-width: 700px) {\n                        width: 100%;\n                    }\n                ';
		default:
			return 'width: 100%;';
	}
});

var TEPanel = function TEPanel(props) {
	var _props$size = props.size,
	    size = _props$size === undefined ? 'full' : _props$size,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    leftComponent = props.leftComponent,
	    subtitle = props.subtitle,
	    rightComponent = props.rightComponent,
	    children = props.children;

	return React__default.createElement(
		Container$6,
		{ className: 'TEPanel ' + className, size: size },
		(title || leftComponent || subtitle || rightComponent) && React__default.createElement(TEPanelTitle, {
			title: title,
			leftComponent: leftComponent,
			subtitle: subtitle,
			rightComponent: rightComponent,
			className: 'TEPanelTitleBar'
		}),
		children
	);
};

TEPanel.propTypes = {
	size: PropTypes.string
};

var _templateObject$l = taggedTemplateLiteral(['\n\tjustify-content: center;\n'], ['\n\tjustify-content: center;\n']),
    _templateObject2$b = taggedTemplateLiteral(['\n\tmax-width: 600px;\n\tmargin: 30px auto;\n'], ['\n\tmax-width: 600px;\n\tmargin: 30px auto;\n']),
    _templateObject3$a = taggedTemplateLiteral(['\n\tmargin-top: 0px;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n\tfont-size: 26px;\n'], ['\n\tmargin-top: 0px;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n\tfont-size: 26px;\n']),
    _templateObject4$a = taggedTemplateLiteral(['\n\tmargin-top: 0px;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n\tfont-size: 16px;\n'], ['\n\tmargin-top: 0px;\n\tmargin-bottom: 20px;\n\ttext-align: center;\n\tfont-size: 16px;\n']),
    _templateObject5$9 = taggedTemplateLiteral(['\n\tmargin: 10px auto;\n\twidth: auto;\n'], ['\n\tmargin: 10px auto;\n\twidth: auto;\n']);

var PanelWrapper = styled__default(TEPannelWrapper)(_templateObject$l);
var Panel = styled__default(TEPanel)(_templateObject2$b);
var Title$1 = styled__default.h1(_templateObject3$a);
var Message = styled__default.p(_templateObject4$a);
var Button$1 = styled__default(TEButton)(_templateObject5$9);

var TEErrorLoadingAlert = function TEErrorLoadingAlert(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    message = props.message,
	    onClick = props.onClick,
	    buttonTitle = props.buttonTitle;

	return React__default.createElement(
		PanelWrapper,
		{ className: 'TEErrorLoadingAlert ' + className },
		React__default.createElement(
			Panel,
			null,
			title && React__default.createElement(
				Title$1,
				{ className: 'TEErrorLoadingAlertTitle' },
				title
			),
			message && React__default.createElement(
				Message,
				{ className: 'TEErrorLoadingAlertMessage' },
				message
			),
			buttonTitle && React__default.createElement(
				Button$1,
				{ onClick: onClick, className: 'TEErrorLoadingAlertButton' },
				buttonTitle
			)
		)
	);
};

TEErrorLoadingAlert.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onClick: PropTypes.func,
	buttonTitle: PropTypes.string
};

var _templateObject$m = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: ', ';\n\tpadding-left: 30px;\n\tbox-shadow: ', ';\n\n\t@media (max-width: 800px) {\n\t\tpadding-left: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding-left: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding-left: 15px;\n\t}\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: ', ';\n\tpadding-left: 30px;\n\tbox-shadow: ', ';\n\n\t@media (max-width: 800px) {\n\t\tpadding-left: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding-left: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding-left: 15px;\n\t}\n']),
    _templateObject2$c = taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\theight: 80px;\n\tpadding-right: 30px;\n\n\t@media (max-width: 800px) {\n\t\theight: 70px;\n\t\tpadding-right: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\theight: 65px;\n\t\tpadding-right: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\theight: 60px;\n\t\tpadding-right: 15px;\n\t}\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\theight: 80px;\n\tpadding-right: 30px;\n\n\t@media (max-width: 800px) {\n\t\theight: 70px;\n\t\tpadding-right: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\theight: 65px;\n\t\tpadding-right: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\theight: 60px;\n\t\tpadding-right: 15px;\n\t}\n']),
    _templateObject3$b = taggedTemplateLiteral(['\n\tfont-size: 36px;\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n\tcolor: ', ';\n\n\t@media (max-width: 1000px) {\n\t\tfont-size: 32px;\n\t}\n\t@media (max-width: 800px) {\n\t\tfont-size: 28px;\n\t}\n\t@media (max-width: 650px) {\n\t\tfont-size: 24px;\n\t}\n\t@media (max-width: 450px) {\n\t\tfont-size: 20px;\n\t}\n'], ['\n\tfont-size: 36px;\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n\tcolor: ', ';\n\n\t@media (max-width: 1000px) {\n\t\tfont-size: 32px;\n\t}\n\t@media (max-width: 800px) {\n\t\tfont-size: 28px;\n\t}\n\t@media (max-width: 650px) {\n\t\tfont-size: 24px;\n\t}\n\t@media (max-width: 450px) {\n\t\tfont-size: 20px;\n\t}\n']),
    _templateObject4$b = taggedTemplateLiteral(['\n\twidth: auto;\n'], ['\n\twidth: auto;\n']),
    _templateObject5$a = taggedTemplateLiteral(['\n\tfont-size: 22px;\n\tmargin-bottom: 0px;\n\tmargin-top: 0px;\n'], ['\n\tfont-size: 22px;\n\tmargin-bottom: 0px;\n\tmargin-top: 0px;\n']);

var Container$7 = styled__default.div(_templateObject$m, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.shadowBottom;
});
var Content$1 = styled__default.div(_templateObject2$c);
var Title$2 = styled__default.h1(_templateObject3$b, function (props) {
	return props.theme.primary;
});
var ComponentWrapper$1 = styled__default.div(_templateObject4$b);
var Subtitle$1 = styled__default.h2(_templateObject5$a);

var TETitleBar = function TETitleBar(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    title = props.title,
	    leftComponent = props.leftComponent,
	    subtitle = props.subtitle,
	    rightComponent = props.rightComponent;


	return React__default.createElement(
		Container$7,
		{ className: 'TETitleBar ' + className },
		React__default.createElement(
			Content$1,
			{ className: 'TETitlebarContent' },
			title && React__default.createElement(
				Title$2,
				{ className: 'TETitlebarTitle' },
				title
			),
			leftComponent && React__default.createElement(
				ComponentWrapper$1,
				{ className: 'TETitlebarLeftComponent' },
				leftComponent
			),
			subtitle && React__default.createElement(
				Subtitle$1,
				{ className: 'TETitlebarSubtitle' },
				subtitle
			),
			rightComponent && React__default.createElement(
				ComponentWrapper$1,
				{ className: 'TETitlebarRightComponent' },
				rightComponent
			)
		)
	);
};

TETitleBar.propTypes = {
	title: PropTypes.string,
	leftComponent: PropTypes.node,
	subtitle: PropTypes.string,
	rightComponent: PropTypes.node
};

var _templateObject$n = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: calc(100% - ', 'px);\n\tmin-height: 100vh;\n\tmargin-left: ', 'px;\n\tbackground-color: ', ';\n'], ['\n\tposition: relative;\n\twidth: calc(100% - ', 'px);\n\tmin-height: 100vh;\n\tmargin-left: ', 'px;\n\tbackground-color: ', ';\n']);

var BodyContainer = styled__default.div(_templateObject$n, function (props) {
	return props.sidebarWidth;
}, function (props) {
	return props.sidebarWidth;
}, function (props) {
	return props.theme.lighterGray;
});

var TEBodyContainer = function TEBodyContainer(props) {
	var _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['className']);

	return React__default.createElement(BodyContainer, _extends({ className: 'TEBodyContainer ' + className }, rest));
};

TEBodyContainer.propTypes = {
	sidebarWidth: PropTypes.number
	//TODO: Not if love with this. It might be a good idea to find a better way while also introducing some default responsiveness
};TEBodyContainer.defaultProps = {
	sidebarWidth: 200
};

var _templateObject$o = taggedTemplateLiteral(['\n\ttext-align: center;\n'], ['\n\ttext-align: center;\n']),
    _templateObject2$d = taggedTemplateLiteral(['\n\tposition: relative;\n\tdisplay: inline-block;\n\t', '\n'], ['\n\tposition: relative;\n\tdisplay: inline-block;\n\t', '\n']),
    _templateObject3$c = taggedTemplateLiteral(['\n\tposition: absolute;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tborder-top: 3px solid transparent;\n\tborder-right: 1px solid transparent;\n\tborder-bottom: 1px solid transparent;\n\tborder-left: 1px solid transparent;\n\n\t', '\n'], ['\n\tposition: absolute;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tborder-top: 3px solid transparent;\n\tborder-right: 1px solid transparent;\n\tborder-bottom: 1px solid transparent;\n\tborder-left: 1px solid transparent;\n\n\t', '\n']);

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

	return '\n        left: ' + spacing * 100 + '%;\n        top: ' + spacing * 100 + '%;\n        width: ' + (1 - spacing * 2) * 100 + '%;\n        height: ' + (1 - spacing * 2) * 100 + '%;\n        border-top-color: ' + colorBetweenColors(innerColor, outerColor, colorSteps * ringNumber) + ';\n        animation: TESpinnerLoading ' + thisTime + 's linear infinite;\n    ';
};

var Container$8 = styled__default.div(_templateObject$o);
var SpinnerWrapper = styled__default.div(_templateObject2$d, function (props) {
	var size = props.size;


	switch (size) {
		case 'small':
			return '\n\t\t\t\t\twidth: 40px;\n\t\t\t\t\theight: 40px;\n\t\t\t\t';
		case 'medium':
			return '\n\t\t\t\t\twidth: 60px;\n\t\t\t\t\theight: 60px;\n\t\t\t\t';
		case 'large':
			return '\n\t\t\t\t\twidth: 80px;\n\t\t\t\t\theight: 80px;\n\t\t\t\t';
		default:
			return '\n\t\t\t\t\twidth: 80px;\n\t\t\t\t\theight: 80px;\n\t\t\t\t';
	}
});
var Ring = styled__default.div(_templateObject3$c, function (props) {
	var theme = props.theme,
	    ringNumber = props.ringNumber,
	    totalRings = props.totalRings,
	    innerColor = props.innerColor,
	    outerColor = props.outerColor;

	return calculateRingStyles({
		ringNumber: ringNumber,
		totalRings: totalRings,
		innerColor: innerColor || theme.white,
		outerColor: outerColor || theme.primary
	});
});

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
				outerColor: outerColor,
				className: 'TESpinnerRing TESpinnerRing' + (i + 1)
			}));
		}
		return rings;
	};

	var _props$size = props.size,
	    size = _props$size === undefined ? 'medium' : _props$size,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;


	return React__default.createElement(
		Container$8,
		{ className: 'TESpinner ' + className },
		React__default.createElement(
			SpinnerWrapper,
			{ size: size, className: 'TESpinnerContainer' },
			renderRings()
		)
	);
};

TESpinner.propTypes = {
	size: PropTypes.string,
	innerColor: PropTypes.string,
	outerColor: PropTypes.string
};

var TEPrivateRoute = function TEPrivateRoute(props) {
	var isAuthenticated = props.isAuthenticated,
	    hasPermissions = props.hasPermissions,
	    authPath = props.authPath,
	    accessDeniedPath = props.accessDeniedPath,
	    Component = props.component,
	    rest = objectWithoutProperties(props, ['isAuthenticated', 'hasPermissions', 'authPath', 'accessDeniedPath', 'component']);


	return React__default.createElement(reactRouterDom.Route, _extends({}, rest, {
		render: function render(props) {
			var isAuthed = isAuthenticated(props);
			var hasPerms = hasPermissions(props);
			if (isAuthed && hasPerms) {
				return Component ? React__default.createElement(Component, props) : React__default.createElement(reactRouterDom.Route, rest);
			} else if (!isAuthed) {
				return React__default.createElement(reactRouterDom.Redirect, {
					to: {
						pathname: authPath,
						state: { fromPath: rest.path }
					}
				});
			} else if (!hasPerms) {
				return React__default.createElement(reactRouterDom.Redirect, {
					to: {
						pathname: accessDeniedPath,
						state: { fromPath: rest.path }
					}
				});
			} else {
				//Can't Happen
				return null;
			}
		}
	}));
};

TEPrivateRoute.defaultProps = {
	hasPermissions: true,
	authPath: '/signin',
	accessDeniedPath: '/403'
};

var _templateObject$p = taggedTemplateLiteral(['\n\tlist-style: none;\n'], ['\n\tlist-style: none;\n']),
    _templateObject2$e = taggedTemplateLiteral(['\n\tdisplay: block;\n\tcolor: ', ';\n\tpadding: 15px 20px;\n\tcursor: pointer;\n\tborder-left: 5px solid transparent;\n\ttransition: color 0.2s ease-in, border 0.2s ease-in;\n\ttext-decoration: none;\n\n\t:active,\n\t:hover,\n\t&.active {\n\t\tcolor: ', ';\n\t\tborder-color: ', ';\n\t}\n'], ['\n\tdisplay: block;\n\tcolor: ', ';\n\tpadding: 15px 20px;\n\tcursor: pointer;\n\tborder-left: 5px solid transparent;\n\ttransition: color 0.2s ease-in, border 0.2s ease-in;\n\ttext-decoration: none;\n\n\t:active,\n\t:hover,\n\t&.active {\n\t\tcolor: ', ';\n\t\tborder-color: ', ';\n\t}\n']),
    _templateObject3$d = taggedTemplateLiteral(['\n\tfont-size: 18px;\n'], ['\n\tfont-size: 18px;\n']);

var Li = styled__default.li(_templateObject$p);
var Link = styled__default(reactRouterDom.NavLink)(_templateObject2$e, function (props) {
	return props.theme.darkerGray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});
var Title$3 = styled__default.span(_templateObject3$d);

var TESideNavLink = function TESideNavLink(props) {
	var location = props.location,
	    title = props.title,
	    to = props.to,
	    children = props.children,
	    activePath = props.activePath,
	    exact = props.exact,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;


	return React__default.createElement(
		Li,
		{ className: 'TESideNavLink ' + className },
		React__default.createElement(
			Link,
			{
				isActive: function isActive() {
					return reactRouter.matchPath(location.pathname, { path: activePath || to, exact: exact });
				},
				activeClassName: 'active',
				to: to,
				exact: exact,
				className: 'TESideNavLinkLink'
			},
			title && React__default.createElement(
				Title$3,
				{ className: 'TESideNavLinkTitle' },
				title
			),
			children
		)
	);
};

TESideNavLink.defaultProps = {
	exact: false
};

var TESideNavLink$1 = reactRouter.withRouter(TESideNavLink);

var _templateObject$q = taggedTemplateLiteral(['\n\tposition: fixed;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\tmax-height: 100vh;\n\theight: 100%;\n\twidth: ', 'px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tz-index: 20;\n\tbackground-color: ', ';\n\toverflow-y: auto;\n\t/*Investigate if this should be repleaced by one of the theme shadows*/\n\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px, rgba(0, 0, 0, 0.05) 1px 0px 5px 0px;\n'], ['\n\tposition: fixed;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\tmax-height: 100vh;\n\theight: 100%;\n\twidth: ', 'px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tz-index: 20;\n\tbackground-color: ', ';\n\toverflow-y: auto;\n\t/*Investigate if this should be repleaced by one of the theme shadows*/\n\tbox-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px 0px, rgba(0, 0, 0, 0.05) 1px 0px 5px 0px;\n']),
    _templateObject2$f = taggedTemplateLiteral(['\n\tobject-fit: contain;\n\twidth: 100%;\n\tpadding: 30px 60px;\n'], ['\n\tobject-fit: contain;\n\twidth: 100%;\n\tpadding: 30px 60px;\n']),
    _templateObject3$e = taggedTemplateLiteral(['\n\theight: 100%;\n'], ['\n\theight: 100%;\n']),
    _templateObject4$c = taggedTemplateLiteral(['\n\tmargin: 0px;\n\tpadding: 0px;\n'], ['\n\tmargin: 0px;\n\tpadding: 0px;\n']);

var Container$9 = styled__default.div(_templateObject$q, function (props) {
	return props.sidebarWidth;
}, function (props) {
	return props.theme.white;
});
var Logo = styled__default.img(_templateObject2$f);
var NavContainer = styled__default.div(_templateObject3$e);
var MainUl = styled__default.ul(_templateObject4$c);

var TESideNavbar = function TESideNavbar(props) {
	var sidebarWidth = props.sidebarWidth,
	    logo = props.logo,
	    Header = props.Header,
	    links = props.links,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;

	return React__default.createElement(
		Container$9,
		{ sidebarWidth: sidebarWidth, className: 'TESideNavbar ' + className },
		Header,
		logo && !Header && React__default.createElement(
			reactRouterDom.Link,
			{ to: '/', className: 'TESideNavbarLogoLink' },
			React__default.createElement(Logo, { src: logo, alt: 'logo', className: 'TESideNavbarLogo' })
		),
		React__default.createElement(
			NavContainer,
			{ className: 'TESideNavbarNavContainer' },
			React__default.createElement(
				MainUl,
				{ className: 'TESideNavbarMainUl' },
				links && links.map(function (link, index) {
					var title = link.title,
					    activePath = link.activePath,
					    to = link.to,
					    children = link.children,
					    exact = link.exact;

					return React__default.createElement(
						TESideNavLink$1,
						{
							key: index,
							to: to,
							activePath: activePath || to,
							title: title,
							exact: exact,
							className: 'TESideNavbarNavLink'
						},
						children
					);
				})
			)
		)
	);
};

TESideNavbar.propTypes = {
	sidebarWidth: PropTypes.number,
	logo: PropTypes.string,
	Header: PropTypes.node,
	links: PropTypes.array
};

TESideNavbar.defaultProps = {
	sidebarWidth: 200
};

var _templateObject$r = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: ', ';\n\tpadding-left: 30px;\n\tbox-shadow: ', ';\n\tz-index: 5;\n\n\t@media (max-width: 800px) {\n\t\tpadding-left: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding-left: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding-left: 15px;\n\t}\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\tbackground-color: ', ';\n\tpadding-left: 30px;\n\tbox-shadow: ', ';\n\tz-index: 5;\n\n\t@media (max-width: 800px) {\n\t\tpadding-left: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\tpadding-left: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\tpadding-left: 15px;\n\t}\n']),
    _templateObject2$g = taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\theight: 70px;\n\tborder-top: 1px solid ', ';\n\tpadding-right: 30px;\n\n\t@media (max-width: 800px) {\n\t\theight: 65px;\n\t\tpadding-right: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\theight: 60px;\n\t\tpadding-right: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\theight: 55px;\n\t\tpadding-right: 15px;\n\t}\n'], ['\n\tdisplay: flex;\n\talign-items: flex-end;\n\tjustify-content: space-between;\n\theight: 70px;\n\tborder-top: 1px solid ', ';\n\tpadding-right: 30px;\n\n\t@media (max-width: 800px) {\n\t\theight: 65px;\n\t\tpadding-right: 25px;\n\t}\n\t@media (max-width: 650px) {\n\t\theight: 60px;\n\t\tpadding-right: 20px;\n\t}\n\t@media (max-width: 450px) {\n\t\theight: 55px;\n\t\tpadding-right: 15px;\n\t}\n']),
    _templateObject3$f = taggedTemplateLiteral(['\n\tmargin: 0px;\n\tpadding: 0px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-end;\n\toverflow-x: auto;\n'], ['\n\tmargin: 0px;\n\tpadding: 0px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: flex-end;\n\toverflow-x: auto;\n']),
    _templateObject4$d = taggedTemplateLiteral(['\n\tlist-style: none;\n\twidth: 100px;\n\tflex-shrink: 0;\n'], ['\n\tlist-style: none;\n\twidth: 100px;\n\tflex-shrink: 0;\n']),
    _templateObject5$b = taggedTemplateLiteral(['\n\tdisplay: block;\n\ttext-align: center;\n\twidth: 100%;\n\tline-height: 40px;\n\tborder-bottom: 4px solid transparent;\n\tfont-size: 16px;\n\twhite-space: nowrap;\n\ttext-decoration: none;\n\tcolor: ', ';\n\n\ttransition: border 0.2s ease-in, color 0.2s ease-in;\n\n\t:active,\n\t:hover,\n\t&.active {\n\t\tcolor: ', ';\n\t\tborder-color: ', ';\n\t}\n'], ['\n\tdisplay: block;\n\ttext-align: center;\n\twidth: 100%;\n\tline-height: 40px;\n\tborder-bottom: 4px solid transparent;\n\tfont-size: 16px;\n\twhite-space: nowrap;\n\ttext-decoration: none;\n\tcolor: ', ';\n\n\ttransition: border 0.2s ease-in, color 0.2s ease-in;\n\n\t:active,\n\t:hover,\n\t&.active {\n\t\tcolor: ', ';\n\t\tborder-color: ', ';\n\t}\n']);

var Container$a = styled__default.div(_templateObject$r, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.shadowBottom;
});
var Content$2 = styled__default.div(_templateObject2$g, function (props) {
	return props.theme.lightGray;
});
var Ul = styled__default.ul(_templateObject3$f);
var Li$1 = styled__default.li(_templateObject4$d);
var Link$1 = styled__default(reactRouterDom.NavLink)(_templateObject5$b, function (props) {
	return props.theme.darkerGray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});

var TESubNavbar = function TESubNavbar(props) {
	var links = props.links,
	    rightComponent = props.rightComponent,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;


	return React__default.createElement(
		Container$a,
		{ className: 'TESubNavbar ' + className },
		React__default.createElement(
			Content$2,
			{ className: 'TESubNavbarContent' },
			React__default.createElement(
				Ul,
				{ className: 'TESubNavbarUl' },
				links && links.map(function (link, index) {
					return React__default.createElement(
						Li$1,
						{ key: index, className: 'TESubNavbarLi' },
						React__default.createElement(Link$1, _extends({ className: 'TESubNavbarLink' }, link))
					);
				})
			),
			rightComponent
		)
	);
};

TESubNavbar.propTypes = {
	links: PropTypes.array,
	rightComponent: PropTypes.node
};

var _templateObject$s = taggedTemplateLiteral(['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 600px;\n\t\tmargin: 100px auto;\n\t}\n'], ['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 600px;\n\t\tmargin: 100px auto;\n\t}\n']),
    _templateObject2$h = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 24px;\n\tmargin-bottom: 20px;\n\tcolor: ', ';\n\tpadding: 30px 30px 0px 30px;\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 24px;\n\tmargin-bottom: 20px;\n\tcolor: ', ';\n\tpadding: 30px 30px 0px 30px;\n']),
    _templateObject3$g = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 18px;\n\tline-height: 1.25;\n\tmargin-bottom: 30px;\n\tpadding: 0px 40px;\n\tcolor: ', ';\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 18px;\n\tline-height: 1.25;\n\tmargin-bottom: 30px;\n\tpadding: 0px 40px;\n\tcolor: ', ';\n']),
    _templateObject4$e = taggedTemplateLiteral(['\n\tborder-top: 1px solid ', ';\n\tborder-right: none;\n\tborder-bottom: none;\n\tborder-left: none;\n\tline-height: 2;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 20px;\n\ttransition: border 0.2s ease-in, color 0.2s ease-in, background-color 0.2s ease-in;\n\n\t:active,\n\t:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: none;\n\t\tborder-bottom: none;\n\t\tborder-left: none;\n\t}\n'], ['\n\tborder-top: 1px solid ', ';\n\tborder-right: none;\n\tborder-bottom: none;\n\tborder-left: none;\n\tline-height: 2;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 20px;\n\ttransition: border 0.2s ease-in, color 0.2s ease-in, background-color 0.2s ease-in;\n\n\t:active,\n\t:hover {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: none;\n\t\tborder-bottom: none;\n\t\tborder-left: none;\n\t}\n']);

var Popup$1 = styled__default(TEPopup)(_templateObject$s);
var Title$4 = styled__default.h4(_templateObject2$h, function (props) {
	return props.theme.darkerGray;
});
var Message$1 = styled__default.p(_templateObject3$g, function (props) {
	return props.theme.darkerGray;
});
var Button$2 = styled__default(TEButton)(_templateObject4$e, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});

var TEAlert = function TEAlert(props) {
	var title = props.title,
	    message = props.message,
	    onClick = props.onClick,
	    _props$buttonTitle = props.buttonTitle,
	    buttonTitle = _props$buttonTitle === undefined ? 'Okay' : _props$buttonTitle,
	    visible = props.visible,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    children = props.children;


	return React__default.createElement(
		Popup$1,
		{ visible: visible, className: 'TEAlert ' + className },
		React__default.createElement(
			Title$4,
			{ className: 'TEAlertTitle' },
			title
		),
		React__default.createElement(
			Message$1,
			{ className: 'TEAlertMessage' },
			message
		),
		children,
		React__default.createElement(
			Button$2,
			{ onClick: onClick, className: 'TEAlertButton' },
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

var _templateObject$t = taggedTemplateLiteral(['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 600px;\n\t\tmargin: 100px auto;\n\t}\n'], ['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 600px;\n\t\tmargin: 100px auto;\n\t}\n']),
    _templateObject2$i = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 24px;\n\tmargin-bottom: 20px;\n\tcolor: ', ';\n\tpadding: 30px 30px 0px 30px;\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 24px;\n\tmargin-bottom: 20px;\n\tcolor: ', ';\n\tpadding: 30px 30px 0px 30px;\n']),
    _templateObject3$h = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 18px;\n\tline-height: 1.25;\n\tmargin-bottom: 30px;\n\tpadding: 0px 40px;\n\tcolor: ', ';\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 18px;\n\tline-height: 1.25;\n\tmargin-bottom: 30px;\n\tpadding: 0px 40px;\n\tcolor: ', ';\n']),
    _templateObject4$f = taggedTemplateLiteral(['\n\toverflow: hidden;\n\tdisplay: flex;\n'], ['\n\toverflow: hidden;\n\tdisplay: flex;\n']),
    _templateObject5$c = taggedTemplateLiteral(['\n\twidth: 50%;\n\tfont-size: 18px;\n\tline-height: 2;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 0px;\n\tborder-top: 1px solid ', ';\n\tborder-right: 1px solid ', ';\n\tborder-bottom: none;\n\tborder-left: none;\n\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: 1px solid ', ';\n\t\tborder-bottom: none;\n\t\tborder-left: none;\n\t}\n'], ['\n\twidth: 50%;\n\tfont-size: 18px;\n\tline-height: 2;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 0px;\n\tborder-top: 1px solid ', ';\n\tborder-right: 1px solid ', ';\n\tborder-bottom: none;\n\tborder-left: none;\n\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: 1px solid ', ';\n\t\tborder-bottom: none;\n\t\tborder-left: none;\n\t}\n']),
    _templateObject6$4 = taggedTemplateLiteral(['\n\twidth: 50%;\n\tfont-size: 18px;\n\tline-height: 2;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 0px;\n\tborder-bottom-right-radius: 20px;\n\tborder-top: 1px solid ', ';\n\tborder-right: none;\n\tborder-bottom: none;\n\tborder-left: 1px solid ', ';\n\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: none;\n\t\tborder-bottom: none;\n\t\tborder-left: 1px solid ', ';\n\t}\n'], ['\n\twidth: 50%;\n\tfont-size: 18px;\n\tline-height: 2;\n\tborder-top-left-radius: 0px;\n\tborder-top-right-radius: 0px;\n\tborder-bottom-left-radius: 0px;\n\tborder-bottom-right-radius: 20px;\n\tborder-top: 1px solid ', ';\n\tborder-right: none;\n\tborder-bottom: none;\n\tborder-left: 1px solid ', ';\n\n\t:hover,\n\t:active {\n\t\tcolor: ', ';\n\t\tbackground-color: ', ';\n\t\tborder-top: 1px solid ', ';\n\t\tborder-right: none;\n\t\tborder-bottom: none;\n\t\tborder-left: 1px solid ', ';\n\t}\n']);

var Popup$2 = styled__default(TEPopup)(_templateObject$t);
var Title$5 = styled__default.h4(_templateObject2$i, function (props) {
	return props.theme.darkerGray;
});
var Message$2 = styled__default.p(_templateObject3$h, function (props) {
	return props.theme.darkerGray;
});
var ButtonContainer$2 = styled__default.div(_templateObject4$f);
var LeftButton$1 = styled__default(TEButton)(_templateObject5$c, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});
var RightButton$1 = styled__default(TEButton)(_templateObject6$4, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
});

var TEConfirm = function TEConfirm(props) {
	var title = props.title,
	    message = props.message,
	    leftOnClick = props.leftOnClick,
	    leftButtonTitle = props.leftButtonTitle,
	    rightOnClick = props.rightOnClick,
	    rightButtonTitle = props.rightButtonTitle,
	    children = props.children,
	    visible = props.visible,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;


	return React__default.createElement(
		Popup$2,
		{ visible: visible, className: 'TEConfirm ' + className },
		React__default.createElement(
			Title$5,
			{ className: 'TEConfirmTitle' },
			title
		),
		React__default.createElement(
			Message$2,
			{ className: 'TEConfirmMessage' },
			message
		),
		children,
		React__default.createElement(
			ButtonContainer$2,
			{ className: 'TEConfirmButtonoContainer' },
			React__default.createElement(
				LeftButton$1,
				{ onClick: leftOnClick, className: 'TEConfirmButton TEConfirmLeftButton' },
				leftButtonTitle
			),
			React__default.createElement(
				RightButton$1,
				{
					onClick: rightOnClick,
					className: 'TEConfirmButton TEConfirmRightButton'
				},
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

var _templateObject$u = taggedTemplateLiteral(['\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\t.TEPopupContent {\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\tpadding: 60px;\n\t\ttext-align: center;\n\t}\n'], ['\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\t.TEPopupContent {\n\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\tpadding: 60px;\n\t\ttext-align: center;\n\t}\n']),
    _templateObject2$j = taggedTemplateLiteral(['\n\tmargin-bottom: 30px;\n'], ['\n\tmargin-bottom: 30px;\n']),
    _templateObject3$i = taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 24px;\n\tmargin: 0px;\n\tcolor: ', ';\n'], ['\n\tposition: relative;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 24px;\n\tmargin: 0px;\n\tcolor: ', ';\n']);

var Popup$3 = styled__default(TEPopup)(_templateObject$u);
var Spinner = styled__default(TESpinner)(_templateObject2$j);
var Message$3 = styled__default.p(_templateObject3$i, function (props) {
	return props.theme.white;
});

var TENetworkActivity = function TENetworkActivity(props) {
	var visible = props.visible,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    message = props.message;


	return React__default.createElement(
		Popup$3,
		{ visible: visible, className: 'TENetworkActivity ' + className },
		React__default.createElement(Spinner, { size: 'large', className: 'TENetworkActivitySpinner' }),
		message && React__default.createElement(
			Message$3,
			{ className: 'TENetworkActivityMessage' },
			message
		)
	);
};

TENetworkActivity.propTypes = {
	message: PropTypes.string
};

var _templateObject$v = taggedTemplateLiteral(['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 900px;\n\t\tmargin: 100px auto;\n\t\tpadding: 30px;\n\t}\n'], ['\n\t.TEPopupContent {\n\t\twidth: 90%;\n\t\tmax-width: 900px;\n\t\tmargin: 100px auto;\n\t\tpadding: 30px;\n\t}\n']);

var Popup$4 = styled__default(TEPopup)(_templateObject$v);

var TEPopupMultiStepForm = function TEPopupMultiStepForm(props) {
	var handleSubmit = function handleSubmit(e) {
		e.preventDefault();
		var onSubmit = props.onSubmit;

		onSubmit();
	};
	var visible = props.visible,
	    onClose = props.onClose,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className,
	    rest = objectWithoutProperties(props, ['visible', 'onClose', 'className']);


	return React__default.createElement(
		Popup$4,
		{ visible: visible, className: 'TEPopupMultiStepForm ' + className },
		React__default.createElement(TEMultiStepForm, _extends({
			onSubmit: handleSubmit,
			handleCancelOnClick: onClose,
			className: 'TEPopupMultiStepFormMultiStepForm'
		}, rest))
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

var ScrollToTop = function ScrollToTop(props) {
	var location = props.location,
	    children = props.children;


	React.useEffect(function () {
		window.scrollTo(0, 0);
	}, [location]);

	return children;
};

var TEScrollToTop = reactRouterDom.withRouter(ScrollToTop);

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


var React__default$$1 = _interopDefault$1(React__default);
var ExecutionEnvironment = _interopDefault$1(exenv);
var shallowEqual = _interopDefault$1(shallowequal);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
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
        return React__default$$1.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React__default.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

var lib$2 = withSideEffect;

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
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



var _reactFastCompare2 = _interopRequireDefault(reactFastCompare);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _reactFastCompare2.default)(this.props, nextProps);
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

            return _react2.default.createElement(Component, newProps);
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
                Component.canUseDOM = canUseDOM;
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
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
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

var _templateObject$w = taggedTemplateLiteral(['\n\t& * {\n\t\tbox-sizing: border-box;\n\t}\n\n\t@keyframes TESpinnerLoading {\n\t\t\tto {\n\t\t\t\t\t-webkit-transform: rotate(1turn);\n\t\t\t\t\ttransform: rotate(1turn)\n\t\t\t}\n\t}\n\n\t/*\n\t*\n\t* React Power Select\n\t*\n\t*/\n\t.PowerSelect {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tfont-size: 16px;\n\t\tcursor: pointer;\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid ', ';\n\t\tborder-radius: 5px;\n\t\tbox-sizing: border-box;\n\t\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t}\n\t.PowewrSelect * {\n\t\tbox-sizing: border-box;\n\t}\n\t.PowerSelect.white-border {\n\t\tborder: 1px solid ', ';\n\t}\n\t.PowerSelect:focus {\n\t\toutline: none;\n\t}\n\t.PowerSelect--focused {\n\t}\n\t.PowerSelect--disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.PowerSelect--disabled .PowerSelect__Trigger {\n\t\tpointer-events: none;\n\t}\n\t.PowerSelect--disabled .PowerSelect__TriggerInput {\n\t\tbackground-color: ', ';\n\t}\n\t.PowerSelect--open {\n\t\tborder-bottom-right-radius: 0;\n\t\tborder-bottom-left-radius: 0;\n\t\tborder-bottom: 0;\n\t}\n\t.PowerSelect--open .PowerSelect__TriggerStatus:before {\n\t\ttransform: rotate(-180deg);\n\t}\n\t.PowerSelect__Trigger {\n\t\tposition: relative;\n\t\theight: 39px;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\t.PowerSelect__Menu {\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n\t.PowerSelect__Menu.white-border__Menu {\n\t\tborder: none;\n\t\tborder-top: 1px solid #a0a0a0;\n\t}\n\t.PowerSelect__Menu:focus {\n\t\toutline: none;\n\t}\n\t.PowerSelect__Options {\n\t\tposition: relative;\n\t\tmax-height: 238px;\n\t\toverflow: auto;\n\t}\n\t.PowerSelect__OptGroup {\n\t\tpadding-left: 8px;\n\t}\n\t.PowerSelect__OptGroup__Label {\n\t\tfont-weight: 700;\n\t\tfont-size: 0.9em;\n\t\tcolor: ', ';\n\t\tpadding: 8px 0 4px;\n\t}\n\t.PowerSelect__Option {\n\t\tcursor: pointer;\n\t\tpadding: 8px 12px;\n\t}\n\t.PowerSelect__Option:not(.PowerSelect__Option--disabled):hover {\n\t\tbackground-color: rgba(55, 50, 117 0.5);\n\t}\n\t.PowerSelect__Option--disabled {\n\t\tcolor: ', ';\n\t\tcursor: not-allowed;\n\t}\n\t.PowerSelect__Option--highlighted {\n\t\tbackground-color: ', ';\n\t}\n\t.PowerSelect__BeforeOptions {\n\t\tpadding: 8px 12px;\n\t}\n\t.PowerSelect__Placeholder {\n\t\tcolor: ', ';\n\t\tfont-size: 14px;\n\t}\n\t.PowerSelect__SearchInputContainer {\n\t\tpadding: 8px;\n\t}\n\t.PowerSelect__SearchInput {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 34px;\n\t\tpadding: 4px 8px;\n\t\tline-height: 1.4;\n\t\tfont-size: inherit;\n\t\tborder: 1px solid ', ';\n\t\tborder-radius: 2px;\n\t\tcursor: pointer;\n\t\tbox-sizing: border-box;\n\t}\n\t.PowerSelect__SearchInput:focus {\n\t\tborder-color: ', ';\n\t\toutline: none;\n\t}\n\t.PowerSelect__TriggerInput {\n\t\tdisplay: inline-block;\n\t\twidth: 100%;\n\t\theight: 34px;\n\t\tborder: none;\n\t\tcursor: pointer;\n\t\tpadding: 4px 22px 4px 8px;\n\t\tfont-size: inherit;\n\t}\n\t.PowerSelect__TriggerInput:focus {\n\t\toutline: none;\n\t}\n\t.PowerSelect__Trigger__LHS,\n\t.PowerSelect__Trigger__RHS {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t\twhite-space: nowrap;\n\t}\n\t.PowerSelect__Trigger__LHS {\n\t\tpadding-left: 8px;\n\t\tpadding-right: 4px;\n\t}\n\t.PowerSelect__Trigger__RHS {\n\t\tpadding-right: 4px;\n\t\tpadding-left: 4px;\n\t}\n\t.PowerSelect__TriggerLabel {\n\t\tpadding: 6px 22px 6px 8px;\n\t\tcolor: ', ';\n\t}\n\t.PowerSelect__Trigger__LHS + .PowerSelect__TriggerLabel {\n\t\tpadding-left: 4px;\n\t}\n\t.PowerSelect__TriggerStatus {\n\t\tpadding-top: 2px;\n\t\tpadding-right: 8px;\n\t\tpadding-left: 4px;\n\t}\n\t.PowerSelect__TriggerStatus:before {\n\t\tcontent: \'\';\n\t\tdisplay: block;\n\t\tborder-top: 4px solid ', ';\n\t\tborder-left: 4px solid transparent;\n\t\tborder-right: 4px solid transparent;\n\t}\n\t.PowerSelect__Clear {\n\t\tpadding: 4px;\n\t\tcolor: ', ';\n\t}\n\t.PowerSelect__Clear:hover {\n\t\tcolor: ', ';\n\t}\n\t.PowerSelect__Clear:before {\n\t\tcontent: "\\D7";\n\t}\n\t.PowerSelect__Trigger--empty .PowerSelect__Clear {\n\t\tvisibility: hidden;\n\t}\n\t.PowerSelect__Clear,\n\t.PowerSelect__TriggerInputContainer,\n\t.PowerSelect__TriggerLabel,\n\t.PowerSelect__TriggerStatus,\n\t.PowerSelectMultiple__OptionsContainer {\n\t\tdisplay: table-cell;\n\t\twidth: 100%;\n\t\tvertical-align: middle;\n\t\theight: 39px;\n\t}\n\t.PowerSelectMultiple__OptionsContainer {\n\t\tpadding-top: 2px;\n\t\tpadding-bottom: 2px;\n\t}\n\t.PowerSelectMultiple__SelectedOptions {\n\t\tlist-style: none;\n\t\tpadding-left: 0;\n\t\tdisplay: block;\n\t\tmargin: 0;\n\t}\n\t.PowerSelectMultiple__SelectedOptions:after {\n\t\tcontent: \'\';\n\t\tdisplay: table;\n\t\tclear: both;\n\t}\n\t.PowerSelectMultiple__SelectedOptions > li {\n\t\tdisplay: block;\n\t\tfloat: left;\n\t\tmargin-top: 2px;\n\t\tmargin-bottom: 2px;\n\t}\n\t.PowerSelect__Trigger--empty .PowerSelectMultiple_TriggerInputContainer {\n\t\tfloat: none;\n\t\tmargin-left: 4px;\n\t}\n\t.PowerSelectMultiple__SelectedOption {\n\t\tline-height: 29px;\n\t\tmargin-left: 4px;\n\t\tbackground-color: #ebeeff;\n\t\tborder: 1px solid #c6cfff;\n\t\tcolor: ', ';\n\t\tborder-radius: 3px;\n\t}\n\t.PowerSelectMultiple__SelectedOption__Close,\n\t.PowerSelectMultiple__SelectedOption__Label {\n\t\tpadding: 0 6px;\n\t\tdisplay: block;\n\t\tfloat: left;\n\t}\n\t.PowerSelectMultiple__SelectedOption__Close {\n\t\tborder-left: 1px solid #c6cfff;\n\t\tcursor: pointer;\n\t}\n\t.PowerSelectMultiple__SelectedOption__Close:hover {\n\t\tbackground-color: #dce1ff;\n\t}\n\t.PowerSelectMultiple .PowerSelect__Trigger {\n\t\twhite-space: normal;\n\t\theight: auto;\n\t}\n\t.PowerSelectMultiple .PowerSelect__TriggerInput {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\tpadding: 0;\n\t\theight: 26px;\n\t\tmargin-left: 4px;\n\t}\n\t.PowerSelectMultiple .PowerSelect__Trigger--empty .PowerSelect__TriggerInput {\n\t\twidth: 100%;\n\t}\n\n\t.tether-element {\n\t\tz-index: 1000;\n\t}\n\n\t/*\n\t*\n\t* React DatePicker Base\n\t*\n\t*/\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow {\n\t\tmargin-left: -8px;\n\t\tposition: absolute;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tbox-sizing: content-box;\n\t\tposition: absolute;\n\t\tborder: 8px solid transparent;\n\t\theight: 0;\n\t\twidth: 1px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tcontent: "";\n\t\tz-index: -1;\n\t\tborder-width: 8px;\n\t\tleft: -8px;\n\t\tborder-bottom-color: #aeaeae;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {\n\t\ttop: 0;\n\t\tmargin-top: -8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {\n\t\tborder-top: none;\n\t\tborder-bottom-color: #f0f0f0;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {\n\t\ttop: -1px;\n\t\tborder-bottom-color: #aeaeae;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow {\n\t\tbottom: 0;\n\t\tmargin-bottom: -8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tborder-bottom: none;\n\t\tborder-top-color: #fff;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tbottom: -1px;\n\t\tborder-top-color: #aeaeae;\n\t}\n\n\t.react-datepicker-wrapper {\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker {\n\t\tfont-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n\t\tfont-size: 0.8rem;\n\t\tbackground-color: #fff;\n\t\tcolor: #000;\n\t\tborder: 1px solid #aeaeae;\n\t\tborder-radius: 0.3rem;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__triangle {\n\t\tleft: 35px;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__time-container {\n\t\tborder-left: 0;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__time {\n\t\tborder-radius: 0.3rem;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__time-box {\n\t\tborder-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__triangle {\n\t\tposition: absolute;\n\t\tleft: 50px;\n\t}\n\n\t.react-datepicker-popper {\n\t\tz-index: 1;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] {\n\t\tmargin-top: 10px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="right"] {\n\t\tmargin-left: 8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {\n\t\tleft: auto;\n\t\tright: 42px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="left"] {\n\t\tmargin-right: 8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {\n\t\tleft: 42px;\n\t\tright: auto;\n\t}\n\n\t.react-datepicker__header {\n\t\ttext-align: center;\n\t\tbackground-color: #f0f0f0;\n\t\tborder-bottom: 1px solid #aeaeae;\n\t\tborder-top-left-radius: 0.3rem;\n\t\tborder-top-right-radius: 0.3rem;\n\t\tpadding-top: 8px;\n\t\tposition: relative;\n\t}\n\n\t.react-datepicker__header--time {\n\t\tpadding-bottom: 8px;\n\t\tpadding-left: 5px;\n\t\tpadding-right: 5px;\n\t}\n\n\t.react-datepicker__year-dropdown-container--select,\n\t.react-datepicker__month-dropdown-container--select,\n\t.react-datepicker__month-year-dropdown-container--select,\n\t.react-datepicker__year-dropdown-container--scroll,\n\t.react-datepicker__month-dropdown-container--scroll,\n\t.react-datepicker__month-year-dropdown-container--scroll {\n\t\tdisplay: inline-block;\n\t\tmargin: 0 2px;\n\t}\n\n\t.react-datepicker__current-month,\n\t.react-datepicker-time__header {\n\t\tmargin-top: 0;\n\t\tcolor: #000;\n\t\tfont-weight: bold;\n\t\tfont-size: 0.944rem;\n\t}\n\n\t.react-datepicker-time__header {\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t}\n\n\t.react-datepicker__navigation {\n\t\tbackground: none;\n\t\tline-height: 1.7rem;\n\t\ttext-align: center;\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\twidth: 0;\n\t\tpadding: 0;\n\t\tborder: 0.45rem solid transparent;\n\t\tz-index: 1;\n\t\theight: 10px;\n\t\twidth: 10px;\n\t\ttext-indent: -999em;\n\t\toverflow: hidden;\n\t}\n\n\t.react-datepicker__navigation--previous {\n\t\tleft: 10px;\n\t\tborder-right-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--previous:hover {\n\t\tborder-right-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {\n\t\tborder-right-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\t.react-datepicker__navigation--next {\n\t\tright: 10px;\n\t\tborder-left-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n\t\tright: 80px;\n\t}\n\n\t.react-datepicker__navigation--next:hover {\n\t\tborder-left-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {\n\t\tborder-left-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\t.react-datepicker__navigation--years {\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tdisplay: block;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t.react-datepicker__navigation--years-previous {\n\t\ttop: 4px;\n\t\tborder-top-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--years-previous:hover {\n\t\tborder-top-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__navigation--years-upcoming {\n\t\ttop: -4px;\n\t\tborder-bottom-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--years-upcoming:hover {\n\t\tborder-bottom-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__month-container {\n\t\tfloat: left;\n\t}\n\n\t.react-datepicker__month {\n\t\tmargin: 0.4rem;\n\t\ttext-align: center;\n\t}\n\n\t.react-datepicker__input-time-container {\n\t\tclear: both;\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\tmargin: 5px 0 10px 15px;\n\t\ttext-align: left;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__caption {\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container {\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\n\t\tdisplay: inline-block;\n\t\tmargin-left: 10px;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\n\t\twidth: 85px;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button,\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] {\n\t\t-moz-appearance: textfield;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\n\t\tmargin-left: 5px;\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__time-container {\n\t\tfloat: right;\n\t\tborder-left: 1px solid #aeaeae;\n\t\twidth: 70px;\n\t}\n\n\t.react-datepicker__time-container--with-today-button {\n\t\tdisplay: inline;\n\t\tborder: 1px solid #aeaeae;\n\t\tborder-radius: 0.3rem;\n\t\tposition: absolute;\n\t\tright: -72px;\n\t\ttop: 0;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time {\n\t\tposition: relative;\n\t\tbackground: white;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n\t\twidth: 70px;\n\t\toverflow-x: hidden;\n\t\tmargin: 0 auto;\n\t\ttext-align: center;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\theight: calc(195px + (1.7rem / 2));\n\t\toverflow-y: scroll;\n\t\tpadding-right: 0px;\n\t\tpadding-left: 0px;\n\t\twidth: 100%;\n\t\tbox-sizing: content-box;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n\t\theight: 30px;\n\t\tpadding: 5px 10px;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: #f0f0f0;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n\t\tbackground-color: #216ba5;\n\t\tcolor: white;\n\t\tfont-weight: bold;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n\t\tbackground-color: #216ba5;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n\t\tcolor: #ccc;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n\t\tcursor: default;\n\t\tbackground-color: transparent;\n\t}\n\n\t.react-datepicker__week-number {\n\t\tcolor: #ccc;\n\t\tdisplay: inline-block;\n\t\twidth: 1.7rem;\n\t\tline-height: 1.7rem;\n\t\ttext-align: center;\n\t\tmargin: 0.166rem;\n\t}\n\n\t.react-datepicker__week-number.react-datepicker__week-number--clickable {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #f0f0f0;\n\t}\n\n\t.react-datepicker__day-names,\n\t.react-datepicker__week {\n\t\twhite-space: nowrap;\n\t}\n\n\t.react-datepicker__day-name,\n\t.react-datepicker__day,\n\t.react-datepicker__time-name {\n\t\tcolor: #000;\n\t\tdisplay: inline-block;\n\t\twidth: 1.7rem;\n\t\tline-height: 1.7rem;\n\t\ttext-align: center;\n\t\tmargin: 0.166rem;\n\t}\n\n\t.react-datepicker__day {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__day:hover {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #f0f0f0;\n\t}\n\n\t.react-datepicker__day--today {\n\t\tfont-weight: bold;\n\t}\n\n\t.react-datepicker__day--highlighted {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #3dcc4a;\n\t\tcolor: #fff;\n\t}\n\n\t.react-datepicker__day--highlighted:hover {\n\t\tbackground-color: #32be3f;\n\t}\n\n\t.react-datepicker__day--highlighted-custom-1 {\n\t\tcolor: magenta;\n\t}\n\n\t.react-datepicker__day--highlighted-custom-2 {\n\t\tcolor: green;\n\t}\n\n\t.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #216ba5;\n\t\tcolor: #fff;\n\t}\n\n\t.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {\n\t\tbackground-color: #1d5d90;\n\t}\n\n\t.react-datepicker__day--keyboard-selected {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #2a87d0;\n\t\tcolor: #fff;\n\t}\n\n\t.react-datepicker__day--keyboard-selected:hover {\n\t\tbackground-color: #1d5d90;\n\t}\n\n\t.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {\n\t\tbackground-color: rgba(33, 107, 165, 0.5);\n\t}\n\n\t.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {\n\t\tbackground-color: #f0f0f0;\n\t\tcolor: #000;\n\t}\n\n\t.react-datepicker__day--disabled {\n\t\tcursor: default;\n\t\tcolor: #ccc;\n\t}\n\n\t.react-datepicker__day--disabled:hover {\n\t\tbackground-color: transparent;\n\t}\n\n\t.react-datepicker__input-container {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__year-read-view,\n\t.react-datepicker__month-read-view,\n\t.react-datepicker__month-year-read-view {\n\t\tborder: 1px solid transparent;\n\t\tborder-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__year-read-view:hover,\n\t.react-datepicker__month-read-view:hover,\n\t.react-datepicker__month-year-read-view:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n\t\tborder-top-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow {\n\t\tborder-top-color: #ccc;\n\t\tfloat: right;\n\t\tmargin-left: 20px;\n\t\ttop: 8px;\n\t\tposition: relative;\n\t\tborder-width: 0.45rem;\n\t}\n\n\t.react-datepicker__year-dropdown,\n\t.react-datepicker__month-dropdown,\n\t.react-datepicker__month-year-dropdown {\n\t\tbackground-color: #f0f0f0;\n\t\tposition: absolute;\n\t\twidth: 50%;\n\t\tleft: 25%;\n\t\ttop: 30px;\n\t\tz-index: 1;\n\t\ttext-align: center;\n\t\tborder-radius: 0.3rem;\n\t\tborder: 1px solid #aeaeae;\n\t}\n\n\t.react-datepicker__year-dropdown:hover,\n\t.react-datepicker__month-dropdown:hover,\n\t.react-datepicker__month-year-dropdown:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__year-dropdown--scrollable,\n\t.react-datepicker__month-dropdown--scrollable,\n\t.react-datepicker__month-year-dropdown--scrollable {\n\t\theight: 150px;\n\t\toverflow-y: scroll;\n\t}\n\n\t.react-datepicker__year-option,\n\t.react-datepicker__month-option,\n\t.react-datepicker__month-year-option {\n\t\tline-height: 20px;\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t.react-datepicker__year-option:first-of-type,\n\t.react-datepicker__month-option:first-of-type,\n\t.react-datepicker__month-year-option:first-of-type {\n\t\tborder-top-left-radius: 0.3rem;\n\t\tborder-top-right-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__year-option:last-of-type,\n\t.react-datepicker__month-option:last-of-type,\n\t.react-datepicker__month-year-option:last-of-type {\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\tuser-select: none;\n\t\tborder-bottom-left-radius: 0.3rem;\n\t\tborder-bottom-right-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__year-option:hover,\n\t.react-datepicker__month-option:hover,\n\t.react-datepicker__month-year-option:hover {\n\t\tbackground-color: #ccc;\n\t}\n\n\t.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n\t.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n\t.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n\t\tborder-bottom-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n\t.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n\t.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n\t\tborder-top-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__year-option--selected,\n\t.react-datepicker__month-option--selected,\n\t.react-datepicker__month-year-option--selected {\n\t\tposition: absolute;\n\t\tleft: 15px;\n\t}\n\n\t.react-datepicker__close-icon {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\toutline: 0;\n\t\tpadding: 0;\n\t\tvertical-align: middle;\n\t\tposition: absolute;\n\t\theight: 16px;\n\t\twidth: 16px;\n\t\ttop: 25%;\n\t\tright: 7px;\n\t}\n\n\t.react-datepicker__close-icon::after {\n\t\tbackground-color: #216ba5;\n\t\tborder-radius: 50%;\n\t\tbottom: 0;\n\t\tbox-sizing: border-box;\n\t\tcolor: #fff;\n\t\tcontent: "\0d7";\n\t\tcursor: pointer;\n\t\tfont-size: 12px;\n\t\theight: 16px;\n\t\twidth: 16px;\n\t\tline-height: 1;\n\t\tmargin: -8px auto 0;\n\t\tpadding: 2px;\n\t\tposition: absolute;\n\t\tright: 0px;\n\t\ttext-align: center;\n\t}\n\n\t.react-datepicker__today-button {\n\t\tbackground: #f0f0f0;\n\t\tborder-top: 1px solid #aeaeae;\n\t\tcursor: pointer;\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tpadding: 5px 0;\n\t\tclear: left;\n\t}\n\n\t.react-datepicker__portal {\n\t\tposition: fixed;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tbackground-color: rgba(0, 0, 0, 0.8);\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tz-index: 2147483647;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__day-name,\n\t.react-datepicker__portal .react-datepicker__day,\n\t.react-datepicker__portal .react-datepicker__time-name {\n\t\twidth: 3rem;\n\t\tline-height: 3rem;\n\t}\n\n\t@media (max-width: 400px), (max-height: 550px) {\n\t\t.react-datepicker__portal .react-datepicker__day-name,\n\t\t.react-datepicker__portal .react-datepicker__day,\n\t\t.react-datepicker__portal .react-datepicker__time-name {\n\t\twidth: 2rem;\n\t\tline-height: 2rem;\n\t\t}\n\t}\n\n\t.react-datepicker__portal .react-datepicker__current-month,\n\t.react-datepicker__portal .react-datepicker-time__header {\n\t\tfont-size: 1.44rem;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation {\n\t\tborder: 0.81rem solid transparent;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--previous {\n\t\tborder-right-color: #ccc;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n\t\tborder-right-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {\n\t\tborder-right-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--next {\n\t\tborder-left-color: #ccc;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--next:hover {\n\t\tborder-left-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n\t\tborder-left-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\n\t/*\n\t*\n\t* React DatePicker Custom Overrides\n\t*\n\t*/\n\t.react-datepicker-wrapper,\n\t.react-datepicker__input-container {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\t.react-datepicker__input-container input {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tpadding: 10px;\n\t\tfont-size: 14px;\n\t\tbackground-color: rgb(255, 255, 255);\n\t\tcolor: rgb(94, 94, 94);\n\t\tborder: 1px solid rgb(229, 229, 229);\n\t\tborder-radius: 5px;\n\t\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t}\n\t.react-datepicker__input-container input:hover {\n\t\tborder: 1px solid ', ';\n\t\tbox-shadow: 0 0 0 1px ', ' inset;\n\t}\n\t.react-datepicker__input-container input:disabled {\n\t\tcursor: not-allowed;\n\t\tcolor: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n\t.react-datepicker__day--keyboard-selected {\n\t\tbackground-color: ', ';\n\t}\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list {\n\t\tpadding: 0px;\n\t}\n\t.react-datepicker__time-container,\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n\t\twidth: 95px;\n\t}\n\t.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n\t\tright: 105px;\n\t}\n\n\t.react-datepicker__day--selected,\n\t.react-datepicker__day--in-selecting-range,\n\t.react-datepicker__day--in-range,\n\t.react-datepicker__day--selected:hover,\n\t.react-datepicker__day--in-selecting-range:hover,\n\t.react-datepicker__day--in-range:hover,\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list\n\t\tli.react-datepicker__time-list-item--selected,\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list\n\t\tli.react-datepicker__time-list-item--selected:hover {\n\t\tbackground-color: ', ';\n\t}\n\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list\n\t\tli.react-datepicker__time-list-item {\n\t\tline-height: 30px;\n\t\tpadding: 0;\n\t}\n\t', '\n'], ['\n\t& * {\n\t\tbox-sizing: border-box;\n\t}\n\n\t@keyframes TESpinnerLoading {\n\t\t\tto {\n\t\t\t\t\t-webkit-transform: rotate(1turn);\n\t\t\t\t\ttransform: rotate(1turn)\n\t\t\t}\n\t}\n\n\t/*\n\t*\n\t* React Power Select\n\t*\n\t*/\n\t.PowerSelect {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tfont-size: 16px;\n\t\tcursor: pointer;\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid ', ';\n\t\tborder-radius: 5px;\n\t\tbox-sizing: border-box;\n\t\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t}\n\t.PowewrSelect * {\n\t\tbox-sizing: border-box;\n\t}\n\t.PowerSelect.white-border {\n\t\tborder: 1px solid ', ';\n\t}\n\t.PowerSelect:focus {\n\t\toutline: none;\n\t}\n\t.PowerSelect--focused {\n\t}\n\t.PowerSelect--disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.PowerSelect--disabled .PowerSelect__Trigger {\n\t\tpointer-events: none;\n\t}\n\t.PowerSelect--disabled .PowerSelect__TriggerInput {\n\t\tbackground-color: ', ';\n\t}\n\t.PowerSelect--open {\n\t\tborder-bottom-right-radius: 0;\n\t\tborder-bottom-left-radius: 0;\n\t\tborder-bottom: 0;\n\t}\n\t.PowerSelect--open .PowerSelect__TriggerStatus:before {\n\t\ttransform: rotate(-180deg);\n\t}\n\t.PowerSelect__Trigger {\n\t\tposition: relative;\n\t\theight: 39px;\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\t.PowerSelect__Menu {\n\t\tbackground-color: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n\t.PowerSelect__Menu.white-border__Menu {\n\t\tborder: none;\n\t\tborder-top: 1px solid #a0a0a0;\n\t}\n\t.PowerSelect__Menu:focus {\n\t\toutline: none;\n\t}\n\t.PowerSelect__Options {\n\t\tposition: relative;\n\t\tmax-height: 238px;\n\t\toverflow: auto;\n\t}\n\t.PowerSelect__OptGroup {\n\t\tpadding-left: 8px;\n\t}\n\t.PowerSelect__OptGroup__Label {\n\t\tfont-weight: 700;\n\t\tfont-size: 0.9em;\n\t\tcolor: ', ';\n\t\tpadding: 8px 0 4px;\n\t}\n\t.PowerSelect__Option {\n\t\tcursor: pointer;\n\t\tpadding: 8px 12px;\n\t}\n\t.PowerSelect__Option:not(.PowerSelect__Option--disabled):hover {\n\t\tbackground-color: rgba(55, 50, 117 0.5);\n\t}\n\t.PowerSelect__Option--disabled {\n\t\tcolor: ', ';\n\t\tcursor: not-allowed;\n\t}\n\t.PowerSelect__Option--highlighted {\n\t\tbackground-color: ', ';\n\t}\n\t.PowerSelect__BeforeOptions {\n\t\tpadding: 8px 12px;\n\t}\n\t.PowerSelect__Placeholder {\n\t\tcolor: ', ';\n\t\tfont-size: 14px;\n\t}\n\t.PowerSelect__SearchInputContainer {\n\t\tpadding: 8px;\n\t}\n\t.PowerSelect__SearchInput {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\theight: 34px;\n\t\tpadding: 4px 8px;\n\t\tline-height: 1.4;\n\t\tfont-size: inherit;\n\t\tborder: 1px solid ', ';\n\t\tborder-radius: 2px;\n\t\tcursor: pointer;\n\t\tbox-sizing: border-box;\n\t}\n\t.PowerSelect__SearchInput:focus {\n\t\tborder-color: ', ';\n\t\toutline: none;\n\t}\n\t.PowerSelect__TriggerInput {\n\t\tdisplay: inline-block;\n\t\twidth: 100%;\n\t\theight: 34px;\n\t\tborder: none;\n\t\tcursor: pointer;\n\t\tpadding: 4px 22px 4px 8px;\n\t\tfont-size: inherit;\n\t}\n\t.PowerSelect__TriggerInput:focus {\n\t\toutline: none;\n\t}\n\t.PowerSelect__Trigger__LHS,\n\t.PowerSelect__Trigger__RHS {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t\twhite-space: nowrap;\n\t}\n\t.PowerSelect__Trigger__LHS {\n\t\tpadding-left: 8px;\n\t\tpadding-right: 4px;\n\t}\n\t.PowerSelect__Trigger__RHS {\n\t\tpadding-right: 4px;\n\t\tpadding-left: 4px;\n\t}\n\t.PowerSelect__TriggerLabel {\n\t\tpadding: 6px 22px 6px 8px;\n\t\tcolor: ', ';\n\t}\n\t.PowerSelect__Trigger__LHS + .PowerSelect__TriggerLabel {\n\t\tpadding-left: 4px;\n\t}\n\t.PowerSelect__TriggerStatus {\n\t\tpadding-top: 2px;\n\t\tpadding-right: 8px;\n\t\tpadding-left: 4px;\n\t}\n\t.PowerSelect__TriggerStatus:before {\n\t\tcontent: \'\';\n\t\tdisplay: block;\n\t\tborder-top: 4px solid ', ';\n\t\tborder-left: 4px solid transparent;\n\t\tborder-right: 4px solid transparent;\n\t}\n\t.PowerSelect__Clear {\n\t\tpadding: 4px;\n\t\tcolor: ', ';\n\t}\n\t.PowerSelect__Clear:hover {\n\t\tcolor: ', ';\n\t}\n\t.PowerSelect__Clear:before {\n\t\tcontent: "\\\\D7";\n\t}\n\t.PowerSelect__Trigger--empty .PowerSelect__Clear {\n\t\tvisibility: hidden;\n\t}\n\t.PowerSelect__Clear,\n\t.PowerSelect__TriggerInputContainer,\n\t.PowerSelect__TriggerLabel,\n\t.PowerSelect__TriggerStatus,\n\t.PowerSelectMultiple__OptionsContainer {\n\t\tdisplay: table-cell;\n\t\twidth: 100%;\n\t\tvertical-align: middle;\n\t\theight: 39px;\n\t}\n\t.PowerSelectMultiple__OptionsContainer {\n\t\tpadding-top: 2px;\n\t\tpadding-bottom: 2px;\n\t}\n\t.PowerSelectMultiple__SelectedOptions {\n\t\tlist-style: none;\n\t\tpadding-left: 0;\n\t\tdisplay: block;\n\t\tmargin: 0;\n\t}\n\t.PowerSelectMultiple__SelectedOptions:after {\n\t\tcontent: \'\';\n\t\tdisplay: table;\n\t\tclear: both;\n\t}\n\t.PowerSelectMultiple__SelectedOptions > li {\n\t\tdisplay: block;\n\t\tfloat: left;\n\t\tmargin-top: 2px;\n\t\tmargin-bottom: 2px;\n\t}\n\t.PowerSelect__Trigger--empty .PowerSelectMultiple_TriggerInputContainer {\n\t\tfloat: none;\n\t\tmargin-left: 4px;\n\t}\n\t.PowerSelectMultiple__SelectedOption {\n\t\tline-height: 29px;\n\t\tmargin-left: 4px;\n\t\tbackground-color: #ebeeff;\n\t\tborder: 1px solid #c6cfff;\n\t\tcolor: ', ';\n\t\tborder-radius: 3px;\n\t}\n\t.PowerSelectMultiple__SelectedOption__Close,\n\t.PowerSelectMultiple__SelectedOption__Label {\n\t\tpadding: 0 6px;\n\t\tdisplay: block;\n\t\tfloat: left;\n\t}\n\t.PowerSelectMultiple__SelectedOption__Close {\n\t\tborder-left: 1px solid #c6cfff;\n\t\tcursor: pointer;\n\t}\n\t.PowerSelectMultiple__SelectedOption__Close:hover {\n\t\tbackground-color: #dce1ff;\n\t}\n\t.PowerSelectMultiple .PowerSelect__Trigger {\n\t\twhite-space: normal;\n\t\theight: auto;\n\t}\n\t.PowerSelectMultiple .PowerSelect__TriggerInput {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\tpadding: 0;\n\t\theight: 26px;\n\t\tmargin-left: 4px;\n\t}\n\t.PowerSelectMultiple .PowerSelect__Trigger--empty .PowerSelect__TriggerInput {\n\t\twidth: 100%;\n\t}\n\n\t.tether-element {\n\t\tz-index: 1000;\n\t}\n\n\t/*\n\t*\n\t* React DatePicker Base\n\t*\n\t*/\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow {\n\t\tmargin-left: -8px;\n\t\tposition: absolute;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tbox-sizing: content-box;\n\t\tposition: absolute;\n\t\tborder: 8px solid transparent;\n\t\theight: 0;\n\t\twidth: 1px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tcontent: "";\n\t\tz-index: -1;\n\t\tborder-width: 8px;\n\t\tleft: -8px;\n\t\tborder-bottom-color: #aeaeae;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {\n\t\ttop: 0;\n\t\tmargin-top: -8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {\n\t\tborder-top: none;\n\t\tborder-bottom-color: #f0f0f0;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {\n\t\ttop: -1px;\n\t\tborder-bottom-color: #aeaeae;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow {\n\t\tbottom: 0;\n\t\tmargin-bottom: -8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tborder-bottom: none;\n\t\tborder-top-color: #fff;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,\n\t.react-datepicker__month-read-view--down-arrow::before,\n\t.react-datepicker__month-year-read-view--down-arrow::before {\n\t\tbottom: -1px;\n\t\tborder-top-color: #aeaeae;\n\t}\n\n\t.react-datepicker-wrapper {\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker {\n\t\tfont-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n\t\tfont-size: 0.8rem;\n\t\tbackground-color: #fff;\n\t\tcolor: #000;\n\t\tborder: 1px solid #aeaeae;\n\t\tborder-radius: 0.3rem;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__triangle {\n\t\tleft: 35px;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__time-container {\n\t\tborder-left: 0;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__time {\n\t\tborder-radius: 0.3rem;\n\t}\n\n\t.react-datepicker--time-only .react-datepicker__time-box {\n\t\tborder-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__triangle {\n\t\tposition: absolute;\n\t\tleft: 50px;\n\t}\n\n\t.react-datepicker-popper {\n\t\tz-index: 1;\n\t}\n\n\t.react-datepicker-popper[data-placement^="bottom"] {\n\t\tmargin-top: 10px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="top"] {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="right"] {\n\t\tmargin-left: 8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {\n\t\tleft: auto;\n\t\tright: 42px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="left"] {\n\t\tmargin-right: 8px;\n\t}\n\n\t.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {\n\t\tleft: 42px;\n\t\tright: auto;\n\t}\n\n\t.react-datepicker__header {\n\t\ttext-align: center;\n\t\tbackground-color: #f0f0f0;\n\t\tborder-bottom: 1px solid #aeaeae;\n\t\tborder-top-left-radius: 0.3rem;\n\t\tborder-top-right-radius: 0.3rem;\n\t\tpadding-top: 8px;\n\t\tposition: relative;\n\t}\n\n\t.react-datepicker__header--time {\n\t\tpadding-bottom: 8px;\n\t\tpadding-left: 5px;\n\t\tpadding-right: 5px;\n\t}\n\n\t.react-datepicker__year-dropdown-container--select,\n\t.react-datepicker__month-dropdown-container--select,\n\t.react-datepicker__month-year-dropdown-container--select,\n\t.react-datepicker__year-dropdown-container--scroll,\n\t.react-datepicker__month-dropdown-container--scroll,\n\t.react-datepicker__month-year-dropdown-container--scroll {\n\t\tdisplay: inline-block;\n\t\tmargin: 0 2px;\n\t}\n\n\t.react-datepicker__current-month,\n\t.react-datepicker-time__header {\n\t\tmargin-top: 0;\n\t\tcolor: #000;\n\t\tfont-weight: bold;\n\t\tfont-size: 0.944rem;\n\t}\n\n\t.react-datepicker-time__header {\n\t\ttext-overflow: ellipsis;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t}\n\n\t.react-datepicker__navigation {\n\t\tbackground: none;\n\t\tline-height: 1.7rem;\n\t\ttext-align: center;\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\ttop: 10px;\n\t\twidth: 0;\n\t\tpadding: 0;\n\t\tborder: 0.45rem solid transparent;\n\t\tz-index: 1;\n\t\theight: 10px;\n\t\twidth: 10px;\n\t\ttext-indent: -999em;\n\t\toverflow: hidden;\n\t}\n\n\t.react-datepicker__navigation--previous {\n\t\tleft: 10px;\n\t\tborder-right-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--previous:hover {\n\t\tborder-right-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {\n\t\tborder-right-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\t.react-datepicker__navigation--next {\n\t\tright: 10px;\n\t\tborder-left-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n\t\tright: 80px;\n\t}\n\n\t.react-datepicker__navigation--next:hover {\n\t\tborder-left-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {\n\t\tborder-left-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\t.react-datepicker__navigation--years {\n\t\tposition: relative;\n\t\ttop: 0;\n\t\tdisplay: block;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t.react-datepicker__navigation--years-previous {\n\t\ttop: 4px;\n\t\tborder-top-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--years-previous:hover {\n\t\tborder-top-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__navigation--years-upcoming {\n\t\ttop: -4px;\n\t\tborder-bottom-color: #ccc;\n\t}\n\n\t.react-datepicker__navigation--years-upcoming:hover {\n\t\tborder-bottom-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__month-container {\n\t\tfloat: left;\n\t}\n\n\t.react-datepicker__month {\n\t\tmargin: 0.4rem;\n\t\ttext-align: center;\n\t}\n\n\t.react-datepicker__input-time-container {\n\t\tclear: both;\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\tmargin: 5px 0 10px 15px;\n\t\ttext-align: left;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__caption {\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container {\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\n\t\tdisplay: inline-block;\n\t\tmargin-left: 10px;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\n\t\twidth: 85px;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button,\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] {\n\t\t-moz-appearance: textfield;\n\t}\n\n\t.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\n\t\tmargin-left: 5px;\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__time-container {\n\t\tfloat: right;\n\t\tborder-left: 1px solid #aeaeae;\n\t\twidth: 70px;\n\t}\n\n\t.react-datepicker__time-container--with-today-button {\n\t\tdisplay: inline;\n\t\tborder: 1px solid #aeaeae;\n\t\tborder-radius: 0.3rem;\n\t\tposition: absolute;\n\t\tright: -72px;\n\t\ttop: 0;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time {\n\t\tposition: relative;\n\t\tbackground: white;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n\t\twidth: 70px;\n\t\toverflow-x: hidden;\n\t\tmargin: 0 auto;\n\t\ttext-align: center;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\theight: calc(195px + (1.7rem / 2));\n\t\toverflow-y: scroll;\n\t\tpadding-right: 0px;\n\t\tpadding-left: 0px;\n\t\twidth: 100%;\n\t\tbox-sizing: content-box;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\n\t\theight: 30px;\n\t\tpadding: 5px 10px;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: #f0f0f0;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\n\t\tbackground-color: #216ba5;\n\t\tcolor: white;\n\t\tfont-weight: bold;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\n\t\tbackground-color: #216ba5;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\n\t\tcolor: #ccc;\n\t}\n\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\n\t\tcursor: default;\n\t\tbackground-color: transparent;\n\t}\n\n\t.react-datepicker__week-number {\n\t\tcolor: #ccc;\n\t\tdisplay: inline-block;\n\t\twidth: 1.7rem;\n\t\tline-height: 1.7rem;\n\t\ttext-align: center;\n\t\tmargin: 0.166rem;\n\t}\n\n\t.react-datepicker__week-number.react-datepicker__week-number--clickable {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #f0f0f0;\n\t}\n\n\t.react-datepicker__day-names,\n\t.react-datepicker__week {\n\t\twhite-space: nowrap;\n\t}\n\n\t.react-datepicker__day-name,\n\t.react-datepicker__day,\n\t.react-datepicker__time-name {\n\t\tcolor: #000;\n\t\tdisplay: inline-block;\n\t\twidth: 1.7rem;\n\t\tline-height: 1.7rem;\n\t\ttext-align: center;\n\t\tmargin: 0.166rem;\n\t}\n\n\t.react-datepicker__day {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__day:hover {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #f0f0f0;\n\t}\n\n\t.react-datepicker__day--today {\n\t\tfont-weight: bold;\n\t}\n\n\t.react-datepicker__day--highlighted {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #3dcc4a;\n\t\tcolor: #fff;\n\t}\n\n\t.react-datepicker__day--highlighted:hover {\n\t\tbackground-color: #32be3f;\n\t}\n\n\t.react-datepicker__day--highlighted-custom-1 {\n\t\tcolor: magenta;\n\t}\n\n\t.react-datepicker__day--highlighted-custom-2 {\n\t\tcolor: green;\n\t}\n\n\t.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #216ba5;\n\t\tcolor: #fff;\n\t}\n\n\t.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {\n\t\tbackground-color: #1d5d90;\n\t}\n\n\t.react-datepicker__day--keyboard-selected {\n\t\tborder-radius: 0.3rem;\n\t\tbackground-color: #2a87d0;\n\t\tcolor: #fff;\n\t}\n\n\t.react-datepicker__day--keyboard-selected:hover {\n\t\tbackground-color: #1d5d90;\n\t}\n\n\t.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {\n\t\tbackground-color: rgba(33, 107, 165, 0.5);\n\t}\n\n\t.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {\n\t\tbackground-color: #f0f0f0;\n\t\tcolor: #000;\n\t}\n\n\t.react-datepicker__day--disabled {\n\t\tcursor: default;\n\t\tcolor: #ccc;\n\t}\n\n\t.react-datepicker__day--disabled:hover {\n\t\tbackground-color: transparent;\n\t}\n\n\t.react-datepicker__input-container {\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n\n\t.react-datepicker__year-read-view,\n\t.react-datepicker__month-read-view,\n\t.react-datepicker__month-year-read-view {\n\t\tborder: 1px solid transparent;\n\t\tborder-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__year-read-view:hover,\n\t.react-datepicker__month-read-view:hover,\n\t.react-datepicker__month-year-read-view:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\n\t\tborder-top-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__year-read-view--down-arrow,\n\t.react-datepicker__month-read-view--down-arrow,\n\t.react-datepicker__month-year-read-view--down-arrow {\n\t\tborder-top-color: #ccc;\n\t\tfloat: right;\n\t\tmargin-left: 20px;\n\t\ttop: 8px;\n\t\tposition: relative;\n\t\tborder-width: 0.45rem;\n\t}\n\n\t.react-datepicker__year-dropdown,\n\t.react-datepicker__month-dropdown,\n\t.react-datepicker__month-year-dropdown {\n\t\tbackground-color: #f0f0f0;\n\t\tposition: absolute;\n\t\twidth: 50%;\n\t\tleft: 25%;\n\t\ttop: 30px;\n\t\tz-index: 1;\n\t\ttext-align: center;\n\t\tborder-radius: 0.3rem;\n\t\tborder: 1px solid #aeaeae;\n\t}\n\n\t.react-datepicker__year-dropdown:hover,\n\t.react-datepicker__month-dropdown:hover,\n\t.react-datepicker__month-year-dropdown:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.react-datepicker__year-dropdown--scrollable,\n\t.react-datepicker__month-dropdown--scrollable,\n\t.react-datepicker__month-year-dropdown--scrollable {\n\t\theight: 150px;\n\t\toverflow-y: scroll;\n\t}\n\n\t.react-datepicker__year-option,\n\t.react-datepicker__month-option,\n\t.react-datepicker__month-year-option {\n\t\tline-height: 20px;\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t}\n\n\t.react-datepicker__year-option:first-of-type,\n\t.react-datepicker__month-option:first-of-type,\n\t.react-datepicker__month-year-option:first-of-type {\n\t\tborder-top-left-radius: 0.3rem;\n\t\tborder-top-right-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__year-option:last-of-type,\n\t.react-datepicker__month-option:last-of-type,\n\t.react-datepicker__month-year-option:last-of-type {\n\t\t-webkit-user-select: none;\n\t\t-moz-user-select: none;\n\t\t-ms-user-select: none;\n\t\tuser-select: none;\n\t\tborder-bottom-left-radius: 0.3rem;\n\t\tborder-bottom-right-radius: 0.3rem;\n\t}\n\n\t.react-datepicker__year-option:hover,\n\t.react-datepicker__month-option:hover,\n\t.react-datepicker__month-year-option:hover {\n\t\tbackground-color: #ccc;\n\t}\n\n\t.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\n\t.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\n\t.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\n\t\tborder-bottom-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\n\t.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\n\t.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\n\t\tborder-top-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__year-option--selected,\n\t.react-datepicker__month-option--selected,\n\t.react-datepicker__month-year-option--selected {\n\t\tposition: absolute;\n\t\tleft: 15px;\n\t}\n\n\t.react-datepicker__close-icon {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\toutline: 0;\n\t\tpadding: 0;\n\t\tvertical-align: middle;\n\t\tposition: absolute;\n\t\theight: 16px;\n\t\twidth: 16px;\n\t\ttop: 25%;\n\t\tright: 7px;\n\t}\n\n\t.react-datepicker__close-icon::after {\n\t\tbackground-color: #216ba5;\n\t\tborder-radius: 50%;\n\t\tbottom: 0;\n\t\tbox-sizing: border-box;\n\t\tcolor: #fff;\n\t\tcontent: "\\00d7";\n\t\tcursor: pointer;\n\t\tfont-size: 12px;\n\t\theight: 16px;\n\t\twidth: 16px;\n\t\tline-height: 1;\n\t\tmargin: -8px auto 0;\n\t\tpadding: 2px;\n\t\tposition: absolute;\n\t\tright: 0px;\n\t\ttext-align: center;\n\t}\n\n\t.react-datepicker__today-button {\n\t\tbackground: #f0f0f0;\n\t\tborder-top: 1px solid #aeaeae;\n\t\tcursor: pointer;\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tpadding: 5px 0;\n\t\tclear: left;\n\t}\n\n\t.react-datepicker__portal {\n\t\tposition: fixed;\n\t\twidth: 100vw;\n\t\theight: 100vh;\n\t\tbackground-color: rgba(0, 0, 0, 0.8);\n\t\tleft: 0;\n\t\ttop: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tz-index: 2147483647;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__day-name,\n\t.react-datepicker__portal .react-datepicker__day,\n\t.react-datepicker__portal .react-datepicker__time-name {\n\t\twidth: 3rem;\n\t\tline-height: 3rem;\n\t}\n\n\t@media (max-width: 400px), (max-height: 550px) {\n\t\t.react-datepicker__portal .react-datepicker__day-name,\n\t\t.react-datepicker__portal .react-datepicker__day,\n\t\t.react-datepicker__portal .react-datepicker__time-name {\n\t\twidth: 2rem;\n\t\tline-height: 2rem;\n\t\t}\n\t}\n\n\t.react-datepicker__portal .react-datepicker__current-month,\n\t.react-datepicker__portal .react-datepicker-time__header {\n\t\tfont-size: 1.44rem;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation {\n\t\tborder: 0.81rem solid transparent;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--previous {\n\t\tborder-right-color: #ccc;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--previous:hover {\n\t\tborder-right-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {\n\t\tborder-right-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--next {\n\t\tborder-left-color: #ccc;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--next:hover {\n\t\tborder-left-color: #b3b3b3;\n\t}\n\n\t.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {\n\t\tborder-left-color: #e6e6e6;\n\t\tcursor: default;\n\t}\n\n\n\t/*\n\t*\n\t* React DatePicker Custom Overrides\n\t*\n\t*/\n\t.react-datepicker-wrapper,\n\t.react-datepicker__input-container {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\t.react-datepicker__input-container input {\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tpadding: 10px;\n\t\tfont-size: 14px;\n\t\tbackground-color: rgb(255, 255, 255);\n\t\tcolor: rgb(94, 94, 94);\n\t\tborder: 1px solid rgb(229, 229, 229);\n\t\tborder-radius: 5px;\n\t\ttransition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;\n\t}\n\t.react-datepicker__input-container input:hover {\n\t\tborder: 1px solid ', ';\n\t\tbox-shadow: 0 0 0 1px ', ' inset;\n\t}\n\t.react-datepicker__input-container input:disabled {\n\t\tcursor: not-allowed;\n\t\tcolor: ', ';\n\t\tborder: 1px solid ', ';\n\t}\n\t.react-datepicker__day--keyboard-selected {\n\t\tbackground-color: ', ';\n\t}\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list {\n\t\tpadding: 0px;\n\t}\n\t.react-datepicker__time-container,\n\t.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\n\t\twidth: 95px;\n\t}\n\t.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\n\t\tright: 105px;\n\t}\n\n\t.react-datepicker__day--selected,\n\t.react-datepicker__day--in-selecting-range,\n\t.react-datepicker__day--in-range,\n\t.react-datepicker__day--selected:hover,\n\t.react-datepicker__day--in-selecting-range:hover,\n\t.react-datepicker__day--in-range:hover,\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list\n\t\tli.react-datepicker__time-list-item--selected,\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list\n\t\tli.react-datepicker__time-list-item--selected:hover {\n\t\tbackground-color: ', ';\n\t}\n\n\t.react-datepicker__time-container\n\t\t.react-datepicker__time\n\t\t.react-datepicker__time-box\n\t\tul.react-datepicker__time-list\n\t\tli.react-datepicker__time-list-item {\n\t\tline-height: 30px;\n\t\tpadding: 0;\n\t}\n\t', '\n']);

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
};var GlobalStyles = styled.createGlobalStyle(_templateObject$w, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.lightGray;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.lighterGray;
}, function (props) {
	return props.theme.white;
}, function (props) {
	return props.theme.lightGray;
}, function (props) {
	return props.theme.darkerGray;
}, function (props) {
	return props.theme.darkGray;
}, function (props) {
	return props.theme.lighterGray;
}, function (props) {
	return props.theme.gray;
}, function (props) {
	return props.theme.gray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.darkerGray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.gray;
}, function (props) {
	return props.theme.darkerGay;
}, function (props) {
	return props.theme.darkerGray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.darkerGray;
}, function (props) {
	return props.theme.lighterGray;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.primary;
}, function (props) {
	return props.theme.globalStyles;
});

//Using Styled Components Context
var TEThemeProvider = function TEThemeProvider(props) {
	var theme = props.theme,
	    globalStyles = props.globalStyles;

	return React__default.createElement(
		styled.ThemeProvider,
		{ theme: _extends({}, initialTheme, theme, { globalStyles: globalStyles }) },
		React__default.createElement(
			React.Fragment,
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
	alertOnClick: undefined, //Gets Defaulted
	alertButtonTitle: 'Okay', //Gets Defaulted

	confirmTitle: '',
	confirmMessage: '',
	confirmVisible: false,
	confirmLeftOnClick: undefined, //Gets Defaulted
	confirmLeftTitle: 'Cancel',
	confirmRightOnClick: undefined, //Gets Defaulted
	confirmRightTitle: '',

	networkActivityVisible: false,
	networkMessage: ''
};

var TEPopupContext = React.createContext();

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
	var _useReducer = React.useReducer(reducer, initialState),
	    _useReducer2 = slicedToArray(_useReducer, 2),
	    state = _useReducer2[0],
	    dispatch = _useReducer2[1];

	var alertTitle = state.alertTitle,
	    alertMessage = state.alertMessage,
	    alertVisible = state.alertVisible,
	    _state$alertOnClick = state.alertOnClick,
	    alertOnClick = _state$alertOnClick === undefined ? function () {
		return dispatch({ type: 'hide_alert' });
	} : _state$alertOnClick,
	    _state$alertButtonTit = state.alertButtonTitle,
	    alertButtonTitle = _state$alertButtonTit === undefined ? 'Okay' : _state$alertButtonTit,
	    confirmTitle = state.confirmTitle,
	    confirmMessage = state.confirmMessage,
	    _state$confirmLeftOnC = state.confirmLeftOnClick,
	    confirmLeftOnClick = _state$confirmLeftOnC === undefined ? function () {
		return dispatch({ type: 'hide_confirm' });
	} : _state$confirmLeftOnC,
	    confirmLeftTitle = state.confirmLeftTitle,
	    _state$confirmRightOn = state.confirmRightOnClick,
	    confirmRightOnClick = _state$confirmRightOn === undefined ? function () {
		return dispatch({ type: 'hide_confirm' });
	} : _state$confirmRightOn,
	    confirmRightTitle = state.confirmRightTitle,
	    confirmVisible = state.confirmVisible,
	    networkActivityVisible = state.networkActivityVisible,
	    networkMessage = state.networkMessage;


	return React__default.createElement(
		TEPopupContext.Provider,
		{ value: { state: state, dispatch: dispatch } },
		props.children,
		React__default.createElement(TEAlert, {
			visible: alertVisible,
			title: alertTitle,
			message: alertMessage,
			onClick: alertOnClick,
			buttonTitle: alertButtonTitle
		}),
		React__default.createElement(TEConfirm, {
			visible: confirmVisible,
			title: confirmTitle,
			message: confirmMessage,
			leftOnClick: confirmLeftOnClick,
			leftButtonTitle: confirmLeftTitle,
			rightOnClick: confirmRightOnClick,
			rightButtonTitle: confirmRightTitle
		}),
		React__default.createElement(TENetworkActivity, { visible: networkActivityVisible, message: networkMessage })
	);
};

var useTEPopups = function useTEPopups() {
	var _useContext = React.useContext(TEPopupContext),
	    dispatch = _useContext.dispatch;

	//TEAlert


	var showAlert = function showAlert(_ref) {
		var title = _ref.title,
		    message = _ref.message,
		    onClick = _ref.onClick,
		    buttonTitle = _ref.buttonTitle;
		return dispatch({
			type: 'show_alert',
			payload: {
				alertTitle: title,
				alertMessage: message,
				alertOnClick: onClick,
				alertButtonTitle: buttonTitle
			}
		});
	};
	var hideAlert = function hideAlert() {
		return dispatch({ type: 'hide_alert' });
	};

	//TEConfirm
	var showConfirm = function showConfirm(_ref2) {
		var title = _ref2.title,
		    message = _ref2.message,
		    leftOnClick = _ref2.leftOnClick,
		    leftTitle = _ref2.leftTitle,
		    rightOnClick = _ref2.rightOnClick,
		    rightTitle = _ref2.rightTitle;
		return dispatch({
			type: 'show_confirm',
			payload: {
				confirmTitle: title,
				confirmMessage: message,
				confirmLeftOnClick: leftOnClick,
				confirmLeftTitle: leftTitle,
				confirmRightOnClick: rightOnClick,
				confirmRightTitle: rightTitle
			}
		});
	};
	var hideConfirm = function hideConfirm() {
		return dispatch({ type: 'hide_confirm' });
	};

	var showNetworkActivity = function showNetworkActivity(message) {
		return dispatch({
			type: 'show_network_activity',
			payload: message
		});
	};
	var hideNetworkActivity = function hideNetworkActivity() {
		return dispatch({ type: 'hide_network_activity' });
	};

	return {
		showAlert: showAlert,
		hideAlert: hideAlert,
		showConfirm: showConfirm,
		hideConfirm: hideConfirm,
		showNetworkActivity: showNetworkActivity,
		hideNetworkActivity: hideNetworkActivity
	};
};

var TEAppWrapper = function TEAppWrapper(props) {
	var theme = props.theme,
	    globalStyles = props.globalStyles,
	    children = props.children;


	return React__default.createElement(
		reactRouterDom.BrowserRouter,
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
					children
				)
			)
		)
	);
};

exports.TEButton = TEButton;
exports.TEFileInput = TEFileInput;
exports.TEFileManagerRow = TEFileManagerRow;
exports.TEFileRow = TEFileRow;
exports.TEForm = TEForm;
exports.TEImageRow = TEImageRow;
exports.TEInput = TEInput;
exports.TEInputRow = TEInputRow;
exports.TELabel = TELabel;
exports.TEMultiStepForm = TEMultiStepForm;
exports.TERow = TERow;
exports.TECheckboxInput = TECheckboxInput;
exports.TEDatetimeInput = TEDatetimeInput;
exports.TEDatetimeRow = TEDatetimeRow;
exports.TERadioButtonInput = TERadioButtonInput;
exports.TECheckboxGroup = TECheckboxGroup;
exports.TERadioButtonGroup = TERadioButtonGroup;
exports.TESearchSelectInput = TESearchSelectInput;
exports.TESearchSelectRow = TESearchSelectRow;
exports.TESegmentedGroup = TESegmentedGroup;
exports.TETextarea = TETextarea;
exports.TEThemeProvider = TEThemeProvider;
exports.TEErrorLoadingAlert = TEErrorLoadingAlert;
exports.TEPanel = TEPanel;
exports.TEPanelTitle = TEPanelTitle;
exports.TEPanelWrapper = TEPannelWrapper;
exports.TETitleBar = TETitleBar;
exports.TESideNavbar = TESideNavbar;
exports.TEAlert = TEAlert;
exports.TEConfirm = TEConfirm;
exports.TENetworkActivity = TENetworkActivity;
exports.TEPopup = TEPopup;
exports.TEPopupForm = TEPopupForm;
exports.TEPopupMultiStepForm = TEPopupMultiStepForm;
exports.TESpinner = TESpinner;
exports.TEPrivateRoute = TEPrivateRoute;
exports.TESideNavLink = TESideNavLink$1;
exports.TEBodyContainer = TEBodyContainer;
exports.TESubNavbar = TESubNavbar;
exports.TEScrollToTop = TEScrollToTop;
exports.TEHelmet = TEHelmet;
exports.TEPopupContext = TEPopupContext;
exports.TEPopupProvider = TEPopupProvider;
exports.useTEPopups = useTEPopups;
exports.TEAppWrapper = TEAppWrapper;
//# sourceMappingURL=index.js.map
