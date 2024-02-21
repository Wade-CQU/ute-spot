import React, { useState }from 'react'
import MenuIcon from '../assets/icons/menu-icon.svg'

const Nav = ({ logo }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleLinks = () => {
    setIsExpanded(!isExpanded);
  }

  const showLinks = () =>{
    setIsExpanded(true);
  }

  const hideLinks = () => {
    setIsExpanded(false);
  }

  return (
    <div className='nav-container'>
        <ul className='nav'>
            
            <h2>UteSpot</h2>

            <ul className='nav nav-width justify-end'>
                <li className='nav-item'>
                    <a href='/details' className='nav-link' >VIEW RANGE</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' >FIND A DEALER</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' >APPS</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' >CONTACT</a>
                </li>
                
            </ul>
            <img src={MenuIcon} onClick={toggleLinks} onMouseEnter={showLinks}></img>   
        </ul>
        
        <div className='nav-links-expanded' onMouseLeave={hideLinks} style={isExpanded ? { display: 'block'} : {display: 'none'}}>
            <li className='nav-item'>
                <a href='/details' className='nav-link' >VIEW RANGE</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' >FIND A DEALER</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' >APPS</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' >CONTACT</a>
            </li>
        </div>
    </div>
  )
}

export default Nav
