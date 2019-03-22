import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

//Include the following
//
// TEBodayContainer
// TEErrorLoadingAlert
// TEPanel
// TEPanelWrapper
// TETitleBar
//

import TEBodyContainerSection from './TEBodyContainerSection'
import TEErrorLoadingAlertSection from './TEErrorLoadingAlertSection'
import TEPanelSection from './TEPanelSection'
import TEPanelTitleSection from './TEPanelTitleSection'
import TEPanelWrapperSection from './TEPanelWrapperSection'
import TESpinnerSection from './TESpinnerSection'
import TETitleBarSection from './TETitleBarSection'

const Layout = (props) => {
	useBarTitle('Components - Layout')

	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Components - Layout"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h1>Layout</h1>
					<TEBodyContainerSection />
					<TEErrorLoadingAlertSection />
					<TEPanelSection />
					<TEPanelTitleSection />
					<TEPanelWrapperSection />
					<TESpinnerSection />
					<TETitleBarSection />
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Layout
