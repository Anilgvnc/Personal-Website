import { FaLinkedin, FaGithub, FaInstagram, FaHackerrank, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import './SocialCard.css';

function SocialCard() {
    return (
        <div class="social-card">
            <a class="socialContainer containerOne" href="https://www.instagram.com/anilgvnc/">
                <svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <FaInstagram /> </svg>
            </a>

            <a class="socialContainer containerTwo" href="https://twitter.com/Anilgvnc">
                <svg viewBox="0 0 16 16" class="socialSvg twitterSvg"><FaTwitter /></svg>
            </a>

            <a class="socialContainer containerThree" href="https://www.linkedin.com/in/kemal-anil-guvenc/">
                <svg viewBox="0 0 16 16" class="socialSvg linkdinSvg"> <FaLinkedin /> </svg>
            </a>

            <a class="socialContainer containerFour" href="https://github.com/Anilgvnc">
                <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg"> <FaGithub /> </svg>
            </a>

            <a class="socialContainer containerFive" href="https://stackoverflow.com/users/22662866/anilgvnc">
                <svg viewBox="0 0 16 16" class="socialSvg"> <FaStackOverflow /></svg>
            </a>

            <a class="socialContainer containerSix" href="https://www.hackerrank.com/profile/anilgvnc">
                <svg viewBox="0 0 16 16" class="socialSvg"> <FaHackerrank /></svg>
            </a>

            <a class="socialContainer containerSeven" href="https://leetcode.com/u/anilgvnc/">
                <svg viewBox="0 0 16 16" class="socialSvg"> <SiLeetcode /></svg>
            </a>
        </div>


    );
}

export default SocialCard;