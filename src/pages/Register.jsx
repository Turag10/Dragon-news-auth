import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthContextProvider';

const Register = () => {
    const { createNewUser, user, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        console.log({ name, email, photo, password });

        createNewUser(email, password)
            .then((result) => {
                
                const user = result.user;
                setUser(user);
                console.log("User created:", user);
                // You can update profile here or navigate to another page
            })
            .catch((error) => {
                console.error("Error creating user:", error);
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
