const Where = () => {
    return (
        <div>


            <div id='experience' className='  sm:p-10 p-5  pt-40  max-w-[940px] sm:hidden m-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-end'>
                        <span className=' text-[#1c0f3f] py-3 mr-3 text-xl sm:text-2xl'>03.</span>
                        <h1 className=' text-#1c0f3f text-xl font-bold my-3 sm:text-3xl'>Experience</h1>
                    </div>
                    <span className='h-[1px] w-[10%] mt-[10px] bg-[#1c0f3f]/50'></span>
                </div>







                <div className=' grid-cols-3 mt-10 hidden  m-auto max-w-[940px] sm:grid'>
                    <div className='  '>
                        <ul className=' text-#1c0f3f/50'>
                            <li className='pl-5 py-3  border-[#1c0f3f] border-l-2'>JavaScript (ES6+)</li>
                            <li className='pl-5 py-3 border-l'>React</li>
                            <li className='pl-5 py-3 border-l'>React Native</li>
                            <li className='pl-5 py-3 border-l'>Tailwindcss</li>
                        </ul>
                    </div>
                    <div className=' col-span-2'>
                        <h4 className=' text-#1c0f3f text-xl'>Engineer @ Upstatemant</h4>
                        <p className='my-3 text-#1c0f3f'>My 2010 - present</p>
                        <p className='text-#1c0f3f/50 my-3'>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</p>
                        <p className='text-#1c0f3f/50'>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</p>
                    </div>
                </div>


                <div>
                    <div className='  text-#1c0f3f/50'>
                        <div className=" flex items-center border mb-2 shadow-lg ">
                            <span className=" mr-3 p-2 border animate-bounce border-blue-900 text-blue-900">Web Dev</span>
                            <span>Native App Dev</span>

                        </div>
                        <div className=' mb-[20px] overflow-x-auto w-full'>
                            <div className="w-[700px] h-[40px] items-center ">
                                <span className='text-[#1c0f3f] border-b-2 border-blue-900 w-[100px] py-2 sm:mr-3   ml-3'>n-hub Nigeria</span>
                                <span className='text-[#1c0f3f] border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Hackathon</span>
                                <span className='text-[#1c0f3f] border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Freelencer</span>
                                <span className='text-[#1c0f3f] border-b-2 w-[100px] py-2 sm:mr-3   ml-3'>Welwings</span>
                                <span className='text-[#1c0f3f] border-b-2  w-[100px] py-2 sm:mr-3   ml-3'>n-hub Foundation!</span>
                            </div>
                        </div>
                        <p className=' text-#1c0f3f/50 '>I was an intern at n-hub Foundation, specializing in building (web applications and Native applications )!</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Where;