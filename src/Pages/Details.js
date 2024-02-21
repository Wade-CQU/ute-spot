import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CoverImageHilux from '../Components/CoverImageHilux'
import TripleIconInfoBanner from '../Components/TripleIconInfoBanner';
import footerImg from '../assets/footerEdited.png'
import SectionHeading from '../Components/SectionHeading'
import RangeDisplay from '../Components/RangeDisplay'
import towingVideo from '../assets/hiluxTowing.mp4'
import PowerandTorqueSVG from '../assets/icons/icon_indicator.svg'
import ChasisSVG from '../assets/icons/icon_AWD.svg'
import TowBarSVG from '../assets/icons/icon_Acc_Tow_bar_48x48.svg'
import DakarDNASVG from '../assets/icons/DakarDNA.svg'
import MadeToLastSVG from '../assets/icons/MadeToLast.svg'
import RoomForTheCrewSVG from '../assets/icons/Room.svg'



const Hilux = () => {

    //create objects that contain the different ute models and respective information
    const uteModels = [
        {name: 'WORK', desc: 'Everything you need to get through the work day, and everything you want once the weekend comes around.'}, 
        {name: 'COMFORT', desc: 'Full of advanced technology, packed with design features. Takes comfort to new heights.'}, 
        {name: 'POWER', desc: 'An upgraded exterior plus all the power you’ll need to tackle the most rugged terain.'}
    ];

    const uteColors = ['WHITE', 'GREY', 'BLACK']

    //details for info banners in performance section
    const performanceInfoBannerItems = [
      {icon: PowerandTorqueSVG, title: 'Power and torque', desc: 'With up to 165kW of power and 550Nm of torque, we offer the grunt you need to go harder, faster and further.'},
      {icon: TowBarSVG, title: 'Towing power', desc: 'Load up. UteSpot utes have advanced towing technology with a 3.5 tonne braked towing capacity.'},
      {icon: ChasisSVG, title: '4x4', desc: 'The UteSpot 4x4 Double-Cab Auto, WORK, COMFORT and POWER feature rear differential lock, low range 4WD and Downhill Assist Control.'}
    ]

    //details for info banners in design section
    const designInfoBannerItems = [
      {icon: DakarDNASVG, title: 'Design first', desc: 'With rally-inspired finishes, an upgraded chassis and top-grade performance, UteSpot utes are the peak of design and comfort.'},
      {icon: MadeToLastSVG, title: 'Made to last', desc: 'UteSpot utes aren’t just designed to look tough. Its design was led by function, then tested in the rough and tumble of Australian conditions.'},
      {icon: RoomForTheCrewSVG, title: 'Room for the crew', desc: 'Double-Cab variants have room for 5, so everyone can pile in for every kind of journey, from a lunch run to a fishing expedition.'}
    ]

    //reference to video component used in performance section
    const videoRef = useRef(null);
    //hook to determine when the video is in view
    const { ref, inView } = useInView({
      threshold: 0,
    });
  
    //Play video only when it appears on users screen
    useEffect(() => {
      var isPlaying = videoRef.currentTime > 0 && !videoRef.paused && !videoRef.ended 
    && videoRef.readyState > videoRef.HAVE_CURRENT_DATA;
      if (inView) {
        !isPlaying && videoRef.current.play();
        console.log('Video is in viewport');
      } else {
        isPlaying && videoRef.current.pause();
      }
    }, [inView]);

    //Create state to change highlighted section on nav bar when the user scrolls
    const overviewDivRef = useRef(null);
    const rangeDivRef = useRef(null);
    const performanceDivRef = useRef(null);
    const designDivRef = useRef(null);
    const [isInSection, setIsInSection] = useState('no div');

    useEffect(() => {
      const handleScroll = () => {
        //get the poistion of each section
        const overviewDivTop = overviewDivRef.current.getBoundingClientRect().top;
        const rangeDivTop = rangeDivRef.current.getBoundingClientRect().top;
        const performanceDivTop = performanceDivRef.current.getBoundingClientRect().top;
        const designDivTop = designDivRef.current.getBoundingClientRect().top;
        //set the isInSection variable if the div is between 100px above and 200px below of the top of the window
        if (overviewDivTop <= 100 && overviewDivTop >= -200) setIsInSection('overview');
        if (rangeDivTop <= 100 && rangeDivTop >= -200) setIsInSection('range');
        if (performanceDivTop <= 100 && performanceDivTop >= -200) setIsInSection('performance');
        if (designDivTop <= 100 && designDivTop >= -200) setIsInSection('design');
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll(); 
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="10" style={{position: 'relative'}}>
      <nav style={{position: 'sticky'}} className="reactive-nav navbar navbar-expand-sm navbar-dark fixed-top">
        <ul className="navbar-nav inline-nav-sticky">
          <li><a href="#overview" style={ isInSection === 'overview' ? { borderBottom: '2px solid red' } : {}} >OVERVIEW</a></li>
          <li><a href="#range" style={ isInSection === 'range' ? { borderBottom: '2px solid red' } : {}}>RANGE</a></li> 
          <li><a href="#performance" style={ isInSection === 'performance' ? { borderBottom: '2px solid red' } : {}}>PERFORMANCE</a></li>
          <li><a href="#design" style={ isInSection === 'design' ? { borderBottom: '2px solid red' } : {}}>DESIGN</a></li>
        </ul>
      </nav>
      <div ref={overviewDivRef} id='overview'>
        <CoverImageHilux></CoverImageHilux>
      </div>
      <div ref={rangeDivRef} id='range'>
        <SectionHeading text='RANGE'></SectionHeading>
        <RangeDisplay uteModels={uteModels} uteColors={uteColors}/>
      </div>
      <div ref={performanceDivRef} id='performance'>
        <SectionHeading text='PERFORMANCE'/>
        <div ref={ref} className='static-video-container' >
          <h2 >All the power you need</h2>
          <p>No matter how hard you work or play, UteSpot utes are up for it. Its engines are built to take on anything from tough worksites to towering hills for 4x4 variants.</p>
          <video ref={videoRef} webkit-playsinline="true" playsInline={true} muted="muted" autoPlay  style={{ width: '100%' }} >
            <source src={towingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <TripleIconInfoBanner items={performanceInfoBannerItems} />
      </div>
      <div ref={designDivRef} id='design'>
        <SectionHeading text='DESIGN' />
        <div className=''>
          <h2 style={{fontSize: '2em', fontWeight: '600', marginTop: '100px'}}>Make an entrance</h2>
          <p style={{marginTop: '40px', marginBottom: '100px', fontSize: '1.2em', fontWeight: '450'}}>Make your presence known, and make it clear you mean business.</p>
        </div>
        <TripleIconInfoBanner items={designInfoBannerItems} />
        <img src={footerImg} className='cover-img space-above'></img>
        <p className='footer-text'>This site is a project as part of Wade Cole's portfolio. Design inspired by <a href='https://www.toyota.com.au/'>Toyota.com</a>,
           this site has no affiliation with Toyota and was developed for the purpose of demonstrating website development ability only. More projects <a href='https://github.com/Wade-CQU'>here</a></p>
      </div>
      </div>
  )
}

export default Hilux
