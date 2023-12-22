import './App.css'
import { useEffect } from "react";
import Navbar from './components/Navbar'
import banner from '../src/assets/taskBanner.jpg'
import { Link } from 'react-router-dom'
import TypesOfPeople from './components/TypesOfPeople'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: "1000" })
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div className='container mx-auto relative'>
        <img data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" className='lg:h-[80vh] w-full object-cover rounded-t-3xl' src={banner} alt="" />
        <p className='text-2xl md:text-5xl font-bold font-serif absolute top-10 text-fuchsia-500'>Simplify Your Life with Wish Task</p>
        <Link to='/login'>
          <button data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1000"
            data-aos-offset="0" className='btn bg-purple-700 hover:bg-purple-900 text-white text-2xl absolute top-32 left-10 border-2 border-purple-600 shadow-2xl shadow-red-500'>Lets Explore</button>
        </Link>
      </div>
      <TypesOfPeople></TypesOfPeople>
      <Footer></Footer>
    </div>
  )
}

export default App
