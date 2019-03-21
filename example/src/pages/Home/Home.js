import React, { Fragment } from 'react'
import { TEHelmet, TEPanel, TEPanelWrapper, TELink } from 'react-tec'

import { useBarTitle } from './../../context/TitleBarContext'

const Home = (props) => {
	useBarTitle('Welcome')

	return (
		<Fragment>
			<TEHelmet
				title="React TEC | Welcome"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TEPanelWrapper wrapperHeight={80}>
				<TEPanel>
					<h1>React TEC</h1>
					<div>
						<a
							href="https://www.npmjs.com/package/react-tec"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://badge.fury.io/js/react-tec.svg"
								alt="npm version"
								height="18"
							/>
						</a>
					</div>

					<p>
						React TEC is a React component library built and maintained by{' '}
						<a href="https://www.38thstreetstudios.com/">38th Street Studios</a>. These
						docs will provide you with simple get started instructions and detailed
						examples of every component in the library.
					</p>
					<h2>
						<TELink to="/get-started">Get Started</TELink>
					</h2>
					<p>Use these instructions to get up and running with React TEC.</p>
					<h2>
						<TELink to="/components">Components</TELink>
					</h2>
					<p>
						The components documentation is broken down into different components types
						to make it a bit easier to traverse.
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
							<TELink to="/components/form">Form</TELink> - Form inputs of all shapes
							and sizes (Largest of all component types)
						</li>
						<li>
							<TELink to="/components/popup">Popup</TELink> - Simple popup (modal)
							components (network activity, alert, confirm, etc.)
						</li>
						<li>
							<TELink to="/components/utility">Utility</TELink> - Misc components used
							for some functionality but having no visual impact (Will likely be
							replaced by hooks)
						</li>
					</ul>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}

export default Home
