import React from 'react';

import { StyledBodyContainer } from './styledComponents';

export interface BodyContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  sidebarWidth?: number;
}
/**
 *
 * `BodyContainer` is really just a sized meant to play well with `SideNavbar`. Below is the exact code used in this site.
 *
 * ```
 *	<BodyContainer>
 *		<TitleBar title={barTitle} />
 *		{children}
 *	</BodyContainer>
 * ```
 *
 */
export const BodyContainer: React.FC<BodyContainerProps> = (props) => {
  const { className = '', ...rest } = props;
  return (
    <StyledBodyContainer
      className={`tec-bodyContainer ${className}`}
      {...rest}
    />
  );
};

//TODO: Not in love with this. It might be a good idea to find a better way while also introducing some default responsiveness
BodyContainer.defaultProps = {
  sidebarWidth: 200,
};
