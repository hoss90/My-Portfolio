import instagram from "./images/insta.png"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
function Home() {
 
  return (
    <div className=" h-fit">
      <div className="m-20 sm:mt-8">
        <h3 className="text-2xl mb-4 sm:text-sm sm:mb-2">Hello, I’m</h3>
        <h1 className="text-5xl mb-8 font-black sm:text-xl sm:mb-2">HOUSSEM JANFAOUI</h1>
        <h3 className="text-2xl sm:text-sm">FRONT-END WEB DEVELOPER</h3>
       
  <a className=""
    href="mailto:hossjanfaoui@outlook.fr">
      <button
    className="inline-block cursor-pointer m-8 ml-20 px-6 py-2.5 bg-sky-600 text-slate-100 font-medium text-sm leading-tight rounded shadow-2xl hover:bg-indigo-800 hover:shadow-lg hover:scale-105 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out sm:text-xs sm:ml-14 "
  ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block sm:w-4 sm:h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg> MessageMe
</button>
</a>

    <div className="mx-auto pl-12 md:mt-0">
      <a href="https://www.instagram.com/houssem_janfaoui/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram profile" className="inline-block w-16 pl-4 hover:scale-105 sm:w-12" /></a>
      <a href="https://github.com/hoss90" target="_blank" rel="noreferrer"><img src={github} alt="github profile" className="inline-block w-16 pl-4 hover:scale-105 sm:w-12"/></a>
      <a href="https://www.linkedin.com/in/houssem-janfaoui-a0b687103/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className="inline-block w-16 pl-4 hover:scale-105 sm:w-12"  /></a>
    </div>
        </div>
        
        <div className="w-96 h-96 -z-10 bg-gray-800 absolute lg:-top-56 right-12 md:top-32 rounded-lg p-8 md:mt-96 sm:w-72 sm:h-72 sm:top-96 sm:p-4 sm:pt-8 sm:text-xs">
          <code className="text-white animate-pulse">
          <span className=" text-gray-500">&#60;</span><span className=" text-sky-600">html</span> <span className=" text-sky-300">lang</span>=<span className=" text-orange-300">'en'</span><span className=" text-gray-500">&#62;</span><br/><br/>
          &#160;&#160; <span className=" text-gray-500">&#60;</span><span className=" text-sky-600">head</span><span className=" text-gray-500">&#62;</span><br/><br/>
          &#160;&#160; <span className=" text-gray-500">&#60;</span><span className=" text-sky-600">title</span><span className=" text-gray-500">&#62;</span>
          &#160;&#160;Coding Life
          &#160;&#160;<span className=" text-gray-500">&#60;/</span><span className=" text-sky-600">title</span><span className=" text-gray-500">&#62;</span><br/><br/>
          &#160;&#160;&#160; <span className=" text-gray-500">&#60;/</span><span className=" text-sky-600">head</span><span className=" text-gray-500">&#62;</span><br/><br/>
          &#160;&#160; <span className=" text-gray-500">&#60;</span><span className=" text-sky-600">body</span><span className=" text-gray-500">&#62;</span><br/>
          &#160;&#160;&#160;&#160;&#160;Let's Code Something New;
          &#160;&#160;&#160; <span className=" text-gray-500">&#60;/</span><span className=" text-sky-600">body</span><span className=" text-gray-500">&#62;</span><br/><br/>
          <span className=" text-gray-500">&#60;/</span><span className=" text-sky-600">html</span><span className=" text-gray-500">&#62;</span><br/>
          </code>
          <div className="w-64 h-16 bg-slate-200 rounded-2xl mt-4 -ml-36 flex justify-center items-center space-x-4 sm:mt-2 sm:w-52 sm:h-11 sm:ml-4 sm:rounded-xl">
            <div className="w-10 h-10 sm:w-8 sm:h-8  rounded-xl cursor-pointer" style={{'backgroundColor':'#f4c5c5'}}></div>
            <div className="w-10 h-10 sm:w-8 sm:h-8  rounded-xl cursor-pointer" style={{'backgroundColor':'rgb(2 132 199)'}}></div>
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-xl cursor-pointer" style={{'backgroundColor':'#ffffff'}}></div>
            <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-xl cursor-pointer" style={{'backgroundColor':'#a7f9ff'}}></div>
          </div>
        </div>

        </div>
   
  )
}
export default Home