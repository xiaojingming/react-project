import context from './index';
import BasicChild from './component/BasicChild';

function Basic3() {
  const { Provider } = context;
  const title = 'this is basic title';
  return (
    <Provider value={title}>
      <div className="container">
        <p>{ title }</p>
        <BasicChild />
      </div>
    </Provider>
  );
}

export default Basic3;
