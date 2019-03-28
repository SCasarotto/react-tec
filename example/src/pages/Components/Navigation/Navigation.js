import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import TEPrivateRouteSection from './TEPrivateRouteSection'
import TESideNavbarSection from './TESideNavbarSection'
import TESideNavLinkSection from './TESideNavLinkSection'
import TESubNavbarSection from './TESubNavbarSection'

const Navigation = (props) => {
	useBarTitle('Components - Navigation')

	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Components - Navigation"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h1>Navigation</h1>
					<TEPrivateRouteSection />
					<TESideNavbarSection />
					<TESideNavLinkSection />
					<TESubNavbarSection />
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Navigation
