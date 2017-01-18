import * as React from 'react';
import {event} from '../lib/event-emitter';
import {actionName} from '../common/constants';

export default class TodoInputText extends React.Component<any, any> {
  static propTypes = {
    id:               React.PropTypes.number.isRequired,
    editing:          React.PropTypes.bool,
    text:             React.PropTypes.string.isRequired,
    onUpdateFinished: React.PropTypes.func.isRequired,
  }

  state = {
    text: this.props.text || ``
  }

  onChange(e) {
    this.setState({
      text: e.target.value.trim()
    });
  }

  onKeyDown(e) {
    const {id, onUpdateFinished} = this.props;

    if (e.keyCode === 13) {
      event.emit(actionName.UPDATE_TODO, id, this.state.text);
      onUpdateFinished();
    }
  }

  render() {
    const {text} = this.state

    return <input type="text" autoFocus={true}
      value={text}
      onKeyDown={(e) => this.onKeyDown(e)}
      onChange={(e) => this.onChange(e)} />
  }

}
