import React from 'react'
import './newuser.css'
function NewUser() {
    return (
        <div className='newuser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type='text' placeholder='john'/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type='text' placeholder='John Doe'/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type='email' placeholder='johndoe@gmail.com'/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type='password' placeholder=''/>
                </div>
                <div className="newUserItem">
                    <label>Phone No.</label>
                    <input type='number' placeholder='+91 9870805145'/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type='text' placeholder='Mumbai | India'/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type='radio' name='gender' id='male' value='male' />
                        <label for='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' />
                        <label for='female'>Female</label>
                        <input type='radio' name='gender' id='other' value='other' />
                        <label for='other'>Other</label>
                    </div>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
