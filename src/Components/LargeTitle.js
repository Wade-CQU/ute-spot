import React from 'react'

const LargeTitle = ({text}) => {
  return (
    <h1 className='space-above'>
        <span style={{ fontSize: '200%', lineHeight: '100%', fontWeight: 450 }}>{text}</span>
    </h1>
  )
}

export default LargeTitle
