import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from '../../../context'

import { TEAlertSection } from './TEAlertSection'
import { TEConfirmSection } from './TEConfirmSection'
import { TENetworkActivitySection } from './TENetworkActivitySection'
import { TEPopupSection } from './TEPopupSection'
import { TEPopupFormSection } from './TEPopupFormSection'
import { TEPopupMultiStepFormSection } from './TEPopupMultiStepFormSection'

export const Popup = () => {
	useBarTitle('Components - Popup')

	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components - Popup</title>
			</Helmet>
			<TEPanelWrapper>
				<TEPanel title='Popup Components'>
					<ul>
						<li>
							<Link to='/components/popup/TEAlert'>TEAlert</Link>
						</li>
						<li>
							<Link to='/components/popup/TEConfirm'>TEConfirm</Link>
						</li>
						<li>
							<Link to='/components/popup/TENetworkActivity'>TENetworkActivity</Link>
						</li>
						<li>
							<Link to='/components/popup/TEPopup'>TEPopup</Link>
						</li>
						<li>
							<Link to='/components/popup/TEPopupForm'>TEPopupForm</Link>
						</li>
						<li>
							<Link to='/components/popup/TEPopupMultiStepForm'>
								TEPopupMultiStepForm
							</Link>
						</li>
					</ul>
					<Switch>
						<Route path='/components/popup/TEAlert' component={TEAlertSection} />
						<Route path='/components/popup/TEConfirm' component={TEConfirmSection} />
						<Route
							path='/components/popup/TENetworkActivity'
							component={TENetworkActivitySection}
						/>
						<Route path='/components/popup/TEPopup' component={TEPopupSection} />
						<Route
							path='/components/popup/TEPopupForm'
							component={TEPopupFormSection}
						/>
						<Route
							path='/components/popup/TEPopupMultiStepForm'
							component={TEPopupMultiStepFormSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}
