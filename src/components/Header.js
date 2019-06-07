import React from 'react'
import shelfieIcon from '../assets/shelfie_icon.png'
import { Link } from 'react-router-dom'

export default function Header(props){
    
    return(
        <div className="header">
            <img src={shelfieIcon} alt="shelfiLogo"/>
            <h1>Shelfie</h1>
            <div className="header_link_box">
                <Link to='/'><button
                    className="header_link"
                >Dashboard</button></Link>
                <Link to='/add'><button
                    className="header_link"
                >Add Inventory</button></Link>
            </div>
        </div>
    )
    
}