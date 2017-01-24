import * as React from 'react';
import * as cn from 'classnames';
import {TodoInputText} from './TodoInputText';
import {event} from '../lib/event-emitter';
import {actionName} from '../common/constants';

interface ITodoItemProps {
  id:      number,
  name:    string,
  checked: boolean
}
interface ITodoItemState {
  editing: boolean
}

export class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {

  constructor(props: ITodoItemProps) {
    super(props);

    this.state = {
      editing: false
    };
  }

  onDoubleClick(): void {
    this.startToEditing();
  }

  startToEditing(): void {
    this.setState({
      editing: true
    });
  }

  finishToEditing(): void {
    this.setState({
      editing: false
    });
  }
  
  onChangeCheckbox(id: number): void {
    event.emit(actionName.TOGGLE_TODO, id);
  }

  onClickDeleteLink(id: number): void {
    event.emit(actionName.DELETE_TODO, id);
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

