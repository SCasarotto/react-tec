import React from 'react'

import ComponentTitle from './../../../components/ComponentTitle'
import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'

const TEImageRowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEImageRow'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEImageRow/TEImageRow.js'
			/>
			<p>
				A component to manage uploading, downloading, and deleting images. This component
				contains a <Code>TERow</Code>, <Code>TELabel</Code>, <Code>TEFileInput</Code> and
				some additional components. The editor popup is based on{' '}
				<a
					href='https://github.com/mosch/react-avatar-editor#readme'
					target='_blank'
					rel='noopener noreferrer'
				>
					React Avatar Editor
				</a>
				.
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
						prop: 'labelForKey',
						type: 'string',
						note: 'String used to pair the TELabel to the TEDatetimeInput',
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
						prop: 'imgSrc',
						type: 'object',
						note:
							'Object of data about all the images to be managed. The at the first level of the object, it should container a number of key that act as UIDs of the data ({ uid1: {DATA}, uid2: {DATA}, ...}). This object is mapped to an array inside the component. Note: This was built to work well directly with Firebase real-time database and thus might shift over time to be more generalized. See the following props for what this object should contain.',
					},
					{
						prop: 'imgSrc.uid',
						type: 'string',
						note:
							'A unique key used for iterating over as well as is passed into the onRemove prop. Note: This is mapped into the data during the mapping step. You do not need to pass this in each object.',
					},
					{
						prop: 'imgSrc.uid.src',
						type: 'string',
						note:
							'This should be the URL of where the image is located. This is used for downloading.',
					},
					{
						prop: 'imgSrc.uid.path',
						type: 'string',
						note:
							'This is passed to the onRemove function and can be used to provide information about where the image is stored.',
					},
					{
						prop: 'maxNumber',
						type: 'integer',
						note:
							'Used to limit the number of images this input will allow to be managed. Once the total number of images in imgSrc is === to the maxNumber the TEFileInput is hidden. If set to 0, it will allow any number of images to be managed. Default: 0',
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
							'A function used when uploading an image. This function is passed the fileList from the TEFileInput. This function must return a promise used to reset the TEFileInput. *Required',
					},
					{
						prop: 'onRemove',
						type: 'function',
						note:
							'Function used when the remove button is pressed on a given row. This function is passed both the images "uid" as well as the "path" props. *Required',
					},
					{
						prop: 'avatarEditorData',
						type: 'object',
						note: 'This is an object spread over the AvatarEditor component.',
					},
				]}
			/>
			<iframe
				src='https://codesandbox.io/embed/dlpby?fontsize=12&hidenavigation=1&module=%2Fsrc%2FExample.js'
				title='TEImageRow'
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

export default TEImageRowSection
