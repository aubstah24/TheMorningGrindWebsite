import { Divider, Image, Segment } from "semantic-ui-react";
import location from "../images/location_filler.png";

export const Location = () => {
  return (
    <div classname="location-wrapper">
      <h2>LOCATION</h2>

      <Divider clearing />

      <section>
        <Image src={location} size="huge" alt={location} />
        <p>
          We are located at the intersection of Pensacola and King Street. Our
          parking entrance is on the left side of Pensacola.
        </p>
      </section>

      <section>
        <p>1003 Pensacola Street</p>
        <p>Honolulu, HI 96814</p>
      </section>

      <h4>STORE HOURS:</h4>
      <ul>
        <li>Sunday: 12pm - 5pm</li>
        <li>Monday: 11am - 3pm</li>
        <li>Tuesday: 11am - 3pm</li>
        <li>Wednesday: 11am - 3pm</li>
        <li>Thursday: 11am - 3pm</li>
        <li>Friday: 11am - 3pm</li>
        <li>Saturday: 12pm - 5pm</li>
      </ul>
    </div>
  );
};
