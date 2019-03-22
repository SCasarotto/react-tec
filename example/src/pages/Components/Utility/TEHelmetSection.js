import React, { useState } from 'react'

import { TEInputRow, TEHelmet } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEHelmetSection = () => {
	const [title, setTitle] = useState('')

	return (
		<ComponentSection>
			<h2>TEHelmet</h2>
			<p>
				<Code>TEHelmet</Code> is just a wrapper around a{' '}
				<a
					href="https://github.com/nfl/react-helmet"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Helmet
				</a>{' '}
				Component. This is a commonly used component.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note:
							'Sets the page title. This is the string in your tab or at the top of your browser window.',
					},
					{
						prop: 'description',
						type: 'string',
						note:
							'Sets the page meta description which is scrapped by search engines to generate search descriptions.',
					},
				]}
			/>
			<ExampleBlock
				title="Basic"
				code={`{title && <TEHelmet title={title} />}
<TEInputRow
	title="Type to change the page title"
	labelForKey="setPageTitle"
	value={title}
	onChange={(e) => setTitle(e.target.value)}
/>`}
			>
				{title && <TEHelmet title={title} />}
				<TEInputRow
					title="Type to change the page title"
					labelForKey="setPageTitle"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEHelmetSection
