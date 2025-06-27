import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthContextProvider';

const Login = () => {

    const {userLogin,setUser} = useContext(AuthContext);
    const [error,setError] = useState({});
    const location= useLocation();
    console.log(location);
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(password, email);
        userLogin(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user);
            navigate(location?.state? location.state :"/");
        })
        .catch((err) => {
            setError({ ...error, login: err.code});

        }
        );
      

    
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="card w-full max-w-lg bg-base-100 shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center mb-4">Login to your account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                           {error.login && (

                            <label className='label'><label className="label text-sm text-red-600">{error.login}</label>
                                  
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                          

                            </label>
                           )


                           }
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-neutral rounded-none">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold mt-4">
                        Dont have an account?{" "}
                        <Link to="/auth/register" className="link link-hover text-blue-600">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
