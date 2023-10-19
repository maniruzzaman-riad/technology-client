import { createBrowserRouter } from "react-router-dom";
import Root from "../RootFile/Root";
import Home from "../Shared/Home";
import AddProduct from "../InputFild/AddProduct";
import Login from "../InputFild/Login";
import Register from "../InputFild/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;