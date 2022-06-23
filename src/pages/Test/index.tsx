/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import { Component, ReactNode } from 'react';

class TestComponent extends Component {
  state: Readonly<{
    name: string;
  }> = {
      name: 'xjm',
    };

  handleChangeName = () => {
    const { name } = this.state;
    this.setState({
      name: name === 'xiao' ? 'xjm' : 'xiao',
    });
  };

  render(): ReactNode {
    const { name } = this.state;
    return (
      <div>
        <span>{`this is ${name}`}</span>
        <div onClick={this.handleChangeName}>change</div>
      </div>
    );
  }
}

export default TestComponent;
