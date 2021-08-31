import React, { useState, useRef, FormEvent } from 'react';

import AvatarEditor, { AvatarEditorProps } from 'react-avatar-editor';

import { PopupForm, PopupFormProps } from '../../../Popup/PopupForm';
import { Label } from '../../Label';
import {
  Container,
  Row,
  RotateButtonWrapper,
  RotateButton,
  UndoRotationIcon,
  RedoRotationIcon,
} from './styledComponents';

interface Props extends Omit<PopupFormProps, 'onSubmit' | 'onClose'> {
  avatarEditorData: Omit<AvatarEditorProps, 'image'>;
  file: string | File; //Same as AvatarEditorProps image
  onSubmit(e: FormEvent<HTMLFormElement>, editor: AvatarEditor | null): void;
  onCancel: PopupFormProps['onClose']; // This may have been a mistake in naming but at this time I don't want to make a breaking change.
}
export const EditorPopup: React.FC<Props> = (props) => {
  const [editorScale, setEditorScale] = useState(1.1);
  const [rotation, setRotation] = useState(0);
  const editor = useRef<AvatarEditor>(null);

  const {
    className = '',
    visible,
    file,
    onCancel,
    onSubmit,
    onSubmitTitle,
    avatarEditorData,
  } = props;

  return (
    <PopupForm
      visible={visible}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        onSubmit(e, editor.current);
      }}
      onClose={onCancel}
      onCloseTitle='Cancel'
      onSubmitTitle={onSubmitTitle}
      className={`tec-editorPopup ${className}`}
    >
      <Container className='tec-imageRowPopupContainer'>
        <Row className='tec-imageRowPopupRow'>
          <AvatarEditor
            ref={editor}
            image={file}
            width={300}
            height={300}
            border={20}
            // borderRadius={editorRadius}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={editorScale}
            rotate={rotation}
            {...avatarEditorData}
          />
        </Row>
        <Row className='tec-imageRowPopupRow'>
          <Label htmlFor='scale' className='tec-imageRowPopupZoomTitle'>
            Zoom
          </Label>
          <input
            name='scale'
            id='scale'
            type='range'
            onChange={(e) => setEditorScale(Number(e.target.value))}
            min='0.5'
            max='2.5'
            step='0.01'
            value={editorScale}
            className='tec-imageRowPopupZoomSlider'
          />
        </Row>
        <Row className='tec-imageRowPopupRow'>
          <Label className='tec-imageRowPopupRotateLabel'>Rotate</Label>
          <RotateButtonWrapper className='tec-imageRowPopupRotateButtonWrapper'>
            <RotateButton
              className='tec-imageRowPopupRotateButton'
              onClick={() => setRotation(rotation + 90)}
            >
              <UndoRotationIcon className='tec-imageRowPopupRotateIcon' />
            </RotateButton>
            <RotateButton
              className='tec-imageRowPopupRotateButton'
              onClick={() => setRotation(rotation - 90)}
            >
              <RedoRotationIcon className='tec-imageRowPopupRotateIcon' />
            </RotateButton>
          </RotateButtonWrapper>
        </Row>
      </Container>
    </PopupForm>
  );
};

EditorPopup.defaultProps = {
  onSubmitTitle: 'Submit',
};
