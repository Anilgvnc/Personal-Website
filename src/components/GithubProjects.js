import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./GithubProjects.css"

function GithubProjects() {

    const [repoData, setRepoData] = useState();


    useEffect(() => {
        fetch("https://api.github.com/users/Anilgvnc/repos")
            .then((res) => res.json())
            .then(
                (result) => {
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
            <Card className='card'>
                <Card.Body>
                    <Card.Text> {repoData} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GithubProjects;