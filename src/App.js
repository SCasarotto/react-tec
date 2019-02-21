import React from 'react'

// import styled from 'styled-components'

import {
	TEButton,
	TERow,
	TEFileInput,
	TEFileRow,
	TELabel,
	TEMultiStepForm,
	TEInput,
	TEInputRow,
	TEFileManagerRow,
	TECheckboxInput,
	TECheckboxGroup,
	TERadioButtonInput,
	TERadioButtonGroup,
	TESegmentedGroup,
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
									<TEFileManagerRow
										fileSrc={{
											id1: {
												src: 'src',
												uid: 'uid1',
												filename: 'SomeFile1',
												fileEnding: 'wtf',
												path: 'path/to/file/thing',
											},
											id2: {
												src: 'src',
												uid: 'uid2',
												filename: 'SomeFile2',
												fileEnding: 'wtf',
												path: 'path/to/file/thing',
											},
											id3: {
												src: 'src',
												uid: 'uid3',
												filename: 'SomeFile3',
												fileEnding: 'wtf',
												path: 'path/to/file/thing',
											},
										}}
										onUpload={() => console.log('onUpload')}
										onRemove={() => console.log('onRemove')}
									/>
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
				<TEFileRow onChange={() => console.log('TEFileRow On Change')} />
				<TESegmentedGroup
					labelForKey="segmentedKey"
					title="Segmented Title"
					onChange={(e) => console.log(e.target.value)}
					buttonArray={['Option 1', 'Some String', 'Mark Sucks', 'Hello!']}
					checkedValue="Mark Sucks"
					inline
					disabled
					required
				/>
			</div>
		</TEThemeProvider>
	)
}

export default App
