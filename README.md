# React TEC

> React Component Library used at 38th Street Studios

[![NPM](https://img.shields.io/npm/v/react-tec.svg)](https://www.npmjs.com/package/react-tec) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

React TEC is a React component library built and maintained by [38th Street Studios](https://www.38thstreetstudios.com/). These docs will provide you with simple get started instructions and detailed examples of every component in the library.

## Installation

The package can be installed via NPM:

```bash
yarn add react-tec
```

or

```bash
npm install react-tec --save
```

You will also need to install [styled-components](https://www.styled-components.com/)

```bash
yarn add styled-components
```

or

```bash
npm install styled-components --save
```

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

## License

MIT © [SCasarotto](https://github.com/SCasarotto)
