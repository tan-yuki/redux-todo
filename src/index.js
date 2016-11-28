import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore} from 'redux'

const store = createStore(reducers);

const render = () => ReactDOM.render(
  <App
    onChangeCheckbox={(id) => store.dispatch({type: `TOGGLE_TODO`, id})}
    todos={store.getState()[`todos`]}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
