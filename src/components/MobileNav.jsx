import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import bar from '../icons/bar.svg'
import cross from '../icons/cross.svg'

const MobileNav = () => {

    const [toggle, setToggle] = useState(false)
    const toggler = () => {
        setToggle(!toggle)
    }

    const navLinks = [
        {
            id: "01",
            name: 'Work',
            link: "#work",
        },
        {
            id: "02",
            name: 'About me',
            link: "#about",
        },

        {
            id: "03",
            name: 'Exprience',
            link: "#experience",
        },
        {
            id: "04",
            name: 'Contact',
            link: "#contact",
        },
    ]


    return (

        <div>
            <div className=' fixed w-full flex justify-between  px-5 py-3 bg-white shadow-lg top-0 sm:hidden items-center'>
                <span className='text-white font-mono'>---</span>
                <span onClick={toggler} className='text-white font-mono w-8'>
                    <img src={bar} alt="" />
                </span>
            </div>
            {
                toggle &&
                <nav className=' sm:hidden'>
                    <div className='fixed h-screen w-[70%] right-0  bg-white shadow-2xl top-0 z-10 nav-anime'>
                        <span onClick={toggler} className=' w-10 text-yellow-50 justify-between flex'>
                        <img className="w-7 mt-5 ml-5" src={cross} alt="" />
                        </span>
                        <div className=" mt-[10%]">
                            {
                                navLinks.map((links) => (
                                    <Link onClick={toggler} className=' items-center justify-center flex flex-col my-5' to={links.link} smooth >
                                        <span className=' text-[#1c0f3f] py-0'>{links.id}.</span>
                                        <h1 className=' text-black  '>{links.name}</h1>
                                    </Link>
                                ))
                            }
                        </div>
                        <Link to="" className='  text-center' >
                            <p className='border border-black text-black  py-1 mt-[2rem] active:opcity-0 w-[50%] rounded m-auto' >Resume</p>
                        </Link>
                    </div>
                    <div onClick={toggler} className='fixed h-screen w-full right-0 bg-white/20 top-0 z-0 backdrop-blur-sm'></div>
                </nav>
            }
        </div>
    );
}

export default MobileNav;