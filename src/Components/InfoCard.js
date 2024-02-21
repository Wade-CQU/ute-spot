import React from 'react'
import { Link } from 'react-router-dom';

const InfoCard = ({useIsInViewport, fadeInDelaySeconds, img, title, description}) => {

    const ref = React.useRef();
    const isInViewport = useIsInViewport(ref);

  return (
    <div className="card" ref={ref} style={{width: '18rem', opacity: isInViewport? 1 : 0, transform: `translateX(${isInViewport ? '0px' : '-75px'}`, transitionDelay: `${fadeInDelaySeconds}s`}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to="/details">MORE INFO</Link>
        </div>
    </div>
  )
}

InfoCard.defaultProps = {
    fadeInDelaySeconds: .2
}


export default InfoCard
