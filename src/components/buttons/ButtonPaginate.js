import React, { useState, useEffect } from 'react';
import '../../assets/css/ButtonPaginate.css';
import axios from 'axios'
import ReactPaginate from 'react-paginate';

function ButtonPaginate({pageCount, handlePageClick}) {
   

  return (
    <div className="display-flex-center">
       <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}

export default ButtonPaginate