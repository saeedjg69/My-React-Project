import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createNews } from "../../../core/redux/newsSlice";

const NewsCreate = () => {
 const [selectedFile, setSelectedFile] = useState(null);
 const dispatch = useDispatch();

 const onChangeHandler = (event: any) => {
  setSelectedFile(event.target.files[0]);
 };

 const NewsSchema = Yup.object().shape({
  title: Yup.string()
   .min(5, "عنوان باید حداقل دو کاراکتر باشد")
   .max(200, "عنوان باید حداکثر 200 کاراکتر باشد")
   .required("عنوان را وارد کنید"),
  text: Yup.string()
   .max(10000, "حداکثر 10000 کاراکتر")
   .required("متن مقاله را وارد کنید"),
 });
 return (
  <div>
   <h1 className="font-bold text-lg">درج مقاله جدید</h1>
   <hr className="my-3" />
   <ToastContainer />
   <Formik
    initialValues={{
     title: "",
     category: "",
     image: "",
     text: "",
    }}
    validationSchema={NewsSchema}
    onSubmit={async (values, { resetForm }) => {
     const obj = {
      title: values.title,
      category: values.category,
      image: values.image,
      text: values.text,
     };
     await dispatch(createNews(obj));
     resetForm();
    }}
   >
    {({ errors, touched }) => (
     <Form>
      <span>دسته بندی:</span>

      <label htmlFor="category" className="form-control inline-block my-4 mx-3">
       مقاله
       <Field name="category" type="radio" value="article" />
      </label>
      <label htmlFor="category" className="form-control mx-3">
       خبر
       <Field name="category" type="radio" value="news" />
      </label>

      <span className="block">عنوان:</span>
      <Field
       name="title"
       className="form-control placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2"
      />
      {errors.title && touched.title ? (
       <div className="text-xs text-red-600 indent-2">{errors.title}</div>
      ) : null}
      <span className="block">متن مقاله:</span>
      <Field
       name="text"
       as="textarea"
       className="form-control  placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2 min-h-[200px]"
      />
      {errors.text && touched.text ? (
       <div className="text-xs text-red-600 indent-2">{errors.text}</div>
      ) : null}
      <span className="block">عکس مقاله:</span>
      <Field
       name="image"
       className="form-control  placeholder-green-600  indent-3 rounded-md shadow h-10 w-full my-2"
      >
       {({ field, form: { touched, errors }, meta }: any) => (
        <input type="file" name="file" onChange={onChangeHandler} {...field} />
       )}
      </Field>

      <button
       type="submit"
       className="btn text-color register-btn w-24 h-10 bg-myblue hover:bg-mydarkblue hover:text-white duration-200 mt-4 mb-6 rounded-lg leading-3 block mx-auto shadow-lg"
      >
       درج مقاله
      </button>
     </Form>
    )}
   </Formik>
  </div>
 );
};
export default NewsCreate;
