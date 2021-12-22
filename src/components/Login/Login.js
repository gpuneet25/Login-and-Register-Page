import * as React from 'react';
import './Login.css'
import {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = useState()
  const history = useHistory()

  const handleEmailChange =(e) => {
      setEmail(e.target.value)

  }

  const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  
  const [password, setPassword] = useState()

  const handlePasswordChange = (e)=> {
      setPassword(e.target.value)
  }
  
  const handleClick = () => {

      if (!email || !password) {
          return console.log("Please provide email and password")
      }

      if (!validateEmail(email)) {
          return console.log("Please provide correct email")
      }

      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("token", "hiuwehrjiw4h3u4j54i5394pu4h3j34kjb2h3b4n23jtopfivw2u4h__(0ifjrfl")
      // history.push("/signedin")
  }

  return (
    <div>
      <Button variant="standard" onClick={handleClickOpen}>
        LOGIN
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle ><h2>Login Here!</h2></DialogTitle>
        <DialogContent className='container'>
          <DialogContentText>
            To book your tickets, please enter your Login Details here.
          </DialogContentText>
          <form>
                            <div className="signpage-card-right-box-input">
                                <div className="signpage-card-right-box-input-data">
                                    <div className="signpage-card-right-box-input-data-email">
                                    <input  onChange={handleEmailChange} className="email1" type="email" placeholder="Enter your Email" />
                                    </div>
                                    <div className="signpage-card-right-box-input-data-password">
                                    <input onChange={handlePasswordChange} className="password1" type="password" placeholder="Password" />
                                    </div>
                                </div>
                            </div>
                            </form>
        </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Go Back!</Button>
                {/* <Button onClick={handleClose}>Submit</Button> */}
                            <Stack spacing={2} direction="row">
                            <Button  onClick={handleClick} variant="contained">LogIn</Button>
                            </Stack>
                </DialogActions>
      </Dialog>
    </div>
  );
}
