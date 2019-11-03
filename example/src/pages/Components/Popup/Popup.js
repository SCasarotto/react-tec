import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

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
			<Helmet
				title="React TEC | Components - Popup"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel title="Popup Components">
					<ul>
						<li>
							<Link to="/components/popup/TEAlert">TEAlert</Link>
						</li>
						<li>
							<Link to="/components/popup/TEConfirm">
								TEConfirm
							</Link>
						</li>
						<li>
							<Link to="/components/popup/TENetworkActivity">
								TENetworkActivity
							</Link>
						</li>
						<li>
							<Link to="/components/popup/TEPopup">TEPopup</Link>
						</li>
						<li>
							<Link to="/components/popup/TEPopupForm">
								TEPopupForm
							</Link>
						</li>
						<li>
							<Link to="/components/popup/TEPopupMultiStepForm">
								TEPopupMultiStepForm
							</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path="/components/popup/TEAlert"
							component={TEAlertSection}
						/>
						<Route
							path="/components/popup/TEConfirm"
							component={TEConfirmSection}
						/>
						<Route
							path="/components/popup/TENetworkActivity"
							component={TENetworkActivitySection}
						/>
						<Route
							path="/components/popup/TEPopup"
							component={TEPopupSection}
						/>
						<Route
							path="/components/popup/TEPopupForm"
							component={TEPopupFormSection}
						/>
						<Route
							path="/components/popup/TEPopupMultiStepForm"
							component={TEPopupMultiStepFormSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Popup
