import { Link, NavLink } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import finders from '../image/findersca.gif'
import port from '../image/ba.gif'

const Work = () => {
    const Project = [
        {
            id: 1,
            name: "Finders Market",
            img: finders,

        },
    ]
    return (
        <div className=" ">
            <div className=" flex items-center border mb-2 shadow-lg  ">
                <span className=" mr-3 p-2 border animate-bounce border-blue-900 text-blue-900">Main Project</span>
               <Link to='archived'  > <span>Archived Project</span></Link>

            </div>

            <div className='grid sm:grid-cols-2 gap-5'>
                {
                    Project.map((items) => (
                        <Link key={items.id} to={`/project/${items.id}`}>
                            <div className=' bg-gray-50  pl-10 pt-10 my-5 flex flex-col relative' >
                                <div className=' flex flex-col'>
                                    <div className='mb-6'>
                                        <p className=' text-[#1c0f3f]  text-2xl flex'>{items.name}</p>
                                    </div>
                                    <div className=' flex justify-center'>
                                        <img className=' w-[70%]' src={items.img} alt="" />
                                    </div>
                                    <div className=' absolute bottom-20 left-3 p-2 text-[#1c0f3f] rounded-full shadow-lg bg-white'>
                                        <GitHubIcon />
                                    </div>
                                    <div className=' absolute bottom-5 left-3 p-2 text-[#1c0f3f] rounded-full shadow-lg bg-white'>
                                        <OpenInNewIcon />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>

    );
}

export default Work;