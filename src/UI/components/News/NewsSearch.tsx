const NewsSearch = (props: any) => {
 return (
  <div>
   <div className="search bg-mylightblue md:h-16 mt-5 rounded-lg shadow">
    <div className=" md:float-right md:w-1/2 h-16 w-full mt-4 md:mt-2  ">
     <input
      placeholder="جستجوی مقاله های مختلف..."
      className="mt-2 md:mt-1 w-11/12  xl:mr-10 md:mr-4 mr-3 rounded-lg inline-block placeholder:text-mygreen placeholder:text-sm p-2 shadow"
      onChange={props.onChange}
     ></input>
    </div>
    <div className=" md:float-left h-10 md:h-16 child:inline md:w-1/2  lg:w-2/5 xl:w-1/3 mt-4 child:text-mydarkblue">
     <input
      type="checkbox"
      id="blog"
      className="ml-2 mr-2"
      onChange={props.blogCheckbox}
     />
     <label htmlFor="blog" className="ml-4 cursor-pointer">
      مقالات
     </label>
     <input
      type="checkbox"
      id="news"
      className="ml-2 mr-2 "
      onChange={props.newsCheckbox}
     />
     <label htmlFor="news" className="ml-4 cursor-pointer">
      اخبار
     </label>
    </div>
   </div>
  </div>
 );
};

export default NewsSearch;
