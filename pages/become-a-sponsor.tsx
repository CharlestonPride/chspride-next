import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card } from "react-bootstrap";
import Layout from "../components/elements/layout/layout";
import Lead from "../components/elements/lead/lead";
import ObliqueHeader from "../components/modules/header/obliqueHeader";
import {
  SponsorshipPage,
  getSponsorships,
  getSponsorshipsPage,
} from "../lib/prepr";
import { InferGetStaticPropsType } from "next";
import { titleCase } from "../utils/utils";

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625021244/parade2_zpui4d.jpg)`,
};

const Perk = ({ children }) => {
  return <td className="table-secondary">{children}</td>;
};

const Price = ({ children }) => {
  return <td className="font-weight-bolder">${children}</td>;
};

const Check = ({ value }) => {
  return <td>{value && <FontAwesomeIcon icon={faCheck} />}</td>;
};

const Value = ({ children, value }) => {
  return (
    <td>
      {children}
      {!!value && (
        <span className="d-block text-xs text-secondary">(${value} Value)</span>
      )}
    </td>
  );
};

const Registration = (page: SponsorshipPage) => {
  if (page.registration) {
    return (
      <iframe
        src={page.registration_form.url}
        height={page.registration_form.height}
        width={page.registration_form.width}
      />
    );
  }
  return <div className="text-center">{page.closed_message}</div>;
};
const getBoothValue = (sponsorship, page) => {
  switch (sponsorship.vendor_plot_size) {
    case "20x20":
      return page.large_plot_value;
    case "10x10":
      return page.small_plot_value;
    default:
      return 0;
  }
};

const Sponsorships = ({
  page,
  sponsorships,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title={page.title} description={page.description}>
      <ObliqueHeader style={headerStyle}>
        <h1 className="text-gradient text-warning">{page.title}</h1>
        <h1>{page.description}</h1>
      </ObliqueHeader>
      <Container className="mt-5">
        <Row>
          <Col>
            <h3>{page.subtitle}</h3>
            <Lead>{page.call_to_action}</Lead>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mt-4">
              <div className="table-responsive text-center">
                <table className="table align-items-center mb-0 table-hover">
                  <thead>
                    <tr>
                      <th></th>
                      {sponsorships.items.map((sponsorship, index) => {
                        return (
                          <th
                            key={index}
                            className={
                              "sponsor-" +
                              sponsorship.level.toLowerCase() +
                              " text-black"
                            }
                          >
                            {titleCase(sponsorship.level)}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <Perk>Sponsorship Level</Perk>
                      {sponsorships.items.map((sponsorship, index) => {
                        return <Price key={index}>{sponsorship.price}</Price>;
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.naming_rights}</Perk>
                      {sponsorships.items.map((sponsorship) => {
                        return <Check value={sponsorship.naming_rights} />;
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.media_posts}</Perk>
                      {sponsorships.items.map((sponsorship) => {
                        return <Check value={sponsorship.media_posts} />;
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.tshirt_recognition}</Perk>
                      {sponsorships.items.map((sponsorship) => {
                        return <Check value={sponsorship.tshirt_recognition} />;
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.vendor_plot}</Perk>
                      {sponsorships.items.map((sponsorship) => {
                        return (
                          <Value value={getBoothValue(sponsorship, page)}>
                            {sponsorship.vendor_plot_size !== "NA"
                              ? sponsorship.vendor_plot_size
                              : ""}
                          </Value>
                        );
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.festival_ticket}</Perk>
                      {sponsorships.items.map((sponsorship) => {
                        return (
                          <Value
                            value={
                              sponsorship.festival_tickets *
                              page.festival_ticket_value
                            }
                          >
                            {sponsorship.festival_tickets}
                          </Value>
                        );
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.swag_bags}</Perk>
                      {sponsorships.items.map((sponsorship) => {
                        return (
                          <Value
                            value={sponsorship.swag_bags * page.swag_bag_value}
                          >
                            {sponsorship.swag_bags}
                          </Value>
                        );
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.prism_ticket}</Perk>
                      {sponsorships.items.map((sponsorship) => {
                        return (
                          <Value
                            value={
                              sponsorship.prism_tickets *
                              page.prism_ticket_value
                            }
                          >
                            {sponsorship.prism_tickets}
                          </Value>
                        );
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.logo_attribution}</Perk>
                      {sponsorships.items.map(() => {
                        return <Check value={true} />;
                      })}
                    </tr>
                    <tr>
                      <Perk>{page.sponsorship_badge}</Perk>
                      {sponsorships.items.map(() => {
                        return <Check value={true} />;
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="m-5 text-center">
                For a custom Sponsorship or more information, contact the
                Director of Sponsorships at{" "}
                <a href="mailto:sponsorships@charlestonpride.org">
                  sponsorships@charlestonpride.org
                </a>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mt-4">
              <Card.Header>
                <h3>Sponsorship Registration</h3>
              </Card.Header>
              <Card.Body>
                <Registration {...page} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const page = await getSponsorshipsPage();
  const sponsorships = await getSponsorships();

  return {
    props: { page, sponsorships },
  };
}

export default Sponsorships;
