import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
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
        <Route path="/home/*" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<>Error</>} />
      </Routes>
    </div>
  );
}

export default App;
