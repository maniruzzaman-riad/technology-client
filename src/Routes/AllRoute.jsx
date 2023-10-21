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
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/cart',
                element:<Carts></Carts>,
                loader:()=>fetch('http://localhost:5000/cart')
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