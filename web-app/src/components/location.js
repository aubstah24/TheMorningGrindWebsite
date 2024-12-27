/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const Location = () => {
  return (
    <div className="location-wrapper">
      <Divider horizontal>
        <h2>LOCATION</h2>
      </Divider>

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.2622214043995!2d-157.8481608888744!3d21.300652578302365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006de622644c77%3A0xea8e52bd8efc554e!2s1003%20Pensacola%20St%2C%20Honolulu%2C%20HI%2096814!5e0!3m2!1sen!2sus!4v1735342273042!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Link src="https://maps.app.goo.gl/kzDUXLz6dV3htUVC6">
          <h3>1003 Pensacola Street Honolulu, HI 96814</h3>
        </Link>

        <p>
          We are located at the intersection of Pensacola and King Street. Our
          parking entrance is on the left side of Pensacola.
        </p>
      </section>

      <Divider horizontal>
        <h2>STORE HOURS</h2>
      </Divider>

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
