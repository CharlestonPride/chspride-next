import React from "react";
import Layout from "../components/elements/layout/layout";
import ContentSectionStackedImage from "../components/modules/contentSection/contentSectionStackedImage";
import Header from "../components/modules/header/header";
import { Orientation } from "../types";
import {
  faHandHoldingUsd,
  faUserFriends,
  faShoppingCart,
  faHandsHelping,
  faHeart,
  faSmile,
  faGrinHearts,
  faFlag,
  faCrown,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import ContentSectionTwoColumn from "../components/modules/contentSection/contentSectionTwoColumn";
import SocialBar from "../components/modules/social/socialBar";
import ContentSectionImageGallery from "../components/modules/contentSection/contentSectionImageGallery";
import GallerySectionDualImage from "../components/modules/gallerySection/gallerySectionDualImages";
import GallerySectionTripleImages from "../components/modules/gallerySection/gallerySectionTripleImages";
import GallerySectionSingleImage from "../components/modules/gallerySection/gallerySectionSingleImage";
import Lead from "../components/elements/lead/lead";
import { Col, Container, Row } from "react-bootstrap";
import CloudImage from "../components/elements/cloudImage/cloudImage";

const DonateSection = () => {
  return (
    <ContentSectionStackedImage
      title="Donate"
      color="warning"
      description="Help Make Charleston Pride a Reality!"
      action={{ href: "/donate", text: "Donate" }}
      imageSrc="parade1_jxra2b"
      icon={faHandHoldingUsd}
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

const FopSection = () => {
  return (
    <ContentSectionTwoColumn
      title="Friends of Pride"
      color="danger"
      description="Let's be Friends"
      subDescription="(with benefits)"
      action={{ href: "/friends-of-pride", text: "More Info" }}
      imageSrc="prism1_w4rd0d"
      icon={faUserFriends}
      orientation={Orientation.Left}
    >
      <Lead>
        Become an official Friend of Pride through joining our monthly donor
        program. Friends of Pride get exclusive access to many of our events and
        some extra perks along the way.
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const Volunteer = () => {
  return (
    <ContentSectionStackedImage
      title="Volunteer with Pride"
      color="info"
      imageSrc="volunteer_rthkil"
      icon={faHandsHelping}
      orientation={Orientation.Left}
      action={{ href: "/volunteer", text: "Volunteer" }}
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
      icon={faGrinHearts}
      orientation={Orientation.Left}
      action={{ href: "/serve-on-the-board", text: "Apply" }}
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
      icon={faShoppingCart}
      color="info"
      action={{ href: "/store", text: "Shop" }}
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
    <GallerySectionDualImage
      itemA={itemA}
      itemB={itemB}
      variant={2}
    ></GallerySectionDualImage>
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
      color="warning"
      imageSrc="v1663270138/festival_ktw1d1"
      icon={faFlag}
      orientation={Orientation.Right}
      action={{ href: "/become-a-sponsor", text: "Sponsorship Opportunities" }}
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
      icon={faHeart}
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
      icon={faSmile}
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

const Tacos = () => {
  return (
    <ContentSectionTwoColumn
      title="Taco’s and Tattas!"
      color="danger"
      description="Presented by Charleston Pride and Taco Boy Nexton"
      action={{ href: "/tacos-and-tattas", text: "more info" }}
      imageSrc="sponsor/tacoboy"
      icon={faTicket}
      orientation={Orientation.Right}
      disableShadow={true}
      subDescription="Taco Boy Next, Sept 24 @ 9:30pm | 18+"
      focusContent={true}
    >
      <Lead>
        Join Charleston Pride and the greater Nexton/Summerville community for a
        night of fun with the local LGBTQIA+ community. Drag show, drink
        specials and dance party with many more surprises in store!
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const Pageant = () => {
  return (
    <ContentSectionTwoColumn
      title="Charleston Pride Pageant: Renaissance Ball"
      color="primary"
      description="The Hive, Oct 7 2022 @ 9pm"
      action={{ href: "/pageant", text: "more info" }}
      imageSrc="sponsor/hive_hfcvo0"
      icon={faCrown}
      orientation={Orientation.Right}
      disableShadow={true}
    ></ContentSectionTwoColumn>
  );
};

const Prism = () => {
  return (
    <ContentSectionTwoColumn
      title="Prism (Rescheduled from Nov 11th)"
      color="primary"
      imageSrc="2022/update_fya6u0"
      icon={faFlag}
      orientation={Orientation.Left}
      focusContent={true}
      description="Saturday, November 12th"
      subDescription="The Refinery (1640 Meeting Street Rd)"
      action={{ href: "/pride-guide", text: "Pride Guide" }}
    >
      <Lead>
        Charleston Pride's premier party is back and better than ever! Celebrate
        with 5 hours of dancing, drag, and drinking on November 12, 2022, from
        6-11 pm at The Refinery. Food trucks will be on-site throughout the
        event.
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const Festival = () => {
  return (
    <ContentSectionTwoColumn
      title="Charleston Pride Festival"
      color="info"
      imageSrc="2022/festival_ciz0qd"
      icon={faFlag}
      orientation={Orientation.Right}
      focusContent={true}
      description="Saturday, November 12th"
      subDescription="The Refinery (1640 Meeting Street Rd)"
      action={{ href: "/pride-guide", text: "Pride Guide" }}
    >
      <Lead>
        The Festival is back! For more than a decade, Charleston Pride has been
        serving, empowering, and promoting the well-being and visibility of
        LGBTQIA+ and allied communities. We are so excited about the comeback of
        one of the largest Pride celebrations in the Lowcountry, the Charleston
        Pride Festival, on November 12, 2022, from 12-6 pm at The Refinery. This
        year's event is full of fun for all ages including a curated selection
        of live entertainment, local food trucks, specialty drinks, and amazing
        vendors! You don't want to miss this!
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const Maps = () => {
  return (
    <Container>
      <Row>
        <h3 className={"text-gradient mb-0 text-danger text-center"}>Maps</h3>
        <Col lg="6">
          <CloudImage
            imageId="2022/festivalmap_iyosfv"
            className="img-fluid shadow m-3"
          />
        </Col>
        <Col lg="6">
          <CloudImage
            imageId="2022/prismmap_ccslog"
            className="img-fluid shadow m-3"
          />
        </Col>
      </Row>
    </Container>
  );
};

const Parade = () => {
  return (
    <ContentSectionTwoColumn
      title="Parade Registration Now Open"
      color="info"
      description="Register Today!"
      action={{ href: "/parade-registration", text: "Register" }}
      imageSrc="parade_bzmuos"
      icon={faFlag}
      orientation={Orientation.Left}
    >
      <p>
        On <strong>Saturday, June 3rd, 2023</strong> we are excited to celebrate
        Pride with our annual Pride Parade in historic Downtown Charleston!
        Whether you and your organization would like to join and walk in the
        parade, ride along in a vehicle, or create a unique themed float, all
        are welcome to take part in the festivities.
      </p>
    </ContentSectionTwoColumn>
  );
};

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625013054/manson2_gjv7gs.jpg)`,
  backgroundSize: `cover`,
  backgroundPosition: `center 20%`,
};

function Home() {
  return (
    <Layout>
      <Header style={headerStyle} />
      <Parade />
      {/* <Festival />
      <Prism />
      <Maps /> */}
      <Sponsorship />
      {/* <SponsorCarousel sponsors={sponsors} /> */}
      {/* <Pageant /> */}
      <Serve />
      <DonateSection />
      <Breaker3 />
      {/* <FopSection /> */}
      <SocialBar />
      <Volunteer />
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

// export const getStaticProps: GetStaticProps<{
//   sponsors: Sponsor[];
// }> = async () => {
//   const res = await fetch(
//     "https://chspride-api.azurewebsites.net/api/Sponsors"
//   );
//   const sponsors: Sponsor[] = await res.json();
//   console.log("retrieved sponsors:" + sponsors.length);
//   return {
//     props: {
//       sponsors,
//     },
//   };
// };

export default Home;
