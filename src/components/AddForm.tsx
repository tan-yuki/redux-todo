import * as React from 'react';

interface IAddFormProps {
  actions: any
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
    } as IAddFormState);
  }

  onClickAddButton(e) {
    e.preventDefault();
    this.props.actions.addTodo(this.state.inputValue);
  }

  render() {
    let state = this.state as IAddFormState;

    return (<form id="add-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" value={state.inputValue} onChange={(e) => this.onChangeInputText(e)}/>
      <button id="add-todo" onClick={(e) =>this.onClickAddButton(e)}>Add</button>
     </form>);
  }
}
