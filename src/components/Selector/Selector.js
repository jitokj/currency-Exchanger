import React, { useEffect } from 'react';
import "./Selector.css";


import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from '@material-ui/core';




const Selector = () => {
    
  const [country, setCountry] = React.useState("Country");
  const [countries,setCountries] = React.useState([]);

  useEffect(()=>{
    
    let test = [];
      fetch("https://free.currconv.com/api/v7/countries?apiKey=901278837b02f6df6c61")
      .then(response=> {
        return response.json();
      }).then(data=> {
       
      for (const property in data.results){

        test.push(data.results[property]);
      }
      setCountries(test);
      })
        .catch(e=>console.log(e));
       
       
  },[]);

   const onCountryChange = (e)=>{
     e.preventDefault();
     const selectedCountry = e.target.value;
     setCountry(selectedCountry);
   }

  



    return (
        <div className="selector">
        <form className="selector__form"  autoComplete="off"  >
        <TextField color="primary" className="selector__form__textField" type="number" variant="outlined" label="amount" required />
        </form>
        <FormControl className="selector__formControl">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
       <MenuItem value="Country">Country</MenuItem>
       {
         countries.map((country)=>(
          
          <MenuItem key={country.id}  value={country.name}>{country.name}</MenuItem>
        
         ))
       }
     </Select>
     </FormControl>
     <FormControl className="selector__formControl">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
       <MenuItem value="Country">Country</MenuItem>
       {
         countries.map((country)=>(
          
          <MenuItem key={country.id}  value={country.name}>{country.name}</MenuItem>
        
         ))
       }
     </Select>
     </FormControl>
        </div>
    );
};

export default Selector;