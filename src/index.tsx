import * as React from 'react';
import {createStore, Store} from 'redux'
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import reducers from './reducers';
import App from './container/App';
import {IState} from "./common/models/state/state";

const store: Store<IState> = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
