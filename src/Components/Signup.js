import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea,CardActions  } from "@mui/material";
import insta from "../Assets/Instagram.png";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link} from 'react-router-dom';

import "./Signup.css";

export default function Signup() {
  const useStyles = makeStyles({
    text1: {
      color: "grey",
      textAlign: "center",
    },
    card2:{
      height:'7.5vh',
      marginTop:'2%'
  }
  });
  const classes = useStyles();
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
            {true && (
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            )}
            <TextField
              id="outlined-basic"
              label="Email"
              fullWidth={true}
              margin="dense"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              fullWidth={true}
              margin="dense"
              size="small"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Full Name"
              fullWidth={true}
              margin="dense"
              size="small"
              variant="outlined"
            />
            <Button
              color="secondary"
              fullWidth={true}
              variant="outlined"
              margin="dense"
              startIcon={<CloudUploadIcon />}
              component='label'
            >
              Upload Profile Image
              <input type='file' accept='image/*' hidden />
            </Button>
          </CardContent>
          <CardActions >
          <Button
              color="primary"
              fullWidth={true}
              variant="contained"
            >
              Signup
            </Button>
          </CardActions>
          <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        By signing up, you agree to our Terms, Conditions and Cookies policy.
                    </Typography>
                </CardContent>

        </Card>
        <Card variant="outlined" className={classes.card2}>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        Having an account ? <Link to="/login"  style={{textDecoration:'none'}}>Login</Link>
                    </Typography>
                </CardContent>
            </Card>
      </div>
    </div>
  );
}
