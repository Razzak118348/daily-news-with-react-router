import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

 export const AuthContext = createContext(null);
 const auth = getAuth(app);



const AuthProvider = ({children}) => {
const [user , setUser ]= useState(null)
const [loading , setLoading]=useState(true)

const creatUser = (emai,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,emai,password)

}

const LogOut = ()=>{
    setLoading(true)
    return signOut(auth)
}

const SignIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}


//autimatically call hobe ,, jdi user thake tahole nije nije niye nibe  ar na thakle nibe na => jokhon dorkar hobe na thokhon clean korte hobe ,,jokhon onno component e jai tokhon clean korte hobe na hole memory lick korbe tai Unsubscribe korte hoy
useEffect(()=>{
   const Unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
       setLoading(false)
    })
    return ()=>{
        Unsubscribe();
    }
},[])

const authInfo ={user,creatUser,LogOut,SignIn,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
