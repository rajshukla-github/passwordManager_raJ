import React, { useEffect } from "react";
import { useRef , useState } from "react";

const Manager = () => {
  const ref = useRef()
  const [form, setform] = useState({site: "", username: "", password:""})
 const [passwordArray, setpasswordArray] = useState([])
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if(passwords){
       setpasswordArray(JSON.parse(passwords))
    }
    
  }, [])
  


  const showpassword=()=>{
    alert("Show the password")
    if(ref.current.src.includes("images/eyeClosed_2.png")){
      ref.current.src ="images/eyeOpen.png"
    }
    else{
      ref.current.src ="images/eyeClosed_2.png"
  

    }
  }

  const savePassword =()=>{
    setpasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form])
  }

  const handleChange =(e)=>{
    setform({...form, [e.target.name]: e.target.value})

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
            value={form.site}
            onChange={handleChange}            
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full text-black p-4 py-1"
            type="text"
            name="site" 
            id=""
          />
          <div className="flex w-full justify-between gap-8 ">
            <input
            value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full text-black p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input 
              value={form.password }
              onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full text-black p-4 py-1"
                type="text"
                name="password"
                id=""
              />
              <span className="absolute right-0 top-0 cursor-pointer" onClick={showpassword}>

                <img ref={ref} className="p-2" width={35} src="images/eyeOpen.png" alt="" />
              </span>
              
            </div>
          </div>
          <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-400  hover:bg-green-300  rounded-full px-8 py-2 w-fit border border-green-800">
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
