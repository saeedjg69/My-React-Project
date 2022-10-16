import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import {
 deleteStudent,
 getAllStudents,
} from "../../../core/redux/studentSlice";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Paginate from "../Paginate";
import { userImg } from "../../../assets/images";

const StudentsList = () => {
 const { students } = useSelector((state: RootState) => state.student);
 const [pageNumber, setPageNumber] = useState(0);
 const dispatch = useDispatch();
 const [searchValue, setSearchValue] = useState("");
 const studentsPerPage = 6;
 const PageVisited = pageNumber * studentsPerPage;
 const pageCount = Math.ceil(students.length / studentsPerPage);
 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };

 useEffect(() => {
  if (students?.length === 0) dispatch(getAllStudents());
 }, [dispatch, students]);

 const displaystudents = students
  .filter((student: any) => {
   if (searchValue === "") return student;
   else if (
    student.email.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
    student.fullName.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
    student.phoneNumber
     .toLocaleLowerCase()
     .includes(searchValue.toLowerCase()) ||
    student.nationalId.toLocaleLowerCase().includes(searchValue.toLowerCase())
   )
    return student;
   else return null;
  })
  .slice(PageVisited, PageVisited + studentsPerPage)
  .map((student: any) => {
   return (
    <tbody key={student._id} className="child:h-12 child:border">
     <tr>
      <td>
       <img
        className="w-[35px]"
        src={student.profile ? student.profile : userImg}
        alt="student"
       />
      </td>
      <td>{student.fullName}</td>
      <td>{student.email}</td>
      <td>{student.phoneNumber}</td>
      <td>{student.nationalId}</td>
      <td>{student.birthDate}</td>
      <td>
       <Link to={`${student._id}`}>
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
        onClick={() => dispatch(deleteStudent(`${student._id}`))}
       />
      </td>
     </tr>
    </tbody>
   );
  });

 const main = () => {
  return (
   <div className="studentslist">
    <h1 className="font-bold text-lg mb-10">لیست کل دانشجویان </h1>
    <span className="float-left ml-3">
     تعداد کل دانشجویان: {students.length}
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
       <th>نام دانشجو</th>
       <th>ایمیل</th>
       <th>شماره موبایل</th>
       <th>کد ملی</th>
       <th>تاریخ تولد</th>
       <th>ویرایش</th>
       <th>حذف</th>
      </tr>
     </thead>
     {displaystudents}
    </table>
   </div>
  );
 };

 return (
  <div className="overflow-hidden my-3">
   {main()}
   {displaystudents.length === 0 ? (
    <div className="mt-32 text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     دانشجویی یافت نشد!
    </div>
   ) : (
    <Paginate pageCount={pageCount} onPageChange={onPageChange} />
   )}
  </div>
 );
};
export default StudentsList;
