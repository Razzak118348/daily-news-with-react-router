import { useEffect, useState } from "react";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="font-poppins ">
            <h2 className="text-2xl font-semibold">All category :{categories.length}</h2> 
        </div>
    );
};

export default LeftSideNav;