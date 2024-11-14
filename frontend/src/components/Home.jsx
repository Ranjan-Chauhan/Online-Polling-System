import React from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col justify-center items-center space-y-10">
      <div className="shadow-lg rounded-md p-20 m-20 flex flex-col justify-center items-center space-y-10">
        <div className="pt">
          <h1 className="text-3xl font-bold">
            Welcome To The Online Polling System
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => navigate("/createpoll")}
            className="text-lg font-semibold text-green-700 hover:border hover:bg-slate-700 hover:text-white rounded p-1 px-4"
          >
            Creat Poll
          </button>
          <button
            onClick={() => navigate("/pollslist")}
            className="text-lg font-semibold text-green-700 hover:border hover:bg-slate-700 hover:text-white rounded p-1 px-4"
          >
            Poll List
          </button>
        </div>
        <span className="text-gray-700 pb-20">
          Manage an participate in polls with ease. Use the navigation link to
          create new polls or view and vote in existing ones.
        </span>
      </div>

      {/* <div className="space-y-11 ">
        <p className="text-gray-50">.....</p>

        <p className="text-gray-50">.....</p>

        <p className="text-gray-50">.....</p>

        <p className="text-gray-50">.....</p>

        <p className="text-gray-50">.....</p>

        <p className="text-gray-50">.....</p>
      </div> */}
    </div>
  );
};

export default Home;
