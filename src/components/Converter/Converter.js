import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Selector from '../Selector/Selector';




const Converter = () => {

  

   
    return (
        <div className="converter">
           <Card>
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Currency Converter
        </Typography>
         <Selector />
     
      </CardContent>
     </Card>
        </div>
    );
};

export default Converter;