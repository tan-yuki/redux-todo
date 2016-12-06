import React, {Component, PropTypes} from 'react';
import cn from 'classnames';

export default class TodoItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChangeCheckbox: PropTypes.func.isRequired,
    onDeleteTodoItem: PropTypes.func.isRequired
  }

  onChangeCheckbox(id) {
    const {onChangeCheckbox} = this.props;

    onChangeCheckbox(id);
  }

  onClickDeleteLink(id) {
    const {onDeleteTodoItem} = this.props;

    onDeleteTodoItem(id);
  }

  render() {
    const {id, name, checked} = this.props;

    let className = cn({
      checked: checked
    });

    return (<li className={className}>
      <input type="checkbox" onChange={() => this.onChangeCheckbox(id)} checked={checked} />
      <span>{name}</span>
      <a className="deleteTodoItem" href="#" onClick={() => this.onClickDeleteLink(id)}>Delete</a>
    </li>);
  }
}

