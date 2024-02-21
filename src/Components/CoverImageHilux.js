import React, { useState, useEffect } from 'react'
import hiluxCover from '../assets/threeUtesTogetherEdit.png'
import hiluxCoverLarge from '../assets/threeUtesTogetherLarger.png'

const CoverImageHilux = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    //check screen size to swap image when screen size is changed
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className='cover-img-container'>
        <img src={screenWidth > 650 ? hiluxCover : hiluxCoverLarge} className='cover-img' alt='three utes'/>
        <div className='cover-img-text-top'>
            <h1>UteSpot Utes</h1>
            <h2>Built to Handle Tough Terrain</h2>
        </div>
        <div className='cover-img-button-holder'>
            <div className='cover-img-btn'>TEST DRIVE</div>
            <div className='cover-img-btn'>BUILD AND PRICE</div>
        </div>
    </div>
  )
}

export default CoverImageHilux
