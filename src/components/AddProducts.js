import React from 'react'
import '../App.css';

export const AddProducts = () => {
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
            <input type="text" className="form-control" required/>

            <label htmlFor="product-description">Product description</label>
            <br/>
            <input type="text" className="form-control" required/>
            <br/>
            <button className="btn btn-success btn-md"><h1> ADD </h1></button>


        </form>
    </div>
  )
}
