import Link from 'next/link';


export default function Header() {
    return (
     <div className="bg-header ">
      <div>
        <h1 className='text-5xl flex items-center justify-center pt-3 font-bold font-serif'>Talal Ahmed</h1>
      </div>
         <nav>
        <ul className='flex justify-center items-end space-x-8 text-2xl pt-3 pb-3 font-serif '>
        <li >
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="../portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="../about">About</Link>
        </li>
        <li>
          <Link href="../contact">Contact Us</Link>
        </li>
        </ul> 

      </nav>
      
     </div>
    );
  }
  