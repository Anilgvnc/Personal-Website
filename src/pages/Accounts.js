import { useEffect } from 'react';

import './Projects.css';
import GithubProfile from '../components/GithubProfile';

function Accounts() {

    useEffect(() => {
        document.title = "Social Media Accounts";
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