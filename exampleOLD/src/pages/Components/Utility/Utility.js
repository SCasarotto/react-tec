import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import TEScrollToTopSection from './TEScrollToTopSection'

const Utility = (props) => {
	useBarTitle('Components - Utility')

	return (
		<Fragment>
			<Helmet
				title="React TEC | Components - Utility"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel title="Utility Component">
					<ul>
						<li>
							<Link to="/components/utility/Helmet">Helmet</Link>
						</li>
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

export default Utility
