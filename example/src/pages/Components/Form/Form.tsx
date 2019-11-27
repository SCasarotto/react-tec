import React, { Fragment } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TEPanel, TEPanelWrapper } from 'react-tec'

import { useBarTitle } from '../../../context'

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
import { TEMenuButtonSection } from './TEMenuButtonSection'
import { TEMultiStepFormSection } from './TEMultiStepFormSection'
import { TEPhoneNumberInputSection } from './TEPhoneNumberInputSection'
import { TEPhoneNumberRowSection } from './TEPhoneNumberRowSection'
import { TERadioButtonGroupSection } from './TERadioButtonGroupSection'
import { TERadioButtonInputSection } from './TERadioButtonInputSection'
import { TERowSection } from './TERowSection'
import { TESelectSection } from './TESelectSection'
import { TESelectRowSection } from './TESelectRowSection'
import { TESearchSelectInputSection } from './TESearchSelectInputSection'
import { TESearchSelectRowSection } from './TESearchSelectRowSection'
import { TESegmentedGroupSection } from './TESegmentedGroupSection'
import { TETextareaRowSection } from './TETextareaRowSection'
import { TETextareaSection } from './TETextareaSection'

const sections = [
	{ name: 'TEButton', path: '/components/form/TEButton', component: TEButtonSection },
	{
		name: 'TECheckboxGroup',
		path: '/components/form/TECheckboxGroup',
		component: TECheckboxGroupSection,
	},
	{
		name: 'TECheckboxInput',
		path: '/components/form/TECheckboxInput',
		component: TECheckboxInputSection,
	},
	{
		name: 'TEDatetimeInput',
		path: '/components/form/TEDatetimeInput',
		component: TEDatetimeInputSection,
	},
	{
		name: 'TEDatetimeRow',
		path: '/components/form/TEDatetimeRow',
		component: TEDatetimeRowSection,
	},
	{ name: 'TEFileInput', path: '/components/form/TEFileInput', component: TEFileInputSection },
	{
		name: 'TEFileManagerRow',
		path: '/components/form/TEFileManagerRow',
		component: TEFileManagerRowSection,
	},
	{ name: 'TEFileRow', path: '/components/form/TEFileRow', component: TEFileRowSection },
	{ name: 'TEForm', path: '/components/form/TEForm', component: TEFormSection },
	{ name: 'TEImageRow', path: '/components/form/TEImageRow', component: TEImageRowSection },
	{ name: 'TEInputRow', path: '/components/form/TEInputRow', component: TEInputRowSection },
	{ name: 'TEInput', path: '/components/form/TEInput', component: TEInputSection },
	{ name: 'TELabel', path: '/components/form/TELabel', component: TELabelSection },
	{
		name: 'TEMenuButton',
		path: '/components/form/TEMenuButton',
		component: TEMenuButtonSection,
	},
	{
		name: 'TEMultiStepForm',
		path: '/components/form/TEMultiStepForm',
		component: TEMultiStepFormSection,
	},
	{
		name: 'TEPhoneNumberInput',
		path: '/components/form/TEPhoneNumberInput',
		component: TEPhoneNumberInputSection,
	},
	{
		name: 'TEPhoneNumberRow',
		path: '/components/form/TEPhoneNumberRow',
		component: TEPhoneNumberRowSection,
	},
	{
		name: 'TERadioButtonGroup',
		path: '/components/form/TERadioButtonGroup',
		component: TERadioButtonGroupSection,
	},
	{
		name: 'TERadioButtonInput',
		path: '/components/form/TERadioButtonInput',
		component: TERadioButtonInputSection,
	},
	{ name: 'TERow', path: '/components/form/TERow', component: TERowSection },
	{
		name: 'TESearchSelectInput',
		path: '/components/form/TESearchSelectInput',
		component: TESearchSelectInputSection,
	},
	{
		name: 'TESearchSelectRow',
		path: '/components/form/TESearchSelectRow',
		component: TESearchSelectRowSection,
	},
	{
		name: 'TESegmentedGroup',
		path: '/components/form/TESegmentedGroup',
		component: TESegmentedGroupSection,
	},
	{
		name: 'TESelect',
		path: '/components/form/TESelect',
		component: TESelectSection,
	},
	{
		name: 'TESelectRow',
		path: '/components/form/TESelectRow',
		component: TESelectRowSection,
	},
	{
		name: 'TETextareaRow',
		path: '/components/form/TETextareaRow',
		component: TETextareaRowSection,
	},
	{ name: 'TETextarea', path: '/components/form/TETextarea', component: TETextareaSection },
]

