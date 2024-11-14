import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-20 space-y-6">
      <div className="flex flex-col justify-center items-center shadow-md rounded-md p-20 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Vote Confirmation</h1>
        <p className="font-semibold">Thank you for voting!</p>
        <p className="font-semibold">
          Your vote has been successfully submitted.
        </p>
        <button
          onClick={() => navigate("/pollslist")}
          className="text-green-500 font-semibold hover:border hover:bg-gray-50 p-1 px-4 rounded"
        >
          Back to Poll list
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
