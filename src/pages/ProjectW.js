import React, { useEffect } from "react";

export default function ProjectW() {
  useEffect(() => {
    window.location.replace("projectw://Profile");
  }, []);
  return <div>ProjectW</div>;
}
