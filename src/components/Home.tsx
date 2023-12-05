import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
    return (
      <div id='home' className='w-full h-screen'>
        {/*  container */}
        <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full text-white'>
          <p className='text-pink-400 text-3xl'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold'>Andrew Doerfler</h1>
          <h2 className='text-xl sm:text-3xl font-bold'>I build web and integration applications as a full stack developer.</h2>
            <div>
                <Link to="work" smooth={true} duration={500}>
                <button className='group text-white border-2 px-6 py-4 my-8 flex items-center hover:bg-pink-400 hover:border-pink-400'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
                </Link>
                
            </div>
        </div>
      </div>
    );
  }

  export default Home;