import { useState,useEffect } from "react";
import PropTypes from 'prop-types';
// import icon from '../assets/icon.png'

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
        <form onSubmit={handleSubmit} className=" flex flex-col m-5 px-6 py-8 rounded-2xl gap-8 bg-[#041E23] border-solid border-[#0E464F] border lg:mt-[64px] lg:p-[48px] max-w-[700px] mx-auto">
            <div className="items-start w-full mb-8 gap-y-3">
                <div className="flex flex-col items-start mb-4 gap-y-3 lg:gap-y-0 md:justify-between md:flex-row">
                    <h1 className="text-2xl font-bold lg:text-3xl" style={{fontFamily: "Nanum Myeongjo"}}>Attendee Details</h1>
                    <p className="text-base font-roboto text-[#FAFAFA] leading-6">Step 2/3</p>
                </div>
                <div className="relative h-1 rounded bg-[#0E464F]">
                <div className="absolute inset-y-0 left-0 rounded bg-[#24A0B5] w-2/3"></div>
                </div>
            </div>

            <div className="rounded-[24px] border border-[#07373F] bg-[#052228] px-6 pt-6 pb-12 flex flex-col items-start gap-y-8" role="presentation" tabIndex="0">
                <p className="text-[#FAFAFA] font-roboto text-base">Upload Profile Photo</p>
                <input 
                    accept="image/*,.jpeg,.jpg,.png,.gif,.webp" 
                    style={{ border: '0px', clip: 'rect(0px, 0px, 0px, 0px)', clipPath: 'inset(50%)', height: '1px', margin: '0px -1px -1px 0px', overflow: 'hidden', padding: '0px', position: 'absolute', width: '1px', whiteSpace: 'nowrap' }} 
                    tabIndex="-1" className="opacity-0" 
                    type="file"
                />
                <div className=" lg:bg-[#000000] lg:bg-opacity-20 w-full h-[200px] flex items-center justify-center">
                    <div className="group relative mx-auto flex justify-center items-center h-[240px] overflow-hidden aspect-square rounded-[32px] border-[4px] border-[#24A0B5] border-opacity-50 ">
                        <div className="flex flex-col items-center justify-center gap-4 bg-[#0E464F] w-full h-full">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z" fill="#FAFAFA"></path>
                                <path d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z" fill="#FAFAFA"></path>
                            </svg>
                            <span className="text-center font-roboto text-[#fafafa]">Drag &amp; drop or click to upload</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#07373F] h-1'></div>

            <div className="">
                <label htmlFor="fullname" className="mb-2">Enter your name</label>
                <input 
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                    className="p-3 w-full border-solid border-[#07373F] border-1 mt-2 rounded-xl"
                />
                {errors.fullname && <span id="fullnameError" role="alert" className="error">{errors.fullname}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Enter Email Adress*</label>
                <div className="flex rounded-[12px] gap-x-2 p-3 border border-[#07373F] text-white items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="white"></path>
                    </svg>
                    <input 
                        required="" 
                        className=" bg-transparent w-full active:outline-none outline-none rounded-[12px] p-1" 
                        placeholder="hello@avioflagos.io" 
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span id="emailError" role="alert" className="error">{errors.email}</span>}
                </div>
                
            </div>
            <div className="form-group">
                <label htmlFor="avatarURL">AvatarURL</label>
                <input 
                    type="text"
                    value={avatarURL}
                    onChange={(e) => setavatarURL(e.target.value)}
                    required
                    className="p-3 w-full border-solid border-[#07373F] border-1 mt-2 rounded-xl"
                />
                {errors.avatarURL && <span id="avatarURLError" role="alert" className="error">{errors.avatarURL}</span>}
            </div>

            <div className="flex flex-col lg:items-center lg:gap-x-6 lg:flex-row gap-y-4 ">
                <button className="w-full order-2 lg:order-0 py-3 px-6  transition-colors border rounded-[8px] text-center text-accent border-[#24A0B5]  text-[16px] leading-[24px]">Back</button>
                <button className="w-full order-0 text-[16px] lg:order-2 py-3 px-6 text-white transition-colors text-center rounded-[8px] bg-[#24A0B5] " 
                style={{fontFamily:"NanumMyeongjo"}}
                    type="submit"
                >
                        Get My Free Ticket
                </button>
            </div>
            
        </form>
    );
}

TicketForm.propTypes = {
    onTicketSubmit: PropTypes.func.isRequired,
};

export default TicketForm;