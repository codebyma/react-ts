import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Index from "./ex/Index";
import Home from "./pages/Home";
import Stock from "./pages/stock/Stock";
import ButtonDemo from "./ex/ButtonDemo";
import TextPage from "./ex/TextDemo";
import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "components/demo/TextDemo", element: <TextPage /> },

        {
          path: "examples/Index",
          element: <Index />,
          children: [
            { index: true, element: <TextPage /> },
            { path: "ButtonDemo", element: <ButtonDemo /> },
            { path: "TextDemo", element: <TextPage /> },
          ],
        },
        {
          path: "stock/Stock",
          element: <Stock />,
          children: [
            { index: true, element: <Stock /> },
            { path: "stock", element: <Stock /> },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
    future: {
      v7_startTransition: true, // ✅ v7 방식 미리 적용
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;