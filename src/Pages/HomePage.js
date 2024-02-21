import React from 'react'
import logo from '../assets/Toyota_Logo_Flat_46x37.svg';
import hiluxCover from '../assets/threeUtesTogetherEdit.png'
import infoImg1 from '../assets/MVP_Hatchbacks_Desktop.png'
import infoImg2 from '../assets/MVP_SUV_Desktop.png'
import infoImg3 from '../assets/MVP_Utes_Desktop.png'
import discoverImg1 from '../assets/UsedCardImg.png'
import discoverImg2 from '../assets/Accessories.png'
import discoverImg3 from '../assets/Discover03.png'
import footerImg from '../assets/footerEdited.png'
import { useState, useEffect } from 'react'
import LargeTitle from '../Components/LargeTitle';
import MediumTitle from '../Components/MediumTitle';
import SmallTitle from '../Components/SmallTitle';
import CoverImage from '../Components/CoverImage';
import InfoCard from '../Components/InfoCard';
import InfoCardLarge from '../Components/InfoCardLarge';
import Nav from '../Components/Nav';


//function used for info cards to transition in when they enter user's screen
function useIsInViewport(ref) {
    const [isInViewPort, setIsInViewport] = useState(false);
  
    useEffect(() => {
      function handleScroll() {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const divHeight = bottom - top
        return setIsInViewport(window.innerHeight - top > divHeight/2);
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [ref, isInViewPort]);
    return isInViewPort;
  }
  

const HomePage = () => {
  return (
    <>
      <Nav logo={logo}></Nav>
      <LargeTitle text='Welcome to UteSpot'></LargeTitle>
          <h2 style={{color: 'grey', letterSpacing: 5, fontWeight: 400, padding: 10, fontStyle: 'italic'}}>Go big, save big</h2>
          <CoverImage imgSrc={hiluxCover}></CoverImage>
          <MediumTitle text='Find your ideal Ute'></MediumTitle>
          <SmallTitle text='Browse our vehicles' />
          <div className='info-card-container space-above-small'>
            <InfoCard useIsInViewport={useIsInViewport} img={infoImg1} title='Work' description='Perfect for work and play' fadeInDelaySeconds={0.2}/>
            <InfoCard useIsInViewport={useIsInViewport} img={infoImg2} title='Comfort' description='Extreme comfort even in the roughest terrain' fadeInDelaySeconds={0.4}/>
            <InfoCard useIsInViewport={useIsInViewport} img={infoImg3} title='Power' description='Technology and power to get you anywhere in style' fadeInDelaySeconds={0.6}/>
          </div>
          <MediumTitle text='Discover more from UteSpot'/>
          <SmallTitle text="We're here for tomorrow, as well as today." />
          <div className='info-card-container  space-above-small'>
            <InfoCardLarge useIsInViewport={useIsInViewport} img={discoverImg1} title='Used Vehicles' linkText='FIND ONE NEAR YOU' fadeInDelaySeconds={0.2}/>
            <InfoCardLarge useIsInViewport={useIsInViewport} img={discoverImg2} title='Genuine Accessories' linkText='PERSONALISE YOUR DRIVE' fadeInDelaySeconds={0.4}/>
            <InfoCardLarge useIsInViewport={useIsInViewport} img={discoverImg3} title='Latest Tech' linkText='DISCOVER MORE' fadeInDelaySeconds={0.6}/>
          </div>
          <img src={footerImg} className='cover-img space-above'></img>
          <p className='footer-text'>This site is a project as part of Wade Cole's portfolio. Design inspired by <a href='https://www.toyota.com.au/'>Toyota.com</a>,
           this site has no affiliation with Toyota and was developed for the purpose of demonstrating website development ability only. More projects <a href='https://github.com/Wade-CQU'>here</a></p>
    </>
  )
}

export default HomePage
