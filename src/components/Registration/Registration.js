import React, {useState} from 'react'
import './Registration.css'
import Navbar from '../Navbar/Navbar'
import { TextField } from '@mui/material'

const Registration = () => {

    
    return (
        <>
        <Navbar />
    <div className="body">
        <div className="card1">
            <div className="head1">
                Registration Form
            </div>

            <div className="section">
                {/* <ul className="section-left">
                    <li>Name</li>
                    <li>Date of Birth</li>
                    <li>Address</li>
                    <li >Pin Code</li>
                    <li>Email</li>
                    <li > Contact No</li>
                    <li>Password</li>
                    <li >Re-enter Password</li>
                </ul> */}
                    <div className='flex'>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    </div>
                    <TextField id="outlined-basic" className="input-text"  label="DOB" variant="outlined" />
                    <TextField id="outlined-basic"  className="input-text"  label="Address" variant="outlined" />
                    <TextField id="outlined-basic"  className="input-text"  label="Pin Code" variant="outlined" />
                    <TextField id="outlined-basic"  className="input-text"  label="Email" variant="outlined" />
                    <TextField id="outlined-basic"  className="input-text"  label="Contact No" variant="outlined" />
                    <TextField id="outlined-basic"  className="input-text"  label="Password" variant="outlined" />
                <TextField id="outlined-basic"  className="input-text"  label="Confirm Password" variant="outlined" />
            </div>

                <div className="footer">
                    <button className="registern">Register Now</button>
                </div>


        </div>
    </div>
    </>
    )
}

export default Registration
