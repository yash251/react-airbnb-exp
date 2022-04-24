import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img src="../images/katie-zaferes.png" className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}