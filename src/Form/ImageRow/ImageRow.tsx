import React, { useState, ChangeEvent, FormEvent } from 'react';

import { FileInputProps } from '../FileInput';
import { FormRow, FormRowCustomProps } from '../FormRow';
import { Label, LabelCustomProps } from '../Label';
import { EditorPopup } from './EditorPopup';
import {
  ImageRowWrapper,
  ImageWrapper,
  Image,
  ClearImageButton,
  ClearImageButtonIcon,
  InputLabel,
  UploadIcon,
  Input,
  ErrorMessage,
} from './styledComponents';

export interface ImageRowSrcObject {
  uid: string;
  src: string;
  // filename: string
  // fileEnding: string
  path: string;
}
export interface ImageRowOnRemoveData {
  uid: string;
  path: string;
  index: number;
}
export interface ImageRowProps
  extends FormRowCustomProps,
    LabelCustomProps,
    FileInputProps {
  labelForKey: string;
  imgSrcArray: Array<ImageRowSrcObject>;
  maxNumber?: number;
  filePattern?: RegExp;
  // multiple?: false
  avatarEditorData?: any;
  onRemove(data: ImageRowOnRemoveData): Promise<any>;
  onUpload({ file, editor }: { file?: File; editor: any }): Promise<any>;
}
/**
 *
 * A component to manage uploading, downloading, and deleting images. This component contains a `Row`, `Label`, `FileInput` and some additional components.
 *
 * The editor popup is based on [React Avatar Editor](https://github.com/mosch/react-avatar-editor#readme).
 *
 * Note: This component is a bit complex and may shift in API over time.
 *
 */
export const ImageRow: React.FC<ImageRowProps> = (props) => {
  const [editorVisible, setEditorVisible] = useState(false);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [errorData, setErrorData] = useState({ error: false, message: '' });
  const [inputKey, setInputKey] = useState<string | number>(
    props.resetKey || 'inputKey',
  );

  const handleClearImage = (data: ImageRowOnRemoveData) => {
    props.onRemove(data);
  };
  const handleCancelEditor = () => {
    setErrorData({ error: false, message: '' });
    setFile(undefined);
    setInputKey(new Date().getTime());
    setEditorVisible(false);
  };
  const handleEditorSubmit = async (
    e: FormEvent<HTMLFormElement>,
    editor: any,
  ) => {
    //This could be passed out. Not sure it needs to.
    e.preventDefault();
    try {
      const { onUpload } = props;

      const data = { file, editor };
      await onUpload(data);
      setEditorVisible(false);
      setErrorData({ error: false, message: '' });
      setFile(undefined);
      setInputKey(new Date().getTime());
    } catch (e) {
      console.log(e);
      setEditorVisible(false);
      setErrorData({ error: false, message: '' });
      setFile(undefined);
      setInputKey(new Date().getTime());
    }
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { filePattern } = props;
    const { files } = e.target;

    if (!files) {
      console.error('No file provided to input.');
      return;
    }

    const file = files[0];

    //Validate Files
    if (filePattern && filePattern instanceof RegExp) {
      if (!file.type.match(filePattern)) {
        console.warn('The selected file is not an image.');
        setErrorData({
          error: true,
          message: 'The selected file is not an image.',
        });
        setInputKey(new Date().getTime());
        return;
      }
    }

    setErrorData({ error: false, message: '' });
    setFile(file);
    setEditorVisible(true);
  };

  const {
    className = '',
    rowSize,
    last,
    title,
    imgSrcArray,
    maxNumber = 0,
    accept,
    disabled,
    required,
    labelForKey,
    avatarEditorData,
  } = props;

  let labelText = title;
  if (labelText && maxNumber > 1 && imgSrcArray) {
    labelText = `${title} (${imgSrcArray.length}/${maxNumber})`;
  }

  return (
    <FormRow rowSize={rowSize} last={last} className={`ImageRow ${className}`}>
      {labelText && (
        <Label
          htmlFor={labelForKey}
          required={required}
          disabled={disabled}
          className='tec-imageRowTitle'
        >
          {labelText}
        </Label>
      )}
      <ImageRowWrapper className='tec-imageRowWrapper'>
        {imgSrcArray?.map((imgSrcData, index) => {
          const { src, uid, path } = imgSrcData;
          return (
            <ImageWrapper key={uid} className='tec-imageRowImageWrapper'>
              <a href={src} target='_blank' rel='noopener noreferrer'>
                <Image src={src} alt={uid} className='tec-imageRowImage' />
              </a>
              <ClearImageButton
                onClick={() => handleClearImage({ uid, path, index })}
                className='tec-imageRowClearButton'
              >
                <ClearImageButtonIcon className='tec-imageRowClearIcon' />
              </ClearImageButton>
            </ImageWrapper>
          );
        })}
        {(maxNumber === 0 ||
          !imgSrcArray ||
          (imgSrcArray && imgSrcArray.length < maxNumber)) &&
          !disabled && (
            <InputLabel disabled={disabled}>
              <div>
                <UploadIcon />
              </div>
              <Input
                key={inputKey} //Used to reset input
                type='file'
                accept={accept}
                onChange={onFileChange}
              />
            </InputLabel>
          )}
      </ImageRowWrapper>
      {errorData?.error && (
        <ErrorMessage className='tec-imageRowErrorMessage'>
          {errorData.message}
        </ErrorMessage>
      )}
      {file && (
        <EditorPopup
          visible={editorVisible}
          file={file}
          onCancel={handleCancelEditor}
          onSubmit={handleEditorSubmit}
          className='tec-imageRowPopup'
          avatarEditorData={avatarEditorData}
        />
      )}
    </FormRow>
  );
};

ImageRow.defaultProps = {
  accept: 'image/*',
  filePattern: /image-*/,
};
