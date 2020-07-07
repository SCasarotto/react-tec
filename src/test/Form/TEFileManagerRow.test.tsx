import React from 'react'
import ReactDOM from 'react-dom'
import { TEFileManagerRow } from '../..'

describe('TEFileManagerRow', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<TEFileManagerRow
				labelForKey='testTEFileManagerRow'
				fileSrcArray={[]}
				onRemove={async () => {}}
				onUpload={async () => {}}
			/>,
			div,
		)
		ReactDOM.unmountComponentAtNode(div)
	})
})
