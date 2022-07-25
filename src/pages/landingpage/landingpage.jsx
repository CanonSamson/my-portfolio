import { Link } from 'react-router-dom';
import AboutMe from '../../components/AboutMe';
import MobileNav from '../../components/MobileNav';
import NavBar from '../../components/NavBar';
import Work from '../../components/Work';
import './css.css'
import { motion } from "framer-motion"
import { Header } from '../../components/styled/main.style';

const Landingpage = () => {
    return (
        <div className=' relative'>
            <NavBar />
            <MobileNav />
            <div className='sm:p-10 p-5 h-screen mt-40 items-center max-w-[940px] m-auto'>
                <p className=' text-[#64ffda] py-3 sm:text-xl' >Hi, my name is</p>
                <h1 className=' text-white text-3xl font-bold my-3 sm:text-6xl'> Canon Samson. </h1>
                <span className=' text-[#8892b0]  text-3xl font-bold  sm:text-6xl'>I build things for the web.</span>
                <p className='text-white/50 sm:pr-10 my-5 text-[14px] sm:text-xl'>I’m a Frontend developer specializing in building (web applications and native applications ) except digital experiences. Currently i'm an intern at
                    <Link className='text-[#64ffda]' to=""> n-hub Fundation</Link></p>
                <Link to="" ><p className='text-[#64ffda] border border-[#64ffda] p-3
                rounded text-x mt-[3rem] w-[60%] max-w-[250px] text-center' >Get in Touch!</p></Link>
            </div>

            0        {/* about me  */}
            <AboutMe />

            <div id='experience' className='  sm:p-10 p-5  pt-40 h-screen max-w-[940px]  m-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-end'>
                        <span className=' text-[#64ffda] py-3 mr-3 text-xl'>02.</span>
                        <Header className=' font-bold my-3 sm:text-3xl'>Where I’ve Worked</Header>
                    </div>
                    <span className='h-[1px] w-[10%] mt-[10px] bg-white/50'></span>
                </div>
                <div>
                    <div className='  text-white/50'>
                        <span className=' text-[#64ffda] y-3 sm:mr-3  sm:text-xl'>Practically i have not Worked anywhere in my existence!</span>
                        <p className=' text-white/50 '>I'm just puting my dreams and skills out there !</p>
                    </div>
                </div>
            </div>
            <Work />

            <div id='contact' className='  sm:p-10 p-5  max-w-[940px] m-auto'>
                <div className='flex items-center justify-between sm:hidden'>
                    <span className=' text-[#64ffda] py-3 mr-3 text-xl'>04.</span>
                    <Header className='my-3'>Get in Touch</Header>
                </div>
                <div className=' items-center justify-between hidden sm:flex'>
                    <div className='flex items-end'>
                        <span className=' text-[#64ffda] py-3 mr-3 text-xl'>04.</span>
                        <Header className=' my-3'>Get in Touch</Header>
                    </div>
                    <span className='h-[1px] w-[10%] mt-[10px] bg-white/50'></span>
                </div>
                <div className=' h-screen'>
                    <p className='text-center text-white/50 text-[14px] sm:text-xl mt-10'>Although I’m  currently looking for an opportunities, my inbox is always open. Whether you have a
                        question or just want to say hi, I’ll try my best to get back to you!</p>
                    <Link className=' flex justify-center w-[100%] m-auto max-w-[300px] mb-24' to="" ><p className='text-[#64ffda] border border-[#64ffda] p-3 rounded text-x mt-[3rem] w-[60%] text-center' >Say Hey</p></Link>
                </div>
            </div>
        </div>
    );
}




export default Landingpage;