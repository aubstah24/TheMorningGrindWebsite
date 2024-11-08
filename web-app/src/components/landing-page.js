import { Button } from "semantic-ui-react";
import landingfiller1 from '../images/matcha_landing.png';
import landingfiller2 from '../images/boba_inside.jpg';
import headerBG from '../images/bg-landing-repeat.jpg';

export const LandingPage = () => {

    return (
        <div class="landing-wrapper">
          
            <section class="landing-heading">
                <img src={headerBG} alt="Heading Background" width="80%"/>
                <h1>WELCOME TO OUR FAMILY</h1>
                <p>Welcome to our family-owned business. We provide delicious coffee & espresso made from locally grown beans on the Big Island.  In addition, we have boba drinks that include milk teas & fruit teas! </p>
                <Button color="black" href="/menu">SEE MENU</Button>
            </section>

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