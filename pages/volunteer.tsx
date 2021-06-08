import React from "react";
import Layout from "../components/elements/Layout/Layout";
import ExternalFrame from "../components/modules/ExternalFrame/ExternalFrame";

const Volunteer = () => {
  return (
    <Layout
      title="Volunteer with Charleston Pride"
      description="Volunteers don't just do the work - they make it work."
    >
      <ExternalFrame
        title="Volunteer with  Charleston Pride"
        color="primary"
        iframeSrc="https://docs.google.com/forms/d/e/1FAIpQLSfzVngmWTbpu2F65xD50vqYUue4K1UG8wAN9iKHap3qQlvlPA/viewform?embedded=true"
      ></ExternalFrame>
    </Layout>
  );
};

export default Volunteer;