export const Form = () => {
	useBarTitle('Components - Form')

	return (
		<Fragment>
			<Helmet>
				<title>React TEC | Components - Form</title>
				<meta
					name='description'
					content='React TEC is a component library used by 38th Street Studios LLC'
				/>
			</Helmet>
			<TEPanelWrapper>
				<TEPanel title='Form Components'>
					<ul>
						{sections.map((componentData) => (
							<li key={componentData.path}>
								<Link to={componentData.path}>{componentData.name}</Link>
							</li>
						))}
					</ul>
					<Switch>
						<Route path='/components/form/TEButton' component={TEButtonSection} />
						<Route
							path='/components/form/TECheckboxGroup'
							component={TECheckboxGroupSection}
						/>
						<Route
							path='/components/form/TECheckboxInput'
							component={TECheckboxInputSection}
						/>
						<Route
							path='/components/form/TEDatetimeInput'
							component={TEDatetimeInputSection}
						/>
						<Route
							path='/components/form/TEDatetimeRow'
							component={TEDatetimeRowSection}
						/>
						<Route path='/components/form/TEFileInput' component={TEFileInputSection} />
						<Route
							path='/components/form/TEFileManagerRow'
							component={TEFileManagerRowSection}
						/>
						<Route path='/components/form/TEFileRow' component={TEFileRowSection} />
						<Route path='/components/form/TEForm' component={TEFormSection} />
						<Route path='/components/form/TEImageRow' component={TEImageRowSection} />
						<Route path='/components/form/TEInputRow' component={TEInputRowSection} />
						<Route path='/components/form/TEInput' component={TEInputSection} />
						<Route path='/components/form/TELabel' component={TELabelSection} />
						<Route
							path='/components/form/TEMenuButton'
							component={TEMenuButtonSection}
						/>
						<Route
							path='/components/form/TEMultiStepForm'
							component={TEMultiStepFormSection}
						/>
						<Route
							path='/components/form/TEPhoneNumberInput'
							component={TEPhoneNumberInputSection}
						/>
						<Route
							path='/components/form/TEPhoneNumberRow'
							component={TEPhoneNumberRowSection}
						/>
						<Route
							path='/components/form/TERadioButtonGroup'
							component={TERadioButtonGroupSection}
						/>
						<Route
							path='/components/form/TERadioButtonInput'
							component={TERadioButtonInputSection}
						/>
						<Route path='/components/form/TERow' component={TERowSection} />
						<Route path='/components/form/TESelect' component={TESelectSection} />
						<Route path='/components/form/TESelectRow' component={TESelectRowSection} />
						<Route
							path='/components/form/TESearchSelectInput'
							component={TESearchSelectInputSection}
						/>
						<Route
							path='/components/form/TESearchSelectRow'
							component={TESearchSelectRowSection}
						/>
						<Route
							path='/components/form/TESegmentedGroup'
							component={TESegmentedGroupSection}
						/>
						<Route
							path='/components/form/TETextareaRow'
							component={TETextareaRowSection}
						/>
						<Route path='/components/form/TETextarea' component={TETextareaSection} />
					</Switch>
				</TEPanel>
			</TEPanelWrapper>
		</Fragment>
	)
}
