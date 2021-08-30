import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, MenuItem, Select } from '@material-ui/core';



export const ContactPage = () => {


const [car, setCar] = useState(' ');

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        setCar(e.target.value)
    }
    return (
        <div className="contact-container">
            <h1>Contact Details</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-field">

                    <TextField
                        id="standard-full-width"
                        label="Name"
                        placeholder="Name"
                        margin="normal"
                    />

                </div>
                <div className="form-field">

                    <TextField
                        id="standard-full-width"
                        label="Phone"
                        placeholder="Phone"
                        margin="normal"
                    />

                </div>
                <div className="form-field">
                <Select className="select-car" id="demo-simple-select" placeholder="Select Car" onChange={handleChange}  
                value={car}>
                <MenuItem value={1}>Toyota</MenuItem>
                <MenuItem value={2}>Honda</MenuItem>
                <MenuItem value={3}>Holden</MenuItem>
                <MenuItem value={4}>Other</MenuItem>
                </Select>
                    
                </div>
                <div className="form-field">
                    <TextField
                        id="standard-full-width"
                        label="Vehicle Rego or VIN"
                        placeholder="Rego"
                        margin="normal"
                    />

                </div>
                <br/>
                <div className="form-field">
                    <Button className="button-contact" variant="contained" color="primary">Leave rest to Us</Button>
                </div>


            </form>


        </div>
    )
}
