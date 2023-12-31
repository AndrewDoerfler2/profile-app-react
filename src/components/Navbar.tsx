import Logo from '../assets/Logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaBarcode} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react';
import { Link } from 'react-scroll';
import Resume from '../assets/Resume_Nov_2023.pdf'
import BusinessCard from '../assets/BusinessCard.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-white text-lg font-sans'>
            <div>
                <img src={Logo} style={{width:'50px'}} />
            </div>

        {/*  menu */}
                <ul className='hidden md:flex'>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                    <Link to="about" smooth={true} duration={500}>
                            About
                    </Link>
                    </li>
                    <li>
                    <Link to="skills" smooth={true} duration={500}>
                            Skills
                    </Link>
                    </li>
                    <li>
                    <Link to="work" smooth={true} duration={500}>
                            Work
                    </Link>
                    </li>
                    <li>
                    <Link to="contact" smooth={true} duration={500}>
                            Contact
                    </Link>
                    </li>
                </ul>

            {/*  Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='text-3xl' /> : <FaTimes className='text-3xl' />}
            </div>

            {/*  Mobile menu */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  bg-slate-500 flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                            About
                    </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                            Skills
                    </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                            Work
                    </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                            Contact
                    </Link>
                    </li>
                </ul>

                {/* Social Icons */}
                
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                    <ul>    
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-600'>
                            <a className='flex justify-between items-center w-full text-white-300' 
                            href='https://github.com/AndrewDoerfler2' 
                            target='_blank' 
                            rel='noopener noreferrer'> 
                                GitHub <FaGithub size={40}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white-300' 
                        href='https://linkedin.com/in/AndrewDoerfler' 
                        target='_blank' 
                        rel='noopener noreferrer'> 
                                LinkedIn <FaLinkedin size={40}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-green-600'>
                        <a className='flex justify-between items-center w-full text-white-300' 
                        href='mailto:andrew.doerfler@gmail.com?subject=Contacting via Portfolio App' > 
                                Email <HiOutlineMail size={40}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-red-600'>
                        <a className='flex justify-between items-center w-full text-white-300' 
                        href={Resume} > 
                                Resume <BsFillPersonLinesFill size={40}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-red-600'>
                        <a className='flex justify-between items-center w-full text-white-300' 
                        href={BusinessCard} > 
                                Business Card <FaBarcode size={40}/>
                            </a>
                        </li>
                    </ul>
                </div>

                </div>
                
            
        </>

    );
};

export default Navbar;
