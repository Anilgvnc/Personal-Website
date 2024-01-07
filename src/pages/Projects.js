import { useEffect } from 'react';

import './Projects.css';
import GithubProjects from '../components/GithubProjects';

function Projects() {

    useEffect(() => {
        document.title = "Projects";
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Projects
                </h1>
            </header>
            <div>
                <GithubProjects />
            </div>
        </div>
    );
}

export default Projects;
