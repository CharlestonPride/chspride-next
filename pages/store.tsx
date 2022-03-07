import React from "react";
import Layout from "../components/elements/layout/layout";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";

const Store = () => {
  return (
    <Layout
      title="Shop With Pride"
      description="Purchase Charleston Pride Merchandise"
    >
      <ExternalFrame
        title="Shop With Pride"
        color="primary"
        iframeSrc="https://app.printyourcause.com/campaign/charlestonpride"
      ></ExternalFrame>
    </Layout>
  );
};

export default Store;
