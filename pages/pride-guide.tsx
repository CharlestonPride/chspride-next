import { InferGetStaticPropsType } from "next";
import React from "react";
import Layout from "../components/elements/layout/layout";
import ObliqueHeader from "../components/modules/header/obliqueHeader";
import { Schedule, Event } from "../components/modules/prideGuide/schedule";

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625021244/stage_dbk4bc.jpg)`,
};

function PrideGuide({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="Charleston Pride Guide 2022"
      description="Charleston Pride Week - November 6-13, 2022"
    >
      <ObliqueHeader style={headerStyle}>
        <h1 className="text-gradient text-primary">Charleston Pride Guide</h1>
        <h1>Pride Week</h1>
        <h2>November 6-13, 2022</h2>
      </ObliqueHeader>
      <Schedule events={events} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://chspride-api.azurewebsites.net/api/Events");
  const events: Event[] = await res.json();

  console.log("retrievd");
  return {
    props: {
      events,
    },
  };
};

export default PrideGuide;
