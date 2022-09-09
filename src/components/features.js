import Feature from "./feature";
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import image4 from '../assets/image-4.png';


const Features = () => {
    return (  
        <div className="features">
            <div className="features__heading">
                <h2>Special Meals of the day!</h2>
                <p>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>
            </div>
            <div className="grid grid--1x3 feature">
                <Feature img={image2} text={"Stir fry pasta yada yada yada because of Sesan"} head={"Stir fry Pasta"}/>
                <Feature img={image3} text={"Stir fry pasta yada yada yada because of Sesan"} head={"Meat Balls"}/>
                <Feature img={image4} text={"Stir fry pasta yada yada yada because of Sesan"} head={"Burger Meal"}/>
            </div>
        </div>
    );
}
 
export default Features;