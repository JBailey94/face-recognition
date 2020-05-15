import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return (
      <div className='center ma4'>
          <div className='absolute mt2'>
            <img src={imageUrl} alt={''} width='600px' height='auto'/>
          </div>
      </div>
    )
}

export default FaceRecognition;