/* eslint-disable react/no-unescaped-entities */
import developers from '../assets/developers.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const TypesOfPeople = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <div className="container mx-auto mb-2">
            <h1 data-aos="zoom-out-up" className="text-center my-8 lg:my-20 text-3xl md:text-5xl font-mono font-bold text-purple-600">..People, Using our Website..</h1>
            <div data-aos="zoom-out-up" className='flex flex-col lg:flex-row my-6 gap-8'>
                <div className='flex-1 border-r-8 border-r-purple-500'>
                    <h1 className='text-4xl font-serif text-center'><span className='text-purple-600 underline underline-offset-8'>Developers</span> are Highly Encouraged</h1>
                    <p className='text-xl my-6 p-2'>This is a website for managing your task very easily. We are going to help you profoundly for managing your task without any hastle. By using this website you will get the premium services from our website.</p>
                    <p className='text-xl p-2'>Time is very important in your life. So , we are here to save your time and then you will spend your time in your productive life. By using this website you will get the premium services from our website.</p>
                    <p className='text-xl p-2'>By ensuring your time management along with task management we are encouraging you not to waste your time for managing your task.</p>
                </div>
                <div className='flex-1'>
                    <img src={developers} alt="" />
                </div>
            </div>
            <h1 className='text-5xl font-mono text-purple-500'>Beneficial To..</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-yellow-500 rounded-tr-3xl rounded-br-full">
                    Bankers
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="border text-4xl font-mono py-14 px-10 border-l-8 border-l-yellow-500 rounded-tl-full border-y-2 border-y-purple-500 border-r-8 border-r-purple-500">
                    Managers
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-purple-500 rounded-tr-full rounded-br-3xl border-r-8 border-r-yellow-500">
                    All Hr's
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-4xl font-mono py-14 px-10 border-l-yellow-500 rounded-bl-full border-r-8 border-r-purple-500 border-y-2 border-y-yellow-500">
                    Employee's
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-yellow-500 rounded-tr-full rounded-br-3xl">
                    Engineers
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="border text-4xl font-mono py-14 px-10 border-l-8 border-l-yellow-500 rounded-bl-full border-y-2 border-y-purple-500 border-r-8 border-r-purple-500">
                    Doctors
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-purple-500 rounded-tr-3xl rounded-br-full border-r-8 border-r-yellow-500">
                    Students
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="text-4xl font-mono py-14 px-10 border-l-yellow-500 rounded-tl-full border-r-8 border-r-purple-500 border-y-2 border-y-yellow-500">
                    Teachers
                </div>
            </div>
        </div>
    );
};

export default TypesOfPeople;