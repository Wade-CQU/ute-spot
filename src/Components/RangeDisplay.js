import React from 'react'
import { useState } from 'react'
import RangeDisplayDetails from './RangeDisplayDetails'

const RangeDisplay = ({uteModels, uteColors}) => {

    const [activeModel, setActiveModel] = useState(uteModels[0])
    const [activeColor, setActiveColor] = useState(uteColors[0])


    const areTheSameObj = (model1, model2)=> {
        return JSON.stringify(model1) === JSON.stringify(model2)
    }

  return (
    <div>
        {/* Create model name buttons for user to select a model */}
      <div className='model-display-banner'>
        {uteModels.map((model, index) => (
          <div key={index} className="model-display-banner-item" 
            style={areTheSameObj(model, activeModel) ? {textDecorationColor:'#eb0a1e'} : null} 
            onClick={() => setActiveModel(uteModels[index])}>
                {model.name}
          </div>
        ))}
      </div>

        {/* Upate the picture/color/description when user clicks a button */}
        <RangeDisplayDetails activeModel={activeModel} activeColor={activeColor} />
        
        {/* create color buttons for user to select a color */}
        <h3 style={{color: 'gray', fontWeight: '400', letterSpacing: '4px', marginBottom: '20px', fontSize: '1em'}}>COLOUR: {activeColor}</h3>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '100px'}}>
            {uteColors.map((color, index) => (
          <div key={index} className="color-select-btn" 
            style={areTheSameObj(color, activeColor) ? {backgroundColor: color, transform: 'scale(110%)'}: {backgroundColor: color}} 
            onClick={() => setActiveColor(color)}>
          </div>
        ))}
        </div>
    </div>
  )
}

export default RangeDisplay
