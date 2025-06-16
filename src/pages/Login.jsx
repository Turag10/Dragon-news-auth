import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="card w-full max-w-lg bg-base-100 shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Login to your account</h2>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <p className="text-center font-semibold mt-4">
                        Don't have an account? <Link to="/auth/register" className="link link-hover text-blue-600">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
