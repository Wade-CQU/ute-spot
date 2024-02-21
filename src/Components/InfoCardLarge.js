import React from 'react'
import { Link } from 'react-router-dom';

const InfoCardLarge = ({ useIsInViewport, img, title, linkText, fadeInDelaySeconds }) => {

    const ref = React.useRef();
    const isInViewport = useIsInViewport(ref);

  return (
    <div className="card card-large basic-margin" ref={ref} style={{opacity: isInViewport? 1 : 0, transform: `translateX(${isInViewport ? '0px' : '-75px'}`, transitionDelay: `${fadeInDelaySeconds}s`}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Link to="/details">{linkText}</Link>
        </div>
    </div>
  ) 
}

InfoCardLarge.defaultProps = {
    fadeInDelaySeconds: .3
}


export default InfoCardLarge
