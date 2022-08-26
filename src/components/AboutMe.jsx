

const AboutMe = () => {
    return ( 
        <section className='sm:pb-10 pb-5 mx-5 sm:mx-5  pt-20 max-w-[940px] m-auto' id="about">
        <div className='flex items-center justify-between'>
            <div className='flex items-end'>
                <span className='text-[#1c0f3f] py-3 mr-3 text-xl'>02.</span>
                <h1 className=' text-[#1c0f3f] text-xl font-bold my-3 sm:text-3xl'>About me</h1>
            </div>
            <span className='h-[1px] w-[10%] mt-[10px] bg-[#1c0f3f]'></span>
        </div>
        <p className=" text-[#1c0f3f] sm:pr-5 my-5 " >Hello! I'm Canon and I'm a front-end developer. 
        I have over 4years of experience in web development, currently i'm a 400 level Computer Sicence student at salem university, Kogi state(Nigeria). </p>
        <p className=" text-[#1c0f3f] sm:pr-5 my-5 " >I was an intern at N-Hub Nigeria. due to my knowledge as a front-end developer, i went for hackathons. e.g FSi.
        <br />I acquired the google digital marketing skills for Africa certificate on 06/01/2021 </p>
        <p className=" text-[#1c0f3f] pr-5 my-5" ></p>
        <p className=" text-[#1c0f3f] sm:pr-5 my-5  " >Here are a few technologies I’ve been working with recently:</p>
        <div className=' flex '>
        <ul className=' text-[#1c0f3f] mr-20 sm:text-2xl '>
                <li className="">JavaScript (ES6+)</li>
                <li className=" ">React</li>
                <li className=" ">Redux</li>
                <li className=" ">React Native</li>
          
            </ul>
            <ul className=' text-[#1c0f3f]  '>
                <li className=" ">HTML5</li>
                <li className=" ">CSS3</li>
                <li className=" ">Tailwindcss</li>
                <li className=" ">UiUx Design</li>
            </ul>
        </div>
        

    </section>
     );
}
 
export default AboutMe;