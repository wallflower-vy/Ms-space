import React from "react";
import "./index.css";
import logo from "../../assets/msspace.jpg";
import FormComponent from "../FormComponent";
import { MdMessage } from 'react-icons/md';

const Background = (props) => {
  return (
    <div className='background '>
      <div className='backgroundimage'>
        <div className='header items-center flex justify-between py-5'>
          <div>
            {" "}
            <img src={logo} alt='logo' />
          </div>
          <div>
            {" "}
            <button className='login-btn bg-blue-900 hover:bg-blue-700 drop-shadow-sm px-10 py-2 text-white rounded-2xl'>
              login into account
            </button>
          </div>
        </div>
        <FormComponent />

       <div className="footer mt-20 ">
       <small>@MS SPACE 2023</small>
       <div className="flex justify-between items-center">
        <small>Privacy policy</small>
        <a href="block" className="" ><MdMessage className="nav-icon"  />Terms and condition</a>
        
       </div>
       </div>

      </div>
    </div>
  );
};

export default Background;
