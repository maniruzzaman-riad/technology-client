import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { handleUserRegistration } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegisterField = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, email, password);


        handleUserRegistration(email,password)
        .then(user=>{
            updateProfile(user.user,{
                displayName:name
            })
            .then(
                navigate('/')
            )
            .catch()
        })
        .catch()
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration Here</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterField} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <h2 className="text-center my-5 font-semibold">If you have Already an account,Please Click Here to <Link to="/login"><span className="py-1 px-3 bg-green-600 rounded-lg text-white font-semibold">Login</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;