import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore} from 'redux'

const store = createStore(reducers);

const todos = [
  {"name": "牛乳", "checked": false},
  {"name": "砂糖", "checked": true},
  {"name": "洗剤", "checked": false}
];

const render = () => ReactDOM.render(
  <App
    onChangeCheckbox={() => store.dispatch({type: `TOGGLE_TODO`})}
    todos={todos}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
