

const Callout = () => {
    return (  
        <div className="grid grid--1x2 callout">
            <div className="callout__desc">
                <h2>Get notified when we update!</h2>
                <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
            </div>
            <div className="callout__input">
                <input type="email" placeholder="example@gmail.com"/>
                <button className="btn btn-lg btn__primary">Get notified</button>
            </div>
        </div>
    );
}
 
export default Callout;