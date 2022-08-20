import { useParams } from "react-router-dom";

const ProjectPage = () => {
    const {id}  = useParams()

    return ( 
        <div className='grid sm:grid-cols-2 gap-5'>

                    <div className=' bg-gray-50  pl-10 pt-10 my-5  ' >
                        <p className=" text-black">project</p>
                        <p className=" text-black">{id}</p>

                    </div>
    
    </div>
     );
}
 
export default ProjectPage;