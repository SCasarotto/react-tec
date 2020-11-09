# React TEC

[![NPM](https://img.shields.io/npm/v/react-tec.svg)](https://www.npmjs.com/package/react-tec) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

These docs will provide you with simple get started instructions and detailed examples of every component in the library.

## [Documentation](https://www.react-tec.com/)

## Installation

The package can be installed via NPM:

`yarn add react-tec` or `npm install react-tec --save`

You will also need to install [styled-components](https://www.styled-components.com/) [react-route and react-router-dom](https://reacttraining.com/react-router/).

`yarn add styled-components react-router react-router-dom` or `npm install styled-components react-router react-router-dom --save`

## Usage

Start by wrapping your app or where ever you plan to use React TEC components with `TEThemeContext` or `TEAppWrapper`. These components provide a base theme to all components and you will experience an error if you don't. I typically do this kind of wrapping in index.js. Usually something like:

```jsx
import React from 'react'
import { TEAppWrapper } from 'react-tec'

const Main = () => (
	<TEAppWrapper>
		<App />
	</TEAppWrapper>
)

ReactDOM.render(<Main />, document.getElementById('root'))
```

## Acknowledgements

Thank you to [TSDX](https://github.com/jaredpalmer/tsdx) for such an amazing starting point!

## License

MIT © [SCasarotto](https://github.com/SCasarotto)
