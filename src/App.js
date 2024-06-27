import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ProjectW from "./pages/ProjectW";

function App() {
  return (
    <Routes>
      <Route exact path="/projectw/*" element={<ProjectW />} />
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
