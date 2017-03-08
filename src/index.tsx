import * as React from 'react';
import {createStore, Store, applyMiddleware} from 'redux'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';

const logger = createLogger();

import reducers from './reducers';
import App from './container/App';
import {IState} from "./common/models/state/state";

const store: Store<IState> = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
