import {connect} from "react-redux";
import * as React from "react";

import {IState} from "../common/models/state/state";
import {AddForm} from "../components/AddForm";
import {TodoList} from "../components/TodoList";

import {bindActionCreators} from "redux";
import {ITodos} from "../common/models/todos";
import {actionCreators} from "../actions/index";

export interface IAppState {
  todos: ITodos
}

export interface IDispatchProps {
  actions: any
}


let mapStateToProps = (state: IState): IAppState => {
  return {
    todos: state.todos.data
  };
};

let mapDispatchToProps = (dispatch): IDispatchProps => {
  return {
    actions: bindActionCreators<any>(actionCreators, dispatch)
  };
};

class App extends React.Component<IAppState & IDispatchProps, undefined> {
  render() {
    const {todos, actions} = this.props;

    return (<div>
      <AddForm actions={actions} />
      <TodoList todos={todos}
                actions={actions} />
    </div>);
  }
}

export default connect<IAppState, IDispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);
