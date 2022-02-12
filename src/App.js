import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router";
import About from "./components/About";
import PortDetail from "./components/PortDetail";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <About />
      <div className="auto-scroll">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/port/:slug" element={<PortDetail />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
