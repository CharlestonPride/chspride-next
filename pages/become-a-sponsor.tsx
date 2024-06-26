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

const HeaderStyle = (url: string) => {
  return {backgroundImage: `url(${url})`}
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
  page
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title={page.title} description={page.description}>
      <ObliqueHeader style={HeaderStyle(page.background_image.url)}>
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
            <img src={page.package_image.url} className='img-fluid' />
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

  return {
    props: { page },
  };
}

export default Sponsorships;
