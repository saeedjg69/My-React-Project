import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { newsImg, share } from "../../assets/images";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getAllNews } from "../../core/redux/newsSlice";

const News = () => {
 const { news } = useSelector((state: RootState) => state.news);
 const { id } = useParams();
 const dispatch = useDispatch();

 useEffect(() => {
  if (news?.length === 0) dispatch(getAllNews());
 }, [dispatch, news]);

 const Details = news
  .filter((news: any) => news._id === id)
  .map((news: any) => {
   return (
    <div key={news._id} className="overflow-hidden child:mt-8 mb-20 lg:w-5/6 mx-auto">
     <div className="rounded ">
      <img
       className="md:w-3/4 border rounded-md shadow h-60 sm:h-[400px] mx-auto"
       src={newsImg}
       alt="newsImg"
      />
      <div className="mt-5 text-justify child:mx-3 child:leading-10">
       <h1 className="text-center text-xl">{news.title}</h1>
       <div className="text-mygray text-sm my-5 child:leading-6">
        <div className="inline-block">
         <div>دسته بندی</div>
         <div>{`${news?.category}` === "article" ? "مقاله" : "خبر"}</div>
        </div>
        <div className="float-left">
         <div>نوشته شده توسط</div>
         <div>ادمین سایت</div>
        </div>
       </div>

       <h1 className="text-lg">{news.text}</h1>
       <p>
        مقاله زیر از انتشار مشترک آزمایشگاه تحقیقات مواد ام آی تی و تحقیقات
        اریکسون اقتباس شده است.با ورود به عصر جدیدی برای وسایل الکترونیکی مجهز
        به شبکه های فایو جی و در نهایت سیکس جی ، آزمایشگاه تحقیقات مواد ام آی تی
        و اریکسون در دو پروژه تحقیقاتی همکاری می کنند که به دنبال کمک به ایجاد
        زیرساخت شبکه جدید مورد نیاز برای تقویت موارد استفاده واقعاً انقلابی نسل
        بعدی است. شبکه های تلفن همراه را به ارمغان می آورد نسل های جدید شبکه
        تلفن همراه سرعت فوق العاده سریع ، تأخیر کم و قابلیت اطمینان فوق العاده
        را برای کاربر نهایی به ارمغان می آورند. شبکه های بزرگ و غنی از ویژگیها
        ساختار های پیچیده ای برای مدیریت اپراتورهای شبکه هستند. اریکسون در حال
        تحقیق بر روی شبکه های شناختی است که با تکیه بر هوش مصنوعی می توانند یک
        .شبکه امن ، بسیار خودکار و داده محور را فعال کنند
       </p>
      </div>
      <div className="mt-20 text-center">
       <div className="mb-6 text-mygray">اشتراک گذاری</div>
       <img className="mx-auto" src={share} alt="share" />
      </div>
     </div>
    </div>
   );
  });

 return <div>{Details}</div>;
};
export default News;
