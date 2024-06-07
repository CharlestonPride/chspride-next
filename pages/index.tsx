import React from "react";
import Layout from "../components/elements/layout/layout";
import ContentSectionStackedImage from "../components/modules/contentSection/contentSectionStackedImage";
import Header from "../components/modules/header/header";
import { Orientation, ThemeColors } from "../types";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import ContentSectionTwoColumn from "../components/modules/contentSection/contentSectionTwoColumn";
import SocialBar from "../components/modules/social/socialBar";
import ContentSectionImageGallery from "../components/modules/contentSection/contentSectionImageGallery";
import GallerySectionDualImage from "../components/modules/gallerySection/gallerySectionDualImages";
import GallerySectionTripleImages from "../components/modules/gallerySection/gallerySectionTripleImages";
import GallerySectionSingleImage from "../components/modules/gallerySection/gallerySectionSingleImage";
import Lead from "../components/elements/lead/lead";
import { InferGetStaticPropsType } from "next";
import SponsorCarousel from "../components/modules/sponsor/sponsorCarousel";
import { getSponsors, getHomePage } from "../lib/prepr";

const DonateSection = () => {
  return (
    <ContentSectionStackedImage
      title="Donate"
      color="warning"
      description="Help Make Charleston Pride a Reality!"
      buttons={[{ href: "/donate", text: "Donate" }]}
      imageSrc="/2ldj4xg5cxmn-parade1-jxra2b.jpg"
      icon={"hand-holding-usd"}
      orientation={Orientation.Left}
    >
      <Lead>
        A lot of time, effort, and money goes into organizing and putting on
        Charleston Pride. Charleston Pride Festival, Inc is funded strictly
        through sponsors and funds raised at events.
      </Lead>
      <Lead>
        Due to this fact, we have to raise money throughout the year in order
        for Charleston Pride to be successful. If you cannot make it to one of
        our fundraisers, you can now donate here! Also check out our monthly
        donor program, Friends of Pride.
      </Lead>
    </ContentSectionStackedImage>
  );
};

const Volunteer = () => {
  return (
    <ContentSectionStackedImage
      title="Volunteer with Pride"
      color="info"
      imageSrc="/76dv4zbgykw3-volunteer-rthkil"
      icon={"handshake"}
      orientation={Orientation.Left}
      buttons={[{ href: "/volunteer", text: "Volunteer" }]}
    >
      <Lead>
        As a volunteer, you will help ensure the success of events throughout
        the year including fundraising events that will fund Pride Week.
      </Lead>
    </ContentSectionStackedImage>
  );
};

