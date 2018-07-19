import React, { Component } from "react";
import "../StatComponents.css";

import { PieChart, Pie } from "recharts";



const data01 = 
[{name: 'Group A', value: 200}]

const data02 = [{name: 'B1', value: 400}]


class MiniRatio extends Component {
	render () {
  	return (
        <PieChart width={400} height={400}>
        <Pie data={data01} cx={150} cy={150} outerRadius={50} fill="#F96A00"/>
        <Pie data={data02} cx={150} cy={150} innerRadius={50} outerRadius={75} fill="#4B1C1B"/>
       </PieChart>
    );
  }
}

export default MiniRatio;