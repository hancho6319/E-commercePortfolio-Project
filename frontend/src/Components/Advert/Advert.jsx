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
    <divc className="adds">
      <p>NO. 75C GWALANDI HOUSE IBB WAY, KWARI MARKET KANO, KANO STATE, NIGERIA...</p>
      <div className='gallery-container'>
        <div className='marquee-container'>
          <img alt='' src={Image1}/>
          <img alt='' src={Image2}/>
          <img alt='' src={Image3}/>
          <img alt='' src={Image4}/>
          <img alt='' src={Image5}/>
          <img alt='' src={Image6}/>
        </div>
      </div>
    </divc>
  )
}

export default Advert
