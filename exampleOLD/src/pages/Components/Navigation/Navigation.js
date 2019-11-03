import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import TEPrivateRouteSection from './TEPrivateRouteSection'
import TESideNavbarSection from './TESideNavbarSection'
import TESideNavLinkSection from './TESideNavLinkSection'
import TESubNavbarSection from './TESubNavbarSection'

const Navigation = (props) => {
	useBarTitle('Components - Navigation')

	return (
		<Fragment>
			<Helmet
				title="React TEC | Components - Navigation"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel title="Navigation Components">
					<ul>
						<li>
							<Link to="/components/navigation/TEPrivateRoute">
								TEPrivateRoute
							</Link>
						</li>
						<li>
							<Link to="/components/navigation/TESideNavbar">
								TESideNavbar
							</Link>
						</li>
						<li>
							<Link to="/components/navigation/TESideNavLink">
								TESideNavLink
							</Link>
						</li>
						<li>
							<Link to="/components/navigation/TESubNavbar">
								TESubNavbar
							</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path="/components/navigation/TEPrivateRoute"
							component={TEPrivateRouteSection}
						/>
						<Route
							path="/components/navigation/TESideNavbar"
							component={TESideNavbarSection}
						/>
						<Route
							path="/components/navigation/TESideNavLink"
							component={TESideNavLinkSection}
						/>
						<Route
							path="/components/navigation/TESubNavbar"
							component={TESubNavbarSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Navigation
