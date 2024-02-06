import { useEffect } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaStackOverflow, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from 'typewriter-effect';

import './Home.css';

function Home() {
    useEffect(() => {
        document.title = "Kemal Anıl Güvenç | Home";
    }, [])
    return (
        <div className="App">
            <div className='homeHeader'>
                <h1>Kemal Anıl Güvenç</h1>
            </div>
            <div className='aboutWriter'>
                <Typewriter options={{
                    strings: ['Software Developer', ' Mobile Application Developer', 'Full Stack Web Developer'],
                    autoStart: true,
                    loop: true,
                }} />
            </div>
            <div className='rowLink'>
                <a href="https://www.linkedin.com/in/kemal-anil-guvenc/"><FaLinkedin /></a>
                <a href="https://github.com/Anilgvnc"><FaGithub /></a>
                <a href="https://stackoverflow.com/users/22662866/anilgvnc"><FaStackOverflow /></a>
                <a href='https://www.hackerrank.com/profile/anilgvnc'><FaHackerrank /></a>
                <a href='https://leetcode.com/guvencgrup2/'><SiLeetcode /></a>
                <a href="https://www.instagram.com/anilgvnc/"><FaInstagram /> </a>
                <a href="https://twitter.com/Anilgvnc"><FaTwitter /></a>
            </div>
        </div>
    );
}

export default Home;
