import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT_MSG, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initState = {
    alert: null
  };

  const [state, dispatch] = useReducer(AlertReducer, initState);

  // set alert
  const showAlert = (msg, type) => {
    dispatch({ type: SET_ALERT_MSG, payload: { msg, type } });

    setTimeout(() => {
      removeAlert();
    }, 5000);
  };

  // remove alert
  const removeAlert = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{ alert: state.alert, showAlert, removeAlert }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
