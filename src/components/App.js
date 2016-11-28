import React, {Component, PropTypes} from 'react';
import cn from 'classnames';

export default class App extends Component {
  static propTypes = {
    onChangeCheckbox: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {todos, onChangeCheckbox} = this.props;

    return (<div>
      <form id="add-form">
        <input type="text" value="" />
        <button id="add-todo">Add</button>
      </form>

      <ul id="todo-list">
        {todos.map((t, index) => {
          let className = cn({
            checked: t.checked
          });
          return <li className={className} key={t.id}>
            <input type="checkbox" onChange={() => onChangeCheckbox(t.id)} checked={t.checked} />
            <span>{t.name}</span>
          </li>;
        })}
      </ul>
    </div>);
  }
}
