import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className=" h-screen w-full flex flex-col justify-center items-center">
            <p className=" text-6xl">404</p>
            <p className=" text-2xl my-2">canon samson</p>
            <Link className=" border p-2 mt-5" to='/' >Back to Home</Link>
        </div>
     );
}
 
export default NotFound;