import reducers from '../reducers';
import {createStore, Store} from 'redux'
import {IState} from "../common/models/state/state";

export const store: Store<IState> = createStore(reducers);
