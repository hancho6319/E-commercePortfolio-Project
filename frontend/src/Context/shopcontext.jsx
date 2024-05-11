import React, { createContext } from 'react'
import data_product from '../Components/data/data'

export const ShopContext = createContext(null);

const shopContextProvider = (props) => {
    const contextValue = {data_product};

    return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default shopContextProvider;