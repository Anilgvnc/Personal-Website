import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

import './Contact.css'

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
                <p className='linkContainer'><FiMapPin /> Turkey / İstanbul / Kartal</p>
                <a className='linkContainer' href='mailto:guvencgrup2@gmail.com'><IoIosMail /> guvencgrup2@gmail.com</a>
                <div className='rowLink'>
                    <a href="https://www.linkedin.com/in/kemal-anil-guvenc/"><FaLinkedin /></a>
                    <a href="https://github.com/Anilgvnc"><FaGithub /></a>
                    <a href="https://www.instagram.com/anilgvnc/"><FaInstagram /> </a>
                    <a href="https://twitter.com/Anilgvnc"><FaTwitter /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;