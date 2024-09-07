import { CiCalendarDate } from "react-icons/ci";

const EachNavNews = ({EachNews}) => {
    console.log(EachNews)
    const {
      image_url, 
name,

      } = EachNews
      // author:published_date,
    return (
      
            <div className="card  bg-base-100  shadow-xl">
          <figure>
            <img className="p-3" src={image_url} alt="news-picture" />
          </figure>
          <div className=" flex my-5 justify-between px-3">
            <h2 className="card-title">{name}</h2>
          
            <p className="flex "><CiCalendarDate className="mr-2 w-6 h-6"></CiCalendarDate>{EachNews.author.published_date}</p>
          </div>
        </div>
        
    );
};

export default EachNavNews;