import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'
function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Heli Shah</span>
                            <span className="userShowUserTitle">Architect</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className='showUserIcon'/>
                            <span className="userShowInfoTitle">helishah99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='showUserIcon'/>
                            <span className="userShowInfoTitle">16.03.2000</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='showUserIcon'/>
                            <span className="userShowInfoTitle">+91 9821464457</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='showUserIcon'/>
                            <span className="userShowInfoTitle">helishah2000@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='showUserIcon'/>
                            <span className="userShowInfoTitle">Mumbai | India</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type='text' value='helishah99' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type='text' value='Heli Shah' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type='text' value='helishah2000@gmail.com' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone No:</label>
                                <input type='text' value='+91 9821464457' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Location</label>
                                <input type='text' value='Mumbai | India' className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className='userUpdateImg' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                                <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                                <input type='file' id='file' style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
