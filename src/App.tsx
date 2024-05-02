import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Education from "./pages/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<>Error</>} />
      </Routes>
    </div>
  );
}

export default App;
