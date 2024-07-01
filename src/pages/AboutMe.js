import { useEffect } from 'react';


import './AboutMe.css';
import Slider from '../components/Slider';
import SocialCard from '../components/SocialCard';


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
                        src='https://media.licdn.com/dms/image/D4D03AQH1Y0Zwv0dgNg/profile-displayphoto-shrink_800_800/0/1690364002577?e=2147483647&v=beta&t=mtAWmbLu4DwREOakJw3rTtXqEpDRcHWHs2p7qwF6rcA'
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
                <SocialCard />
                <div className='container'>
                    <p>
                        Languages | C/C++, C#, Java, Kotlin, Python, MSSQL, Asp.net, HTML/CSS, Javascript, Dart
                        <br />
                        Frameworks | React.js, React Native, Node.js, Flutter
                    </p>
                </div>
                <Slider />
            </div>
        </div>
    );
}

export default AboutMe;
