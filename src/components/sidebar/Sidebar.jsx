import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar-div'>
            <ul className='sidebar-ul-element'>
                <NavLink to='/' className='navlink-element'>
                    <li className='sidebar-li-element'>Dashboard</li>
                </NavLink>
                <NavLink to='/departments' className='navlink-element'>
                    <li className='sidebar-li-element'>Departments</li>
                </NavLink>
                <NavLink to='/products' className='navlink-element'>
                    <li className='sidebar-li-element'>Products</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar
