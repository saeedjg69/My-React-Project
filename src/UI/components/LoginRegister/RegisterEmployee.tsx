import { Link } from "react-router-dom";
import RegisterEmployeeForm from "./RegisterEmployeeForm";
import { register } from "../../../assets/images";

const RegisterEmployee = () => {
 return (
  <div className="register overflow-hidden my-6 w-4/5 mx-auto md:child:w-1/2 bg-mylightblue relative shadow-md rounded md:bg-[url('/src/assets/images/TopMenu/background.svg')] bg-[length:500%] bg-center text-mydarkblue">
   <Link to="/loginStudent" className="absolute top-2 right-2 text-sm">
    ➥ ورود دانشجویان
   </Link>
   <div className="md:float-right pt-8">
    <div className="xl:w-2/5 lg:w-1/2 md:w-3/4 sm:w-1/2 w-2/3 h-10 rounded-3xl bg-myblue mx-auto shadow">
     <Link
      to="/RegisterEmployee"
      className="float-right mr-2 bg-mylightblue shadow rounded-3xl text-center leading-8 inline-block w-2/5 mt-1"
     >
      ثبت نام
     </Link>
     <Link
      to="/LoginEmployee"
      className="float-left ml-2 rounded-3xl text-center leading-8 inline-block w-2/5 mt-1"
     >
      ورود مدرس
     </Link>
    </div>
    <div className="mt-4 w-3/4 mx-auto">
     <h1 className="text-center mb-3"> حساب کاربری خود را ایجاد کنید </h1>
     <RegisterEmployeeForm />
    </div>
   </div>
   <div className="float-left hidden md:block">
    <img
     className="lg:w-3/4 w-11/12 my-16 lg:my-12 xl:my-6 mx-auto"
     src={register}
     alt="register"
    />
   </div>
  </div>
 );
};

export default RegisterEmployee;
