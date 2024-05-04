import React from 'react'
import './Advert.css'
import Image1 from '../Assets/images1.png'
import Image2 from '../Assets/images2.png'
import Image3 from '../Assets/images3.png'
import Image4 from '../Assets/images4.png'
import Image5 from '../Assets/images5.png'
import Image6 from '../Assets/images6.png'

const Advert = () => {
  return (
    <div className='gallery-container'>
      <div className='marquee-container'>
        <img src={Image1}/>
        <img src={Image2}/>
        <img src={Image3}/>
        <img src={Image4}/>
        <img src={Image5}/>
        <img src={Image6}/>
      </div>
    </div>
  )
}

export default Advert
