import React, { useState, useContext } from 'react';
import {Alert, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import SignInImage from "../assets/images/Group 1.png";
import {FaLock} from "react-icons/fa";
import {AiFillMail, AiOutlineApple, AiOutlineGoogle} from "react-icons/ai";
import Logo from "../assets/images/logo.png";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let response = await login(email, password);
            if (response.success){
                navigate('/dashboard');
            }
            setError("Invalid login credential");
        } catch (error) {
            setError(error.data);
        }
        setLoading(false);
    };

    return (
        <div className="sign-in__wrapper main-background">
            <div className="row w-75 justify-content-center login-form d-flex align-items-center">
                <div className="col-md-6 px-md-5 px-0">
                    <div className="w-100">
                        <div className="bg-white text-center mb-3 rounded-3 m-auto" style={{width: 160}}>
                            <img src={Logo} width={150} alt="logo"/>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="login-wrap bg-light-green py-5 rounded-5">
                        {/* ALert */}
                        {error ? (
                            <Alert
                                className="mb-2"
                                variant="danger"
                                onClose={() => setError('')}
                                dismissible
                            >
                                {error}
                            </Alert>
                        ) : (
                            <div />
                        )}
                        <div className="form-group mb-3">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <AiFillMail />
                            </div>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" required/>
                        </div>
                        <div className="form-group mb-3">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <FaLock />
                            </div>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" required/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-group d-md-flex">
                                <input type="checkbox" className="me-1" /> Remember me
                            </div>
                            <Link to="/forgot-password" className="text-black">Forgot Password</Link>
                        </div>
                        <div className="form-group mt-3">
                            {!loading ? (
                                <Button className="btn w-100 btn-dark submit px-3 py-2 h5"
                                        variant="primary" type="submit">
                                    Log In
                                </Button>
                            ) : (
                                <Button className="btn w-100 btn-dark submit px-3 py-2 h5"
                                        variant="primary" type="submit" disabled>
                                    Logging In...
                                </Button>
                            )}
                        </div>
                    </form>

                    <div className="bg-light-green rounded-5 mt-4 py-4 px-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6 divider text-center">
                                <div className='fs-5 mb-2 line-height-1'>You do not have an account?</div>
                                <Link to="/register" className="btn btn-dark">Sign Up</Link>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className='fs-5 mb-2'>Sign Up With</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <AiOutlineGoogle className="social-icon"/>
                                    <AiOutlineApple className="social-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-md-5 px-0">
                    <img src={SignInImage} className="img img-fluid" alt="login"/>
                    <div className="fs-4 text-white text-white text-center">We simplify your financial tasks</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
