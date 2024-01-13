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
      imageSrc="parade1_jxra2b"
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
      imageSrc="volunteer_rthkil"
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
      imageSrc="board_qqnhnx"
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
        { imageId: "store/shop1_ski6lo", alt: "pride shirt" },
        { imageId: "store/shop2_oejqfj", alt: "pet bandana" },
        { imageId: "store/shop3_lnk3cq", alt: "pride tank top" },
        { imageId: "store/shop4_nokbus", alt: "anniversary shirt" },
        { imageId: "store/shop5_sk3up1", alt: "water bottle" },
        { imageId: "store/shop6_tpy5yy", alt: "travel mug" },
        { imageId: "store/shop7_rr16tb", alt: "trucker hat" },
      ]}
      icon={"shopping-cart"}
      color="info"
      buttons={[{ href: "/store", text: "Shop" }]}
    ></ContentSectionImageGallery>
  );
};

const Breaker1 = () => {
  const itemA = { src: "venus_gjzkui", alt: "parade " };
  const itemB = { src: "prism2_tykmea", alt: "parade " };
  return (
    <GallerySectionDualImage
      itemA={itemA}
      itemB={itemB}
      variant={1}
    ></GallerySectionDualImage>
  );
};

const Breaker2 = () => {
  const itemA = { src: "parade4_ca3ohf", alt: "parade " };
  const itemB = { src: "parade5_z1dc89", alt: "parade " };
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
  const itemA = { src: "vertical3_acysj6", alt: "parade ", order: 1 };
  const itemB = { src: "vertical1_qbwp1d", alt: "parade ", order: 2 };
  const itemC = { src: "vertical2_u5oj5a", alt: "parade ", order: 3 };
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
      imageSrc="v1663270138/festival_ktw1d1"
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
    <GallerySectionSingleImage src="prism3_j4vabq"></GallerySectionSingleImage>
  );
};

const Breaker5 = () => {
  return (
    <div className="mt-n6">
      <GallerySectionSingleImage src="mlk_mvrqqc"></GallerySectionSingleImage>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="mt-n6">
      <GallerySectionSingleImage src="cscvj0"></GallerySectionSingleImage>
    </div>
  );
};

const Breaker6 = () => {
  const itemA = { src: "parade6_wlmi0c", alt: "parade " };
  const itemB = { src: "parade7_xbzzqw", alt: "parade " };
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
      imageSrc="tte1_oztwcd"
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
      imageSrc="festival1_lbf5mn"
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
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625013054/manson2_gjv7gs.jpg)`,
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
        let orientation = index % 2 ? Orientation.Right : Orientation.Left;
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
