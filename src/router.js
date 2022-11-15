import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Main from "./components/maincomponents/Main";
import MainCourse from "./components/maincomponents/MainCourse";
import MainSearch from "./components/maincomponents/MainSearch";
import SearchRender from "./components/maincomponents/SearchRender";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Main />
            <MainSearch />
            <SearchRender />
            <MainCourse />
          </>
        ),
      },
      {
        path: "/myCourses",
        element: <MainCourse />,
      },
      {
        path: "/suggested",
        element: <Main />,
      },
      {
        path: "/search",
        element: (
          <>
            <MainSearch />
            <SearchRender />
          </>
        ),
      },
    ],
  },
]);

export default router;
