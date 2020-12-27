import React, { useEffect, useState } from 'react'
import {Switch, Link, Route, useHistory, useLocation } from 'react-router-dom'

function NavBar() {
    const [navState, updateNavState] = useState({
        location: '/'
    })
    const location = useLocation()
    useEffect(() => {
        updateNavState({...navState, location: location.pathname})
    }, [location])
    
    return(
        <nav className='NavBar' >
            <Link to='/' className={navState.location === '/' ? 'NavItemSelected' : 'NavItem'}>Home</Link>
            <Link to='/pso2' className={navState.location === '/pso2' ? 'NavItemSelected' : 'NavItem'}>PSO2</Link>
            <Link to='/dcuo' className={navState.location === '/dcuo' ? 'NavItemSelected' : 'NavItem'}>DCUO</Link>
            <Link to='/about' className={navState.location === '/about' ? 'NavItemSelected' : 'NavItem'}>About Us</Link>
        </nav>
    )
}

export default NavBar