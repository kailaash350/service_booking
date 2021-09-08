import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CarList from './CarListConstant';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';


export const ServicePage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-evenly',
         
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));

    const [startDate, setStartDate] = useState(new Date());
    const [state, setState] = React.useState({
        brand: '',
        displayAlert:false,
    });
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

const handleSubmit = (e) =>{
    setState({displayAlert:true})
}
const classes = useStyles();
    return (
        <>
        <div className={classes.root}>
            {(state.displayAlert?          
            <Alert severity="success" onClose={(displayAlert) => {setState(!displayAlert)}}>
                You will get a confirmation message about your service soon</Alert>:
                ""
)

            }
             </div>
        <div className="service-container">
             
            <div className="logo-container">

                <Select
                    required
                    native
                    value={state.brand}
                    onChange={handleChange}
                    variant="outlined"
                    className="select-brand"
                    inputProps={{
                        name: 'brand',
                        id: 'outlined-age-native-simple'
                    }}
                >
                    <option aria-label="None" value="">Select Make</option>
                    {
                        CarList.map((cars, key) => {
                            return (
                                <option value={cars} key={key} >{cars}</option>
                            )
                        })
                    }

                </Select>

            </div>

            <div className="car-details">
                <div className="login-fields">
                    <TextField
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
                    <DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="login-fields">
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        value={""}
                        variant="outlined" name="userName"
                    />
                </div>

            </div>
            <div className="car-details">
                <div className="login-fields">
                    <Button onClick={handleSubmit} variant="contained" color="primary" className="login-button">
                        Book Your Service</Button>
                </div>
            </div>
        </div>
        </>
    )
}
