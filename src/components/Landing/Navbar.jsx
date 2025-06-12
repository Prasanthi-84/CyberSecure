import {Shield} from 'lucide-react'
import {Link} from "react-router-dom";
const Navbar = ({children}) => {
  return (
     <nav className='fixed top-0 w-full bg-black/80 backdrop:blur-xl border-b border-white/10 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex items-center space-x-2'>
                    <Shield className='h-8 w-8 text-cyan-400'/>
                    <span className='text-xl font-bold gradient-text'>
                        CyberSecure</span>
                </div>
              <div className='hidden md:flex items-center space-x-8'>
           <Link to="/home" className="text-gray-300
            hover:text-cyan-400 transition-colors">
              Home
           </Link>
            <a href="#faetures"
            className='text-gray-300 hover:text-cyan-400 transition-colors'>
            Features
            </a>
            <a href="#testimonials"
            className='text-gray-300 hover:text-cyan-400 transition-colors'>
            Reviews</a>
            <button className='bg-gradient-to-r from-cyan-500 to-blue-600 
            px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg
             hover:shadow-cyan-500/25 transition-all duration-300'>
              {children}
            </button>


              </div>
            </div>
        </div>
     </nav>
  )
}

export default Navbar