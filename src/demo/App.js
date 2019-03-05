import React, { Fragment, useState, useContext } from 'react'

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
	TEImageRow,
	TECheckboxInput,
	TECheckboxGroup,
	TERadioButtonInput,
	TERadioButtonGroup,
	TESearchSelectRow,
	TESegmentedGroup,
	TETextarea,
	TEForm,
	TEErrorLoadingAlert,
	TEPanelWrapper,
	TEPanel,
	TETitleBar,
	TEAlert,
	TEConfirm,
	TENetworkActivity,
	TEPopup,
	TEPopupForm,
	TEPopupMultiStepForm,
	TESpinner,
	TESubNavbar,
	TEBodyContainer,
	TESideNavbar,
	TEHelmet,
	TEPopupContext,
	TEAppWrapper,
} from './../lib'

const App = (props) => {
	const [networkActivityVisible, setNetworkActivityVisible] = useState(false)
	const [popupVisible, setPopupVisible] = useState(false)
	const [alertVisible, setAlertVisible] = useState(false)
	const [confirmVisible, setConfirmVisible] = useState(false)
	const [popupFormVisible, setPopupFormVisible] = useState(false)
	const [popupMultiFormVisible, setPopupMultiFormVisible] = useState(false)
	const { dispatch } = useContext(TEPopupContext)

	return (
		<Fragment>
			<TEHelmet
				title="React TEC"
				description="React TEC is a component library used by 38th Street Studios LLC"
			/>
			<TESideNavbar
				logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
				links={[
					{ title: 'Link1', to: '/Home' },
					{ title: 'Link2', to: '/Other/Page' },
					{ title: 'Link3', to: '/Other/Other/Page' },
				]}
			/>
			<TEBodyContainer>
				<TETitleBar title="Title Bar!" />
				<TESubNavbar
					links={[
						{ title: 'Link1', to: '/Home' },
						{ title: 'Link2', to: '/Other/Page' },
						{ title: 'Link3', to: '/Other/Other/Page' },
					]}
				/>
				<TEPanelWrapper>
					<TEPanel title="Testing React TEC">
						<h1 style={{ textAlign: 'center' }}>Testing React TEC</h1>
						<TESpinner size="large" />
						<TEButton
							onClick={() => {
								dispatch({
									type: 'show_network_activity',
									payload: 'Loading From Context...',
								})
								setTimeout(() => dispatch({ type: 'hide_network_activity' }), 1000)
							}}
						>
							Show Network Activity From Context
						</TEButton>
						<TEButton
							onClick={() =>
								dispatch({
									type: 'show_alert',
									payload: {
										alertTitle: 'Alert Title From Context',
										alertMessage:
											'This is a message for my alert coming from TEPopupContext',
									},
								})
							}
						>
							Show Alert From Context
						</TEButton>
						<TEButton
							onClick={() =>
								dispatch({
									type: 'show_confirm',
									payload: {
										confirmTitle: 'Confirm Title From Context',
										confirmMessage: 'Confirm Message From Context',
										confirmLeftOnClick: () =>
											dispatch({ type: 'hide_confirm' }),
										confirmLeftTitle: 'Cancel',
										confirmRightOnClick: () =>
											dispatch({ type: 'hide_confirm' }),
										confirmRightTitle: 'Confirm',
									},
								})
							}
						>
							Show Confirm From Context
						</TEButton>

						<TEButton
							onClick={() => {
								setNetworkActivityVisible(true)
								setTimeout(() => setNetworkActivityVisible(false), 1000)
							}}
						>
							Show Network Activity
						</TEButton>
						<TEButton onClick={() => setPopupVisible(true)}>Show Popup</TEButton>
						<TEButton onClick={() => setAlertVisible(true)}>Show Alert</TEButton>
						<TEButton onClick={() => setConfirmVisible(true)}>Show Confirm</TEButton>
						<TEButton onClick={() => setPopupFormVisible(true)}>
							Show Popup Form
						</TEButton>
						<TEButton onClick={() => setPopupMultiFormVisible(true)}>
							Show Popup Multi Form
						</TEButton>
						<TEImageRow
							title="Image Row"
							onUpload={(data) => {
								console.log('onUpload', data)
								return Promise.resolve()
							}}
							onRemove={(data) => console.log('onRemove', data)}
						/>
						<TESearchSelectRow
							labelForKey="TESearchSelectRow"
							title="Power Select Title"
							onChange={({ option }) =>
								console.log('TESearchSelectRow - Single', option)
							}
							options={['Option 1', 'Option 2']}
							value="Option 1"
						/>
						<TESearchSelectRow
							labelForKey="TESearchSelectRow"
							title="Power Select Title"
							onChange={({ options }) =>
								console.log('TESearchSelectRow - Multi', options)
							}
							options={['Option 1', 'Option 2']}
							value={['Option 1']}
							type="multi"
						/>
						<TESearchSelectRow
							labelForKey="TESearchSelectRow"
							title="Power Select Title"
							onChange={({ option }) => console.log('TESearchSelectRow', option)}
							options={['Option 1', 'Option 2']}
							value="Option 1"
							disabled
						/>
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
					</TEPanel>
				</TEPanelWrapper>
				<TEErrorLoadingAlert
					title="Some Error Loading"
					message="Something bad happened while loading"
					onClick={() => console.log('Error Alert On Click')}
					buttonTitle="Press Me"
				/>
				<TEAlert
					title="Title"
					message="message"
					onClick={() => setAlertVisible(false)}
					visible={alertVisible}
				/>
				<TEConfirm
					title="Title"
					message="message"
					leftOnClick={() => setConfirmVisible(false)}
					rightOnClick={() => setConfirmVisible(false)}
					visible={confirmVisible}
				/>
				<TENetworkActivity
					visible={networkActivityVisible}
					message="Ooohhh Pretty Spinner..."
				/>
				<TEPopup visible={popupVisible}> Some Content In Popup</TEPopup>
				<TEPopupForm
					visible={popupFormVisible}
					onClose={() => setPopupFormVisible(false)}
					onSubmit={() => setPopupFormVisible(false)}
				>
					Some Thing In this form
					<TEInputRow
						title="Title"
						labelForKey="inputRow"
						onChange={(e) => console.log(e.target.value)}
					/>
					<TEInputRow
						title="Title"
						labelForKey="inputRow"
						onChange={(e) => console.log(e.target.value)}
					/>
				</TEPopupForm>
				<TEPopupMultiStepForm
					visible={popupMultiFormVisible}
					onClose={() => setPopupMultiFormVisible(false)}
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
			</TEBodyContainer>
		</Fragment>
	)
}

const AppWrapped = (props) => {
	return (
		<TEAppWrapper>
			<App />
		</TEAppWrapper>
	)
}

export default AppWrapped
