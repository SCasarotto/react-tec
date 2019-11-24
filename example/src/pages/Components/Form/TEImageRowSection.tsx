import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'
import { PropsTable } from '../../../components/PropsTable'

export const TEImageRowSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title='TEImageRow'
				link='https://github.com/SCasarotto/react-tec/blob/master/src/Form/TEImageRow/index.tsx'
			/>
			<p>
				A component to manage uploading, downloading, and deleting images. This component
				contains a <Code>TERow</Code>, <Code>TELabel</Code>, <Code>TEFileInput</Code> and
				some additional components. The editor popup is based on{' '}
				<a
					href='https://github.com/mosch/react-avatar-editor#readme'
					target='_blank'
					rel='noopener noreferrer'>
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
						prop: 'rowSize',
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
						prop: 'imgSrcArray',
						type: 'object',
						note:
							'Arrat of data about all the images to be managed. Note: This was built to work well directly with Firebase real-time database and thus might shift over time to be more generalized. See the following props for what this object should contain.',
					},
					{
						prop: 'imgSrc.uid',
						type: 'string',
						note:
							'A unique key used for iterating over as well as is passed into the onRemove prop.',
					},
					{
						prop: 'imgSrc.src',
						type: 'string',
						note:
							'This should be the URL of where the image is located. This is used for downloading.',
					},
					{
						prop: 'imgSrc.path',
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
				src='https://codesandbox.io/embed/react-tec-examples-di382?fontsize=14&initialpath=%2FTEImageRowExample&module=%2Fsrc%2FForm%2FTEImageRowExample.tsx'
				style={{
					width: '100%',
					height: 500,
					border: 'none',
				}}
				title='TEImageRow'
				allow='geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb'
				sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'
			/>
		</ComponentSection>
	)
}
