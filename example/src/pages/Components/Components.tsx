import React, { Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TESubNavbar, TEPanelWrapper, TEPanel } from 'react-tec'

import { useBarTitle } from '../../context/TitleBarContext'

import { Globals } from './Globals'
import { Layout } from './Layout'
import { Navigation } from './Navigation'
import { Form } from './Form'
import { Popup } from './Popup'
import { Utility } from './Utility'

const Base = () => {
	useBarTitle('Components')
	return (
		<TEPanelWrapper>
			<TEPanel>
				<h1>React TEC Components</h1>
				<p>
					The components documentation is broken down into different
					components types to make it a bit easier to traverse.
				</p>
				<ul>
					<li>
						<Link to="/components/globals">Globals</Link> - App
						wrappers of some global contexts (navigation, popups,
						overlays, etc.)
					</li>
					<li>
						<Link to="/components/layout">Layout</Link> - Page
						layout components (page wrapper, side bar, title bar,
						etc.)
					</li>
					<li>
						<Link to="/components/navigation">Navigation</Link> -
						Navigational components (links, navbar, sidenav, etc.)
					</li>
					<li>
						<Link to="/components/form">Form</Link> - Form inputs of
						all shapes and sizes (Largest of all component types)
					</li>
					<li>
						<Link to="/components/popup">Popup</Link> - Simple popup
						(modal) components (network activity, alert, confirm,
						etc.)
					</li>
					<li>
						<Link to="/components/utility">Utility</Link> - Misc
						components used for some functionality but having no
						visual impact (Will likely be replaced by hooks)
					</li>
				</ul>
			</TEPanel>
		</TEPanelWrapper>
	)
}

export const Components = () => {
	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components</title>
				<meta
					name="description"
					content="React TEC is a component library used by 38th Street Studios LLC"
				/>
			</Helmet>
			<TESubNavbar
				links={[
					{ children: 'Globals', to: '/components/globals' },
					{ children: 'Layout', to: '/components/layout' },
					{ children: 'Navigation', to: '/components/navigation' },
					{ children: 'Form', to: '/components/form' },
					{ children: 'Popup', to: '/components/popup' },
					{ children: 'Utility', to: '/components/utility' },
				]}
			/>
			<Switch>
				<Route path="/components" exact component={Base} />
				<Route path="/components/globals" component={Globals} />
				<Route path="/components/layout" component={Layout} />
				<Route path="/components/navigation" component={Navigation} />
				<Route path="/components/form" component={Form} />
				<Route path="/components/popup" component={Popup} />
				<Route path="/components/utility" component={Utility} />
			</Switch>
		</Fragment>
	)
}
