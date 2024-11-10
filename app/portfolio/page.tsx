
export default function Portfolio() {
    return (
      <div className="flex items-center justify-center mt-20 flex-col h-screen">
     <div className="-rotate-6">
        
        <h1 className="text-6xl font-serif font-extrabold bg-header ">Portfolio</h1>
      
     </div>
     <div className="mt-16 bg-header p-1">

    <a href='https://figma-assignment-nine-beta.vercel.app/'> <img  src="/images/figma.png" alt="work1"/></a>
    </div>
    <div>
<p className='flex items-center justify-center  mt-2'>
   This is made with the help of figma
</p>
     </div>
     <div className="mt-16 bg-header p-1">

    <a href='https://landing-page-101-blond.vercel.app/'> <img  src="/images/landing.png" alt="work1"/></a>
    </div>
    <div>
<p className='flex items-center justify-center'>
   This is a Landing page
</p>

     </div>
     <div className="mt-16 bg-header p-1">

    <a href='https://static-resume-talal.vercel.app/'> <img  src="/images/resume.png" alt="work1"/></a>
    </div>
    <div>
<p className='flex items-center justify-center'>
   This is a static resume
</p>

     </div>
     </div>
    );
  }
  
