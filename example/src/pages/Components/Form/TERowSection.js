import React from 'react'

import { TERow, TEInput } from 'react-tec'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TERowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TERow'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TERow/TERow.js'
			/>
			<p>
				Form row component. <Code>TERow</Code> provides a simple way to layout form rows.
				Easily enabling multiple inputs or buttons on the same row.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'size',
						type: 'string',
						note:
							'Defines the width of the row. Options: ["full", "half", "two-third", "third". "forth", "condensed"]',
					},
					{
						prop: 'last',
						type: 'boolean',
						note:
							'Removes right padding and adds it on the left for the last TERow in the row.',
					},
				]}
			/>
			<ExampleBlock
				title='Basic (Full)'
				code={`<TERow>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>`}
			>
				<TERow>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
			</ExampleBlock>
			<ExampleBlock
				title='Half'
				code={`<TERow size='half'>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>
<TERow size='half' last>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>`}
			>
				<TERow size='half'>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
				<TERow size='half' last>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
			</ExampleBlock>
			<ExampleBlock
				title='Third'
				code={`<TERow size='two-third'>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>
<TERow size='third' last>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>`}
			>
				<TERow size='two-third'>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
				<TERow size='third' last>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
			</ExampleBlock>
			<ExampleBlock
				title='Forth'
				code={`<TERow size='half'>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>
<TERow size='forth'>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>
<TERow size='forth' last>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>`}
			>
				<TERow size='half'>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
				<TERow size='forth'>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
				<TERow size='forth' last>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
			</ExampleBlock>
			<ExampleBlock
				title='Condensed (width: auto)'
				code={`<TERow size="condensed">
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>
<TERow size="condensed">
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>
<TERow size="condensed" last>
	<TEInput onChange={(e) => console.log(e.target.value)} />
</TERow>`}
			>
				<TERow size='condensed'>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
				<TERow size='condensed'>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
				<TERow size='condensed' last>
					<TEInput onChange={(e) => console.log(e.target.value)} />
				</TERow>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TERowSection
