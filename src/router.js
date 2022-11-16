import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import SuggestedCourses from "./components/maincomponents/SuggestedCourses";
import ChosenCourses from "./components/maincomponents/ChosenCourses";
import SearchBar from "./components/searchComponents/SearchBar";
import SearchRender from "./components/searchComponents/SearchRender";

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
