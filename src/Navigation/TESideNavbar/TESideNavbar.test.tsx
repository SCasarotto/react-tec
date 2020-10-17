import React from 'react'
import ReactDOM from 'react-dom'
import { TESideNavbar } from './TESideNavbar'

describe('TESideNavbar', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<TESideNavbar />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
