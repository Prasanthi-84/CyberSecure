import { ArrowRight, Shield,Eye,Mail,Users ,CheckCircle} from 'lucide-react'
import React from 'react'
import '../styles/animation.css';
import Footer from '../components/Landing/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from
     bg-slate-50 to to-blue-50'>
        {/* {navbar} */}
    <nav className='bg-white/80 backdrop-blur-md border-b
    border-gray-200 sticky top-0 z-50'>
     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 '>
        <div className='flex justify-between items-center h-16'>
       <div className='flex items-center space-x-2'>
           <Shield className='h-8 w-8 text-cyan-500'/>
           <span className='text-xl font-bold gradient-text'>CyberSecure</span> 
            </div>

     <div className='hidden md:flex space-x-8'>
         <a href="#home" className='text-gray-700
          hover:text-cyan-600 transition-colors '>Home</a>
        <a href="#features" className='text-gray-700
          hover:text-cyan-600 transition-colors '>Features</a>
        <a href="#about" className='text-gray-700
          hover:text-cyan-600 transition-colors '>About</a>
          <a href="/fakenews" className="text-gray-700 hover:text-cyan-600 transition-colors">
              FakeNewsDetector
            </a>
             <a href="/phishing" className="text-gray-700 hover:text-cyan-600 transition-colors">
              PhishingDetector
            </a>
             <a href="/cyberbullying" className="text-gray-700 hover:text-cyan-600 transition-colors">
              CyberBullying
            </a>
     </div>
     </div>
     </div>
    </nav>

{/* hero */}
<section id="home" className='relative py-20 lg:py-32'>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
            <div className='inline-flex items-center px-4 py-2 rounded-full
            bg-blue-100 text-blue-800 text-sm font-medium  mb-6'>
                <Shield className='h-4 w-4 mr-2'/>Your Digital Safety Companion        </div>
        

<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
    Stay Safe in the
    <span className='text-transparent bg-clip-text
    bg-gradient-to-r from-blue-600 to-purple-600 '>
        Digital World</span>
</h1>
       

<p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto
leading-relaxed'>
  Learn cybersecurity fundamentals, detect threats,
   and protect yourself online with our beginner-friendly
    tools and educational resources.
           
</p>
<div className='flex flex-col sm:flex-row gap-4  justify-center items-center'>
    <button className='group bg-gradient-to-r from-blue-600
    to-purple-600 text-white px-8 py-3 rounded-xl font-semibold
    text-lg hover:shadow-xl transfrom hover:translate-y-1
    transition-all duration-300 flex items-center
    '> Get Started Today
    <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1
    transition-transform'/>
    </button>
    <button className='text-gray-700 px-8 py-4 rounded-xl
    font-semibold text-lg hover:bg-white hover:shadow-lg
    transition-all duration-300'>
        Learn More</button>
      </div>
     </div>
     </div>

{/* floating elements */}
<div className='absolute top-20 left-10 w-20 h-20
 bg-blue-200 rounded-full opacity-50 animate-pulse'></div>
<div className='absolute bottom-20 right-10 w-16 h-16
 bg-purple-200 rounded-full opacity-50 animate-pulse'></div>
  </section>

{/* features section */}
<section id="features" className='py-20 bg-white'> 
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Powerful Security Tools
            </h2>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
               Our suite of beginner-friendly tools
                helps you identify and protect against common cyber
             threats.
        </p>
        </div>

    <div className='grid md:grid-cols-3 gap-8'>
        {/* fake news */}
        
<Link to="/fakenews" className='group bg-gradient-to-br from-red-50 to-red-100
        p-8  rounded-2xl hover:shadow-xl transition-all duration-300
        hover:translate-y-2 border border-red-200 cursor-pointer'>
            <div className='bg-red-500 w-16 h-16 rounded-xl
            flex items-center justify-center mb-6 group-hover:scale-110
            transition-transform duration-300'>
                <Eye  className='h-8 w-8 text-white'/>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Fake News Detector</h3>
            <p className='text-gray-600 mb-8 leading-relaxed'> 
            Analyze articles and social media posts to identify 
            potentially misleading or false 
             information using advanced detection algorithms.</p>
            <div className='flex items-center text-red-600 font-semibold
            group-hover:translate-x-2 transition-transform duration-300'>
                Try Now <ArrowRight className=' ml-2  h-4 w-4'/>
            </div>
        
        </Link>


        {/* phising email */}
        <Link
        to="/phishing"
        className="group bg-gradient-to-br from-orange-50
        to-orange-100 p-8 rounded-2xl hover:shadow-xl
         transition-all duration-300 hover:-translate-y-2 border border-orange-200'">
            <div className='bg-orange-500 w-16 h-16 rounded-xl 
            flex items-center justify-center mb-6 group-hover:scale-110
            transition-transform duration-300'>
                <Mail className='h-8 w-8 text-white'/>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Phishing Email Checker</h3>
            <p className='text-gray-600 mb-6 leading-relaxed'> 
                  Upload suspicious emails to check for phishing
                 indicators and learn how to 
                spot malicious messages before they cause harm.</p>
                <div className='flex items-center text-orange-600 font-semibold 
                group-hover:translate-x-2 transition-transform 
                duration-300'>
                    Check Email<ArrowRight className='ml-2 h-4 w-4'/>
                </div>
     </Link>

         {/* cyberbuylling awarness */}
        
        {/* Cyberbullying Awareness */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-200">
              <div className="bg-green-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cyberbullying Awareness</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn to recognize, prevent, and respond to cyberbullying with our comprehensive guides and support resources.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
      </div>  
  </div>    
  
</section>

{/* about section */}
<section id="about" className='py-20 bg-gradient-to-r from-blue-900
to-purple-900 text-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
     <div className='grid lg:grid-cols-2 gap-16 items-center'>
        <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                why Cyber Safety Matters More Than Ever
              </h2>
         </div>
        <p className='text-xl text-blue-100 mb-8 leading-relaxed'> 
        In today's digital age, cyber threats are everywhere.
         From fake news spreading misinformation to phishing attacks 
         targeting your personal data, staying informed and protected is
          crucial for everyone.
          </p>
         
           <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Educational Approach</h4>
                    <p className="text-blue-100">Learn through hands-on experience with real-world examples and interactive tools.</p>
                  </div>
                </div>
             <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Beginner Friendly</h4>
                    <p className="text-blue-100">No technical background required. Our resources are designed for everyone to understand.</p>
                  </div>
                </div>
             
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Practical Tools</h4>
                    <p className="text-blue-100">Use our detection tools to analyze real threats and build your cybersecurity awareness.</p>
                  </div>
                </div>
              </div>
            </div>
           </div>
         <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-blue-100 mb-6">
                    Thousands of users are already protecting themselves with CyberSecure Hub. Start your journey to digital safety today.
                  </p>
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    Get Started Free
                  </button>
                </div>
              </div>
            </div>
        </section>

        {/* footer */}
      <Footer/>

    </div>
  )
}

export default Home;