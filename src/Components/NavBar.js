import React from 'react'
import {Switch, Link, Route, useHistory } from 'react-router-dom'

function NavBar() {
    const history = useHistory()
    
    return(
        <nav className='NavBar' >
            <Link to='/' className={history.location.pathname === '/' ? 'NavItemSelected' : 'NavItem'}>Home</Link>
            <Link to='/pso2' className={history.location.pathname === '/pso2' ? 'NavItemSelected' : 'NavItem'}>PSO2</Link>
            <Link to='/dcuo' className='NavItem'>DCUO</Link>
            <Link to='/about' className='NavItem'>About Us</Link>
        </nav>
    )
}

export default NavBar