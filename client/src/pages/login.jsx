import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';




const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const dispatch = useDispatch()

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
    
            <div className="auth_page">
                <form onSubmit={handleSubmit}>
                    <h3 className="txt-uppercase text-center text-primary mb-4">Valo-Chat</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email"
                            id="exampleInputEmail1" onChange={handleChangeInput} value={email} />

                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            onChange={handleChangeInput} value={password} name="password" />
                    </div>
                    <button type="submit" className="btn btn-info w-100"
                        disabled={email && password ? false : true}>
                        Đăng nhập
                    </button>

                    <p className="my-2">
                        You don't have account? <Link to="/register" style={{ color: "crimson" }}>Register now</Link>
                    </p>
                </form>
            </div>
       
    )
}

export default Login