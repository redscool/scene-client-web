import React from "react";

export default function Heading({heading}) {
  return (
    <p className="font-sans text-secondary self-start font-medium text-xl mb-6">
      {heading}
    </p>
  );
}
