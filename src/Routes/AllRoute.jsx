import { createBrowserRouter } from "react-router-dom";
import Root from "../RootFile/Root";
import Home from "../Shared/Home";
import AddProduct from "../InputFild/AddProduct";
import Login from "../InputFild/Login";
import Register from "../InputFild/Register";
import Products from "../CardPages/Products";


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
                // loader:({params})=>fetch(`http://localhost:5000/products/${params}`)
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