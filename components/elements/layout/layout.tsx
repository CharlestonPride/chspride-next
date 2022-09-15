import Head from "next/head";
import React from "react";
import Footer from "../../modules/footer/footer";
import MainNavBar from "../../modules/navbar/navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Layout({
  children,
  title = "Charleston Pride",
  description = "Charleston Pride Week November 6-13 2022",
  imageUrl = "https://res.cloudinary.com/charlestonpride-org/image/upload/c_lpad,g_center,h_628,w_1200/v1625023527/logo_qxgcvs.jpg",
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
        <meta property="og:image" content={imageUrl} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://charlestonpride.org" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />

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
