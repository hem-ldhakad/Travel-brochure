import React from "react";
import path from "./Fill 220.png"

export default function Main(props) {
console.log(props)
    return (
        <div className="main">
            <img src={props.img} alt=""/>
            <section className="section">
                <div className="map">
                    <img src={path} alt=""/>
                    <p>{props.country}</p>
                    <a href={props.link} >view on google map</a>
                </div>
                <h1 className="heading" >{props.heading}</h1>
                <h4 className="date" >{props.date}</h4>
                <p className="para" >{props.para}</p>
            </section>
        </div>
    )
}