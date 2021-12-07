import React, {useState} from 'react'
import './Registration.css'
import Navbar from '../Navbar/Navbar'

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
                <div className="name">
                    <div>Name</div>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>

                <div className="name">
                    <div> Date of Birth</div>
                    <input type="number" placeholder="DD/MM/YYYY" />
                </div>

                <div className="name">
                    <div> Address</div>
                    <input type="text" placeholder="Address" />
                </div>

                <div className="name">
                    <div> Pin Code </div>
                    <input type="number" placeholder="Pin Code" />
                </div>

                <div className="name">
                    <div> Email </div>
                    <input type="text" placeholder="Enter Email" />
                </div>

                <div className="name">
                    <div> Contact No </div>
                    <input type="number" placeholder="Countery Code" />
                    <input type="number" placeholder="10 digit mobile number" />
                </div>

                <div className="name">
                    <div> Password </div>
                    <input type="text" placeholder="Password" />
                </div>

                <div className="name">
                    <div>  Re-enter Password </div>
                    <input type="text" placeholder="Re-enter Password" />
                </div>

                <div className="footer">
                    <button className="registern">Register Now</button>
                </div>

            </div>

        </div>
    </div>
    </>
    )
}

export default Registration
