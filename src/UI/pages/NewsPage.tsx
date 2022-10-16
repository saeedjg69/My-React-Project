import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { getAllNews } from "../../core/redux/newsSlice";
import NewsSearch from "../components/News/NewsSearch";
import { like, comment, newsImg } from "../../assets/images";
import { Paginate } from "../components";

const NewsPage = () => {
 const { news } = useSelector((state: RootState) => state.news);
 const [pageNumber, setPageNumber] = useState(0);
 const NewsPerPage = 9;
 const PageVisited = pageNumber * NewsPerPage;
 const [searchValue, setSearchValue] = useState("");
 const [blogCheckbox, setBlogCheckbox] = useState("");
 const [newsCheckbox, setNewsCheckbox] = useState("");
 const dispatch = useDispatch();

 useEffect(() => {
  if (news?.length === 0) dispatch(getAllNews());
 }, [dispatch, news]);

 const displayNews = news
  .filter((news: any) => {
   if (!newsCheckbox && !blogCheckbox) return news;
   else if (newsCheckbox && news.category === "news") return news;
   else if (blogCheckbox && news.category === "article") return news;
   else return null;
  })
  .filter((news: any) => {
   if (searchValue === "") return news;
   else if (news.title.toLocaleLowerCase().includes(searchValue.toLowerCase()))
    return news;
   else return null;
  })
  .slice(PageVisited, PageVisited + NewsPerPage)
  .map((news: any) => {
   return (
    <div key={news._id} className="sm:float-right sm:w-1/2 lg:w-1/3 mb-10">
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
        to={`${news._id}`}
        className="block mt-4 text-sm lg:text-lg mr-3 text-mydarkblue"
       >
        {news.title.length > 40 ? news.title.substr(0, 40) + "..." : news.title}
       </Link>
      </div>
      <hr className="w-5/6 my-3 mx-auto" />
      <div>
       <Link
        to={`${news._id}`}
        className="inline-block mb-2 px-5 py-2 text-xs mx-3 bg-mylightblue text-mydarkblue rounded-md shadow"
       >
        مطالعه
       </Link>
       <span className="float-left mx-3 mb-3 child:inline-block child:mx-2">
        <img src={comment} alt="comment" />
        <img src={like} alt="like" />
       </span>
      </div>
     </div>
    </div>
   );
  });

 const pageCount = Math.ceil(news.length / NewsPerPage);

 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };
 return (
  <div className="my-10 overflow-hidden">
   <NewsSearch
    onChange={(event: any) => {
     setSearchValue(event.target.value);
    }}
    blogCheckbox={(event: any) => {
     setBlogCheckbox(event.target.checked);
    }}
    newsCheckbox={(event: any) => {
     setNewsCheckbox(event.target.checked);
    }}
   />
   {displayNews}
   {displayNews.length === 0 ? (
    <div className=" my-28 mx-auto text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     مقاله ای یافت نشد!
    </div>
   ) : (
    <Paginate pageCount={pageCount} onPageChange={onPageChange} />
   )}
  </div>
 );
};

export default NewsPage;
