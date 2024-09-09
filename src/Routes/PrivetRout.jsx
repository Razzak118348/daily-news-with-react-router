import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
// console.log(children)
    const {user,loading} = useContext(AuthContext)

    // jei jaygay jaite chai sei jaygay niye jabe => useLocation()
const location = useLocation();
console.log(location.pathname)

if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}

   else if(user){
        return children;
    }
// jdi login kora na theke tokhon login kore sei news e click korsilo oi news er state e niye jabe
   else return <Navigate state={location.pathname} to={'/login'}></Navigate>;
}
export default PrivetRout;