import React, { useEffect } from 'react';
import "./Selector.css";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, CardActions, TextField } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';





const Selector = () => {
    
  const [fromCountry, setFromCountry] = React.useState("Country");
  const [toCountry, setToCountry] = React.useState("Country");
  const [countries,setCountries] = React.useState([]);
  const [converted, setConverted] = React.useState("");
  const [amount,setAmount] = React.useState(0);
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

   const onFromCountryChange = (e)=>{
     e.preventDefault();
     const selectedCountry = e.target.value;
     setFromCountry(selectedCountry);
   }

   const onToCountryChange = (e)=>{
    e.preventDefault();
    const selectedCountry = e.target.value;
    setToCountry(selectedCountry);
  }

  const onAmountChange = (e)=>{
    const selectedamount = e.target.value;
    const value = selectedamount.replace(/[^0-9]/g, '');
   setAmount(value);
    
   
  }

   const onConvertHandler = ()=>{
   fetch(`https://free.currconv.com/api/v7/convert?q=${fromCountry}_${toCountry}&compact=ultra&apiKey=901278837b02f6df6c61`)
        .then((result)=>{
          return result.json();
        })
        .then((result)=>{
          console.log(result[`${fromCountry}_${toCountry}`]);
          let conversionRate = result[`${fromCountry}_${toCountry}`];
          let convertedValue = conversionRate*amount;
          setConverted(convertedValue);
        })
        .catch(e=>{
          console.log(e);
        })
    
   }
  



    return (
      <>
        <div className="selector">
        <form className="selector__form"  autoComplete="off"  >
        <TextField value={amount}
         onChange={onAmountChange} color="primary"
          className="selector__form__textField" type="number"
           variant="outlined" label="amount"
            required error={amount < 0}
             helperText={ amount < 0 ? 'Min. 0' : '' }
             inputProps={{
            pattern: "[0-9]*"}} />
        </form>
        <FormControl className="selector__formControl">
        <Select variant="outlined" value={fromCountry} onChange={onFromCountryChange}>
       <MenuItem value="Country">Country</MenuItem>
       {
         countries.map((country)=>(
          
          <MenuItem key={country.id}  value={country.currencyId}>{country.currencyId} {country.currencyName}</MenuItem>
        
         ))
       }
     </Select>
     </FormControl>
     <FormControl className="selector__formControl">
        <Select variant="outlined" value={toCountry} onChange={onToCountryChange}>
       <MenuItem value="Country">Country</MenuItem>
       {
         countries.map((country)=>(
          
          <MenuItem key={country.id}  value={country.currencyId}>{country.currencyId} {country.currencyName}</MenuItem>
        
         ))
       }
     </Select>
     </FormControl>
     <div className="selector__arrow">
     <ArrowRightAltIcon />
     </div>
     <form noValidate autoComplete="off">
      <TextField value={converted} variant="filled" />
      </form>
        </div>
        <CardActions className="selector__button">
        <Button onClick={onConvertHandler} size="small">Convert</Button>
      </CardActions>
        </>
    );
};

export default Selector;