import React from "react";
import "./Dataviz.css";
import {Col} from "react-bootstrap";



const Dataviz = props => (



var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });

    <div className="container">
        <div className = "chart">
        
        </div>
    </div>

)

export default Dataviz;