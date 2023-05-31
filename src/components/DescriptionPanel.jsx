import React from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
    return (
        <div className="description_panel">
            <p className="description_header">
                <span> {props.title} </span>
                <i className="fas fa-chevron-up"> </i>
            </p>
            <p className="description_content">
                {props.content}
            </p>
        </div>

    );
}



