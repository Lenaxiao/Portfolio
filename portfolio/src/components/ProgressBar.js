import React, { useState, useEffect } from "react";

export const ProgressBar = ({ field, data }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleOnScroll);
  });

  const handleOnScroll = e => {
    const dist = e.target.documentElement.scrollTop;
    if (dist >= 1200 && dist < 2000) {
      // may optimize later
      setWidth(data);
    } else {
      setWidth(0);
    }
  };

  return (
    <div className="progress-bar">
      <span>{field}</span>
      <div className="outer">
        <div className="inner" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export const ProgressBarWrap = ({ category, value }) => {
  return (
    <div className="progress-bar-wrapper">
      <header>{category}</header>
      {Object.entries(value).map(([k, v]) => (
        <ProgressBar key={k} field={k} data={v} />
      ))}
    </div>
  );
};
