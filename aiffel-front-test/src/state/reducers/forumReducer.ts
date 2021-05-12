import { Reducer } from 'redux';
import { ForumActionType } from '../action-types';
import { ForumAction } from '../actions';

import { ForumPostProps } from '../actions';

export interface ForumState {
  posts: ForumPostProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ForumState = {
  posts: [],
  isLoading: false,
  error: null,
};

const forumReducer: Reducer<ForumState> = (
  state: ForumState = initialState,
  action: ForumAction
): ForumState => {
  switch (action.type) {
    case ForumActionType.LOAD_FORUM_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case ForumActionType.LOAD_FORUM_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case ForumActionType.LOAD_FORUM_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ForumActionType.DELETE_FORUM_POST:
      return {
        ...state,
        isLoading: true,
      };
    case ForumActionType.DELETE_FORUM_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case ForumActionType.DELETE_FORUM_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ForumActionType.ADD_LIKE_FORUM_POST:
      return {
        posts: action.payload,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default forumReducer;
