import React from 'react'

import ComponentTitle from '../../../components/ComponentTitle'
import Code from '../../../components/Code'
import ComponentSection from '../../../components/ComponentSection'
import PropsTable from '../../../components/PropsTable'

const TEFileManagerListSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEFileManagerList'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEFileManagerList/TEFileManagerList.js'
			/>
			<p>
				A component to manage uploading, downloading, and deleting files. This component
				contains a <Code>TERow</Code>, <Code>TELabel</Code>, <Code>TEFileInput</Code> and
				some additional components.
			</p>
			<p>Note: This component is a bit complex and may shift in API over time.</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Title passed to the inner TELabel',
					},
					{
						prop: 'size',
						type: 'string',
						note: 'Passed to the wrapping TERow',
					},
					{
						prop: 'last',
						type: 'boolean',
						note: 'Passed to the wrapping TERow',
					},
					{
						prop: 'fileSrcArray',
						type: 'array',
						note:
							'Arrat of data about all the files to be managed. Note: This was built to work well directly with Firebase real-time database and thus might shift over time to be more generalized. See the following props for what this object should contain.',
					},
					{
						prop: 'fileSrc.uid',
						type: 'string',
						note:
							'A unique key used for iterating over as well as is passed into the onRemove prop. Note: This is mapped into the data during the mapping step. You do not need to pass this in each object.',
					},
					{
						prop: 'fileSrc.src',
						type: 'string',
						note:
							'This should be the URL of where the image is located. This is used for downloading.',
					},
					{
						prop: 'fileSrc.filename',
						type: 'string',
						note:
							'Used in as the name of each file in each row and is used when downloading the file.',
					},
					{
						prop: 'fileSrc.fileEnding',
						type: 'string',
						note: 'Used in displaying the full file name in each row.',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/bzt87?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TEFileManagerList'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}

export default TEFileManagerListSection
