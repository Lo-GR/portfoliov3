import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import logo from './images/TNTLogo.png';
import Home from './Pages/Home/';
import { Error } from './Pages/Error';
import { useState } from 'react';
import MobileNav from './Components/MobileNav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleMobileNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <Outlet />
      <MobileNav open={open} handleOpen={handleMobileNav} />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
