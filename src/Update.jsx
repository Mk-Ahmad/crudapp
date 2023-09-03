import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UsersReducers';

const Update = () => {
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)

    const { id } = useParams();
    const exixtUser = users.filter(f => f.id == id)
    const { name, email } = exixtUser[0]
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch()

const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(updateUser({
        id : id,
        name : uname,
        email : uemail
    }))
    navigate('/');
}

    return (
        <div className='container mt-4'>
            <h1>Update a Student</h1>


            <form className="row g-3 needs-validation mb-4" novalidate onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label" >First name</label>
                    <input type="text" name='Username' className="form-control"
                        value={uname} onChange={e => setName(e.target.value)} />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className=" col-4">
                    <label htmlFor="validationCustomUsername" placeholder='Enter Your Name' className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name='email' className="form-control"
                            value={uemail} onChange={e => setEmail(e.target.value)} />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">update</button>
                </div>
            </form>








            <Link to="/" className='btn btn-danger col-1 mt-4'>Go Back</Link>
            

        </div>
    )
}

export default Update
