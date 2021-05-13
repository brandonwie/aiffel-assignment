import { UserProps, UserAction } from '../actions';
import { UserActionType } from '../action-types';
import { Reducer } from 'redux';

interface UserState {
  user: UserProps | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  error: null,
};

const userReducer: Reducer<UserState> = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case UserActionType.LOG_IN:
      return {
        ...state,
        loading: true,
      };
    case UserActionType.LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        token: action.payload.password,
        loading: false,
        error: null,
      };
    case UserActionType.LOG_IN_ERROR:
      return {
        ...state,

        error: action.payload,
      };
    case UserActionType.LOG_OUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
