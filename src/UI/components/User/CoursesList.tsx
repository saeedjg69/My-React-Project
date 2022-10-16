import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import { deleteCourse, getAllCourses } from "../../../core/redux/courseSlice";
import { courseImg2 } from "../../../assets/images";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Paginate from "../Paginate";

const CoursesList = () => {
 const { courses } = useSelector((state: RootState) => state.course);
 const { user } = useSelector((state: RootState) => state.user);
 const dispatch = useDispatch();
 const [searchValue, setSearchValue] = useState("");
 const [pageNumber, setPageNumber] = useState(0);
 const coursesPerPage = 6;
 const PageVisited = pageNumber * coursesPerPage;
 const pageCount = Math.ceil(courses.length / coursesPerPage);
 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };

 useEffect(() => {
  dispatch(getAllCourses());
 }, [dispatch]);

 const displaycourses = courses
  .filter((course: any) => {
   if (user.role === "teacher" && course.teacher._id === user._id)
    return course;
   else if (
    user.role === "student" &&
    course.students.find((student: any) => student._id === user._id)
   )
    return course;
   else if (user.role === "admin") return course;
   else return null;
  })
  .filter((course: any) => {
   if (searchValue === "") return course;
   else if (
    course.title.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
    course.teacher.fullName
     .toLocaleLowerCase()
     .includes(searchValue.toLowerCase())
   )
    return course;
   else return null;
  })
  .slice(PageVisited, PageVisited + coursesPerPage)
  .map((course: any) => {
   return (
    <tbody key={course._id} className="child:h-12 child:border">
     <tr>
      <td>
       <img className="w-10 mr-2" src={courseImg2} alt="courseImg2" />
      </td>
      <td>
       <Link to={`${course._id}`}>{course.title.substr(0, 38)}</Link>
      </td>
      {user.role === "admin" && <td>{course.teacher.fullName}</td>}
      <td>{course.capacity}</td>
      <td>{course.startDate.substr(0, 10)}</td>
      <td> {course.cost === 0 ? "رایگان" : course.cost + "تومان"}</td>
      {user.role === "admin" && (
       <td>
        <FiEdit
         size={20}
         className="mx-auto cursor-pointer hover:brightness-200"
        />
       </td>
      )}
      {user.role === "admin" && (
       <td>
        <RiDeleteBinLine
         size={25}
         className="mx-auto cursor-pointer hover:brightness-200"
         onClick={() => dispatch(deleteCourse(`${course._id}`))}
        />
       </td>
      )}
     </tr>
    </tbody>
   );
  });
 const main = () => {
  return (
   <div className="courseslist">
    <h1 className="font-bold text-lg mb-4">لیست دوره ها</h1>
    <span className="float-left ml-3">
     تعداد دوره ها: {displaycourses.length}
    </span>
    <input
     className="my-2 w-full md:w-1/2 mr-3 block border text-sm rounded-lg placeholder:text-mygreen p-2 shadow"
     placeholder="جستجو ..."
     onChange={(event) => setSearchValue(event.target.value)}
    />
    <table className="table-auto w-full text-center border child:border text-sm child:h-12 shadow">
     <thead className="bg-mylightblue">
      <tr>
       <th>تصویر</th>
       <th>نام دوره</th>
       {user.role === "admin" && <th>استاد</th>}
       <th>ظرفیت</th>
       <th>تاریخ شروع</th>
       <th>قیمت</th>
       {user.role === "admin" && <th>ویرایش</th>}
       {user.role === "admin" && <th>حذف</th>}
      </tr>
     </thead>
     {displaycourses}
    </table>
   </div>
  );
 };

 return (
  <div className="overflow-hidden my-3">
   {main()}
   {displaycourses.length === 0 ? (
    <div className="my-28 xl:w-3/4 lg:w-2/3 sm:w-1/2 w-full mx-auto text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     دوره ای یافت نشد!
    </div>
   ) : (
    <Paginate pageCount={pageCount} onPageChange={onPageChange} />
   )}
  </div>
 );
};
export default CoursesList;
