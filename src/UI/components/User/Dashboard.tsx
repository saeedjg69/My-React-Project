import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../../core/redux/courseSlice";
import { getAllNews } from "../../../core/redux/newsSlice";
import { getAllStudents } from "../../../core/redux/studentSlice";
import { getAllTeachers } from "../../../core/redux/teacherSlice";
import { RootState } from "../../../store";

const Dashboard = () => {
 const { user } = useSelector((state: RootState) => state.user);
 const { students } = useSelector((state: RootState) => state.student);
 const { teachers } = useSelector((state: RootState) => state.teacher);
 const { courses } = useSelector((state: RootState) => state.course);
 const { news } = useSelector((state: RootState) => state.news);
 const dispatch = useDispatch();

 const loadAll = () => {
  dispatch(getAllStudents());
  dispatch(getAllTeachers());
  dispatch(getAllCourses());
  dispatch(getAllNews());
 };

 useEffect(() => {
  user.role === "admin" && loadAll();
 }, [user.role]);

 return (
  <div className="dashboard">
   {user.role === "admin" && (
    <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-center child:border child:bg-mylightblue child:rounded child:p-4">
     <div>تعداد دانشجویان: {students.length}</div>
     <div>تعداد اساتید: {teachers.length}</div>
     <div>تعداد دوره ها: {courses.length}</div>
     <div>تعداد مقالات: {news.length}</div>
    </div>
   )}
   <h1 className="font-bold text-lg mb-3">اطلاعات حساب کاربری</h1>
   <hr />
   <div className="child:md:w-1/2 child:w-full child:inline-block child:my-4">
    <div>نام و نام خانوادگی: {user.fullName}</div>
    <div>شماره موبایل: {user.phoneNumber}</div>
    <div>ایمیل: {user.email}</div>
    <div>شماره ملی: {user.nationalId}</div>
    <div>تاریخ تولد: {user.birthDate}</div>
    {user.role !== "student" && <div>آدرس: {user.address}</div>}
    <div>
     نقش:
     {`${user?.role}` === "teacher"
      ? "استاد"
      : `${user?.role}` === "student"
      ? "دانشجو"
      : "ادمین سایت"}
    </div>
   </div>
  </div>
 );
};
export default Dashboard;
