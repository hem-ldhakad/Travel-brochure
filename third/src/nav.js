import React from "react";
import globe from "./Globe.png"

export default function Nav() {
    return (
        <div className="nav">
            <img className="globe" src={globe} alt=""/>
            <p>my travel journal.</p>
        </div>
    )
}