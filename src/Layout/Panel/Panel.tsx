import React from 'react';

import { PanelTitle, PanelTitleProps } from '../PanelTitle';
import { Container } from './styledComponents';

export type PanelSize =
  | 'full'
  | 'three-quarter'
  | 'two-third'
  | 'half'
  | 'third'
  | 'quarter'
  | 'condensed';
export interface PanelProps extends PanelTitleProps {
  size?: PanelSize;
}
/**
 *
 * `Panel` simple containing element containing a `PanelTitle`. Is expected to be used as a child of `PanelWrapper`. In addition to the props below, view `PanelTitle` for additional props.
 *
 */
export const Panel: React.FC<PanelProps> = (props) => {
  const {
    size = 'full',
    className = '',
    title,
    leftComponent,
    subtitle,
    rightComponent,
    children,
  } = props;
  return (
    <Container className={`tec-panel ${className}`} size={size}>
      {(title || leftComponent || subtitle || rightComponent) && (
        <PanelTitle
          title={title}
          leftComponent={leftComponent}
          subtitle={subtitle}
          rightComponent={rightComponent}
          className='tec-panelTitleBar'
        />
      )}
      {children}
    </Container>
  );
};
