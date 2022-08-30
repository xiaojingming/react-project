import { RouteObject } from 'react-router-dom';
import CommentComponent from '../../pages/Comment';

const commentRoutes: RouteObject[] = [
  {
    path: '/comment',
    element: <CommentComponent />,
  },
];

export default commentRoutes;
