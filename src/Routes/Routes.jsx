import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/Newsdetails/NewsDetails";
import Login from "../Pages/Login/Login";


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
            path:'/newsdetails',
            element:<NewsDetails></NewsDetails>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;