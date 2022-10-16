import { Link } from "react-router-dom";
import {
 googlelogo,
 facebooklogo,
 twitterlogo,
 zarinpal,
 samandehi,
 enamad,
} from "../../assets/images";

const LinkComponent = ({ to, title }: any) => {
 return (
  <Link to={`${to}`} className="text-white text-xs lg:text-md xl:text-lg">
   {title}
  </Link>
 );
};
const Footer = () => {
 return (
  <div className="footer mt-5 bg-[#3C6E71] shadow-md">
   <div className="w-11/12 md:w-full lg:w-11/12 mx-auto md:flex md:justify-around">
    <div className="flex md:justify-around justify-start md:w-3/5 md:child:h-52 child:h-40 child:mt-5 md:child:my-20 child:w-1/3 md:child:w-1/4">
     <div>
      <h1 className=" text-mylightgreen m-3 block border-b-2 border-mylightgreen pb-3 text-md lg:text-xl">
       دسترسی
      </h1>
      <div className="child:block child:m-3 child-hover:indent-1.5 child:duration-100">
       <LinkComponent to="/CoursesPage" title="دوره ها" />
       <LinkComponent to="/TeachersPage" title="معرفی مدرسین" />
       <LinkComponent to="/NewsPage" title="بلاگ ها" />
      </div>
     </div>
     <div>
      <h1 className=" text-mylightgreen block m-3 border-b-2 border-mylightgreen pb-3 text-md lg:text-xl">
       متداول
      </h1>
      <div className="child:block child:m-3 child-hover:indent-1.5 child:duration-100">
       <LinkComponent to="/Questions" title="سوالات متداول" />
       <LinkComponent to="/Rules" title="شرایط و قوانین" />
       <LinkComponent to="/LoginStudent" title="ورود" />
      </div>
     </div>
     <div>
      <h1 className=" text-mylightgreen m-3 block border-b-2 border-mylightgreen pb-3 text-md lg:text-xl">
       ارتباط با ما
      </h1>
      <div className="child:block child:m-3 child-hover:indent-1.5 child:duration-100">
       <LinkComponent to="/ContactUs" title="تماس با ما" />
       <LinkComponent to="/AboutUs" title="درباره ما" />
      </div>
     </div>
    </div>
    <div className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 w-2/3 md:h-52 h-44 md:my-20 mx-auto">
     <h1 className=" text-mylightgreen border-b-2 border-mylightgreen pb-3 my-3 text-md lg:text-xl ">
      نمادهای اینترنتی
     </h1>
     <div className="w-full h-24 mx-auto md:mt-7 mt-3 flex justify-between child:shadow-xl child:cursor-pointer child:w-16 child:h-16 child:rounded-lg child:mt-4 child:bg-slate-300 child:flex child:justify-center">
      <div>
       <img src={zarinpal} className="h-5/6 mt-1" alt="zarinpal" />
      </div>
      <div>
       <img src={enamad} alt="enamad" />
      </div>
      <div>
       <img src={samandehi} alt="samandehi" />
      </div>
     </div>
    </div>
   </div>
   <div className="h-16 border-t border-mygray">
    <div className="text-gray-300 xl:text-sm md:text-xs text-2xs float-right mt-4 lg:mr-5 mr-1 w-7/12 md:w-3/4 lg:w-1/2">
     برند به عنوان یک نام و علامت تجاری ثبت شده است. کلیه حقوق این وب سایت برای
     محفوظ است{" "}
    </div>
    <div className="float-left child:float-right mt-4 lg:ml-40 child:mx-2">
     <img className="w-9" src={googlelogo} alt="googlelogo" />
     <img className="w-8" src={twitterlogo} alt="twitterlogo" />
     <img className="w-7" src={facebooklogo} alt="facebooklogo" />
    </div>
   </div>
  </div>
 );
};
export default Footer;
