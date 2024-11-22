import React from 'react'
import '../App.css';

const IndividualProduct = ({individualProduct}) => {
// console.log(individualProduct);
    return (
    <div className='fcard'>
      <img className='fcardimg'src={individualProduct.ProductImg} alt='Food Showcase'/>
    </div>
  )
}

export default IndividualProduct
