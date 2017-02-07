import * as React from 'react';
import {Actions} from "../actions/index";

interface IAddFormProps {
  actions: Actions 
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
    
    this.props.actions.addTodo(this.state.inputValue);
  }

  render() {
   return (<form id="add-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={this.state.inputValue} onChange={(e) => this.onChangeInputText(e)}/>
      <button id="add-todo" onClick={(e) =>this.onClickAddButton(e)}>Add</button>
    </form>);
  }
}
