import React, {useState} from 'react'
import '../App.css';
import {storage, db} from '../config/Config'

export const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productDesc, setProductDesc] = useState('');
    const [productImg, setProductImg] = useState('');
    const [error,setError] = useState('');

    const addProduct = (e) => {
        e.preventDefault();
        console.log(productName,productPrice,productDesc,productImg);

        //Manual Change of ('e') to appropriate menu category
        db.collection('Products').add({ 
            ProductName: productName,
            ProductPrice: productPrice,
            ProductDesc: productDesc,
            ProductImg: '"assets/foods/' + productImg +'"'
        }).then(()=>{
            setProductName('');
            setProductPrice(0);
            setProductDesc('');
            setProductImg('');
        }).catch(err => setError(err.message));
        
    }

  return (
    <div className="App-header">
        <br/>
        <h2>Add Products</h2>
        <hr/>
        <form autoComplete="off" className="form-group" onSubmit={addProduct}>
            <label htmlFor="product-name">Product Name</label>
            <br/>
            <input type="text" className="form-control" required
            onChange={(e) => setProductName(e.target.value)} value={productName}/>

            <label htmlFor="product-price">Product Price</label>
            <br/>
            <input type="number" className="form-control" required
            onChange={(e) => setProductPrice(e.target.value)} value={productPrice}/>

            <label htmlFor="product-description">Product Description</label>
            <br/>
            <input type="text" className="form-control" required
            onChange={(e) => setProductDesc(e.target.value)} value={productDesc}/>

            <label htmlFor="product-image">Product Image</label>
            <br/>
            <input type="text" className="form-control" required
            onChange={(e) => setProductImg(e.target.value)} value={productImg}/>

            <br/>
            <button className="btn btn-success btn-md">
                <h1> ADD </h1>
            </button>

            <br/><br/>
            
            <h4>{productName}</h4>  <h4>{productPrice}</h4>
            <h4>{productDesc}</h4>  <h4>{productImg}</h4>

        </form>
        {error&&<span>{error}</span>}
    </div>
  )
}
