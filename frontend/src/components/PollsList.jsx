import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PollsList = () => {
  const [polls, setPolls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/polls");
        const data = await response.json();

        if (response.ok) {
          setPolls(data.data);
        } else {
          console.error("Failed to fetch polls:", data.error);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    fetchPolls();
  }, []);

  // console.log(polls);

  return (
    <div className="bg-white p-20">
      <div className="border hover:shadow-lg rounded-md p-10">
        <div className="w-10/12 flex justify-center items-center">
          <h1 className="text-3xl font-bold">Poll List</h1>
        </div>
        {polls.length > 0 ? (
          polls.map((poll) => (
            <div
              key={poll._id}
              className="w-11/12 pt-10 flex justify-between pb-6 border-b-2"
            >
              <div>
                <h1 className="text-green-500 font-bold text-xl">
                  {poll.pollTitle}
                </h1>
                <p>
                  <span className="font-semibold text-lg">Description: </span>
                  {poll.description}
                </p>
              </div>
              <button
                onClick={() => {
                  navigate(`/polldetails/${poll._id}`);
                }}
                className="text-green-500 flex justify-center items-center font-semibold hover:border hover:bg-gray-200 py-0 px-6 rounded"
              >
                Vote
              </button>
            </div>
          ))
        ) : (
          <p className="text-center pt-10">No polls available</p>
        )}
      </div>
    </div>
  );
};

export default PollsList;
