# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),

<!-- and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). -->

## 0.1.8 - 05-28-2019

### Changed

-   Addresses #5:
    -   Removed background color from `TEPanelWrapper`
    -   Removed the `wrapperHeight` props as it was only used to extend the background color.
    -   Added the background color from `TEPanelWrapper` to `TEBodyContainer`.
    -   Updated `TEBodyContainer` `min-height` styling from `100%` -> `100vh`

### Added

-   `useTEPopups` - This provides easy functions to call instead of remembering the dispatch keys in `TEPopupContext`. Addresses #7.
-   Added a `Header` component prop to `TESideNavbar`. This allows for a custom header component instead of simply passing a prop to the logo img src. Addresses #8
-   Updated `TEPrivateRoute`'s `isAuthenticated` and `hasPermissions` props to be functions that receive all the props from React Router. This allows more dynamic handling of authentication. Addresses #13
-   Added additional options to the `size` prop of `TEPanel` ("three-quarter", "quarter", "condensed") Addresses #14

### Bug Fixes

-   Fixed redirect issues fixed with `TEPrivateRoute`

## 0.1.7 - 05-28-2019

-   Accidently messed up versioning. This version was skipped.

## 0.1.6 - 05-20-2019

### Changed

-   Upgraded Packages:
    -   react-datepicker
    -   react-helmet
    -   react-icons
-   Updated documentation with codesandbox examples

### Bug Fixes

-   Fixed TESpinner Animation

## 0.1.5 - 04-14-2019

### Changed

-   Added "fromPath" to the state in TEPrivateRoute when it redirects. This can then be used to direct a user back to where they were headed if necessary.

## 0.1.4 - 04-14-2019

### Changed

-   All components and subcomponents now have a className. This should allow for much easier styling with complex components.
-   Upgraded Packages

## 0.1.3 - 03-28-2019

### Added

-   TEPrivateRoute

## 0.1.1 - 03-27-2019

### Changed

-   Moved react-router and react-router-dom to peer dependencies instead of dependencies.

### Removed

All of these were basically just wrapper components

-   TELink
-   TENavLink
-   TERoute
-   TESwitch

## 0.1.0 - 03-22-2019

### INITIAL RELEASE!

-   Documentation is up and functional (could be prettier)
-   All components have been reviewed a number of times (could be reviewed at least one more time)

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
