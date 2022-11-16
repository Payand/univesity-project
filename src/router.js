import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import SuggestedCourses from "./components/Maincomponents/SuggestedCourses";
import ChosenCourses from "./components/Maincomponents/ChosenCourses";
import SearchBar from "./components/SearchComponents/SearchBar";
import SearchRender from "./components/SearchComponents/SearchRender";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <SearchBar />
            <SearchRender />
            <SuggestedCourses />
            <ChosenCourses />
          </>
        ),
      },
      {
        path: "/myCourses",
        element: <ChosenCourses />,
      },
      {
        path: "/suggested",
        element: <SuggestedCourses />,
      },
      {
        path: "/search",
        element: (
          <>
            <SearchBar />
            <SearchRender />
          </>
        ),
      },
    ],
  },
]);

export default router;
