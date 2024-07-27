import axios from 'axios';
import React, { useState } from 'react'

export default function Register() {

    const [data,setData] = useState({
        'first_name' : '' ,
        'last_name' : '' ,
        'gender' : '' ,
        'email' : '' ,
        'phone_number' : '' ,
        'password' : '' ,
    })

    const formHandle = (e) => {
        const value = e.target.name === "phone_number" ? parseInt(e.target.value): e.target.value;
    
        setData({
          ...data,
          [e.target.name]: value,
        });
      };

      const bookData = (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/add-doctor' , data)
        .then((response)=>{
            console.log(response)
        })
      }
  return (
    <>
     

<form class=" bg-black w-1/2  py-10" onSubmit={bookData}>
    <h1 class="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-white">Hello Doctor , Enter your Details</h1>
  <div class="mb-5 ">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
    <input type="text"  value={data.first_name} onChange={formHandle} name='first_name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name "/>
  </div>
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
    <input type="text" id="last_name" value={data.last_name} onChange={formHandle} name='last_name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder='Enter Last Name'/>
  </div>
  
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
    <input type="text" name='gender' id="gender" value={data.gender} onChange={formHandle} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Gender'/>
  </div>
  
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
    <input type="email" id="email" value={data.email} onChange={formHandle} name='email' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter email'/>
  </div>
  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
    <input type="number" name='phone_number' id="" value={data.phone_number} onChange={formHandle}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Phone number'/>
  </div>
  
  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="password" name='password' value={data.password} onChange={formHandle}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Password'/>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
 
    </>
  )
}
