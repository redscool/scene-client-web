import React from "react";
import Event from "../components/projectW/Event";
import { Route, Routes } from "react-router-dom";

export default function ProjectW() {
  return (
    <Routes>
      <Route exact path="/event/:eventId" element={<Event />} />
      <Route exact path="/venue/:venueId " element={<></>} />
      <Route path="/*" element={<span> Not found </span>} />
    </Routes>
  );
}
