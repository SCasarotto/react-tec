import React from 'react';

import { Container, SpinnerWrapper, Ring } from './styledComponents';
export type SpinnerSize = 'small' | 'medium' | 'large';
export interface SpinnerProps {
  size?: SpinnerSize;
  innerColor?: string;
  outerColor?: string;
  className?: string;
}
/**
 *
 * Spinner is the greatest loading spinner of all time.
 *
 */
export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { className = '', innerColor, outerColor, size = 'medium' } = props;

  const renderRings = () => {
    let totalRings = 6;

    switch (size) {
      case 'small':
        totalRings = 4;
        break;
      case 'medium':
        totalRings = 5;
        break;
      case 'large':
        totalRings = 6;
        break;
      default:
        break;
    }

    const rings = [];
    for (let i = 0; i < totalRings; i++) {
      rings.push(
        <Ring
          key={i}
          ringNumber={i}
          totalRings={totalRings}
          innerColor={innerColor}
          outerColor={outerColor}
          className={`tec-spinnerRing tec-spinnerRing${i + 1}`}
        />,
      );
    }
    return rings;
  };

  return (
    <Container className={`tec-spinner ${className}`}>
      <SpinnerWrapper size={size} className='tec-spinnerContainer'>
        {renderRings()}
      </SpinnerWrapper>
    </Container>
  );
};
