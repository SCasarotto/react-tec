# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.6.0 - 9-1-2021

## Breaking

- All components have now lost their `TE` prefix. This was originally done as a way to reduce naming collisions but ultimately was determined to be unnecessary.
- All components class names have been updated to follow a naming convention of `tec-*`. This like the component name change has the goal of keeping the class names unique to `react-tec` but better match other css naming conventions.
- `TERow` is not `FormRow` as are the props typescript types.
- Removed `react-power-select` and thus `TESearchSelectInput` and `TESearchSelectRow` have been removed. Users should migrate to `Select` and `SelectRow` based on `react-select`.

## Changes

- Updated devDependencies:
  - `@babel/core` from `7.12.10` to `7.15.0`
  - `@storybook/addon-actions` from `^6.1.18` to `^6.3.7`
  - `@storybook/addon-essentials` from `^6.1.18` to `^6.3.7`
  - `@storybook/addon-links` from `^6.1.18` to `^6.3.7`
  - `@storybook/react` from `^6.1.18` to `^6.3.7`
  - `@testing-library/react` from `11.2.5` to `12.0.0`
  - `@types/jest` from `^27.0.1` to `^26.0.20`
  - `@types/react` from `^17.0.0` to `^17.0.19`
  - `@types/react-dom` from `^17.0.0` to `^17.0.9`
  - `@types/react-helmet` from `^6.1.0` to `^6.1.2`
  - `@types/react-router-dom` from `^5.1.7` to `^5.1.8`
  - `@types/styled-components` from `^5.1.7` to `^5.1.13`
  - `babel-jest` from `^26.6.3` to `^27.1.0`
  - `husky` from `^5.1.0` to `^7.0.2`
  - `jest-styled-components` from `^7.0.3` to `^7.0.5`
  - `react` from `^17.0.1` to `^17.0.2`
  - `react-dom` from `^17.0.1` to `^17.0.2`
  - `react-is` from `^17.0.1` to `^17.0.2`
  - `react-router` from `^5.2.0` to `^5.2.1`
  - `react-router-dom` from `^5.2.0` to `^5.2.1`
  - `styled-components` from `^5.2.1` to `^5.3.1`
  - `tslib` from `2.0.3` to `2.3.1`
  - `typescript` from `^3.9.7` to `^4.4.2`
  - Migrated from `tsdx` to `@weiran.zsd/tsdx` due to `tsdx` no longer being maintained
- Updated Dependencies:
  - `@popperjs/core` from `^2.8.2` to `^2.9.3`
  - `@testing-library/jest-dom` from `^5.11.9` to `^5.14.1`
  - `@types/color` from `^3.0.1` to `^3.0.2`
  - `@types/react-avatar-editor` from `^10.3.5` to `^10.3.6`
  - `@types/react-phone-number-input` from `^3.0.6` to `^3.0.11`
  - `@types/react-select` from `^4.0.13` to `^4.0.17`
  - `react-avatar-editor` from `11.0.12` to `12.0.0`
  - `react-datepicker` from `^3.5.0` to `^4.2.1`
  - `react-phone-number-input` from `^3.1.16` to `^3.1.26`
  - `react-popper` from `^2.2.3` to `^2.2.5`
  - `react-select` from `^4.2.1` to `^4.3.1`

## Added

- Added devDependencies:
  - `@typescript-eslint/eslint-plugin` at `^4.30.0`
  - `@typescript-eslint/parser` at `^4.30.0`
  - `@weiran.zsd/tsdx` at `^0.16.1`
  - `eslint` at `^7.32.0`
  - `eslint-config-prettier` at `^8.3.0`
  - `eslint-config-react-app` at `^6.0.0`
  - `eslint-plugin-flowtype` at `^5.9.2`
  - `eslint-plugin-import` at `^2.24.2`
  - `eslint-plugin-jsx-a11y` at `^6.4.1`
  - `eslint-plugin-prettier` at `^4.0.0`
  - `eslint-plugin-react` at `^7.25.1`
  - `eslint-plugin-react-hooks` at `^4.2.0`

## 0.5.1 - 3-15-2021

