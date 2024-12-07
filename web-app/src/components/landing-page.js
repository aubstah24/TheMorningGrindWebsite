import { Button } from "semantic-ui-react";
import meme from "../images/coffee-meme.jpg";
import landingfiller1 from "../images/matcha_landing.png";
import landingfiller2 from "../images/boba_inside.jpg";
import headerBG from "../images/bg-landing-repeat.jpg";

export const LandingPage = () => {
  return (
    <div class="landing-wrapper">
      <section class="landing-heading">
        <img src={headerBG} alt="Heading Background" width="80%" />
        <h1>WELCOME TO OUR FAMILY</h1>
        <p>
          At Da Morning Grind, we’re more than just a coffee and boba shop –
          we’re a family-run oasis where community and flavor meet. Our passion
          for quality and care comes from our roots, and we pour that dedication
          into every drink we craft. From our rich, carefully brewed coffee to
          our refreshing boba teas, we’re here to create the perfect blend of
          taste and experience for you.
          <br />
          Whether you’re dropping by for your morning coffee, craving a midday
          pick-me-up, or just looking for a cozy spot to unwind, our doors are
          open, and our family is here to welcome you. Come sip, savor, and
          share in the warmth of Da Morning Grind – where every cup is made with
          love.
        </p>
        <Button color="black" href="/menu">
          SEE MENU
        </Button>
      </section>

      <div class="meme-board">
        <img src={meme} alt="Coffee Meme" />
      </div>

      <section id="animation-right" class="landing-highlights slide-right">
        <div class="landing-sections first">
          <h2>A taste of Hawai'i every morning ... </h2>
          <p>
            Supporting local is our vision and goal. We provide a variety of
            coffee beans sourced directly from our Big Island farms to give you
            the quality you need in the morning so you can grind during the day.{" "}
          </p>
        </div>

        <div class="landing-sections">
          <img src={landingfiller2} alt="Boba Shop Preview" width="400px" />
        </div>
      </section>
      <section id="animation-left" class="landing-highlights">
        <div class="landing-sections first">
          <img src={landingfiller1} alt="Matcha Powder" width="400px" />
        </div>
        <div class="landing-sections">
          <h2>Have a new suprise every month ...</h2>
          <p>
            We are on an island surrounded by bodies of water. We love our local
            farms and supporting local will always be our main goal. In addition
            to our wonderful coffee beans from the islands, we will have a
            special every month that brings other countries to you. Each month
            will have a brew from another country blend that you can't get here
            on grocery shelves.
          </p>
        </div>
      </section>
    </div>
  );
};
