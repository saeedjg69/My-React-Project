import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userbtn, stopwatch2, courseImg2 } from "../../../assets/images";
import { getAllCourses } from "../../../core/redux/courseSlice";
import { RootState } from "../../../store";

const LastAndTopCourses = ({ title }: any) => {
 const { courses } = useSelector((state: RootState) => state.course);
 const dispatch = useDispatch();
 //  const [sortValue, setSortValue] = useState("");

 const getCourses = async () => {
  await dispatch(getAllCourses());
 };
 useEffect(() => {
  getCourses();
 }, []);

 const displaycourses = courses
  // .sort((a, b) => {
  //  return a.startDate > b.startDate ? -1 : 1;
  // })
  .slice(0, 8)
  .map((course: any) => {
   return (
    <div
     key={course._id}
     title={course.lesson.description}
     className="sm:float-right sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-10 animate-[wiggle_0.5s_ease-in-out]"
    >
     <Link
      to={`/coursesPage/${course._id}`}
      className="w-5/6 mx-auto border block rounded-lg shadow-lg hover:shadow-2xl duration-200"
     >
      <div>
       <img className="w-full" src={courseImg2} alt="course" />
      </div>
      <div className="mx-3">
       <h1 className="my-3 text-sm text-mydarkblue">
        {course.title.substr(0, 34)}
       </h1>
       <span className="mt-1 float-right w-4">
        <img src={userbtn} alt="userbtn" />{" "}
       </span>
       <span className="inline-block text-xs mr-1 text-mygray">
        {course.teacher.fullName}
       </span>
      </div>
      <hr className="w-5/6 my-3 mx-auto" />
      <div className="mx-3 pb-6">
       <span className="float-right">
        <img src={stopwatch2} alt="stopwatch" />{" "}
       </span>
       <span className="float-right inline-block text-xs mr-1 text-mygray">
        {course.startDate.substr(0, 10)}
       </span>
       <span className="float-left mx-3 text-xs text-mygreen">
        {course.cost === 0 ? "رایگان" : course.cost + "تومان"}
       </span>
      </div>
     </Link>
    </div>
   );
  });

 return (
  <div className="overflow-hidden mt-3">
   <div className="h-20">
    <a
     href="#"
     className="float-right mt-5 pb-3 text-lg text-mygreen border-b-2 border-mygreen"
    >
     {title}
    </a>
    <Link
     to="/CoursesPage"
     className="float-left mt-3 text-sm p-4 bg-mylightblue text-mydarkblue hover:shadow-[lightblue_0px_0px_0px_30px_inset] duration-200 border  hover:text-white rounded-lg cursor-pointer"
    >
     مشاهده همه دوره ها
    </Link>
   </div>
   {displaycourses}
   {displaycourses.length == 0 ? (
    <div className="float-left my-28 xl:w-3/4 lg:w-2/3 sm:w-1/2 w-full text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     دوره ای یافت نشد!
    </div>
   ) : null}
  </div>
 );
};
export default LastAndTopCourses;
