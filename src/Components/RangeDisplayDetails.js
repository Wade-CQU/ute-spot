import React from 'react'
import WorkmateWhite from '../assets/WORKMATE_WHITE.jpeg'
import WorkmateGrey from '../assets/WORKMATE_GREY.jpeg'
import WorkmateBlack from '../assets/WORKMATE_BLACK.jpeg'
import SR5White from '../assets/SR5_WHITE.jpeg'
import SR5Grey from '../assets/SR5_GREY.jpeg'
import SR5Black from '../assets/SR5_BLACK.jpeg'
import RougeWhite from '../assets/ROUGE_WHITE.jpeg'
import RougeGrey from '../assets/ROUGE_GREY.jpeg'
import RougeBlack from '../assets/ROUGE_BLACK.jpeg'


const RangeDisplayDetails = ({activeModel, activeColor}) => {

    const img = (activeModel, activeColor) => {
        switch (activeModel) {
        case 'WORK':
            switch (activeColor) {
            case 'WHITE':
                return WorkmateWhite;
            case 'GREY':
                return WorkmateGrey;
            case 'BLACK':
                return WorkmateBlack;
            default:
                return null;
            }
        case 'COMFORT':
            switch (activeColor) {
            case 'WHITE':
                return SR5White;
            case 'GREY':
                return SR5Grey;
            case 'BLACK':
                return SR5Black;
            default:
                return null;
            }
        case 'POWER':
            switch (activeColor) {
            case 'WHITE':
                return RougeWhite;
            case 'GREY':
                return RougeGrey;
            case 'BLACK':
                return RougeBlack;
            default:
                return null;
            }
        default:
            return null;
        }
    };
    
    return (
        <div className='range-display-details'>
        <div className='range-display-details-text'>
            <h2>{activeModel.name}</h2>
            {activeModel.desc}
            </div>
        <div className='range-display-details-img'><img src={img(activeModel.name, activeColor)} style={{width: '100%'}}/></div>
        </div>
    )
    }

export default RangeDisplayDetails