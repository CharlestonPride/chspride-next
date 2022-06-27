import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Card } from "react-bootstrap";
import Layout from "../components/elements/layout/layout";
import Lead from "../components/elements/lead/lead";
import ObliqueHeader from "../components/modules/header/obliqueHeader";
import CardHeader from "react-bootstrap/esm/CardHeader";

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625021244/parade2_zpui4d.jpg)`,
};

const Perk = ({ children }) => {
  return <td className="table-secondary">{children}</td>;
};

const Price = ({ children }) => {
  return <td className="font-weight-bolder">{children}</td>;
};

const Check = () => {
  return (
    <td>
      <FontAwesomeIcon icon={faCheck} />
    </td>
  );
};

const Value = ({ children, value }) => {
  return (
    <td>
      {children}
      <span className="d-block text-xs text-secondary">(${value} Value)</span>
    </td>
  );
};

const Sponsorships = () => {
  return (
    <Layout
      title="Become a Sponsor"
      description="Charleston Pride Sponsorship Opportunities"
    >
      <ObliqueHeader style={headerStyle}>
        <h1 className="text-gradient text-warning">Become a Sponsor</h1>
        <h1>
          Sponsorship is a great way to promote your commitment to equal rights
          for all!
        </h1>
      </ObliqueHeader>
      <Container className="mt-5">
        <Row>
          <Col>
            <h3>2022 Festival Sponsorship Packages</h3>
            <Lead>
              Charleston Pride is the Lowcountry’s largest non-profit
              organization that celebrates the LGBTQIA+ community. During our
              official Pride Week, participants can attend several events
              focused on both advocacy and education, while honoring our
              heritage and promoting our visibility. While the COVID-19 pandemic
              presented many challenges since our 2019 10th Anniversary
              celebration, Charleston Pride has found unique ways to celebrate,
              and with your financial support, we are excited to relaunch our
              annual Festival this Fall.
            </Lead>
            <Lead>
              Sponsorship is a great way to promote your commitment to equal
              rights for all! The annual Charleston Pride Festival is the
              best-attended event during Pride Week and it provides an
              opportunity to partner with local businesses, non-profits, and
              other LGBTQIA+ organizations whose mission is to bring awareness,
              promote diversity, and uplift the community. This year, the
              Charleston Pride Festival will be celebrating its 12th anniversary
              here in the Lowcountry and we would love to secure your support
              through Sponsorship!
            </Lead>
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
                      <th className="sponsor-red text-black">Red</th>
                      <th className="sponsor-orange  text-black">Orange</th>
                      <th className="sponsor-yellow  text-black">Yellow</th>
                      <th className="sponsor-green  text-black">Green</th>
                      <th className="sponsor-blue  text-black">Blue</th>
                      <th className="sponsor-purple  text-black">Purple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <Perk>Sponsorship Level</Perk>
                      <Price>$10,000</Price>
                      <Price>$7,500</Price>
                      <Price>$5,000</Price>
                      <Price>$2,500</Price>
                      <Price>$1,000</Price>
                      <Price>$500</Price>
                    </tr>
                    <tr>
                      <Perk>Exclusive Naming Rights</Perk>
                      <Check />
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Perk>Custom Social Media Posts</Perk>
                      <Check />
                      <Check />
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Perk>Volunteer T-Shirt Recognition</Perk>
                      <Check />
                      <Check />
                      <Check />
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Perk>Vendor Booth Plot (by Size)</Perk>
                      <Value value={750}>20x20</Value>
                      <Value value={750}>20x20</Value>
                      <Value value={300}>10x10</Value>
                      <Value value={300}>10x10</Value>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <Perk>VIP Pride Festival Ticket</Perk>
                      <Value value={500}>10</Value>
                      <Value value={400}>8</Value>
                      <Value value={300}>6</Value>
                      <Value value={200}>4</Value>
                      <Value value={100}>2</Value>
                      <Value value={50}>1</Value>
                    </tr>
                    <tr>
                      <Perk>2022 Pride Gift Bags</Perk>
                      <Value value={750}>10</Value>
                      <Value value={600}>8</Value>
                      <Value value={450}>6</Value>
                      <Value value={300}>4</Value>
                      <Value value={150}>2</Value>
                      <Value value={75}>1</Value>
                    </tr>
                    <tr>
                      <Perk>VIP Ticket to Prism Party</Perk>
                      <Value value={1000}>10</Value>
                      <Value value={800}>8</Value>
                      <Value value={600}>6</Value>
                      <Value value={400}>4</Value>
                      <Value value={200}>2</Value>
                      <Value value={100}>1</Value>
                    </tr>
                    <tr>
                      <Perk>Logo Attribution on Website</Perk>
                      <Check />
                      <Check />
                      <Check />
                      <Check />
                      <Check />
                      <Check />
                    </tr>
                    <tr>
                      <Perk>Charleston Pride Sponsor Badge</Perk>
                      <Check />
                      <Check />
                      <Check />
                      <Check />
                      <Check />
                      <Check />
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
                <h3 className="">Sponsorship Registration</h3>
              </Card.Header>
              <Card.Body>
                <iframe
                  src="https://forms.donorsnap.com/form?id=54b257fd-96ee-4d89-bf45-6000e1a71b28"
                  height="650"
                  width="99%"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Sponsorships;
