import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthProvider";
// import { HiOutlineLogin } from 'react-icons/hi';
import { LuLogOut, LuLogIn } from 'react-icons/lu';
// import AuthProvider from "../ContextApi/AuthProvider";


const Navbar = () => {
    const { user, handleUserLogout } = useContext(AuthContext)
    console.log(user);

    const allMenu = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>

    const handleLogOut = () => {
        handleUserLogout()
            .then()
            .catch()
    }

    return (
        <div className=" bg-orange-400">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {allMenu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogOut} className="btn btn-outline btn-primary">LogOut <LuLogOut className="text-xl"></LuLogOut></button> : <Link to="/login"><button className="btn btn-success hover:bg-green-700">Login <LuLogIn className="text-xl"></LuLogIn></button></Link>
                    }

                </div>
            </div>

            {
                user && <>
                    <hr className="border mx-5" />
                    <div className="flex justify-center items-center gap-3 p-3">
                        <h2 className="text-xl font-bold">{user.displayName}</h2>
                        <img className="w-12 rounded-full" src={user.photoURL} alt="" />
                    </div>
                </>
            }
        </div>
    );
};

export default Navbar;