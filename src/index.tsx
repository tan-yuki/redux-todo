import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {store} from './lib/store';

const render = () => ReactDOM.render(
  <App
    todos={store.getState()[`todos`]}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
