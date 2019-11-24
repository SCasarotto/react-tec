import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Layout } from './layout/Layout'

import { Home } from './pages/Home'
import { GetStarted } from './pages/GetStarted'
import { Components } from './pages/Components'

export const App = () => {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/get-started' component={GetStarted} />
				<Route path='/components' component={Components} />
			</Switch>
		</Layout>
	)
}
