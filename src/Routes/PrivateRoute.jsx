import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation()

    if (loding) {
        return <span className="loading loading-bars loading-lg my-20 ms-[45%] bg-purple-700"></span>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;