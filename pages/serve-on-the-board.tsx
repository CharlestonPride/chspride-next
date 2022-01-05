import React from "react";
import Layout from "../components/elements/Layout/Layout";
import ExternalFrame from "../components/modules/ExternalFrame/ExternalFrame";
import Link from "next/link";

const ServeOnTheBoard = () => {
  return (
    <Layout
      title="Serve on the Charleston Pride Board of Directors"
      description="Apply to serve on the Charleston Pride Board of Directors"
    >
      <ExternalFrame
        title="Serve on the Board of Directors"
        color="info"
        iframeSrc="https://docs.google.com/forms/d/e/1FAIpQLScbBqRFiax63FW3t_1toWWZaedKDDOCusB7aOwcgPvz-Ao-SQ/viewform?embedded=true"
        enabled={false}
        disabledMessage="We are not accepting new applications at this time."
      >
        <p className="lead">
          The Charleston Pride Board of Directors is ultimately responsible for
          the planning and execution of Charleston Pride Week, including but not
          limited to the Parade and Festival. As a member of the board, you will
          work with other board members to plan various fundraising events
          throughout the year; engage sponsors and community members; and plan
          and execute Pride Week events.
        </p>
        <p className="lead">
          As specified in the <Link href="/bylaws">bylaws</Link>, the Board of
          Directors includes the following permanent members: Chairperson,
          Vice-chairperson, Treasurer, Secretary, Director of Sponsorships,
          Festival Director, Director of Communications, and Director of
          Outreach. The Board may designate other board members as directors of
          various jurisdictions. The Board may allow some members to serve as
          members-at-large.
        </p>

        <p className="lead">
          To apply to serve on the board, fill out the form below. Applicants
          should familiarize themselves with the{" "}
          <Link href="/bylaws">bylaws</Link>.
        </p>
      </ExternalFrame>
    </Layout>
  );
};

export default ServeOnTheBoard;
