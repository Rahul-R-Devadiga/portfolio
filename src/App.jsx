import About from "./pages/About";
import Works from "./pages/Works";
import ProjectDetails from "./pages/ProjectDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Works />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/work/:workId",
    element: <ProjectDetails />,
  },
]);

function App() {
  return (
    <div className="md:my-6 md:mx-40 my-2 mx-10">
      <RouterProvider router={appRouter} />
      <Footer/>
    </div>
  );
}

export default App;
