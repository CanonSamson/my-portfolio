// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
    
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
    <div className=' fixed  justify-between px-10  py-5 bg-[#0a1d2f] top-0  hidden sm:flex w-full  z-20'>
        <p className=' text-white'>---</p>
        <div className='flex items-center'>
            {
                navLinks.map((links) => (
                    <Link className='ml-5 items-center justify-center flex  '  to={links.link} smooth >
                    <span className=' mr-1 text-[#64ffda] py-0  '>{links.id}.</span>
                    <h1 className=' text-white/50'>{links.name}</h1>
                </Link>
                ))
            }

            <Link className='text-[#64ffda]  ml-10 p-2 border border-[#64ffda]  rounded' to="" >Resume</Link>
        </div>
    </div>
     );
}
 
export default NavBar;