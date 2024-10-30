import { Button } from "semantic-ui-react"


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
                <div>
                    <h2>Travel with our roasts from around the world ... </h2>
                    <p>We brought the countries to you with our roasts from around the world.  We hand picked the best coffees and with different bodies so that you can find the right fit.  Our roasts include beans from Brazil, Puerto Rico, Japan, Ethiopia, and Seattle.</p>
                </div>

                <div>
                    <img src="../images/boba_inside.jpg" alt="Boba Shop Preview" width="" height=""></img>
                </div>
            </section>
            <section class="landing-highlights">
                <div>
                    <img src="../images/matcha_landing.png" alt="Matcha Powder" width="" height=""></img>
                </div>
                <div>
                    <h2>Travel with our roasts from around the world ... </h2>
                    <p>We brought the countries to you with our roasts from around the world.  We hand picked the best coffees and with different bodies so that you can find the right fit.  Our roasts include beans from Brazil, Puerto Rico, Japan, Ethiopia, and Seattle.</p>
                </div>
            </section>
        </div>
    )

}