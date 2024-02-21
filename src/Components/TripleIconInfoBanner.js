import React from 'react'

const TripleIconInfoBanner = ({items}) => {
  return (
    <div className='triple-info-banner-container'>
        {items.map((item, index)=> (
            <div key={index} className='icon-info-banner-item'>
                <img src={item.icon} alt={item.title} />
                <h2>{item.title}</h2>
                <div>{item.desc}</div>
            </div>
        ))}
    </div>
  )
}

export default TripleIconInfoBanner
