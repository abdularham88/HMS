import React, { useState } from "react";
import img from "./images/51mtgUHNJrL.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useStore from "./Store";

export default function Login() {
  const data = {email : '' , password : '' , role : ''}

  const [input,setInput] = useState(data);


  const handleInput = (e)=>{
    setInput({...input , [e.target.name] : e.target.value})
  }
  
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/Home');
    }
  
    const {user_id,setUserId}  = useStore(); 
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    axios.post('http://127.0.0.1:8000/login',input)
    .then((response)=>{
      console.log(response.data)
      handleClick();
      setUserId(response.data.user.doctor_id)
     
    })
    .catch((error)=>{
      alert('Invalid Credentials');
      console.log(error)
    });

  
  }

  

  
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-slate-200 ">
    
        <div className=" bg-white h-screen w-full m-60 flex justify-between flex-col pb-10">
          <div>
            <img src={img} className="h-48 mx-72 " alt="" />
            <h1 className="text-4xl text-center text-gray-900">Our Hospital</h1>
          </div>
          <div>
            <form class="max-w-sm mx-auto"onSubmit={handleSubmit}>
              <div class="mb-5">
                <label  class="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInput} 
                  value={input.email}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email"
                />
              </div>
              <div class="mb-5">
                <label class="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInput} 
                  value={input.password}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div class="mb-5">
                <label  class="block mb-2 text-sm font-medium">
                  Role
                </label>
                
                <select
                  name="role"
                  onChange={handleInput} 
                  value={input.role}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Role"
                  
                >
                  <option value="">Select an option</option>
                  <option value="doctor" >doctor</option>
                  <option value="patient">patient</option>
                </select>
                
              </div>

                
                <button  type="submit"
                // onClick={handleLogin}
                  
                class=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-44 py-3  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-20"
                >
                Login
                 
                </button>
                <br />
                <br />
                {/* <br /> */}
              
              <Link to={'/Forgot'} className='  ml-32 mt-20'>
              Forgot Password?
              </Link>
            </form>
          </div>
          <div className="text-center mt-8  ">
            <p>
              Don't have an account
              <button
                className="bg-white text-red-400 border-2 border-red-600 ml-4 rounded-s-sm "
              >
                <Link to={'/Doctor'}>
                For Doctors
                </Link>
              </button>
              <button
                className="bg-white text-red-400 border-2 border-red-600 ml-4 rounded-s-sm "
              >
                <Link to={'/Register'}>
                For Patients
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
