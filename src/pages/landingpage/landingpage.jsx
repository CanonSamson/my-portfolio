import { Link } from 'react-router-dom';
import AboutMe from '../../components/AboutMe';
import MobileNav from '../../components/MobileNav';
import NavBar from '../../components/NavBar';
import Work from '../../components/Work';
import './css.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Where from '../../components/Where';
import imge from '../../image/ba.gif'
import ProjectRoute from '../ProjectRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Archived from '../../components/Archived';


const Landingpage = () => {
    const [touch, setTouch] = useState(false)
    const OnTouch = () => {
        setTouch(!touch)
    }


    return (
        <div className=' relative'>
            {
                touch &&
                <div className=" ">
                    <form className=" top-[20%] shadow-xl mx-[10%] sm:w-[60%] md:w-[40%] md:mx-[30%] sm:mx-[20%]  w-[80%] p-4 items-center justify-center bg-gray-50 fixed z-40 ">
                        <input className=' bg-transparent  border focus:outline-none focus:border-[#1c0f3f] text-[#1c0f3f] p-3 rounded text-x mt-[1rem] w-full ' type="email" placeholder="Enter Your Email" />
                        <textarea className=' bg-transparent  border p-3  focus:outline-none focus:border-[#1c0f3f] text-[#1c0f3f] rounded text-x mt-[1rem] w-full ' type="text" placeholder="Enter Text" />
                        <button className='  border border-[#1c0f3f] text-[#1c0f3f]  font-bold  p-2 rounded text-x mt-[3rem] w-full '>Send Text</button>
                    </form>
                    <div onClick={OnTouch} className='fixed h-screen  w-full right-0  bg-white/50 top-0 z-30 backdrop-blur-sm'></div>
                </div>
            }

            <NavBar />

            <MobileNav />
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .34 }}
                className='sm:p-10 p-5  h-screen justify-center flex flex-col max-w-[940px] m-auto'>
                <p className=' text-[#1c0f3f] py-3 sm:text-xl' >Hi, my name is</p>
                <h1 className=' text-[#1c0f3f] text-3xl font-bold my-3 sm:text-6xl'> Canon Samson. </h1>
                <span className=' text-[#8892b0]  text-3xl font-bold  sm:text-6xl'>I build things for the web.</span>
                <p className='text-[#1c0f3f] sm:pr-10 my-5 text-[14px] sm:text-xl'>I’m a Frontend developer specializing in building (web applications and Native applications ).</p>
                <Link onClick={OnTouch} to="" ><p className='text-[#1c0f3f] active:scale-105 border border-[#1c0f3f] p-3 rounded text-x mt-[3rem] w-[50%] max-w-[250px] text-center animate-bounce' >Get in Touch!</p></Link>
            </motion.div>

                <Routes>
                    <Route path="/" element={<ProjectRoute />}  >
                        <Route path="" element={<Work />} />
                        <Route path="archived" element={<Archived />} />
                    </Route>
                </Routes>

            <AboutMe />
            <Where />

            <div id='contact' className='  sm:p-10 p-5 my-20 max-w-[940px] m-auto'>
                <div className='flex items-center justify-between sm:hidden'>
                    <span className='text-[#1c0f3f] py-3 mr-3 text-xl'>04.</span>
                    <h1 className=' text-#1c0f3f text-xl font-bold my-3 sm:text-3xl'>Get in Touch</h1>

                </div>
                <div className=' items-center justify-between hidden sm:flex'>
                    <div className='flex items-end'>
                        <span className='text-[#1c0f3f] py-3 mr-3 text-xl sm:text-2xl'>04.</span>
                        <h1 className=' text-black text-xl font-bold my-3 sm:text-3xl'>Get in Touch</h1>
                    </div>
                    <span className='h-[1px] w-[10%] mt-[10px] bg-black/50'></span>
                </div>
                <div className=' '>
                    <p className='text-center text-black/50 text-[14px] mt-10'>Although I’m  currently looking for an opportunities, my inbox is always open. Whether you have a
                        question or just want to say hi, I’ll try my best to get back to you!</p>
                    <Link onClick={OnTouch} className=' flex justify-center w-[100%] m-auto max-w-[300px] mb-24' to="" ><p className='text-[#1c0f3f] border border-[#1c0f3f] p-3 rounded text-x mt-[3rem] w-[60%] text-center' >Say Hey</p></Link>
                </div>
            </div>
        </div>
    );
}




export default Landingpage;