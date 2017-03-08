import * as React from 'react';
import * as cn from 'classnames';
import {TodoInputText} from './TodoInputText';

interface ITodoItemProps {
  id:           number,
  name:         string,
  checked:      boolean,
  actions:      any
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
    const {actions} = this.props;
    
    actions.toggleTodo(id);
  }

  onClickDeleteLink(id: number): void {
    const {actions} = this.props;

    actions.deleteTodo(id);
  }

  render() {
    const {id, name, checked, actions} = this.props;

    let className = cn({
      checked: checked
    });

    let elem;
    if (this.state.editing) {
      elem = <TodoInputText
        id={id}
        text={name}
        actions={actions}
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

