import React from 'react';

import {
  Container,
  Title,
  ComponentWrapper,
  Subtitle,
} from './styledComponents';

export interface PanelTitleProps {
  className?: string;
  title?: string;
  leftComponent?: React.ReactNode;
  subtitle?: string;
  rightComponent?: React.ReactNode;
}
/**
 *
 * `PanelTitle` simple title row typically used in the `Panel`.
 *
 */
export const PanelTitle: React.FC<PanelTitleProps> = (props) => {
  const {
    className = '',
    title,
    leftComponent,
    subtitle,
    rightComponent,
  } = props;

  return (
    <Container className={`tec-panelTitle ${className}`}>
      {title && <Title className='tec-panelTitleTitle'>{title}</Title>}
      {leftComponent && (
        <ComponentWrapper className='tec-panelTitleLeftComponentWrapper'>
          {leftComponent}
        </ComponentWrapper>
      )}
      {subtitle && (
        <Subtitle className='tec-panelTitleSubTitle'>{subtitle}</Subtitle>
      )}
      {rightComponent && (
        <ComponentWrapper className='tec-panelTitleRightComponentWrapper'>
          {rightComponent}
        </ComponentWrapper>
      )}
    </Container>
  );
};
