import React from "react";
import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <>
      <form className="w-2/4 mx-auto px-20 bg-gray-400 ">
        <div className=" bg-blue-700">
          <h1 className=" text-center text-white text-4xl block px-10">Password Reset</h1>
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-10 text-center">
            Enter your email address and we'll send you an email <br /> with
            instructions to reset your password
          </label>
          <input
            type=""
            id=""
            class="my-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 ml-10 p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Your Email"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-3/4 ml-10 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Reset Password
        </button>
        <div className="text-sky-900 py-5 text-xl">
          <button className="mr-10">
            <Link to={'/Login'}>Login</Link></button>
          <button className="ml-80">
            <Link to={'/Register'}>Register</Link></button>
        </div>
      </form>
    </>
  );
}
