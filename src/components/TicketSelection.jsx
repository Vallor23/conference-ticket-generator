import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const TicketSelection = ({quantity, setQuantity, setTicketType}) => {

    const navigate = useNavigate()
    return (
        <div className='ticket-selection'>
            <h1>Ticket Selection</h1>
            <div className='h1' >
                <div></div>
            </div>
            <div className='event-details'>
                <h2>Techember Fest &apos;25</h2>
                <p>Join us for an unforgetable experience at [event name]! Secure your spot now!</p>
                <p>Event Location March 15,2025 </p>
            </div>
            <div>
            <p>Select Ticket Type</p>
                <div className='ticket-type'>
                    <div 
                        className='ticket-type-option'
                        value='ticketType'
                        onClick={() => setTicketType('regular')}
                    >
                        <p>Free</p>
                        <p>REGULAR ACCESS 20/52
                        </p>
                    </div>
                    <div 
                        className='ticket-type-option' 
                        onClick={() => setTicketType('vip')}
                    >
                        <p>VIP ACCESS 20/52</p>
                        <span>$150</span>
                    </div>
                    <div className='ticket-type-option' onClick={() => setTicketType('vvip')}>
                        <p>VVIP ACCESS 20/52</p>
                        <span>$150</span>
                    </div>
                </div>
                <div className='ticket-quantity'>
                    <p>Number of tickets</p>
                    <input 
                        type='number' 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)} 
                        min='1' 
                        max='10'
                    />
                </div>
                <div className='actions'>
                    <button className='cancel-btn'>Cancel</button>
                    <button className='next-btn' onClick={() => navigate("/ticketform")}>Next</button>
                </div>
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
