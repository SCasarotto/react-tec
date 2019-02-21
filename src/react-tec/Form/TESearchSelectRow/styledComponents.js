import styled from 'styled-components'

import TERow from './../TERow'

//TODO: Decide how to integrate base styles and my styles

export const ContainerRow = styled(TERow)`
	${(props) => {
		const { theme } = props
		return `
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
				background-color: #fff;
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
				height: 27px;
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
		`
	}}
`
