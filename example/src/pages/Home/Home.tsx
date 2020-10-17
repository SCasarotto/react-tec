import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from '../../context'
import { LinkWrapper, Icon } from './styledComponents'

export const Home = () => {
	useBarTitle('Welcome')

	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components - Welcome</title>
			</Helmet>
			<TEPanelWrapper>
				<TEPanel>
					<h1>React TEC</h1>
					<LinkWrapper>
						<a
							href='https://www.npmjs.com/package/react-tec'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src='https://img.shields.io/npm/v/react-tec.svg'
								alt='npm version'
								height='18'
							/>
						</a>
						<a
							href='https://github.com/SCasarotto/react-tec'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Icon />
						</a>
					</LinkWrapper>
					<p>
						These docs will provide you with simple get started instructions and
						detailed examples of every component in the library.
					</p>
					<h2>
						<Link to='/get-started'>Get Started</Link>
					</h2>
					<p>Use these instructions to get up and running with React TEC.</p>
					<h2>
						<Link to='/components'>Components</Link>
					</h2>
					<p>
						The components documentation is broken down into different components types
						to make it a bit easier to traverse.
					</p>
					<ul>
						<li>
							<Link to='/components/globals'>Globals</Link> - App wrappers of some
							global contexts (navigation, popups, overlays, etc.)
						</li>
						<li>
							<Link to='/components/layout'>Layout</Link> - Page layout components
							(page wrapper, side bar, title bar, etc.)
						</li>
						<li>
							<Link to='/components/navigation'>Navigation</Link> - Navigational
							components (links, navbar, sidenav, etc.)
						</li>
						<li>
							<Link to='/components/form'>Form</Link> - Form inputs of all shapes and
							sizes (Largest of all component types)
						</li>
						<li>
							<Link to='/components/popup'>Popup</Link> - Simple popup (modal)
							components (network activity, alert, confirm, etc.)
						</li>
						<li>
							<Link to='/components/utility'>Utility</Link> - Misc components used for
							some functionality but having no visual impact (Will likely be replaced
							by hooks)
						</li>
					</ul>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}
