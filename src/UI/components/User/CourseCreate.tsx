import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RootState } from "../../../store";
import { createCourse } from "../../../core/redux/courseSlice";
import { getAllLessons } from "../../../core/redux/lessonSlice";
import { getAllTeachers } from "../../../core/redux/teacherSlice";

const CourseCreate = () => {
 const dispatch = useDispatch();
 const { teachers } = useSelector((state: RootState) => state.teacher);
 const { lessons } = useSelector((state: RootState) => state.lesson);

 useEffect(() => {
  dispatch(getAllTeachers());
  dispatch(getAllLessons());
 }, [dispatch]);

 const CourseSchema = Yup.object().shape({
  title: Yup.string()
   .min(2, "عنوان باید حداقل دو کاراکتر باشد")
   .max(50, "عنوان باید حداکثر 50 کاراکتر باشد")
   .required("عنوان را وارد کنید"),
  cost: Yup.string()
   .matches(/^[0-9]+$/, "فقط مجاز به استفاده از اعداد می باشید")
   .max(8, "قیمت وارد شده صحیح نمی باشد")
   .required("قیمت دوره را وارد کنید"),
  endDate: Yup.string()
   .min(10, "تاریخ وارد شده صحیح نمی باشد")
   .max(10, "تاریخ وارد شده صحیح نمی باشد")
   .required("تاریخ پایان دوره را وارد کنید"),
  startDate: Yup.string()
   .min(10, "تاریخ وارد شده صحیح نمی باشد")
   .max(10, "تاریخ وارد شده صحیح نمی باشد")
   .required("تاریخ شروع دوره را وارد کنید"),
  capacity: Yup.string()
   .matches(/^[0-9]+$/, "فقط مجاز به استفاده از اعداد می باشید")
   .max(100, "شماره وارد شده صحیح نمی باشد")
   .required("ظرفیت دوره را وارد کنید"),
  teacher: Yup.string().required("نام مدرس را وارد کنید"),
  lesson: Yup.string().required("نام درس را وارد کنید"),
 });
 return (
  <div>
   <h1 className="font-bold text-lg">اضافه کردن دوره جدید</h1>
   <hr className="my-3" />
   <Formik
    initialValues={{
     title: "",
     cost: "",
     endDate: "",
     startDate: "",
     capacity: "",
     teacher: "",
     lesson: "",
    }}
    validationSchema={CourseSchema}
    onSubmit={async (values, { resetForm }) => {
     const obj = {
      title: values.title,
      cost: values.cost,
      endDate: values.endDate,
      startDate: values.startDate,
      capacity: values.capacity,
      teacher: values.teacher,
      lesson: values.lesson,
     };
     await dispatch(createCourse(obj));
     resetForm();
    }}
   >
    {({ errors, touched }) => (
     <Form>
      <span>عنوان:</span>
      <Field
       name="title"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.title && touched.title && (
       <div className="text-xs text-red-600 indent-2">{errors.title}</div>
      )}

      <span>قیمت:</span>
      <Field
       name="cost"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.cost && touched.cost && (
       <div className="text-xs text-red-600 indent-2">{errors.cost}</div>
      )}

      <span>تاریخ شروع:</span>
      <Field
       name="startDate"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.startDate && touched.startDate && (
       <div className="text-xs text-red-600 indent-2">{errors.startDate}</div>
      )}

      <span>تاریخ پایان:</span>
      <Field
       name="endDate"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.endDate && touched.endDate && (
       <div className="text-xs text-red-600 indent-2">{errors.endDate}</div>
      )}

      <span>ظرفیت:</span>
      <Field
       name="capacity"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.capacity && touched.capacity && (
       <div className="text-xs text-red-600 indent-2">{errors.capacity}</div>
      )}

      <span>مدرس:</span>
      <Field
       name="teacher"
       as="select"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      >
       <option value="" selected disabled hidden>
        انتخاب کنید...
       </option>
       {teachers.map((teacher: any) => {
        return <option value={teacher._id}>{teacher.fullName}</option>;
       })}
      </Field>

      {errors.teacher && touched.teacher && (
       <div className="text-xs text-red-600 indent-2">{errors.teacher}</div>
      )}

      <span>درس:</span>
      <Field
       name="lesson"
       as="select"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      >
       <option value="" selected disabled hidden>
        انتخاب کنید...
       </option>
       {lessons.map((lesson: any) => {
        return <option value={lesson._id}>{lesson.lessonName}</option>;
       })}
      </Field>
      {errors.lesson && touched.lesson && (
       <div className="text-xs text-red-600 indent-2">{errors.lesson}</div>
      )}

      <button
       type="submit"
       className="btn text-color register-btn w-24 h-10 bg-myblue hover:bg-mydarkblue hover:text-white duration-200 mt-4 mb-6 rounded-lg leading-3 block mx-auto shadow-lg"
      >
       ایجاد دوره
      </button>
     </Form>
    )}
   </Formik>
  </div>
 );
};
export default CourseCreate;
