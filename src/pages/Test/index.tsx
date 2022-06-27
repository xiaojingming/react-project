/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
import {
  BaseSyntheticEvent, Component, ReactNode, createRef,
} from 'react';

class TestComponent extends Component {
  msgRef = createRef<HTMLInputElement>();

  state: Readonly<{
    info: {
      name: string;
      age: number;
    };
    list: number[];
  }> = {
      info: {
        name: 'xiao',
        age: 24,
      },
      list: [1, 2, 3, 4],
    };

  handleChangeName = (index: number) => {
    const { info } = this.state;
    this.setState({
      info: {
        ...info,
        name: `${info.name + index}`,
      },
    });
  };

  handleChange = (e: BaseSyntheticEvent) => {
    const { info } = this.state;
    this.setState({
      info: {
        ...info,
        name: (e.target as HTMLInputElement).value,
      },
    });
  };

  handleGetValue = () => {
    console.log(this.msgRef.current?.value);
  };

  render(): ReactNode {
    const { info: { name, age }, list } = this.state;
    return (
      <div>
        <input type="text" value={name} onChange={this.handleChange} />
        <input type="text" ref={this.msgRef} />
        <button onClick={this.handleGetValue}>get value</button>
        <span>{`hello ${name} whose age is ${age}`}</span>
        <ul>
          {list.map((item, index) => (
            <li
              style={{ padding: '10px', backgroundColor: 'skyblue' }}
              key={index}
              onClick={() => this.handleChangeName(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestComponent;
