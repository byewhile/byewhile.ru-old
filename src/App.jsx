import './App.css';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from './components/header/Header';

import Home from './pages/home/Home';
import Find_emoji from './pages/find_emoji/Find_emoji';
import Dora_assembly from './pages/dora-assembly/Dora_assembly';

function App() {
  const Layout = () => {
    return (
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/find-emoji",
          element: <Find_emoji />,
        },
        {
          path: "/dora-assembly",
          element: <Dora_assembly />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App