import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {addUsers} from './UsersReducers';

const Create = () => {
    const navigate = useNavigate()
    const [name ,setName] = useState('');
    const [email ,setEmail] = useState('');

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

const handleSubmit = (event) =>{
    event.preventDefault();
    

    dispatch(addUsers({id : users[users.length - 1 ].id + 1  , 
        name  , email  }))
navigate('/')
}

  return (
    <div className='container mt-4'>
    <h1>Create A new Student</h1>
      

    <form className="row g-3 needs-validation mb-4" novalidate onSubmit={handleSubmit}>
    <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label" >First name</label>
    <input type="text" name='Username' className="form-control" id="validationCustom01"  required
    onChange={e => setName(e.target.value)} />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
    <div className=" col-4">
    <label htmlFor="validationCustomUsername" placeholder='Enter Your Name' className="form-label">Email</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" name='email' className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required 
      onChange={e =>setEmail( e.target.value)}/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-12">
  <button className="btn btn-primary" type="submit">Create</button>
</div>
    </form>

    

    <table className="table mt-5">
    <thead>
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>
    <tbody>
    {users.map((users , index) =>(
        <tr key={index}>

        <td>{users.id}</td>
        <td>{users.name}</td>
        <td>{users.email}</td>
        <td>
        <Link to={`/edit/${users.id}`} className='btn btn-outline-success'>Edit</Link>
        <button className='btn btn-outline-danger ms-2'>Delete</button>

        </td>

        </tr>
  ))}
    </tbody>
    </table>
    <Link to="/" className='btn btn-danger col-1 mt-4'>Go Back</Link>
    </div>
  )
}

export default Create