const Serve = () => {
  return (
    <ContentSectionTwoColumn
      title="Serve on the Board"
      color="danger"
      imageSrc="/e2ero0hm9fj-board-qqnhnx.jpg"
      icon={"grin-hearts"}
      orientation={Orientation.Left}
      buttons={[{ href: "/serve-on-the-board", text: "Apply" }]}
    >
      <Lead>
        As a member of the board, you will work with other board members to plan
        various fundraising events throughout the year; engage sponsors and
        community members; and plan and execute Pride Week events.
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const Store = () => {
  return (
    <ContentSectionImageGallery
      title="Shop With Pride"
      description="Purchase Charleston Pride Merchandise"
      items={[
        { imageId: "/5887clohmcld-shop1-ski6lo.png", alt: "pride shirt" },
        { imageId: "/1gwus7omyse9-shop2-oejqfj.png", alt: "pet bandana" },
        { imageId: "/3mn67n3tvfpd-shop3-lnk3cq.png", alt: "pride tank top" },
        { imageId: "/2ru42z1l7n7l-shop4-nokbus.png", alt: "anniversary shirt" },
        { imageId: "/3l8y2421sg8y-shop5-sk3up1.png", alt: "water bottle" },
        { imageId: "/3zvvjjnxfp6q-shop6-tpy5yy.png", alt: "travel mug" },
        { imageId: "/3zvvjjnxfp6q-shop6-tpy5yy.png", alt: "trucker hat" },
      ]}
      icon={"shopping-cart"}
      color="info"
      buttons={[{ href: "/store", text: "Shop" }]}
    ></ContentSectionImageGallery>
  );
};

const Breaker1 = () => {
  const itemA = { src: "/6a24a2vobvwi-venus-gjzkui.jpg", alt: "parade " };
  const itemB = { src: "/6a24a2vobvwi-venus-gjzkui.jpg", alt: "parade " };
  return (
    <GallerySectionDualImage
      itemA={itemA}
      itemB={itemB}
      variant={1}
    ></GallerySectionDualImage>
  );
};

const Breaker2 = () => {
  const itemA = { src: "/4ba7qqyun41r-parade4-ca3ohf.jpg", alt: "parade " };
  const itemB = { src: "/11if9hl8fyv4-parade5-z1dc89.jpg", alt: "parade " };
  return (
    <div className="my-5 mt-lg-10">
      <GallerySectionDualImage
        itemA={itemA}
        itemB={itemB}
        variant={2}
      ></GallerySectionDualImage>
    </div>
  );
};

const Breaker3 = () => {
  const itemA = { src: "/6eqnr04ghiyr-vertical3-acysj6.jpg", alt: "parade ", order: 1 };
  const itemB = { src: "/1328egud0qbn-vertical1-qbwp1d.jpg", alt: "parade ", order: 2 };
  const itemC = { src: "/4a80r2yvgchv-vertical2-u5oj5a.jpg", alt: "parade ", order: 3 };
  return (
    <GallerySectionTripleImages
      itemA={itemA}
      itemB={itemB}
      itemC={itemC}
      color="primary"
    ></GallerySectionTripleImages>
  );
};

const Sponsorship = () => {
  return (
    <ContentSectionTwoColumn
      title="Become a Sponsor"
      color="success"
      imageSrc="/401gvr8tv4xm-festival-ktw1d1.jpg"
      icon={"flag"}
      orientation={Orientation.Right}
      buttons={[
        { href: "/become-a-sponsor", text: "Sponsorship Opportunities" },
      ]}
    >
      <Lead>
        Sponsorship is a great way to promote your commitment to equal rights
        for all! The Charleston Pride Parade, Week, and Festival bring together
        thousands of participants and attendees to celebrate the LGBTQ+
        community each year. These events provide a great opportunity to partner
        with local businesses, non-profits, and other LGBTQIA+ organizations
        whose mission is to bring awareness, promote diversity, and uplift the
        community. This year, Charleston Pride will be celebrating its 13th
        anniversary here in the Lowcountry and we would love to secure your
        support through Sponsorship!
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const Breaker4 = () => {
  return (
    <GallerySectionSingleImage src="/3evnuzc4hrnl-prism3-j4vabq.jpg"></GallerySectionSingleImage>
  );
};

const Breaker5 = () => {
  return (
    <div className="mt-n6">
      <GallerySectionSingleImage src="/42nydosyqdrz-mlk-mvrqqc.jpg"></GallerySectionSingleImage>
    </div>
  );
};

const Breaker6 = () => {
  const itemA = { src: "/21kpykd589c1-parade6-wlmi0c.jpg", alt: "parade " };
  const itemB = { src: "/5jcbyprddfsx-parade7-xbzzqw.jpg", alt: "parade " };
  return (
    <div className="mt-n6">
      <GallerySectionDualImage
        itemA={itemA}
        itemB={itemB}
        variant={1}
      ></GallerySectionDualImage>
    </div>
  );
};

const OurMission = () => {
  return (
    <ContentSectionTwoColumn
      title="Our Mission"
      color="primary"
      imageSrc="/i42g6e9odab-tte1-oztwcd.jpg"
      icon={"heart"}
      orientation={Orientation.Right}
    >
      <Lead>
        Our mission is to promote the visibility of the LGBTQ community by
        educating society, honoring our heritage, advocating for our culture,
        and celebrating our diverse society.
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const OurPurpose = () => {
  return (
    <ContentSectionStackedImage
      title="Our Purpose"
      color="success"
      imageSrc="/28wt7lnzj41r-festival1-lbf5mn.jpg"
      icon={"smile"}
      orientation={Orientation.Right}
    >
      <Lead>
        Our purpose is to highlight the uniqueness and diversity of our
        community through distinct events throughout the year promoting our
        history and culture, including the annual Charleston Pride Parade and
        Festival.
      </Lead>
    </ContentSectionStackedImage>
  );
};

const headerStyle = {
  backgroundImage: `url(https://charleston-pride.stream.prepr.io//7kefmbxfhrtq-recommended-cover.jpg)`,
  backgroundSize: `cover`,
  backgroundPosition: `center 20%`,
};

function Home({
  sponsors,
  homePage,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title={homePage.seo.title}
      description={homePage.seo.description}
      imageUrl={homePage.seo.social_media_image[0].url}
    >
      <Header style={headerStyle} {...homePage} theme="primary" />
      {homePage.sections.map((section, index) => {
        let orientation= index % 2 ? Orientation.Right : Orientation.Left;
        if(section.orientation){
            orientation = section.orientation == "RIGHT" ? Orientation.Right : Orientation.Left;
        }
        if (section.show_background_stack) {
          return (
            <ContentSectionStackedImage
              key={index}
              title={section.title}
              description={section.subtitle}
              color={section.theme as ThemeColors}
              imageSrc={section.image[0].url}
              icon={section.icon as IconName}
              orientation={orientation}
              buttons={section.buttons}
            >
              <div
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: section.description,
                }}
              ></div>
            </ContentSectionStackedImage>
          );
        }
        return (
          <ContentSectionTwoColumn
            key={index}
            title={section.title}
            description={section.subtitle}
            color={section.theme as ThemeColors}
            imageSrc={section.image[0].url}
            icon={section.icon as IconName}
            orientation={orientation}
            focusContent={section.focus_on_content}
            disableShadow={!section.show_image_shadow}
            buttons={section.buttons}
            images={section.image.slice(1)}
          >
            <div
              className="lead"
              dangerouslySetInnerHTML={{
                __html: section.description,
              }}
            ></div>
          </ContentSectionTwoColumn>
        );
      })}
      {homePage.show_sponsors_section && <SponsorCarousel sponsors={sponsors} />}
      {homePage.show_sponsorships_section && <Sponsorship />}
      {homePage.show_apply_section && <Serve />}
      {homePage.show_donate_section && <DonateSection />}
      <Breaker3 />
      <SocialBar />
      {homePage.show_volunteer_section && <Volunteer />}
      <Breaker4 />
      <Store />
      <Breaker1 />
      <OurMission />
      <OurPurpose />
      <div className="my-5 mt-lg-10">
        <Breaker2 />
      </div>
      <Breaker5 />
      <Breaker6 />
    </Layout>
  );
}

export async function getStaticProps() {
  const sponsors = await getSponsors();
  const homePage = await getHomePage();

  return {
    props: { sponsors, homePage },
  };
}

export default Home;
