/* eslint-disable react/state-in-constructor */
import React from 'react';

class SubComponent2 extends React.Component {
  state: Readonly<{
    name: string;
    age: number;
  }> = { name: 'xjm', age: 24 };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        sub-component2-
        {name}
        -
        {age}
      </div>
    );
  }
}

export default SubComponent2;
