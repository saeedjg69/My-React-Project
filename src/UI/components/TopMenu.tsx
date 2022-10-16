import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import {
 topMenuImg,
 gift,
 graduationcap,
 supportsormeyi,
 teach,
 Angular,
 Bootstrap,
 Laravel,
 material,
 netCore,
 Node,
 Python,
 Reactlogo,
 Vue,
} from "../../assets/images";

const TopMenu = () => {
 return (
  <div className="TopMenu">
   <div className="h-[400px] mt-5 rounded-lg text-mydarkblue shadow-md bg-[length:185%] bg-center bg-mylightblue md:bg-[url('/src/assets/images/TopMenu/background.svg')]">
    <div className=" child:block md:w-3/5 w-full sm:float-right pt-10">
     <h1 className="text-center lg:text-2xl text-xl">
      <Typewriter
       typeSpeed={40}
       words={["آموزش برنامه نویسی ، خودآموزی ، ورود به بازارکار"]}
      />
     </h1>
     <span className="mt-6 text-center lg:text-xl text-xl animate-pulse">
      حرفه ای شدن رو از امروز شروع کن
     </span>
     <input
      className="mx-auto mt-12 lg:w-2/3 w-4/5 rounded-lg placeholder:text-mygreen placeholder:text-sm p-3 shadow bg-[url('/src/assets/images/TopMenu/search.svg')] bg-no-repeat bg-[length:25px] bg-[left_12px_top_12px] focus:bg-none "
      placeholder="جستجوی دوره های مختلف..."
     ></input>
     <div className="lg:w-3/4 md:w-full sm:w-2/3 h-28 mt-10 mx-auto child:my-1 child:w-3/12 child:h-24 child:float-right child:text-center">
      <div>
       <div className="w-16 h-16 rounded-full  bg-blue-50 m-auto pt-3 shadow">
        <img className="mx-auto " src={graduationcap} alt="graduationcap"></img>
       </div>
       <span className="text-sm inline-block mt-3">دوره های رایگان</span>
      </div>
      <div>
       <div className="w-16 h-16 rounded-full bg-blue-50 m-auto pt-3 shadow">
        <img className="mx-auto " src={teach} alt="teach"></img>
       </div>
       <span className="text-sm inline-block mt-3">مدرسین مجرب</span>
      </div>
      <div>
       <div className="w-16 h-16 rounded-full bg-blue-50 m-auto pt-3 shadow">
        <img className="mx-auto " src={gift} alt="gift"></img>
       </div>
       <span className="text-sm inline-block mt-3">کدهای تخفیف</span>
      </div>
      <div>
       <div className="w-16 h-16 rounded-full bg-blue-50 m-auto pt-3 shadow">
        <img
         className="mx-auto "
         src={supportsormeyi}
         alt="supportsormeyi"
        ></img>
       </div>
       <span className="text-sm inline-block mt-3">پشتیبانی 24/7</span>
      </div>
     </div>
    </div>
    <div className="float-left h-full lg:w-1/3 w-2/5  hidden md:block">
     <div className="bg-mylightblue mx-auto mt-10 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full">
      <img className="mx-auto" src={topMenuImg} alt="topMenuImg"></img>
     </div>
    </div>
   </div>
   <div className="w-full lg:h-28 xl:h-32 h-24 bg-mylightblue mt-5 rounded-md hidden md:flex justify-evenly shadow-md child:float-right child:bg-white child:w-1/12 child:h-16 child:lg:h-20 child:xl:h-24 child:rounded-[50%_20%_/_10%_40%] child:my-3 child:flex child:justify-center child:shadow-md ">
    <Link to="/">
     <img className="mx-auto my-5" src={Vue} alt="Vue" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-5" src={Bootstrap} alt="Bootstrap" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-5" src={Node} alt="Node" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-3" src={Reactlogo} alt="Reactlogo" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-4" src={Python} alt="Python" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-3" src={Angular} alt="Angular" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-5" src={Laravel} alt="Laravel" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-4" src={netCore} alt="netCore" />
    </Link>
    <Link to="/">
     <img className="mx-auto my-5" src={material} alt="material" />
    </Link>
   </div>
  </div>
 );
};
export default TopMenu;
