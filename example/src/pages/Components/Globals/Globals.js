import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { TEHelmet, TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from './../../../context/TitleBarContext'

import TEAppWrapperSection from './TEAppWrapperSection'
import TEPopupContextSection from './TEPopupContextSection'
import TEThemeProviderSection from './TEThemeProviderSection'

const Globals = (props) => {
	useBarTitle('Components - Globals')

	return (
		<Fragment>
			<TEHelmet
				title='React TEC | Components - Globals'
				description='React TEC is a component library used by 38th Street Studios LLC'
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel title='Global Components'>
					<ul>
						<li>
							<Link to='/components/globals/TEAppWrapper'>TEAppWrapper</Link>
						</li>
						<li>
							<Link to='/components/globals/TEPopupContext'>TEPopupContext</Link>
						</li>
						<li>
							<Link to='/components/globals/TEThemeProvider'>TEThemeProvider</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path='/components/globals/TEAppWrapper'
							component={TEAppWrapperSection}
						/>
						<Route
							path='/components/globals/TEPopupContext'
							component={TEPopupContextSection}
						/>
						<Route
							path='/components/globals/TEThemeProvider'
							component={TEThemeProviderSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Globals
