import React from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel() {
    return (
        <div className="description_panel">
            <p className="description_header">
                <span> Description </span>
                <i className="fas fa-chevron-up"> </i>
            </p>
            <p className="description_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit, quidem blanditiis architecto debitis
                suscipit harum tempore quibusdam ratione vitae numquam saepe, quam quis placeat nam excepturi aut autem temporibus aliquid at commodi
                doloribus beatae explicabo. Maiores, atque harum voluptas quod eveniet tempora illum iste repellat ea, fugiat est voluptates?
            </p>
        </div>

    );
}



