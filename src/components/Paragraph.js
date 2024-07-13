import React from "react";

export default function Paragraph({ paragraph }) {
  return (
    <p className="font-sans text-secondary self-start font-light text-sm mb-4">
      {paragraph}
    </p>
  );
}
