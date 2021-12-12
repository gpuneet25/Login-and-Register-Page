import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { users } from '../../utils/data';

const Home = () => {
    return (
        <>
        <div className="main-container">
            <div className="main-container-section">.
                <div className="card3">
                    <div className="head3">
                    <h1>Welcome to MyHome!</h1>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQFY1I-EQE_RgQ/profile-displayphoto-shrink_200_200/0/1594306521484?e=1642636800&v=beta&t=2ovyIfa0L2YVkRzzyK0lHzLi5eoCT_BCqC0Cd8oT48Q" id="img2" />
                    </div>
            <div className="footer3">
           <Stack spacing={2} direction="row">
               <h4>Registered user</h4>
           <Link to="/signin" ><Button variant="text">Sign In</Button> </Link>
           </Stack>
           <Stack spacing={2} direction="row">
               <h4>New User?</h4>
           <Link to="/registration" ><Button variant="text" >Create Account</Button> </Link>
           </Stack>
             <h5><Link to="/" > Go Back! </Link></h5>
           </div>
            </div>
            </div>
            
            {/* <div style={{display: "flex", flexDirection: "column"}}>
            {users.map(u => {
                return (
                    <div>
                        {u.firstName} {u.lastName} {u.email}
                    </div>
                )
            })}
            </div> */}
        </div>
        </>
    )
}

export default Home
