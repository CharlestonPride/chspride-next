import React from "react";
import Layout from "../components/elements/layout/layout";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";
import Link from "next/link";
import Application from "../components/modules/application/application";

const ServeOnTheBoard = () => {
  return (
    <Layout
      title="Serve on the Charleston Pride Board of Directors"
      description="Apply to serve on the Charleston Pride Board of Directors"
    >
      <Application />
    </Layout>
  );
};

export default ServeOnTheBoard;
