import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders ProductList or CartItem */}
    </>
  );
}

export default Layout;