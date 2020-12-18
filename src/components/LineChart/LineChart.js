import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import {Line} from 'react-chartjs-2';
import { useStateValue } from "../../StateProvider";
import "./LineChart.css";


const LineChart = () => {
  const [flag,setFlag] = useState(false);
  //const [convert,setConvert] = useState(false);
  const [label,setLabel] = useState([]);
  const [data,setData] = useState([]);
  const [{fromCountry,toCountry,chart}] = useStateValue();

  const showChart = (e)=>{
    e.preventDefault();
    setFlag(!flag);
    fetch(`https://free.currconv.com/api/v7/convert?q=${fromCountry}_${toCountry}&compact=ultra&date=2020-12-05&endDate=2020-12-10&apiKey=901278837b02f6df6c61`)
    .then(data=>{
      return data.json();
    })
    .then(result=>{
     
     setLabel(Object.keys(result[`${fromCountry}_${toCountry}`]));
     setData(Object.values(result[`${fromCountry}_${toCountry}`]));
     
    
    
    })
  }
  

    return (
        <div className="linechart"  >
        { chart ? (  
          <>
          <Button onClick={showChart}>show conversion Rates</Button>
          {flag ?  <Line data={{labels: label,datasets: [{
              backgroundColor:'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: data }]}} /> : null }
              </>
              ): null}
      
       
              </div>
    );
};

export default LineChart;