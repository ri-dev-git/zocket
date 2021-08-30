import Zocket from "./icons/Zocket-logo.png";
import ig from "./icons/BG.svg";
import tweet from "./icons/tweet.svg";
import yt from "./icons/yout.svg";

import gg from './icons/gea12.svg'
import './css/footer.css'


const Footer = () => {

    return (
        <div className="footer" id="contact">
            <div className="footer1">
                <img src={Zocket} className="Zfooter" alt="/"/>
                <p className="cop">Copyright &copy; 2021 Zocket</p>
                <p className="arr">All rights reserved</p>
                <img src={ig} className="ig" alt="/"/>
                <img src={tweet} className="tweet" alt="/"/>
                <img src={yt} className="yout" alt="/"/>
            </div>
            <div className="footer2">
                <p id="company">Company</p>
                <p id="Ab">About us</p>
                <p id="blog">Blog</p>
                <p id="Cu">Contact us</p>
                <p id="Pricing">Pricing</p>
                <p id="testimonials">Testimonials</p>
                </div>
            <div className="footer3">
                <p id="support">Support</p>
                <p id="hc">Help center</p>
                <p id="tos">Terms of service</p>
                <p id="legal">Legal</p>
                <p id="pp">Privacy policy</p>
                <p id="status">Status</p>
            </div>
            <div className="footer4">
                <img src={gg} alt="/" className="gg"/>
                
            </div>

        </div>
    )
}

export default Footer
