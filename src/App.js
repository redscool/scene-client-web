import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ProjectW from "./pages/ProjectW";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/projectw/*" element={<ProjectW />} />
      <Route exact path="/tnc" element={<Terms />} />
      <Route exact path="/*" element={<h1> not found app</h1>} />
    </Routes>
  );
}

export default function Wrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
