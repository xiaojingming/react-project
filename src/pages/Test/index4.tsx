/* eslint-disable react/no-array-index-key */
function ChildComponent(props: { children: any }) {
  const { children } = props;
  return (
    <>
      <div>this is child-component</div>
      {/* {children()} */}
      {children.map((child: any, index: number) => <div key={index}>{child()}</div>)}
    </>
  );
}

function TestComponent4() {
  return (
    <>
      <ChildComponent>
        { () => <div>123</div> }
        { () => <div>1233</div> }
      </ChildComponent>
      <div>this is test-compnent-4</div>
    </>
  );
}

export default TestComponent4;
