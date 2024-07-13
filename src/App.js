import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Scene from "./pages/Scene";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Contactus from "./pages/Contactus";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/tnc" element={<Terms />} />
      <Route exact path="/contact" element={<Contactus />} />
      <Route exact path="/refundpolicy" element={<RefundPolicy />} />
      <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route exact path="/app/*" element={<Scene />} />
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
