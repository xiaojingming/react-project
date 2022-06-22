// import './App.css';

const list = [
  {
    id: 1,
    name: 'a',
  },
  {
    id: 2,
    name: 'b',
  },
  {
    id: 3,
    name: 'c',
  },
];
const flag = false;
function App() {
  return (
    <>
      <div className="App">
        <ul>
          { list.map((item) => (<li key={item.id}>{ item.name }</li>)) }
        </ul>
      </div>
      <div>{ flag ? 'hello xiao' : 'xjm' }</div>
    </>
  );
}

export default App;
