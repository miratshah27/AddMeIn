import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../Components/Charts/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title='Sales Performance' data={productData} dataKey='Sales' />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id :</span>
                            <span className="productInfoValue">1</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Stock</span>
                            <span className="productInfoValue">155</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                          <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                          <label for="file">
                              <Publish/>
                          </label>
                          <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
