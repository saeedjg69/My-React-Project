import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../core/redux/userSlice";
import { RootState } from "../../../store";
import { AiOutlineLogout } from "react-icons/ai";
import { userImg } from "../../../assets/images";
import { toast } from "react-toastify";

const PanelSidebar = () => {
 const { user } = useSelector((state: RootState) => state.user);
 const navigate = useNavigate();
 const dispatch = useDispatch();

 const logout = () => {
  setTimeout(() => {
   toast.error("خروج موفقیت آمیز");
   navigate("/");
  }, 1000);
  setTimeout(() => {
   dispatch(logoutUser());
  }, 1050);
 };

 return (
  <div className="sidebar rounded-lg border shadow-lg text-mydarkblue">
   <div className="h-64 bg-[url('/src/assets/images/User/pattern.png')] bg-cover bg-mylightblue pt-3">
    <AiOutlineLogout
     size={25}
     title="خروج"
     className="cursor-pointer hover:brightness-200 mr-3"
     onClick={logout}
    />
    <div className="w-40 h-40 rounded-full border mx-auto shadow-lg bg-white">
     <img
      src={user.profile ? user.profile : userImg}
      alt="userImg"
      className="w-full h-full rounded-full"
     />
    </div>
    <div className="text-center mt-4 font-bold">{user.fullName}</div>
   </div>

   <div className="accordion " id="accordionExample">
    <div className="accordion-item border !rounded-none">
     <h2 className="accordion-header mb-0" id="heading1">
      <Link
       to="DashBoard"
       className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
      >
       داشبورد
       <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse1"
        aria-expanded="true"
        aria-controls="collapse1"
       ></button>
      </Link>
     </h2>
     <div
      id="collapse1"
      className="accordion-collapse collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
     ></div>
    </div>

    <div className="accordion-item border">
     <h2 className="accordion-header mb-0" id="heading2">
      <Link
       to="editprofile"
       className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
      >
       ویرایش حساب کاربری
       <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse2"
        aria-expanded="true"
        aria-controls="collapse2"
       ></button>
      </Link>
     </h2>
     <div
      id="collapse2"
      className="accordion-collapse collapse"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
     ></div>
    </div>

    {user.role === "admin" && (
     <div className="accordion-item border">
      <h2 className="accordion-header" id="heading3">
       <button
        className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse3"
        aria-expanded="true"
        aria-controls="collapse3"
       >
        مدیریت دانشجویان
       </button>
      </h2>
      <div
       id="collapse3"
       className="accordion-collapse collapse"
       aria-labelledby="headingOne"
       data-bs-parent="#accordionExample"
      >
       <ul className="accordion-body py-1 px-5 list-disc text-gray-700 child-hover:text-blue-500 child:cursor-pointer child:text-sm child:py-1">
        <li>
         <Link to="StudentsList">لیست کل دانشجویان</Link>
        </li>
        <li>
         <Link to="StudentAddToCourse">ثبت نام دانشجو در دوره</Link>
        </li>
       </ul>
      </div>
     </div>
    )}

    {user.role === "admin" && (
     <div className="accordion-item border">
      <h2 className="accordion-header" id="heading8">
       <button
        className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse8"
        aria-expanded="true"
        aria-controls="collapse8"
       >
        مدیریت اساتید{" "}
       </button>
      </h2>
      <div
       id="collapse8"
       className="accordion-collapse collapse "
       aria-labelledby="headingOne"
       data-bs-parent="#accordionExample"
      >
       <ul className="accordion-body py-1 px-5 list-disc text-gray-700 child-hover:text-blue-500 child:cursor-pointer child:text-sm child:py-1">
        <li>
         <Link to="TeachersList">لیست کل اساتید</Link>
        </li>
       </ul>
      </div>
     </div>
    )}

    <div className="accordion-item border">
     <h2 className="accordion-header mb-0" id="heading4">
      <button
       className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse4"
       aria-expanded="true"
       aria-controls="collapse4"
      >
       مدیریت دوره ها{" "}
      </button>
     </h2>
     <div
      id="collapse4"
      className="accordion-collapse collapse "
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
     >
      <ul className="accordion-body py-1 px-5 list-disc text-gray-700 child-hover:text-blue-500 child:cursor-pointer child:text-sm child:py-1">
       {user.role === "admin" || user.role === "teacher" ? (
        <li>
         <Link to="CreateNewCourse">اضافه کردن دوره جدید</Link>
        </li>
       ) : null}
       <li>
        <Link to="coursesList">لیست دوره ها</Link>
       </li>
      </ul>
     </div>
    </div>

    {user.role === "admin" || user.role === "teacher" ? (
     <div className="accordion-item border">
      <h2 className="accordion-header mb-0" id="heading9">
       <button
        className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse9"
        aria-expanded="true"
        aria-controls="collapse9"
       >
        مدیریت درس ها
       </button>
      </h2>
      <div
       id="collapse9"
       className="accordion-collapse collapse "
       aria-labelledby="headingOne"
       data-bs-parent="#accordionExample"
      >
       <ul className="accordion-body py-1 px-5 list-disc text-gray-700 child-hover:text-blue-500 child:cursor-pointer child:text-sm child:py-1">
        <li>
         <Link to="CreateNewLesson">اضافه کردن درس جدید</Link>
        </li>
        <li>
         <Link to="LessonsList">لیست درس ها</Link>
        </li>
       </ul>
      </div>
     </div>
    ) : null}

    {user.role === "admin" || user.role === "teacher" ? (
     <div className="accordion-item border">
      <h2 className="accordion-header mb-0" id="heading5">
       <button
        className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse5"
        aria-expanded="true"
        aria-controls="collapse5"
       >
        مدیریت اخبار و مقالات
       </button>
      </h2>
      <div
       id="collapse5"
       className="accordion-collapse collapse "
       aria-labelledby="headingOne"
       data-bs-parent="#accordionExample"
      >
       <ul className="accordion-body py-1 px-5 list-disc text-gray-700 child-hover:text-blue-500 child:cursor-pointer child:text-sm child:py-1">
        <li>
         <Link to="AddNews">درج مقاله جدید</Link>
        </li>
        <li>
         <Link to="NewsList">لیست مقالات</Link>
        </li>
       </ul>
      </div>
     </div>
    ) : null}

    {user.role === "admin" && (
     <div className="accordion-item border">
      <h2 className="accordion-header mb-0" id="heading6">
       <button
        className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse6"
        aria-expanded="true"
        aria-controls="collapse6"
       >
        مدیریت کامنت ها
       </button>
      </h2>
      <div
       id="collapse6"
       className="accordion-collapse collapse"
       aria-labelledby="headingOne"
       data-bs-parent="#accordionExample"
      >
       <ul className="accordion-body py-1 px-5 list-disc text-gray-700 child-hover:text-blue-500 child:cursor-pointer child:text-sm child:py-1">
        <li>
         <Link to="CommentsList">لیست کامنت ها </Link>
        </li>
       </ul>
      </div>
     </div>
    )}

    <div className="accordion-item border">
     <h2 className="accordion-header !rounded-none" id="heading7">
      <button
       type="button"
       onClick={logout}
       className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500"
       data-bs-toggle="collapse"
       data-bs-target="#collapse7"
       aria-expanded="true"
       aria-controls="collapse7"
      >
       خروج از حساب کاربری
      </button>
     </h2>
     <div
      id="collapse7"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
     ></div>
    </div>
   </div>
  </div>
 );
};

export default PanelSidebar;
