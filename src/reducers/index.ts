import todos from './todos';
import {combineReducers} from 'redux'
import {IState} from "../common/models/state/state";

export default combineReducers<IState>({
  todos
});
