import React, { useEffect, useState } from "react";
import img from "./images/istockphoto-599780174-1024x1024.jpg";
import Contact_us from "./Contact_us";
import Navigation from "./Navigation";
import axios from "axios";

export default function Appointment() {
  const [data, setData] = useState({
    'patient_id': "",
    'doctor_id': "",
    'datetime': "",
  });
  // inputs ke liye
  const formHandle = (e) => {
    const value = e.target.name === "patient_id" || e.target.name === "doctor_id" ? parseInt(e.target.value): e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  //form ke liye
  const bookData = (event) => {
    event.preventDefault() ;

    axios.post('http://127.0.0.1:8000/add-appointment' , data)
    .then((response)=>{
      console.log(response.data)
      alert('Your appointment is booked')
    }).catch((error)=> console.log("Error related to : " + error))
    setData([])

  };


  return (
    <>
      <div>
        <Navigation />
      </div>
      <section className="bg-center bg-no-repeat bg-blend-multiply h-96">
        <img src={img} alt="" className="absolute blur h-3/4 w-full " />
        <div className="pt-32 text-7xl mx-auto text-center relative pr-52">
          <h1 className="mb-4 tracking-tight leading-none text-black italic ">
            Book an
          </h1>

          <h1 className="mb-4  tracking-tight leading-none text-lime-800 font-bold ">
            Appointment
          </h1>
        </div>
      </section>

      <div>
        <form className=" bg-black w-1/2  mt-20  mx-auto" onSubmit={bookData}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Patient ID
            </label>
            <input
              onChange={formHandle}
              name="patient_id"
              value={data.patient_id}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Patient ID"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Doctor ID
            </label>
            <input
              onChange={formHandle}
              value={data.doctor_id}
              type="text"
              name="doctor_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Doctor ID"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Appointment Date
            </label>
            <input
              onChange={formHandle}
              type="datetime-local"
              value={data.datetime}
              name="datetime"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        <Contact_us />
      </div>
    </>
  );
}
