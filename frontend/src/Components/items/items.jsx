import React from 'react'
import './items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
        <div className='item'>
            <h2 className='name'>{props.name}</h2>
            <img src={props.image} alt='' />
            <p className='sex'>{props.category}</p>
            <p className='price'>&#x20A6;{(props.price).toLocaleString()}</p>
            <hr/>
            <Link to='/buy'><button class="buy"><span>Buy</span></button></Link>
        </div>
    )
}

export default Items