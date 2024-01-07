import { useEffect } from 'react';

import './Home.css';

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, [])
    return (
        <div className="App">
            <title>Home</title>
            <header className="App-header">
                <h1>
                    Kemal Anıl Güvenç
                </h1>
            </header>
        </div>
    );
}

export default Home;
