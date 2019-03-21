import React, { Fragment /*createContext*/ } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import 'react-datepicker/dist/react-datepicker.css'

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
	${(props) => {
		const { theme } = props
		return `
			& * {
				box-sizing: border-box;
			}

			.PowerSelect {
				position: relative;
				display: block;
				width: 100%;
				font-size: 16px;
				cursor: pointer;
				background-color: ${theme.white};
				border: 1px solid ${theme.lightGray};
				border-radius: 5px;
				box-sizing: border-box;
				transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
			}
			.PowewrSelect * {
				box-sizing: border-box;
			}
			.PowerSelect.white-border {
				border: 1px solid ${theme.white};
			}
			.PowerSelect:focus {
				outline: none;
			}
			.PowerSelect--focused {
			}
			.PowerSelect--disabled {
				background-color: ${theme.lighterGray};
				cursor: not-allowed;
			}
			.PowerSelect--disabled .PowerSelect__Trigger {
				pointer-events: none;
			}
			.PowerSelect--disabled .PowerSelect__TriggerInput {
				background-color: ${theme.lighterGray};
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
				background-color: ${theme.white};
				border: 1px solid ${theme.lightGray};
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
				color: ${theme.darkerGray};
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
				color: ${theme.darkGray};
				cursor: not-allowed;
			}
			.PowerSelect__Option--highlighted {
				background-color: ${theme.lighterGray};
			}
			.PowerSelect__BeforeOptions {
				padding: 8px 12px;
			}
			.PowerSelect__Placeholder {
				color: ${theme.gray};
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
				border: 1px solid ${theme.gray};
				border-radius: 2px;
				cursor: pointer;
				box-sizing: border-box;
			}
			.PowerSelect__SearchInput:focus {
				border-color: ${theme.primary};
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
				color: ${theme.darkerGray};
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
				border-top: 4px solid ${theme.primary};
				border-left: 4px solid transparent;
				border-right: 4px solid transparent;
			}
			.PowerSelect__Clear {
				padding: 4px;
				color: ${theme.gray};
			}
			.PowerSelect__Clear:hover {
				color: ${theme.darkerGay};
			}
			.PowerSelect__Clear:before {
				content: ${'/D7'};
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
				color: ${theme.darkerGray}
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
			    border: 1px solid #373275;
			    box-shadow: 0 0 0 1px #373275 inset;
			}
			.react-datepicker__day--keyboard-selected {
			    background-color: #373275;
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
			    background-color: #373275;
			}

			.react-datepicker__time-container
			    .react-datepicker__time
			    .react-datepicker__time-box
			    ul.react-datepicker__time-list
			    li.react-datepicker__time-list-item {
			    line-height: 30px;
			    padding: 0;
			}

		`
	}}
`

//Using Styled Components Context
export const TEThemeProvider = (props) => {
	return (
		<ThemeProvider theme={{ ...initialTheme, ...props.theme }}>
			<Fragment>
				<GlobalStyles />
				{props.children}
			</Fragment>
		</ThemeProvider>
	)
}
