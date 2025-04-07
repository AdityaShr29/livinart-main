import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import Inbox from './Inbox';
import User from './User';
import AddProject from './AddProject';


function Admin() {
    const {id}=useParams();

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4 rounded-l">
          {id == "dashboard" ? (
            <Dashboard />
          ) : id == "inbox" ? (
            <Inbox />
          ) : id == "user" ? (
            <AddProject />
          ) : id == "product" ? (
            <Products />
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </>
  );
}

export default Admin