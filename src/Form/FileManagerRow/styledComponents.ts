import { FaFileDownload, FaRegWindowClose } from 'react-icons/fa';
import styled from 'styled-components';

import { Button } from '../Button';
import { FileInput } from '../FileInput';

export const FileRowWrapper = styled.div``;
export const FileWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid
    ${(props) =>
      props.disabled ? props.theme.lighterGray : props.theme.lightGray};
  background-color: ${(props) => props.theme.white};
`;
export const FileName = styled.span<{ disabled?: boolean }>`
  flex: 1;
  padding-left: 5px;
  display: block;
  color: ${(props) =>
    props.disabled ? props.theme.gray : props.theme.darkerGray};
`;
export const DownloadFileButton = styled.a`
  width: auto;
  padding: 5px 10px;
  color: ${(props) => props.theme.darkGray};
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 0.2s ease-in 0s, background-color 0.2s ease-in 0s,
    border 0.2s ease-in 0s;
  :active,
  :hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.primary};
  }
`;
export const DownloadImageButtonIcon = styled(FaFileDownload)`
  color: inherit;
  display: block;
  font-size: 18px;
`;
export const ClearFileButton = styled(Button)`
  width: auto;
  padding: 5px 10px;
  margin-left: 5;
`;
export const ClearFileButtonIcon = styled(FaRegWindowClose)`
  color: inherit;
  display: block;
  font-size: 18px;
`;
export const Input = styled(FileInput)`
  margin-top: 10px;
`;
