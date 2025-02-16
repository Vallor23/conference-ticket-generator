import thumb from '../assets/thumb.png'
import ticz from '../assets/ticz.png'

import { FaArrowRight } from "react-icons/fa";


const Header = () => {
    return (
        <header className="bg-[#05252C] m-4 flex flex-row justify-between items-center px-4 py-4 border-solid rounded-2xl w-full  mx-auto  border-[#197686] max-w-[1200px] min-w-[320px]border backdrop-blur-[2px] mb-12">
            <div className='flex items-center justify-between gap-2'>
                <img src={thumb} alt="" />
                <img src={ticz} alt="" />
            </div>
            <div className=' items-center hidden text-lg gap-x-4 lg:flex' style={{fontFamily:'NanumMyeongjo'}}>
                <p className='text-white'>Events</p>
                <p className='text-[#b3b3b3]'>Tickets</p>
                <p className='text-[#b3b3b3]'>About project</p>
            </div>
            <button className='flex justify-between items-center bg-white text-[#0A0C11] px-4 py-3 rounded-2xl gap-2'>

                MY TICKETS  <FaArrowRight />
            </button>
        </header>
    );
    }

export default Header;