

const AboutMe = () => {
    return ( 
        <section className='sm:pb-10 pb-5 mx-5 sm:mx-0  pt-20 max-w-[940px] m-auto' id="about">
        <div className='flex items-center justify-between'>
            <div className='flex items-end'>
                <span className='text-[#1c0f3f] py-3 mr-3 text-xl'>02.</span>
                <h1 className=' text-[#1c0f3f] text-xl font-bold my-3 sm:text-3xl'>About me</h1>
            </div>
            <span className='h-[1px] w-[10%] mt-[10px] bg-[#1c0f3f]'></span>
        </div>
        <p className=" text-[#1c0f3f] sm:pr-5 my-5 " >Hello! My name is Canon and creativity is what i enjoy on internet. currently i'm a 300 level Computer Sicence student at salem university, Kogi state(Nigeria). </p>
        <p className=" text-[#1c0f3f] sm:pr-5 my-5 " >My interest in web development started back in 2021 from then i started working on personal project. I also have must experience in graphics Design   </p>
        <p className=" text-[#1c0f3f] pr-5 my-5" ></p>
        <p className=" text-[#1c0f3f] sm:pr-5 my-5  " >Here are a few technologies I’ve been working with recently:</p>
        <div className=' flex '>
        <ul className=' text-[#1c0f3f] mr-20 sm:text-2xl '>
                <li className="">JavaScript (ES6+)</li>
                <li className=" ">React</li>
                <li className=" ">HTML5</li>
                <li className=" ">CSS3</li>
            </ul>
            <ul className=' text-[#1c0f3f]  '>
                <li className=" ">React Native</li>
                <li className=" ">Tailwindcss</li>
                <li className=" ">UiUx Design</li>
            </ul>
        </div>
        

    </section>
     );
}
 
export default AboutMe;