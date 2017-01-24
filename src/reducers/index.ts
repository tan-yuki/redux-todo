import todos from './todos/index';
import {combineReducers} from 'redux'
import {IState} from "../common/models/state/state";

export default combineReducers<IState>({
  todos
});
