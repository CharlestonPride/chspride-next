import Head from "next/head";
import React from "react";
import Footer from "../../modules/Footer/Footer";
import Navbar from "../../modules/Navbar/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Layout({
  children,
  title = "Charleston Pride",
  description = "Charleston Pride",
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        {/* Constant Contact */}
        <script> var _ctct_m = "fc55b4bacaf81ea6e70101a81f49e6ae"; </script>
        <script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
        ></script>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
