// import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import {useForm} from 'react-hook-form';
// import { useState } from "react";
import "./index.css";
import { RiGoogleFill } from "react-icons/ri";
import {FaApple} from 'react-icons/fa'

const FormComponent = () => {
    const {register, handlesubmit,errors} =useForm();
    // const onSubmit =(data)=>{
    //     console.log(data)
    // }
//   const [userInfo, setuserInfo]=useState()
  return (
    <div className='mt-20 ml-20 '>
    
        <div class='w-full max-w-md'>
            <pre></pre>
          <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            
        <h1 className='text-xl font-bold mb-3'>Log in</h1>
        <p className='font-medium'>Choose your sign in method</p>
        
        <button
          
          className='bg-zinc-200 form-btn font-bold text-left pl-2 py-2 mt-5 mb-5'
        >
         <RiGoogleFill className="form-icon"/>
        continue with Google
        </button>
        <button  className='form-btn bg-zinc-200  font-bold text-left pl-2 py-2'>
          <FaApple className="form-icon"/>continue with Apple
          
        </button>
            <div class='mb-4 mt-4'>
             
              <input
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Email'
                // ref={register({required:'username is required'})}
              />
            </div>
            <div class='mb-6'>
            
              <input
                class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='Password'
                // ref={register({required:'password is required'})}
              />
              {/* <p class='text-red-500 text-xs italic'>
                Please choose a password.
              </p> */}
            </div>
            <div class='flex items-center justify-between'>
              <button
                class='bg-blue-500 hover:bg-blue-700 text-white font-bold mb-4 py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-full'
                type='button'
              >
                Log In
              </button>
              
            </div>
            <div className="text-center">
            <a 
                class=' underline font-bold text-sm  text-blue-500 hover:text-blue-800'
                href='#'
              >
                Forgot Password?
              </a>
              <p>Don't have an account? <a href="#" className=" font-bold">Sign in</a></p>
              <p><a href="#" className="underline font-bold">Log in with your organization</a></p>
            </div>
          </form>
         
        </div>
      
      </div>
   
  );
};

export default FormComponent;
