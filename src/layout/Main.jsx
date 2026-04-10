import NavBar from './NavBar';
import SideBar from './SideBar';

import { Outlet, useLocation } from 'react-router-dom';

export default function Main() {
  const location = useLocation();
  return (
    <div className="h-screen">
      <NavBar />
      <SideBar />
      <Outlet location={location.pathname} />
    </div>
  );
}
