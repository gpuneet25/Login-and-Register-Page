import * as React from 'react';
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
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [dob, setDob] = useState()
    const [contact, setContact] = useState()
    const [confirmPassword, setConfrimPassword] = useState()

    const handleFirstNameChange =(e) => {
        setFirstName(e.target.value)

    }

    const handleLastNameChange =(e) => {
        setLastName(e.target.value)

    }

    const handleDobChange =(e) => {
        setDob(e.target.value)

    }

    const handleContactChange =(e) => {
        setContact(e.target.value)

    }

    const handleConfirmPasswordChange =(e) => {
        setConfrimPassword(e.target.value)

    }
    
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
        if (!email || !password || !firstName || !lastName || !dob || !contact || !confirmPassword) {
            return console.log("Please provide email and password")
        }

        if (password !== confirmPassword) {
            return console.log('password must be same')
        }

        if (!validateEmail(email)) {
            return console.log("Please provide correct email")
        }

        setOpen(false)
        history.push("/")

        let register = {
          firstName,
          email,
          password,
          contact,
      }
      localStorage.setItem("userdetails", JSON.stringify(register))
    }


  return (
    <div>
      <Button variant="standard" onClick={handleClickOpen}>
        SIGNUP
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register Here!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To book your tickets, please register yourself here.
          </DialogContentText>
                        <div className="signuppage-card-right-box-input">
                                <div className="signuppage-card-right-box-input-data">
                                    <div className='flex'>
                                        <TextField id="outlined-basic" onChange={handleFirstNameChange} className="input-text" label="First Name" variant="outlined" />
                                        <TextField id="outlined-basic"  onChange={handleLastNameChange} className="input-text" label="Last Name" variant="outlined" />
                                    </div>
                                    <div className="signuppage-card-right-box-input-data2">
                                        <TextField required type="date" id="outlined-basic" onChange={handleDobChange} className="input-text"  label="DOB" variant="outlined" />
                                        <TextField id="outlined-basic" onChange={handleEmailChange} className="input-text" type="email"  label="Email" variant="outlined" />
                                        <TextField type="number" id="outlined-basic" onChange={handleContactChange} className="input-text"  label="Contact No" variant="outlined" />
                                        <TextField type="password" id="outlined-basic" onChange={handlePasswordChange} className="input-text"  label="Password" variant="outlined" />
                                        <TextField required type="password" id="outlined-basic" onChange={handleConfirmPasswordChange} className="input-text"  label="Confirm Password" variant="outlined" />
                                    </div>                                
                                </div>
                            </div>
        </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Go Back!</Button>
                {/* <Button onClick={handleClose}>Submit</Button> */}
                            <Stack spacing={2} direction="row">
                            <Button onClick={handleClick} variant="contained">Register</Button>
                            </Stack>
                </DialogActions>
      </Dialog>
    </div>
  );
}
