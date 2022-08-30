import { RouteObject } from 'react-router-dom';
import MobxExample from '../../pages/MobxExample/mobxExample';
import MobxExample2 from '../../pages/MobxExample/mobxExample2';

const mobxRoutes: RouteObject[] = [
  {
    path: '/mobx',
    element: <MobxExample />,
  },
  {
    path: '/mobx2',
    element: <MobxExample2 />,
  },
];

export default mobxRoutes;
