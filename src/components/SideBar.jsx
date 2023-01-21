import React, { useState } from 'react';
import {NavLink} from "react-router-dom"
import { HiOutlineHome,  HiUsers , HiSearch,HiOutlineMenu} from 'react-icons/hi';
import {IoIosNotifications} from 'react-icons/io'
import  {AiFillSetting,AiOutlineMessage} from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri';

// import { logo } from '../assets';
import logo from "../images/android-chrome-192x192.png"
const links = [
  { name: 'Home', to: '/', icon: HiOutlineHome },
  { name: 'Search', to: '/search', icon: HiSearch },
  { name: 'Message', to: '/message', icon: AiOutlineMessage },
  { name: 'Notification', to: '/notification', icon: IoIosNotifications },
  { name: 'Profile', to: '/profile', icon: HiUsers },
  { name: 'Setting', to: '/setting', icon: AiFillSetting },
];

const Nav = ({ handleClick }) =>(
    <div className='fixed mt-10'>
        {links.map((item) =>(
          <a href={item.to} key={item.name} className="flex flex-row justify-start items-center  mx-9 my-10 text-sm font-medium text-[#d79c92] hover:text-cyan-400" onClick={() => handleClick && handleClick()}>
            <item.icon className="w-6 h-6 mr-2" />
                   {item.name}
          </a>  
        ))}
    </div>
)
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] h-[100vh] py-10 px-4 bg-[#fefeff]">
        <h2 className="fixed ml-8 flex justify-center text-2xl bg-gradient-to-r from-[#567684] via-green-500 to-[#976473] bg-clip-text  text-transparent font-sans-Just Another Hand">Socio Gram</h2>
       <Nav />
    
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white z-100" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white z-100 " onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-[#567684]/10 to-[#7e6aff] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <Nav handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;