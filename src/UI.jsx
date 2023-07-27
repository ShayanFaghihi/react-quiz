import React from "react";

const UI = ({ children }) => {
  return (
    <div className="container w-4/5 mx-auto md:max-w-lg relative">
      <div className="block bg-midnightGreen rounded-lg py-8 px-7 md:flex md:space-x-10 justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default UI;
