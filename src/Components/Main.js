import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../Syndicate_X4_no_background.png'

function Main () {
    const history = useHistory()
    console.log(history)
    return(
        <div>
            <div className='App-header'>
        
                <img src={logo}></img>
                <h3>||In Development||</h3>
            </div> 
        </div>
    )
}
export default Main