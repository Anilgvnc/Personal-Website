import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./GithubProfile.css"
import Loading from './Loading';

function GithubProfile() {

    const [spinner, setSpinner] = useState(false);
    const [avatarURL, setAvatarURL] = useState();
    const [githubUsername, setGitHubUsername] = useState();
    const [url, setUrl] = useState();
    const [bio, setBio] = useState();
    const [company, setCompany] = useState();
    const [publicRepos, setPublicRepos] = useState();
    const [followers, setFollowers] = useState();
    const [following, setFollowing] = useState();


    useEffect(() => {
        setSpinner(true);
        fetch('https://api.github.com/users/Anilgvnc')
            .then((res) => res.json())
            .then(
                (result) => {
                    setSpinner(false);
                    console.log(result);
                    setAvatarURL(result.avatar_url);
                    setGitHubUsername(result.login);
                    setUrl(result.html_url);
                    setBio(result.bio);
                    setCompany(result.company);
                    setPublicRepos(result.public_repos);
                    setFollowers(result.followers);
                    setFollowing(result.following)
                },
                (error) => {
                    console.log(error);
                }
            );
    }, [])

    return (
        <div className='App'>
            {spinner === true ? <Loading /> :
                <Card className='card'>
                    <Card.Img variant="top" className='img' src={avatarURL} />
                    <Card.Body>
                        <Card.Title> {githubUsername} </Card.Title>
                        <Card.Text> {bio} </Card.Text>
                        <Card.Text> {company} </Card.Text>
                        <div className='cardTextSocial'>
                            <div className='profileCardTextContainer'>
                                <Card.Text className='cardText'> Public repos</Card.Text>
                                <Card.Text className='cardText'> {publicRepos} </Card.Text>
                            </div>
                            <div className='profileCardTextContainer'>
                                <Card.Text className='cardText'> Followers</Card.Text>
                                <Card.Text className='cardText'> {followers} </Card.Text>
                            </div>
                            <div className='profileCardTextContainer'>
                                <Card.Text className='cardText'> Following</Card.Text>
                                <Card.Text className='cardText'> {following} </Card.Text>
                            </div>
                        </div>
                        <Button variant="primary" className='button' href={url}>Go to github</Button>
                    </Card.Body>
                </Card>
            }
        </div>
    );
}

export default GithubProfile;