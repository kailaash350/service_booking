import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function JobCards() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Job Card
        </Typography>
        <Typography variant="h5" component="h2">
          Service for Honda City
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          23/09/21
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {"General Service"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Details</Button>
        <Button size="small">Confirm Booking</Button>

      </CardActions>
    </Card>
  );
}


export default JobCards
