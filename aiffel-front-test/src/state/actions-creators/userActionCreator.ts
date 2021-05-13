import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionType } from '../action-types';
import { UserProps, UserAction } from '../actions';

export const loadUser = (token: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      //![CHANGE BEFORE PRODUCTION] no auth fetching
      const { data } = await axios.get('/login');
      const user: UserProps = data.find(
        (usr: UserProps) => usr.password === token
      );
      localStorage.setItem('token', user.password);
      dispatch({
        type: UserActionType.USER_LOADED,
        payload: user,
      });
    } catch (err) {
      dispatch({
        type: UserActionType.LOG_OUT,
      });
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOG_IN,
    });
    //![CHANGE BEFORE PRODUCTION] no auth fetching
    try {
      const { data } = await axios.get('/login');
      const user: UserProps = data.find(
        (usr: UserProps) => email === usr.email && password === usr.password
      );

      if (user) {
        dispatch({
          type: UserActionType.LOG_IN_SUCCESS,
          payload: user,
        });
        //![CHANGE BEFORE PRODUCTION] password is used as token
        // set token after login
        localStorage.setItem('token', user.password);
      } else {
        dispatch({
          type: UserActionType.LOG_IN_ERROR,
          payload: '이메일이나 비밀번호를 확인해주세요.',
        });
      }
    } catch (err) {
      //![REMOVE BEFORE PRODUCTION] console.log
      console.error(
        'Something went wrong while fetching user info:',
        err.message
      );

      dispatch({
        type: UserActionType.LOG_IN_ERROR,
        payload: '서버에 문제가 발생했습니다.',
      });
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch<UserAction>) => {
    localStorage.removeItem('token');
    dispatch({
      type: UserActionType.LOG_OUT,
    });
  };
};
