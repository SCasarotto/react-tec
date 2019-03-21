import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

//Include the following
//
// TEAppWrapper
// TEPopupContext
// TEThemeContext
//

const Home = (props) => {
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
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Home
