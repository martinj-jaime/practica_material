import React, { useEffect } from 'react'

import { car } from '../../assets'

const CarRotation = () => {

    const direction = 50;

    useEffect(() => {
        console.log(document.getElementById('rotateImage'))
        document.getElementById('rotateImage').style.cssText = `transform:rotate(${direction}deg);transition:0.8s;`
    }, [direction])

  return (
    <div style={{ padding: '4rem' }} >
        <img 
            src={car} alt="car"
            width={150} height={80} 
            className='rotate' 
            id='rotateImage' 
        />  
    </div>
  )
}

export default CarRotation