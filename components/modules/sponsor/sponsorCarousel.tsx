import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Sponsor } from "../../../lib/prepr";
import { json } from "stream/consumers";
import { chunk } from "lodash";

type SponsorProps = {
  sponsors: Sponsor[];
};
const SponsorCard = (sponsor: Sponsor) => {
  return (
    <div
      className={
        "text-center mb-2 pb-2 sponsor-card sponsor-card-" +
        sponsor.sponsorship[0].css_selector
      }
    >
      <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
        {" "}
        <img src={sponsor.logo[0].url} className="img-fluid" />
      </a>
    </div>
  );
};

function spliceIntoChunks(arr: Sponsor[], chunkSize) {
  const res = new Array<Array<Sponsor>>();
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

const SponsorCarousel = ({ sponsors }: SponsorProps) => {
  const sortedSponsors = sponsors.sort((a, b) => {
    return b.sponsorship[0].price - a.sponsorship[0].price;
  });
  return (
    <Container>
      <h1 className="text-gradient text-primary text-center mb-3">
        Thank You To Our Sponsors
      </h1>
      <Row className="align-items-end">
        {sortedSponsors.map((sponsorChunk, index) => {
          return (
            <Col
              xs={{ span: 8, offset: 2 }}
              md={{ span: 6, offset: 0 }}
              lg={{ span: 3, offset: 0 }}
            >
              <SponsorCard {...sponsorChunk} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SponsorCarousel;
export type { Sponsor };
