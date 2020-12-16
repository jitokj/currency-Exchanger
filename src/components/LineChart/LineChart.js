import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import {Line} from 'react-chartjs-2';
import { useStateValue } from "../../StateProvider";

// let data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Currency Conversion Rate',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

const LineChart = () => {
  const [flag,setFlag] = useState(false);
  const [label,setLabel] = useState([]);
  const [data,setData] = useState([]);
  const [{fromCountry,toCountry}] = useStateValue();
  const showChart = (e)=>{
    e.preventDefault();
    setFlag(!flag);
    fetch(`https://free.currconv.com/api/v7/convert?q=${fromCountry}_${toCountry}&compact=ultra&date=2020-12-05&endDate=2020-12-10&apiKey=901278837b02f6df6c61`)
    .then(data=>{
      return data.json();
    })
    .then(result=>{
      console.log("😄",result);
     setLabel(Object.keys(result[`${fromCountry}_${toCountry}`]));
      console.log("in labels ",data.labels);
      setData(Object.values(result[`${fromCountry}_${toCountry}`]));
      
    
    })
  }
  

    return (
        <div>
        <Button onClick={showChart}>Line Chart</Button>
        <h2>last 5 days conversion rate</h2>
        {flag ?  <Line  data={{labels: label,datasets: [{
            backgroundColor:"rgba(204,16.52,0.5)",
            borderColor: "#CC1034",
            data: data }]}} /> : null }
       
        </div>
    );
};

export default LineChart;