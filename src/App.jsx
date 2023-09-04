import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  PageLayout,
  Home,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "exchanges",
        element: <Exchanges />,
      },
      {
        path: "cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "crypto/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
