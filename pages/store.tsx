import React from "react";
import Layout from "../components/elements/Layout/Layout";
import ExternalFrame from "../components/modules/ExternalFrame/ExternalFrame";

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
