import developers from '../assets/developers.jpg'
const TypesOfPeople = () => {
    return (
        <div className="container mx-auto mb-2">
            <h1 className="text-center my-20 text-5xl font-mono font-bold text-purple-600">..People, Using our Website..</h1>
            <div className='flex flex-col lg:flex-row my-6 gap-8'>
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-yellow-500 rounded-tr-3xl rounded-br-full">
                    Developers
                </div>
                <div className="border text-4xl font-mono py-14 px-10 border-l-8 border-l-yellow-500 rounded-tl-full border-y-2 border-y-purple-500 border-r-8 border-r-purple-500">
                    Developers
                </div>
                <div className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-purple-500 rounded-tr-full rounded-br-3xl border-r-8 border-r-yellow-500">
                    Developers
                </div>
                <div className="text-4xl font-mono py-14 px-10 border-l-yellow-500 rounded-bl-full border-r-8 border-r-purple-500 border-y-2 border-y-yellow-500">
                    Developers
                </div>
                <div className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-yellow-500 rounded-tr-full rounded-br-3xl">
                    Developers
                </div>
                <div className="border text-4xl font-mono py-14 px-10 border-l-8 border-l-yellow-500 rounded-bl-full border-y-2 border-y-purple-500 border-r-8 border-r-purple-500">
                    Developers
                </div>
                <div className="text-4xl font-mono py-14 px-10 border-l-8 border-l-purple-500 border-y-2 border-y-purple-500 rounded-tr-3xl rounded-br-full border-r-8 border-r-yellow-500">
                    Developers
                </div>
                <div className="text-4xl font-mono py-14 px-10 border-l-yellow-500 rounded-tl-full border-r-8 border-r-purple-500 border-y-2 border-y-yellow-500">
                    Developers
                </div>
            </div>
        </div>
    );
};

export default TypesOfPeople;