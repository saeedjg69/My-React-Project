import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { newsImg } from "../../../assets/images";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteNews, getAllNews } from "../../../core/redux/newsSlice";
import Paginate from "../Paginate";

const NewsList = () => {
 const { user } = useSelector((state: RootState) => state.user);
 const { news } = useSelector((state: RootState) => state.news);
 const dispatch = useDispatch();
 const [searchValue, setSearchValue] = useState("");
 const [pageNumber, setPageNumber] = useState(0);
 const NewsPerPage = 6;
 const PageVisited = pageNumber * NewsPerPage;
 const pageCount = Math.ceil(news.length / NewsPerPage);
 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };

 useEffect(() => {
  if (news?.length === 0) dispatch(getAllNews());
 }, [dispatch, news]);

 const displayNews = news
  .filter((news: any) => {
   if (searchValue === "") return news;
   else if (news.title.toLocaleLowerCase().includes(searchValue.toLowerCase()))
    return news;
   else return null;
  })
  .slice(PageVisited, PageVisited + NewsPerPage)
  .map((news: any) => {
   return (
    <tbody key={news._id} className="child:h-12 child:border">
     <tr>
      <td>
       <img className="w-14" src={newsImg} alt="newsImg" />
      </td>
      <td>
       <Link to={`${news._id}`}>
        {news.title.length > 30 ? news.title.substr(0, 30) + "..." : news.title}
       </Link>
      </td>
      <td>{`${news?.category}` === "article" ? "مقاله" : "خبر"}</td>
      <td>
       {news.text.length > 30 ? news.text.substr(0, 30) + "..." : news.text}
      </td>
      <td>
       <FiEdit
        size={20}
        className="mx-auto cursor-pointer hover:brightness-200"
       />
      </td>
      <td>
       {user.role === "admin" && (
        <RiDeleteBinLine
         size={25}
         className="mx-auto cursor-pointer hover:brightness-200"
         onClick={() => dispatch(deleteNews(`${news._id}`))}
        />
       )}
      </td>
     </tr>
    </tbody>
   );
  });

 const main = () => {
  return (
   <div className="Newslist">
    <h1 className="font-bold text-lg mb-10">لیست کل مقالات </h1>
    <span className="float-left ml-3">تعداد کل مقالات: {news.length}</span>
    <input
     className="my-2 w-full md:w-1/2 mr-3 block border text-sm rounded-lg placeholder:text-mygreen p-2 shadow"
     placeholder="جستجو ..."
     onChange={(event) => setSearchValue(event.target.value)}
    />
    <table className="table-auto w-full text-center border child:border text-sm child:h-12 shadow">
     <thead className="bg-mylightblue">
      <tr>
       <th>تصویر</th>
       <th>عنوان مقاله</th>
       <th>دسته بندی</th>
       <th>متن مقاله</th>
       <th>ویرایش</th>
       {user.role === "admin" && <th>حذف</th>}
      </tr>
     </thead>
     {displayNews}
    </table>
   </div>
  );
 };

 return (
  <div className="overflow-hidden my-3">
   {main()}
   {displayNews.length === 0 ? (
    <div className="my-28 text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     مقاله ای یافت نشد!
    </div>
   ) : (
    <Paginate pageCount={pageCount} onPageChange={onPageChange} />
   )}
  </div>
 );
};
export default NewsList;
