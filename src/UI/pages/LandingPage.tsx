import { TopMenu, TopTeachers } from "../components";
import { LastAndTopCourses } from "../components/Courses";
import LastNews from "../components/News/LastNews";

const Landing = () => {
 return (
  <div>
   <TopMenu />
   <LastAndTopCourses title="آخرین دوره های سایت" />
   <LastNews/>
   <TopTeachers />
   <LastAndTopCourses title="دوره های محبوب" />
  </div>
 );
};

export default Landing;
