import React from 'react'
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <div className="">
      <div class="flex  justify-between bg-gray-300 rounded-2xl overflow-hidden">
        {props.headerButtons.map((button, index) => (
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ">
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header