import PhoneInput from 'react-phone-number-input';
import styled from 'styled-components';

export const StyledPhoneNumberInput = styled(PhoneInput)`
  position: relative;
  /* From CSS Base File */
  display: flex;
  align-items: center;
  /* From CSS Base File - END*/

  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
  border-radius: 5px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) =>
    props.disabled ? props.theme.gray : props.theme.darkerGray};

  border: 1px solid
    ${(props) =>
      props.disabled ? props.theme.lighterGray : props.theme.lightGray};
  transition: border-color 0.2s ease-in, box-shadow 0.2s ease-in;
  :hover,
  :active {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.primary} inset;
  }

  .PhoneInputInput {
    /* The phone number input stretches to fill all empty space */
    flex: 1;
    /* The phone number input should shrink to make room for the extension input */
    min-width: 0;
    outline: none;
    border-radius: 0;
    /* padding: 0; */
    appearance: none;
    border: none;
    /* border-bottom: 1px solid #c5d2e0; */
    /* transition: border 0.1s; */
    font-size: inherit;
    margin: 0px; /* Resets Safari Margin */

    padding: 10px;
    background-color: transparent;
  }

  .PhoneInputCountryIcon {
    width: calc(
      var(--PhoneInputCountryFlag-height) *
        var(--PhoneInputCountryFlag-aspectRatio)
    );
    height: var(--PhoneInputCountryFlag-height);
    display: block;
  }

  .PhoneInputCountryIcon--square {
    width: var(--PhoneInputCountryFlag-height);
  }

  .PhoneInputCountryIcon--border {
    background-color: var(--PhoneInputCountryFlag-backgroundColor--loading);

    box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor),
      inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor);
  }

  .PhoneInputCountryIconImg {
    width: 100%;
    height: 100%;
  }

  .PhoneInputInternationalIconPhone {
    opacity: var(--PhoneInputInternationalIconPhone-opacity);
  }

  .PhoneInputInternationalIconGlobe {
    opacity: var(--PhoneInputInternationalIconGlobe-opacity);
  }

  .PhoneInputCountry {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    margin-right: var(--PhoneInputCountrySelect-marginRight);
    padding: 10px 0px 10px 10px;
  }

  .PhoneInputCountrySelect {
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

  .PhoneInputCountrySelect[disabled] {
    cursor: not-allowed;
  }

  .PhoneInputCountrySelectArrow {
    display: block;
    content: '';
    width: var(--PhoneInputCountrySelectArrow-width);
    height: var(--PhoneInputCountrySelectArrow-width);
    margin-top: var(--PhoneInputCountrySelectArrow-marginTop);
    margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
    border-style: solid;
    border-color: var(--PhoneInputCountrySelectArrow-color);
    border-top-width: 0;
    border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);
    border-left-width: 0;
    border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);
    transform: var(--PhoneInputCountrySelectArrow-transform);
    opacity: var(--PhoneInputCountrySelectArrow-opacity);
  }

  .PhoneInputCountrySelect:focus
    + .PhoneInputCountryIcon
    + .PhoneInputCountrySelectArrow {
    opacity: 1;
    color: var(--PhoneInputCountrySelectArrow-color--focus);
  }

  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
    box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor--focus),
      inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth)
        var(--PhoneInputCountryFlag-borderColor--focus);
  }

  .PhoneInputCountrySelect:focus
    + .PhoneInputCountryIcon
    .PhoneInputInternationalIconGlobe {
    opacity: 1;
    color: var(--PhoneInputCountrySelectArrow-color--focus);
  }
`;

// :root {
// 	--PhoneInput-color--focus: #03b2cb;
// 	--PhoneInputInternationalIconPhone-opacity: 0.8;
// 	--PhoneInputInternationalIconGlobe-opacity: 0.65;
// 	--PhoneInputCountrySelect-marginRight: 0.35em;
// 	--PhoneInputCountrySelectArrow-width: 0.3em;
// 	--PhoneInputCountrySelectArrow-marginLeft: var(--PhoneInputCountrySelect-marginRight);
// 	--PhoneInputCountrySelectArrow-marginTop: calc(var(--PhoneInputCountrySelectArrow-height) / 2);
// 	--PhoneInputCountrySelectArrow-borderWidth: 1px;
// 	--PhoneInputCountrySelectArrow-opacity: 0.45;
// 	--PhoneInputCountrySelectArrow-color: inherit;
// 	--PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);
// 	--PhoneInputCountrySelectArrow-transform: rotate(45deg);
// 	--PhoneInputCountryFlag-aspectRatio: 1.5;
// 	--PhoneInputCountryFlag-height: 1em;
// 	--PhoneInputCountryFlag-borderWidth: 1px;
// 	--PhoneInputCountryFlag-borderColor: rgba(0,0,0,0.5);
// 	--PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);
// 	--PhoneInputCountryFlag-backgroundColor--loading: rgba(0,0,0,0.1);
// }

