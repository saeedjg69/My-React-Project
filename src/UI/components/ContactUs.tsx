const ContactUs = () => {
 return (
  <div
   className="contactus md:w-11/12 mx-auto text-justify my-5 leading-10 p-3 overflow-hidden border 
                rounded-lg bg-mylightblue text-mydarkblue shadow-md"
  >
   <h1 className="text-2xl mb-3">تماس با ما</h1>
   <div className="my-3">
    <div className="lg:float-right lg:w-2/5 mb-2">
     <div className="lg:w-11/12 border rounded shadow bg-white py-3">
      <h1 className="indent-2 text-lg">شماره تماس</h1>
      <span className="text-center block">011-11111111</span>
      <hr className="my-2 w-5/6 mx-auto" />
      <h1 className="indent-2 text-lg">شماره موبایل</h1>
      <span className="text-center block">09111111111</span>
      <hr className="my-2 w-5/6 mx-auto" />
      <h1 className="indent-2 text-lg">ایمیل</h1>
      <span className="text-center block">example@gmail.com</span>
      <hr className="my-2 w-5/6 mx-auto" />
      <h1 className="indent-2 text-lg">آدرس</h1>
      <span className="text-center block">
       میدان خزر - نرسیده به دانشگاه روزبهان - ساختمان سپهر - طبقه اول
      </span>
     </div>
    </div>

    <div className="lg:float-left lg:w-3/5 border bg-white rounded shadow">
     <h1 className="text-lg text-center py-3">فرم تماس با ما</h1>
     <hr className="w-5/6 mx-auto" />
     <div className="md:child:inline-block child:my-1 mx-auto w-11/12">
      <div className="md:w-1/2">
       نام و نام خانوادگی
       <input
        type="text"
        className="border shadow rounded block w-full md:w-11/12 h-10"
       />
      </div>
      <div className="md:w-1/2">
       شماره موبایل
       <input type="text" className="border shadow rounded block w-full h-10" />
      </div>
      <div className="w-full">
       ایمیل
       <input type="text" className="border shadow rounded block w-full h-10" />
      </div>
      <div className="w-full">
       عنوان
       <input type="text" className="border shadow rounded block w-full h-10" />
      </div>
      <div className="w-full">
       توضیحات
       <textarea className="w-full shadow rounded border h-24" />
      </div>
     </div>
     <input
      type="submit"
      value="ارسال پیام"
      className="rounded block my-2 cursor-pointer mx-auto w-2/5 
                        md:w-1/5 text-center bg-mygreen hover:bg-mylightgreen duration-300 p-1 text-white shadow-lg"
     />
    </div>
   </div>
  </div>
 );
};

export default ContactUs;
