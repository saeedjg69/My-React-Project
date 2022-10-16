import Slider from "./Slider";
import { why } from "../../assets/images";

const TopTeachers = () => {
 return (
  <div className="TopTeachers h-80 bg-mylightblue mt-5 rounded-lg shadow-md text-mydarkblue">
   <div className=" child:block md:w-3/5 lg:1/2 w-full md:float-right mt-4 text-xl">
    <h1 className="pt-8 text-center">مدرسین نمونه مجموعه آموزشی ما </h1>
    <div className="w-[25rem] mx-auto mt-10 h-28 child:float-right child:w-4/5 child:mr-9 child:sm:mr-0 child:sm:w-full child:text-center">
     <Slider />
    </div>
   </div>
   <div className="float-left hidden md:block mt-16 w-2/5">
    <img className="w-11/12 xl:w-3/4 mx-auto" src={why} alt="why" />
   </div>
  </div>
 );
};
export default TopTeachers;
