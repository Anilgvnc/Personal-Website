import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Slider.css';

function Slider() {
    return (
        <Carousel className='slider'>
            <Carousel.Item>
                <a href='https://lnkd.in/gcZMdi2s'>
                    <Image className='slider-img' src='https://avatars.githubusercontent.com/u/149464723?s=400&u=e41a40b389f6c2d7f67a8155697f4772b3546305&v=4' text="First slide" width='512px' height='384px' rounded />
                    <Carousel.Caption>
                        <h3 className='slider-text'>Unet</h3>
                        <p className='slider-text'>"Your Network" The purpose of our website is to create a portal where you can easily build and share your professional network or portfolio for job applications.</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://academy.patika.dev/tr/certificates/7859d211'>
                    <Image className='slider-img' src='https://patika-prod.s3.eu-central-1.amazonaws.com/certificates/7859d211' text="Certificate" width='512px' height='384px' rounded />
                    <Carousel.Caption>
                        <h3 className='slider-text'>Certificate</h3>
                        <p className='slider-text'>Beginner Web Programming Path - Patika.dev</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='https://academy.patika.dev/tr/certificates/9123103b'>
                    <Image className='slider-img' src='https://patika-prod.s3.eu-central-1.amazonaws.com/certificates/9123103b' text="Certificate" width='512px' height='384px' rounded />
                    <Carousel.Caption>
                        <h3 className='slider-text'>Certificate</h3>
                        <p className='slider-text'>Career Paths For Software Developers - Patika.dev</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item >
                <a href='https://www.dogus.edu.tr/'>
                    <Image className='slider-img' src='https://www.dogus.edu.tr/docs/default-source/kurumsalkimlik/do%C4%9Fu%C5%9F-%C3%BCniversitesi-logo-(ingilizce).png?sfvrsn=d55bf913_20' text="School" width='512px' height='384px' rounded />
                    <Carousel.Caption>
                        <h3 className='slider-text'>Doğuş University</h3>
                        <p className='slider-text'>2020-2025 | Computer Engineering</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;