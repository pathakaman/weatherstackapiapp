import React from 'react';
import {NavLink} from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <NavLink class="nav-link" to="/">Current Report</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link" to="/historical">Historical Report</NavLink>
                </li>
            </ul>
        </>
    )
}