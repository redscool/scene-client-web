import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleEvent = () => {
    navigate("/projectw/event/12/");
  };
  return (
    <div>
      <button onClick={handleEvent}>Test Event</button>
    </div>
  );
}
