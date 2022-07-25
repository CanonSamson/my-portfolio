import me from '../image/pic.JPG'

const AboutMe = () => {
    return ( 
        <section className='sm:p-10 p-5  pt-40 max-w-[940px] m-auto' id="about">
        <div className='flex items-center justify-between'>
            <div className='flex items-end'>
                <span className=' text-[#64ffda] py-3 mr-3 text-xl'>01.</span>
                <h1 className=' text-white text-xl font-bold my-3 sm:text-3xl'>About me</h1>
            </div>
            <span className='h-[1px] w-[10%] mt-[10px] bg-white/50'></span>
        </div>
        <p className=" text-white/50 sm:pr-5 my-5" >Hello! My name is Canon and I enjoy creating things that live on the internet. currently i'm a 300 level Computer Sicence student at salem university, Kogi state(Nigeria). </p>
        <p className=" text-white/50 sm:pr-5 my-5" >My interest in web development started back in 2021 from then i started working on personal project. I also have must experience in graphics Design   </p>
        <p className=" text-white/50 pr-5 my-5" ></p>
        <p className=" text-white/50 sm:pr-5 my-5" >Here are a few technologies I’ve been working with recently:</p>
        <div className=' flex '>
        <ul className=' text-white/50 mr-20'>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3</li>
            </ul>
            <ul className=' text-white/50'>
                <li>React Native</li>
                <li>Tailwindcss</li>
                <li>UiUx Design</li>
            </ul>
        </div>
        <img className=' me' src={me} alt="" />

    </section>
     );
}
 
export default AboutMe;