import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionType } from '../action-types';
import { UserProps, UserAction } from '../actions';

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOG_IN,
    });

    try {
      const { data } = await axios.get('/login');
      console.log(data);
      const user: UserProps = data.find(
        (usr: UserProps) => email === usr.email && password === usr.password
      );

      if (user) {
        dispatch({
          type: UserActionType.LOG_IN_SUCCESS,
          payload: user,
        });
      } else {
        dispatch({
          type: UserActionType.LOG_IN_ERROR,
          payload: '이메일이나 비밀번호를 확인해주세요.',
        });
      }
    } catch (err) {
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
    dispatch({
      type: UserActionType.LOG_OUT,
    });
  };
};
