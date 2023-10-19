import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <h2>this is root file</h2>
        </div>
    );
};

export default Root;