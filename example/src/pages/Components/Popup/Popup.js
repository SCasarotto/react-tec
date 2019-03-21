import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import // TEAlert,
// TEConfirm,
// TENetworkActivity,
// TEPopup,
// TEPopupForm,
// TEPopupMultiStepForm,
'react-tec'

const Home = (props) => {
	useBarTitle('Components - Popup')

	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Components - Popup"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h1>Popup</h1>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Home
