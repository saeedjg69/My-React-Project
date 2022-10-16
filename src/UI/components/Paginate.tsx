import ReactPaginate from "react-paginate";

const Paginate = ({pageCount,onPageChange}:any) => {
  return (
    <ReactPaginate
     pageCount={pageCount}
     onPageChange={onPageChange}
     // pageRangeDisplayed={2}
     // marginPagesDisplayed={1}
     previousLabel={" < قبلی"}
     nextLabel={"بعدی >"}
     previousLinkClassName={"p-3 leading-9"}
     nextLinkClassName={"p-3 leading-9"}
     disabledClassName={"invisible"}
     activeClassName={"bg-mydarkblue child:text-white border-mydarkblue"}
     pageLinkClassName={"py-2 px-1.5 sm:px-3 inline-block"}
     className="flex justify-center w-11/12 mx-auto child:m-0.5 sm:child:m-1 child:rounded child:text-mydarkblue child:border child:border-mydarkblue child:cursor-pointer child-hover:text-white child-hover:bg-mydarkblue child:duration-200"
    />
  )
}

export default Paginate