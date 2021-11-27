import React, { useState, useEffect } from 'react'
import './Header.css'
import DrawerToggleButton from './DrawerToggleButton'
import logo from '../img/logo.png';
import getTestData from '../testData'

import Login from './Login';

const Header = props => {
    function clicked(){
        props.setShow(!props.show);
    }

    const [searchCount, setSearchCount] = useState(Number.MIN_VALUE);

    useEffect(()=> {
        try{
            getTestData.getSearchCount().then(count => {
                console.log(count)
                setSearchCount(count)
            }).catch(e => {
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
            setSearchCount(Number.MIN_VALUE)
        }
    })
    return(
        <header class="header">
            <nav class="header_nav">
                
                <div class="header_logo">
                    <img src={logo} alt="MidWays Logo" height="70%"></img>
                </div>
                <div className="spacer" />
                
                <div className="header_nav_items">
                    <div id="total-trip-counter">{searchCount}+ Trips Planned</div>
                    
                </div>
                <div class="header_nav_items">    
                </div>
                <div onClick={clicked}>
                    <DrawerToggleButton show={props.show} setShow={props.setShow}/>
                </div>
                <div className="login">
                    <Login onAuth={props.onAuth}></Login>
                </div>
            </nav>
        </header>
    )
}

export default Header

