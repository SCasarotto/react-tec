import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from '../../../context'

import { useScrollTopSection } from './useScrollTopSection'

export const Utility = () => {
	useBarTitle('Components - Utility')

	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components - Utility</title>
			</Helmet>
			<TEPanelWrapper>
				<TEPanel title='Utility Component'>
					<ul>
						<li>
							<Link to='/components/utility/useScrollTop'>useScrollTop</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path='/components/utility/useScrollTop'
							component={useScrollTopSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}
