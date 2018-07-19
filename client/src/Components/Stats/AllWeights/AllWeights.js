
import React, { Component } from "react";
import "../StatComponents.css";


import { BarChart, Bar, XAxis, YAxis, CartesianGrid} from "recharts";


const data = [
    {name: 'Mini', grams: 3.5, amt: 50},
    {name: 'Miniature', grams: 8.8, amt: 50},
    {name: 'Classic', grams: 21, amt: 50},
    {name: 'Big Cup', grams: 39, amt: 50},
    
];



class AllWeights extends Component {
	render () {
  	return (

        <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <YAxis/>
       <XAxis dataKey="name"/>
       <Bar dataKey="grams" fill="#F96A00" />
      </BarChart>


    );
  }
}

export default AllWeights;
