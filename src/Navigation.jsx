import React from 'react'
import img from './images/51mtgUHNJrL.jpg'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <Link
        to={"/Home"}
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src={img}
          className="h-8"
          alt="Flowbite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Our Hospital
        </span>
      </Link>
      <div className="flex items-center space-x-6 rtl:space-x-reverse">
        <Link
          to={"/"}
          className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
        >
          Logout
        </Link>
      </div>
    </div>
  </nav>
  <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
      <div className="flex items-center">
        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">            
          <li>
            <Link
              to={"/Home"}
              className="text-gray-900 dark:text-white hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/Appointment"}
              className="text-gray-900 dark:text-white hover:underline"
            >
              Book Appointment
            </Link>
          </li>
          <li>
            <Link
              to={"/Contact_us"}
              className="text-gray-900 dark:text-white hover:underline"
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to={"/AllAppointments"}
              className="text-gray-900 dark:text-white hover:underline"
            >
              Get All Appointments
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  


   </>
  
  )
}
