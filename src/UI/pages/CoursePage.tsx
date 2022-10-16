import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { courseImg } from "../../assets/images";
import { RootState } from "../../store";
import { addStudentToCourse } from "../../core/redux/studentSlice";
import {
 CourseDetails,
 CourseContent,
 CourseComments,
 CourseShare,
} from "../components/Courses";
import { useEffect } from "react";
import { getAllCourses } from "../../core/redux/courseSlice";
import { toast } from "react-toastify";

const CoursePage = () => {
 const { courses } = useSelector((state: RootState) => state.course);
 const { user } = useSelector((state: RootState) => state.user);
 const { id } = useParams();
 const dispatch = useDispatch();

 useEffect(() => {
  if (courses?.length === 0) dispatch(getAllCourses());
 }, [dispatch, courses]);

 const add = async (courseId: any) => {
  const id = user._id;
  const obj = { courseId: courseId };
  await dispatch(addStudentToCourse({ id, obj }));
 };
 const Details = courses
  .filter((course: any) => course._id === id)
  .map((course: any) => {
   return (
    <div
     key={course._id}
     className="child:mt-8 mb-20 md:overflow-hidden text-mydarkblue"
    >
     <CourseDetails
      cost={course.cost}
      title={course.title}
      teacher={course.teacher.fullName}
      startDate={course.startDate}
      endDate={course.endDate}
      capacity={course.capacity}
      lesson={course.lesson.lessonName}
      onClick={() => {
       user
        ? user.role === "student"
          ? add(course._id)
          : toast.error("ثبت نام فقط برای دانشجویان امکان پذیر است")
        : toast.error("لطفا ابتدا وارد سایت شوید");
      }}
     />
     <div className="main md:float-left md:w-[60%] md:mr-1">
      <CourseContent image={courseImg} title={course.title} />
      <CourseComments />
     </div>
     <CourseShare />
    </div>
   );
  });
 return <div>{Details}</div>;
};

export default CoursePage;
