import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CourseSearch, CourseFilter } from "../components/Courses";
import { userbtn, stopwatch2, courseImg2 } from "../../assets/images";
import { RootState } from "../../store";
import { getAllCourses } from "../../core/redux/courseSlice";
import { Paginate } from "../components";

const CoursesPage = () => {
 const { courses } = useSelector((state: RootState) => state.course);
 const dispatch = useDispatch();
 const [pageNumber, setPageNumber] = useState(0);
 const coursesPerPage = 11;
 const PageVisited = pageNumber * coursesPerPage;
 const [searchValue, setSearchValue] = useState("");
 const [sortValue, setSortValue] = useState("مرتب سازی بر اساس عنوان");
 const [checkboxFree, setCheckboxFree] = useState();
 const [checkboxCash, setCheckboxCash] = useState();

 useEffect(() => {
  if (courses?.length === 0) dispatch(getAllCourses());
 }, [dispatch, courses]);

 const displaycourses = courses
  .filter((course: any) => {
   if (!checkboxFree && !checkboxCash) return course;
   else if (checkboxFree && course.cost === 0) return course;
   else if (checkboxCash && course.cost !== 0) return course;
   else return null;
  })
  .filter((course: any) => {
   if (searchValue === "") return course;
   else if (
    course.title.toLocaleLowerCase().includes(searchValue.toLowerCase())
   )
    return course;
   else return null;
  })
  .sort((a: any, b: any): any => {
   if (sortValue === "مرتب سازی بر اساس عنوان")
    return a.title > b.title ? 1 : -1;
   else if (sortValue === "مرتب سازی بر اساس پایین ترین قیمت")
    return a.cost > b.cost ? 1 : -1;
   else if (sortValue === "مرتب سازی بر اساس بالاترین قیمت")
    return a.cost > b.cost ? -1 : 1;
   else if (sortValue === "مرتب سازی بر اساس مدرس")
    return a.teacher.fullName > b.teacher.fullName ? 1 : -1;
   else if (sortValue === "مرتب سازی بر اساس تاریخ")
    return a.startDate > b.startDate ? -1 : 1;
   else return null;
  })
  .slice(PageVisited, PageVisited + coursesPerPage)
  .map((course: any) => {
   return (
    <div
     key={course._id}
     className="sm:float-right sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-10 animate-[wiggle_0.5s_ease-in-out]"
     title={course.lesson.description}
    >
     <Link
      to={`${course._id}`}
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

 const pageCount = Math.ceil(
  courses.filter((course: any) => {
   if (searchValue === "") return course;
   else if (
    course.title.toLocaleLowerCase().includes(searchValue.toLowerCase())
   )
    return course;
   else return null;
  }).length / coursesPerPage
 );

 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };

 return (
  <div className="overflow-hidden my-3">
   <CourseSearch
    onChange={(event: any) => {
     setSearchValue(event.target.value);
    }}
   />
   <CourseFilter
    onChangeSelectBox={(event: any) => {
     setSortValue(event.target.value);
    }}
    CheckboxFree={(event: any) => {
     setCheckboxFree(event.target.checked);
    }}
    CheckboxCash={(event: any) => {
     setCheckboxCash(event.target.checked);
    }}
   />
   {displaycourses}
   {displaycourses.length === 0 ? (
    <div className="float-left my-28 xl:w-3/4 lg:w-2/3 sm:w-1/2 w-full text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     دوره ای یافت نشد!
    </div>
   ) : (
    displaycourses.length > coursesPerPage && (
      <Paginate pageCount={pageCount} onPageChange={onPageChange} />

    )
   )}
  </div>
 );
};
export default CoursesPage;
