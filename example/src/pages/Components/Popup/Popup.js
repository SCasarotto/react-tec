import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import TEAlertSection from './TEAlertSection'
import TEConfirmSection from './TEConfirmSection'
import TENetworkActivitySection from './TENetworkActivitySection'
import TEPopupSection from './TEPopupSection'
import TEPopupFormSection from './TEPopupFormSection'
import TEPopupMultiStepFormSection from './TEPopupMultiStepFormSection'

const Popup = (props) => {
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
					<TEAlertSection />
					<TEConfirmSection />
					<TENetworkActivitySection />
					<TEPopupSection />
					<TEPopupFormSection />
					<TEPopupMultiStepFormSection />
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Popup
