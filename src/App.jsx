import About from "./pages/About";
import Works from "./pages/Works";
import ProjectDetails from "./pages/ProjectDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollRestoration from "./components/ScrollRestoration";

function App() {
  return (
    <BrowserRouter className="scroll-smooth">
      <div className="md:my-6 md:mx-40 my-2 mx-10">
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:workId" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
