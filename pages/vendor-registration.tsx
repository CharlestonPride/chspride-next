import React from "react";
import Layout from "../components/elements/layout/layout";
import { Col, Row } from "react-bootstrap";
import CloudImage from "../components/elements/cloudImage/cloudImage";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";

const VendorRegistration = () => {
  return (
    <Layout
      title="Charleston Pride Festival 2024 Vendor Registration"
      description="Vendor registration for the Charleston Pride Festival 2024."
    >
      <ExternalFrame
        title="Charleston Pride Festival 2024 Vendor Registration"
        color="primary"
        iframeSrc="https://registration.planningpod.com?ssid=MTEyNjkzMQ=="
        iframeHeight="3000px"
      >
        <Row>
          <Col xs="10" lg="6" className="mx-auto py-5 text-lg-left text-center">
            <p className="lead">
              The Charleston Pride Festival will be held at{" "}
              <strong>The Refinery</strong> (1640 Meeting Street) in Charleston
              on <strong>Saturday, September 21, 2024</strong>.
            </p>
            <p className="lead">
              Being a vendor is a great way to promote your organization and/or
              company’s commitment to equal rights for all Charlestonians!
              Additionally, a booth at the Pride Festival will promote your
              organization and/or company among a deeply diverse group of
              individuals. In 2019, during our 10th Anniversary, we had an
              estimated 7,500+ attendants! These attendees were not only gay,
              lesbian, bisexual, or transgender, but also allied individuals who
              appreciate the values of equality. By being at the Charleston
              Pride Festival, you can increase your organization and/or
              company’s visibility among much of Charleston’s residents.
            </p>
          </Col>
          <Col
            xs={{ span: 8, offset: 2 }}
            lg="4"
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto"
          >
            <CloudImage
              className="w-100 border-radius-lg shadow"
              imageId="/5g4b8macyeli-charleston-pride-festival-2024-annoucement.jpg"
            ></CloudImage>
          </Col>
        </Row>

        <Row>
          <Col>
            <CloudImage className="w-100 border-radius-lg shadow"
              imageId="/4gj6dunsvvs3-vendorbooths.jpg"></CloudImage>
          </Col>
        </Row>
        <div className="card my-3">
          <div className="card-body">
            <h4 className="card-title">Vendor Fees:</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>10x10 Vendor Plot:</strong> Fees for a 10x10 vendor plot range between $100 and $500
                depending upon vendor's choice of placement within the Refinery property and proximity to the main stage. Nonprofits can apply at the reduced rate of 50%.
              </li>
              <li className="list-group-item">
                <strong>10x10 Premium 1:</strong> $500 Main Stage Lawn
              </li>
              <li className="list-group-item">
                <strong>10x10 Premium 2:</strong> $400 Cleats Concours
              </li>
              <li className="list-group-item">
                <strong>10x10 Premium 3:</strong> $300 Entry Drive
              </li>
              <li className="list-group-item">
                <strong>10x10 Parking Lot:</strong> $100 Refinery Gravel Lot
              </li>
              <li className="list-group-item">
                <strong>20x20 Vendor Plot:</strong> A limited number of 20x20 vendor plots will also be available at $750. Placement will be at the discretion of Charleston Pride. Nonprofits can apply at the reduced rate of $375.
              </li>
              <li className="list-group-item">
                If electrical hookup is needed via generator rental, a $75 fee [10x10] or $150 [20x20] will be added to the vendor's registration. Generators will be provided on-site the day of the Festival. Electrical availability is limited, and Charleston Pride reserves the right to cap the number of power slots.
              </li>
              <li className="list-group-item">
                <strong>Note:</strong> Charleston Pride only provides the plot for a vendor space and does not supply tents, tables or chairs. Payments are non-refundable in case of weather cancellation. Your registration will roll over to the 2025 or future Festival.
              </li>
            </ul>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-body">
            <h4 className="card-title">Food Trucks:</h4>
            <p className="card-description">
              Due to limited capacity and to ensure a variety of cuisine, food trucks must be approved first. Please send an email to <a href="mailto:festival@charlestonpride.org">festival@charlestonpride.org</a> to apply along with your expected food menu. After your acceptance you will receive instructions on how to pay for your spot.
            </p>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-body">
            <h4 className="card-title">Vendor Guidelines:</h4>
            <p className="card-description">
              The Refinery is a different venue from the past several festivals,
              and certain rules have changed, so please read carefully. You will
              get more specific information closer to the festival, but below
              are some initial guidelines.
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                Load-in will be on the day of the festival, and will begin at 8am. Tentative festival times are from 12PM to 6PM. Load-out will begin after 6:15pm.
              </li>
              <li className="list-group-item">
                Tents are to be 10x10 ft [or 20x20 ] with straight legs, not
                angled.
              </li>
              <li className="list-group-item">
                Vendors will be allowed 10-15 minutes to unload. This does not
                include your setup time, there should be ample time to erect
                tents and setup displays etc.
              </li>
              <li className="list-group-item">
                If selling a product, the South Carolina Department of Revenue
                requires your Retail License to be displayed at all times.
              </li>
              <li className="list-group-item">
                Charleston Pride Festival, Inc. requires you to be insured for
                at least $1 million to cover any liability. If you do not have
                coverage, you take responsibility for covering any claims.{" "}
              </li>
              <li className="list-group-item">
                Charleston Pride Festival, Inc., nor the City of Charleston,
                takes any responsibility or liability for any damage to your
                product, person, or equipment.
              </li>
              <li className="list-group-item">
                All documentation, ie. proof of non-profit status, insurance
                information, etc. must be on file with Charleston Pride Festival
                by November 5th. Information can be uploaded during or after
                registration.
              </li>
              <li className="list-group-item">
                Sale of alcohol is not permitted and is the sole right of
                Charleston Pride Festival Inc.{" "}
              </li>
              <li className="list-group-item">
                Vendors are responsible for cleaning up their area, disposing
                and hauling off any trash.
              </li>
              <li className="list-group-item">
                Vendor packets will be sent to the email address on-file one
                weeks prior to the Festival.
              </li>
            </ul>
          </div>
        </div>

        <p className="lead text-center my-3">
          We are excited for a great 2024 Pride Festival and look forward to
          your participation! If you have any questions, please feel free to
          contact us at{" "}
          <a href="mailto:festival@charlestonpride.org">
            festival@charlestonpride.org
          </a>
          .
        </p>
      </ExternalFrame>
    </Layout>
  );
};

export default VendorRegistration;
