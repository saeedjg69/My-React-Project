import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../../store";
import {
 answerComment,
 getAllComments,
 sendComment,
} from "../../../core/redux/commentSlice";
import { userImg } from "../../../assets/images";

const CourseComments = () => {
 const { comments } = useSelector((state: RootState) => state.comment);
 const { user } = useSelector((state: RootState) => state.user);
 const dispatch = useDispatch();
 const { id } = useParams();
 const [comment, setComment] = useState("");
 const [answerText, setAnswerText] = useState("");

 useEffect(() => {
  if (comments?.length === 0) dispatch(getAllComments());
 }, [dispatch, comments]);

 const SendNewComment = async () => {
  const obj = {
   postId: id,
   email: user.email,
   username: user.fullName,
   comment: comment,
  };
  await dispatch(sendComment(obj));
 };

 const answer = async (id: any) => {
  await dispatch(answerComment({ id: id, answer: answerText }));
  dispatch(getAllComments());
 };

 return (
  <div className="comment border mt-12 p-5 rounded w-full shadow">
   <h1 className="text-lg"> نظرات کاربران در رابطه با این دوره </h1>
   {user ? (
    <div className="my-4">
     <span className="text-sm">نظر خود را وارد کنید:</span>
     <textarea
      id="text"
      onChange={(e) => setComment(e.target.value)}
      className="w-full mx-auto shadow border my-2 min-h-[160px] rounded p-2"
     ></textarea>
     <button
      onClick={SendNewComment}
      className="border bg-mygreen hover:bg-mylightgreen duration-200 py-2 px-6 text-white rounded
          block mx-auto"
     >
      ارسال
     </button>
    </div>
   ) : (
    <div className="bg-mylightblue border rounded text-[#00b3e9] border-[#00b3e9] shadow mt-5 indent-3 py-4 text-xs lg:text-sm">
     جهت ثبت نظر باید در سایت
     <Link to="/Register" className="hover:text-black duration-300">
      عضو شوید
     </Link>
     و یا
     <Link to="/Login" className="hover:text-black duration-300">
      وارد سایت
     </Link>
     شده باشید.
    </div>
   )}
   {comments
    .filter((comment: any) => {
     if (comment.verified === true && comment.postId === id) return comment;
     else return null;
    })
    .map((comment: any) => {
     return (
      <div key={comment._id} className="mt-5 overflow-hidden">
       <div className="border rounded-full float-right md:w-[6vw] md:h-[6vw] w-[10vw] h-[10vw] shadow bg-mylightblue">
        <img src={userImg} alt="userImg" className="rounded-full" />
       </div>
       <div className="border rounded float-left w-5/6 sm:p-5 p-1 md:p-3 text-sm shadow bg-mylightblue">
        <div className=" mb-6">
         <span className="border-l pl-2 sm:pl-5 text-sm">
          {comment.username}
         </span>
         <span className="text-mygray pr-1 sm:pr-5 text-xs">
          {comment.createDate.substr(0, 10)}
         </span>
        </div>
        <div className="leading-7 text-justify">{comment.comment}</div>
        {comment.answer ? (
         <div className="bg-white rounded w-5/6 border h-20 float-left p-2 mt-4 text-xs">
          <span className="text-mygray">پاسخ ادمین</span>
          <div className="indent-3 my-2">{comment.answer}</div>
         </div>
        ) : null}
        {user && (user.role === "admin" || user.role === "teacher") ? (
         <div className="accordion-item ">
          <h2 className="accordion-header " id={"heading" + comment._id}>
           <button
            className="relative text-center w-1/4 mx-auto block py-2 px-3 text-myblue hover:text-mydarkblue bg-mylightblue transition-200"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#collapse" + comment._id}
            aria-expanded="true"
            aria-controls={"collapse" + comment._id}
           >
            درج پاسخ جدید
           </button>
          </h2>
          <div
           id={"collapse" + comment._id}
           className="accordion-collapse collapse"
           aria-labelledby="headingOne"
           data-bs-parent="#accordionExample"
          >
           <textarea
            id="answer"
            className="border w-full mb-1 rounded text-xs min-h-[100px]"
            onChange={(e) => setAnswerText(e.target.value)}
           ></textarea>
           <button
            onClick={() => answer(comment._id)}
            className="px-2 py-1 duration-200 bg-mygreen hover:bg-mylightgreen text-white rounded"
           >
            ارسال پاسخ
           </button>
          </div>
         </div>
        ) : null}
       </div>
      </div>
     );
    })}
  </div>
 );
};

export default CourseComments;
