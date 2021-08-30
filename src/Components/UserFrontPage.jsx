import React from 'react'
import Enquiry from '@material-ui/icons/Chat';
import Car from '@material-ui/icons/LocalCarWash';
import Phone from '@material-ui/icons/ContactPhone';
import { Link } from 'react-router-dom'
export const UserFrontPage = (props) => {
    return (
        <div className="userFront-Container">
            <Link to="/bookService">
                <div className="div-button" color="primary">Book Your Service  <Car /></div>
            </Link>
            <br />
            <br />
            <div className="div-button" color="primary">Pink Slip Enquiry  <Enquiry /></div>
            <br />
            <br />
            <Link to="/contactUs">
                <div className="div-button" color="primary">Contact Us  <Phone /></div>
            </Link>
        </div>
    )
}
