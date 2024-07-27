import React from 'react'
import img5 from './images/sm-icons-facebook-logo.webp'
import img6 from './images/google.jpg'
import img7 from './images/free-twitter-logo-icon-2429-thumb.png'
import img8 from './images/chiang-rai-thailand-march-02-2023-3d-render-whatsapp-logo-icon-isolated-white-background_640106-953.avif'
import img9 from './images/4138124.png'
import Navigation from './Navigation'

export default function Contact_us() {
  return (
    <>
    {/* <div>
      <Navigation/>
    </div> */}
    <div>
        <h1 className="text-4xl font-bold py-5">Contact Us</h1>
        <div className="grid grid-cols-12 grid-rows-1 gap-1 pb-5">
          <div><img src={img5} alt="" className="h-20"/></div>
          <div><img src={img6} alt="" className="h-20"/></div>
          <div><img src={img7} alt="" className="h-20"/></div>
          <div><img src={img8} alt="" className="h-20"/></div>
          <div><img src={img9} alt="" className="h-20"/></div>

        </div>
        <div className="flex py-5 bg-gray-200 ">
          <div className="pl-5">
            <p>Address :- Bhopal, M.P. 462001- India</p>
            <p>phone Number:- 7898618422</p>
            <p>Email id:- Ourhospital1212@gmail.com</p>
          </div>
          <div className="pl-72 text-gray-500"><p>Copyright @ 2023 - Our Hospital</p></div>

        </div>

      </div>
      
    </>
  )
}
