import React from 'react'
import Header from "./Header";
import { Link } from 'react-router-dom';



function User() {
  const headerButtons = [
    {
      name: "Overview",
      link: "/admin/dashboard",
      icon: "svg",
    },
    {
      name: "Calander",
      link: "/admin/calander",
      icon: "svg",
    },
    {
      name: "Invoice",
      link: "/admin/invoice",
      icon: "svg",
    },
  ];
  return (
    <div>
      <header>
        <div className="sm:flex sm:justify-center lg:block">
          <Header headerButtons={headerButtons} />
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default User