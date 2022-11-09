import context from '../index';

function BasicChild() {
  const { Consumer } = context;
  return (
    <Consumer>
      {
        (value) => (
          <div>
            {value}
            111
          </div>
        )
      }
    </Consumer>
  );
}

export default BasicChild;
