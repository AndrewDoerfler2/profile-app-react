import AWS from '../assets/aws.png'
import Typescript from '../assets/typescript.png'
import Github from '../assets/github.png'
import React from '../assets/react.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Azure from '../assets/azureIcon.png'
import CSharp from '../assets/CSharp.png'
import DotNet from '../assets/DotNet.jpg'



const Skills = () => {
    return (
        <>
            <div id="skills" className='flex flex-col justify-center items-center w-full h-screen text-white'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='text-4xl  font-bold inline border-b-4 border-pink-400'>Experience</p>
                        <p className='py-4'>These are the technologies I have worked with</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={AWS} alt="" />
                            <p>AWS</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={Azure} alt="" />
                            <p>Azure</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={Github} alt="" />
                            <p>Github</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={React} alt="" />
                            <p>React</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={Javascript} alt="" />
                            <p>Javascript</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={Typescript} alt="" />
                            <p className=''>Typescript</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={CSharp} alt="" />
                            <p>CSharp</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={DotNet} alt="" />
                            <p className=''>.NET</p>
                        </div>
                        <div className='shadow-md shadow-[black] hover:scale-110 duration-500' >
                            <img className='w-20 mx-auto' src={Node} alt="" />
                            <p>Node</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Skills;