import React from 'react';
import './navbar.css'

export let Navbar = () => {
    return (<div>

        <div className="NAVBARMAIN">
            <ul className="navbarUl">
                <li>
                    <a>
                        HOME
                   </a>
                </li>
                <li>
                    <a>
                        ABOUT US
                   </a>
                </li>
                <li>
                    <a>
                        JOBS
                   </a>
                </li>
                <li>
                    <a>
                        CLIENTS
                   </a>
                </li>
                <li>
                    <a>
                        CONTACT US
                   </a>
                </li>
            </ul>
        </div>
    </div>)
}