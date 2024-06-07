import Head from "next/head";
import React, { ReactElement } from "react";
import Footer from "../../modules/footer/footer";
import MainNavBar from "../../modules/navbar/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Layout({
  children,
  title = "Charleston Pride",
  description = "Our mission is to promote the visibility of the LGBTQ community in Charleston and the greater Southeast region. We strive to highlight the uniqueness and diversity of our community through distinct programming and events throughout the year promoting our history and culture. Charleston Pride seeks to educate society, honor our heritage, promote our culture, and celebrate our people.",
  imageUrl = "https://charleston-pride.stream.prepr.io//1204yerlb7ud-chspride-logo-4c-wsymbol-pkar3i.jpg",
}) {
  return (
    <>
      <Head>
        <script
          key="ga_script"
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-120387138-2"
        ></script>
        <script
          key="ga_init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-120387138-2');`,
          }}
        />

        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="description" content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://charlestonpride.org" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {imageUrl && <meta property="og:image" content={imageUrl} />}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://charlestonpride.org" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {imageUrl && <meta property="twitter:image" content={imageUrl} />}

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
      </Head>
      <header>
        <MainNavBar />
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
