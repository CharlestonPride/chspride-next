import { InferGetStaticPropsType } from "next";
import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import CloudImage from "../components/elements/cloudImage/cloudImage";
import Layout from "../components/elements/layout/layout";
import Lead from "../components/elements/lead/lead";
import ObliqueHeader from "../components/modules/header/obliqueHeader";
import { Schedule, Event } from "../components/modules/prideGuide/schedule";
import SponsorCarousel, {
  Sponsor,
} from "../components/modules/sponsor/sponsorCarousel";

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625021244/stage_dbk4bc.jpg)`,
};

const Festival = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1
            className="text-center text-gradient text-primary my-3"
            id="festival"
          >
            Charleston Pride Festival
          </h1>
          <Lead>
            The Charleston Pride Festival will be held at The Refinery (1640
            Meeting Street Road) in Charleston on Saturday, November 12, 2022
            from 12-6 pm. This year's event is full of fun for all ages
            including a curated selection of live entertainment, local food
            trucks, specialty drinks, and amazing vendors! You don't want to
            miss this!
          </Lead>
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="6">
          <Lead>
            The festival will feature drag performances by Emperor Don Javi,
            Empress Kymmya Starr, Sovereign Jonlly R St. Martin, Mr. Outfest
            D'Wess Lefaris, Miss Outfest Gouda Judy, Luscious, Leslie Lane,
            Kylee Lovlee, Ebony Wood, Mira Shatters, and Medusa Chaos. Aerial
            showcase hosted by Scarlett Ray with aerialists from Uptown Aerial,
            Aerial Fit, and Out on a Limb. Music by DJ JT-RAZOR and Singer Becky
            Rasman.
          </Lead>
        </Col>
        <Col xs="12" lg="6">
          <CloudImage
            imageId="2022/festivalmap_iyosfv"
            className="img-fluid shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

const Prism = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1
            className="text-center text-gradient text-primary my-3"
            id="prism"
          >
            Prism
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="6">
          <Lead>
            Charleston Pride's premier party is back and better than ever!
            Celebrate with 5 hours of dancing, drag, and drinking. Food trucks
            will be on-site throughout the event.
          </Lead>
        </Col>
        <Col xs="12" lg="6">
          <CloudImage
            imageId="2022/prismmap_ccslog"
            className="img-fluid shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

const Faq = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header as="h4">
                Is the Festival a ticketed event?
              </Accordion.Header>
              <Accordion.Body>
                General admission for the Charleston Pride Festival is free of
                charge. VIP tickets are available for $65. You can read more{" "}
                <a
                  href="https://www.ticketweb.com/event/charleston-pride-festival-the-refinery-tickets/12605025"
                  target="_blank"
                >
                  here
                </a>
                .
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header as="h4">Where can I park?</Accordion.Header>
              <Accordion.Body>
                Street parking is available along Meeting Street Road. There is
                also a parking lot and parking garage available at The Quin
                (1940 Algonquin Road, Charleston, SC 29405), which is less than
                10 minutes walking distance. Where possible, the use of ride
                share is encouraged. ADA parking is available on site at the
                Refinery.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header as="h4">Can I bring a bag?</Accordion.Header>
              <Accordion.Body>
                <div>
                  Charleston Pride is adhering to the{" "}
                  <a href="https://www.therefinerychs.com/faq" target="blank">
                    Refinery’s bag policies
                  </a>
                  . ALL bags will be searched before entry. Upon arrival, please
                  have your bags available for review. Bags with multiple
                  pockets are not allowed.
                </div>
                <div>
                  The following bags are ALLOWED:
                  <ul>
                    <li>
                      Clutch bags, waist pack, and fanny packs with no more than
                      one compartment. Clutches that are not clear must be no
                      larger than 6.5” by 5.5”.
                    </li>
                    <li>
                      Hydration packs that are emptied of all liquid and have no
                      more than 2 pockets in addition to the one holding the
                      water reservoir.
                    </li>
                    <li>Medical and diaper bags</li>
                    <li>1 gallon or smaller clear freezer bags</li>
                  </ul>
                  All other bags must be clear and no larger than 12”x12”x6”.
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header as="h4">Can I bring a cooler?</Accordion.Header>
              <Accordion.Body>
                No outside food or beverages are allowed. Concessions will offer
                beer, liquor, and non-alcoholic beverages, and there will be a
                wide variety of food trucks available.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header as="h4">Can I bring a chair?</Accordion.Header>
              <Accordion.Body>
                Due to space limitations, please do not bring a chair into the
                event. There will be limited picnic table seating available for
                general admission guests. VIP guests will have access to lounge
                seating and bar stools.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header as="h4">Can I bring my pet?</Accordion.Header>
              <Accordion.Body>
                Charleston Pride is adhering to the{" "}
                <a href="https://www.therefinerychs.com/faq" target="_blank">
                  Refinery’s pet policies
                </a>
                . Pets are not allowed at the Charleston Pride Festival, with
                the exception of service animals as defined by ADA. Service
                animals must be leashed and remain with their owner.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header as="h4">
                Is there a Festival map?
              </Accordion.Header>
              <Accordion.Body>
                <CloudImage
                  imageId="2022/festivalmap_iyosfv"
                  className="img-fluid shadow"
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header as="h4">
                What is the Festival entertainment line-up?
              </Accordion.Header>
              <Accordion.Body>
                The festival will feature drag performances by Emperor Don Javi,
                Empress Kymmya Starr, Sovereign Jonlly R St. Martin, Mr. Outfest
                D'Wess Lefaris, Miss Outfest Gouda Judy, Luscious, Leslie Lane,
                Kylee Lovlee, Ebony Wood, Mira Shatters, and Medusa Chaos.
                Aerial showcase hosted by Scarlett Ray with aerialists from
                Uptown Aerial, Aerial Fit, and Out on a Limb. Music by DJ
                JT-RAZOR and Singer Becky Rasman.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header as="h4">Is there a Prism map?</Accordion.Header>
              <Accordion.Body>
                <CloudImage
                  imageId="2022/prismmap_ccslog"
                  className="img-fluid shadow"
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header as="h4">What if it rains?</Accordion.Header>
              <Accordion.Body>
                Both the Charleston Pride Festival and Prism Party are rain or
                shine events.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

function PrideGuide({
  events,
  sponsors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="Charleston Pride Guide 2022"
      description="Charleston Pride Week - November 6-13, 2022"
    >
      <ObliqueHeader style={headerStyle}>
        <h1 className="text-gradient text-primary">Charleston Pride Guide</h1>
        <h1>Pride Week</h1>
        <h2>November 6-13, 2022</h2>
      </ObliqueHeader>

      <Alert variant="danger" className="my-4">
        <h2 className="text-center text-white">
          Due to weather, Prism has been rescheduled to Saturday, November 12,
          6-11 pm
        </h2>
      </Alert>

      <SponsorCarousel sponsors={sponsors} />
      <hr className="horizontal dark" />
      <Schedule events={events} />
      <hr className="horizontal dark" />
      <Festival />
      <hr className="horizontal dark" />
      <Prism />
      <hr className="horizontal dark" />
      <Faq />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const resEvents = await fetch(
    "https://chspride-api.azurewebsites.net/api/Events"
  );
  const events: Event[] = await resEvents.json();
  events.sort((a, b) => a.order - b.order);
  const resSponsors = await fetch(
    "https://chspride-api.azurewebsites.net/api/Sponsors"
  );
  const sponsors: Sponsor[] = await resSponsors.json();
  return {
    props: {
      events,
      sponsors,
    },
  };
};

export default PrideGuide;
