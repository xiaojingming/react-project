import { RouteObject } from 'react-router-dom';
import TodoListComponent from '../../pages/TodoList';

const todolistRoutes: RouteObject[] = [
  {
    path: '/todolist',
    element: <TodoListComponent />,
  },
];

export default todolistRoutes;
