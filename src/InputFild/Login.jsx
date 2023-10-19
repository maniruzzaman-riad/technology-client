import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {

    const handleLoginField = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now Here!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginField} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button className=" flex items-center justify-center gap-3 border-2 w-1/2 mx-auto py-2 font-bold rounded-lg border-purple-600 hover:bg-purple-400"><FcGoogle></FcGoogle> Login with Google</button>

                        <h2 className="text-center my-5 font-semibold">If you have no account, Please <Link to="/register"><span className="py-1 px-3 bg-green-600 rounded-lg text-white font-semibold">Registration</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;