import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './components/App';
import {store} from './lib/store';

console.log(store.getState());

const render = () => ReactDOM.render(
  <App
    todos={store.getState().todos.data}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
