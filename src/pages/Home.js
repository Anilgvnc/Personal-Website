import { useEffect } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaStackOverflow, FaLinkedin, FaHackerrank } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';
import Slider from '../components/Slider';

function Home() {
    useEffect(() => {
        document.title = "Kemal Anıl Güvenç | Home";
    }, [])
    return (
        <div className="home">
            <div className='container'>
                <div>
                    <div className='userCard'>
                        <div>
                            <div>
                                <img alt='Kemal Anıl Güvenç'
                                    className='avatarImg'
                                    src='https://media.licdn.com/dms/image/D4D03AQH1Y0Zwv0dgNg/profile-displayphoto-shrink_800_800/0/1690364002577?e=1710374400&v=beta&t=1H__J_fN6LmXuOUSZxLnDbU8Or4S8q2cKAWNpAoqbhY'
                                />
                            </div>
                            <div>
                                <h1>Kemal Anıl Güvenç</h1>
                                <p className='bioText'>
                                    I am an undergraduate computer engineering student at Doğuş University.
                                    <br />
                                    I am working on computer applications, Full stack web development and Android, cross platform mobile applications.
                                    <br />
                                    Istanbul/Turkey
                                </p>
                            </div>
                        </div>
                        <div className='container'>
                            <p className='textContainer'>Software Developer | C++ / C# / Java</p>
                            <p className='textContainer'>Mobile Application Developer | React Native / Kotlin / Java</p>
                            <p className='textContainer'>Full Stack Web Developer | React.js / HTML,CSS,JS / MSSQL / Asp.net</p>
                        </div>
                        <div className='row'>
                            <a className='linkContainer' href="https://www.linkedin.com/in/kemal-anil-guvenc/"><FaLinkedin /> LinkedIn</a>
                            <a className='linkContainer' href="https://github.com/Anilgvnc"><FaGithub /> GitHub</a>
                            <a className='linkContainer' href="https://stackoverflow.com/users/22662866/anilgvnc"><FaStackOverflow /> Stack Overflow</a>
                            <a className='linkContainer' href='https://www.hackerrank.com/profile/anilgvnc'><FaHackerrank /> HackerRank</a>
                            <a className='linkContainer' href="https://www.instagram.com/anilgvnc/"><FaInstagram /> Instagram</a>
                            <a className='linkContainer' href="https://twitter.com/Anilgvnc"><FaTwitter /> Twitter</a>
                        </div>
                    </div>
                </div>
                <div>
                    <Slider />
                </div>
            </div>
        </div>
    );
}

export default Home;
