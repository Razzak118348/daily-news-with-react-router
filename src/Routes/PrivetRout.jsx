import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    // jei jaygay jaite chai sei jaygay niye jabe => useLocation()
const location = useLocation();
console.log(location)

if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}

   else if(user){
        return children;
    }

   else return <Navigate to={'/login'}></Navigate>;
}
export default PrivetRout;