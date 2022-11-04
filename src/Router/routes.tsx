import { useRoutes, RouteObject } from 'react-router-dom';
import basicRoutes from './modules/basicRoutes';
import testRoutes from './modules/testRoutes';
import commentRoutes from './modules/commentRoutes';
import todolistRoutes from './modules/todolistRoutes';
import nestRoutes from './modules/nestRoutes';
import mobxRoutes from './modules/mobxRoutes';
import todosRoutes from './modules/todosRoutes';
import todos2Routes from './modules/todos2Routes';
import NotFound from '../pages/Nest/notFound';

const routesList: RouteObject[] = [
  ...nestRoutes,
  ...testRoutes,
  ...commentRoutes,
  ...todolistRoutes,
  ...mobxRoutes,
  ...todosRoutes,
  ...todos2Routes,
  ...basicRoutes,
  {
    path: '*',
    element: <NotFound />,
  },
];

function Routes() {
  const element = useRoutes(routesList);
  return element;
}

export default Routes;
