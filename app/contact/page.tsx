

export default function Contact() {

    return (
     <div className="flex items-center justify-center mt-20 flex-col h-screen">
       <div>
        <h1 className="text-6xl font-serif font-extrabold">Contact <div className="-rotate-12 flex justify-center">
         <span className="bg-header">Us</span></div></h1>
</div>
<div className="mt-20 space-x-10 flex-col">
         <a href="mailto:talalahmedjaffery@email.com" className="text-black hover:text-gray-500"><span className="text-3xl font-serif font-bold">Email</span></a>

       <a href="tel:+1234567890" className="text-header hover:text-yellow-500"><span className="text-3xl font-serif font-bold">Phone</span>
      </a>
      </div>
     </div>
    );
  }
  