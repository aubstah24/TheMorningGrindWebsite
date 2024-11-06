import { Button } from "semantic-ui-react";
import landingfiller1 from '../images/matcha_landing.png';
import landingfiller2 from '../images/boba_inside.jpg';


export const LandingPage = () => {

    return (
        <div class="landing-wrapper">
            <section class="landing-heading">
                <h1>WELCOME TO OUR FAMILY</h1>
                <p>Welcome to our family-owned boba shop. We sell coffee, espresso, boba teas, and boba milk
                teas. </p>
                <Button color="black" href="/menu">SEE MENU</Button>
            </section>


            <section class="landing-highlights">
                <div class="landing-sections">
                    <h2>Travel with our roasts from around the world ... </h2>
                    <p>We brought the countries to you with our roasts from around the world.  We hand picked the best coffees and with different bodies so that you can find the right fit.  Our roasts include beans from Brazil, Puerto Rico, Japan, Ethiopia, and Seattle.</p>
                </div>

                <div class="landing-sections">
                    <img src={landingfiller2} alt="Boba Shop Preview" width="600px"/> 
                </div>
            </section>
            <section class="landing-highlights">
                <div class="landing-sections">
                    <img src={landingfiller1} alt="Matcha Powder" width="600px"/>
                </div>
                <div class="landing-sections">
                    <h2>Travel with our roasts from around the world ... </h2>
                    <p>We brought the countries to you with our roasts from around the world.  We hand picked the best coffees and with different bodies so that you can find the right fit.  Our roasts include beans from Brazil, Puerto Rico, Japan, Ethiopia, and Seattle.</p>
                </div>
            </section>
        </div>
    )

}