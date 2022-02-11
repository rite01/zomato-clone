import React from 'react';
import { restaurants } from '../../../data/restaurants';
import './exploresection.css'

const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'>
            {list.map((restaurant)=>{
                
            })}
        </div>
    </div>
  )
}

export default ExploreSection