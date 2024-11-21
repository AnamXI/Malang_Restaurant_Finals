import React from 'react'
import IndividualProduct from './components/IndividualProduct';

export const Products = ({products}) => {

    console.log(products);

  return products.map((individualProduct)=>(
    <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct}/>
  ))
}
