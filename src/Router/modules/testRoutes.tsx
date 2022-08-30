import { RouteObject } from 'react-router-dom';
import TestComponent from '../../pages/Test/index';
import TestComponent2 from '../../pages/Test/index2';
import TestComponent3 from '../../pages/Test/index3';
import TestComponent4 from '../../pages/Test/index4';
import TestComponent5 from '../../pages/Test/index5';
import TestComponent6 from '../../pages/Test/index6';
import TestComponent7 from '../../pages/Test/index7';
import TestComponent8 from '../../pages/Test/index8';
import TestComponent9 from '../../pages/Test/index9';
import TestComponent10 from '../../pages/Test/index10';

const testRoutes: RouteObject[] = [
  {
    path: '/test',
    element: <TestComponent />,
  },
  {
    path: '/test2',
    element: <TestComponent2 />,
  },
  {
    path: '/test3',
    element: <TestComponent3 />,
  },
  {
    path: '/test4',
    element: <TestComponent4 />,
  },
  {
    path: '/test5',
    element: <TestComponent5 />,
  },
  {
    path: '/test6',
    element: <TestComponent6 />,
  },
  {
    path: '/test7',
    element: <TestComponent7 />,
  },
  {
    path: '/test8',
    element: <TestComponent8 />,
  },
  {
    path: '/test9',
    element: <TestComponent9 />,
  },
  {
    path: '/test10/:id',
    element: <TestComponent10 />,
  },
];

export default testRoutes;
