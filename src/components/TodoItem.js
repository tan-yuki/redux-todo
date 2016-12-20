import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import TodoInputText from './TodoInputText';
import {event} from '../lib/event-emitter';
import {actionName} from '../common/constants';

export default class TodoItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  }

  state = {
    editing: false
  }

  onChangeCheckbox(id) {
    event.emit(actionName.TOGGLE_TODO, id);
  }

  onClickDeleteLink(id) {
    event.emit(actionName.DELETE_TODO, id);
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
    const {id, name, checked} = this.props;

    let className = cn({
      checked: checked
    });

    let elem;
    if (this.state.editing) {
    elem = <TodoInputText
      id={id}
      text={name}
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

