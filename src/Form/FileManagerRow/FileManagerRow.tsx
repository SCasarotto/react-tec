import React, { useState } from 'react';

import { FormRowCustomProps, FormRow } from '../FormRow';
import { InputProps } from '../Input';
import { Label, LabelCustomProps } from '../Label';
import {
  FileRowWrapper,
  FileWrapper,
  FileName,
  DownloadFileButton,
  DownloadImageButtonIcon,
  ClearFileButton,
  ClearFileButtonIcon,
  Input,
} from './styledComponents';

//FileManagerRow ✅
export interface FileManagerRowSrcObject {
  uid: string;
  src: string;
  filename: string;
  fileEnding: string;
  path: string;
}
export interface FileManagerRowOnRemoveData {
  uid: string;
  path: string;
  index: number;
}
/**
 *
 * A component to manage uploading, downloading, and deleting files. This component contains a `Row`, `Label`, `FileInput` and some additional components.
 *
 * Note: This component is a bit complex and may shift in API over time.
 *
 */
export interface FileManagerRowProps
  extends FormRowCustomProps,
    LabelCustomProps,
    InputProps {
  labelForKey: string;
  fileSrcArray: Array<FileManagerRowSrcObject>;
  maxNumber?: number;
  filePattern?: RegExp;
  // multiple?: false
  // TODO: improve these types
  onRemove(data: FileManagerRowOnRemoveData): Promise<any>;
  onUpload(files: FileList): Promise<any>;
}
export const FileManagerRow = React.forwardRef<
  HTMLInputElement,
  FileManagerRowProps
>((props, ref) => {
  const [inputKey, setInputKey] = useState<string | number>('inputKey');

  const {
    rowSize,
    last,
    className = '',
    title,
    fileSrcArray,
    maxNumber = 0,
    accept,
    filePattern,
    disabled,
    onRemove,
    required,
    labelForKey,
    onUpload,
    ...rest
  } = props;

  const onFileChange = (fileList: FileList) => {
    onUpload(fileList)
      .then(() => {
        setInputKey(new Date().getTime());
      })
      .catch((e) => {
        console.log(e);
        setInputKey(new Date().getTime());
      });
  };

  let labelText = title;
  if (labelText && maxNumber > 1 && fileSrcArray) {
    labelText = `${title} (${fileSrcArray.length}/${maxNumber})`;
  }

  return (
    <FormRow
      rowSize={rowSize}
      last={last}
      className={`tec-fileManagerRow ${className}`}
    >
      {labelText && (
        <Label
          htmlFor={labelForKey}
          required={required}
          disabled={disabled}
          className='tec-fileManagerRowTitle'
        >
          {labelText}
        </Label>
      )}
      <FileRowWrapper className='tec-fileManagerRowWrapper'>
        {fileSrcArray?.map((imgSrcData, index) => {
          const { src, uid, filename, fileEnding, path } = imgSrcData;
          return (
            <FileWrapper
              key={uid}
              className='tec-fileManagerFileRow'
              disabled={disabled}
            >
              <FileName className='tec-fileManagerFileName' disabled={disabled}>
                {filename}.{fileEnding}
              </FileName>
              {src && (
                <DownloadFileButton
                  href={src}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={uid}
                  download={filename}
                  className='tec-fileManagerDownloadButton'
                >
                  <DownloadImageButtonIcon className='tec-fileManagerDownloadIcon' />
                </DownloadFileButton>
              )}
              {!disabled && (
                <ClearFileButton
                  onClick={() => onRemove({ uid, path, index })}
                  className='tec-fileManagerClearButton'
                >
                  <ClearFileButtonIcon className='tec-fileManagerClearIcon' />
                </ClearFileButton>
              )}
            </FileWrapper>
          );
        })}
        {(maxNumber === 0 ||
          !fileSrcArray ||
          (fileSrcArray && fileSrcArray.length < maxNumber)) && (
          <Input
            {...rest}
            key={inputKey} //Used to reset the input
            id={labelForKey}
            onChange={onFileChange}
            disabled={disabled}
            required={required}
            // multiple={maxNumber === 0 || maxNumber > 1} //For simplicity making it a single file
            accept={accept}
            filePattern={filePattern}
            className='tec-fileManagerInput'
            hideClearButton
            ref={ref}
          />
        )}
      </FileRowWrapper>
    </FormRow>
  );
});

FileManagerRow.defaultProps = {
  accept: '.',
  filePattern: /./,
  // multiple: false, //Not implemented for multiple so defaulting for safety
};
