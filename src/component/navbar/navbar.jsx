import React, { Fragment } from 'react';
import './navbar.css';
import Li from '../Li/Li'


export let Navbar = () => {
    return (

        <Fragment>

            <div className="NAVBARMAIN">
                <ul className="navbarUl">
                    <Li name="Home" />
                    <Li name="ABOUT US" />
                    <Li name="JOBS" />
                    <Li name="CLIENTS" />
                    <Li name=" CONTACT US" />
                </ul>
            </div>
        </Fragment>
    )
}