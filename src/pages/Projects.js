import { useEffect } from 'react';

import './Projects.css';
import GithubProjects from '../components/GithubProjects';
import GithubProfile from '../components/GithubProfile';

function Projects() {

    useEffect(() => {
        document.title = "Projects";
    }, [])

    return (
        <div className="projects-screen">
            <div className='row-content'>
                <div className='profile'>
                    <GithubProfile />
                </div>
                <GithubProjects />
            </div>
        </div>
    );
}

export default Projects;
