import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="main-container">
            <div className="main-container-header">
                 <div className="main-container-header-left">
                    <Link to="/home" className="textdecoration"> Home </Link>
                </div>

                <div className="main-container-header-right">
                    <Link to="/signin" className="textdecoration"> Sign in</Link>
                    <Link to="/registration" className="textdecoration"> Create account </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
