import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import AdaLovelace from "./Pages/AdaLovelace";
import NiklausWirth from "./Pages/NiklausWirth";
import BillGates from "./Pages/BillGates";
import JamesGosling from "./Pages/JamesGosling";
import KenThompson from "./Pages/KenThompson";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link> /
        <Link to="/AdaLovelace"> Ada Lovelace </Link> /
        <Link to="/NiklausWirth"> Niklaus Wirth </Link> /
        <Link to="/BillGates"> Bill Gates </Link> /
        <Link to="/JamesGosling"> JamesGosling </Link> /
        <Link to="/KenThompson"> KenThompson </Link> /


      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AdaLovelace" element={<AdaLovelace />} />
        <Route path="/NiklausWirth" element={<NiklausWirth />} />
        <Route path="/BillGates" element={<BillGates />} />
        <Route path="/JamesGosling" element={<JamesGosling />} />
        <Route path="/KenThompson" element={<KenThompson />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Foooter </div>
    </Router>
  );
}

export default App;
