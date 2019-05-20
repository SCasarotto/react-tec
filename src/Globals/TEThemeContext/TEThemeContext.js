import React, { Fragment /*createContext*/ } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// import 'react-datepicker/dist/react-datepicker.css'

//Using Styled Components Context Instead
// export const TEThemeContext = createContext()

const initialTheme = {
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
	shadowCenter: 'rgba(0, 0, 0, 0.1) 0px 0px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px',
}

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
const GlobalStyles = createGlobalStyle`
			& * {
				box-sizing: border-box;
			}

			@keyframes TESpinnerLoading {
					to {
							-webkit-transform: rotate(1turn);
							transform: rotate(1turn)
					}
			}
			

			/*
			*
			* React Power Select
			*
			*/
			.PowerSelect {
				position: relative;
				display: block;
				width: 100%;
				font-size: 16px;
				cursor: pointer;
				background-color: ${(props) => props.theme.white};
				border: 1px solid ${(props) => props.theme.lightGray};
				border-radius: 5px;
				box-sizing: border-box;
				transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
			}
			.PowewrSelect * {
				box-sizing: border-box;
			}
			.PowerSelect.white-border {
				border: 1px solid ${(props) => props.theme.white};
			}
			.PowerSelect:focus {
				outline: none;
			}
			.PowerSelect--focused {
			}
			.PowerSelect--disabled {
				background-color: ${(props) => props.theme.lighterGray};
				cursor: not-allowed;
			}
			.PowerSelect--disabled .PowerSelect__Trigger {
				pointer-events: none;
			}
			.PowerSelect--disabled .PowerSelect__TriggerInput {
				background-color: ${(props) => props.theme.lighterGray};
			}
			.PowerSelect--open {
				border-bottom-right-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom: 0;
			}
			.PowerSelect--open .PowerSelect__TriggerStatus:before {
				transform: rotate(-180deg);
			}
			.PowerSelect__Trigger {
				position: relative;
				height: 39px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.PowerSelect__Menu {
				background-color: ${(props) => props.theme.white};
				border: 1px solid ${(props) => props.theme.lightGray};
			}
			.PowerSelect__Menu.white-border__Menu {
				border: none;
				border-top: 1px solid #a0a0a0;
			}
			.PowerSelect__Menu:focus {
				outline: none;
			}
			.PowerSelect__Options {
				position: relative;
				max-height: 238px;
				overflow: auto;
			}
			.PowerSelect__OptGroup {
				padding-left: 8px;
			}
			.PowerSelect__OptGroup__Label {
				font-weight: 700;
				font-size: 0.9em;
				color: ${(props) => props.theme.darkerGray};
				padding: 8px 0 4px;
			}
			.PowerSelect__Option {
				cursor: pointer;
				padding: 8px 12px;
			}
			.PowerSelect__Option:not(.PowerSelect__Option--disabled):hover {
				background-color: rgba(55, 50, 117 0.5);
			}
			.PowerSelect__Option--disabled {
				color: ${(props) => props.theme.darkGray};
				cursor: not-allowed;
			}
			.PowerSelect__Option--highlighted {
				background-color: ${(props) => props.theme.lighterGray};
			}
			.PowerSelect__BeforeOptions {
				padding: 8px 12px;
			}
			.PowerSelect__Placeholder {
				color: ${(props) => props.theme.gray};
				font-size: 14px;
			}
			.PowerSelect__SearchInputContainer {
				padding: 8px;
			}
			.PowerSelect__SearchInput {
				display: block;
				width: 100%;
				height: 34px;
				padding: 4px 8px;
				line-height: 1.4;
				font-size: inherit;
				border: 1px solid ${(props) => props.theme.gray};
				border-radius: 2px;
				cursor: pointer;
				box-sizing: border-box;
			}
			.PowerSelect__SearchInput:focus {
				border-color: ${(props) => props.theme.primary};
				outline: none;
			}
			.PowerSelect__TriggerInput {
				display: inline-block;
				width: 100%;
				height: 34px;
				border: none;
				cursor: pointer;
				padding: 4px 22px 4px 8px;
				font-size: inherit;
			}
			.PowerSelect__TriggerInput:focus {
				outline: none;
			}
			.PowerSelect__Trigger__LHS,
			.PowerSelect__Trigger__RHS {
				display: table-cell;
				vertical-align: middle;
				white-space: nowrap;
			}
			.PowerSelect__Trigger__LHS {
				padding-left: 8px;
				padding-right: 4px;
			}
			.PowerSelect__Trigger__RHS {
				padding-right: 4px;
				padding-left: 4px;
			}
			.PowerSelect__TriggerLabel {
				padding: 6px 22px 6px 8px;
				color: ${(props) => props.theme.darkerGray};
			}
			.PowerSelect__Trigger__LHS + .PowerSelect__TriggerLabel {
				padding-left: 4px;
			}
			.PowerSelect__TriggerStatus {
				padding-top: 2px;
				padding-right: 8px;
				padding-left: 4px;
			}
			.PowerSelect__TriggerStatus:before {
				content: '';
				display: block;
				border-top: 4px solid ${(props) => props.theme.primary};
				border-left: 4px solid transparent;
				border-right: 4px solid transparent;
			}
			.PowerSelect__Clear {
				padding: 4px;
				color: ${(props) => props.theme.gray};
			}
			.PowerSelect__Clear:hover {
				color: ${(props) => props.theme.darkerGay};
			}
			.PowerSelect__Clear:before {
				content: "\\D7";
			}
			.PowerSelect__Trigger--empty .PowerSelect__Clear {
				visibility: hidden;
			}
			.PowerSelect__Clear,
			.PowerSelect__TriggerInputContainer,
			.PowerSelect__TriggerLabel,
			.PowerSelect__TriggerStatus,
			.PowerSelectMultiple__OptionsContainer {
				display: table-cell;
				width: 100%;
				vertical-align: middle;
				height: 39px;
			}
			.PowerSelectMultiple__OptionsContainer {
				padding-top: 2px;
				padding-bottom: 2px;
			}
			.PowerSelectMultiple__SelectedOptions {
				list-style: none;
				padding-left: 0;
				display: block;
				margin: 0;
			}
			.PowerSelectMultiple__SelectedOptions:after {
				content: '';
				display: table;
				clear: both;
			}
			.PowerSelectMultiple__SelectedOptions > li {
				display: block;
				float: left;
				margin-top: 2px;
				margin-bottom: 2px;
			}
			.PowerSelect__Trigger--empty .PowerSelectMultiple_TriggerInputContainer {
				float: none;
				margin-left: 4px;
			}
			.PowerSelectMultiple__SelectedOption {
				line-height: 29px;
				margin-left: 4px;
				background-color: #ebeeff;
				border: 1px solid #c6cfff;
				color: ${(props) => props.theme.darkerGray};
				border-radius: 3px;
			}
			.PowerSelectMultiple__SelectedOption__Close,
			.PowerSelectMultiple__SelectedOption__Label {
				padding: 0 6px;
				display: block;
				float: left;
			}
			.PowerSelectMultiple__SelectedOption__Close {
				border-left: 1px solid #c6cfff;
				cursor: pointer;
			}
			.PowerSelectMultiple__SelectedOption__Close:hover {
				background-color: #dce1ff;
			}
			.PowerSelectMultiple .PowerSelect__Trigger {
				white-space: normal;
				height: auto;
			}
			.PowerSelectMultiple .PowerSelect__TriggerInput {
				display: inline-block;
				width: auto;
				padding: 0;
				height: 26px;
				margin-left: 4px;
			}
			.PowerSelectMultiple .PowerSelect__Trigger--empty .PowerSelect__TriggerInput {
				width: 100%;
			}

			.tether-element {
				z-index: 1000;
			}

			/*
			*
			* React DatePicker Base
			*
			*/

			.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-read-view--down-arrow,
			.react-datepicker__month-year-read-view--down-arrow {
			  margin-left: -8px;
			  position: absolute;
			}

			.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-read-view--down-arrow,
			.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
			.react-datepicker__month-read-view--down-arrow::before,
			.react-datepicker__month-year-read-view--down-arrow::before {
			  box-sizing: content-box;
			  position: absolute;
			  border: 8px solid transparent;
			  height: 0;
			  width: 1px;
			}

			.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
			.react-datepicker__month-read-view--down-arrow::before,
			.react-datepicker__month-year-read-view--down-arrow::before {
			  content: "";
			  z-index: -1;
			  border-width: 8px;
			  left: -8px;
			  border-bottom-color: #aeaeae;
			}

			.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
			  top: 0;
			  margin-top: -8px;
			}

			.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
			  border-top: none;
			  border-bottom-color: #f0f0f0;
			}

			.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
			  top: -1px;
			  border-bottom-color: #aeaeae;
			}

			.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-read-view--down-arrow,
			.react-datepicker__month-year-read-view--down-arrow {
			  bottom: 0;
			  margin-bottom: -8px;
			}

			.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-read-view--down-arrow,
			.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
			.react-datepicker__month-read-view--down-arrow::before,
			.react-datepicker__month-year-read-view--down-arrow::before {
			  border-bottom: none;
			  border-top-color: #fff;
			}

			.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
			.react-datepicker__month-read-view--down-arrow::before,
			.react-datepicker__month-year-read-view--down-arrow::before {
			  bottom: -1px;
			  border-top-color: #aeaeae;
			}

			.react-datepicker-wrapper {
			  display: inline-block;
			}

			.react-datepicker {
			  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
			  font-size: 0.8rem;
			  background-color: #fff;
			  color: #000;
			  border: 1px solid #aeaeae;
			  border-radius: 0.3rem;
			  display: inline-block;
			  position: relative;
			}

			.react-datepicker--time-only .react-datepicker__triangle {
			  left: 35px;
			}

			.react-datepicker--time-only .react-datepicker__time-container {
			  border-left: 0;
			}

			.react-datepicker--time-only .react-datepicker__time {
			  border-radius: 0.3rem;
			}

			.react-datepicker--time-only .react-datepicker__time-box {
			  border-radius: 0.3rem;
			}

			.react-datepicker__triangle {
			  position: absolute;
			  left: 50px;
			}

			.react-datepicker-popper {
			  z-index: 1;
			}

			.react-datepicker-popper[data-placement^="bottom"] {
			  margin-top: 10px;
			}

			.react-datepicker-popper[data-placement^="top"] {
			  margin-bottom: 10px;
			}

			.react-datepicker-popper[data-placement^="right"] {
			  margin-left: 8px;
			}

			.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
			  left: auto;
			  right: 42px;
			}

			.react-datepicker-popper[data-placement^="left"] {
			  margin-right: 8px;
			}

			.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
			  left: 42px;
			  right: auto;
			}

			.react-datepicker__header {
			  text-align: center;
			  background-color: #f0f0f0;
			  border-bottom: 1px solid #aeaeae;
			  border-top-left-radius: 0.3rem;
			  border-top-right-radius: 0.3rem;
			  padding-top: 8px;
			  position: relative;
			}

			.react-datepicker__header--time {
			  padding-bottom: 8px;
			  padding-left: 5px;
			  padding-right: 5px;
			}

			.react-datepicker__year-dropdown-container--select,
			.react-datepicker__month-dropdown-container--select,
			.react-datepicker__month-year-dropdown-container--select,
			.react-datepicker__year-dropdown-container--scroll,
			.react-datepicker__month-dropdown-container--scroll,
			.react-datepicker__month-year-dropdown-container--scroll {
			  display: inline-block;
			  margin: 0 2px;
			}

			.react-datepicker__current-month,
			.react-datepicker-time__header {
			  margin-top: 0;
			  color: #000;
			  font-weight: bold;
			  font-size: 0.944rem;
			}

			.react-datepicker-time__header {
			  text-overflow: ellipsis;
			  white-space: nowrap;
			  overflow: hidden;
			}

			.react-datepicker__navigation {
			  background: none;
			  line-height: 1.7rem;
			  text-align: center;
			  cursor: pointer;
			  position: absolute;
			  top: 10px;
			  width: 0;
			  padding: 0;
			  border: 0.45rem solid transparent;
			  z-index: 1;
			  height: 10px;
			  width: 10px;
			  text-indent: -999em;
			  overflow: hidden;
			}

			.react-datepicker__navigation--previous {
			  left: 10px;
			  border-right-color: #ccc;
			}

			.react-datepicker__navigation--previous:hover {
			  border-right-color: #b3b3b3;
			}

			.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {
			  border-right-color: #e6e6e6;
			  cursor: default;
			}

			.react-datepicker__navigation--next {
			  right: 10px;
			  border-left-color: #ccc;
			}

			.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
			  right: 80px;
			}

			.react-datepicker__navigation--next:hover {
			  border-left-color: #b3b3b3;
			}

			.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {
			  border-left-color: #e6e6e6;
			  cursor: default;
			}

			.react-datepicker__navigation--years {
			  position: relative;
			  top: 0;
			  display: block;
			  margin-left: auto;
			  margin-right: auto;
			}

			.react-datepicker__navigation--years-previous {
			  top: 4px;
			  border-top-color: #ccc;
			}

			.react-datepicker__navigation--years-previous:hover {
			  border-top-color: #b3b3b3;
			}

			.react-datepicker__navigation--years-upcoming {
			  top: -4px;
			  border-bottom-color: #ccc;
			}

			.react-datepicker__navigation--years-upcoming:hover {
			  border-bottom-color: #b3b3b3;
			}

			.react-datepicker__month-container {
			  float: left;
			}

			.react-datepicker__month {
			  margin: 0.4rem;
			  text-align: center;
			}

			.react-datepicker__input-time-container {
			  clear: both;
			  width: 100%;
			  float: left;
			  margin: 5px 0 10px 15px;
			  text-align: left;
			}

			.react-datepicker__input-time-container .react-datepicker-time__caption {
			  display: inline-block;
			}

			.react-datepicker__input-time-container .react-datepicker-time__input-container {
			  display: inline-block;
			}

			.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {
			  display: inline-block;
			  margin-left: 10px;
			}

			.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {
			  width: 85px;
			}

			.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-inner-spin-button,
			.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"]::-webkit-outer-spin-button {
			  -webkit-appearance: none;
			  margin: 0;
			}

			.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type="time"] {
			  -moz-appearance: textfield;
			}

			.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {
			  margin-left: 5px;
			  display: inline-block;
			}

			.react-datepicker__time-container {
			  float: right;
			  border-left: 1px solid #aeaeae;
			  width: 70px;
			}

			.react-datepicker__time-container--with-today-button {
			  display: inline;
			  border: 1px solid #aeaeae;
			  border-radius: 0.3rem;
			  position: absolute;
			  right: -72px;
			  top: 0;
			}

			.react-datepicker__time-container .react-datepicker__time {
			  position: relative;
			  background: white;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
			  width: 70px;
			  overflow-x: hidden;
			  margin: 0 auto;
			  text-align: center;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
			  list-style: none;
			  margin: 0;
			  height: calc(195px + (1.7rem / 2));
			  overflow-y: scroll;
			  padding-right: 0px;
			  padding-left: 0px;
			  width: 100%;
			  box-sizing: content-box;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
			  height: 30px;
			  padding: 5px 10px;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
			  cursor: pointer;
			  background-color: #f0f0f0;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
			  background-color: #216ba5;
			  color: white;
			  font-weight: bold;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
			  background-color: #216ba5;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
			  color: #ccc;
			}

			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
			  cursor: default;
			  background-color: transparent;
			}

			.react-datepicker__week-number {
			  color: #ccc;
			  display: inline-block;
			  width: 1.7rem;
			  line-height: 1.7rem;
			  text-align: center;
			  margin: 0.166rem;
			}

			.react-datepicker__week-number.react-datepicker__week-number--clickable {
			  cursor: pointer;
			}

			.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
			  border-radius: 0.3rem;
			  background-color: #f0f0f0;
			}

			.react-datepicker__day-names,
			.react-datepicker__week {
			  white-space: nowrap;
			}

			.react-datepicker__day-name,
			.react-datepicker__day,
			.react-datepicker__time-name {
			  color: #000;
			  display: inline-block;
			  width: 1.7rem;
			  line-height: 1.7rem;
			  text-align: center;
			  margin: 0.166rem;
			}

			.react-datepicker__day {
			  cursor: pointer;
			}

			.react-datepicker__day:hover {
			  border-radius: 0.3rem;
			  background-color: #f0f0f0;
			}

			.react-datepicker__day--today {
			  font-weight: bold;
			}

			.react-datepicker__day--highlighted {
			  border-radius: 0.3rem;
			  background-color: #3dcc4a;
			  color: #fff;
			}

			.react-datepicker__day--highlighted:hover {
			  background-color: #32be3f;
			}

			.react-datepicker__day--highlighted-custom-1 {
			  color: magenta;
			}

			.react-datepicker__day--highlighted-custom-2 {
			  color: green;
			}

			.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
			  border-radius: 0.3rem;
			  background-color: #216ba5;
			  color: #fff;
			}

			.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {
			  background-color: #1d5d90;
			}

			.react-datepicker__day--keyboard-selected {
			  border-radius: 0.3rem;
			  background-color: #2a87d0;
			  color: #fff;
			}

			.react-datepicker__day--keyboard-selected:hover {
			  background-color: #1d5d90;
			}

			.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
			  background-color: rgba(33, 107, 165, 0.5);
			}

			.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
			  background-color: #f0f0f0;
			  color: #000;
			}

			.react-datepicker__day--disabled {
			  cursor: default;
			  color: #ccc;
			}

			.react-datepicker__day--disabled:hover {
			  background-color: transparent;
			}

			.react-datepicker__input-container {
			  position: relative;
			  display: inline-block;
			}

			.react-datepicker__year-read-view,
			.react-datepicker__month-read-view,
			.react-datepicker__month-year-read-view {
			  border: 1px solid transparent;
			  border-radius: 0.3rem;
			}

			.react-datepicker__year-read-view:hover,
			.react-datepicker__month-read-view:hover,
			.react-datepicker__month-year-read-view:hover {
			  cursor: pointer;
			}

			.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
			.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
			.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
			.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
			  border-top-color: #b3b3b3;
			}

			.react-datepicker__year-read-view--down-arrow,
			.react-datepicker__month-read-view--down-arrow,
			.react-datepicker__month-year-read-view--down-arrow {
			  border-top-color: #ccc;
			  float: right;
			  margin-left: 20px;
			  top: 8px;
			  position: relative;
			  border-width: 0.45rem;
			}

			.react-datepicker__year-dropdown,
			.react-datepicker__month-dropdown,
			.react-datepicker__month-year-dropdown {
			  background-color: #f0f0f0;
			  position: absolute;
			  width: 50%;
			  left: 25%;
			  top: 30px;
			  z-index: 1;
			  text-align: center;
			  border-radius: 0.3rem;
			  border: 1px solid #aeaeae;
			}

			.react-datepicker__year-dropdown:hover,
			.react-datepicker__month-dropdown:hover,
			.react-datepicker__month-year-dropdown:hover {
			  cursor: pointer;
			}

			.react-datepicker__year-dropdown--scrollable,
			.react-datepicker__month-dropdown--scrollable,
			.react-datepicker__month-year-dropdown--scrollable {
			  height: 150px;
			  overflow-y: scroll;
			}

			.react-datepicker__year-option,
			.react-datepicker__month-option,
			.react-datepicker__month-year-option {
			  line-height: 20px;
			  width: 100%;
			  display: block;
			  margin-left: auto;
			  margin-right: auto;
			}

			.react-datepicker__year-option:first-of-type,
			.react-datepicker__month-option:first-of-type,
			.react-datepicker__month-year-option:first-of-type {
			  border-top-left-radius: 0.3rem;
			  border-top-right-radius: 0.3rem;
			}

			.react-datepicker__year-option:last-of-type,
			.react-datepicker__month-option:last-of-type,
			.react-datepicker__month-year-option:last-of-type {
			  -webkit-user-select: none;
			  -moz-user-select: none;
			  -ms-user-select: none;
			  user-select: none;
			  border-bottom-left-radius: 0.3rem;
			  border-bottom-right-radius: 0.3rem;
			}

			.react-datepicker__year-option:hover,
			.react-datepicker__month-option:hover,
			.react-datepicker__month-year-option:hover {
			  background-color: #ccc;
			}

			.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
			.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
			.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
			  border-bottom-color: #b3b3b3;
			}

			.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
			.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
			.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
			  border-top-color: #b3b3b3;
			}

			.react-datepicker__year-option--selected,
			.react-datepicker__month-option--selected,
			.react-datepicker__month-year-option--selected {
			  position: absolute;
			  left: 15px;
			}

			.react-datepicker__close-icon {
			  background-color: transparent;
			  border: 0;
			  cursor: pointer;
			  outline: 0;
			  padding: 0;
			  vertical-align: middle;
			  position: absolute;
			  height: 16px;
			  width: 16px;
			  top: 25%;
			  right: 7px;
			}

			.react-datepicker__close-icon::after {
			  background-color: #216ba5;
			  border-radius: 50%;
			  bottom: 0;
			  box-sizing: border-box;
			  color: #fff;
			  content: "\00d7";
			  cursor: pointer;
			  font-size: 12px;
			  height: 16px;
			  width: 16px;
			  line-height: 1;
			  margin: -8px auto 0;
			  padding: 2px;
			  position: absolute;
			  right: 0px;
			  text-align: center;
			}

			.react-datepicker__today-button {
			  background: #f0f0f0;
			  border-top: 1px solid #aeaeae;
			  cursor: pointer;
			  text-align: center;
			  font-weight: bold;
			  padding: 5px 0;
			  clear: left;
			}

			.react-datepicker__portal {
			  position: fixed;
			  width: 100vw;
			  height: 100vh;
			  background-color: rgba(0, 0, 0, 0.8);
			  left: 0;
			  top: 0;
			  justify-content: center;
			  align-items: center;
			  display: flex;
			  z-index: 2147483647;
			}

			.react-datepicker__portal .react-datepicker__day-name,
			.react-datepicker__portal .react-datepicker__day,
			.react-datepicker__portal .react-datepicker__time-name {
			  width: 3rem;
			  line-height: 3rem;
			}

			@media (max-width: 400px), (max-height: 550px) {
			  .react-datepicker__portal .react-datepicker__day-name,
			  .react-datepicker__portal .react-datepicker__day,
			  .react-datepicker__portal .react-datepicker__time-name {
			    width: 2rem;
			    line-height: 2rem;
			  }
			}

			.react-datepicker__portal .react-datepicker__current-month,
			.react-datepicker__portal .react-datepicker-time__header {
			  font-size: 1.44rem;
			}

			.react-datepicker__portal .react-datepicker__navigation {
			  border: 0.81rem solid transparent;
			}

			.react-datepicker__portal .react-datepicker__navigation--previous {
			  border-right-color: #ccc;
			}

			.react-datepicker__portal .react-datepicker__navigation--previous:hover {
			  border-right-color: #b3b3b3;
			}

			.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
			  border-right-color: #e6e6e6;
			  cursor: default;
			}

			.react-datepicker__portal .react-datepicker__navigation--next {
			  border-left-color: #ccc;
			}

			.react-datepicker__portal .react-datepicker__navigation--next:hover {
			  border-left-color: #b3b3b3;
			}

			.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
			  border-left-color: #e6e6e6;
			  cursor: default;
			}


			/*
			*
			* React DatePicker Custom Overrides
			*
			*/
			.react-datepicker-wrapper,
			.react-datepicker__input-container {
			    display: block;
			    width: 100%;
			}
			.react-datepicker__input-container input {
			    position: relative;
			    display: block;
			    width: 100%;
			    padding: 10px;
			    font-size: 14px;
			    background-color: rgb(255, 255, 255);
			    color: rgb(94, 94, 94);
			    border: 1px solid rgb(229, 229, 229);
			    border-radius: 5px;
			    transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
			}
			.react-datepicker__input-container input:hover {
			    border: 1px solid ${(props) => props.theme.primary};
			    box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
			}
			.react-datepicker__day--keyboard-selected {
			    background-color: ${(props) => props.theme.primary};
			}
			.react-datepicker__time-container
			    .react-datepicker__time
			    .react-datepicker__time-box
			    ul.react-datepicker__time-list {
			    padding: 0px;
			}
			.react-datepicker__time-container,
			.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
			    width: 95px;
			}
			.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
			    right: 105px;
			}

			.react-datepicker__day--selected,
			.react-datepicker__day--in-selecting-range,
			.react-datepicker__day--in-range,
			.react-datepicker__day--selected:hover,
			.react-datepicker__day--in-selecting-range:hover,
			.react-datepicker__day--in-range:hover,
			.react-datepicker__time-container
			    .react-datepicker__time
			    .react-datepicker__time-box
			    ul.react-datepicker__time-list
			    li.react-datepicker__time-list-item--selected,
			.react-datepicker__time-container
			    .react-datepicker__time
			    .react-datepicker__time-box
			    ul.react-datepicker__time-list
			    li.react-datepicker__time-list-item--selected:hover {
			    background-color: ${(props) => props.theme.primary};
			}

			.react-datepicker__time-container
			    .react-datepicker__time
			    .react-datepicker__time-box
			    ul.react-datepicker__time-list
			    li.react-datepicker__time-list-item {
			    line-height: 30px;
			    padding: 0;
			}
			${(props) => props.theme.globalStyles}
`

//Using Styled Components Context
export const TEThemeProvider = (props) => {
	const { theme, globalStyles } = props
	return (
		<ThemeProvider theme={{ ...initialTheme, ...theme, globalStyles: globalStyles }}>
			<Fragment>
				<GlobalStyles />
				{props.children}
			</Fragment>
		</ThemeProvider>
	)
}
