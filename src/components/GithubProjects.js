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
                        <div class="card">
                            <div class="main-content">
                                <div class="header">
                                    <span></span>
                                    <span><a href={item.svn_url}>
                                        {item.name}
                                    </a></span>
                                </div>
                                <p class="heading">
                                    {item.description}
                                </p>
                                <div class="categories">
                                    <span>{item.language}</span>
                                </div>
                            </div>
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
                <div className="items">
                    {repoData}
                </div>
            }
        </div>
    );
}

export default GithubProjects;