Updated react-select from `^4.1.0` -> `^4.2.1` and fixed typescript definitions of `TESelect` and `TESelectRow`

## 0.5.0 - 2-22-2021

Note some of the dependency updates contain significant changes.

## Changes

- `@babel/core` from `7.11.6` to `7.12.10`
- `@storybook/addon-actions` from `^6.0.28` to `^6.1.18`
- `@storybook/addon-essentials` from `^6.0.28` to `^6.1.18`
- `@storybook/addon-links` from `^6.0.28` to `^6.1.18`
- `@storybook/react` from `^6.0.28` to `^6.1.18`
- `@testing-library/react` from `11.1.0` to `11.2.5`
- `@types/jest` from `^26.0.15` to `^26.0.20`
- `@types/react` from `^16.9.55` to `^17.0.0`
- `@types/react-dom` from `^16.9.9` to `^17.0.0`
- `@types/react-router-dom` from `^5.1.6` to `^5.1.7`
- `@types/styled-components` from `^5.1.4` to `^5.1.7`
- `babel-loader` from `^8.1.0` to `^8.2.2`
- `husky` from `^4.2.5` to `^5.1.0`
- `@popperjs/core` from `^2.5.4` to `^2.8.2`
- `@types/react-datepicker` from `^3.1.1` to `^3.1.5`
- `@types/react-phone-number-input` from `^3.0.5` to `^3.0.6`
- `@types/react-select` from `^3.0.23` to `^4.0.13`
- `react-datepicker` from `^3.3.0` to `^3.5.0`
- `react-icons` from `^3.10.0` to `^4.2.0`
- `react-phone-number-input` from `^3.1.3` to `^3.1.16`
- `react-select` from `^3.1.0` to `^4.1.0`

## Bug Fix

- Memoized the functions returned from `useTEPopupFunctions`

## 0.4.3 - 11-9-2020

## Bug Fix

- Fixed typing issue in `TESubNavbar`

## 0.4.1 - 11-9-2020

## Bug Fix

- Fixed typing issue in `TESideNavLink`

## 0.4.0 - 11-8-2020

This was a really large update.

- Updated all packages to latest at this date
- Greatly improve types of many components
- Rebuilt docs with storybook
- Add many more tests to all components

## Changes

- Updated dependencies:
  - `@types/react-select` from `^3.0.10` to `^3.0.11`
  - `react-phone-number-input` from `^3.0.21` to `^3.0.22`

## 0.3.6 - 3-15-2020

## Changes

- Updated dependencies:
  - `@types/react-select` from `^3.0.10` to `^3.0.11`
  - `react-phone-number-input` from `^3.0.21` to `^3.0.22`

## 0.3.5 - 3-7-2020

## Bug Fix

- Fixed a bug with `TESelectRow` where the `onChange` prop was not being passed to the `react-select` component.

## Changes

- Updated devDependencies:
  - `@types/jest` from `^25.1.3` to `^25.1.4`
- Updated dependencies:
  - `react-datepicker` from `^2.13.0` to `^2.14.0`
  - `react-phone-number-input` from `^3.0.20` to `^3.0.21`

## 0.3.4 - 3-3-2020

## Changes

- Updated devDependencies:
  - `@types/react` from `^16.9.20` to `^16.9.23`
  - `@types/styled-components` from `^4.4.3` to `^5.0.1`
  - `react` from `^16.12.0` to `^16.13.0`
  - `react-dom` from `^16.12.0` to `^16.13.0`
  - `testlib` from `^1.10.0` to `^1.11.1`
  - `typescript` from `^3.7.5` to `^3.8.3`
- Updated dependencies:
  - `react-datepicker` from `^2.12.1` to `^2.13.0`
  - `react-phone-number-input` from `^3.0.18` to `^3.0.20`

## 0.3.2 - 2-21-2020

## Bug Fix

- Fixed `id` bug with `TEDatetimeInput`. It was being appled to both inputs when using `withPortalButton`.

## 0.3.0 - 2-20-2020

## Breaking

