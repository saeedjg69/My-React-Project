import {
 layer,
 playBtn,
 stopwatch,
 translation,
 userbtn,
} from "../../../assets/images";

const CourseDetails = (props: any) => {
 return (
  <div className="courseDetails border rounded-lg child:my-4 child:mx-6 md:float-right md:w-[39%] lg:w-1/3 shadow">
   <div>
    <span>قیمت این دوره:</span>
    <span className="mr-4 text-mygreen">{props.cost} تومان</span>
   </div>
   <hr className="w-5/6 !mx-auto" />
   <div className="child:w-full child:h-10">
    <div className="child:float-right">
     <span>
      <img src={userbtn} alt="userbtn" />{" "}
     </span>
     <span className="text-mygray mr-2">عنوان دوره:</span>
     <span className="mr-2">{props.title}</span>
    </div>
    <div className="child:float-right">
     <span>
      <img src={userbtn} alt="userbtn" />{" "}
     </span>
     <span className="text-mygray mr-2">مدرس دوره:</span>
     <span className="mr-2">{props.teacher}</span>
    </div>
    <div className="child:float-right">
     <span>
      <img src={playBtn} alt="playBtn" />{" "}
     </span>
     <span className="text-mygray mr-2">تاریخ شروع:</span>
     <span className="mr-2">{props.startDate.substr(0, 10)}</span>
    </div>
    <div className="child:float-right">
     <span>
      <img src={stopwatch} alt="stopwatch" />{" "}
     </span>
     <span className="text-mygray mr-2">تاریخ پایان:</span>
     <span className="mr-2">{props.endDate.substr(0, 10)}</span>
    </div>
    <div className="child:float-right">
     <span>
      <img src={layer} alt="layer" />{" "}
     </span>
     <span className="text-mygray mr-2">ظرفیت دوره:</span>
     <span className="mr-2">{props.capacity}</span>
    </div>
    <div className="child:float-right">
     <span>
      <img src={translation} alt="translation" />{" "}
     </span>
     <span className="text-mygray mr-2">درس مربوطه:</span>
     <span className="mr-2">{props.lesson}</span>
    </div>
   </div>

   <div
    onClick={props.onClick}
    className="bg-mygreen hover:bg-mylightgreen duration-300 shadow cursor-pointer rounded-lg text-white text-center h-10 leading-10"
   >
    ثبت نام در این دوره
   </div>
  </div>
 );
};

export default CourseDetails;
