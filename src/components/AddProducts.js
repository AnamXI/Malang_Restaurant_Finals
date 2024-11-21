import React, {useState} from 'react'
import '../App.css';

export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productImg, setProductImg] = useState('');

  return (
    <div className="App-header">
        <br/>
        <h2>Add Products</h2>
        <hr/>
        <form autoComplete="off" className="form-group">
            <label htmlFor="product-name">Product Name</label>
            <br/>
            <input type="text" className="form-control" required/>

            <label htmlFor="product-price">Product Price</label>
            <br/>
            <input type="number" className="form-control" required/>

            <label htmlFor="product-description">Product Description</label>
            <br/>
            <input type="text" className="form-control" required/>

            <label htmlFor="product-image">Product Image</label>
            <br/>
            <input type="text" className="form-control" required/>
            <br/>
            <button className="btn btn-success btn-md"><h1> ADD </h1></button>


        </form>
    </div>
  )
}
