import * as React from "react";
import * as ReactDOM from 'react-dom';

class Hello extends React.Component<any, any> {
  render() {
    return <h1>Hello</h1>;
  }
}

ReactDOM.render(<Hello />, document.getElementById(`root`));

