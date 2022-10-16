const Questions = () => {
 return (
  <div className="questions md:w-3/4 mx-auto my-14 p-5 border rounded-lg bg-mylightblue text-justify text-mydarkblue shadow-md">
   <h1 className="text-2xl mb-5">سوالات متداول</h1>

   <div className="accordion" id="accordionExample">
    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading1">
      <button
       className=" relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500 "
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse1"
       aria-expanded="true"
       aria-controls="collapse1"
      >
       چطور میتوانم سفارشم را پیگیری کنم ؟{" "}
      </button>
     </h2>
     <div
      id="collapse1"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       وارد سایت دیجی کالا شوید. روی گزینه سفارش های من کلیک کنید. در این قسمت
       با کلیک روی جزییات میتوانید سفارش خود را ببینید. میتوانید در این قسمت
       روند آماده سازی و مراحل ارسال سفارش خود را پیگیری کنید.
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading2">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse2"
       aria-expanded="false"
       aria-controls="collapse2"
      >
       چرا به شماره سفارش (DKC) نیاز داریم؟{" "}
      </button>
     </h2>
     <div
      id="collapse2"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       دیجی کالا برای افزایش سرعت پاسخ گویی به مشتریان با دریافت کد سفارش یا
       همان کد "DKC " این امکان رو ایجاد کرده که بتونید در زمان کمتری به نتیجه
       مورد نظر خود برسید...
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading3">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse3"
       aria-expanded="false"
       aria-controls="collapse3"
      >
       چطور میتوانم سفارشم را لغو کنم ؟{" "}
      </button>
     </h2>
     <div
      id="collapse3"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال آن
       منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو سفارش به توضیحات
       تکمیلی مراجعه کنید.
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading4">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse4"
       aria-expanded="false"
       aria-controls="collapse4"
      >
       میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟{" "}
      </button>
     </h2>
     <div
      id="collapse4"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       بله، دیجی کالا تسهیلاتی را فراهم کرده، شما میتوانید تا سقف 20 میلیون
       تومان به صورت اقساط با بازپرداخت 6 ، 9 و 12 ماهه از سایت دیجی کالا خرید
       کنید.
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading5">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse5"
       aria-expanded="false"
       aria-controls="collapse5"
      >
       چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟{" "}
      </button>
     </h2>
     <div
      id="collapse5"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       شما میتوانید از طریق فرم درخواست مرجوعی در حساب کاربری ، صفحه تماس با ما
       و تلفن درخواست خود را ثبت نمایید.
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading6">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse6"
       aria-expanded="false"
       aria-controls="collapse6"
      >
       شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟{" "}
      </button>
     </h2>
     <div
      id="collapse6"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       لطفاً پیش از خرید، موارد زیر را به‌دقت بخوانید؛ زیرا ثبت هر سفارش در
       دیجی‌کالا به معنی موافقت با شرایط زیر است.
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading7">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse7"
       aria-expanded="false"
       aria-controls="collapse7"
      >
       چطور میتوانم بدون برقراری تماس، درخواست مرجوعی کالای خریداری شده را اعلام
       کنم؟{" "}
      </button>
     </h2>
     <div
      id="collapse7"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       شما میتواند وارد پروفایل خود شوید و از قسمت درخواست مرجوعی ، فرم درخواست
       را تکمیل کنید.
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading8">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse8"
       aria-expanded="false"
       aria-controls="collapse8"
      >
       شرایط استفاده از کد تخفیف اولین خرید چیست؟{" "}
      </button>
     </h2>
     <div
      id="collapse8"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       سیستم هوشمند دیجی کالا، پس از بررسی حساب کاربری در صورتی که مالک آن مشتری
       جدید دیجی کالا باشد...
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading9">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse9"
       aria-expanded="false"
       aria-controls="collapse9"
      >
       چطور میتوانم امتیاز‌ بگیریم؟{" "}
      </button>
     </h2>
     <div
      id="collapse9"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       شما از سه راه می‌توانید امتیاز بگیرید: خرید کالا ثبت نظر دعوت از دوستان
       برای خرید از دیجی‌کالا
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading10">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse10"
       aria-expanded="false"
       aria-controls="collapse10"
      >
       هزینه ی ارسال چگونه محاسبه میشود؟{" "}
      </button>
     </h2>
     <div
      id="collapse10"
      className="accordion-collapse collapse"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       هزینه ارسال بر اساس شیوه ارسال متفاوت است و در زمان ثبت سفارش نمایش داده
       می شود.
      </div>
     </div>
    </div>

    <div className="accordion-item bg-white border border-gray-200">
     <h2 className="accordion-header mb-0" id="heading11">
      <button
       className=" collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left
               bg-blue-50 border-0 rounded-none transition focus:outline-none hover:text-blue-500"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapse11"
       aria-expanded="false"
       aria-controls="collapse11"
      >
       چگونه می توانم نصب و پیگیری درگاه پرداخت هوشمند دیجی پی را انجام دهم؟{" "}
      </button>
     </h2>
     <div
      id="collapse11"
      className="accordion-collapse collapse"
      aria-labelledby="headingThree"
      data-bs-parent="#accordionExample"
     >
      <div className="accordion-body py-4 px-5 text-gray-600">
       شما میتوانید پس از مراجعه به لینک https://www.mydigipay.com/ipg/ ، مراحل
       آن را مطالعه و فرم های لازم را تکمیل کرده و درصورت وجود سوالات فنی درخصوص
       راه اندازی درگاه با ایمیل merchant.support@mydigipay.com مکاتبه کنید.
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Questions;
