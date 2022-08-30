import { RouteObject } from 'react-router-dom';
import Layout from '../../pages/Nest';
import Login from '../../pages/Nest/login';
import Article from '../../pages/Nest/SubPage/article';
import Board from '../../pages/Nest/SubPage/board';

const nestRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Article />,
      },
      {
        path: '/board',
        element: <Board />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default nestRoutes;
