import { useContext, useState } from 'react';
import registerImg from '../assets/login.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    }

    const handleRegister =async (e) =>{
        e.preventDefault();
        if (selectedFile) {
            const image_hosting_api = `https://api.imgbb.com/1/upload?key=fcc5016616e41371604a3547c36c8008`;
            const formData = new FormData();
            formData.append('image', selectedFile);

            try {
                const res = await axios.post(image_hosting_api, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (res.data.success) {
                    const name = e.target.name.value;
                    const photo = res.data.data.display_url;
                    const email = e.target.email.value;
                    const password = e.target.password.value;
                    
                    createUser(email,password)
                    .then((result)=>{
                        updateUserProfile(name,photo)
                        .then(()=>{
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Register Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        })
                        console.log(result.user);
                    })
                    
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error('No file selected');
        }
    }

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(()=>{
            navigate('/')
        })
        .catch(err => {
            Swal.fire({
                title: 'Error!',
                text: `${err.message}`,
                icon: 'error',
                confirmButtonText: 'Cancel'
            })
        })
    }

    return (
        <div className="bg-base-200 relative">
            <img src={registerImg} className="h-screen w-screen object-cover" alt="" />
            <div className="hero min-h-screen absolute top-0">
                <div className="flex flex-col lg:flex-row-reverse lg:gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Register now!</h1>
                        <p className="py-6 font-semibold text-white">Please register in our website. By completing the registration you will get the premium service from our website.</p>
                        <button onClick={handleGoogleLogin} className='btn text-lg bg-purple-500 text-white border-none hover:bg-purple-800'>Login With Google</button>
                    </div>
                    <div className="card md:w-full shadow-2xl bg-purple-200 ">
                        <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" onChange={handleFileChange} name="file" className="file-input file-input-success w-full max-w-xs" />
                            </div>
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

                                <button className="btn bg-purple-500 hover:bg-purple-800 text-white">Register</button>

                                <p>Already have any accout? please <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;