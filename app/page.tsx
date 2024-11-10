

export default function Home() {
  return (
    <div className="flex h-[80%]">
   <div className="w-1/2 ml-20 mt-80 flex flex-col" >
    <h1 className="text-7xl">Welcome to our <div className="-rotate-6"> <span className="bg-header">Website</span></div></h1> 
    <p className="pt-14 pr-40 font-semibold">
    Welcome to my digital portfolio! I’m <span className="bg-header">Talal Ahmed</span>, 
    a web developer with a strong passion for creating websites.
     Here, you can browse through a collection of my projects,
      discover more about <span className="bg-header">my skills </span>, and reach out to me. 
      I look forward to collaborating and building something incredible <span className="bg-header">together!</span>
      </p>   
   </div>
   <div className="w-1/2 flex justify-center items-center m-12 ">
<img src="./images/port.png" alt="image" />
   </div>
   </div>
  );
}