// .PhoneInput {
// 	/* This is done to stretch the contents of this component. */
// 	display: flex;
// 	align-items: center;
// }

// .PhoneInputInput {
// 	/* The phone number input stretches to fill all empty space */
// 	flex: 1;
// 	/* The phone number input should shrink
// 	   to make room for the extension input */
// 	min-width: 0;
// }

// .PhoneInputCountryIcon {
// 	width: calc(var(--PhoneInputCountryFlag-height) * var(--PhoneInputCountryFlag-aspectRatio));
// 	height: var(--PhoneInputCountryFlag-height);
// }

// .PhoneInputCountryIcon--square {
// 	width: var(--PhoneInputCountryFlag-height);
// }

// .PhoneInputCountryIcon--border {
// 	/* Removed `background-color` because when an `<img/>` was still loading
// 	   it would show a dark gray rectangle. */
// 	/* For some reason the `<img/>` is not stretched to 100% width and height
// 	   and sometime there can be seen white pixels of the background at top and bottom. */
// 	background-color: var(--PhoneInputCountryFlag-backgroundColor--loading);
// 	/* Border is added via `box-shadow` because `border` interferes with `width`/`height`. */
// 	/* For some reason the `<img/>` is not stretched to 100% width and height
// 	   and sometime there can be seen white pixels of the background at top and bottom,
// 	   so an additional "inset" border is added. */
// 	box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor),
// 		inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor);
// }

// .PhoneInputCountryIconImg {
// 	/* 3rd party <SVG/> flag icons won't stretch if they have `width` and `height`.
// 	   Also, if an <SVG/> icon's aspect ratio was different, it wouldn't fit too. */
// 	width: 100%;
// 	height: 100%;
// }

// .PhoneInputInternationalIconPhone {
// 	opacity: var(--PhoneInputInternationalIconPhone-opacity);
// }

// .PhoneInputInternationalIconGlobe {
// 	opacity: var(--PhoneInputInternationalIconGlobe-opacity);
// }

// /* Styling native country `<select/>`. */

// .PhoneInputCountry {
// 	position: relative;
// 	align-self: stretch;
// 	display: flex;
// 	align-items: center;
// 	margin-right: var(--PhoneInputCountrySelect-marginRight);
// }

// .PhoneInputCountrySelect {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	height: 100%;
// 	width: 100%;
// 	z-index: 1;
// 	border: 0;
// 	opacity: 0;
// 	cursor: pointer;
// }

// .PhoneInputCountrySelect[disabled] {
// 	cursor: default;
// }

// .PhoneInputCountrySelectArrow {
// 	display: block;
// 	content: '';
// 	width: var(--PhoneInputCountrySelectArrow-width);
// 	height: var(--PhoneInputCountrySelectArrow-width);
// 	margin-top: var(--PhoneInputCountrySelectArrow-marginTop);
// 	margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
// 	border-style: solid;
// 	border-color: var(--PhoneInputCountrySelectArrow-color);
// 	border-top-width: 0;
// 	border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);
// 	border-left-width: 0;
// 	border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);
// 	transform: var(--PhoneInputCountrySelectArrow-transform);
// 	opacity: var(--PhoneInputCountrySelectArrow-opacity);
// }

// .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
// 	opacity: 1;
// 	color: var(--PhoneInputCountrySelectArrow-color--focus);
// }

// .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
// 	box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus),
// 		inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus);
// }

// .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon .PhoneInputInternationalIconGlobe {
// 	opacity: 1;
// 	color: var(--PhoneInputCountrySelectArrow-color--focus);
// }
