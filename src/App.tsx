import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<h2></h2>} />
        <Route path="/placeholder" element={<h2></h2>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
