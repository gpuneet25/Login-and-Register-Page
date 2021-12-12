import React, {useState, useEffect} from 'react'
import './Signin.css'
import { Link, useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Signup = (props) => {

    const [email, setEmail] = useState()
    const history = useHistory()

    const handleEmailChange =(e) => {
        setEmail(e.target.value)

    }
    
    const [password, setPassword] = useState()

    const handlePasswordChange = (e)=> {
        setPassword(e.target.value)
    }
    
    const handleClick = () => {

        if (!email || !password) {
            return console.log("Please provide email and password")
        }

        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        localStorage.setItem("token", "hiuwehrjiw4h3u4j54i5394pu4h3j34kjb2h3b4n23jtopfivw2u4h__(0ifjrfl")
        history.push("/signedin")
    }


    return (
        <>
        <div className="signpage">
            <div className="signpage-card">
                <div className="signpage-card-left">
                     <h5><Link to="/home"> Go Back! </Link></h5>
                </div>
                <div className="signpage-card-right">
                        <div className="signpage-card-right-box">
                            <div className="signpage-card-right-box-text">
                            <div className="signpage-card-right-box-text-header">
                                   <h2> Login Here! </h2>
                            </div>
                            <div className="signpage-card-right-box-text-element">
                            <Stack spacing={2} direction="row">
                                <h4>New User?</h4>
                                <Link to="/registration" ><Button variant="text" >Register here</Button> </Link>
                            </Stack>
                            </div>
                            </div>
                            
                            <div className="signpage-card-right-box-input">
                                <div className="signpage-card-right-box-input-data">
                                    <div className="signpage-card-right-box-input-data-email">
                                    <input  onChange={handleEmailChange} className="email1" type="text" placeholder="Enter your Email" />
                                    </div>
                                    <div className="signpage-card-right-box-input-data-password">
                                    <input onChange={handlePasswordChange} className="password1" type="password" placeholder="Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn1"> 
                            <Stack spacing={2} direction="row">
                            <Button onClick={handleClick} variant="contained">LogIn</Button>
                            </Stack>
                            </div>
                        </div>
                </div>
            </div>   
        </div>
        </>
    )
}

export default Signup
