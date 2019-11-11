import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const useScrollTopSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="useScrollTop"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Utility/TEScrollToTop/TEScrollToTop.js"
			/>
			<p>
				<Code>useScrollTopSection</Code> is just a simple hook. Look at
				the source code. When the react router location changes the page
				scrolls back to the top. This is important because if the user
				has scrolled down and then navigates to a new page, they could
				be placed in the middle of the new page which is not expected.
			</p>
		</ComponentSection>
	)
}
