import React, { useState } from "react";

function AccItems({
  title,
  content,
  expanded,
  index,
  totalItems,
  onClick,
  isOpen,
}) {
  // Calculate the width based on the index and total items
  const widthPercentage = 80 - index * (50 / totalItems);

  return (
    <div className="accordion-item" style={{ width: `${widthPercentage}%` }}>
      <div className="timeline-dot"></div>
      <div
        className={
          isOpen
            ? "elanged accordion-title accordion-title-open"
            : "elanged accordion-title"
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

export default AccItems;
