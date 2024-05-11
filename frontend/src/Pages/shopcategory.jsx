import React, { useContext } from 'react'
import './shopcategory.css'
import data_product from '../Components/data/data'
import Items from '../Components/items/items'
import { ShopContext } from '../Context/shopcontext'

const Shopcategory = (props) => {
  const {data_product} = useContext(ShopContext);
  return (
    <div className='category'>
      <divc className="adds">
        <p>NO. 75C GWALANDI HOUSE IBB WAY, KWARI MARKET KANO, KANO STATE, NIGERIA...</p>
      </divc>
      <div className='shopcategoryProducts'>
        {data_product.map((item, i)=>{
          if (item.category==="unisex"){
            return <Items key={i} id={item.id} name={item.name} image={item.image} category={item.category} price={item.price}/>
          }
          else{
            return null
          }
        })}
      </div>
    </div>

  )
}

export default Shopcategory