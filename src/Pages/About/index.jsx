import pdp from './images/pdp.png'
function About() {
 
    return (
      <div className=" lg:m-32 lg:mt-36 md:m-24 md:mt-32 sm:m-2 sm:mt-8 shadow-2xl">
          <figure class="md:flex bg-transparent rounded-xl p-4 md:p-0">
  <img class="w-32 h-32 lg:rounded-l-lg md:w-48 md:h-auto md:rounded-none rounded-full mx-auto bg-slate-500" src={pdp} alt="profile pic" width="484" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Hey! My Name Is Houssem ! <br/>
        I am a front-end developer based in Tunisia<br/>
I work to make a better web; one that is fast, easy to use, beautiful, accessible to all.<br/>
I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser !”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-indigo-500 ">
        Houssem Janfaoui
      </div>
      <div class="text-slate-700">
        Front-End Developer
      </div>
    </figcaption>
  </div>
</figure>
          
      </div>
    )
}
export default About