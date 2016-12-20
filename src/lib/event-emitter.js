import EventEmitter from 'eventemitter3';
import {actionName} from '../common/constants';
import {store} from './store.js';

const event = new EventEmitter();

event.on(actionName.TOGGLE_TODO, (id) => {
  store.dispatch({type: actionName.TOGGLE_TODO, id});
});

event.on(actionName.DELETE_TODO, (id) => {
  store.dispatch({type: actionName.DELETE_TODO, id});
});

event.on(actionName.UPDATE_TODO, (id, name) => {
  store.dispatch({type: actionName.UPDATE_TODO, id, name});
});

event.on(actionName.ADD_TODO, (name) => {
  store.dispatch({type: actionName.ADD_TODO, name});
});

export {event};
