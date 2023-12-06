const About = () => {
    return (
        <>
            <div id="about" className='w-full h-screen bg-black text-white'>
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className='text-4xl font-bold inline border-b-4 border-pink-400'>About</p>
                        </div>
                    </div>
                    <div></div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                        <p className='text-2xl font-bold sm:text-right text-white-300'>Thank you for visiting!</p>
                        <div>
                        <p className='text-2xl text-white-300 py-4'>I graduated from Ohio University in 2019 with degrees in: MIS and Business Analytics.</p>
                        <p className='text-2xl text-white-300 py-4'>I began my career working for Strategic Insurance Software which was later acquired by Zywave.</p>
                        <p className='text-2xl text-white-300 py-4'>At this point, I am looking to further my career as a Software Engineer and move into some more cloud technologies!</p>
                        <p className='text-2xl text-white-300 py-4'>Personally, I love to be outdoors! I like to kayak, bike, snowboard, and run (sometimes haha). As well I've been a guitarist for 20 years and always take an opportunity for live music!</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default About;