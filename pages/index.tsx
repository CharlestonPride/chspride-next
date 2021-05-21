import Head from "next/head";
import React from "react";
import Alert from "../components/elements/Alert/Alert";
import {
  Button,
  GradientButton,
  OutlineButton,
} from "../components/elements/Button/Button";
import Layout from "../components/elements/Layout/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charleston Pride</title>
        <meta name="description" content="Charleston Pride" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <h1>Charleston Pride</h1>

        <Alert color="success">
          <strong>Success!</strong> This is a primary alert—check it out!
        </Alert>
        <Button color="primary">A Button!</Button>
        <GradientButton color="warning">A Button!</GradientButton>
        <OutlineButton color="danger">Danger Close</OutlineButton>
      </Layout>
    </div>
  );
}
