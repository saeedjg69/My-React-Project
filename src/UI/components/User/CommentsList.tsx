import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
 answerComment,
 getAllComments,
 verifyComment,
} from "../../../core/redux/commentSlice";
import { FiEdit } from "react-icons/fi";
import Paginate from "../Paginate";

const CommentsList = () => {
 const { comments } = useSelector((state: RootState) => state.comment);
 const [pageNumber, setPageNumber] = useState(0);
 const dispatch = useDispatch();
 const commentsPerPage = 7;
 const PageVisited = pageNumber * commentsPerPage;
 const [searchValue, setSearchValue] = useState("");
 const [answerText, setAnswerText] = useState("");
 const pageCount = Math.ceil(comments.length / commentsPerPage);
 const onPageChange = ({ selected }: any) => {
  setPageNumber(selected);
 };

 useEffect(() => {
  if (comments?.length === 0) dispatch(getAllComments());
 }, [dispatch, comments]);

 const verify = async (id: any) => {
  await dispatch(verifyComment({ id: id }));
  dispatch(getAllComments());
 };

 const answer = async (id: any) => {
  await dispatch(answerComment({ id: id, answer: answerText }));
  dispatch(getAllComments());
 };

 const displayComments = comments
  .filter((comment: any) => {
   if (searchValue === "") return comment;
   else if (
    comment.username.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
    comment.email.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
    comment.comment.toLocaleLowerCase().includes(searchValue.toLowerCase())
   )
    return comment;
   else return null;
  })
  .reverse()
  .slice(PageVisited, PageVisited + commentsPerPage)
  .map((comment: any) => {
   return (
    <tbody key={comment._id} className="child:h-12 child:border">
     <tr>
      <td>{comment.username}</td>
      <td>{comment.email}</td>
      <td>{comment.createDate.substr(0, 10)}</td>
      <td>{comment.comment}</td>
      <td>
       {comment.verified ? (
        <span className="bg-green-500 text-white rounded p-1">تایید شده</span>
       ) : (
        <button
         onClick={() => verify(comment._id)}
         className="bg-red-500 hover:bg-red-400 text-white rounded p-1"
        >
         تایید نشده
        </button>
       )}
      </td>

      <td>
       <div className="accordion-item border ">
        <h2 className="accordion-header" id={"heading" + comment._id}>
         <button
          className="relative flex items-center w-full py-3 px-3 text-gray-800 bg-blue-50 transition hover:text-blue-500 child:mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + comment._id}
          aria-expanded="true"
          aria-controls={"collapse" + comment._id}
         >
          <FiEdit size={20} />
         </button>
        </h2>
        <div
         id={"collapse" + comment._id}
         className="accordion-collapse collapse absolute left-20 z-10 border-2 border-mygreen rounded bg-white w-[800px]"
         aria-labelledby="headingOne"
         data-bs-parent="#accordionExample"
        >
         <div className="my-2 text-xs text-right px-2">
          <span className="text-mygreen text-sm py-2"> متن کامنت:</span>{" "}
          {comment.comment}
          <hr />
          <span className="text-mygreen text-sm my-2"> پاسخ داده شده: </span>
          {comment.answer}
          <hr />
         </div>
         <span className="text-mygreen text-sm float-right mr-2">
          پاسخ جدید :{" "}
         </span>
         <textarea
          className="border w-11/12 mb-1 rounded text-xs min-h-[100px] mx-auto p-2"
          placeholder="پاسخ خود را بنویسید..."
          onChange={(e) => setAnswerText(e.target.value)}
         ></textarea>
         <button
          onClick={() => answer(comment._id)}
          className="px-2 py-1 duration-200 bg-mygreen hover:bg-mylightgreen text-white rounded my-2"
         >
          ارسال پاسخ
         </button>
        </div>
       </div>
      </td>
     </tr>
    </tbody>
   );
  });

 const main = () => {
  return (
   <div className="commentslist">
    <h1 className="font-bold text-lg mb-4">لیست کل کامنت ها </h1>
    <span className="float-left ml-3">
     تعداد کل کامنت ها: {comments.length}
    </span>
    <input
     className="mb-4 w-full md:w-1/2 mr-3 block border text-sm rounded-lg placeholder:text-mygreen p-2 shadow"
     placeholder="جستجو ..."
     onChange={(event) => setSearchValue(event.target.value)}
    />
    <table className="table-auto w-full text-center border child:border text-sm child:h-12 shadow">
     <thead className="bg-mylightblue">
      <tr>
       <th>نام ارسال کننده</th>
       <th>ایمیل</th>
       <th>تاریخ ارسال</th>
       <th>متن کامنت</th>
       <th>تایید</th>
       <th>پاسخ</th>
      </tr>
     </thead>
     {displayComments}
    </table>
   </div>
  );
 };

 return (
  <div className="overflow-hidden my-3">
   {main()}
   {displayComments.length === 0 ? (
    <div className="mt-32 text-center text-3xl text-mygray animate-[wiggle_0.5s_ease-in-out]">
     کامنتی یافت نشد!
    </div>
   ) : (
    <Paginate pageCount={pageCount} onPageChange={onPageChange} />
   )}
  </div>
 );
};
export default CommentsList;
