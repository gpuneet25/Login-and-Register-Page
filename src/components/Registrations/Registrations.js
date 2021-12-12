import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Registrations = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push("/signin")
    }

    return (
        <div className="signinpage">
            <div className="signpage-card-right-box-text">
            <Alert severity="success" color="info">
                Register Successfully!
            </Alert>
            </div>
            <div className="btn1"> 
                <Stack spacing={2} direction="row">
                <Button onClick={handleClick} variant="contained">Click here to Login</Button>
            </Stack>
            </div>
        </div>
    )
}

export default Registrations
