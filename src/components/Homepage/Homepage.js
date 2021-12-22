import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import './Homepage.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import Navbar from '../Navbar/Navbar';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import axios from 'axios';

const Signinpage = () => {

    const[from, setFrom]= useState()
    const[to, setTo] = useState()
    const[ddate, setDdate] = useState()
    const[rdate, setRdate] = useState()
    const [showResponse, setResponse] = useState(false)
    const [bookingData, setBookingData] = useState()


    const handleFromChange =(e) => {
        setFrom(e.target.value)

    }
    // localStorage.setItem("From", from)

    const handleToChange =(e) => {
        setTo(e.target.value)

    }
    // localStorage.setItem("To", to)

    const handleDepartureDateChange =(e) => {
        setDdate(e.target.value)

    }
    // localStorage.setItem("Departure", ddate)

    const handleReturnDateChange =(e) => {
        setRdate(e.target.value)

    }
    // localStorage.setItem("Return", rdate)

    const [isReturn, setReturn] =useState(false)

    const handleReturn = () => {
        setReturn(true)
    }

    const handleOneWay =() =>{
        setReturn(false)
    }

    const handleBooking = () => {
        let booking = {
            from,
            to,
            ddate,
            rdate,
            isReturn
        }
        localStorage.setItem("booking", JSON.stringify(booking))
        setResponse(true)

        axios.post("https://aviation-reference-data.p.rapidapi.com/icaoType/B738", {
            pnr: '6441757962'
        }, {
            headers: {
                'x-rapidapi-host': 'aviation-reference-data.p.rapidapi.com',
                'x-rapidapi-key': 'f456cde8fbmsh658c413e2fa17c5p11b094jsn702ea17e0fa1'
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setBookingData(JSON.parse(localStorage.getItem("booking")))
    }, [showResponse])

    return (
        <div className='main-container-homepage'>
            <Navbar />
            <div className='main-container-homepage-section'>
                <div className='main-container-homepage-section-content'>
                    <AirplaneTicketIcon id='flighticon'/>
                        Flight Booking
                </div>

                <div className='main-container-homepage-section-book'>
                <div className='main-container-homepage-section-book-inner'>
                    <div className='main-container-homepage-section-book-inner-title'>
                    <Stack spacing={2} direction="row">
                    <Button onClick={handleOneWay} variant="text">One Way</Button>
                    <Button onClick={handleReturn} variant="text">Round Trip</Button>
                    </Stack>
                    </div>
                    <div className='main-container-homepage-section-book-inner-card'>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                className='main-container-homepage-section-book-inner-card-box'
                            >
                            <TextField className="inputbox" onChange={handleFromChange} id="standard-basic" label="From" variant="standard" />
                            <SwapHorizontalCircleIcon id="swap" />
                            <TextField className="inputbox" onChange={handleToChange} id="standard-basic" label="To" variant="standard" />

                            <TextField
                                    id="standard-number" onChange={handleDepartureDateChange} className="inputbox"
                                    label="Departure"
                                    type="date"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    variant="standard"
                                    />
                            <TextField
                                    id="standard-number" onChange={handleReturnDateChange} className="inputbox"
                                    label="Return"
                                    type="date"
                                    disabled={!isReturn}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    variant="standard"
                                    />
                            {/* <TextField onChange={handleDepartureDateChange} id="standard-basic" type="date" label="Departure" variant="standard" /> */}
                            {/* <TextField onChange={handleReturnDateChange} disabled={isReturn} type="date" id="standard-basic" label="Return" variant="standard" /> */}
                            <TextField id="standard-basic" label="Travellers" variant="standard" className="inputbox" />
                            <TextField id="standard-basic" label="Class" variant="standard" className="inputbox" />
                            
                            </Box>
                            <div className='searchbtn'>
                            <Stack spacing={2} direction="row">
                            <Button  onClick={handleBooking} variant="outlined">Book</Button>
                            </Stack>
                            </div>
                    </div>
                </div>
                
                </div>
                <div className='bookingconfirm'>
                {
                    showResponse && bookingData &&
                    <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">Your Booking has been confirmed from {bookingData.from} to {bookingData.to} on {bookingData.ddate} {bookingData.isReturn && `and your return journey is on ${bookingData.rdate}`}. Thankyou! </Alert>
                    </Stack>
                }
                </div>
            </div>
        </div>
    )
}

export default Signinpage
