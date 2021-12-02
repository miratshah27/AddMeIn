import React, {useState} from 'react'
import './productList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom';
function ProductList() {
    const rows=[
        {id: 1, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 2, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 3, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 4, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 5, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 6, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 7, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 8, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 9, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        {id: 10, name: 'Apple Airpods', img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', stock: '155', price: '₹28000',},
        ];

        const [products, setproducts] = useState(rows)

        const handleDelete = (id) => {
            setproducts(products.filter(item => item.id !== id));
        };

        const columns=[
            {field: 'id', headerName: 'ID', width:70},
            {field: 'product', headerName: 'Product', width:200, renderCell: (params)=>{
                return(
                    <div className='userListUser'>
                        <img className='userListImage' src={params.row.img} alt=''/>
                        {params.row.name}
                    </div>
                )
            }},
            {field: 'stock', headerName: 'Stock', width:200},
            {field: 'price', headerName: 'Price', width:140},
            {field: 'action', headerName: 'Action', width: 120, renderCell: (params)=>{
                return(
                    <>
                        <Link to={'/product/'+params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }}
        ];

    return (
        <div className='productlist'>
            <DataGrid rows={products} columns={columns} pageSize={7} disableSelectionOnClick checkboxSelection/>
        </div>
    )
}

export default ProductList
