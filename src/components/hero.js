import playstore from '../assets/playstore.svg';
import heroImage from '../assets/image-1.png';

const Hero = () => {
    return (  
        <div className="grid grid--1x2 hero">
            <div className="hero__desc">
                <h1>Order <span>food</span> anytime, anywhere</h1>
                <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
                <img src={playstore} alt="playstore" />
            </div>
            <div className="hero__image">
                <img src={heroImage} alt="food" />
            </div>
        </div>
    );
}
 
export default Hero;