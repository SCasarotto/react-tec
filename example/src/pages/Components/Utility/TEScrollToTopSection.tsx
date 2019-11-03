import React from 'react'

import { ComponentTitle } from '../../../components/ComponentTitle'
import { Code } from '../../../components/Code'
import { ComponentSection } from '../../../components/ComponentSection'

export const TEScrollToTopSection = () => {
	return (
		<ComponentSection>
			<ComponentTitle
				title="TEScrollToTop"
				link="https://github.com/SCasarotto/react-tec/blob/master/src/Utility/TEScrollToTop/TEScrollToTop.js"
			/>
			<p>
				<Code>TEScrollToTop</Code> is really just a simple hook. Look at
				the source code. When the react router location changes the page
				scrolls back to the top. This is important because if the user
				has scrolled down and then navigates to a new page, they could
				be placed in the middle of the new page which is not expected.
				This should simply be converted to a hook in the long run.
			</p>
		</ComponentSection>
	)
}
