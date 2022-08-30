import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import channelStore from '../../store/modules/channelStore';

function MobxExample2() {
  useEffect(() => {
    channelStore.fetchData();
  }, []);
  return (
    <>
      <div>MobxExample2</div>
      <ul>
        {
          channelStore.channelList.map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </>
  );
}

export default observer(MobxExample2);
