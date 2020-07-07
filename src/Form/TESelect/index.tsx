import React, { useContext, PropsWithChildren } from 'react'
import { Props, OptionTypeBase, Theme } from 'react-select'
import Color from 'color'
import Select from 'react-select'
import { ThemeContext } from 'styled-components'

interface ExtendedProps<T> extends Props<T> {
	className?: string
	disabled?: boolean
}
export type TESelectProps<T> = PropsWithChildren<ExtendedProps<T>>
// TODO: Handle forwardRef and review typing
export const TESelect = <T extends OptionTypeBase>(props: PropsWithChildren<TESelectProps<T>>) => {
	const { className = '', disabled, classNamePrefix = 'TESelect', ...rest } = props
	const TETheme = useContext(ThemeContext)

	return (
		<Select<T>
			isDisabled={disabled}
			className={`TESelect ${className}`}
			classNamePrefix={classNamePrefix}
			theme={(theme: Theme) => ({
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
			{...rest}
		/>
	)
}
