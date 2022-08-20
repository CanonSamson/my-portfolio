import { Link } from 'react-router-dom';
import Project from '../project/projects.json'

const Work = () => {
 
    return (
        <section id='work' className='sm:p-10 p-5   pt-20 max-w-[1000px] m-auto z-10'>
            <div className='flex items-center justify-between'>
                <div className='flex items-end'>
                    <span className=' text-[#1c0f3f] py-3 mr-3 text-xl sm:text-xl'>03.</span>
                    <h1 className=' text-[#1c0f3f] text-xl font-bold my-3 sm:text-3xl'>Some Things I’ve Built</h1>
                </div>
                <span className='h-[1px] w-[10%] mt-[10px] bg-[#1c0f3f]/50'></span>
            </div>
            <div className='grid sm:grid-cols-2 gap-5'>
                {
                    Project.map((items) => (
                        <Link to={`/project/${items.id}`}>
                            <div className=' bg-gray-50  pl-10 pt-10 my-5  ' >
                                <div className='mb-6'>
                                    <p className=' text-[#1c0f3f]  text-2xl flex'>{items.name}</p>
                                </div>
                                <div className=' flex justify-end'>
                                    <img className='   rounded-t-[50px] ' src={items.img} alt="" />
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </section>
    );
}

export default Work;