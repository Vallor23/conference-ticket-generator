import PropTypes from 'prop-types';

const Ticket = ({ticketData,quantity, ticketType}) => {
    const {fullname,email,avatarURL} = ticketData;
            console.log("Fullname: ",fullname);
            console.log("Email: ",email);
            console.log("Avatar URL: ",avatarURL);
    return (
        <div className="ticket">
            <div >
            <h2 className="">Ticket</h2>
            <img src={avatarURL} alt="avatar" className='avatar-image'/>
            <div className='ticket-info'>
                <p>Fullname: {fullname}</p>
                <p>Email: {email}</p>
                <p>Ticket type:{ticketType}</p>
                <p>Ticket for{quantity}</p>
            </div>
        </div>
        <div className='barcode'></div>
        </div>
    );
}

Ticket.propTypes = {
    ticketData: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired
    }).isRequired,
    ticketType: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
};

export default Ticket;