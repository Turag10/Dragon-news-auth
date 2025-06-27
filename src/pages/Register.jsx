import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthContextProvider';

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Reset previous errors
        setError({});

        // Validate name
        if (name.length < 5) {
            setError({ name: "Name must be more than 5 characters" });
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                return updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                });
            })
            .then(() => {
                navigate("/");
            }).catch(err=>{
                console.log(err);

            })


            .catch((err) => {
                console.error("Error during registration:", err);
                setError({ general: err.message });
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="card w-full max-w-lg bg-base-100 p-10 rounded-none">
                <h2 className="text-2xl font-semibold text-center mb-4">
                    Register a new account
                </h2>
                <form onSubmit={handleSubmit} className="card-body p-0">
                    {/* Name Field */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered"
                            required
                        />
                        {error.name && (
                            <label className="label text-xs text-red-500">
                                {error.name}
                            </label>
                        )}
                    </div>

                    {/* Photo URL Field */}
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="url"
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="form-control mt-4">
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

                    {/* Password Field */}
                    <div className="form-control mt-4">
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
                    </div>

                    {/* General Error */}
                    {error.general && (
                        <div className="text-red-500 text-xs mt-2 text-center">
                            {error.general}
                        </div>
                    )}

                    {/* Register Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-neutral rounded-none">
                            Register
                        </button>
                    </div>

                    {/* Link to Login */}
                    <p className="text-center font-semibold mt-4">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="link link-hover text-blue-600">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
