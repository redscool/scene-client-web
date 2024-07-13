import React from "react";

export default function BulletPoint({ statement, highlightedText, level = 1 }) {
  return (
    <p
      className={`font-sans text-secondary self-start font-light text-sm mb-4  ml-${level}`}
    >
      <li>
        {highlightedText && (
          <span className="font-medium"> “{highlightedText}” </span>
        )}
        {statement}
      </li>
    </p>
  );
}
