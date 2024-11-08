import React, { useState } from "react";
import "./Tasty.css"

function AccItemsRight({
  title,
  content,
  expanded,
  index,
  totalItems,
  onClick,
  isOpen,
}) {
  // Calculate the width based on the index and total items
  const widthPercentage = 70 - index * (50 / totalItems);

  return (
    <div className="accordion-item-right" style={{ width: `${widthPercentage}%` }}>
      <div className="timeline-dot-right"></div>
      <div
        className={
          isOpen
            ? "elanged-right accordion-title-right accordion-title-open-right"
            : "elanged-right accordion-title-right"
        }
        onClick={onClick}
      >
        <span> {title} </span>
        <span> {isOpen ? "-" : "+"} </span>
      </div>
      {index === 0 && (
        <div className="accordian-wrapper">
          <div
            className={
              isOpen ? "accordion-content accordian-open" : "accordion-content"
            }
          >
            <p>{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccItemsRight;
