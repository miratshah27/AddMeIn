import React, {useState} from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom';
function UserList() {
    const rows=[
        {id: 1, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 2, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 3, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 4, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 5, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 6, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 7, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 8, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 9, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        {id: 10, userName: 'John Snow', avatar: 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', email: 'john@gmail.com', status: 'active', transaction: '₹12000',},
        ];

    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns=[
        {field: 'id', headerName: 'ID', width:70},
        {field: 'user', headerName: 'User', width:200, renderCell: (params)=>{
            return(
                <div className='userListUser'>
                    <img className='userListImage' src={params.row.avatar} alt=''/>
                    {params.row.userName}
                </div>
            )
        }},
        {field: 'email', headerName: 'Email', width:200},
        {field: 'status', headerName: 'Status', width:120},
        {field: 'transaction', headerName: 'Transaction', width:140},
        {field: 'action', headerName: 'Action', width: 120, renderCell: (params)=>{
            return(
                <>
                    <Link to={'/users/'+params.row.id}>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
                </>
            )
        }}
    ];
    return (
        <div className='userList'>
            <DataGrid rows={data} columns={columns} pageSize={7} disableSelectionOnClick checkboxSelection/>
        </div>
    )
}

export default UserList
