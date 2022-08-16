import { useState } from 'react';

interface Props {
  num: number;
}

function SubComponent({ num }: Props) {
  const [doubleNum, setDoubleNum] = useState(() => num * 2);
  const handleClick = () => {
    setDoubleNum(doubleNum * 2);
  };
  return (
    <div onClick={handleClick}>{doubleNum}</div>
  );
}

export default SubComponent;
