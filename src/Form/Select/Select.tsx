import React, { useContext, ReactElement } from 'react';

import Color from 'color';
import RSelect, {
  Props as SelectProps,
  OptionTypeBase,
  GroupTypeBase,
} from 'react-select';
import { ThemeContext } from 'styled-components';

const UnwrappedSelect = <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: SelectProps<OptionType, IsMulti, GroupType>,
  ref: React.Ref<RSelect<OptionType, IsMulti, GroupType>>,
) => {
  const {
    className = '',
    disabled,
    classNamePrefix = 'Select',
    ...rest
  } = props;
  const Theme = useContext(ThemeContext);

  return (
    <RSelect<OptionType, IsMulti, GroupType>
      isDisabled={disabled}
      className={`tec-select ${className}`}
      classNamePrefix={classNamePrefix}
      theme={(theme) => ({
        ...theme,
        borderRadius: 5,
        colors: {
          ...theme.colors,
          primary: Theme.primary,
          primary75: Color(Theme.primary).fade(0.25).string(),
          primary50: Color(Theme.primary).fade(0.5).string(),
          primary25: Color(Theme.primary).fade(0.75).string(),
          // danger: "#DE350B",
          // dangerLight: "#FFBDAD",
          neutral0: 'hsl(0, 0%, 100%)',
          neutral5: 'hsl(0, 0%, 95%)',
          neutral10: 'hsl(0, 0%, 90%)',
          neutral20: Theme.lightGray, //"hsl(0, 0%, 80%)",
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
  );
};

// This is here because of the need to useForward Ref with a generic prop type
// See: https://stackoverflow.com/a/58473012
/**
 *
 * Select is simply a styled [React Select](https://github.com/JedWatson/react-select) Component. A few props have been adjusted or defaulted.
 *
 */
export const Select = React.forwardRef(UnwrappedSelect) as <
  OptionType extends OptionTypeBase,
  IsMulti extends boolean = false,
  GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
  props: SelectProps<OptionType, IsMulti, GroupType> & {
    ref?: React.Ref<RSelect<OptionType, IsMulti, GroupType>>;
  },
) => ReactElement;
