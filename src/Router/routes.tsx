import { useRoutes, RouteObject } from 'react-router-dom';
import testRoutes from './modules/testRoutes';
import commentRoutes from './modules/commentRoutes';
import todolistRoutes from './modules/todolistRoutes';
import nestRoutes from './modules/nestRoutes';
import mobxRoutes from './modules/mobxRoutes';
import todosRoutes from './modules/todosRoutes';
import NotFound from '../pages/Nest/notFound';

const routesList: RouteObject[] = [
  ...nestRoutes,
  ...testRoutes,
  ...commentRoutes,
  ...todolistRoutes,
  ...mobxRoutes,
  ...todosRoutes,
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
