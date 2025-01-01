import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ProductsCardContainer from "../pages/Products.jsx/ProductsCardContainer";
import ProductsCardDetails from "../pages/Products.jsx/ProductsCardDetails";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment/Payment";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateProduct from "../pages/Products.jsx/CreateProduct";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import UpdateProduct from "../pages/Products.jsx/UpdateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <ProductsCardContainer />,
      },
      {
        path: "/products/:id",
        element: <ProductsCardDetails />,
      },
      {
        path: "/update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/dashboard/create-product",
            element: <CreateProduct />,
          },
        ],
      },
    ],
  },
]);
