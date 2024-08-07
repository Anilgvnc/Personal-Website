import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import './Home.css';
import SocialCard from '../components/SocialCard';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div className="App">
            <Helmet>
                <title>
                    Kemal Anıl Güvenç
                </title>
            </Helmet>
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
            <SocialCard />
        </div>
    );
}

export default Home;
