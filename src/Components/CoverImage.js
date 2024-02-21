import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const CoverImage = ({imgSrc}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='cover-img-container' 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
        <img src={imgSrc} className="cover-img" alt="logo" style={{marginTop: 100}}/>
        <div className='hover-img-effect'  style={isHovered ? {opacity: 1} : {opacity: 0}}>
            <Link to={'/details'} className='collaspable-link' style={isHovered ? {transform: 'translate(-50%, 0px)' } : { transform: 'translate(-50%, 20px)'}} >DISCOVER YOUR UTE</Link>
        </div>
    </div>
  )
}

export default CoverImage
 