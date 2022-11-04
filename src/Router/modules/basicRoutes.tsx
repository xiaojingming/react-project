import { RouteObject } from 'react-router-dom';
import Basic1 from '@/pages/Basic/basic1';
import Basic2 from '@/pages/Basic/basic2';

const basicRoutes: RouteObject[] = [
  {
    path: '/basic1',
    element: <Basic1 />,
  },
  {
    path: '/basic2',
    element: <Basic2 />,
  },
];

export default basicRoutes;
