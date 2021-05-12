import { combineReducers } from 'redux';
import userReducer from './userReducer';
import forumReducer from './forumReducer';

const reducers = combineReducers({
  user: userReducer,
  forum: forumReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
