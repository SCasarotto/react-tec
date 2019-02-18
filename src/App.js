import React from 'react'

// import styled from 'styled-components'

import {
	TEButton,
	TERow,
	TEFileInput,
	TELabel,
	TEMultiStepForm,
	TEInput,
	TEInputRow,
	TECheckboxInput,
	TECheckboxGroup,
	TERadioButtonInput,
	TERadioButtonGroup,
	TETextarea,
	TEForm,
	TEThemeProvider,
} from './react-tec'

const App = (props) => {
	return (
		<TEThemeProvider
		//theme={SOME_CUSTOM_THEME}
		>
			<div style={{ maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
				<h1 style={{ textAlign: 'center' }}>Testing React TEC</h1>
				<TEForm>
					<TERow>
						<TELabel htmlFor="test" required disabled>
							Label
						</TELabel>
						<TEInput onChange={(e) => console.log(e.target.value)} />
						<TEInputRow
							title="Title"
							labelForKey="inputRow"
							onChange={(e) => console.log(e.target.value)}
						/>
						<TETextarea onChange={(e) => console.log(e.target.value)} />
						<TEButton>TEST</TEButton>
					</TERow>
					<TECheckboxInput
						onChange={(e) => console.log(e.target.value)}
						value="checkBox"
					/>
					<TECheckboxGroup
						title="Title"
						labelForKey="checkboxGroup"
						onChange={(checkedArray) => console.log(checkedArray)}
						buttonArray={['One', '2', 'Four', '3']}
						checkedValues={[]}
					/>
					<TERadioButtonInput
						onChange={(e) => console.log(e.target.value)}
						value="radioButton"
					/>
					<TERadioButtonGroup
						title="Title"
						labelForKey="radioButtonGroup"
						onChange={(e) => console.log(e.target.value)}
						buttonArray={['One', '2', 'Four', '3']}
						checkedValue="One"
					/>
				</TEForm>
				<TEMultiStepForm
					onSubmit={() =>
						new Promise((res, rej) => {
							console.log('TEMultiStepForm Submit')
							return res()
						})
					}
					stepData={[
						{
							title: 'Step 1',
							component: (
								<div>
									<TEFileInput onChange={(files) => console.log(files)} />
								</div>
							),
						},
						{
							title: 'Step210',
							component: (
								<div>
									<TELabel htmlFor="test" required disabled>
										Label
									</TELabel>
									<TELabel htmlFor="test" required disabled>
										Label2
									</TELabel>
								</div>
							),
						},
						{
							title: 'Step#3',
							component: (
								<div>
									<TELabel htmlFor="test" required disabled>
										Label
									</TELabel>
									<TELabel htmlFor="test" required disabled>
										Label
									</TELabel>
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
										Label
									</TELabel>
									<TELabel htmlFor="test" required disabled>
										Label
									</TELabel>
									<TELabel htmlFor="test" required disabled>
										Label
									</TELabel>
									<TELabel htmlFor="test" required disabled>
										A4A4
									</TELabel>
								</div>
							),
						},
					]}
				/>
			</div>
		</TEThemeProvider>
	)
}

export default App
