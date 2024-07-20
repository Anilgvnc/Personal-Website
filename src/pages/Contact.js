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
                <div class="top-section">
                    <img src='https://media.licdn.com/dms/image/D4D16AQEu_6wS08Ks0g/profile-displaybackgroundimage-shrink_350_1400/0/1721461242418?e=1726704000&v=beta&t=u0LO_mnLYfMeJbBZ3Kfy5M9_6vxfNuCDkgx0QsB6xbw' />
                </div>
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