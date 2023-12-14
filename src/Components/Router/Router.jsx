import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../../Page/Home'
import Shop from '../../Page/Shop';
import Desktop from '../../Page/Desktop';
import Test from '../../Page/Test';
import Product from '../../Page/Product';
import ProductList from '../../Page/ProductList';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Desktop" element={<Desktop/>} />
            
      <Route path='/Product'>
          <Route index element={<ProductList/>} />
          <Route path=":productID" element={<Product/>} />
      </Route>

      <Route path="/Test" >
          <Route index element={<Test/>} />
          <Route path=":id" element={<Test/>} />
      </Route> 
    </Routes>
  )
}

export default Router
