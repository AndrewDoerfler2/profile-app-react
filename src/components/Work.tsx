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
                    <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <p className='text-4xl font-bold inline border-b-4 border-pink-400'>Work summary (*click image for more info)</p>
                    </div>
                    <div></div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                        <div className="text-left">
                            <img className='py-4 w-40 h-30 cursor-pointer' src={ZywaveLogo} alt="" onClick={handleZywaveClick} />
                            {zywaveExpanded && (
                                <div className="expanded-content">
                                    <p className='text-2xl text-white-300 py-4 border border-blue-100 px-2'>Skills : C#, SQL, .NET, React Js/Ts, Node, Azure, AWS, Kubernetes, Redis, Automated Unit/Integration Testing, GitHub </p>
                                    <p className='text-2xl text-white-300 py-4 border border-blue-100 px-4'>Titles : Integration Engineer, Software Engineer.</p>
                                </div>
                            )}
                        </div>
                        <div className="text-left">
                            <img className='py-6 w-40 h-30 cursor-pointer' src={SISLogo} alt="" onClick={handleSisClick} />
                            {sisExpanded && (
                                <div className="expanded-content">
                                    <p className='text-2xl text-white-300 py-4 border border-blue-100 px-4'>Skills : C#, .NET, MVC, AWS, Github, Subversion, SSIS, SSRS, Python, Exago</p>
                                    <p className='text-2xl text-white-300 py-4 border border-blue-100 px-4'>Titles : Implementation Engineer, Senior/Lead Implementation Engineer, Software Engineer.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;