import { Button } from "semantic-ui-react";
import meme from '../images/coffee-meme.jpg';
import landingfiller1 from '../images/matcha_landing.png';
import landingfiller2 from '../images/boba_inside.jpg';
import headerBG from '../images/bg-landing-repeat.jpg';

export const LandingPage = () => {

    return (
        <div class="landing-wrapper">
          
            <section class="landing-heading">
                <img src={headerBG} alt="Heading Background" width="80%"/>
                <h1>WELCOME TO OUR FAMILY</h1>
                <p>At Da Morning Grind, we’re more than just a coffee and boba shop – we’re a family-run oasis where community and flavor meet. Our passion for quality and care comes from our roots, and we pour that dedication into every drink we craft. From our rich, carefully brewed coffee to our refreshing boba teas, we’re here to create the perfect blend of taste and experience for you.

                <br/>

                Whether you’re dropping by for your morning coffee, craving a midday pick-me-up, or just looking for a cozy spot to unwind, our doors are open, and our family is here to welcome you. Come sip, savor, and share in the warmth of Da Morning Grind – where every cup is made with love.</p>
                <Button color="black" href="/menu">SEE MENU</Button>
            </section>


            <div class="meme-board">
                <img src={meme} alt="Coffee Meme"/>
            </div>


            <section class="landing-highlights">
                <div class="landing-sections">
                    <h2>A taste of Hawai'i every morning ... </h2>
                    <p>Supporting local is our vision and goal.  We provide a variety of coffee beans sourced directly from our Big Island farms to give you the quality you need in the morning so you can grind during the day.  </p>
                </div>

                <div class="landing-sections">
                    <img src={landingfiller2} alt="Boba Shop Preview" width="400px"/> 
                </div>
            </section>
            <section class="landing-highlights">
                <div class="landing-sections">
                    <img src={landingfiller1} alt="Matcha Powder" width="400px"/>
                </div>
                <div class="landing-sections">
                    <h2>Travel with our roasts from around the world ... </h2>
                    <p>We brought the countries to you with our roasts from around the world.  We hand picked the best coffees and with different bodies so that you can find the right fit.  Our roasts include beans from Brazil, Puerto Rico, Japan, Ethiopia, and Seattle.</p>
                </div>
            </section>
        </div>
    )

}