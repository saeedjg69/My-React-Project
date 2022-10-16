import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {
 deleteTeacher,
 getAllTeachers,
} from "../../../core/redux/teacherSlice";
import Paginate from "../Paginate";

const TeachersList = () => {
 const { teachers } = useSelector((state: RootState) => state.teacher);
 const [pageNumber, setPageNumber] = useState(0);
 const dispatch = useDispatch();
 const teachersPerPage = 6;
 const PageVisited = pageNumber * teachersPerPage;
 const [searchValue, setSearchValue] = useState("");
 const pageCount = Math.ceil(teachers.length / teachersPerPage);
 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };

 useEffect(() => {
  if (teachers?.length === 0) dispatch(getAllTeachers());
 }, [dispatch, teachers]);

 const displayteachers = teachers
  .filter((teacher: any) => {
   if (searchValue === "") return teacher;
   else if (
    teacher.email.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
    teacher.fullName.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
    teacher.phoneNumber
     .toLocaleLowerCase()
     .includes(searchValue.toLowerCase()) ||
    teacher.nationalId.toLocaleLowerCase().includes(searchValue.toLowerCase())
   )
    return teacher;
   else return null;
  })
  .slice(PageVisited, PageVisited + teachersPerPage)
  .map((teacher: any) => {
   return (
    <tbody className="child:h-12 child:border">
     <tr>
      <td>
       <img className="w-[35px]" src={teacher.profile} alt="" />
      </td>
      <td>
       <Link to={`${teacher._id}`}>{teacher.fullName}</Link>
      </td>
      <td>{teacher.email}</td>
      <td>{teacher.phoneNumber}</td>
      <td>{teacher.nationalId}</td>
      <td>{teacher.birthDate}</td>
      <td>
       <Link to={`${teacher._id}`}>
        <FiEdit
         size={20}
         className="mx-auto cursor-pointer hover:brightness-200"
        />
       </Link>
      </td>
      <td>
       <RiDeleteBinLine
        size={25}
        className="mx-auto cursor-pointer hover:brightness-200"
        onClick={() => dispatch(deleteTeacher(`${teacher._id}`))}
       />
      </td>
     </tr>
    </tbody>
   );
  });

 const main = () => {
  return (
   <div className="teacherslist">
    <h1 className="font-bold text-lg mb-10">لیست کل اساتید </h1>
    <span className="float-left ml-3">تعداد کل اساتید: {teachers.length}</span>
    <input
     className="my-2 w-full md:w-1/2 mr-3 block border text-sm rounded-lg placeholder:text-mygreen p-2 shadow"
     placeholder="جستجو ..."
     onChange={(event) => setSearchValue(event.target.value)}
    />
    <table className="table-auto w-full text-center border child:border text-sm child:h-12 shadow">
     <thead className="bg-mylightblue">
      <tr>
       <th>تصویر</th>
       <th>نام استاد</th>
       <th>ایمیل</th>
       <th>شماره موبایل</th>
       <th>کد ملی</th>
       <th>تاریخ تولد</th>
       <th>ویرایش</th>
       <th>حذف</th>
      </tr>
     </thead>
     {displayteachers}
    </table>
   </div>
  );
 };

 return (
  <div className="overflow-hidden my-3">
   {main()}
   {displayteachers.length === 0 ? (
    <div className="mt-32 text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     استادی یافت نشد!
    </div>
   ) : (
    <Paginate pageCount={pageCount} onPageChange={onPageChange} />
   )}
  </div>
 );
};
export default TeachersList;
