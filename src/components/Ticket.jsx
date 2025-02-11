import PropTypes from 'prop-types';

const Ticket = ({TicketData}) => {
    const {fullname,email,avatarURL} = TicketData;
            console.log("Fullname: ",fullname);
            console.log("Email: ",email);
            console.log("Avatar URL: ",avatarURL);
    return (
        <div className="ticket">
            <h2 className="">Ticket</h2>
            <p>Fullname: {fullname}</p>
            <p>Email: {email}</p>
            <img src={avatarURL} alt="avatar" />
        </div>
    );
}

Ticket.propTypes = {
    TicketData: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatarURL: PropTypes.string.isRequired
    }).isRequired
};

export default Ticket;