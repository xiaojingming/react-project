import { useEffect, useState, useRef } from 'react';
import SubComponent2 from './components/subComponent2';

function TestComponent8() {
  const [count, setCount] = useState(1);
  const divRef = useRef(null);
  const componentRef = useRef(null);
  const handleClick = () => {
    let num = count;
    num += 1;
    setCount(num);
  };
  useEffect(() => {
    async function fetchData() {
      const data = {
        app_id: 'rgihdrm0kslojqvm',
        app_secret: 'WnhrK251TWlUUThqaVFWbG5OeGQwdz09',
        content: '000123456789',
      };
      const param = await fetch(`/create?${new URLSearchParams(data)}`).then((res) => res.json());
      console.log('param', param);
    }
    fetchData();
  }, []);
  useEffect(() => {
    console.log(divRef.current);
    console.log(componentRef.current);
  }, []);
  return (
    <>
      <div ref={divRef}>test-component-8</div>
      <div>{count}</div>
      <div onClick={handleClick}>click</div>
      <SubComponent2 ref={componentRef} />
    </>
  );
}

export default TestComponent8;
