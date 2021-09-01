import React from 'react';

import { MultiStepForm, MultiStepFormProps } from '../../Form/MultiStepForm';
import { PopupProps } from '../Popup';
import { Popup } from './styledComponents';

export interface PopupMultiStepFormProps
  extends PopupProps,
    MultiStepFormProps {
  onClose(): void;
  onSubmit(): Promise<any>;
}
/**
 *
 * PopupMultiStepForm is a combination of `Popup` and `MultiStepForm`. Besides the props below, reference `MultiStepForm` for additional props.
 *
 */
export const PopupMultiStepForm = React.forwardRef<
  HTMLFormElement,
  PopupMultiStepFormProps
>((props, ref) => {
  const { visible, onClose, className = '', ...rest } = props;

  return (
    <Popup visible={visible} className={`tec-popupMultiStepForm ${className}`}>
      <MultiStepForm
        handleCancelOnClick={onClose}
        className='tec-popupMultiStepFormMultiStepForm'
        ref={ref}
        {...rest}
      />
    </Popup>
  );
});

PopupMultiStepForm.defaultProps = {
  visible: false,
};
