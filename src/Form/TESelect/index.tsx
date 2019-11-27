import React, { useContext } from 'react'
import { Props } from 'react-select'
import Color from 'color'
import { ThemeContext } from 'styled-components'

import { SelectInput } from './styledComponents'

export interface TESelectProps extends Props {
	className?: string
	disabled?: boolean
}
export const TESelect: React.FC<TESelectProps> = React.forwardRef((props, ref) => {
	const { className = '', disabled, classNamePrefix = 'TESelect', ...rest } = props
	const TETheme = useContext(ThemeContext)

	return (
		<SelectInput
			isDisabled={disabled}
			className={`TESelect ${className}`}
			classNamePrefix={classNamePrefix}
			theme={(theme: { [key: string]: any }) => ({
				...theme,
				borderRadius: 5,
				colors: {
					...theme.colors,
					primary: TETheme.primary,
					primary75: Color(TETheme.primary)
						.fade(0.25)
						.string(),
					primary50: Color(TETheme.primary)
						.fade(0.5)
						.string(),
					primary25: Color(TETheme.primary)
						.fade(0.75)
						.string(),
					// danger: "#DE350B",
					// dangerLight: "#FFBDAD",
					neutral0: 'hsl(0, 0%, 100%)',
					neutral5: 'hsl(0, 0%, 95%)',
					neutral10: 'hsl(0, 0%, 90%)',
					neutral20: TETheme.lightGray, //"hsl(0, 0%, 80%)",
					neutral30: 'hsl(0, 0%, 70%)',
					neutral40: 'hsl(0, 0%, 60%)',
					neutral50: 'hsl(0, 0%, 50%)',
					neutral60: 'hsl(0, 0%, 40%)',
					neutral70: 'hsl(0, 0%, 30%)',
					neutral80: 'hsl(0, 0%, 20%)',
					neutral90: 'hsl(0, 0%, 10%)',
				},
				// spacing: {
				//   baseUnit: 4,
				//   controlHeight: 40,
				//   menuGutter: 8
				// }
			})}
			ref={ref}
			{...rest}
		/>
	)
})
