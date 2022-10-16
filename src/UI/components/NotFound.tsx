import { Link } from "react-router-dom";

const NotFound = () => {
 return (
  <div className="Notfound h-[420px] mb-[140px] mt-[90px] w-3/5 mx-auto relative shadow-md rounded pt-[390px] bg-[url('/src/assets/images/Login/404.svg')] bg-no-repeat bg-size bg-auto bg-center">
   <Link to="/" className="absolute text-mydarkblue top-2 right-2 text-sm">
    ↑ بازگشت
   </Link>
   <div className="mx-auto text-center text-mydarkblue">
    ممکن است صفحه ای که به دنبال آن میگردید حذف شده باشد و یا آدرس آن را به
    درستی وارد نکرده باشید{" "}
   </div>
  </div>
 );
};

export default NotFound;
