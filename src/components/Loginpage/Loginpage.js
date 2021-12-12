import React, {useState} from 'react'
import './Loginpage.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Loginpage = (props) => {

    const [email, setEmail] = useState()

    const handleEmailChange =(e) => {
        setEmail(e.target.value)

    }
    const [password, setPassword] = useState()

    const handlePasswordChange = (e)=> {
        setPassword(e.target.value)
    }
    
    return (
        <>
        <Navbar />
        <div className="card">
            <div className="head" > 
                    Welcome <br />
                      to <br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"/>
            </div>

            <div className="gmail">
                Continue to Gmail
            </div>
            <input  onChange={handleEmailChange} className="email" type="text" placeholder="Enter your Email" />
            <input onChange={handlePasswordChange} className="password" type="password" placeholder="Password" />
            <div className="footer">
                <Link to="/registration"> <button> Create account</button> </Link>
                <button> Sign in</button>
            </div>
        </div>
        
        </>
    )
}

export default Loginpage
