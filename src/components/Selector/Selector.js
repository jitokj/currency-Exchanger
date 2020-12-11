import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

const Selector = () => {
    const classes = useStyles();
  const [values, setValues] = React.useState("");
  const [country,setCountry] = React.useState("");

  useEffect(()=>{
      fetch("https://free.currconv.com/api/v7/countries?apiKey=901278837b02f6df6c61")
      .then(response=> {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      }).then(data=> {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data) })
        .catch(e=>console.log(e));
  },[]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeAmount = (event) => {
    setValues(event.target.value);
  
  };

    return (
        <div className="selector">
          <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <OutlinedInput
            value={values}
            onChange={handleChangeAmount}
            labelWidth={60}
          />
        </FormControl>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="selector__label">Countries</InputLabel>
        <Select
          labelId="selector-label"
          value={country}
          onChange={handleChange}
          label="Countries"
        >
          <MenuItem value={"India"}>India</MenuItem>
          <MenuItem value={"USA"}>USA</MenuItem>
          <MenuItem value={"UK"}>UK</MenuItem>
        </Select>
      </FormControl>
        </div>
    );
};

export default Selector;