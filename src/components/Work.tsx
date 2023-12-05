const Work = () => {
    return (
        <div id='work' className='w-full h-screen bg-black text-white'>
            {/*  container */}
            <div className='max-w-[1000px] w-full mx-auto px-10 flex flex-col justify-center h-full bg-black text-white'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Work Experience</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Andrew Doerfler</h1>
                <h2 className='text-xl sm:text-3xl font-bold'>I build web applications as a full stack developer.</h2>
            </div>
        </div>
    );
};

export default Work;