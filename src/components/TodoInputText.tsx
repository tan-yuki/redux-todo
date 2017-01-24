import * as React from 'react';
import {event} from '../lib/event-emitter';
import {actionName} from '../common/constants';

interface ITodoInputTextProps {
  id:               number,
  text:             string,
  onUpdateFinished: () => void
}

interface ITodoInputTextState {
  text: string
}

export class TodoInputText
  extends React.Component<ITodoInputTextProps, ITodoInputTextState> {

  state = {
    text: this.props.text || ``
  };

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
    const {text} = this.state;

    return <input type="text" autoFocus={true}
      value={text}
      onKeyDown={(e) => this.onKeyDown(e)}
      onChange={(e) => this.onChange(e)} />
  }

}
