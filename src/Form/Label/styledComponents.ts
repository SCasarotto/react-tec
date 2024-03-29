import styled from 'styled-components';

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  position: relative;
  display: block;
  width: auto;
  box-sizing: border-box;
  margin-bottom: 3px;
  font-size: 18px;
  color: ${(props) =>
    props.disabled ? props.theme.gray : props.theme.darkerGray};
  cursor: ${(props) => {
    const { disabled, htmlFor } = props;

    if (disabled) {
      return 'not-allowed';
    }
    if (htmlFor) {
      return 'pointer';
    }
    return 'default';
  }};

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
