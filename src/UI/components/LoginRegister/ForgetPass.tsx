import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ForgetPassword } from "../../../core/redux/userSlice";
import { RootState } from "../../../store";
import { ClipLoader } from "react-spinners";
import { forgetPass } from "../../../assets/images";

const ForgetPass = () => {
 const dispatch = useDispatch();
 const { isLoading } = useSelector((state: RootState) => state.user);

 return (
  <div className="forgetPass h-[420px] mb-[140px] mt-[90px] w-4/5 mx-auto md:child:w-1/2  bg-mylightblue relative shadow-md rounded md:bg-[url('/src/assets/images/TopMenu/background.svg')] bg-[length:230%] bg-center text-mydarkblue">
   <Link to="/LoginStudent" className="absolute top-2 right-2 text-sm">
    ↑ بازگشت
   </Link>
   <div className="md:float-right pt-8">
    <div className="xl:w-2/5 lg:w-1/2 md:w-3/4 sm:w-1/2 w-2/3 h-10 rounded-3xl bg-myblue mx-auto shadow">
     <Link
      to="/RegisterStudent"
      className="float-right mr-2 rounded-3xl text-center leading-8 inline-block w-2/5 mt-1"
     >
      ثبت نام
     </Link>
     <Link
      to="/LoginStudent"
      className="float-left ml-2 bg-mylightblue shadow rounded-3xl text-center leading-8 inline-block w-2/5 mt-1"
     >
      ورود کاربران
     </Link>
    </div>
    <div className="mt-12 w-3/4 mx-auto">
     <h1 className="text-center"> فراموشی رمز عبور </h1>
     <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object().shape({
       email: Yup.string()
        .email("ایمیل وارد شده معتبر نیست")
        .min(5, "حداقل 5 کارکتر")
        .max(32, "حداکثر 32 کارکتر")
        .required("پر کردن فیلد الزامیست"),
      })}
      onSubmit={(values) => {
       dispatch(
        ForgetPassword({
         email: values.email,
        })
       );
      }}
     >
      {({ errors, touched }) => (
       <Form>
        <Field
         type="email"
         name="email"
         placeholder="ایمیل"
         className="h-10 w-full mt-8 indent-3 shadow placeholder-green-600 rounded-md"
        />
        {errors.email && touched.email ? (
         <div className=" text-red-600 indent-2 mt-2">{errors.email}</div>
        ) : null}
        <button
         type="submit"
         disabled={isLoading}
         className="w-32 h-10 bg-myblue hover:bg-mydarkblue hover:text-white duration-200 mt-7 mb-3 rounded-lg leading-10 block mx-auto shadow-lg text-center"
        >
         {isLoading ? (
          <ClipLoader
           color="#fff"
           size={30}
           className="mt-1"
           aria-label="Loading Spinner"
          />
         ) : (
          "بازیابی رمز عبور"
         )}
        </button>
       </Form>
      )}
     </Formik>
    </div>
   </div>
   <div className="float-left hidden md:block">
    <img
     className=" w-11/12 my-20 lg:my-16 xl:my-10 mx-auto"
     src={forgetPass}
     alt="forgetPass"
    />
   </div>
  </div>
 );
};

export default ForgetPass;
