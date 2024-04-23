import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
const HomePage = lazy(() => import("./components/homepage/HomePage"));
const ProjectDetails = lazy(() =>
  import("./components/project-details/ProjectDetails")
);
const ProjectType = lazy(() => import("./components/project-type/ProjectType"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/:slug",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <ProjectDetails />
        </Suspense>
      ),
    },
    {
      path: "/top-projects",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <ProjectType />
        </Suspense>
      ),
    },
    {
      path: "/sco-plots/:builder",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <ProjectType />
        </Suspense>
      ),
    },
    {
      path: "gurgaon/:microlocation/sco-plots",
      element: (
        <Suspense fallback={<h2>Loading..</h2>}>
          <ProjectType />
        </Suspense>
      ),
    },
  ]);

  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;
