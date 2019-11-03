import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import TEBodyContainerSection from './TEBodyContainerSection'
import TEErrorLoadingAlertSection from './TEErrorLoadingAlertSection'
import TEPanelSection from './TEPanelSection'
import TEPanelTitleSection from './TEPanelTitleSection'
import TEPanelWrapperSection from './TEPanelWrapperSection'
import TESpinnerSection from './TESpinnerSection'
import TETitleBarSection from './TETitleBarSection'

const Layout = (props) => {
	useBarTitle('Components - Layout')

	return (
		<Fragment>
			<TEHelmet
				title='React TEC | Components - Layout'
				description='React TEC is a component library used by 38th Street Studios LLC'
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel title='Layout Component'>
					<ul>
						<li>
							<Link to='/components/layout/TEBodyContainer'>TEBodyContainer</Link>
						</li>
						<li>
							<Link to='/components/layout/TEErrorLoadingAlert'>
								TEErrorLoadingAlert
							</Link>
						</li>
						<li>
							<Link to='/components/layout/TEPanel'>TEPanel</Link>
						</li>
						<li>
							<Link to='/components/layout/TEPanelTitle'>TEPanelTitle</Link>
						</li>
						<li>
							<Link to='/components/layout/TEPanelWrapper'>TEPanelWrapper</Link>
						</li>
						<li>
							<Link to='/components/layout/TESpinner'>TESpinner</Link>
						</li>
						<li>
							<Link to='/components/layout/TETitleBar'>TETitleBar</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path='/components/layout/TEBodyContainer'
							component={TEBodyContainerSection}
						/>
						<Route
							path='/components/layout/TEErrorLoadingAlert'
							component={TEErrorLoadingAlertSection}
						/>
						<Route path='/components/layout/TEPanel' component={TEPanelSection} />
						<Route
							path='/components/layout/TEPanelTitle'
							component={TEPanelTitleSection}
						/>
						<Route
							path='/components/layout/TEPanelWrapper'
							component={TEPanelWrapperSection}
						/>
						<Route path='/components/layout/TESpinner' component={TESpinnerSection} />
						<Route path='/components/layout/TETitleBar' component={TETitleBarSection} />
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Layout
