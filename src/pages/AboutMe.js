import { useEffect } from 'react';
import { Helmet } from "react-helmet";


import './AboutMe.css';
import Slider from '../components/Slider';
import SocialCard from '../components/SocialCard';


function AboutMe() {
    useEffect(() => {
        document.title = "About Me";
    }, [])
    return (
        <div className="App">
            <Helmet>
                <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </Helmet>
            <div className='about-content' >
                <div className='userCard'>
                    <div className='userContainer'>
                        <img alt='Kemal Anıl Güvenç'
                            className='avatarImg'
                            src='https://media.licdn.com/dms/image/D4D03AQH1Y0Zwv0dgNg/profile-displayphoto-shrink_800_800/0/1690364002577?e=2147483647&v=beta&t=mtAWmbLu4DwREOakJw3rTtXqEpDRcHWHs2p7qwF6rcA'
                        />
                        <div>
                            <span className='title'>Kemal Anıl Güvenç</span>
                            <span className='decription'>
                                I am an undergraduate computer engineering student at Doğuş University.
                                <br />
                                I am working on computer applications, Full stack web development and Android, cross platform mobile applications.
                            </span>
                        </div>
                    </div>
                    <div className='bottom-section'>
                        <div class="row row1">
                            <div class="item">
                                <span class="big-text">Languages</span>
                                <span class="regular-text">C/C++, C#, Java, Kotlin, Python, MSSQL, Javascript</span>
                            </div>
                            <div class="item">
                                <span class="big-text">Frameworks</span>
                                <span class="regular-text">React.js, React Native, ASP.NET, .NET, Flutter</span>
                            </div>
                        </div>
                        <div className='row row1'>
                            <div class="item">
                                <span class="big-text">Badges</span>
                                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="af06db7a-5ac4-4fa4-a7e7-7aa0c6fe7cd0" data-share-badge-host="https://www.credly.com"></div>
                                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="57b63235-e327-421e-a2e5-87c1e9355791" data-share-badge-host="https://www.credly.com"></div>
                                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="e88e4e6b-d74f-4fc8-9f2f-3993eb5e840a" data-share-badge-host="https://www.credly.com"></div>
                            </div>
                        </div>
                    </div>
                    <SocialCard />
                    <button class="boton-elegante" onClick={() => { window.location.href = "https://drive.google.com/file/d/1iGKLnqtTmsnovtNAZQ4IqSdTSaVesYrR/view?usp=sharing" }} >View My Resume</button>
                </div>
                <div>
                    <Slider />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
