import React, { Component } from "react";
import "../StatComponents.css";

// import data from "../data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const data = [
    {name: 'mini', choc: 2, pb: 3, amt: 5},
    {name: 'miniature', choc: 2, pb: 4, amt: 6},
    {name: 'classic', choc: 1, pb: 4, amt: 5},
    {name: 'big cup', choc: 1, pb: 6, amt:7},
];



class AllRatios extends Component {

	render () {
  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 40, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Legend />
       <Bar dataKey="choc" stackId="a" fill="#4B1C1B" />
       <Bar dataKey="pb" stackId="a" fill="#F96A00" />
      </BarChart>
    );
  }
}
    
export default AllRatios;