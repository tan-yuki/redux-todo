import * as React from 'react';
import {event} from '../lib/event-emitter';
import {actionName} from '../common/constants';

interface IAddFormProps {
}

interface IAddFormState {
  inputValue: string
}

export class AddForm extends React.Component<IAddFormProps, IAddFormState> {

  constructor(props: IAddFormProps) {
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
    e.preventDefault();
    event.emit(actionName.ADD_TODO, this.state.inputValue);
  }

  render() {
    return (<form id="add-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={this.state.inputValue} onChange={(e) => this.onChangeInputText(e)}/>
        <button id="add-todo" onClick={(e) =>this.onClickAddButton(e)}>Add</button>
      </form>);
  }
}
