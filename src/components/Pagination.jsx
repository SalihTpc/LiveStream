import React from "react";

const Pagination = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="fixed bottom-2 flex items-center justify-center gap-4 z-10">
      <div
        className={`${
          currentPage == 1 ? "bg-red-400" : "bg-slate-400"
        } rounded-full w-7 h-7 flex items-center justify-center cursor-pointer`}
        onClick={() => setCurrentPage(1)}
      >
        <p className="align-middle">1</p>
      </div>
      <p
        className={`${
          currentPage == 2 ? "bg-red-400" : "bg-slate-400"
        } rounded-full w-7 h-7 flex items-center justify-center cursor-pointer`}
        onClick={() => setCurrentPage(2)}
      >
        <span className="align-middle">2</span>
      </p>
      <p
        className={`${
          currentPage == 3 ? "bg-red-400" : "bg-slate-400"
        } rounded-full w-7 h-7 flex items-center justify-center cursor-pointer`}
        onClick={() => setCurrentPage(3)}
      >
        <span className="align-middle">3</span>
      </p>
      <p
        className={`${
          currentPage == 4 ? "bg-red-400" : "bg-slate-400"
        } rounded-full w-7 h-7 flex items-center justify-center cursor-pointer`}
        onClick={() => setCurrentPage(4)}
      >
        <span className="align-middle">4</span>
      </p>
    </div>
  );
};

export default Pagination;
