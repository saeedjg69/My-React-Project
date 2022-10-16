import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { like, comment, newsImg } from "../../../assets/images";
import { getAllNews } from "../../../core/redux/newsSlice";
import { RootState } from "../../../store";

const LastNews = () => {
 const { news } = useSelector((state: RootState) => state.news);
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getAllNews());
 }, [dispatch]);

 const displayBlogs = news
  // .sort((a, b) => {
  //  return a._id > b._id ? -1 : 1;
  // })
  .slice(0, 6)
  .map((news: any) => {
   return (
    <div key={news._id} className="sm:float-right sm:w-1/2 lg:w-1/3 mb-10 ">
     <div
      className="Card w-5/6 mx-auto border rounded-lg block shadow-lg hover:shadow-2xl duration-200"
      title={news.title}
     >
      <Link to={`${news._id}`}>
       <div className="h-60">
        <img className="w-full" src={newsImg} alt="blog" />
       </div>
      </Link>
      <div>
       <Link
        to="/Blog"
        className="block mt-4 text-sm lg:text-lg mr-3 text-mydarkblue"
       >
        {news.title.length > 40 ? news.title.substr(0, 40) + "..." : news.title}
       </Link>
      </div>
      <hr className="w-5/6 my-3 mx-auto" />
      <div>
       <a
        href="#"
        className="inline-block mb-2 px-5 py-2 text-xs mx-3 bg-mylightblue text-mydarkblue rounded-md shadow"
       >
        مطالعه
       </a>
       <span className="float-left mx-3 mb-3 child:inline-block child:mx-2">
        <img src={comment} alt="comment" />
        <img src={like} alt="like" />
       </span>
      </div>
     </div>
    </div>
   );
  });
 return (
  <div className="mt-8 overflow-hidden">
   <div className="h-20">
    <div className="float-right mt-5 pb-3 text-lg text-mygreen border-b-2 border-mygreen">
     آخرین مقالات سایت
    </div>
    <Link
     to="/BlogsPage"
     className="float-left mt-3 text-sm p-4 bg-mylightblue text-mydarkblue hover:shadow-[lightblue_0px_0px_0px_30px_inset] duration-200 border  hover:text-white rounded-lg cursor-pointer"
    >
     مشاهده همه مقالات
    </Link>
   </div>
   {displayBlogs}
   {displayBlogs.length === 0 ? <div>مقاله ای یافت نشد!</div> : null}
  </div>
 );
};
export default LastNews;
