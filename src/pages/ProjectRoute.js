import { Outlet } from "react-router-dom";

const ProjectRoute = () => {
    return (  
        <section id='work' className='sm:p-10 p-5   pt-20 max-w-[1000px] m-auto z-10'>
        <div className='flex items-center justify-between'>
            <div className='flex items-end'>
                <span className=' text-[#1c0f3f] py-3 mr-3 text-xl sm:text-xl'>03.</span>
                <h1 className=' text-[#1c0f3f] text-xl font-bold my-3 sm:text-3xl'>Some Things I’ve Built</h1>
            </div>
            <span className='h-[1px] w-[10%] mt-[10px] bg-[#1c0f3f]/50'></span>
        </div>
        <Outlet />

        </section>
    );
}
 
export default ProjectRoute;