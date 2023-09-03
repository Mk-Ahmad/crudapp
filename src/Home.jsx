import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { delUser , delAllUser } from './UsersReducers'


const Home = () => {

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleDel = (id) =>{
      dispatch(delUser({id : id}))
    }
    const delAll = (id) =>{
      dispatch(delAllUser({id : id}))
    }

  return (
    <div className='container mt-4'>
    <h1>Welcome To The Data School</h1>
    <Link to="/create" className='btn btn-info mt-4 mb-5'>Create a New Student</Link>

   
    <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Full Name</th>
        <th>Email</th>
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
        <button onClick={() => handleDel(users.id)} className='btn btn-outline-danger ms-2'>Delete</button>

        </td>

        </tr>
  ))}
    </tbody>
    </table>
    <button onClick={() => delAll()} className='btn btn-danger mt-4 mb-5'>Delete all Student</button>
    </div>
  )
}

export default Home
