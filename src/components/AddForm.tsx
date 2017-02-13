import * as React from 'react';
import {Actions, IAddTodoPayload} from "../actions/index";

interface IAddFormProps {
  actions: Actions
}

interface IAddFormState {
  inputValue: string
}

export class AddForm extends React.Component<IAddFormProps, IAddFormState> {
  
  state = {
    inputValue: ''
  };

  onChangeInputText(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  onClickAddButton(e) {
    e.preventDefault();

    this.props.actions.addTodo({text: this.state.inputValue} as IAddTodoPayload);
  }

  render() {
    let state = this.state as IAddFormState;

    return (<form id="add-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={state.inputValue} onChange={(e) => this.onChangeInputText(e)}/>
      <button id="add-todo" onClick={(e) =>this.onClickAddButton(e)}>Add</button>
     </form>);
  }
}
