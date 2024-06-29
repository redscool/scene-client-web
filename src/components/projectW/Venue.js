import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Venue() {
  const params = useParams();
  useEffect(() => {
    const venueId = params.venueId;
    window.location.replace(`projectw://Venue?venueId=${venueId}`);
  }, []);
  return <div>Event</div>;
}
