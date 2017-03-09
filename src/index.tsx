import * as React from 'react';
import {createStore, Store, applyMiddleware} from 'redux'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';

import {reducers} from './reducers';
import {AppContainer} from './container/App';
import {IState} from "./common/models/state/state";
import {fetchTodoRequest} from "./actions/fetch-todo-action";

const logger = createLogger();
const store: Store<IState> = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchTodoRequest());
