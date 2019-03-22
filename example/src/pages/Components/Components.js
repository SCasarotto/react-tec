import React, { Fragment } from 'react'
import {
	TEHelmet,
	TESubNavbar,
	TEPanelWrapper,
	TEPanel,
	TELink,
	TESwitch,
	TERoute,
} from 'react-tec'

import { useBarTitle } from './../../context/TitleBarContext'

import Globals from './Globals'
import Layout from './Layout'
import Navigation from './Navigation'
import Form from './Form'
import Popup from './Popup'
import Utility from './Utility'

const Base = () => {
	useBarTitle('Components')
	return (
		<TEPanelWrapper wrapperHeight={80}>
			<TEPanel>
				<h1>React TEC Components</h1>
				<p>
					The components documentation is broken down into different components types to
					make it a bit easier to traverse.
				</p>
				<ul>
					<li>
						<TELink to="/components/globals">Globals</TELink> - App wrappers of some
						global contexts (navigation, popups, overlays, etc.)
					</li>
					<li>
						<TELink to="/components/layout">Layout</TELink> - Page layout components
						(page wrapper, side bar, title bar, etc.)
					</li>
					<li>
						<TELink to="/components/navigation">Navigation</TELink> - Navigational
						components (links, navbar, sidenav, etc.)
					</li>
					<li>
						<TELink to="/components/form">Form</TELink> - Form inputs of all shapes and
						sizes (Largest of all component types)
					</li>
					<li>
						<TELink to="/components/popup">Popup</TELink> - Simple popup (modal)
						components (network activity, alert, confirm, etc.)
					</li>
					<li>
						<TELink to="/components/utility">Utility</TELink> - Misc components used for
						some functionality but having no visual impact (Will likely be replaced by
						hooks)
					</li>
				</ul>
			</TEPanel>
		</TEPanelWrapper>
	)
}

const Components = (props) => {
	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Components"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
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
			<TESwitch>
				<TERoute path="/components" exact component={Base} />
				<TERoute path="/components/globals" component={Globals} />
				<TERoute path="/components/layout" component={Layout} />
				<TERoute path="/components/navigation" component={Navigation} />
				<TERoute path="/components/form" component={Form} />
				<TERoute path="/components/popup" component={Popup} />
				<TERoute path="/components/utility" component={Utility} />
			</TESwitch>
		</Fragment>
	)
}

export default Components
