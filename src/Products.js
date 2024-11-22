import React from 'react'
import { IndividualProduct } from './components/IndividualProduct';

////Product Component that displays each product in a collection @Menus
export const Products = ({products, addToCart}) => {


  return products.map((individualProduct) => {
    // Check if ID exists and provide fallback if necessary
    const key = individualProduct.ID || `fallback-key-${Math.random()}`;
  
    return (
      <IndividualProduct
        key={key}  // Use a fallback key if ID is missing
        individualProduct={individualProduct}
        addToCart={addToCart}
      />
    );
  });
}

// console.log(products);
  
// const key = individualProduct.ID || `fallback-key-${Math.random()}`;

// return products.map((individualProduct)=>(
//   <IndividualProduct 
//   key = {individualProduct.ID} 
//   individualProduct={individualProduct} 
//   addToCart={addToCart}/>
// ))
// }
