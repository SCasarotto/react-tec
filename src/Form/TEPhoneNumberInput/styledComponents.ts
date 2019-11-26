import styled from 'styled-components'
import PhoneInput from 'react-phone-number-input'

export const PhoneNumberInput = styled(PhoneInput)`
	position: relative;
	display: block;
	width: 100%;
	font-size: 14px;
	padding: 10px;
	box-sizing: border-box;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
	border-radius: 5px;
	background-color: ${(props) => props.theme.white};
	color: ${(props) => (props.disabled ? props.theme.gray : props.theme.darkerGray)};

	border: 1px solid
		${(props) => (props.disabled ? props.theme.lighterGray : props.theme.lightGray)};
	transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
	:hover,
	:active {
		border: 1px solid ${(props) => props.theme.primary};
		box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
	}
	.react-phone-number-input__row {
		/* This is done to stretch the contents of this component */
		display: flex;
		align-items: center;
	}

	.react-phone-number-input__phone {
		/* The phone number input stretches to fill all empty space */
		flex: 1;

		/* The phone number input should shrink
		to make room for the extension input */
		min-width: 0;
	}

	.react-phone-number-input__icon {
		/* The flag icon size is 4x3 hence the exact 'width' and 'height' values */
		width: 1.24em;
		height: 0.93em;

		/* '1px' is still too much for a "retina" screen but there's no way in CSS to specify "hairline" border width. */
		border: 1px solid rgba(0, 0, 0, 0.5);

		/* Makes sure 'width'x'height' is exactly '4x3' and 'border' width is not included in it */
		box-sizing: content-box;
	}

	.react-phone-number-input__icon--international {
		/* The international icon size is square */
		/* and also has no border hence the '2 * 1px' 'width' and 'height' compensation */
		width: calc(0.93em + 2px);
		height: calc(0.93em + 2px);

		/* The international icon size is square hence the exact 'padding' value */
		/* for precise alignment with '4x3' sized country flags. */
		padding-left: 0.155em;
		padding-right: 0.155em;

		border: none;
	}

	.react-phone-number-input__error {
		margin-left: calc(1.24em + 2px + 0.3em + 0.35em + 0.5em);
		margin-top: calc(0.3rem);
		color: #d30f00;
	}

	.react-phone-number-input__icon-image {
		max-width: 100%;
		max-height: 100%;
	}

	/*Removes '<input type="number"/>' up/down arrows in Webkit browsers.*/
	.react-phone-number-input__ext-input::-webkit-inner-spin-button,
	.react-phone-number-input__ext-input::-webkit-outer-spin-button {
		margin: 0 !important;
		-webkit-appearance: none !important;
		-moz-appearance: textfield !important;
	}

	.react-phone-number-input__ext-input {
		width: 3em;
	}

	.react-phone-number-input__ext {
		white-space: nowrap;
	}

	.react-phone-number-input__ext,
	.react-phone-number-input__ext-input {
		margin-left: 0.5em;
	}

	/* Styling native country '<select/>'. */

	.react-phone-number-input__country--native {
		position: relative;
		align-self: stretch;
		display: flex;
		align-items: center;
		margin-right: 0.5em;
	}

	.react-phone-number-input__country-select {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 1;
		border: 0;
		opacity: 0;
		cursor: pointer;
	}

	.react-phone-number-input__country-select-arrow {
		display: block;
		content: '';
		width: 0;
		height: 0;
		margin-bottom: 0.1em;
		margin-top: 0.3em;
		margin-left: 0.3em;
		border-width: 0.35em 0.2em 0 0.2em;
		border-style: solid;
		border-left-color: transparent;
		border-right-color: transparent;
		color: #b8bdc4;
		opacity: 0.7;
		transition: color 0.1s;
	}

	/* Something from stackoverflow. */
	.react-phone-number-input__country-select-divider {
		font-size: 1px;
		background: black;
	}

	.react-phone-number-input__country-select:focus
		+ .react-phone-number-input__country-select-arrow,
	.react-phone-number-input__country.rrui__select--focus .rrui__select__arrow {
		color: #03b2cb;
	}

	/* Styling phone number input */

	.react-phone-number-input__input {
		/* height: calc(0.3rem * 6); */
		outline: none;
		border-radius: 0;
		padding: 0;
		appearance: none;
		border: none;
		/* border-bottom: 1px solid #c5d2e0; */
		/* transition: border 0.1s; */
		font-size: inherit;
	}

	.react-phone-number-input__input:focus {
		border-color: #03b2cb;
	}

	.react-phone-number-input__input--disabled {
		cursor: default;
	}

	.react-phone-number-input__input--invalid,
	.react-phone-number-input__input--invalid:focus {
		border-color: #eb2010;
	}

	/* Overrides Chrome autofill yellow background color */
	.react-phone-number-input__input:-webkit-autofill {
		box-shadow: 0 0 0 1000px white inset;
	}

	/* A small fix for 'react-responsive-ui' */
	.react-phone-number-input__country .rrui__select__button {
		border-bottom: none;
	}
`
