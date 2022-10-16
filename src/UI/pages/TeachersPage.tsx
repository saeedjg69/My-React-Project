import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachers } from "../../core/redux/teacherSlice";
import { RootState } from "../../store";
import { userImg } from "../../assets/images";

const TeachersPage = () => {
 const { teachers } = useSelector((state: RootState) => state.teacher);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getAllTeachers());
 }, [dispatch]);

 return (
  <div className="teachers md:w-3/4 mx-auto text-justify my-14 leading-10 p-5 border rounded-lg bg-mylightblue text-mydarkblue shadow-md overflow-hidden">
   <h1 className="text-2xl mb-5">معرفی اساتید</h1>
   {teachers.map((teacher: any) => {
    return (
     <div key={teacher._id} className="border float-right mx-4 text-center">
      <div className="w-48 h-48 border rounded-full">
       <img src={userImg} alt="تصویر استاد"></img>
      </div>
      <div>{teacher.fullName}</div>
     </div>
    );
   })}
  </div>
 );
};

export default TeachersPage;
