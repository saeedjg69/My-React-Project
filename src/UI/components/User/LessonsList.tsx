import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import {
 deleteLesson,
 getAllCategories,
 getAllLessons,
} from "../../../core/redux/lessonSlice";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Paginate from "../Paginate";

const LessonsList = () => {
 const { user } = useSelector((state: RootState) => state.user);
 const { lessons, categories } = useSelector(
  (state: RootState) => state.lesson
 );
 const dispatch = useDispatch();
 const [pageNumber, setPageNumber] = useState(0);
 const LessonsPerPage = 6;
 const PageVisited = pageNumber * LessonsPerPage;
 const pageCount = Math.ceil(lessons.length / LessonsPerPage);
 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };

 useEffect(() => {
  if (lessons?.length === 0) dispatch(getAllLessons());
  dispatch(getAllCategories());
 }, [dispatch, lessons]);

 const displayLessons = lessons
  .slice(PageVisited, PageVisited + LessonsPerPage)
  .map((lesson: any) => {
   return (
    <tbody key={lesson._id}className="child:h-12 child:border">
     <tr>
      <td>
       <img className="w-[35px]" src={lesson.image} alt="" />
      </td>
      <td>
       <Link to={`${lesson._id}`}>{lesson.lessonName.substr(0, 38)}</Link>
      </td>
      <td>{lesson.description}</td>
      <td>
       {categories
        .filter((category: any) => {
         return category.id === lesson.category;
        })
        .map((category: any) => {
         return category.name;
        })}
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
         onClick={() => dispatch(deleteLesson(`${lesson._id}`))}
        />
       )}
      </td>
     </tr>
    </tbody>
   );
  });

 const main = () => {
  return (
   <div className="Lessonslist">
    <h1 className="font-bold text-lg mb-10">لیست کل درس ها </h1>
    <span className="float-left ml-3">تعداد کل درس ها: {lessons.length}</span>

    <table className="table-auto w-full text-center border child:border text-sm child:h-12 shadow">
     <thead className="bg-mylightblue">
      <tr>
       <th>تصویر</th>
       <th>نام درس</th>
       <th>توضیحات</th>
       <th>دسته بندی</th>
       <th>ویرایش</th>
       {user.role === "admin" && <th>حذف</th>}
      </tr>
     </thead>
     {displayLessons}
    </table>
   </div>
  );
 };

 return (
  <div className="overflow-hidden my-3">
   {main()}
   {displayLessons.length === 0 ? (
    <div className="mx-auto my-28 text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     هیچ درسی یافت نشد!
    </div>
   ) : (
    <Paginate pageCount={pageCount} onPageChange={onPageChange} />
   )}
  </div>
 );
};
export default LessonsList;
