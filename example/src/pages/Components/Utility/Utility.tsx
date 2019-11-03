import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from '../../../context/TitleBarContext'

import { TEScrollToTopSection } from './TEScrollToTopSection'

export const Utility = () => {
	useBarTitle('Components - Utility')

	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components - Utility</title>
				<meta
					name="description"
					content="React TEC is a component library used by 38th Street Studios LLC"
				/>
			</Helmet>
			<TEPanelWrapper>
				<TEPanel title="Utility Component">
					<ul>
						<li>
							<Link to="/components/utility/TEScrollToTop">
								TEScrollToTop
							</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path="/components/utility/TEScrollToTop"
							component={TEScrollToTopSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}
