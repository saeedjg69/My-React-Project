import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RootState } from "../../store";
import {
 Dashboard,
 CoursesList,
 LessonsList,
 NewsList,
 StudentsList,
 TeachersList,
 CommentsList,
 EditProfile,
 StudentAddToCourse,
 CourseCreate,
 LessonCreate,
 NewsCreate,
} from "../../UI/components/User";

const UserRouteConfig = () => {
 const { user } = useSelector((state: RootState) => state.user);

 return (
  <Routes>
   <Route path="/" element={<Dashboard />} />
   <Route path="dashboard" element={<Dashboard />} />
   <Route path="editprofile" element={<EditProfile />} />
   <Route path="CoursesList" element={<CoursesList />} />

   {user.role === "admin" || user.role === "teacher" ? (
    <>
     <Route path="LessonsList" element={<LessonsList />} />
     <Route path="NewsList" element={<NewsList />} />
    </>
   ) : null}

   {user.role === "admin" ? (
    <>
     <Route path="StudentsList/*" element={<StudentsList />} />
     <Route path="TeachersList/*" element={<TeachersList />} />
     <Route path="StudentAddToCourse" element={<StudentAddToCourse />} />
     <Route path="CommentsList" element={<CommentsList />} />
     <Route path="CreateNewCourse" element={<CourseCreate />} />
     <Route path="CreateNewLesson" element={<LessonCreate />} />
     <Route path="AddNews" element={<NewsCreate />} />
    </>
   ) : null}

   {/*   <Route path="StudentsList/:id" element={<UpdateStudentInformation />} />
        <Route path="TeachersList/:id" element={<UpdateTeacherInformation />} />*/}
  </Routes>
 );
};

export default UserRouteConfig;
