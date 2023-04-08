import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card } from "react-bootstrap";
import Layout from "../components/elements/layout/layout";
import Lead from "../components/elements/lead/lead";
import ObliqueHeader from "../components/modules/header/obliqueHeader";
import { getSponsorships, getSponsorshipsPage } from "../lib/prepr";
import { InferGetStaticPropsType } from "next";
import { titleCase } from "../utils/utils";

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625021244/parade2_zpui4d.jpg)`,
};

type SponsorshipPage = {
  title: string;
  description: string;
  subtitle: string;
  call_to_action: string;
  registration: boolean;
  registration_form: {
    height: string;
    url: string;
    width: string;
  };
  closed_message: string;
  naming_rights: string;
  media_posts: string;
  tshirt_recognition: string;
  vendor_plot: string;
  festival_ticket: string;
  swag_bags: string;
  prism_ticket: string;
  logo_attribution: string;
  sponsorship_badge: string;
  festival_ticket_value: number;
  swag_bag_value: number;
  prism_ticket_value: number;
  large_plot_value: number;
  small_plot_value: number;
};

type Sponsorships = {
  total: number;
  items: [
    {
      _id: string;
      level: string;
      price: number;
      naming_rights: boolean;
      media_posts: boolean;
      tshirt_recognition: boolean;
      vendor_plot_size: string;
      festival_tickets: number;
      swag_bags: number;
      prism_tickets: number;
    }
  ];
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
                      {sponsorships.items.map((sponsorship) => {
                        return (
                          <th
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
                      {sponsorships.items.map((sponsorship) => {
                        return <Price>{sponsorship.price}</Price>;
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
  const page = (await getSponsorshipsPage()) as SponsorshipPage;
  const sponsorships = (await getSponsorships()) as Sponsorships;

  return {
    props: { page, sponsorships },
  };
}

export default Sponsorships;
