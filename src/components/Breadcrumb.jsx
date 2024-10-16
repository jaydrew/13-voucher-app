import React from "react";
import { HiChevronRight, HiHome, HiMiniHome, HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, Links }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
          <HiMiniHome />
            Home
          </Link>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <HiChevronRight />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              {currentPageTitle}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
