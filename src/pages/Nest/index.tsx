import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div>layout</div>
      <Link to="/">article</Link>
      <Link to="/board">board</Link>
      <Outlet />
    </>
  );
}

export default Layout;
