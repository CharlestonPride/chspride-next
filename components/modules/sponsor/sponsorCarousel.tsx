import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SponsorLevels } from "../../../types";

type SponsorProps = {
  sponsors: Sponsor[];
};

type Sponsor = {
  logo: string;
  level: string;
};

const SponsorCard = ({ logo, level }: Sponsor) => {
  const src = "https://chaspride.blob.core.windows.net/sponsors/" + logo;
  return (
    <div className={"text-center pb-2 sponsor-card sponsor-card-" + level}>
      <img src={src} className="img-fluid" />
    </div>
  );
};

function getNumericLevel(sponsor: Sponsor): number {
  switch (sponsor.level) {
    case "red":
      return 5;
    case "orange":
      return 4;
    case "yellow":
      return 3;
    case "green":
      return 2;
    case "blue":
      return 1;
    default:
      return 0;
  }
}

function spliceIntoChunks(arr, chunkSize) {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

const SponsorCarousel = ({ sponsors }: SponsorProps) => {
  const sortedSponsors = sponsors.sort((a, b) => {
    return getNumericLevel(a) - getNumericLevel(b);
  });
  const chunkedSponsors: Sponsor[][] = spliceIntoChunks(sortedSponsors, 3);

  return (
    <Container>
      {chunkedSponsors.map((sponsorChunk, index) => {
        <Row className="align-items-end">
          <Col>
            <SponsorCard {...sponsorChunk[0]} />
          </Col>
          <Col>
            {sponsorChunk.length > 1 && <SponsorCard {...sponsorChunk[1]} />}
          </Col>
          <Col>
            {sponsorChunk.length > 2 && <SponsorCard {...sponsorChunk[2]} />}
          </Col>
        </Row>;
      })}
    </Container>
  );
};

export default SponsorCarousel;
export type { Sponsor };