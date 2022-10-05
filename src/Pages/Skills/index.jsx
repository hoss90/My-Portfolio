import html from './images/html.png'
import css from './images/css.png'
import react from './images/react.png'
import tailwind from './images/tailwind.png'
function Skills() {
 
    return (
        <div className='-z-50 whitespace-nowrap'>
            <h1 className="  text-center lg:text-5xl md:text-3xl sm:text-2xl font-black lg:my-64 md:my-80 sm:mt-10 lg:mx-96 md:mx-80 sm:mx-36">
                My Skillsets
            </h1>
            <div className=' text-rose-300 -z-50'>
                <img src={html} alt="html logo" className='w-32 md:w-28 sm:w-20 inline-block absolute top-56 left-10 md:top-96 sm:top-2/3 opacity-70 -z-10' />
                <img src={css} alt="css logo"  className='w-32 md:w-28 sm:w-20 inline-block absolute top-56 right-10 md:top-2/3 opacity-70 -z-10'/>
                <img src={react} alt="react logo"  className='w-32 md:w-28 sm:w-20 inline-block absolute top-32 left-1/2 sm:top-1/2 opacity-70 -z-10'/>
                <img src={tailwind} alt="tailwind logo"  className='w-32 inline-block absolute bottom-4 left-1/2 opacity-70 -z-10'/>
                <span className='absolute top-28 left-20 sm:top-1/4 sm:left-12 lg:text-3xl md:text-xl sm:text-lg font-bold opacity-70 -z-10'>HTML5</span>
                <span className='absolute top-48 left-1/4 sm:top-1/2 lg:text-5xl md:text-2xl sm:text-xl font-bold opacity-50 -z-10'>ReactJs</span>
                <span className='absolute top-96 right-48 md:top-1/2 sm:left-3/4 text-2xl md:text-xl sm:text-lg font-bold opacity-70 -z-10'>CSS3</span>
                <span className='absolute top-28 right-20 sm:top-40 sm:right-10 text-2xl md:text-xl sm:text-lg font-bold opacity-60 -z-10'>NodeJs</span>
                <span className='absolute bottom-32 right-96 md:bottom-80 sm:right-10 sm:bottom-36 text-2xl md:text-xl sm:text-lg font-bold opacity-90 -z-10'>TailwindCSS</span>
                <span className='absolute bottom-28 left-20 text-xl md:text-xl sm:text-lg font-bold opacity-50 -z-10'>Figma</span>
            </div>
        </div>
    )
}
export default Skills
