import React from "react";

const Manager = () => {
  const showpassword=()=>{
    alert("Show the password")
  }
  return (
    <>
      <div className="  myContainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Password</span>
          <span className="text-green-500">Manager/&gt;</span>
        </h1>
        <p className="text-green-500 text-lg text-center">
          Your own password manager in a single place
        </p>
        <div className=" flex flex-col p-4 text-black gap-10 items-center">
          <input
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full text-black p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between gap-8 ">
            <input
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full text-black p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full text-black p-4 py-1"
                type="text"
                name=""
                id=""
              />
              <span className="absolute right-0 top-0 cursor-pointer" onClick={showpassword}>

                <img className="p-2" width={35} src="images/eyeClosedTransparent.png" alt="" />
              </span>
              
            </div>
          </div>
          <button className="flex justify-center items-center gap-2 bg-green-400  hover:bg-green-300  rounded-full px-8 py-2 w-fit border border-green-800">
            <lord-icon
              src="https://cdn.lordicon.com/ftndcppj.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
