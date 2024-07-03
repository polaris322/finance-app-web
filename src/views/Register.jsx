import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import { registerUser } from '../services/AuthService';
import {AiFillMail, AiFillPhone, AiOutlineApple, AiOutlineGoogle} from "react-icons/ai";
import {FaLock, FaUser} from "react-icons/fa";
import SignInImage from "../assets/images/3528479.png";
import Logo from "../assets/images/logo.png";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let res = await registerUser(firstName, lastName, phone, email, password);
            if (res.success){
                navigate('/login');
            }
            setError(res.data);
        } catch (error) {
            setError(error);
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
                                <FaUser />
                            </div>
                            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" placeholder="First Name" required/>
                        </div>
                        <div className="form-group mb-3">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <FaUser />
                            </div>
                            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" placeholder="Last Name" required/>
                        </div>
                        <div className="form-group mb-3">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <AiFillMail />
                            </div>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" required/>
                        </div>
                        <div className="form-group mb-3">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <AiFillPhone />
                            </div>
                            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="form-control" placeholder="Phone Number" required/>
                        </div>
                        <div className="form-group mb-3">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <FaLock />
                            </div>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" required/>
                        </div>
                        <div className="form-group mt-4">
                            {!loading ? (
                                <Button className="btn w-100 btn-dark submit px-3 py-2 h5"
                                        variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            ) : (
                                <Button className="btn w-100 btn-dark submit px-3 py-2 h5"
                                        variant="primary" type="submit" disabled>
                                    Signing Up...
                                </Button>
                            )}
                        </div>
                        <div className="text-center mt-3">
                            <Link to="/login" className="text-black">Already have an account?</Link>
                        </div>
                    </form>

                    <div className="bg-light-green rounded-5 mt-4 py-4 px-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-12 text-center">
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
                    <div className="fs-4 text-white text-white text-center">We have thought of it for you</div>
                </div>
            </div>
        </div>
    );
};

export default Register;
