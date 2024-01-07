import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, [])
    return (
        <div className="home">
            <div className='container'>
                <div>
                    <Card className='userCard'>
                        <Card.Img variant="top" className='avatarImg' src='https://media.licdn.com/dms/image/D4D03AQH1Y0Zwv0dgNg/profile-displayphoto-shrink_800_800/0/1690364002577?e=1710374400&v=beta&t=1H__J_fN6LmXuOUSZxLnDbU8Or4S8q2cKAWNpAoqbhY' />
                        <Card.Body>
                            <Card.Title>Kemal Anıl Güvenç</Card.Title>
                            <Card.Text>
                                I am an undergraduate student computer engineering student at Doğuş University.
                                I am working on computer applications, Full stack web development with ASP.Net and Android (Java, Kotlin), cross platform(React Native) mobile applications.
                            </Card.Text>
                            <Card.Text>
                                Istanbul/Turkey
                            </Card.Text>
                        </Card.Body>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>Software Developer | C++ / C#</ListGroup.Item>
                            <ListGroup.Item>Mobile Application Developer | React Native / Kotlin</ListGroup.Item>
                            <ListGroup.Item>Full Stack Web Developer | React.js / HTML,CSS,JS / MSSQL / Asp.net</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/kemal-anil-guvenc/">LinkedIn</Card.Link>
                            <Card.Link href="https://github.com/Anilgvnc">GitHub</Card.Link>
                            <Card.Link href="https://stackoverflow.com/users/22662866/anilgvnc">Stack Overflow</Card.Link>
                            <Card.Link href='https://www.hackerrank.com/profile/anilgvnc'>HackerRank</Card.Link>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://www.instagram.com/anilgvnc/">Instagram</Card.Link>
                            <Card.Link href="#">Twitter</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Carousel className='slider'>
                        <Carousel.Item>
                            <Image src='https://media.licdn.com/dms/image/sync/D5627AQF4Nc12KLj_kg/articleshare-shrink_480/0/1703898182330?e=1705273200&v=beta&t=dUwpOgUCeG77HRUt6cbkE9wRpawPct7UB10WbLKBSY4' text="First slide" />
                            <Carousel.Caption>
                                <h3>Unet</h3>
                                <p>"Your Network" The purpose of our website is to create a portal where you can easily build and share your professional network or portfolio for job applications.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src='https://media.licdn.com/dms/image/D4D22AQH0wl5AHYUYBg/feedshare-shrink_2048_1536/0/1699349304663?e=1707350400&v=beta&t=fFeQxWWHwnCyNvW6ROzW4NW0UGsugZyYuYWqd9EnHOc' text="Certificate" />
                            <Carousel.Caption>
                                <h3>Certificate</h3>
                                <p>Web Programming 101:HTML</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src='https://media.licdn.com/dms/image/D4D2DAQFo52yCwgqzDA/profile-treasury-image-shrink_800_800/0/1701967872330?e=1705273200&v=beta&t=metc-Qy_ZNT5G0SpzOaRUQZAytqoDJ6TVmcmj9v6bRE' text="Certificate" />
                            <Carousel.Caption>
                                <h3>Certificate</h3>
                                <p>Engineering Career Summit '23</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Home;
