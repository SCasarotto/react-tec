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

const Home = (props) => {
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
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Home
