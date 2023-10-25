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
        {
            user && <>
                <li><NavLink to="/addProduct">Add Product</NavLink></li>
                <li><NavLink to="/cart">My Cart</NavLink></li>
            </>
        }
        <li><NavLink to="/login">Login</NavLink></li>
    </>

    const handleLogOut = () => {
        handleUserLogout()
            .then()
            .catch()
    }

    return (
        <div className=" bg-orange-400 mb-12 mt-5">
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
                    <img className="w-28 rounded-2xl ms-3 hidden md:block" src="https://i.ibb.co/4TkRL3s/techPro.png" alt="" />
                    <h2 className="text-4xl font-bold mx-4">TechPro</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user && <Link to="/login"><button className=" p-3 rounded-full bg-purple-800 text-white hover:bg-pink-600 hover:text-black"><LuLogIn className="text-xl"></LuLogIn></button></Link>
                    }
                    <label className="swap swap-rotate mx-4">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                </div>
            </div>

            {
                user && <>
                    <hr className="border mx-5" />
                    <div className="flex justify-center items-center gap-3 p-3">
                        <h2 className="text-xl font-bold">{user.displayName}</h2>
                        <img className="w-16 rounded-full" src={user.photoURL} alt="" />
                        <button onClick={handleLogOut} className="text-xl font-bold px-4 py-2 rounded-lg bg-purple-800 text-white flex items-center gap-2 hover:bg-pink-600 hover:text-black">LogOut <LuLogOut className="text-xl"></LuLogOut></button>
                    </div>
                </>
            }
        </div>
    );
};

export default Navbar;