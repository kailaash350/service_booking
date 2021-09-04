import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CarList from './CarListConstant';

export const ServicePage = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [brand, setBrand] = useState("none");

    const handleBrand = (event) =>{
         const br = document.getElementById('demo').getAttribute('data-value');
         setBrand(br)
        console.log(br);

    }

    return (
        <div className="service-container">
            <div className="logo-container">
                {
                    CarList.map((cars, key) =>

                        <div className="brand-name" id="demo" data-value={cars} key={key} onClick={handleBrand}>{cars}</div>

                    )
                }

            </div>
            <div className="logo-container">
                <p className="brand-select">Selected Car:{brand}</p>
            </div>
            <div className="car-details">
                <div className="login-fields">
                    <TextField
                        required
                        id="outlined-required"
                        label="Model"
                        value={""}
                        variant="outlined" name="userName"
                    />
                </div>
                <div className="login-fields">
                    <TextField
                        required
                        id="outlined-required"
                        label="Registration Number"
                        value={""}
                        variant="outlined" name="userName"
                    />
                </div>
                <div className="login-fields">
                    <TextField
                        required
                        id="outlined-required"
                        label="Phone Number"
                        value={""}
                        variant="outlined" name="userName"
                    />
                </div>
                <div className="login-fields">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

            </div>
            <div className="car-details">
                <div className="login-fields">
                    <Button variant="contained" color="primary" className="login-button">
                        Book Your Service</Button>
                </div>
            </div>

        </div>
    )
}
