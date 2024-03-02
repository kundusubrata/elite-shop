import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

const CustomPagination = ({ resPerPage, filteredProductCount }) => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState();

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const setCurrentPageNo = (pageNumber) => {
    // alert(pageNumber);
    setCurrentPage(pageNumber);
    if (searchParams.has("page")) {
      searchParams.set("page", pageNumber);
    } else {
      searchParams.append("page", pageNumber);
    }

    const path = window.location.pathname + "?" + searchParams.toString();
    // alert(path);
    navigate(path);
  };

  return (
    <>
      <div className="d-flex justify-content-center my-5">
        {filteredProductCount > resPerPage && (
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resPerPage}
            totalItemsCount={filteredProductCount}
            onChange={setCurrentPageNo}
            firstPageText={"First"}
            prevPageText={"Prev"}
            nextPageText={"Next"}
            lastPageText={"Last"}
            itemClass={"page-item"}
            linkClass={"page-link"}
          />
        )}
      </div>
    </>
  );
};

export default CustomPagination;
