import { useEffect, useState } from 'react';
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
                <div class="github-card">
                    <div class="top-section">
                        <a href={url}>
                            <img src={avatarURL} />
                        </a>
                    </div>
                    <div class="bottom-section">
                        <span class="title">{githubUsername}</span>
                        <span class="description">{bio}</span> <br />
                        <span class="description">{company}</span>
                        <div class="row row1">
                            <div class="item">
                                <span class="big-text">{publicRepos}</span>
                                <span class="regular-text">Repos</span>
                            </div>
                            <div class="item">
                                <span class="big-text">{followers}</span>
                                <span class="regular-text">Followers</span>
                            </div>
                            <div class="item">
                                <span class="big-text">{following}</span>
                                <span class="regular-text">Following</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default GithubProfile;