const CourseSearch = (props:any) => {
  return (
    <div className="search bg-mylightblue md:h-16 my-5 rounded-lg shadow">
      <div className=" md:float-right md:w-1/2 h-16 w-full mt-4 md:mt-2  ">
        <input
          className="mt-2 md:mt-1 w-11/12  xl:mr-10 md:mr-4 mr-3 rounded-lg inline-block
             placeholder:text-mygreen placeholder:text-sm p-2 shadow"
          placeholder="جستجوی دوره های مختلف..."
          onChange={props.onChange}
        />
      </div>
      {/* <div className=" md:float-left h-10 md:h-16 child:inline md:w-1/2  lg:w-2/5 xl:w-1/3 mt-4 child:text-mydarkblue">
        <input className="ml-2 mr-2 " type="checkbox" id="chk_finished" />
        <label className="ml-4 cursor-pointer" for="chk_finished">
          دوره های به اتمام رسیده
        </label>
        <input className="ml-2 lg:mr-10 " type="checkbox" id="chk_run" />
        <label className="ml-4 cursor-pointer" for="chk_run">
          در حال برگذاری
        </label>
      </div> */}
    </div>
  );
};

export default CourseSearch;
