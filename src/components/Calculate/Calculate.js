import React, {useState} from 'react'
import './Calculate.css'
import Navbar from '../Navbar/Navbar'

const Calculate = () => {
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const [result, setResult] = useState()

    const handleValue1 =(e) =>{
        setValue1(e.target.value)
    }

    const handleValue2 =(e) =>{
        setValue2(e.target.value)
    }

    const increment =() => {
        setResult(parseInt(value1) + parseInt(value2))

    }
    const decrement =()=>{
        setResult(value1 - value2)
    }

    const multiple=()=> {
        setResult(value1 * value2)
    }

    const divide =() => {
        setResult(value1 / value2)
    }
    

    return (
        <>
        <Navbar />
        <div className="card2">
                <div className="calcuator">
                    Calculator
                </div>

                <div className="inputvalue">
                    <div className="inputvalue-left">
                        <input  onChange={handleValue1} type="number"  id="val1"/>
                        <input  onChange={handleValue2} type="number" id="val2"/>
                    </div>

                    <div className="inputvalue-right">
                        {result}
                    </div> 
                </div>

                <div className="operations">
                    <div onClick={increment} className="calculate-increment">+</div>
                    <div onClick={decrement} className="calculate-decrement">-</div>
                    <div onClick={multiple} className="calculate-multiple">*</div>
                    <div onClick={divide} className="calculate-divident">/</div>
                </div>
        </div>
        </>
    )

}

export default Calculate
