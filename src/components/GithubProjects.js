import { useEffect, useState } from 'react';
import Loading from './Loading';

import "./GithubProjects.css"

function GithubProjects() {

    const [spinner, setSpinner] = useState(false);
    const [repoData, setRepoData] = useState();

    useEffect(() => {
        setSpinner(true);
        fetch("https://api.github.com/users/Anilgvnc/repos")
            .then((res) => res.json())
            .then(
                (result) => {
                    setSpinner(false);
                    console.log(36, result);
                    const list = result.map((item) => (
                        <div className='cardTextContainer'>
                            <a href={item.svn_url}>
                                {item.name}
                            </a>
                        </div>
                    ));
                    setRepoData(list);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, [])

    return (
        <div className='App'>
            {spinner === true ?
                <Loading />
                :
                <div className='card'>
                    <p> {repoData} </p>
                </div>
            }
        </div>
    );
}

export default GithubProjects;