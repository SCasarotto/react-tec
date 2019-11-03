import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEFileManagerRowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEFileManagerRow"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEFileManagerRow/TEFileManagerRow.js"
			/>
			<p>
				A component to manage uploading, downloading, and deleting
				files. This component contains a <Code>TERow</Code>,{' '}
				<Code>TELabel</Code>, <Code>TEFileInput</Code> and some
				additional components.
			</p>
			<p>
				Note: This component is a bit complex and may shift in API over
				time.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'title',
						type: 'string',
						note: 'Title passed to the inner TELabel',
					},
					{
						prop: 'labelForKey',
						type: 'string',
						note:
							'String used to pair the TELabel to the TEFileInput',
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
						prop: 'required',
						type: 'boolean',
						note:
							'Passed to the required HTML attribute as well as used to add an asterisk to the end of the title.',
					},
					{
						prop: 'disabled',
						type: 'boolean',
						note:
							'Passed to the required HTML disabled as well as used to adjust styles.',
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
						note:
							'Used in displaying the full file name in each row.',
					},
					{
						prop: 'fileSrc.path',
						type: 'string',
						note:
							'This is passed to the onRemove function and can be used to provide information about where the file is stored.',
					},
					{
						prop: 'maxNumber',
						type: 'integer',
						note:
							'Used to limit the number of files this input will allow to be managed. Once the total number of files in fileSrc is === to the maxNumber the TEFileInput is hidden. If set to 0, it will allow any number of files to be managed. Default: 0',
					},
					{
						prop: 'accept',
						type: 'string',
						note: 'Passed to the TEFileInput.',
					},
					{
						prop: 'pattern',
						type: 'RegExp',
						note: 'Passed to the TEFileInput.',
					},
					{
						prop: 'onUpload',
						type: 'function',
						note:
							'A function used when uploading a file. This function is passed the fileList from the TEFileInput. This function must return a promise used to reset the TEFileInput. *Required',
					},
					{
						prop: 'onRemove',
						type: 'function',
						note:
							'Function used when the remove button is pressed on a given row. This function is passed both the files "uid" as well as the "path" props. *Required',
					},
				]}
			/>
			<iframe
				src="https://codesandbox.io/embed/bzt87?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js"
				title="TEFileManagerRow"
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			/>
		</ComponentSection>
	)
}
