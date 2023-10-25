import { createBrowserRouter } from "react-router-dom";
import Root from "../RootFile/Root";
import Home from "../Shared/Home";
import AddProduct from "../InputFild/AddProduct";
import Login from "../InputFild/Login";
import Register from "../InputFild/Register";
import Products from "../CardPages/Products";
import Update from "../InputFild/Update";
import Details from "../CardPages/Details";
import Carts from "../CardPages/carts";
import PrivateRoute from "./PrivateRoute";


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
                path:'/products/:brandName',
                element:<Products></Products>,
                // loader:({params})=>fetch(`https://technology-10th-assignment-server.vercel.app/products/${params}`)
            },
            {
                path:'/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader:({params})=>fetch(`https://technology-10th-assignment-server.vercel.app/product/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params})=>fetch(`https://technology-10th-assignment-server.vercel.app/product/${params.id}`)
            },
            {
                path:'/cart',
                element:<PrivateRoute><Carts></Carts></PrivateRoute>,
                loader:()=>fetch('https://technology-10th-assignment-server.vercel.app/cart')
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