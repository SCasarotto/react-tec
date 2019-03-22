import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

//Include the following
//
// TESideNavLink
// TESideNavbar
// TESwitch
//

import TELinkSection from './TELinkSection'
import TENavLinkSection from './TENavLinkSection'
import TERouteSection from './TERouteSection'
import TESideNavbarSection from './TESideNavbarSection'
import TESideNavLinkSection from './TESideNavLinkSection'
import TESubNavbarSection from './TESubNavbarSection'
import TESwitchSection from './TESwitchSection'

const Home = (props) => {
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
					<TELinkSection />
					<TENavLinkSection />
					<TERouteSection />
					<TESideNavbarSection />
					<TESideNavLinkSection />
					<TESubNavbarSection />
					<TESwitchSection />
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Home
