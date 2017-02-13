import * as React from 'react';
import {Actions, IUpdateTodoPayload} from "../actions/index";

interface ITodoInputTextProps {
  id:               number,
  text:             string,
  actions:          Actions,
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
    const {id, actions, onUpdateFinished} = this.props;

    if (e.keyCode === 13) {
      actions.updateTodo({id, text: this.state.text} as IUpdateTodoPayload);
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
