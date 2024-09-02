import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="font-poppins ">
            <h2 className="text-2xl font-semibold">All category </h2> 
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
           {
                categories.map(category => <Link className=" ml-4 p-2 text-lg md:text-xl font-semibold my-4 border border-gray-400 w-auto md:w-60 lg:w-auto rounded-lg md:rounded-xl  grid grid-cols-1 " key={category.id}>{category.name}</Link>)
            }
           </div>
        </div>
    );
};

export default LeftSideNav;