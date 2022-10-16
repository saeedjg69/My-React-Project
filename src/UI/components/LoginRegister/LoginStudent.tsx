import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { login } from "../../../assets/images";
import { loginStudent } from "../../../core/redux/userSlice";

const LoginStudent = () => {
 return (
  <div className="Login h-[420px] mb-[140px] mt-[90px] w-4/5 mx-auto md:child:w-1/2 bg-mylightblue relative shadow-md rounded md:bg-[url('/src/assets/images/TopMenu/background.svg')] bg-[length:230%] bg-center text-mydarkblue">
   <Link to="/loginEmployee" className="absolute top-2 right-2 text-sm">
    ➥ ورود مدرسین
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
      ورود دانشجو
     </Link>
    </div>
    <div className="mt-12 w-3/4 mx-auto">
     <h1 className="text-center"> وارد حساب کاربری خود شوید </h1>
     <div>
      <LoginForm action={loginStudent} />
     </div>
    </div>
   </div>
   <div className="float-left hidden md:block">
    <img
     className=" w-11/12 my-20 lg:my-16 xl:my-10 mx-auto"
     src={login}
     alt="login"
    />
   </div>
  </div>
 );
};

export default LoginStudent;
