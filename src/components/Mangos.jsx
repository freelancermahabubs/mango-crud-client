import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Mangos = () => {
  const loadMangos = useLoaderData();
  console.log(loadMangos);
  const [mangos, setMangos] = useState(loadMangos);
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/mangos/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          alert("Deleted SuccessFully");
          const remaining = mangos.filter((mango) => mango._id !== _id);
          setMangos(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold bg-red-500 rounded mx-auto p-2 text-white w-[54%]">
        Mangos {mangos.length}
      </h2>
      <div>
        {mangos.map((mango) => (
          <p className="text-xl font-semibold mb-2 mt-5" key={mango?._id}>
            {mango?.name} : {mango?.email} :{mango?._id}
            <Link to={`/update/${mango._id}`}>
              <button className="text-white ml-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(mango._id)}
              type="button"
              className="text-white ml-4 bg-gradient-to-br from-red-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Mangos;
