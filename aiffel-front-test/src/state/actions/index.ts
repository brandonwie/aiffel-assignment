import { UserActionType, ForumActionType } from '../action-types';

/************************
 ** User
 ************************/

export interface UserProps {
  id: number;
  email: string;
  password: string;
  username: string;
}

interface UserLoadedAction {
  type: UserActionType.USER_LOADED;
  payload: UserProps;
}
interface LoginAction {
  type: UserActionType.LOG_IN;
}

interface LoginSuccessAction {
  type: UserActionType.LOG_IN_SUCCESS;
  payload: UserProps;
}

interface LoginErrorAction {
  type: UserActionType.LOG_IN_ERROR;
  payload: string;
}

interface LogoutAction {
  type: UserActionType.LOG_OUT;
}

export type UserAction =
  | UserLoadedAction
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction;

/************************
 ** Forum
 ************************/

export interface ForumPostProps {
  id: number;
  title: string;
  content: string;
  isLiked: boolean;
  tag: {
    name: string;
    color: string;
  };
}

interface LoadForumPostsAction {
  type: ForumActionType.LOAD_FORUM_POSTS;
}

interface LoadForumPostsSuccessAction {
  type: ForumActionType.LOAD_FORUM_POSTS_SUCCESS;
  payload: ForumPostProps[];
}
interface LoadForumPostsErrorAction {
  type: ForumActionType.LOAD_FORUM_POSTS_ERROR;
  payload: string;
}

interface DeleteForumPostAction {
  type: ForumActionType.DELETE_FORUM_POST;
}

interface DeleteForumPostSuccessAction {
  type: ForumActionType.DELETE_FORUM_POST_SUCCESS;
  payload: ForumPostProps[];
}

interface DeleteForumPostErrorAction {
  type: ForumActionType.DELETE_FORUM_POST_ERROR;
  payload: string;
}

interface AddLikeForumPostAction {
  type: ForumActionType.ADD_LIKE_FORUM_POST;
  payload: ForumPostProps[];
}

export type ForumAction =
  | LoadForumPostsAction
  | LoadForumPostsSuccessAction
  | LoadForumPostsErrorAction
  | DeleteForumPostAction
  | DeleteForumPostSuccessAction
  | DeleteForumPostErrorAction
  | AddLikeForumPostAction;
