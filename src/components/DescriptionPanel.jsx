import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="description_panel">
      <p className={`description_header ${isContentVisible ? "expanded" : ""}`}>
        <span>{props.title}</span>
        <i
          className={`fas ${isContentVisible ? "fa-chevron-down" : "fa-chevron-up"}`}
          onClick={showContent}
        ></i>
      </p>

      {isContentVisible && (
        <p className="description_content">{props.content}</p>
      )}
    </div>
  );
}
