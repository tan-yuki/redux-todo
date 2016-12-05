import React, {Component, PropTypes} from 'react';
import cn from 'classnames';

export default class TodoItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChangeCheckbox: PropTypes.func.isRequired
  }

  onChangeCheckbox(id) {
    const {onChangeCheckbox} = this.props;

    onChangeCheckbox(id);
  }

  render() {
    const {id, name, checked} = this.props;

    let className = cn({
      checked: checked
    });

    return (<li className={className}>
      <input type="checkbox" onChange={() => this.onChangeCheckbox(id)} checked={checked} />
      <span>{name}</span>
    </li>);
  }
}

