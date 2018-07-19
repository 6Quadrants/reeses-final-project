import React, { Component } from "react";
import "../StatComponents.css";
import { PieChart, Pie} from "recharts";


const data01 = 
[{name: 'Group A', value: 100}]

const data02 = [{name: 'B1', value: 600}]


const COLORS = ['#4B1C1B', '#F96A00'];



class BigCupRatio extends Component {
	render () {
  	return (
    	<PieChart width={400} height={400}>
        <Pie data={data01} cx={150} cy={150} outerRadius={135} fill="#F96A00"/>
        <Pie data={data02} cx={150} cy={150} innerRadius={135} outerRadius={150} fill="#4B1C1B"/>
       </PieChart>



    );
  }
}

export default BigCupRatio;