import React, { useState } from 'react'

import { TEPopupMultiStepForm, TELabel, TEButton } from 'react-tec'

import Code from './../../../components/Code'
import ComponentSection from './../../../components/ComponentSection'
import PropsTable from './../../../components/PropsTable'
import ExampleBlock from './../../../components/ExampleBlock'

const TEPopupMultiStepFormSection = () => {
	const [visible, setVisible] = useState(false)

	return (
		<ComponentSection>
			<h2>TEPopupMultiStepForm</h2>
			<p>
				<Code>TEPopupMultiStepForm</Code> is a combination of <Code>TEPopup</Code> and{' '}
				<Code>TEMultiStepForm</Code>. Besides the props below, reference{' '}
				<Code>TEMultiStepForm</Code> for additional props.
			</p>
			<PropsTable
				propArray={[
					{
						prop: 'visible',
						type: 'bool',
						note: 'Sets whether the popup is visible or hidden.',
					},
				]}
			/>
			<ExampleBlock
				title="Basic"
				code={`<TEPopupMultiStepForm
	visible={visible}
	onClose={() => setVisible(false)}
	onSubmit={() =>
		new Promise((res, rej) => {
			console.log('TEMultiStepForm Submit')
			return res()
		})
	}
	stepData={[
		{
			title: 'Step210',
			component: (
				<div>
					<TELabel htmlFor="test" required disabled>
						Label
					</TELabel>
				</div>
			),
		},
		{
			title: 'Step#3',
			component: (
				<div>
					<TELabel htmlFor="test" required disabled>
						S33
					</TELabel>
				</div>
			),
		},
		{
			title: 'Step444',
			component: (
				<div>
					<TELabel htmlFor="test" required disabled>
						A4A4
					</TELabel>
				</div>
			),
		},
	]}
/>
<TEButton onClick={() => setVisible(true)}>Show TEPopupMultiStepForm</TEButton>`}
			>
				<TEPopupMultiStepForm
					visible={visible}
					onClose={() => setVisible(false)}
					onSubmit={() =>
						new Promise((res, rej) => {
							console.log('TEMultiStepForm Submit')
							setVisible(false)
							return res()
						})
					}
					stepData={[
						{
							title: 'Step210',
							component: (
								<div>
									<TELabel htmlFor="test" required disabled>
										Label
									</TELabel>
								</div>
							),
						},
						{
							title: 'Step#3',
							component: (
								<div>
									<TELabel htmlFor="test" required disabled>
										S33
									</TELabel>
								</div>
							),
						},
						{
							title: 'Step444',
							component: (
								<div>
									<TELabel htmlFor="test" required disabled>
										A4A4
									</TELabel>
								</div>
							),
						},
					]}
				/>
				<TEButton onClick={() => setVisible(true)}>Show TEPopupMultiStepForm</TEButton>
			</ExampleBlock>
		</ComponentSection>
	)
}

export default TEPopupMultiStepFormSection
