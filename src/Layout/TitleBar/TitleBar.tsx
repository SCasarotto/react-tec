import React from 'react';

import {
  Container,
  Content,
  Title,
  ComponentWrapper,
  Subtitle,
} from './styledComponents';

export interface TitleBarProps {
  className?: string;
  title?: string;
  leftComponent?: React.ReactNode;
  subtitle?: string;
  rightComponent?: React.ReactNode;
}
/**
 *
 * TitleBar simple title bar seen at the top of all of the pages.
 *
 */
export const TitleBar: React.FC<TitleBarProps> = (props) => {
  const {
    className = '',
    title,
    leftComponent,
    subtitle,
    rightComponent,
  } = props;

  return (
    <Container className={`tec-titleBar ${className}`}>
      <Content className='tec-titlebarContent'>
        {title && <Title className='tec-titlebarTitle'>{title}</Title>}
        {leftComponent && (
          <ComponentWrapper className='tec-titlebarLeftComponent'>
            {leftComponent}
          </ComponentWrapper>
        )}
        {subtitle && (
          <Subtitle className='tec-titlebarSubtitle'>{subtitle}</Subtitle>
        )}
        {rightComponent && (
          <ComponentWrapper className='tec-titlebarRightComponent'>
            {rightComponent}
          </ComponentWrapper>
        )}
      </Content>
    </Container>
  );
};
