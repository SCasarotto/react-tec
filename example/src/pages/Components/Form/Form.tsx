import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from '../../../context/TitleBarContext'

import { TEButtonSection } from './TEButtonSection'
import { TECheckboxGroupSection } from './TECheckboxGroupSection'
import { TECheckboxInputSection } from './TECheckboxInputSection'
import { TEDatetimeInputSection } from './TEDatetimeInputSection'
import { TEDatetimeRowSection } from './TEDatetimeRowSection'
import { TEFileInputSection } from './TEFileInputSection'
import { TEFileManagerRowSection } from './TEFileManagerRowSection'
import { TEFileRowSection } from './TEFileRowSection'
import { TEFormSection } from './TEFormSection'
import { TEImageRowSection } from './TEImageRowSection'
import { TEInputRowSection } from './TEInputRowSection'
import { TEInputSection } from './TEInputSection'
import { TELabelSection } from './TELabelSection'
import { TEMultiStepFormSection } from './TEMultiStepFormSection'
import { TERadioButtonGroupSection } from './TERadioButtonGroupSection'
import { TERadioButtonInputSection } from './TERadioButtonInputSection'
import { TERowSection } from './TERowSection'
import { TESearchSelectInputSection } from './TESearchSelectInputSection'
import { TESearchSelectRowSection } from './TESearchSelectRowSection'
import { TESegmentedGroupSection } from './TESegmentedGroupSection'
import { TETextareaRowSection } from './TETextareaRowSection'
import { TETextareaSection } from './TETextareaSection'

export const Form = () => {
	useBarTitle('Components - Form')

	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components - Form</title>
				<meta
					name="description"
					content="React TEC is a component library used by 38th Street Studios LLC"
				/>
			</Helmet>
			<TEPanelWrapper>
				<TEPanel title="Form Components">
					<ul>
						<li>
							<Link to="/components/form/TEButton">TEButton</Link>
						</li>
						<li>
							<Link to="/components/form/TECheckboxGroup">
								TECheckboxGroup
							</Link>
						</li>
						<li>
							<Link to="/components/form/TECheckboxInput">
								TECheckboxInput
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEDatetimeInput">
								TEDatetimeInput
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEDatetimeRow">
								TEDatetimeRow
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEFileInput">
								TEFileInput
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEFileManagerRow">
								TEFileManagerRow
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEFileRow">
								TEFileRow
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEForm">TEForm</Link>
						</li>
						<li>
							<Link to="/components/form/TEImageRow">
								TEImageRow
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEInputRow">
								TEInputRow
							</Link>
						</li>
						<li>
							<Link to="/components/form/TEInput">TEInput</Link>
						</li>
						<li>
							<Link to="/components/form/TELabel">TELabel</Link>
						</li>
						<li>
							<Link to="/components/form/TEMultiStepForm">
								TEMultiStepForm
							</Link>
						</li>
						<li>
							<Link to="/components/form/TERadioButtonGroup">
								TERadioButtonGroup
							</Link>
						</li>
						<li>
							<Link to="/components/form/TERadioButtonInput">
								TERadioButtonInput
							</Link>
						</li>
						<li>
							<Link to="/components/form/TERow">TERow</Link>
						</li>
						<li>
							<Link to="/components/form/TESearchSelectInput">
								TESearchSelectInput
							</Link>
						</li>
						<li>
							<Link to="/components/form/TESearchSelectRow">
								TESearchSelectRow
							</Link>
						</li>
						<li>
							<Link to="/components/form/TESegmentedGroup">
								TESegmentedGroup
							</Link>
						</li>
						<li>
							<Link to="/components/form/TETextareaRow">
								TETextareaRow
							</Link>
						</li>
						<li>
							<Link to="/components/form/TETextarea">
								TETextarea
							</Link>
						</li>
					</ul>
					<Switch>
						<Route
							path="/components/form/TEButton"
							component={TEButtonSection}
						/>
						<Route
							path="/components/form/TECheckboxGroup"
							component={TECheckboxGroupSection}
						/>
						<Route
							path="/components/form/TECheckboxInput"
							component={TECheckboxInputSection}
						/>
						<Route
							path="/components/form/TEDatetimeInput"
							component={TEDatetimeInputSection}
						/>
						<Route
							path="/components/form/TEDatetimeRow"
							component={TEDatetimeRowSection}
						/>
						<Route
							path="/components/form/TEFileInput"
							component={TEFileInputSection}
						/>
						<Route
							path="/components/form/TEFileManagerRow"
							component={TEFileManagerRowSection}
						/>
						<Route
							path="/components/form/TEFileRow"
							component={TEFileRowSection}
						/>
						<Route
							path="/components/form/TEForm"
							component={TEFormSection}
						/>
						<Route
							path="/components/form/TEImageRow"
							component={TEImageRowSection}
						/>
						<Route
							path="/components/form/TEInputRow"
							component={TEInputRowSection}
						/>
						<Route
							path="/components/form/TEInput"
							component={TEInputSection}
						/>
						<Route
							path="/components/form/TELabel"
							component={TELabelSection}
						/>
						<Route
							path="/components/form/TEMultiStepForm"
							component={TEMultiStepFormSection}
						/>
						<Route
							path="/components/form/TERadioButtonGroup"
							component={TERadioButtonGroupSection}
						/>
						<Route
							path="/components/form/TERadioButtonInput"
							component={TERadioButtonInputSection}
						/>
						<Route
							path="/components/form/TERow"
							component={TERowSection}
						/>
						<Route
							path="/components/form/TESearchSelectInput"
							component={TESearchSelectInputSection}
						/>
						<Route
							path="/components/form/TESearchSelectRow"
							component={TESearchSelectRowSection}
						/>
						<Route
							path="/components/form/TESegmentedGroup"
							component={TESegmentedGroupSection}
						/>
						<Route
							path="/components/form/TETextareaRow"
							component={TETextareaRowSection}
						/>
						<Route
							path="/components/form/TETextarea"
							component={TETextareaSection}
						/>
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}
