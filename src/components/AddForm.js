import React, {Component, PropTypes} from 'react';

export default class AddForm extends Component {

  static propTypes = {
    onClickAddButton: PropTypes.func.isRequired
  }

  constructor(props) {
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
    const {onClickAddButton} = this.props;

    e.preventDefault();
    onClickAddButton(this.state.inputValue);
  }

  render() {
    return (<form id="add-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={this.state.inputValue} onChange={(e) => this.onChangeInputText(e)}/>
        <button id="add-todo" onClick={(e) =>this.onClickAddButton(e)}>Add</button>
      </form>);
  }
}
