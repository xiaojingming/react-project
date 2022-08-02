/* eslint-disable no-unused-vars */
import { useState } from 'react';

function A(props: { msg: string }) {
  const { msg } = props;
  return (
    <div>
      this is a component--
      {msg}
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
  const handleGetMessageFromB = (val: string) => {
    setMsg(val);
  };
  return (
    <div>
      <A msg={msg} />
      <B handleGetMessageFromB={handleGetMessageFromB} />
    </div>
  );
}
