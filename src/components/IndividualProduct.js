import React from 'react'
import '../App.css';

const IndividualProduct = ({individualProduct}) => {
// console.log(individualProduct);
    return (
    <div className='card'>
      <img className='cardimg'src={individualProduct.ProductImg}/>
    </div>
  )
}

export default IndividualProduct
