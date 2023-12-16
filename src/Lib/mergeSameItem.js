const compareTwoArray = (arr1, arr2) => {

  if(arr1.length !== arr2.length) return false
  
  for(let i = 0 , n = arr1.length ; i < n ; i++){
    if(typeof arr1[i] === "object" || typeof arr2[2] === "object") {
      if(!compareTwoArray(arr1[i], arr2[i])) return false
      continue
    } 
    if(arr1[i] !== arr2[i]) return false
  }
  return true
}

const compareTwoObject = (obj1, obj2) => {
  const arr1 = Object.entries(obj1)
  const arr2 = Object.entries(obj2)
  return compareTwoArray(arr1, arr2)
} 



export const mergeSameItem = (cartList, newProduct) => {

  for( let i = 0, n = cartList.length ; i < n ; i++){

    const isSameID = cartList[i].id === newProduct.id

    if(isSameID) {

      const isSameOption = compareTwoObject(cartList[i].typeOptionPair, newProduct.typeOptionPair)

      if(isSameOption) {
        cartList[i].amount += newProduct.amount
        return cartList
      }
    }
  }
  return [...cartList, newProduct]
}

export default mergeSameItem


  // const sameIDinCart = ( function getSameID(){cartList.filter((item) => item.id === newProduct.id)} )()
  // const isSameIDinCart = Boolean(sameIDinCart.length)
  
  // if(!isSameIDinCart) return [...cartList, newProduct]

  // const newProductOptions = Object.values(newProduct.typeOptionPair)

  // const findCorrespondOption = sameIDinCart.filter((item) => {
  //   const itemOptions = Object.values(item.typeOptionPair)
  //   const isSameOption = compareTwoArray(newProductOptions, itemOptions)
  //   return isSameOption
  // })

  // const addAmount = () => {
    
  // }