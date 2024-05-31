import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Sponsor } from "../../../lib/prepr";

type SponsorProps = {
  sponsors: Sponsor[];
};
const SponsorCard = (sponsor: Sponsor) => {
  return (
    <div
      className={
        "text-center mb-2 pb-2 sponsor-card sponsor-card-" +
        sponsor.sponsorship[0]?.css_selector
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
    if(!a.sponsorship[0])
      {
        return -1;
      }
    if(!b.sponsorship[0])
      {
        return -1;
      }
    return a.sponsorship[0].price - b.sponsorship[0].price;
  }).reverse();
  return (
    <Container>
      <h1 className="text-gradient text-primary text-center mb-3">
        Thank You To Our Sponsors
      </h1>
      <Row className="align-items-end">
        {sortedSponsors.filter(sponsor => sponsor?.featured).map((sponsorChunk, index) => {
          return (
            <Col
              key={index}
              xs={{ span: 10, offset: 1 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 4, offset: 1 }}
            >
              <SponsorCard {...sponsorChunk} />
            </Col>
          );
        })}
      </Row>
      <Row className="align-items-end">
        {sortedSponsors.filter(sponsor => !sponsor?.featured).map((sponsorChunk, index) => {
          return (
            <Col
              key={index}
              xs={{ span: 6, offset: 0 }}
              md={{ span: 4, offset: 0 }}
              lg={{ span: 2, offset: 0 }}
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
