/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import {
  Accordion,
  AccordionContent,
  AccordionTitle,
  Divider,
  Header,
  Icon,
} from "semantic-ui-react";
import familyPhoto from "../images/family-photo.jpg";
import { useState } from "react";

export const AboutUs = () => {
  const [activeState, setActiveState] = useState();

  const handleClick = (link) => {
    setActiveState(link);
  };

  return (
    <div className="about-us-wrapper">
      <div className="bio">
        <h1>OUR STORY</h1>
        <img src={familyPhoto} alt="about us photograph" />

        <p>
          We are a family-owned business and we wanted to provide affordable
          drinks while customers do their laundry. We call it sip n' wash! We
          take pride in our drink quality by going the extra lengths to ensure
          our ingredients are what we say they are.{" "}
        </p>
      </div>

      <Divider horizontal>
        <Header as="h2">
          <Icon name="question circle outline" />
          Frequently Asked Questions
        </Header>
      </Divider>

      <div>
        <Accordion fluid styled>
          <AccordionTitle
            active={activeState === 0}
            index={0}
            onClick={() => handleClick(0)}
          >
            <Icon name="dropdown" />
            What sizes do you have?
          </AccordionTitle>
          <AccordionContent active={activeState === 0}>
            <p>We have one size which is a 15oz cup!</p>
          </AccordionContent>

          <AccordionTitle
            active={activeState === 1}
            index={1}
            onClick={() => handleClick(1)}
          >
            <Icon name="dropdown" />
            Where is your parking located?
          </AccordionTitle>
          <AccordionContent active={activeState === 1}>
            <p>
              Our parking lot entrance is on the left side of Pensacola Street
              only. Please note that Pensacola is a one way. If that is full,
              you also have street parking along King.
            </p>
          </AccordionContent>

          <AccordionTitle
            active={activeState === 2}
            index={2}
            onClick={() => handleClick(2)}
          >
            <Icon name="dropdown" />
            What are your hours of operation?
          </AccordionTitle>
          <AccordionContent active={activeState === 2}>
            <p>
              We are open Monday - Friday from 9am-5pm. On the weekends, we are
              open from 11am-4pm.
            </p>
            <p>
              Please follow our instagram @daMG to stay up to date on changes
              such as holiday schedules.
            </p>
          </AccordionContent>
        </Accordion>
      </div>

      <div className="questionaire">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdwNSH4piDLrts-4qLLr_4g-Tf2Zm9YYLX4bJ8M5yCB74dhUw/viewform?embedded=true"
          width="640"
          height="1024"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};
