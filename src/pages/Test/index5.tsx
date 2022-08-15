import { useState, useEffect } from 'react';

export default function TestComponent5() {
  const [datalist, setDatalist] = useState([1, 2, 3]);
  const [flag, setFlag] = useState(false);
  const handleAddDatalist = () => {
    const num = datalist.length + 1;
    setDatalist([...datalist, num]);
    setFlag(!flag);
  };
  useEffect(() => {
    console.log('effect');
  }, [flag]);
  return (
    <div>
      <ul>
        { datalist.map((item) => <li key={item}>{`${flag}-${item}`}</li>) }
      </ul>
      <div onClick={handleAddDatalist}>click me</div>
    </div>
  );
}
