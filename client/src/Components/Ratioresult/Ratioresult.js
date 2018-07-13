import React from "react";
import "./Ratioresult.css";

    const Ratioresult = props => (

        <div className="ratio-result">
        <h1 className="ratio"><span className="chocolate">{props.chocolate}</span>
        <span className="colon">:</span>
        <span className="pb">{props.peanutbutter}</span>
        </h1>
        </div>
    )

export default Ratioresult;