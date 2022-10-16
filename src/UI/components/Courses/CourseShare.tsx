import { Link } from "react-router-dom";
import {
 facebooklogo2,
 telegramlogo,
 twitterlogo2,
} from "../../../assets/images";
const CourseShare = () => {
 return (
  <div className="share md:float-right md:w-[39%] lg:w-1/3 child:mx-auto text-mydarkblue">
   <div className="bg-mylightblue h-16 pt-5 rounded text-center shadow md:text-sm lg:text-md xl:text-lg w-3/4 sm:w-1/2 md:w-full">
    سوالات خود را می توانید در{" "}
    <Link
     to="/Questions"
     className="text-mygreen hover:text-mylightgreen duration-300"
    >
     اینجا
    </Link>{" "}
    مطرح کنید
   </div>
   <div className="border rounded h-20 mt-10 w-3/4 sm:w-2/3 md:w-full shadow">
    <div className="mt-6 float-right indent-1 sm:indent-5 md:indent-1 lg:indent-5 md:text-sm lg:text-md xl:text-lg">
     به اشتراک گذاری
    </div>
    <div className="mt-3 float-left child:float-right child:w-12 child:h-12 child:rounded-full child:mx-1 sm:child:mx-3 md:child:mx-1 xl:child:mx-3 child:border child:shadow">
     <div>
      <img className="mx-auto mt-3" src={twitterlogo2} alt="twitterlogo" />
     </div>
     <div>
      <img className="mx-auto mt-3" src={telegramlogo} alt="telegramlogo" />
     </div>
     <div>
      <img className="mx-auto mt-3" src={facebooklogo2} alt="facebooklogo" />
     </div>
    </div>
   </div>
  </div>
 );
};

export default CourseShare;
