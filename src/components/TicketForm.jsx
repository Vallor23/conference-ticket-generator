import { useState,useEffect } from "react";
import PropTypes from 'prop-types';

const TicketForm = ({onTicketSubmit}) => {
    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [avatarURL,setavatarURL] = useState("");
    const [errors,setErrors] = useState("");

    //load data from local storage
    useEffect(() => {
        const data = localStorage.getItem("ticketFormData");
        if (data) {
            const ticketFormData = JSON.parse(data);
            setFullname(ticketFormData.fullname);
            setEmail(ticketFormData.email);
            setavatarURL(ticketFormData.avatarURL);
        }
    },[]);
    //save data to local storage
    useEffect(() => {
        localStorage.setItem("ticketFormData",JSON.stringify({fullname,email,avatarURL}));
    },[fullname,email,avatarURL]);


    // Function to check if the URL is valid
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    // Function to validate the form
    const validate = () => {
        let newErrors = {};
        if (!fullname.trim()) newErrors.fullname = "Fullname is required!";
        
        if (!email.trim()) {
            newErrors.email = "Email is required!";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid!";
        }

        if (!avatarURL.trim()) {
            newErrors.avatarURL = "Avatar URL is required!";
        } else if (!isValidUrl(avatarURL)) {
            newErrors.avatarURL = "Avatar URL is invalid!";
        }
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const FormErrors = validate();
        if (Object.keys(FormErrors).length) {
            setErrors(FormErrors);
        } else {
            //if there are no errors, generate the ticket
            onTicketSubmit({fullname,email,avatarURL});
            setErrors({});
            console.log("Form Submitted!");
        }
    }


    return (
        // Form to submit a ticket
        <form onSubmit={handleSubmit}>
            <h2>Submit a Ticket</h2>
            <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input 
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />
                {errors.fullname && <span id="fullnameError" role="alert" className="error">{errors.fullname}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Enter Email Adress*</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.email && <span id="emailError" role="alert" className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input 
                    type="text"
                    value={avatarURL}
                    onChange={(e) => setavatarURL(e.target.value)}
                    required
                />
                {errors.avatarURL && <span id="avatarURLError" role="alert" className="error">{errors.avatarURL}</span>}
            </div>
            <button type="submit">Generate Ticket</button>
        </form>
    );
}

TicketForm.propTypes = {
    onTicketSubmit: PropTypes.func.isRequired,
};

export default TicketForm;