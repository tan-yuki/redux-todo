import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore} from 'redux'

const store = createStore(reducers);

const render = () => ReactDOM.render(
  <App
    onChangeCheckbox={(id) => store.dispatch({type: `TOGGLE_TODO`, id})}
    onDeleteTodoItem={(id) => store.dispatch({type: `DELETE_TODO`, id})}
    onClickAddButton={(title) => store.dispatch({type: `ADD_TODO`, title})}
    todos={store.getState()[`todos`]}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
