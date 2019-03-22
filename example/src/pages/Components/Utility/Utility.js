import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

//Include the following
//
//TEHelment
//TEScrollToTop
//
import TEHelmetSection from './TEHelmetSection'
import TEScrollToTopSection from './TEScrollToTopSection'

const Home = (props) => {
	useBarTitle('Components - Utility')

	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Components - Utility"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h1>Utility</h1>
					<TEHelmetSection />
					<TEScrollToTopSection />
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Home
