import img1 from '../image/desktop-preview.jpg'
import { Header } from './styled/main.style';

const Work = () => {
    const project =[
        {
            id:1,
            state: "Frontendmentor Challenge Project",
            name: "Manage Landing Page",
            description: "A responsive landing page for manager, the project is among the frontendmentor chalenge.",
            lang1: "Reactjs",
            lang2: "Tailwindcss",
            lang3: "",
            link: "",
        },
        {
            id:2,
            state: "Personal Project",
            name: " My Portfolio ",
            description: "",
            lang1: "ReactJs",
            lang2: "Tailwindcss",
            lang3: "",
            link: "",
        },
        {
            id:3,
            state: "Personal Project",
            name: "Facebook Login Clone ",
            description: "A mobile view of facebook Login Page.",
            lang1: "HTML5",
            lang2: "CSS3",
            lang3: "",
            link: "",
        },
    ]
    return ( 
        <section id='work' className='sm:p-10 p-5   py-40 max-w-[940px] m-auto z-10'>
        <div className='flex items-center justify-between'>
            <div className='flex items-end'>
                <span className=' text-[#64ffda] py-3 mr-3 text-xl sm:text-3xl'>03.</span>
                <Header className=' text-white text-xl font-bold my-3'>Some Things I’ve Built</Header>
            </div>
            <span className='h-[1px] w-[10%] mt-[10px] bg-white/50'></span>
        </div>
        {
            project.map((items) => (
                <div key={items.id} className=' bg-[#233554] text-white/50 p-5 rounded mt-10 sm:hidden'>
                <p className=' text-[#64ffda] '>{items.state}</p>
                <p className=' py-3 pb-5'>{items.name}</p>
                <p>{items.description}</p>
                <div className='my-5  flex items-end '>
                <p className='mr-5 text-[14px]'>{items.lang1}</p>
                <p className=' text-[14px]'>{items.lang2}</p>
                <p className='text-[14px]'>{items.lang3}</p>
                </div>
            </div>
            ))
        }

{
    project.map((items) => (
        <div key={items.id} className="  relative mt-10 hidden sm:flex flex-col">
        <p className=' text-[#64ffda] '>{items.state}</p>
        <p className=' py-3 pb-5 text-xl text-white/50 font-semibold text-left'>{items.name}</p>
        <img  className=" w-[70%]  bg-[#64ffda]  h-[300px] max-w-[500px] img" src={img1} alt="" />

        <div className=' bg-[#233554] text-white/50 p-5 rounded mt-10 absolute top-[25%] w-[400px] right-0'>
            <p>{items.description}</p>
            <div className='my-5  flex items-end'>
                <p className='mr-5'>{items.lang1}</p>
                <p className='mr-5'>{items.lang2}</p>
                <p className='mr-5'>{items.lang3}</p>

            </div>
    </div>
    </div>
    ))
}
    
      
    </section>
     );
}
 
export default Work;