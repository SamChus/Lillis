import store from "../assets/store.png";
import apple from "../assets/apple.png";
import insta from "../assets/insta-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import youtube from "../assets/youtub-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid grid--1x4 footer__start">
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Support</li>
          <li>Help Center</li>
          <li>Safety Center</li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>Cookies Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Dispute resolution</li>
        </ul>
        <ul>
          <li>Install App</li>
          <li>
            <img src={store} alt="download" />
          </li>
          <li>
            <img src={apple} alt="download" />
          </li>
        </ul>
      </div>
      <div className="grid grid--1x2 footer__end">
        <p>© 2021 LILIES, All rights reserved</p>
        <div>
          <span><img src={insta} alt="instagram" /></span>
          <span><img src={twitter} alt="twitter" /></span>
          <span><img src={youtube} alt="youtube" /></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
