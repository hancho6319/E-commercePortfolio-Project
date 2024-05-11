import React from 'react'
import data_product from '../data/data'
import Items from '../items/items'
import './trendings.css'

const trendings = () => {
  return (
    <div className='new'>
        <h1>NEW STOCKS</h1>
        <hr/>
        <div className='new-items'>
            {
                data_product.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} category={item.category} price={item.price}/>
                })
            }
        </div>
    </div>
  )
}

export default trendings
