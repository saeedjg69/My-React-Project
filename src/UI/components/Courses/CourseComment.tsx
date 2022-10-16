const CourseComment = (props: any) => {
 return (
  <div>
   {/* <div className="mt-5 overflow-hidden">
    <div className="border rounded-full float-right md:w-[6vw] md:h-[6vw] w-[10vw] h-[10vw] shadow bg-mylightblue">
     <img
      src={require("../../assets/images/User/userImg.jpg")}
      alt="userImg"
      className="rounded-full"
     />
    </div>
    <div className="border rounded float-left w-5/6 sm:p-5 p-1 text-sm shadow bg-mylightblue">
     <div className=" mb-6">
      <span className="border-l pl-2 sm:pl-5 text-sm">{props.username}</span>
      <span className="text-mygray pr-1 sm:pr-5 text-xs">
       {props.createDate.substr(0, 10)}
      </span>
     </div>
     <div className="leading-7 text-justify">
      {props.comment}
      {props.asnwer}
     </div>
     <div className="float-left hover:text-mydarkblue text-myblue cursor-pointer">
      پاسخ
     </div>
    </div>
   </div>
   <div>{props.asnwer}</div> */}
  </div>
 );
};

export default CourseComment;
