import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

const TicketSelection = ({quantity, setQuantity, setTicketType}) => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!false)

    return (
        <div className='flex flex-col gap-8 p-6 border-1 border-solid border-[#0E464F] rounded-4xl m-6 bg-[#08252B]'>
            <div>
                <div className='mb-3'>
                    <h1 className='text-3xl mb-4'>Ticket Selection</h1>
                    <p>Step 1/3</p>
                </div>
                <div className="relative h-1 rounded bg-[#0E464F]">
                    <div className="absolute inset-y-0 left-0 rounded bg-[#24A0B5] w-1/3"></div>
                </div>
                
            </div>
    
            <div className='text-center px-6 py-4 rounded-3xl border-1 border-solid border-[#07373F] bg-[]'
            style={{
                background: "radial-gradient(circle, #07373F 100%, rgba(10, 12, 17, 0.1) 10%)",
              }}
            >
                <h2 className='mb-2 text-5xl' style={{fontFamily: "Road Rage"}}>Techember Fest &apos;25</h2>
                <p>Join us for an unforgetable experience at [event name]! Secure your spot now!</p>
                <p>Event Location March 15,2025 </p>
            </div>
            <div className='bg-[#07373F] h-1'></div>
              <div>
                <p className='mb-2'>Select Ticket Type:</p>
                <div className='rounded-3xl flex flex-col p-4 md:flex-row md:justify-between md:gap-x-6 items-center gap-4 border-1 border-solid border-[#07373F] bg-[#052228]'>
                    <div 
                        className='bg-[#12464E] p-3 border-1 border-solid border-[#197686] rounded-xl w-full min-w-[152px] hover:bg-[#2C545B]'
                        value='ticketType'
                        onClick={() => setTicketType('regular')}
                    >
                        <p className='text-2xl text-[#ffffff] mb-3 font-semibold'>Free</p>
                        <p>REGULAR ACCESS <p className='text-[#D9D9D9]'>20/52</p></p>
                    </div>
                    <div 
                        className='p-3 border-2 border-solid border-[#197686] rounded-xl w-full min-w-[152px] hover:bg-[#2C545B]' 
                        onClick={() => setTicketType('vip')}
                    >
                        <span className='text-[#ffffff] mb-3  text-2xl font-semibold'>$150</span>
                        <p>VIP ACCESS <p className='text-[#D9D9D9]'>20/52</p></p>
                        
                    </div>
                    <div className='p-3 border-2 border-solid border-[#197686] rounded-xl w-full min-w-[152px] hover:bg-[#2C545B]' onClick={() => setTicketType('vvip')}>
                        <span className='text-[#ffffff] text-2xl font-semibold'>$150</span>
                        <p>VVIP ACCESS <p className='text-[#D9D9D9]'>20/52</p> </p> 
                    </div>
                </div>
                </div>
                <div className='space-y-2'>
                    <label className="text-base font-roboto leading-[24px]">Number of Tickets</label>

                    <div className="relative">
                    <button className="w-full justify-between  border border-[#07373F] flex items-center gap-x-2 p-3 rounded-[12px]  " onClick={toggleDropdown}>
                        <span>{quantity}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down transition-transform">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute left-0 w-full mt-1 rounded-lg shadow-lg top-full bg-card">
                            {[1,2,3,4,5].map((num) => (
                                <button
                                    key={num}
                                    onClick={()=> {setQuantity(num)
                                        setIsOpen(false);
                                    }}
                                    className="w-full px-4 py-2 text-left hover:bg-muted"
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    )} 
            
                </div>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-x-6'>
                    <button className='w-full px-3 py-3 bg-[#24A0B5] rounded-sm text-[#fff] order-0 lg:order-2 'onClick={() => navigate("/ticketform")}>Next</button>
                    <button className='w-full px-3 py-3 rounded-sm text-[#24A0B5] border-[#24A0B5] border-1 border-solid' >Cancel</button>
                </div>
            
        </div>
    );
    }

TicketSelection.propTypes = {
    quantity: PropTypes.number.isRequired,
    ticketType: PropTypes.string.isRequired,
    setQuantity: PropTypes.func.isRequired,
    setTicketType: PropTypes.func.isRequired,
};

export default TicketSelection;
