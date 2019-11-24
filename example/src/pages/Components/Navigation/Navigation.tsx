import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from '../../../context'

import { TEPrivateRouteSection } from './TEPrivateRouteSection'
import { TESideNavbarSection } from './TESideNavbarSection'
import { TESideNavLinkSection } from './TESideNavLinkSection'
import { TESubNavbarSection } from './TESubNavbarSection'

export const Navigation = () => {
	useBarTitle('Components - Navigation')

	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components - Navigation</title>
				<meta
					name='description'
					content='React TEC is a component library used by 38th Street Studios LLC'
				/>
			</Helmet>
			<TEPanelWrapper>
				<TEPanel title='Navigation Components'>
					<ul>
						<li>
							<Link to='/components/navigation/TEPrivateRoute'>TEPrivateRoute</Link>
						</li>
						<li>
							<Link to='/components/navigation/TESideNavbar'>TESideNavbar</Link>
						</li>
						<li>
							<Link to='/components/navigation/TESideNavLink'>TESideNavLink</Link>
						</li>
						<li>
							<Link to='/components/navigation/TESubNavbar'>TESubNavbar</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path='/components/navigation/TEPrivateRoute'
							component={TEPrivateRouteSection}
						/>
						<Route
							path='/components/navigation/TESideNavbar'
							component={TESideNavbarSection}
						/>
						<Route
							path='/components/navigation/TESideNavLink'
							component={TESideNavLinkSection}
						/>
						<Route
							path='/components/navigation/TESubNavbar'
							component={TESubNavbarSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}
