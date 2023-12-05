import SISLogo from '../assets/SISLogo.jpg'
import ZywaveLogo from '../assets/ZywaveLogo.jpg'
import { useState } from 'react';

const Work = () => {
    const [zywaveExpanded, setZywaveExpanded] = useState(false);
    const [sisExpanded, setSisExpanded] = useState(false);

    const handleZywaveClick = () => {
        setZywaveExpanded(!zywaveExpanded);
    };

    const handleSisClick = () => {
        setSisExpanded(!sisExpanded);
    };

    return (
        <>
            <div id="work" className='w-full h-screen bg-black text-white'>
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                        <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Work summary (*click image)</p>
                    </div>
                    <div></div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                        <p className='text-2xl font-bold sm:text-right text-white-300'>Zywave </p>
                        <p className='text-2xl font-bold sm:text-right text-white-300'>Strategic Insurance Software</p>
                        <div className="text-right">
                            <img className='py-4 w-120 h-80' src={ZywaveLogo} alt="" onClick={handleZywaveClick} />
                            {zywaveExpanded && (
                                <>
                                    <p className='text-2xl text-white-300 py-4 border border-blue-100 px-2'>Skills : C#, SQL, .NET, React Js/Ts, Node, Azure, AWS, Kubernetes, Redis, Automated Unit/Integration Testing, GitHub </p>
                                    <p className='text-2xl text-white-300 py-4'>Integration Engineer : Develop and maintain ETL and continuous integration applications.</p>
                                </>
                            )}
                        </div>
                        <div className="text-right">
                            <img className='py-4 w-120 h-80' src={SISLogo} alt="" onClick={handleSisClick} />
                            {sisExpanded && (
                                <>
                                    <p className='text-2xl text-white-300 py-4 border border-blue-100 px-2'>Skills : C#, .NET, MVC, AWS, Github, Subversion, SSIS, SSRS, Python, Exago</p>
                                    <p className='text-2xl text-white-300 py-4'>Software Engineer (product development) : Work with product managers and other engineers to develop new features for Strategic Insurance Software.</p>
                                    <p className='text-2xl text-white-300 py-4'>Lead/Senior Implementation Engineer : Subject matter expert for internal applications, ETL processes, and advanced reporting.</p>
                                    <p className='text-2xl text-white-300 py-4'>Implementation Engineer : Collaborate cross-functionally to provide superior service to our clients predominantly in Microsoft stack.</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;