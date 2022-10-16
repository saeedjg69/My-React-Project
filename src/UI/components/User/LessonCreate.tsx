import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createLesson } from "../../../core/redux/lessonSlice";

const LessonCreate = () => {
 const dispatch = useDispatch();

 const LessonSchema = Yup.object().shape({
  lessonName: Yup.string()
   .min(2, "نام درس باید حداقل دو کاراکتر باشد")
   .max(50, "نام درس باید حداکثر 50 کاراکتر باشد")
   .required("نام درس را وارد کنید"),
  description: Yup.string()
   .min(10, "توضیحات باید حداقل 10 کاراکتر باشد")
   .max(50000, "توضیحات باید حداکثر 50000 کاراکتر باشد")
   .required("ظرفیت دوره را وارد کنید"),
  category: Yup.string().required("دسته بندی را انتخاب کنید"),
 });
 return (
  <div>
   <h1 className="font-bold text-lg">اضافه کردن درس جدید</h1>
   <hr className="my-3" />
   <Formik
    initialValues={{
     lessonName: "",
     topics1: "",
     topics2: "",
     topics3: "",
     description: "",
     image: "",
     category: "",
    }}
    validationSchema={LessonSchema}
    onSubmit={async (values, { resetForm }) => {
     const obj = {
      lessonName: values.lessonName,
      topics: [values.topics1, values.topics2, values.topics3],
      description: values.description,
      image: "jiopjpjp",
      category: values.category,
     };
     await dispatch(createLesson(obj));
     resetForm();
    }}
   >
    {({ errors, touched }) => (
     <Form>
      <span>نام درس:</span>
      <Field
       name="lessonName"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.lessonName && touched.lessonName && (
       <div className="text-xs text-red-600 indent-2">{errors.lessonName}</div>
      )}

      <span className="block">توضیحات:</span>
      <Field
       name="description"
       as="textarea"
       className="border indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.description && touched.description && (
       <div className="text-xs text-red-600 indent-2">{errors.description}</div>
      )}

      <span>دسته بندی:</span>
      <Field
       name="category"
       as="select"
       className="rounded-md shadow my-4 mr-4 p-1"
      >
       <option value="" selected disabled hidden>
        انتخاب کنید...
       </option>
       <option value="4">کامپیوتر</option>
       <option value="1">فیزیک</option>
       <option value="2">ریاضی</option>
       <option value="3">شیمی</option>
       <option value="5">صنعت</option>
       <option value="6">معماری</option>
       <option value="7">برق</option>
       <option value="8">بازار سهام</option>
      </Field>
      {errors.category && touched.category && (
       <div className="text-xs text-red-600 indent-2">{errors.category}</div>
      )}

      <span className="block">سرفصل ها:</span>
      <Field
       name="topics1"
       className="indent-1 rounded-md shadow h-10 w-1/4 my-2 mx-2 border"
      />
      <Field
       name="topics2"
       className="indent-1 rounded-md shadow h-10 w-1/4 my-2 mx-2 border"
      />
      <Field
       name="topics3"
       className="indent-1 rounded-md shadow h-10 w-1/4 my-2 mx-2 border"
      />
      {/* {errors.topics && touched.topics && (
       <div className="text-xs text-red-600 indent-2">{errors.topics}</div>
      )} */}

      <span className="block">تصویر:</span>
      <Field name="image" as="input" type="file" className="my-3" />
      {errors.image && touched.image && (
       <div className="text-xs text-red-600 indent-2">{errors.image}</div>
      )}

      <button
       type="submit"
       className="btn text-color register-btn w-24 h-10 bg-myblue hover:bg-mydarkblue hover:text-white duration-200 mt-4 mb-6 rounded-lg leading-3 block mx-auto shadow-lg"
      >
       افزودن درس
      </button>
     </Form>
    )}
   </Formik>
  </div>
 );
};
export default LessonCreate;
