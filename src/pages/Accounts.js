import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Projects.css';
import GithubProfile from '../components/GithubProfile';

function Accounts() {

    useEffect(() => {
        document.title = "Kemal Anıl Güvenç | Social Media Accounts";
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    My Personal Accounts
                </h1>
            </header>
            <div>
                <GithubProfile />
            </div>
        </div>
    );
}

export default Accounts;