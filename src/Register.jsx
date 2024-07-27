import axios from 'axios';
import React , {useState} from 'react'

export default function Register() {
  const [data,setData] = useState({
    first_name : '' ,
    last_name : '' ,
    age : '',
    gender : '' ,
    weight : '' ,
    email : '' ,
    phone_number : '' ,
    password : '' ,
})

const formHandle = (e) => {
    const value = e.target.name === "phone_number" || e.target.name === 'age' ? parseInt(e.target.value): e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const bookData = (event) =>{
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/add-patient' ,data)
    .then((response)=>{
      console.log(response)
    })
  }
  return (
    <>
     

<form class=" bg-black w-1/2  py-10" onSubmit={bookData}>
  <div class="mb-5 ">
    <h1 class="block mb-2 text-2xl text-center font-medium text-gray-900 dark:text-white">Hello Patient , Enter Your Details</h1>
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
    <input type="text"  name='first_name' value={data.first_name} onChange={formHandle} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First name"/>
  </div>
  <div class="mb-5">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
    <input type="text" name='last_name'  value={data.last_name} onChange={formHandle}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder='Enter Last Name'/>
  </div>
  
  <div class="mb-5">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
    <input type="number" name='age'  value={data.age} onChange={formHandle}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Age'/>
  </div>

  <div class="mb-5">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
    <input type="text" name='gender' value={data.gender} onChange={formHandle} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder='Enter Gender'/>
  </div>
  
  <div class="mb-5">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight</label>
    <input type="text" name='weight'  value={data.weight} onChange={formHandle} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter weight'/>
  </div>

  <div class="mb-5">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" name='email'  value={data.email} onChange={formHandle}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder='Enter Email'/>
  </div>

  <div class="mb-5">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
    <input type="number" name='phone_number'  value={data.phone_number} onChange={formHandle}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder='Enter Phone number'/>
  </div>
  
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" name='password'  value={data.password} onChange={formHandle}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Password'/>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
 
    </>
  )
}
