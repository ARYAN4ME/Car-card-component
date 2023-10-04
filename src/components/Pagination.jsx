import React from 'react';
import "./page.css"
import {data} from "./data";
function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination bg-body-tertiary">
            <h5>{`${currentPage*6} from ${data.length}`}</h5>

            <div className='paginationLeft'>
                <button
                    className="page-button"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
                <ul className="page-numbers">
                    {pageNumbers.map((pageNumber) => (
                        <li
                            key={pageNumber}
                            className={pageNumber === currentPage ? 'active' : ''}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    ))}
                </ul>
                <button
                    className="page-button"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Pagination;
