/* eslint-disable react/button-has-type */
import { observer } from 'mobx-react-lite';
import useStore from '../../store';

function MobxExample() {
  const { list, counter } = useStore();
  return (
    <>
      <div>MobxExample</div>
      <span>{counter.count}</span>
      <button onClick={() => counter.addCount()}>click</button>
      <ul>
        {
          list.filterList.map((item) => <li key={item}>{item}</li>)
        }
      </ul>
      <button onClick={() => list.changeList()}>add</button>
    </>
  );
}

export default observer(MobxExample);
