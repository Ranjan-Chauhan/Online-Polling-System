import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
  const [formData, setFormData] = useState({
    pollTitle: "",
    description: "",
    option1: "",
    option2: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/polls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Poll created successfully:", data);
        navigate("/pollslist");
      } else {
        console.error("Error creating poll:", data.error);
        alert("Failed to create poll: " + data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Failed to create poll due to network error.");
    }
  };

  return (
    <div className="flex justify-center items-center max-h-screen p-24 bg-white ">
      <div className="shadow-md w-10/12 rounded-md">
        <h1 className="text-3xl pt-10 font-bold flex justify-center items-center">
          Create a New Poll
        </h1>
        <form onSubmit={handleSubmit} className="px-20 py-10 space-y-4">
          <div>
            <label
              htmlFor="pollTitle"
              className="block text-sm font-medium text-gray-900"
            >
              Poll Title:
            </label>
            <input
              id="pollTitle"
              name="pollTitle"
              type="text"
              required
              value={formData.pollTitle}
              onChange={handleChange}
              className="block w-full rounded border border-gray-600 p-2 text-black shadow"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-900"
            >
              Description:
            </label>
            <input
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              className="block w-full rounded border border-gray-600 p-2 text-black shadow"
            />
          </div>
          <div>
            <label
              htmlFor="option1"
              className="block text-sm font-medium text-gray-900"
            >
              Option 1:
            </label>
            <input
              id="option1"
              name="option1"
              type="text"
              required
              value={formData.option1}
              onChange={handleChange}
              className="block w-full rounded border border-gray-600 p-2 text-black shadow"
            />
          </div>
          <div>
            <label
              htmlFor="option2"
              className="block text-sm font-medium text-gray-900"
            >
              Option 2:
            </label>
            <input
              id="option2"
              name="option2"
              type="text"
              required
              value={formData.option2}
              onChange={handleChange}
              className="block w-full rounded border border-gray-600 p-2 text-black shadow"
            />
          </div>
          <div className="pt-10">
            <button
              type="submit"
              className="rounded-md w-full bg-green-500 p-1 px-4 text-lg font-semibold text-white shadow-md"
            >
              Create Poll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePoll;
