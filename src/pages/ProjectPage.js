import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import mobile from '../image/mobile.png'
import mobil from '../image/mobile.gif'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

const ProjectPage = () => {
    const { id } = useParams()  
    console.log(id)
    return (
        <div className=' mb-10'>

            <div className=' shadow-lg bg-white  fixed w-full top-0 left-0  mb-10 p-2 px-5 flex justify-between items-center ' >

                <Link to="/#work">
                    <ChevronLeftOutlinedIcon />
                </Link>

                <p className=" text-black text-2xl">name</p>
                <p className=" text-black">{id} </p>
                <div className=" flex items-center border mb-2 shadow-lg ">
                    <span className=" mr-3 p-2 border animate-bounce border-blue-900 text-blue-900">Web Development</span>

                </div>
            </div>
            <div className=" mt-32 flex justify-around">
                {/* <img className="w-32" src={img} alt="an" /> */}
                <img className="w-32" src={mobile} alt="" />
            </div>
            <div className=" flex justify-center mt-10">
                <img className="w-50 " src={mobil} alt="" />
            </div>
            <div className=" p-5">
                <div className=' mb-[20px] overflow-x-auto w-full'>
                    <div className="w-[700px] h-[40px] items-center ">
                        <span className='text-[#1c0f3f] border-b-2 border-blue-900 w-[100px] py-2 sm:mr-3   ml-3'>ReactJs</span>
                        <span className='text-[#1c0f3f] border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>TailwindCSS</span>
                        <span className='text-[#1c0f3f] border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Framer Motion</span>
                        <span className='text-[#1c0f3f] border-b-2  w-[100px] py-2 sm:mr-3   ml-3'>Css3</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className=" px-5 flex  items-center">
                <Link to="" className=" mr-5">
                    <OpenInNewIcon />
                </Link>
                <GitHubIcon />
            </div>

        </div>
    );
}

export default ProjectPage;