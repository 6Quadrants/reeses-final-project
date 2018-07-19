import React, { Component } from "react";
import API from "../../utils/API";
import { Col} from "react-bootstrap";
import "./Bars.css";

// import data from "../data";
import * as d3 from "d3";
import {BarChart, Bar, PieChart, Pie, Sector, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const data = [
    {name: 'mini', choc: 200, pb: 100},
    {name: 'miniature', choc: 400, pb: 100},
    {name: 'classic', choc: 800, pb: 200},
    {name: 'big cup', choc: 600, pb: 300},

    {name: 'Group A', value: 100}, 
    {name: 'Group B', value: 300},
];

const orange = '#F96A00';
const yellow = '#FFCB00';
const brown = '#4B1C1B';
const COLORS = ['#F96A00', '#4B1C1B'];


const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
const x  = cx + radius * Math.cos(-midAngle * RADIAN);
const y = cy  + radius * Math.sin(-midAngle * RADIAN); 
};

class Bars extends Component {
        
        render () {
          return (
            <div>
            <div className="choc-chart">

            <BarChart width={300} height={200} data={data}>
             <Bar dataKey='choc' fill={brown}/>
             <Bar dataKey='pb' fill={yellow}/>
           </BarChart>

           <h2 className="chart-label">Chocolate</h2>

            </div>
            <div>
            
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
                data={data} 
                cx={100} 
                cy={200} 
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80} 
                fill="#8884d8"
            >
                {
                data.map((entry, index) => 
                <Cell fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
            </PieChart>
            </div>
           </div>
        );
      }
    }
    
export default Bars;



