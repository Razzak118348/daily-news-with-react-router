import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/Newsdetails/NewsDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivetRout from "./PrivetRout";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";


const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/news.json')
            //onno rout e gelel abr home e asle error dey tai ekhane path pawar jonno / dilam,

        },
        {
            path:'/news/:id',
            element:<PrivetRout><NewsDetails></NewsDetails></PrivetRout>,
            loader:()=>fetch('/news.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/career',
          element:<Career></Career>

        }


      ]
    },
  ]);

  export default router;