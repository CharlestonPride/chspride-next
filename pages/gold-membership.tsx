import React from "react";
import Layout from "../components/elements/layout/layout";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";
import { Row, Col } from "react-bootstrap";

const GoldMembership = () => {
  return (
    <Layout
      title="Charleston Pride 2023 Gold Membership"
      description="Charleston Pride 2023 Gold Membership"
    >
      <ExternalFrame
        title="Charleston Pride 2023 Gold Membership"
        color="warning"
        iframeSrc="https://registration.planningpod.com/?ssid=NzkyMTIy"
      >
        <p className="lead">
          Interested in VIP access to our ticketed events? Missing our Friends
          of Pride program? Well, great news: We've created the Charleston Pride{" "}
          <strong>Gold Membership</strong>! The 2023 Charleston Pride{" "}
          <strong>Gold Membership</strong> is only <strong>$175</strong>.
          Benefits can include, but are not limited to: access to VIP bars,
          drink specials, early event entry, meet-and-greet opportunities, VIP
          exclusive events, and more!
        </p>
        <p className="lead">
          As a 2023 <strong>Gold Membership</strong> card holder, you not only
          get a gold metallic commemorative card to flaunt to family and
          friends, but you also get VIP access (plus benefits) for the remainder
          of the year! What events will have VIP access for the remainder of the
          year? In chronological order: Charleston Pride Pageant, Prism Party,
          Charleston Pride Festival, and a Gala-style event to kickstart our
          fundraising for 2024. We may even add a fifth VIP-exclusive event this
          Fall during Pride Week, so keep checking back!{" "}
          <strong>Gold Membership</strong> is first come, first serve. Limited
          quantities.
        </p>
      </ExternalFrame>
    </Layout>
  );
};

export default GoldMembership;
