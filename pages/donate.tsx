import React from "react";
import Layout from "../components/elements/Layout/Layout";
import ExternalFrame from "../components/modules/ExternalFrame/ExternalFrame";

const Donate = () => {
  return (
    <Layout
      title="Donate to Charleston Pride"
      description="Make a Donation to Charleston Pride"
    >
      <ExternalFrame
        title="Donate to Charleston Pride"
        color="info"
        iframeSrc="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/donate.html"
      >
        <p>
          A lot of time, effort, and money goes into organizing and putting on
          Charleston Pride. Charleston Pride Festival, Inc is funded strictly
          through sponsors and funds raised at events.
        </p>
        <p>
          Due to this fact, we have to raise money throughout the year in order
          for Charleston Pride to be successful. If you cannot make it to one of
          our fundraisers, you can now donate here! Also check out our monthly
          donor program, Friends of Pride.
        </p>
      </ExternalFrame>
    </Layout>
  );
};

export default Donate;