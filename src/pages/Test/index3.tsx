import { createContext } from 'react';

const { Provider, Consumer } = createContext<{
  title: string
}>({
  title: '',
});

function ChildComponent1() {
  return (
    <Consumer>
      { (value) => <div>{value.title}</div> }
    </Consumer>
  );
}
function SubComponent1() {
  return (
    <div>
      this is sub-component1
      <ChildComponent1 />
    </div>
  );
}
function TestComponent3() {
  const title = 'hello xiao';
  return (
    <Provider value={{ title }}>
      <div>
        this is test-component3
        <SubComponent1 />
      </div>
    </Provider>
  );
}

export default TestComponent3;
