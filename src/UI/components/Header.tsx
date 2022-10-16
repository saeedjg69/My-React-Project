import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import NavLinkComponent from "./NavLinkComponent";
import { logo } from "../../assets/images";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
 const { user } = useSelector((state: RootState) => state.user);

 const [isOpen, setisOpen] = useState<boolean>(false);
 const handleClick = () => {
  setisOpen(!isOpen);
 };

 return (
  <div
   className="Header md:!h-16 bg-mylightblue mt-5 rounded-lg md:flex relative shadow-md overflow-hidden duration-500 "
   style={{ height: isOpen ? "425px" : "64px" }}
  >
   <Link to="/" className="hidden md:block my-1.5 mr-1">
    <img src={logo} alt="logo"></img>
   </Link>
   <button
    onClick={handleClick}
    className="mt-2 mx-3 cursor-pointer md:hidden child:block child:w-8 child:h-1 child:bg-mydarkblue child:rounded child:duration-500 child:my-2"
   >
    <span
     style={{ transform: isOpen ? "translateY(12px) rotate(45deg)" : "" }}
    ></span>
    <span style={{ opacity: isOpen ? "0" : "" }}></span>
    <span
     style={{
      transform: isOpen ? "translateY(-12px) rotate(-45deg)" : "",
     }}
    ></span>
   </button>
   <ul
    className="text-lg top-16 my-auto absolute text-mydarkblue w-full md:static md:w-10/12 md:bg-transparent md:!flex md:justify-evenly md:text-xs lg:text-md xl:text-lg "
    onClick={handleClick}
   >
    <NavLinkComponent to="/" title="خانه" />
    <NavLinkComponent to="/CoursesPage" title=" دوره ها" />
    <NavLinkComponent to="/TeachersPage" title="معرفی اساتید" />
    <NavLinkComponent to="/NewsPage" title="اخبار و مقالات" />
    <NavLinkComponent to="/Questions" title="سوالات متداول" />
    <NavLinkComponent to="/Rules" title="شرایط و قوانین" />
    <NavLinkComponent to="/ContactUs" title="تماس با ما" />
    <NavLinkComponent to="/AboutUs" title="درباره ما" />
   </ul>
   <div className="md:my-auto mt-3 w-4/12 float-left flex justify-evenly md:w-2/12 text-mygreen text-sm md:text-md">
    <div>
     {user ? (
      <Link to="/Panel" className="inline-block mt-2 text-xs lg:text-sm">
       {user.fullName}
      </Link>
     ) : (
      <Link to="/LoginStudent" className="inline-block mt-2 text-xs lg:text-sm">
       ورود / ثبت نام
      </Link>
     )}
    </div>
    <div className="rounded-full bg-mygreen w-10 h-10 shadow-lg relative cursor-pointer">
     <BsFillPersonFill className="h-6 w-6 mx-auto mt-2 text-mylightblue" />
    </div>
   </div>
  </div>
 );
};
export default Header;
