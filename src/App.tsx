import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Index from "./examples/Index";
import Home from "./pages/Home";
import ButtonDemo from "./examples/ButtonDemo";
import TextPage from "./examples/TextDemo";
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