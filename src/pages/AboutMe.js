import { useEffect } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaStackOverflow, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import './AboutMe.css';
import Slider from '../components/Slider';


function AboutMe() {
    useEffect(() => {
        document.title = "Kemal Anıl Güvenç | About Me";
    }, [])
    return (
        <div className="App">
            <div className='userCard'>
                <div className='userContainer'>
                    <img alt='Kemal Anıl Güvenç'
                        className='avatarImg'
                        src='https://media.licdn.com/dms/image/D4D03AQH1Y0Zwv0dgNg/profile-displayphoto-shrink_800_800/0/1690364002577?e=1710374400&v=beta&t=1H__J_fN6LmXuOUSZxLnDbU8Or4S8q2cKAWNpAoqbhY'
                    />
                    <div>
                        <h1>Kemal Anıl Güvenç</h1>
                        <p className='bioText'>
                            I am an undergraduate computer engineering student at Doğuş University.
                            <br />
                            I am working on computer applications, Full stack web development and Android, cross platform mobile applications.
                        </p>
                    </div>
                </div>
                <div className='container'>
                    <p className='textContainer'>Software Developer / Mobile Application Developer / Full Stack Web Developer</p>
                    <p className='textContainer'> Languages | C/C++, C#, Java, Kotlin, Python, MSSQL, Asp.net, HTML/CSS, Javascript, Dart</p>
                    <p className='textContainer'> Frameworks | React.js, React Native, Node.js, Flutter</p>
                </div>
                <div className='row'>
                    <a className='linkContainer' href="https://www.linkedin.com/in/kemal-anil-guvenc/"><FaLinkedin /> LinkedIn</a>
                    <a className='linkContainer' href="https://github.com/Anilgvnc"><FaGithub /> GitHub</a>
                    <a className='linkContainer' href="https://stackoverflow.com/users/22662866/anilgvnc"><FaStackOverflow /> Stack Overflow</a>
                    <a className='linkContainer' href='https://www.hackerrank.com/profile/anilgvnc'><FaHackerrank /> HackerRank</a>
                    <a className='linkContainer' href='https://leetcode.com/guvencgrup2/'><SiLeetcode /> Leetcode</a>
                </div>
                <div className='row'>
                    <a className='linkContainer' href="https://www.instagram.com/anilgvnc/"><FaInstagram /> Instagram</a>
                    <a className='linkContainer' href="https://twitter.com/Anilgvnc"><FaTwitter /> Twitter</a>
                </div>
                <div className='slider' >
                </div>
                <Slider />
            </div>
        </div>
    );
}

export default AboutMe;
