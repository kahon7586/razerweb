import React, { useRef } from 'react'
import './SidebarCart.css'
import { useState, useEffect } from 'react'

export const CartFunctionContext = React.createContext()

const ProductPreview = ( { product: { name, price, amount, imgPath, typeOptionPair }} ) => { // product = { name:...,  }
  return (
    <div className="ProductPreview">
      <img className='product-image' src={imgPath} alt={name} />
      <div className="previewInfo">
        <p className='previewInfo-name'>{name}</p>
        <p className="previewInfo-type">{Object.values(typeOptionPair).join('/')}</p>
        <p className='previewInfo-amount'>{'數量：'}<span className='previewInfo-amount-value'>{amount}</span></p>
        <p className='previewInfo-total'>{'共計：'}<span className='previewInfo-total-value'>{price * amount}</span></p>
      </div>
    </div>
  )
}

export const SidebarCart = ({children}) => {

 const [cartToggle, setCartToggle] = useState(false)
 const [cartList, setCartList] = useState([])

  const ref_SidebarCart = useRef(null)

  useEffect (() => {
    console.log(cartList)

    

  }, [cartList])

  const closeSidebarCart = (e) => {
    if(ref_SidebarCart.current && cartToggle && !ref_SidebarCart.current.contains(e.target)){
      setCartToggle(false)
    }
  }
  
  useEffect(() => {
    if(cartToggle){
      document.addEventListener('mousedown', closeSidebarCart)}
     
    return (() => {
      document.removeEventListener('mousedown', closeSidebarCart)})
  })

  const handleCartToggle = () => {
    setCartToggle((prev) => !prev)
  }

  const displayCartList = () => {
    const itemsInCart = cartList.map((item, i) => 
      <ProductPreview product={item} key={`cartList-${i}`} />)
    return itemsInCart
  }

  const mergeSameItem = (newProduct) => {

    let result = true

    cartList.some(item => {

      if(item.id !== newProduct.id) return false

      const typesOfItem = Object.keys(item)
      
      typesOfItem.every(type => {
        if(newProduct.typeOptionPair?.[type]) { result = false }
        if(newProduct.typeOptionPair[type] !== item.typeOptionPair[type]) {result = false}
      })
    })

    return result
  }

  const handleAddToCart = (item) => {
    if(mergeSameItem()){
      
      return
    }
    setCartList([...cartList, item])
  }

  const cartFunctions = {handleCartToggle, handleAddToCart}

  return (
    <CartFunctionContext.Provider value={cartFunctions}>
        <div ref={ref_SidebarCart} className={`sidebar-cart ${(cartToggle ? 'show' : 'hide')}`}>
          {displayCartList()}
        </div>
        <button onClick={handleAddToCart} height="500"> add to cart</button>
        <button onClick={handleCartToggle}>cart</button>
        {children}
    </CartFunctionContext.Provider>
  )
}

export default SidebarCart

