const CourseFilter = (props:any) => {
 return (
  <div className="w-5/6 mx-auto text-mydarkblue sm:float-right sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-10">
   <div className="w-5/6 mx-auto">
    <select
     className="bg-mylightblue w-full rounded-lg  py-3 shadow cursor-pointer text-sm child:text-sm"
     onChange={props.onChangeSelectBox}
    >
     <option>مرتب سازی بر اساس تاریخ</option>
     <option>مرتب سازی بر اساس عنوان</option>
     <option>مرتب سازی بر اساس مدرس</option>
     <option>مرتب سازی بر اساس محبوبیت</option>
     <option>مرتب سازی بر اساس بالاترین قیمت</option>
     <option>مرتب سازی بر اساس پایین ترین قیمت</option>
    </select>
    <div className="mt-10 sm:mt-6 md:mt-10 lg:mt-4 xl:mt-6 border rounded-lg shadow">
     <h1 className="mr-3 my-2">نوع دوره</h1>
     <hr className="mb-3 w-11/12 mx-auto" />
     <div className="mb-4">
      <input
       type="checkbox"
       id="free"
       className="mx-3"
       onChange={props.CheckboxFree}
      />
      <label htmlFor="free" className="cursor-pointer">
       رایگان
      </label>
      <span className="float-left ml-3">20</span>
     </div>
     <div className="mb-4">
      <input
       type="checkbox"
       id="cash"
       className="mx-3"
       onChange={props.CheckboxCash}
      />
      <label htmlFor="cash" className="cursor-pointer">
       نقدی
      </label>
      <span className="float-left ml-3">20</span>
     </div>
     {/* <div className="mb-3">
            <input type="checkbox" id="offer" className="mx-3" />
            <label for="offer" className="cursor-pointer">
              تخفیف ویژه
            </label>
            <span className="float-left ml-3">20</span>
          </div> */}
    </div>
   </div>
  </div>
 );
};

export default CourseFilter;
