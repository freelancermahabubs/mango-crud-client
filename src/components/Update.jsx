import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadMango = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    // console.log(name, email);
    const updatedMangos = { name, email };
    fetch(`http://localhost:5000/mangos/${loadMango?._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMangos),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Mango Updated SuccessFully");
        }
      });
  };
  return (
    <div>
      <h1>
        <span className="text-4xl font-bold bg-red-500 rounded mx-auto p-2 text-white w-[54%]">
          Update Information of
        </span>
        <span className="text-4xl font-bold bg-blue-500 rounded mx-auto p-2 text-white w-[54%]">
          {loadMango?.name}
        </span>
      </h1>
      <form onSubmit={handleUpdate} className="w-[35%] mt-8 mx-auto">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Your Mango
          </label>
          <input
            type="text"
            id="name"
            defaultValue={loadMango?.name}
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Mango"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={loadMango?.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
