import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import SubComponent from './components/subComponent';

function TestComponent7() {
  const [message, setMessage] = useLocalStorage('name', 'xiao');
  const handleChangeName = () => {
    const currentName = message === 'xiao' ? 'xjm' : 'xiao';
    (setMessage as React.Dispatch<React.SetStateAction<string>>)(currentName);
  };
  return (
    <>
      <div>test-component-7</div>
      <span>{ (message as string) }</span>
      <div onClick={handleChangeName}>change name</div>
      <SubComponent num={100} />
      <SubComponent num={200} />
    </>
  );
}

export default TestComponent7;
