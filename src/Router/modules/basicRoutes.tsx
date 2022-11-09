import { RouteObject } from 'react-router-dom';
import Basic1 from '@/pages/Basic/basic1';
import Basic2 from '@/pages/Basic/basic2';
import Basic3 from '@/pages/Basic/basic3';
import Basic4 from '@/pages/Basic/basic4';

const basicRoutes: RouteObject[] = [
  {
    path: '/basic1',
    element: <Basic1 />,
  },
  {
    path: '/basic2',
    element: <Basic2 />,
  },
  {
    path: '/basic3',
    element: <Basic3 />,
  },
  {
    path: '/basic4',
    element: <Basic4 />,
  },
];

export default basicRoutes;
