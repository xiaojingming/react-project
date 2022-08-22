import { useContext } from 'react';
import Context from '../../../hooks/useContext';

function GrandSonComponent() {
  const context = useContext<{
    name: string;
    age: number;
  }>(Context);
  return (
    <div>
      grand-son-component
      {context.age}
    </div>
  );
}

function SubComponent3() {
  return (
    <div>
      sub-component-3
      <GrandSonComponent />
    </div>
  );
}

export default SubComponent3;
