const CourseContent = (props: any) => {
 return (
  <div className="border rounded shadow">
   <img className="w-full" src={props.image} alt="course" />
   <div className="mt-5 text-justify child:mx-3 pb-8">
    <h1 className="text-xl my-3">{props.title}</h1>
    <p>
     از زمانی که فریمورک‌های مختلفی برای جاوااسکریپت منتشر می‌شود بسیاری از
     توسعه‌دهندگان همواره به این فکر می‌کردند که برای توسعه لایه فرانت-اند
     می‌شود
     <br />
     چرا باید از این دوره استفاده بکنم؟
     <br />
     اگه راستش رو بخوای، خودم برای اینکه پروژه های بیشتری رو جذب بکنم حتما به
     کارفرما میگفتم به نسخه های اخری تسلط دارم این باعث میشد
     <br />
     پیش نیاز های این دوره
     <br />
     قبل از اینکه وارد این دوره بشین باید حتما با پی اچ پی اشنایی داشته باشین
     چون ما قرار تغییرات بوجود اومده رو یاد بگیریم
    </p>
   </div>
  </div>
 );
};

export default CourseContent;
