import React, { useContext, useEffect, useRef, useState } from 'react'
import './Product.css'
import {  useLocation, useParams } from 'react-router-dom'
import { turnHashParamsIntoObj,  setHistoryHashParams } from '../Lib/hashParamsLib.jsx'
import { CartFunctionContext } from '../Components/SidebarCart/SidebarCart.jsx'


const Product = () => {

  const {productID} = useParams() //Params from router.jsx
  
  const location = useLocation()

  const productLoaded = useRef(false)
  const [product, setProduct] = useState(null)

  const {
    handleAddToCart : AddToCart
  } = useContext(CartFunctionContext)
  
  useEffect(() => {
    const importProduct = async() => {
      productLoaded.current = false
      let productModule = await import('../Data/Product/product.js')
        try { 
          setProduct(productModule.products[`${productID}`])
          productLoaded.current = true
        }
        catch{ console.log('error') }
    }
    importProduct()
    }, [productID]) 

  useEffect(function afterProductImported(){

    if( productLoaded.current === true ){ // which means import's already done

      if(location.hash !== ""){ // check whether hashParams exist when page loaded

        const checkOptionFromHashObj = () => {
          const hashObj = turnHashParamsIntoObj(location)
          Object.keys(hashObj).forEach( type => {
            try{  // in case any typo in hashParams
              document.getElementById(`${type}-${hashObj[type]}`).checked = true  
            }catch{
            }
          })
        }
        checkOptionFromHashObj()
        console.log('hashParams loaded')
      }
    }
  }, )
  

  useEffect( function renderAlert(){
    console.log('rendered')
  })

  if(product === null || productID === 'loading'){
    return <div className="loading">loading</div>
  }

  const currentProduct = {
    id: productID,
    name: product.name,
    price: product.price,
    amount: 1, 
    imgPath: product.imgPath,
    typeOptionPair: turnHashParamsIntoObj(location)
  }

  console.log(currentProduct)

  const TypesAndOption = () => {
    
    const types = Object.keys(product.typeOptionPair) 
    // get every single type in array from imported product

    const createTypeDivs = (types) => { // types:arr ; 
      return types.map( (type) => {
        return  <div className="type" key={`product-${type}`}>
                  <p className="type-text">{type}</p> 
                  {createOptionButtons(type)} {/* fill options according to type */}
                </div>
      })
    }
    
    const createOptionButtons = (type) => { // type:str; 
      
      const options = product.typeOptionPair[type] // load options from argument

      return options.map( option => {

        const handleOptionClicked = () => {
          currentProduct.typeOptionPair[type] = option;
          console.log(currentProduct)
          setHistoryHashParams(currentProduct.typeOptionPair, location)
        }

        return <label className='option' key={`product-${type}-${option}`}>
                 <input type="radio" className="option-checkbox" name={type} id={`${type}-${option}`} />
                 <span className='option-text' onClick={handleOptionClicked}>{option}</span>
               </label>
      })
    }
    return createTypeDivs(types)
  }
  

  const AmountButton = () => {
    
    const [amount, setAmount] = useState(1)

    const handleIncrease = () => {
      currentProduct.amount += 1
      setAmount((prev) =>  prev + 1 )
    }

    const handleDecrease = () => {
      if(amount > 1){
        currentProduct.amount -= 1
        setAmount((prev) =>  prev - 1 )
      }
    }

    return (
      <div className="AmountButton">
        <button className="button" onClick={handleIncrease}>&#43;</button>
        <div className="amount">{amount}</div>
        <button className='button' onClick={handleDecrease}>&minus;</button>
      </div>
    )
  } 

  const handleAddToCart = () => {

    AddToCart(currentProduct)
  }

  return (
    <div className="Product">
      <div className='product-upper'>
          <img className="product-img" src={product.imgPath} alt={product.name} />
          <div className="button-container">
            <TypesAndOption />
            <AmountButton/>
          </div>
      </div>
        <button className='add-to-cart' onClick={handleAddToCart}>add to cart</button>
    </div>
  )
}

export default Product
