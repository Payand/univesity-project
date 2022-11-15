import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Main from "./components/maincomponents/Main";
import MainCourse from "./components/maincomponents/MainCourse";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Main />
            <MainCourse />
          </>
        ),
      },
    ],
  },
]);

export default router;
