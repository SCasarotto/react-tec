import React from 'react'
import { render } from '@testing-library/react'
import { TESideNavbar } from './TESideNavbar'

describe('TESideNavbar', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<TESideNavbar />)
		expect(asFragment()).toMatchSnapshot()
	})
})
