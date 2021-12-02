import React from 'react'
import './newproduct.css'
function NewProduct() {
    return (
        <div className='newproduct'>
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
              </div>
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Apple Airpods" />
              </div>
              <div className="addProductItem">
                <label>Stock</label>
                <input type="text" placeholder="123" />
              </div>
              <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct
