import React from 'react'
import shelfieIcon from '../assets/shelfie_icon.png'

export default function Header(props){
    
    return(
        <div className="header">
            <img src={shelfieIcon} alt="shelfiLogo"/>
            <h1>Shelfie</h1>
        </div>
    )
    
}