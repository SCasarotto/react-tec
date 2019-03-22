import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import TEAppWrapperSection from './TEAppWrapperSection'
import TEPopupContextSection from './TEPopupContextSection'
import TEThemeProviderSection from './TEThemeProviderSection'

const Globals = (props) => {
	useBarTitle('Components - Globals')

	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Components - Globals"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h1>Globals</h1>
					<TEAppWrapperSection />
					<TEPopupContextSection />
					<TEThemeProviderSection />
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Globals
