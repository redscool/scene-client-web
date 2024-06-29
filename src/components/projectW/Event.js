import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Event() {
  const params = useParams();
  useEffect(() => {
    const eventId = params.eventId;
    window.location.replace(`projectw://Event?eventId=${eventId}`);
  }, []);
  return <div>Event</div>;
}
