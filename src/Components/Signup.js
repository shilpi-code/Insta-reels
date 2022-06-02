import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import insta from '../Assets/Instagram.png';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

import './Signup.css';

export default function Signup() {
  const useStyles= makeStyles({
    text1:{
      color:'grey',
      textAlign:'center'
    }
  })
  const classes= useStyles();
  return (
    <div className="signupwrapper">
      <div className="signupCard">
      <Card variant="outlined">
        <CardContent>
        <div className="insta-logo">
                    <img src={insta} alt="" />
          </div>
          <Typography className={classes.text1} variant="subtitle1">
          Sign up to see photos and videos from your friends
          </Typography>
         {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
         <TextField id="outlined-basic" label="Email" fullWidth={true} margin="dense" size="small"variant="outlined" />
         <TextField id="outlined-basic" label="Password" fullWidth={true} margin="dense" size="small" variant="outlined" />
         <TextField id="outlined-basic" label="Full Name" fullWidth={true} margin="dense" size="small" variant="outlined" />
         <Button color="secondary" fullWidth={true} variant="outlined" margin="dense">
                    Upload Profile Image
          </Button>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
    </Card>
    </div>
    </div>
  );
}
