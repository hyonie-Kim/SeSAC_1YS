// 리덕스 통합 관리
import { combineReducers } from 'redux';
import todo from './modules/todo';
import mbti from './modules/mbti';

export default combineReducers({
  mbti,
});
