import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

// TODO: figure out some better icons

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h2></h2>} />
          <Route path="/experience" element={<h2></h2>} />
          <Route path="/education" element={<h2></h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
