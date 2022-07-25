import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CP } from "./styled/main.style";

const MobileNav = () => {

    const [toggle, setToggle] = useState(false)
    const toggler = () => {
        setToggle(!toggle)
    }

    const navLinks = [
        {
            id:"01",
            name:'About me',
            link:"#about",
        },
        {
            id:"02",
            name:'Exprience',
            link:"#experience",
        },
        {
            id:"03",
            name:'Work',
            link:"#work",
        },
        {
            id:"04",
            name:'Contact',
            link:"#contact",
        },
    ]


    return (
         
            <div>
                <div className=' fixed w-full flex justify-between px-10 py-5 bg-[#0a1d2f] top-0 sm:hidden'>
                    <span className='text-white font-mono'>---</span>
                    <span onClick={toggler} className='text-white font-mono'>---</span>
                </div>
                {
                toggle &&

                    <nav className=' sm:hidden'>     
                        <div className='fixed h-screen w-[70%] right-0 bg-[#233554] top-0 z-10 nav-anime'>
                            <p  onClick={toggler} className=' text-yellow-50 p-10 w-full justify-between flex'>---</p>
                            <div className=" mt-[10%]">
                                {
                                    navLinks.map((links) => (
                                    <Link onClick={toggler}  className=' items-center justify-center flex flex-col my-5' to={links.link} smooth >
                                        <span className=' text-[#64ffda] py-0  text-xl'>{links.id}.</span>
                                        <h1 className=' text-white/50 text-xl  '>{links.name}</h1>
                                    </Link>
                                    ))
                                }
                            </div>
                            <Link  to=""  className=' rounded  text-center' >
                                <CP className='border border-[#64ffda] mt-[3rem]  p-3 w-[50%] rounded m-auto' >Resume</CP>
                            </Link>    
                        </div>
                        <div onClick={toggler} className='fixed h-screen w-full right-0 bg-[#0a1d2f]/50 top-0 z-0 backdrop-blur-sm'></div>
                    </nav>
                }
            </div>
     );
}
 
export default MobileNav;