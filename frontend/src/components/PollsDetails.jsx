import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PollsDetails = () => {
  const { pollId } = useParams();
  const [poll, setPoll] = useState(null);
  const [formData, setFormData] = useState({
    pollId: "",
    pollTitle: "",
    option: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchPoll = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5000/api/polls/${pollId}`
  //       );
  //       const data = await response.json();
  //       if (response.ok) {
  //         setPoll(data.data);
  //         setFormData({
  //           ...formData,
  //           pollId: data.data._id,
  //           pollTitle: data.data.pollTitle,
  //         });
  //       } else {
  //         console.error("Failed to fetch poll:", data.error);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching poll:", error);
  //     }
  //   };

  //   fetchPoll();
  // }, [pollId]);

  // useEffect(() => {
  //   const fetchPoll = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:5000/api/polls/${pollId}`
  //       );
  //       const data = await response.json();

  //       if (response.ok && data && data.data) {
  //         setPoll(data.data);
  //         setFormData({
  //           ...formData,
  //           pollId: data.data._id,
  //           pollTitle: data.data.pollTitle,
  //         });
  //       } else {
  //         console.error(
  //           "Failed to fetch poll:",
  //           data.error || "Data not found"
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error fetching poll:", error);
  //     }
  //   };

  //   fetchPoll();
  // }, [pollId]);

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/polls/${pollId}`
        );
        const data = await response.json();

        if (response.ok && data && data.data) {
          setPoll(data.data);
          setFormData({
            ...formData,
            pollId: data.data._id,
            pollTitle: data.data.pollTitle,
          });
        } else {
          console.error(
            "Failed to fetch poll: Poll not found or invalid pollId",
            data.error
          );
        }
      } catch (error) {
        console.error("Error fetching poll:", error);
      }
    };

    if (pollId) fetchPoll();
    else console.error("No pollId provided to PollsDetails");
  }, [pollId]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, option: value });
  };

  console.log("formdata: ", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/votes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Vote submitted successfully!");
        setTimeout(() => {
          setMessage("");
          navigate("/confirmationpage");
        }, 1000);
      } else {
        console.error("Error creating vote:", data.error);
        alert("Failed to create vote: " + data.error);
      }
    } catch (error) {
      setMessage("Error submitting vote. Please try again.");
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div className="bg-white p-10">
      <div className="shadow-lg p-10 rounded-md">
        <h1 className="text-3xl font-semibold text-center pb-4">
          Poll Details
        </h1>
        {poll ? (
          <div className="m-6 border-b">
            <h2 className="text-2xl text-gray-700 font-semibold">
              {poll.pollTitle}
            </h2>
            <p className="text-gray-700">{poll.description}</p>
            <form onSubmit={handleSubmit} className="py-4">
              <div className="space-x-6 pb-5 text-gray-700">
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={poll.option1}
                    checked={formData.option === poll.option1}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {poll.option1}
                </label>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={poll.option2}
                    checked={formData.option === poll.option2}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {poll.option2}
                </label>
              </div>
              <button
                type="submit"
                className="rounded-md w-1/6 bg-green-500 p-1 px-4 text-lg font-semibold text-white shadow-md"
              >
                Submit Vote
              </button>
            </form>
          </div>
        ) : (
          <p>Loading poll details...</p>
        )}
        {message && (
          <div className="mt-4 p-3 bg-gray-100 border-l-4 border-blue-500 text-blue-700">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

/*
const PollsDetails = () => {
  const [poll, setPoll] = useState([]);
  const [formData, setFormData] = useState({
    pollId: "",
    pollTitle: "",
    option: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/polls`);
        const data = await response.json();
        if (response.ok) {
          setPoll(data.data);
        } else {
          console.error("Failed to fetch polls:", data.error);
        }
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };

    fetchPolls();
  }, []);

  const handleChange = (e, pollId, pollTitle) => {
    const { value } = e.target;
    setFormData({ pollId, pollTitle, option: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/votes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Vote submitted successfully!");
        setTimeout(() => {
          setMessage("");
          navigate("/confirmationpage");
        }, 1000);
      } else {
        console.error("Error creating vote:", data.error);
        alert("Failed to create vote: " + data.error);
      }
    } catch (error) {
      setMessage("Error submitting vote. Please try again.");
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div className="bg-white p-10">
      <div className="shadow-lg p-10 rounded-md">
        <h1 className="text-3xl font-semibold text-center pb-4">
          Poll Details
        </h1>
        {poll.length > 0 ? (
          poll.map((poll) => (
            <div key={poll._id} className="m-6 border-b">
              <h2 className="text-xl font-bold">{poll.pollTitle}</h2>
              <p className="text-gray-700">{poll.description}</p>
              <form onSubmit={handleSubmit} className="py-4">
                <div className="space-x-6 pb-5">
                  <label>
                    <input
                      type="radio"
                      name={`option-${poll._id}`}
                      value={poll.option1}
                      checked={
                        formData.option === poll.option1 &&
                        formData.pollId === poll._id
                      }
                      onChange={(e) =>
                        handleChange(e, poll._id, poll.pollTitle)
                      }
                      className="mr-2"
                    />
                    {poll.option1}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`option-${poll._id}`}
                      value={poll.option2}
                      checked={
                        formData.option === poll.option2 &&
                        formData.pollId === poll._id
                      }
                      onChange={(e) =>
                        handleChange(e, poll._id, poll.pollTitle)
                      }
                      className="mr-2"
                    />
                    {poll.option2}
                  </label>
                </div>
                <button
                  type="submit"
                  className="rounded-md w-1/6 bg-green-500 p-1 px-4 text-lg font-semibold text-white shadow-md"
                >
                  Submit Vote
                </button>
              </form>
            </div>
          ))
        ) : (
          <p>No polls available at the moment.</p>
        )}
        {message && (
          <div className="mt-4 p-3 bg-gray-100 border-l-4 border-blue-500 text-blue-700">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};
*/
export default PollsDetails;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const PollsDetails = () => {
//   const [polls, setPolls] = useState([]);
//   const [formData, setFormData] = useState({
//     option: "",
//   });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPolls = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/polls`);
//         const data = await response.json();
//         if (response.ok) {
//           setPolls(data.data);
//         } else {
//           console.error("Failed to fetch polls:", data.error);
//         }
//       } catch (error) {
//         console.error("Error fetching polls:", error);
//       }
//     };

//     fetchPolls();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   console.log("formdat: ", formData);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:5000/api/votes`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Vote submitted successfully!");
//         setTimeout(() => {
//           setMessage("");
//           navigate("/confirmationpage");
//         }, 1000);
//       } else {
//         console.error("Error creating vote:", data.error);
//         alert("Failed to create vote: " + data.error);
//       }
//     } catch (error) {
//       setMessage("Error submitting vote. Please try again.");
//       console.error("Error submitting vote:", error);
//     }
//   };

//   return (
//     <div className="bg-white p-10">
//       <div className="shadow-lg p-10 rounded-md">
//         <h1 className="text-3xl font-semibold text-center pb-4">
//           Poll Details
//         </h1>
//         {polls.length > 0 ? (
//           polls.map((poll) => (
//             <div key={poll._id} className="m-6 border-b">
//               <h2 className="text-xl font-bold">{poll.pollTitle}</h2>
//               <p className="text-gray-700">{poll.description}</p>
//               <form onSubmit={handleSubmit} className="py-4">
//                 <div className="space-x-6  pb-5">
//                   <label>
//                     <input
//                       type="radio"
//                       name="option"
//                       value={poll.option1}
//                       checked={formData.option.includes(`${poll.option1}`)}
//                       onChange={handleChange}
//                       className="mr-2"
//                     />
//                     {poll.option1}
//                   </label>
//                   <label>
//                     <input
//                       type="radio"
//                       name="option"
//                       value={poll.option2}
//                       checked={formData.option.includes(`${poll.option2}`)}
//                       onChange={handleChange}
//                       className="mr-2"
//                     />
//                     {poll.option2}
//                   </label>
//                 </div>
//                 <button
//                   type="submit"
//                   className="rounded-md w-1/6 bg-green-500 p-1 px-4 text-lg font-semibold text-white shadow-md"
//                 >
//                   Submit Vote
//                 </button>
//               </form>
//             </div>
//           ))
//         ) : (
//           <p>No polls available at the moment.</p>
//         )}
//         {message && (
//           <div className="mt-4 p-3 bg-gray-100 border-l-4 border-blue-500 text-blue-700">
//             {message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PollsDetails;
