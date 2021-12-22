import React, {useState, useEffect} from 'react'
import './Navbar.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import Login from '../Login/Login'
import Logup from '../Logup/Logup'


const Navbar = () => {

    const history = useHistory()
    const [data, setData] = useState()


    const handleClick = () => {
        history.push("/signin")
    }

    const handleLogout= () => {
        localStorage.removeItem('firstName')
        window.location.reload()
    }

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("register")))
    }, [])


    return (
        <div className='main-c ontainer-homepage'>
            <div className='main-container-homepage-header'>
                    <div className='main-container-homepage-header-left'>
                        <img src='https://www.pngfind.com/pngs/m/87-878925_picture-location-maps-travel-svg-png-icon-free.png' id="travel"/>
                        <Stack spacing={2} direction="row">
                          <Link to="/" >  <Button id="btntravel" variant="contained">Puneet's Travel</Button> </Link>
                        </Stack>
                    </div>

                    <div className='main-container-homepage-header-center'>
                    <Link to="/flight" className='flight text'>  Flight </Link>
                    <Link to="/bus" className='bus text'> Bus </Link>
                    </div>

                    <div className='main-container-homepage-header-right'>           
                    {
                            data ?
                            <><h5>Hi, {data.firstName}</h5>
                            <LogoutIcon onClick={handleLogout} />
                            </>
                            :
                            <>
                                <Login/>
                                <p className='log'>/</p>
                                <Logup />
                            </>
                    }
                    </div>
            </div>
        </div>
    )
}

export default Navbar