- Be aware that `react-phone-number-input` from `^2.4.1` to `^3.0.18` as a result you should be sure to update how you overwrite the styling on this component as well as [other concerns](https://github.com/catamphetamine/react-phone-number-input/blob/master/CHANGELOG.md#300--01012020).
- Be aware that `styled-components` from `^4.4.0` to `^5.0.1`. This update requires you update to v5 however the [changes](https://github.com/styled-components/styled-components/blob/master/CHANGELOG.md#v500---2020-01-13) had no noticeable impact on this library.

## Added

- `TEDatetimeInput` now has a new prop. `withPortalButton`. The goal of this prop was to allow for both typing and the modal selection. I have found that the modal view works well on touch or smaller devices. This is something I may attempt to suggest into the core lib but for now it is just an abstraction. (#49)

## Changes

- Updated devDependencies:
  - `@types/jest` from `^24.0.20` to `^25.1.3`
  - `@types/react` from `^16.9.11` to `^16.9.21`
  - `@types/react-datepicker` from `^2.9.4` to `^2.11.0`
  - `@types/react-dom` from `^16.9.4` to `^16.9.5`
  - `@types/react-helmet` from `^5.0.14` to `^5.0.15`
  - `@types/styled-components` from `^4.4.0` to `^4.4.3`
  - `husky` from `^3.1.0` to `^4.2.3`
  - `rollup-plugin-peer-deps-external` from `^2.2.0` to `^2.2.2`
  - `styled-components` from `^4.4.0` to `^5.0.1`
  - `tsdx` from `^0.11.0` to `^0.12.3`
  - `typescript` from `^3.6.4` to `^3.7.5`
  - `@types/styled-components` from `^3.6.4` to `^4.4.3`
- Updated dependencies:
  - `@types/color` from `^3.0.0` to `^3.0.1`
  - `@types/react-select` from `^3.0.8` to `^3.0.10`
  - `react-datepicker` from `^2.10.0` to `^2.12.1`
  - `react-icons` from `^^3.8.0` to `^3.9.0`
  - `react-phone-number-input` from `^2.4.1` to `^3.0.18`
  - `react-popper` from `^1.3.6` to `^1.3.7`

## Bug Fix

- A full review of component styling was reviewed when `disabled`. (#46)
- Quick review of component styling in Safari. Made more consistent.

## 0.2.7 - 12-3-2019

## Bug Fix

- `TEImageRow` EditorPopup wasn't closing when cancel was pressed. This resolves that.

## 0.2.6 - 12-3-2019

## Changes

- Updated `react-phone-number-input` from `2.4.1` to `2.5.0`

## 0.2.5 - 12-3-2019

## Bug Fixes

- Fixed styling of `TEPhoneNumberInput`. Addresses (#43)

## 0.2.4 - 11-27-2019

## Added

- `TEPhoneNumberInput` and `TEPhoneNumberRow` have been added based on [react-phone-number-input](https://github.com/catamphetamine/react-phone-number-input).
- `TEMenuButton` has been added primarily relying on [react-popper](https://github.com/popperjs/react-popper)

## Changes

- Many components now have the ability to pass down refs in addition the typing for them have been changed away from `any` to something meaningful.

## 0.2.3 - 11-24-2019

## Added

- `TESelect` and `TESelectRow`. These two components are based on [react-select](https://github.com/jedwatson/react-select). The plan is to eventually replace `TESearchSelect` and `TESearchSelectRow` with these as these libraries are more well maintained and have a more consistent API.

## Changes

- Added mobile responsiveness to the docs site
- Updated `react-datepicker` from `v2.10.0` to `2.10.1`

## Bug Fixes

- Fixed the broken links in the documentation

## 0.2.2 - 11-18-2019

## Added

- Now export some helper functions
- Added `styled-components`, `react-router`, and `react-router-dom` to devDependencies to allow for test writing but had to also use `rollup-plugin-peer-deps-external` to ensure they were not bundled during build.
- Updated doc site to not `link` but instead use the deployed version in order not to have the devDependencies included.

## 0.2.1 - 11-16-2019

## Changes

- Small styling changes to TEFileManagerRow

## 0.2.0 - 11-16-2019

This update is a complete rewrite of react-tec. Moving from [Create React Library](https://github.com/transitive-bullshit/create-react-library#readme) to [tsdx](https://github.com/jaredpalmer/tsdx). This means the lirbary is written in typescript and thus keeps the type definitions up to date. In this transition some things were refined and others bugs were fixed (conflicts with base html props). This shift will result in a more maintainable library using up to date libraries. Please see the mentionable changes below.

### BREAKING CHANGES

- `TERow` prop `size` has been changed to `rowSize`. Thus all "Row"s (Ex. `TEInputRow`) and "Groups" (Ex. `TECheckboxGroup`) now use `rowSize` instead of `row`.
- "Groups" (Ex. `TECheckboxGroup`) prop `rowSize` that previously determined how many checkboxs would be in a row is now `inputRowSize`.
- `TEInputRow` no longer can accept `type='textarea'`. There is now a `TETextareaRow`.
- `TEPrivateRoute` no longer accepts `isAuthenticated`, `hasPermissions`, `authPath`, `accessDeniedPath` instead it accepts an array `authChecks` containing `check` function and `path` string. This allow for full generalization of as many layers of checks required.
- `TEHelmet` is no longer apart of this package. This was entirely a passthrough component and was unnessisary. Use react-helmet from now on.
- Replaced `TEScrollToTop` with a utility hook `useScrollTop`.
- `TEImageRow` `imgSrc` prop is not `imgSrcArray` just like `TEFileManagerRow`
- All forms (`TEForm`, `TEPopupForm`, `TEMultiStepForm`, etc) all now provide the submit event to the `onSubmit` function. This mean you will now need to add `event.preventDefault()` to your `onSubmit` function.

### Additions

- Full Typescript support
- Entirely Upgraded dependencies and libraries used to generate the module

## 0.1.24 - 10-11-2019

### Bug Fixes

- TEButton type bug fix

## 0.1.23 - 09-29-2019

### Bug Fixes

- Small warning bug fix

## 0.1.22 - 09-29-2019

### Changes

- Added `avatarEditorData` to `TEImageRow` to allow adjusting React Avatar Editor (Resolving #11)
- Fixed disabled styles on `TEDatetimeInput` (Resolving #17)
- Added `hideClearButton` to `TEFileInput` and hiding it in `TEFileManager` (Resolving #17)
- Fixed margin-bottom in `TESegementedGroup` (Resolving #20)
- Fixed Disabled Styling on some inputs (Resolving #23)

## 0.1.20 - 09-29-2019

### Changes

- Added a classname to all top levels of components.
- Updated packages for docs site

## 0.1.16 - 09-08-2019

### Changes

- Updated react-datepicker from `2.8.0` to `2.9.6`

## 0.1.15 - 07-24-2019

### Changes

- Updated react-datepicker from `2.7.0` to `2.8.0`
- Updated react-power-select from `1.0.0-beta.15` to `1.0.0-beta.16`
- Updated TEFileManagerRow - Removed `fileSrc` in favor of `fileSrcArray`. The internal objects don't change just accepting an array instead of an object.
- Updated TEFileManagerRow - When `src` is not present, do not display the download button.
- Updated `styled-components` in docs from `4.2.0` to `4.3.2`.

## 0.1.14 - 06-27-2019

### Added

- Full styled-component code reviewed. Cleaned formatting and fixed a few css bugs.
- Standardized navigation link colors to address #18

## 0.1.12 - 06-26-2019

### Changes

- Updated react-date-picker from 2.5.0 to 2.7.0

## 0.1.11 - 06-11-2019

### Changes

- added `background-color: white;` to TEButton

## 0.1.10 - 06-10-2019

### Bug Fixes

- `useTEPopups.hideConfirm` bug fix

## 0.1.9 - 05-28-2019

### Bug Fixes

- `className` bug fix for TEPaneTitle

## 0.1.8 - 05-28-2019

### Changed

- Addresses #5:
  - Removed background color from `TEPanelWrapper`
  - Removed the `wrapperHeight` props as it was only used to extend the background color.
  - Added the background color from `TEPanelWrapper` to `TEBodyContainer`.
  - Updated `TEBodyContainer` `min-height` styling from `100%` -> `100vh`

### Added

- `useTEPopups` - This provides easy functions to call instead of remembering the dispatch keys in `TEPopupContext`. Addresses #7.
- Added a `Header` component prop to `TESideNavbar`. This allows for a custom header component instead of simply passing a prop to the logo img src. Addresses #8
- Updated `TEPrivateRoute`'s `isAuthenticated` and `hasPermissions` props to be functions that receive all the props from React Router. This allows more dynamic handling of authentication. Addresses #13
- Added additional options to the `size` prop of `TEPanel` ("three-quarter", "quarter", "condensed") Addresses #14

### Bug Fixes

- Fixed redirect issues fixed with `TEPrivateRoute`

## 0.1.7 - 05-28-2019

- Accidently messed up versioning. This version was skipped.

## 0.1.6 - 05-20-2019

### Changed

- Upgraded Packages:
  - react-datepicker
  - react-helmet
  - react-icons
- Updated documentation with codesandbox examples

### Bug Fixes

- Fixed TESpinner Animation

## 0.1.5 - 04-14-2019

### Changed

- Added "fromPath" to the state in TEPrivateRoute when it redirects. This can then be used to direct a user back to where they were headed if necessary.

## 0.1.4 - 04-14-2019

### Changed

- All components and subcomponents now have a className. This should allow for much easier styling with complex components.
- Upgraded Packages

## 0.1.3 - 03-28-2019

### Added

- TEPrivateRoute

## 0.1.1 - 03-27-2019

### Changed

- Moved react-router and react-router-dom to peer dependencies instead of dependencies.

### Removed

All of these were basically just wrapper components

- TELink
- TENavLink
- TERoute
- TESwitch

## 0.1.0 - 03-22-2019

### INITIAL RELEASE!

- Documentation is up and functional (could be prettier)
- All components have been reviewed a number of times (could be reviewed at least one more time)

<!-- ## [1.0.0] - 2017-06-20
### Added
- New visual identity by [@tylerfortune8](https://github.com/tylerfortune8).
- Version navigation.
- Links to latest released version in previous versions.
- "Why keep a changelog?" section.
- "Who needs a changelog?" section.
- "How do I make a changelog?" section.
- "Frequently Asked Questions" section.
- New "Guiding Principles" sub-section to "How do I make a changelog?".
- Simplified and Traditional Chinese translations from [@tianshuo](https://github.com/tianshuo).
- German translation from [@mpbzh](https://github.com/mpbzh) & [@Art4](https://github.com/Art4).
- Italian translation from [@azkidenz](https://github.com/azkidenz).
- Swedish translation from [@magol](https://github.com/magol).
- Turkish translation from [@karalamalar](https://github.com/karalamalar).
- French translation from [@zapashcanon](https://github.com/zapashcanon).
- Brazilian Portugese translation from [@Webysther](https://github.com/Webysther).
- Polish translation from [@amielucha](https://github.com/amielucha) & [@m-aciek](https://github.com/m-aciek).
- Russian translation from [@aishek](https://github.com/aishek).
- Czech translation from [@h4vry](https://github.com/h4vry).
- Slovak translation from [@jkostolansky](https://github.com/jkostolansky).
- Korean translation from [@pierceh89](https://github.com/pierceh89).
- Croatian translation from [@porx](https://github.com/porx).
- Persian translation from [@Hameds](https://github.com/Hameds).
- Ukrainian translation from [@osadchyi-s](https://github.com/osadchyi-s).

### Changed
- Start using "changelog" over "change log" since it's the common usage.
- Start versioning based on the current English version at 0.3.0 to help
translation authors keep things up-to-date.
- Rewrite "What makes unicorns cry?" section.
- Rewrite "Ignoring Deprecations" sub-section to clarify the ideal
  scenario.
- Improve "Commit log diffs" sub-section to further argument against
  them.
- Merge "Why can’t people just use a git log diff?" with "Commit log
  diffs"
- Fix typos in Simplified Chinese and Traditional Chinese translations.
- Fix typos in Brazilian Portuguese translation.
- Fix typos in Turkish translation.
- Fix typos in Czech translation.
- Fix typos in Swedish translation.
- Improve phrasing in French translation.
- Fix phrasing and spelling in German translation.

### Removed
- Section about "changelog" vs "CHANGELOG".
 -->
