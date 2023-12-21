import { useState } from "react";
import loginImg from '../assets/login.jpg'
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () =>{

    }

    return (
        <div className="bg-base-200 relative">
            <img src={loginImg} className="h-screen w-screen object-cover" alt="" />
            <div className="hero min-h-screen absolute top-0">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <p className="py-6 font-semibold text-white">Please login in our website. By completing the registration you will get the premium service from our website.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-200 md:ml-36">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Password" className="input input-bordered" required />
                                <p onClick={() => setShowPassword(!showPassword)} className="absolute right-1 top-12 text-xl">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-purple-500 hover:bg-lime-700 text-white">Login</button>
                                <p>Do not have any accout? please <Link to="/signUp" className="font-bold text-blue-600">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;