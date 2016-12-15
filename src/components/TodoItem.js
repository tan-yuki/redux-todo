import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import TodoInputText from './TodoInputText';

export default class TodoItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChangeCheckbox: PropTypes.func.isRequired,
    onDeleteTodoItem: PropTypes.func.isRequired,
    onUpdateTodoItem: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  onChangeCheckbox(id) {
    const {onChangeCheckbox} = this.props;

    onChangeCheckbox(id);
  }

  onClickDeleteLink(id) {
    const {onDeleteTodoItem} = this.props;

    onDeleteTodoItem(id);
  }

  onDoubleClick() {
    this.startToEditing();
  }

  startToEditing() {
    this.setState({
      editing: true
    });
  }

  finishToEditing() {
    this.setState({
      editing: false
    });
  }

  render() {
    const {id, name, checked, onUpdateTodoItem} = this.props;

    let className = cn({
      checked: checked
    });

    let elem;
    if (this.state.editing) {
    elem = <TodoInputText
      id={id}
      text={name}
      onUpdateTodoItem={onUpdateTodoItem}
      onUpdateFinished={() => this.finishToEditing()}
    />
    } else {
      elem = <span onDoubleClick={() => this.onDoubleClick()}>{name}</span>;
    }

    return (<li className={className}>
      <input type="checkbox" onChange={() => this.onChangeCheckbox(id)} checked={checked} />
      {elem}
      <a className="deleteTodoItem" href="#" onClick={() => this.onClickDeleteLink(id)}>Delete</a>
    </li>);
  }
}

