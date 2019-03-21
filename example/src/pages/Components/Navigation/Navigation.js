import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

//Include the following
//
// TELink
// TENavLink
// TERoute
// TESideNavLink
// TESideNavbar
// TESwitch
//

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
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Home
