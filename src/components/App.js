import React, {Component, PropTypes} from 'react';
import cn from 'classnames';

export default class App extends Component {

  static propTypes = {
    onChangeCheckbox: PropTypes.func.isRequired,
    onClickAddButton: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  onChangeInputText(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  onClickAddButton(e) {
    const {onClickAddButton} = this.props;

    e.preventDefault();
    onClickAddButton(this.state.inputValue);
  }

  onChangeCheckbox(id) {
    const {onChangeCheckbox} = this.props;

    onChangeCheckbox(id);
  }

  render() {
    const {todos} = this.props;

    return (<div>
      <form id="add-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={this.state.inputValue} onChange={(e) => this.onChangeInputText(e)}/>
        <button id="add-todo" onClick={(e) =>this.onClickAddButton(e)}>Add</button>
      </form>

      <ul id="todo-list">
        {todos.map((t, index) => {
          let className = cn({
            checked: t.checked
          });
          return <li className={className} key={t.id}>
            <input type="checkbox" onChange={() => this.onChangeCheckbox(t.id)} checked={t.checked} />
            <span>{t.name}</span>
          </li>;
        })}
      </ul>
    </div>);
  }
}
