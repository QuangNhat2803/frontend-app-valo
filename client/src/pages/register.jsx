import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../index.css'
const Register = () => {
    return (
        <div className="auth_page">
            <form >
                    <h3 className="txt-uppercase text-center text-primary mb-4">Valo-Chat</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputFullName">Full Name</label>
                        <input type="password" className="form-control" id="exampleInputFullName"
                           />
                    </div>
                
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email"/>

                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInput">PhoneNumber</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"
                           />
                    </div>

                    <button type="submit" className="btn btn-info w-100">
                        Đăng ký
                    </button>

                    <p className="my-2">
                        You have an account? <Link to="/login" style={{ color: "red" }}>Login now</Link>
                    </p>
                </form>
        </div>
    )
}

export default Register
