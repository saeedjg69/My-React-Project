import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RootState } from "../../../store";
import {
 addStudentToCourse,
 getAllStudents,
 removeStudentFromCourse,
} from "../../../core/redux/studentSlice";
import { getAllCourses } from "../../../core/redux/courseSlice";

const StudentAddToCourse = () => {
 const { students } = useSelector((state: RootState) => state.student);
 const { courses } = useSelector((state: RootState) => state.course);
 const [studentId, setStudentId] = useState("");
 const dispatch = useDispatch();

 useEffect(() => {
  if (students?.length === 0) dispatch(getAllStudents());
  if (courses?.length === 0) dispatch(getAllCourses());
 }, [dispatch, students, courses]);

 const remove = async (courseId: any) => {
  const id = studentId;
  const obj = { courseId: courseId };
  await dispatch(removeStudentFromCourse({ id, obj }));
  dispatch(getAllStudents());
 };

 return (
  <div>
   <h1 className="font-bold text-lg">ثبت نام دانشجو در دوره</h1>
   <hr className="my-3" />
   <Formik
    initialValues={{
     student: "",
     course: "",
    }}
    validationSchema={Yup.object().shape({
     student: Yup.string().required("نام دانشجو را وارد کنید"),
     course: Yup.string().required("نام دوره را وارد کنید"),
    })}
    onSubmit={async (values) => {
     const id = values.student;
     const obj = {
      courseId: values.course,
     };
     await dispatch(addStudentToCourse({ id, obj }));
     dispatch(getAllStudents());
    }}
   >
    {({ errors, touched }) => (
     <Form>
      <span>انتخاب دانشجو:</span>
      <Field
       name="student"
       as="select"
       className="indent-3 rounded-md shadow h-10 w-full my-2"
       onClick={(e: any) => setStudentId(e.target.value)}
      >
       <option value="" disabled hidden>
        انتخاب کنید...
       </option>
       {students.map((student: any) => {
        return (
         <option
          key={student._id}
          value={student._id}
          onClick={(e: any) => setStudentId(e.target.value)}
         >
          {student.fullName}
         </option>
        );
       })}
      </Field>
      {errors.student && touched.student ? (
       <div className="text-xs text-red-600 indent-2">{errors.student}</div>
      ) : null}

      <span>انتخاب دوره:</span>
      <Field
       name="course"
       as="select"
       className="indent-3 rounded-md shadow h-10 w-full my-2"
      >
       <option value="" disabled hidden>
        انتخاب کنید...
       </option>
       {courses.map((course: any) => {
        return (
         <option key={course._id} value={course._id}>
          {course.title}
         </option>
        );
       })}
      </Field>
      {errors.course && touched.course ? (
       <div className="text-xs text-red-600 indent-2">{errors.course}</div>
      ) : null}
      <button
       type="submit"
       className="btn text-color register-btn w-36 h-10 bg-myblue hover:bg-mydarkblue hover:text-white duration-200 mt-4 mb-6 rounded-lg leading-3 block mx-auto shadow-lg"
      >
       ثبت نام دانشجو
      </button>
     </Form>
    )}
   </Formik>
   <h2 className="my-3"> دوره های ثبت شده دانشجو</h2>
   {students
    .filter((student: any) => student._id === studentId)
    .map((student: any) => (
     <div key={student._id}>
      {student.courses.map((course: any) => (
       <div key={course._id}>
        {/* عدم نمایش دوره هایی که کلا از سایت حذف شدند */}
        {courses
         .filter((c: any) => c._id === course._id)
         .map((course: any) => (
          <div
           key={course._id}
           className="border rounded p-2 md:w-1/2 bg-mylightblue mb-1"
          >
           <span>{course.title}</span>
           <span
            onClick={() => remove(course._id)}
            className="float-left mr-3 text-red-600 hover:text-white rounded hover:bg-red-600 duration-200 p-1 cursor-pointer leading-4"
           >
            حذف
           </span>
          </div>
         ))}
       </div>
      ))}
     </div>
    ))}
  </div>
 );
};
export default StudentAddToCourse;
