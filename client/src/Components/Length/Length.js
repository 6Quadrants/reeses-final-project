import React, { Component } from "react";
import "./Length.css";
import API from "../../utils/API";
import { Col} from "react-bootstrap";

import data from "../data";
import * as d3 from "d3";
import { domainToASCII } from "url";

const width = 500;
const height = 300;
const margin = 25;
const orange = '#F96A00';
const yellow = '#FFCB00';
const brown = '#4B1C1B';



class Length extends Component {

state = {
    bars: []
};




// xScale = d3.scaleLinear().range([margin.left, width - margin.right]);
// yScale = d3.scaleLinear().range([0, width/2]);

// xAxis = d3.axisBottom().scale(this.xScale)
//     .tickFormat(d3.timeFormat('%b'));
// yAxis = d3.axisLeft().scale(this.yScale)
//     .tickFormat(d => '$(d)');


componentWillReceiveProps(nextProps) {
    const {data} = nextProps;
    if (!data) return;

const nameScale = d3.scaleBand()
  .domain(name)
  .range([0, width])
  .paddingInner(0.1);

const bandwidth = nameScale.bandwidth();

const maxChocolate = d3.max({data}, function(d) { return d.chocolate});
const chocolateScale = d3.scaleLinear()
    .domain([0, maxChocolate])
    .range([height, 0])
    .nice();

const xAxis = d3.axisBottom(nameScale);
const yAxis = d3.axisLeft(nameScale);

// const timeDomain = d3.extent(data, d => d.data);
// const chocolateMax = d3.max(data, d => d.high);
// this.xScale.domain(timeDomain);
// this.yScale.domain([0, chocolateMax]);
  
    // const bars = data.map(d => {
    //     const y1 = this.yScale(d.high);
    //     const y2 = this.yScale(d.low);
    //     return (
    //         x: xScale(d.chocolate),
    //         y:
    //     });
            
    // this.setState({ bars });

}




render () {
    return (
        <svg width={width} height={height}>
        
{
    this.state.bars.map(d => (<rect x={d.x} y={d.y} width='20' height={d.height} />))
}
    

        </svg>
    );
}


}

export default (Length);



