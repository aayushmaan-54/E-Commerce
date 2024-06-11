import { createBrowserRouter } from 'react-router-dom';
import Carts from './components/Carts';
import Error404 from './components/Error404';
import Home from './components/Home';
import Header from './components/Header';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error404 />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Carts /> },
    ],
  },
]);