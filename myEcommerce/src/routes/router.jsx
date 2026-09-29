import { createBrowserRouter } from "react-router";
import Login from "../components/login/Login";  
import Signup from "../components/signup";
import Products from "../products/Products";



export const router = createBrowserRouter([
    {path : "/",
     element: <Login/>
    },
    {path :"/signup",
     element : <Signup />
    },
      {path :"/products",
     element : <Products />
    },
]);