import styled from 'styled-components';

export const StyledBodyContainer = styled.div<{ sidebarWidth?: number }>`
  position: relative;
  width: calc(100% - ${(props) => props.sidebarWidth}px);
  min-height: 100vh;
  margin-left: ${(props) => props.sidebarWidth}px;
  background-color: ${(props) => props.theme.lighterGray};
`;
