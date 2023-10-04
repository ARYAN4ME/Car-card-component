import React, { useState } from 'react';
import Items from './Items';
import Pagination from './Pagination';


function Page({sendData}) {
  // this is for pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <Items currentPage={currentPage} sendDatainItem={sendData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Page;
