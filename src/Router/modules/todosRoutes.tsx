import { RouteObject } from 'react-router-dom';
import ToDos from '../../pages/ToDos/toDos';

const todosRoutes: RouteObject[] = [
  {
    path: '/todos',
    element: <ToDos />,
  },
];

export default todosRoutes;
