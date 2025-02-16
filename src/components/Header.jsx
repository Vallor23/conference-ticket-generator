import thumb from '../assets/thumb.png'
import ticz from '../assets/ticz.png'

import { FaArrowRight } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="bg-[#05252C] m-4 flex flex-row justify-between items-center px-4 py-4 border-1 border-[#197686] border-solid rounded-2xl">
            <div className='flex items-center justify-between gap-2'>
                <img src={thumb} alt="" />
                <img src={ticz} alt="" />
            </div>
            <div className='hidden'>
                <p>Events</p>
                <p>Tickets</p>
                <p>About project</p>
            </div>
            <button className='flex justify-between items-center bg-white text-[#0A0C11] px-4 py-3 rounded-2xl gap-2'>

                MY TICKETS  <FaArrowRight />
            </button>
        </header>
    );
    }

export default Header;