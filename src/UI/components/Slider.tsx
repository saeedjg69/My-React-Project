import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { boy } from "../../assets/images";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import { getAllTeachers } from "../../core/redux/teacherSlice";

const Slider = () => {
 const { teachers } = useSelector((state: RootState) => state.teacher);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getAllTeachers());
 }, [dispatch]);
 return (
  <Swiper
   dir="rtl"
   navigation={true}
   pagination={{
    clickable: true,
   }}
   loop={true}
   loopFillGroupWithBlank={true}
   modules={[Navigation, Pagination]}
   className="mySwiper"
   scrollbar={{ draggable: true }}
   slidesPerView={3}
   
//    style={{
//     // "--swiper-navigation-color": "#000",
//     "--swiper-navigation-size": "25px",
//   }}
  >
   {teachers.map((teacher: any) => (
    <SwiperSlide key={teacher._id}>
     <div >
      <img src={boy} alt="boy" className="mx-auto" />
      <span className="text-sm">{teacher.fullName}</span>
     </div>
    </SwiperSlide>
   ))}
  </Swiper>
 );
};
export default Slider;
