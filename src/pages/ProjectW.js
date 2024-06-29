import React from "react";
import Event from "../components/projectW/Event";
import { Route, Routes } from "react-router-dom";
import Venue from "../components/projectW/Venue";

export default function ProjectW() {
  return (
    <Routes>
      <Route exact path="/event/:eventId" element={<Event />} />
      <Route exact path="/venue/:venueId " element={<Venue />} />
      <Route path="/*" element={<span> Not found </span>} />
    </Routes>
  );
}
