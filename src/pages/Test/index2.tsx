/* eslint-disable no-unused-vars */
import { useState, createContext } from 'react';

const { Provider, Consumer } = createContext<{ title: string }>({ title: '' });

function C() {
  return (
    <Consumer>
      { (value) => <div>{value.title}</div> }
    </Consumer>
  );
}

function A(props: { msg: string }) {
  const { msg } = props;
  return (
    <div>
      this is a component--
      {msg}
      <C />
    </div>
  );
}

function B(props: { handleGetMessageFromB: (v: string) => void }) {
  const { handleGetMessageFromB } = props;
  const msgB = 'this is b msg';
  return (
    <div onClick={() => handleGetMessageFromB(msgB)}>this is b component</div>
  );
}

export default function TestComponent2() {
  const [msg, setMsg] = useState('');
  const title = 'hello xjm';
  const handleGetMessageFromB = (val: string) => {
    setMsg(val);
  };
  return (
    <Provider value={{ title }}>
      <div>
        <A msg={msg} />
        <B handleGetMessageFromB={handleGetMessageFromB} />
      </div>
    </Provider>
  );
}
