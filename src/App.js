import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Resume" element={<Resume />} />
        <Route exact path="Project" element={<Project />} />
        <Route exact path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
