import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [newsFornav, setNewsforNav] = useState([]);
  const [NavNewsForSelection, setNavNewsForSelection] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsforNav(data));
  }, []);

  //first e setNavNewsForselection ke faka rakhte hovbe


  const handleButton = (id) => {
    //ager data erase korte hobe then new upload korte hobe
    // setNavNewsForSelection([])
    console.log(id);
   
    const FilterNews = newsFornav.filter((news) =>(news.category_id) == id);
    // console.log(FilterNews)
    setNavNewsForSelection(FilterNews)
    console.log(NavNewsForSelection)
  };

  return (
    <div className="font-poppins ">
      <h2 className="text-2xl font-semibold">All category </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
        {categories.map((category) => (
          <button
            onClick={() => {
              handleButton(category.id);
            }}
            className=" ml-4 p-2 text-lg md:text-xl font-semibold my-4   text-center lg:text-start bg-gray-200 w-auto md:w-60 lg:w-auto rounded-lg md:rounded-xl  grid grid-cols-1 "
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src="" alt="news-picture" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
