import React from 'react';

import { Container } from './styledComponents';

export interface PanelWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}
/**
 *
 * PanelWrapper simple layout component meant to be used as the parent of `Panel`. Below is the code that wraps this page.
 *
 * ```
 * <PanelWrapper>
 *		{ ... }
 * </PanelWrapper>
 * ```
 *
 */
export const PanelWrapper: React.FC<PanelWrapperProps> = (props) => {
  const { className = '', ...rest } = props;
  return <Container className={`tec-panelWrapper ${className}`} {...rest} />;
};
