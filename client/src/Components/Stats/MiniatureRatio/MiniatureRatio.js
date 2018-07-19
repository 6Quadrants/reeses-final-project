import React, { Component } from "react";
import { Col} from "react-bootstrap";
import "../StatComponents.css";

// import data from "../data";
import * as d3 from "d3";
import { PieChart, Pie, Sector, Cell } from "recharts";



const data01 = 
[{name: 'Group A', value: 200}]

const data02 = [{name: 'B1', value: 300}]


class MiniatureRatio extends Component {
	render () {
  	return (
        <PieChart width={400} height={400}>
        <Pie data={data01} cx={150} cy={150} outerRadius={70} fill="#F96A00"/>
        <Pie data={data02} cx={150} cy={150} innerRadius={70} outerRadius={100} fill="#4B1C1B"/>
       </PieChart>
    );
  }
}

export default MiniatureRatio;