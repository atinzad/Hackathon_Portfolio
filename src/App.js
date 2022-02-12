import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/TripList" element={<TripsList />}></Route>
        {/* slug is the data will be given by the user. in our case it's from the data file. */}
        <Route path="/detail/:slug" element={<TripDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
