import React from 'react'

function Mymodal({visible,onClose }) {
  const handleOnClose= (e) => {
    if(e.target.id==="container")
    onClose()
  };
  if(!visible)
  return null; 

  return (
    <div
    id='container'
     onClick={handleOnClose}
     className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
      <div className="bg-white p-2 rounded">
        {/* <p>My Modal</p><button onClick={onClose}>X</button></div>
       */}
       <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome back
        </h1>
        <p className="text-center text-gray-700 mb-5">Query Box</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Query for Grade 1"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Query for Grade 2"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Query for Grade 3"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Query for Grade 4"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Query for Grade 5"
          />

        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Submit
          </button>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Mymodal