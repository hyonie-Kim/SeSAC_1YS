// 리덕스 통합 관리
import { combineReducers } from 'redux';
import todo from './modules/todo';

export default combineReducers({
  todo,
});
