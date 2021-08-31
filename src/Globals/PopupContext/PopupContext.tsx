import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useMemo,
} from 'react';

import { Alert } from '../../Popup/Alert';
import { Confirm } from '../../Popup/Confirm';
import { NetworkActivity } from '../../Popup/NetworkActivity';

const initialState = {
  alertVisible: false,
  alertTitle: '',
  alertMessage: '',
  alertOnClick: undefined, //Gets Defaulted
  alertButtonTitle: 'Okay', //Gets Defaulted

  confirmTitle: '',
  confirmMessage: '',
  confirmVisible: false,
  confirmLeftOnClick: undefined, //Gets Defaulted
  confirmLeftTitle: 'Cancel',
  confirmRightOnClick: undefined, //Gets Defaulted
  confirmRightTitle: '',

  networkActivityVisible: false,
  networkMessage: '',
};

export const PopupContext = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>(undefined!);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'show_alert':
      return { ...state, alertVisible: true, ...action.payload };
    case 'hide_alert':
      return { ...state, alertVisible: false };
    case 'show_confirm':
      return { ...state, confirmVisible: true, ...action.payload };
    case 'hide_confirm':
      return { ...state, confirmVisible: false };
    case 'show_network_activity':
      return {
        ...state,
        networkActivityVisible: true,
        networkMessage: action.payload,
      };
    case 'hide_network_activity':
      return { ...state, networkActivityVisible: false };
    default:
      return state;
  }
};

/**
 *
 * `PopupContext` and `PopupProvider` are used to globally show `Alert`, `Confirm` and `NetworkActivity`. Below are details and examples to dispatch the different actions.
 *
 * The examples below are interacting with the `AppWrapper` which contains a `PopupProvider` of this site. However, you can also set it up as follows:
 *
 * ```
 * <PopupProvider><App/></PopupProvider>
 * ```
 *
 * And then access it through the `PopupContext` via the many different ways of access a context. In this example I use `useContext` as follows:
 *
 * In addition, `usePopups` is a nice helper hook that provides easy to use funtions instead of the dispatch types. The below example is identical to the one above but uses the `usePopups` hook.
 *
 */
export const PopupProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    alertTitle,
    alertMessage,
    alertVisible,
    alertOnClick = () => dispatch({ type: 'hide_alert' }),
    alertButtonTitle = 'Okay',

    confirmTitle,
    confirmMessage,
    confirmLeftOnClick = () => dispatch({ type: 'hide_confirm' }),
    confirmLeftTitle,
    confirmRightOnClick = () => dispatch({ type: 'hide_confirm' }),
    confirmRightTitle,
    confirmVisible,

    networkActivityVisible,
    networkMessage,
  } = state;

  const memoizedReturnValue = useMemo(() => ({ state, dispatch }), [
    state,
    dispatch,
  ]);
  return (
    <PopupContext.Provider value={memoizedReturnValue}>
      {props.children}
      <Alert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClick={alertOnClick}
        buttonTitle={alertButtonTitle}
      />
      <Confirm
        visible={confirmVisible}
        title={confirmTitle}
        message={confirmMessage}
        leftOnClick={confirmLeftOnClick}
        leftButtonTitle={confirmLeftTitle}
        rightOnClick={confirmRightOnClick}
        rightButtonTitle={confirmRightTitle}
      />
      <NetworkActivity
        visible={networkActivityVisible}
        message={networkMessage}
      />
    </PopupContext.Provider>
  );
};

export interface showAlertData {
  title?: string;
  message?: string;
  onClick?(): void;
  buttonTitle?: string;
}
export interface showConfirmData {
  title?: string;
  message?: string;
  leftOnClick?(): void;
  leftTitle?: string;
  rightOnClick?(): void;
  rightTitle?: string;
}
export interface usePopupsFunctions {
  showAlert(d: showAlertData): any;
  hideAlert(): any;
  showConfirm(d: showConfirmData): any;
  hideConfirm(): any;
  showNetworkActivity(message: string): any;
  hideNetworkActivity(): any;
}
export const usePopups = (): usePopupsFunctions => {
  const { dispatch } = useContext(PopupContext);

  //Alert
  const showAlert = useCallback(
    ({ title, message, onClick, buttonTitle }: showAlertData) =>
      dispatch({
        type: 'show_alert',
        payload: {
          alertTitle: title,
          alertMessage: message,
          alertOnClick: onClick,
          alertButtonTitle: buttonTitle,
        },
      }),
    [dispatch],
  );
  const hideAlert = useCallback(() => dispatch({ type: 'hide_alert' }), [
    dispatch,
  ]);

  //Confirm
  const showConfirm = useCallback(
    ({
      title,
      message,
      leftOnClick,
      leftTitle,
      rightOnClick,
      rightTitle,
    }: showConfirmData) =>
      dispatch({
        type: 'show_confirm',
        payload: {
          confirmTitle: title,
          confirmMessage: message,
          confirmLeftOnClick: leftOnClick,
          confirmLeftTitle: leftTitle,
          confirmRightOnClick: rightOnClick,
          confirmRightTitle: rightTitle,
        },
      }),
    [dispatch],
  );
  const hideConfirm = useCallback(() => dispatch({ type: 'hide_confirm' }), [
    dispatch,
  ]);

  const showNetworkActivity = useCallback(
    (message: string) =>
      dispatch({
        type: 'show_network_activity',
        payload: message,
      }),
    [dispatch],
  );
  const hideNetworkActivity = useCallback(
    () => dispatch({ type: 'hide_network_activity' }),
    [dispatch],
  );

  return {
    showAlert,
    hideAlert,
    showConfirm,
    hideConfirm,
    showNetworkActivity,
    hideNetworkActivity,
  };
};
