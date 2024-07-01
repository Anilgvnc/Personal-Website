import { useEffect } from 'react';
import { IoIosMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

import './Contact.css'
import SocialCard from '../components/SocialCard';

function Contact() {
    useEffect(() => {
        document.title = "Kemal Anıl Güvenç | Contact me";
    }, [])
    return (
        <div className="App">
            <div className='contactContainer'>
                <div className='contactHeader'>
                    <h1>Contact me</h1>
                </div>
                <p>
                    You can contact me via my e-mail address or via my social media addresses in below.
                    <br />
                    I will return as soon as possible.
                </p>
                <p><FiMapPin /> Turkey / İstanbul / Kartal</p>
                <a href='mailto:guvencgrup2@gmail.com'><IoIosMail /> guvencgrup2@gmail.com</a>
                <SocialCard />
            </div>
        </div>
    );
}

export default Contact;