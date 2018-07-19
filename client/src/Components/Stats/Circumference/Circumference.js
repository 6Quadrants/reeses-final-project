
import React, { Component } from "react";
import "../StatComponents.css";

// import data from "../data";
import * as d3 from "d3";
import { PieChart, Pie, Sector, Cell } from "recharts";


const data01 = [{name: 'B1', value: 600}]
const data02 = [{name: 'B1', value: 600}]
const data03 = [{name: 'B1', value: 600}]
const data04 = [{name: 'B1', value: 600}]




class Circumference extends Component {
	render () {
  	return (
        <PieChart width={800} height={400}>
        <Pie data={data01} cx={75} cy={150} outerRadius={37} fill="#4B1C1B"/>
        <Pie data={data02} cx={190} cy={150} outerRadius={55} fill="#4B1C1B"/>
        <Pie data={data03} cx={350} cy={150} outerRadius={90} fill="#4B1C1B"/>
        <Pie data={data04} cx={550} cy={150} outerRadius={100} fill="#4B1C1B"/>
       </PieChart>
    );
  }
}

export default Circumference;



