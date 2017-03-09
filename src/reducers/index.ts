import {todoReducers} from './todos/index';
import {combineReducers} from 'redux'
import {IState} from "../common/models/state/state";

export const reducers = combineReducers<IState>({
  todoReducers
});
