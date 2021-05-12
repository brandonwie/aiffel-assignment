import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ForumActionType } from '../action-types';
import { ForumAction, ForumPostProps } from '../actions';

export const getForums = () => {
  return async (dispatch: Dispatch<ForumAction>) => {
    dispatch({
      type: ForumActionType.LOAD_FORUM_POSTS,
    });

    try {
      const { data }: AxiosResponse<ForumPostProps[]> = await axios.get(
        '/forum'
      );

      dispatch({
        type: ForumActionType.LOAD_FORUM_POSTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.error('Something went wrong while fetching forums:', err.message);

      dispatch({
        type: ForumActionType.LOAD_FORUM_POSTS_ERROR,
        payload: '포럼을 가져오는데 문제가 발생했습니다.',
      });
    }
  };
};
