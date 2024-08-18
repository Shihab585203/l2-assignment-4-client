import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ProductsCardContainer from "../pages/Products.jsx/ProductsCardContainer";
import ProductsCardDetails from "../pages/Products.jsx/ProductsCardDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
           path: '/',
           element: <Home/> 
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/products',
          element: <ProductsCardContainer/>
        },
        {
          path: '/products/:id',
          element: <ProductsCardDetails/>
        },
    ]
  },
]);
