import { useState } from 'react'

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28">
                <a className="text-2xl font-bold text-red-500 my-4" href="#" >
                    Home
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                    About Us
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                Services
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                Gallery
                </a>
                 <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                Contact Us 
               </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-11/12 flex justify-end items-center">
                <div className="group z-50 relative w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}