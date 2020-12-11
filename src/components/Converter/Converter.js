import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Selector from '../Selector/Selector';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 700,
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});


const Converter = () => {
    const classes = useStyles();
    return (
        <div className="converter">
           <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Currency Converter
        </Typography>
         <Selector />
     
      </CardContent>
      <CardActions>
        <Button size="small">Convert</Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Converter;