import React from 'react';
import './index.css';
import { FaUserAlt } from "react-icons/fa";
import { MdMessage, MdKeyboardArrowDown } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import {IoMdNotifications} from 'react-icons/io'
import { FaQuestionCircle } from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';

import { RiApps2Fill } from 'react-icons/ri';
import logo from "../../assets/msspace.jpg"; 
import johndoe from '../../assets/john.png'
import DashboardForm from '../DashboardForm';

         const DashboardComponent = () => {
  return (
   <div className='main-component'>
       <div className="component">
    <div className="side-bar">
        <div className="side-logo-box  flex items-center justify-center">
            <AiOutlineMenu  style={{fontSize:'2rem'}}/>
           
        </div>
       
        <div className=' sidebar-icon-box  mt-20'>
        <a href="" className="block mb-10"><RiApps2Fill className="side-bar-icon" /></a>
        <a href="" className="block mb-10"><RiApps2Fill className="side-bar-icon" /></a>
        <a href="" className="block mb-10"><FaUserFriends className="side-bar-icon rounded-lg" /></a>
        <a href="" className="block mb-10"><RiApps2Fill className="side-bar-icon" /></a>
        </div>
      
        <div className=' sidebar-icon-box2 '>
        <a href="" className="block mb-10"><FaUserAlt className="side-bar-icon" /></a>
        <a href="" className="block mb-10"><FaUserAlt className="side-bar-icon" /></a>
        <a href="" className="block mb-10"><FaQuestionCircle className="side-bar-icon" /></a>
       
        </div>
       
       


    </div>
    <div className="side-container" >
        <div className="navigation-box">
            <div>
              <img src={logo} alt="logo"  style={{width:'40%', display:'inline', marginRight:'1rem'}}/>
              <button className='nav-btn font-semibold'>Auditor</button>
            </div>
            <div className="navigateicon-box">
                <div className="navicon-box">
                    
                    <a href="" ><MdMessage className="nav-icon"  /></a>
                    <a href="" ><IoMdNotifications className="nav-icon" /></a>
                </div>
                
                   
                  <div className='flex justify-center items-center'>
                  <img src={johndoe} alt='' className="navigat-logo-box"/> <MdKeyboardArrowDown style={{fontSize:'2rem', cursor:'pointer'}}/>
                  </div>
               
            </div>

        </div>
        <div className='second-nav-bar'>
            

        </div>
        <div className='dashboard-children'>
            <div className=''>
            <img src={johndoe} alt='' className="rounded-full mr-5"/>
            </div>
            <div className=''>
                <DashboardForm />
            </div>

        </div>
        
     
        
        
    </div>








</div>
   </div>
  )
}

export default DashboardComponent
