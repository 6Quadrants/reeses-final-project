import React, { Component } from "react";
import "../StatComponents.css";
import { PieChart, Pie} from "recharts";


const data01 = 
[{name: 'Group A', value: 100}]

const data02 = [{name: 'B1', value: 400}]





class ClassicRatio extends Component {
	render () {
  	return (
    	<PieChart width={400} height={400}>
        <Pie data={data01} cx={150} cy={150} outerRadius={110} fill="#F96A00"/>
        <Pie data={data02} cx={150} cy={150} innerRadius={110} outerRadius={130} fill="#4B1C1B"/>
       </PieChart>



    );
  }
}

export default ClassicRatio;