import { Link, NavLink } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import finders from '../image/finders-market.gif'
import hoteldime from '../image/hoteldime.gif'
import shore86 from '../image/shore86.gif'


const Work = () => {
    const Project = [
        {
            id: 1,
            name: "Finders Market",
            img: finders,
            github: "https://github.com/CanonSamson/finders-market-frontend",
            live: "https://finders-market.vercel.app/",

        },
        {
            id: 2,
            name: "Shore86",
            img: shore86,
            github: "https://github.com/CanonSamson/Ecommerce-Website",
            live: "https://ecommerce-website-xi.vercel.app/",

        },
        {
            id: 2,
            name: "Hoteldime",
            img: hoteldime,
            github: "https://github.com/CanonSamson/hoteldime",
            live: "https://hoteldime.vercel.app/",

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
                        <div key={items.id} to="">
                            <div className=' bg-gray-50  pl-10 pt-10 my-5 flex flex-col relative' >
                                <div className=' flex flex-col'>
                                    <div className='mb-6'>
                                        <p className=' text-[#1c0f3f]  text-2xl flex'>{items.name}</p>
                                    </div>
                                    <div className=' flex justify-center'>
                                        <img className=' w-[60%]' src={items.img} alt="" />
                                    </div>
                                    <a href={items.github} className=' absolute bottom-20 left-3 p-2 text-[#1c0f3f] rounded-full shadow-lg bg-white'>
                                        <GitHubIcon />
                                    </a>
                                    <a href={items.live} className=' absolute bottom-5 left-3 p-2 text-[#1c0f3f] rounded-full shadow-lg bg-white'>
                                        <OpenInNewIcon />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}

export default Work;