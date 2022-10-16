import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RootState } from "../../../store";
import ClipLoader from "react-spinners/ClipLoader";

interface MyFormValues {
 email: string;
 password: string;
}
const LoginForm = ({ action }: any) => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const { isLoading } = useSelector((state: RootState) => state.user);
 const initialValues: MyFormValues = { email: "", password: "" };

 return (
  <div>
   <Formik
    initialValues={initialValues}
    validationSchema={Yup.object().shape({
     email: Yup.string()
      .email("ایمیل وارد شده معتبر نیست")
      .min(5, "حداقل 5 کارکتر")
      .max(32, "حداکثر 32 کارکتر")
      .required("پر کردن فیلد الزامیست"),
     password: Yup.string()
      .min(5, "حداقل 5 کارکتر")
      .max(32, "حداکثر 32 کارکتر")
      .required("پر کردن فیلد الزامیست"),
    })}
    onSubmit={(values) => {
     dispatch(
      action({
       email: values.email,
       password: values.password,
      })
     )
      .unwrap()
      .then((resp: any) => {
       if (resp.status === 200) {
        setTimeout(() => {
         navigate("/Panel");
        }, 2000);
       }
      });
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
      <Field
       type="password"
       name="password"
       placeholder="رمز"
       className="h-10 w-full mt-4 indent-3 shadow placeholder-green-600 rounded-md mb-2"
      />
      {errors.password && touched.password ? (
       <div className=" text-red-600 indent-2 mt-2">{errors.password}</div>
      ) : null}
      <button
       type="submit"
       disabled={isLoading}
       className="w-24 h-10 bg-myblue hover:bg-mydarkblue hover:text-white duration-200 mt-7 mb-3 rounded-lg leading-10 block mx-auto shadow-lg text-center "
      >
       {isLoading ? (
        <ClipLoader
         color="#fff"
         size={30}
         className="mt-1"
         aria-label="Loading Spinner"
        />
       ) : (
        "ورود"
       )}
      </button>
     </Form>
    )}
   </Formik>

   <input type="checkbox" id="rememberme" className="ml-1" />
   <label htmlFor="rememberme" className="text-xs lg:text-sm cursor-pointer">
    مرا به خاطر بسپار
   </label>
   <Link
    to="/ForgetPass"
    className="float-left text-green-600 text-xs lg:text-sm mt-1 underline"
   >
    رمز را فراموش کرده ام
   </Link>
  </div>
 );
};

export default LoginForm;
