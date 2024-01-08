import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Slider.css';

function Slider() {
    return (
        <Carousel className='slider'>
            <Carousel.Item>
                <a href='https://lnkd.in/gcZMdi2s'>
                    <Image src='https://media.licdn.com/dms/image/sync/D5627AQF4Nc12KLj_kg/articleshare-shrink_480/0/1703898182330?e=1705273200&v=beta&t=dUwpOgUCeG77HRUt6cbkE9wRpawPct7UB10WbLKBSY4' text="First slide" />
                    <Carousel.Caption>
                        <h3>Unet</h3>
                        <p>"Your Network" The purpose of our website is to create a portal where you can easily build and share your professional network or portfolio for job applications.</p>
                    </Carousel.Caption>
                </a>
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
            <Carousel.Item >
                <a href='https://www.dogus.edu.tr/'>
                    <Image src='https://www.dogus.edu.tr/docs/default-source/kurumsalkimlik/do%C4%9Fu%C5%9F-%C3%BCniversitesi-logo-(ingilizce).png?sfvrsn=d55bf913_20' text="School" />
                    <Carousel.Caption>
                        <h3>Doğuş University</h3>
                        <p>2020-2025 | Computer Engineering</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;