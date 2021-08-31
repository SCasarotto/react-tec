import React from 'react';

import { Form, FormProps } from '../../Form/Form';
import { PopupProps } from '../Popup';
import {
  Popup,
  FormContent,
  ButtonContainer,
  LeftButton,
  RightButton,
} from './styledComponents';

export interface PopupFormProps extends PopupProps, FormProps {
  onClose(): void;
  onCloseTitle?: string;
  onSubmitTitle?: string;
  submitButtonId?: string;
}
/**
 *
 * `PopupForm` is a combination of `Form` and `Popup`.
 *
 */
export const PopupForm = React.forwardRef<HTMLFormElement, PopupFormProps>(
  (props, ref) => {
    const {
      visible,
      onClose,
      onCloseTitle,
      onSubmitTitle,
      className = '',
      submitButtonId,
      children,
      ...rest
    } = props;

    return (
      <Popup visible={visible} className={`tec-popupForm ${className}`}>
        <Form className='tec-popupFormForm' ref={ref} {...rest}>
          <FormContent className='tec-popupFormContent'>{children}</FormContent>
          <ButtonContainer className='tec-popupFormButtonContainer'>
            <LeftButton
              onClick={onClose}
              className='tec-popupFormButton PopupFormLeftButton'
            >
              {onCloseTitle}
            </LeftButton>
            <RightButton
              type='submit'
              className='tec-popupFormButton PopupFormRightButton'
              id={submitButtonId}
            >
              {onSubmitTitle}
            </RightButton>
          </ButtonContainer>
        </Form>
      </Popup>
    );
  },
);

PopupForm.defaultProps = {
  visible: false,
  onCloseTitle: 'Cancel',
  onSubmitTitle: 'Submit',
};
