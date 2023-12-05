const Work = () => {
    return (
        <div id='work' className='w-full h-screen bg-black text-white'>
            {/*  container */}
            <div className='max-w-[1000px] w-full mx-auto px-10 flex flex-col justify-center h-full bg-black text-white'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Work summaries</p>
                <p className='text-2xl text-white-300 py-4 font-bold border-b-2 border-white'>Strategic Insurance Software</p>
                <ol>
                    <li className='text-xl text-white-300 py-4'>
                        <p className='font-bold'>Implementation Engineer :</p>
                        <ol>
                            <li>
                                <p>-Working cross-functionally to provide superior service to our clients.</p>
                            </li>
                        </ol>
                    </li>
                    <li className='text-xl text-white-300 py-4'>
                        <p className='font-bold'>Lead/Senior Implementation Engineer :</p>
                        <ol>
                            <li>
                                <p>-Subject matter expert for internal applications, ETL processes, and advanced reporting.</p>
                            </li>
                        </ol>
                    </li>
                    <li className='text-xl text-white-300 py-4'>
                        <p className='font-bold'>Software Engineer (product development) :</p>
                        <ol>
                            <li>
                                <p>-Work with product managers and other engineers to develop new features for PartnerXE.</p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <p className='text-2xl text-white-300 py-4 font-bold border-b-2 border-white'>Zywave</p>
                <ol>
                    <li className='text-xl text-white-300 py-4'>
                        <p className='font-bold'>Integration Engineer :</p>
                        <ol>
                            <li>
                                <p>-Develop and maintain ETL and continuos integration applications.</p>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Work;