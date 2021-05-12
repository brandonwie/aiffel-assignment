import { UserProps, UserAction } from '../actions';
import { UserActionType } from '../action-types';
import { Reducer } from 'redux';

interface UserState {
  user: UserProps | null;
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const userReducer: Reducer<UserState> = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.LOG_IN:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionType.LOG_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false,
        token: action.payload.username,
        error: null,
      };
    case UserActionType.LOG_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UserActionType.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
