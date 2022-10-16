import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RootState } from "../../../store";
import { RegisterStudent } from "../../../core/redux/userSlice";
import { eyeicon } from "../../../assets/images";
import ClipLoader from "react-spinners/ClipLoader";

interface MyFormValues {
 fullName: string;
 email: string;
 password: string;
 phoneNumber: number | string;
 nationalId: number | string;
 birthDate: string;
}
const RegisterStudentForm = () => {
 const dispatch = useDispatch();
 const [passwordShown, setPasswordShown] = useState(true);
 const { isLoading } = useSelector((state: RootState) => state.user);
 const initialValues: MyFormValues = {
  fullName: "",
  email: "",
  password: "",
  phoneNumber: "",
  nationalId: "",
  birthDate: "",
 };

 return (
  <Formik
   initialValues={initialValues}
   validationSchema={Yup.object().shape({
    fullName: Yup.string()
     .min(2, "نام باید حداقل دو کاراکتر باشد")
     .max(50, "نام باید حداکثر 50 کاراکتر باشد")
     .required("نام کامل خود را وارد کنید"),
    email: Yup.string()
     .email("ایمیل وارد شده معتبر نمی باشد")
     .required("ایمیل خود را وارد کنید"),
    password: Yup.string()
     .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
     .max(50, "رمز عبور باید حداکثر 50 کاراکتر باشد")
     .required("رمز عبور خود را وارد کنید"),
    phoneNumber: Yup.string()
     .matches(/^[0-9]+$/, "فقط مجاز به استفاده از اعداد می باشید")
     .min(11, "شماره وارد شده صحیح نمی باشد")
     .max(11, "شماره وارد شده صحیح نمی باشد")
     .required("شماره تماس خود را وارد کنید"),
    nationalId: Yup.string()
     .matches(/^[0-9]+$/, "فقط مجاز به استفاده از اعداد می باشید")
     .min(10, "شماره وارد شده صحیح نمی باشد")
     .max(10, "شماره وارد شده صحیح نمی باشد")
     .required("کد ملی خود را وارد کنید"),
    birthDate: Yup.string()
     .min(10, "تاریخ وارد شده صحیح نمی باشد")
     .max(10, "تاریخ وارد شده صحیح نمی باشد")
     .required("تاریخ تولد خود را وارد کنید"),
   })}
   onSubmit={(values) => {
    dispatch(
     RegisterStudent({
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      nationalId: values.nationalId,
      birthDate: values.birthDate,
     })
    );
   }}
  >
   {({ errors, touched }) => (
    <Form>
     <Field
      name="fullName"
      placeholder="نام و نام خانوادگی"
      className="form-control placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2"
     />
     {errors.fullName && touched.fullName ? (
      <div className="text-xs text-red-600 indent-2">{errors.fullName}</div>
     ) : null}

     <Field
      name="email"
      type="email"
      placeholder="ایمیل"
      className="form-control  placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2"
     />
     {errors.email && touched.email ? (
      <div className="text-xs text-red-600 indent-2">{errors.email}</div>
     ) : null}

     <div className="relative">
      <Field
       name="password"
       type={passwordShown ? "password" : "text"}
       placeholder="رمز عبور (حداقل 8 کاراکتر) "
       className="form-control  placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2"
      ></Field>
      <div>
       <img
        className="w-6 left-2 top-4 cursor-pointer absolute"
        src={eyeicon}
        onClick={() => {
         setPasswordShown(!passwordShown);
        }}
       />
      </div>

      {errors.password && touched.password ? (
       <div className="text-xs text-red-600 indent-2">{errors.password}</div>
      ) : null}
     </div>
     <Field
      name="phoneNumber"
      placeholder="شماره تماس"
      className="form-control  placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2"
     />
     {errors.phoneNumber && touched.phoneNumber ? (
      <div className="text-xs text-red-600 indent-2">{errors.phoneNumber}</div>
     ) : null}

     <Field
      name="nationalId"
      placeholder="کد ملی"
      className="form-control  placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2"
     />

     {errors.nationalId && touched.nationalId ? (
      <div className="text-xs text-red-600 indent-2">{errors.nationalId}</div>
     ) : null}

     <Field
      name="birthDate"
      placeholder="تاریخ تولد"
      className="form-control  placeholder-green-600 indent-3 rounded-md shadow h-10 w-full my-2"
     />
     {errors.birthDate && touched.birthDate ? (
      <div className="text-xs text-red-600 indent-2">{errors.birthDate}</div>
     ) : null}

     <button
      type="submit"
      disabled={isLoading}
      className="btn text-color register-btn w-24 h-10 bg-myblue hover:bg-mydarkblue hover:text-white duration-200 mt-4 mb-6 rounded-lg leading-3 block mx-auto shadow-lg"
     >
      {isLoading ? (
       <ClipLoader
        color="#fff"
        size={30}
        className="mt-1"
        aria-label="Loading Spinner"
       />
      ) : (
       "ثبت نام"
      )}
     </button>
    </Form>
   )}
  </Formik>
 );
};
export default RegisterStudentForm;
