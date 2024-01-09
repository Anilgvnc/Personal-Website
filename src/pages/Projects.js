import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Projects.css';
import GithubProjects from '../components/GithubProjects';
import Rate from '../components/Rate';

function Projects() {

    useEffect(() => {
        document.title = "Kemal Anıl Güvenç | Projects";
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
            <div>
                <p style={{ color: 'white' }}>Rate my projects</p>
                <Rate />
            </div>
        </div>
    );
}

export default Projects;
