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
import Smile from "../components/modules/smile/smile";
import ContentSectionImageGallery from "../components/modules/contentSection/contentSectionImageGallery";
import GallerySectionDualImage from "../components/modules/gallerySection/gallerySectionDualImages";
import GallerySectionTripleImages from "../components/modules/gallerySection/gallerySectionTripleImages";
import GallerySectionSingleImage from "../components/modules/gallerySection/gallerySectionSingleImage";
import SponsorCarousel from "../components/modules/sponsor/sponsorCarousel";
import Lead from "../components/elements/lead/lead";

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
      <p>
        A lot of time, effort, and money goes into organizing and putting on
        Charleston Pride. Charleston Pride Festival, Inc is funded strictly
        through sponsors and funds raised at events.
      </p>
      <p className="d-none d-md-block">
        Due to this fact, we have to raise money throughout the year in order
        for Charleston Pride to be successful. If you cannot make it to one of
        our fundraisers, you can now donate here! Also check out our monthly
        donor program, Friends of Pride.
      </p>
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
      <p>
        Become an official Friend of Pride through joining our monthly donor
        program. Friends of Pride get exclusive access to many of our events and
        some extra perks along the way.
      </p>
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
      <p className="lead">
        As a volunteer, you will help ensure the success of events throughout
        the year including fundraising events that will fund Pride Week.
      </p>
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
      <p className="lead">
        As a member of the board, you will work with other board members to plan
        various fundraising events throughout the year; engage sponsors and
        community members; and plan and execute Pride Week events.
      </p>
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
      orientation={Orientation.Left}
      action={{ href: "/become-a-sponsor", text: "Sponsorship Opportunities" }}
    >
      <p className="lead">
        Sponsorship is a great way to promote your commitment to equal rights
        for all! The annual Charleston Pride Festival is the best-attended event
        during Pride Week and it provides an opportunity to partner with local
        businesses, non-profits, and other LGBTQIA+ organizations whose mission
        is to bring awareness, promote diversity, and uplift the community. This
        year, the Charleston Pride Festival will be celebrating its 12th
        anniversary here in the Lowcountry and we would love to secure your
        support through Sponsorship!
      </p>
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
      <p className="lead">
        Our mission is to promote the visibility of the LGBTQ community by
        educating society, honoring our heritage, advocating for our culture,
        and celebrating our diverse society.
      </p>
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
      <p className="lead">
        Our purpose is to highlight the uniqueness and diversity of our
        community through distinct events throughout the year promoting our
        history and culture, including the annual Charleston Pride Parade and
        Festival.
      </p>
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
      <p>
        Join Charleston Pride and the greater Nexton/Summerville community for a
        night of fun with the local LGBTQIA+ community. Drag show, drink
        specials and dance party with many more surprises in store!
      </p>
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

const Festival = () => {
  return (
    <ContentSectionTwoColumn
      title="Charleston Pride Festival"
      color="info"
      imageSrc="2022/lvplxl"
      icon={faFlag}
      orientation={Orientation.Left}
      focusContent={true}
      description="Sunday, November 13th"
      subDescription="Riverfront Park, North Charleston"
      action={{ href: "/vendor-registration", text: "vendor registration" }}
    >
      <Lead>
        The Charleston Pride Festival will be held at Riverfront Park in North
        Charleston on Sunday, November 13, 2022. We are excited to bring the
        festival back after last year’s cancellation, and invite you to join
        Charleston’s largest Pride event of the year.
      </Lead>
    </ContentSectionTwoColumn>
  );
};

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625013054/manson2_gjv7gs.jpg)`,
  backgroundSize: `cover`,
  backgroundPosition: `center 20%`,
};

const Home = () => {
  return (
    <Layout>
      <Header style={headerStyle} />
      <Festival />
      <Sponsorship />
      <SponsorCarousel />
      <Pageant />
      {/* <Schedule /> */}
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
      <Smile />
      <Breaker2 />
      <Breaker5 />
      <Breaker6 />
    </Layout>
  );
};

export default Home;
