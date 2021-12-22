import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './Bus.css';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Bus = () => {

    const[from, setFrom]= useState()
    const[to, setTo] = useState()
    const[ddate, setDdate] = useState()
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

    const handleDateChange =(e) => {
        setDdate(e.target.value)

    }
    // localStorage.setItem("Departure", ddate)

    const handleBooking = () => {
        let booking = {
            from,
            to,
            ddate,
        }
        localStorage.setItem("booking", JSON.stringify(booking))
        setResponse(true)
    }

    useEffect(() => {
        setBookingData(JSON.parse(localStorage.getItem("booking")))
    }, [showResponse])

    return (
        <div className='main-bus'>
            <Navbar />
            <div className='main-bus-section'>
                <div className='main-bus-section-content'>
                    <DirectionsBusIcon id="busicon" />
                    Bus Booking
                </div>

               <div className='main-bus-section-book'>
                 <div className='main-bus-section-inner'>
                    <div className='main-bus-section-inner-card'>
                         <Box
                         component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '20ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField onChange={handleFromChange} id="standard-basic" label="From" variant="standard" />
                            {/* <SwapHorizontalCircleIcon /> */}
                            <TextField onChange={handleToChange} id="standard-basic" label="To" variant="standard" />
                            <TextField
                                    id="standard-number" onChange={handleDateChange}
                                    label="Departure"
                                    type="date"
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    variant="standard"
                                    />
                            {/* <TextField onChange={handleDateChange} id="standard-basic" label="Date" variant="standard" /> */}
                            </Box>
                            <div className='searchbtnb'>
                            <Stack spacing={2} direction="row">
                            <Button onClick={handleBooking} variant="outlined">Book</Button>
                            </Stack>
                            </div>

                    </div>
                    {
                    showResponse && bookingData &&
                    <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="success">Your Booking has been confirmed from {bookingData.from} to {bookingData.to} on {bookingData.ddate}. Thankyou! </Alert>
                    </Stack>
                }
            </div>
        </div>
        </div>
        </div>
    )
}

export default Bus
